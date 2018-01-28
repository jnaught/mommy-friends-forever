require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const controller = require("./controller");

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);
app.use(express.static(`${__dirname}/../build`));
app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 52600 * 60 * 1000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientSecret: process.env.CLIENT_SECRET,
      clientID: process.env.CLIENT_ID,
      callbackURL: "/login",
      scope: "openid profile"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      // console.log("authStrat: ", profile);
      app
        .get("db")
        .getUser(profile.id)
        .then(response => {
          // console.log(response);
          if (!response[0]) {
            console.log("createUSer: ");
            app
              .get("db")
              .createUser([
                profile.id,
                profile.name.givenName,
                profile.name.familyName,
                profile.displayName,
                profile.picture
              ])
              .then(create => {
                return done(null, profile);
              });
          } else {
            // console.log('existing"');
            return done(null, response[0]);
          }
        });
      // return done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/Home",
    failureRedirect: "http://localhost:3000/login"
  })
);

app.get("/api/me", (req, res, next) => {
  if (req.user) res.json(req.user);
  else res.redirect("/login");
});
// ------------------------ [users]---------------------

app.post("/api/createUser/", controller.createUser);
app.get("/api/getUser/", controller.getUser);
// app.get("/api/getUser/:uid", controller.getUser);
app.get("/api/pic/", controller.getUserPic);
app.put("/api/updateUser/", controller.updateUser);
app.put("/api/updateEmail/", controller.updateEmail);
app.delete("/api/deleteUser/:id", controller.deleteUser);

// ------------------------ [post]---------------------

app.post("/api/createPost/", controller.createPost);
app.get("/api/getPost/", controller.getPost);
app.get("/api/allPosts/", controller.getAllPost);

app.get("/api/recentPosts/", controller.getRecentPost);
app.delete("/api/deletePost/:id", controller.deletePost);
app.get("/api/authorID/", controller.getAuthorID);

// ------------------------ [profiles---------------------

// app.post("/api/profile/", controller.updateProfile);
// app.get("/api/getProfile/", controller.getProfile);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`App listening on port ${process.env.PORT || 3001}!`);
});
