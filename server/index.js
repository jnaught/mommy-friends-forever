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
      console.log(profile);
      app
        .get("db")
        .getUser(profile.id)
        .then(response => {
          if (!response[0]) {
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
    successRedirect: "http://localhost:3000/Dashboard",
    failureRedirect: "http://localhost:3000/login"
  })
);

app.get("/api/me", (req, res, next) => {
  if (req.user) res.json(req.user);
  else res.redirect("/login");
});

app.post("/api/user", controller.createUser);
app.get("/api/user/:id", controller.getUser);
app.put("/api/user/:id", controller.updateUser);
app.delete("/api/user/:id", controller.deleteUser);
app.post("/api/post", controller.createPost);
app.get("/api/post/", controller.getPost);
app.delete("/api/post/:id", controller.deletePost);

app.listen(process.env.PORT || 3001, () => {
  console.log(`App listening on port ${process.env.PORT || 3001}!`);
});
