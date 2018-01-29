module.exports = {
  createUser: (req, res, next) => {
    const db = req.app.get("db");
    const { id, firstname, lastname, displayname, picture } = req.body;
    console.log("createUser: ", id, firstname, lastname, displayname, picture);
    db
      .createUser([id, firstname, lastname, displayname, picture])
      .then(() => res.status(200).send())
      .catch(console.log);
  },
  getUser: (req, res, next) => {
    const db = req.app.get("db");
    const { params } = req.body;
    console.log(req.body);

    db
      .getUser(req.params.id)
      .then(user => {
        res.status(200).send(user);
      })
      .catch(console.log);
  },
  updateEmail: (req, res, next) => {
    console.log("updateEmail HIT!");
    const db = req.app.get("db");
    console.log(req.body);
    const { email, displayname, user_id } = req.body;
    console.log("updateEmail: ", email, displayname, user_id);
    db
      .updateEmail(email, displayname, user_id)
      .then(() => res.status(200).send())
      .catch(console.log);
  },
  updateUser: (req, res, next) => {
    console.log("updateUser HIT!");
    const db = req.app.get("db");
    console.log(req.body);
    const { area, children, playdate, mommydate, flavor, user_id } = req.body;
    console.log(
      "updateUser: ",
      area,
      children,
      playdate,
      mommydate,
      flavor,
      user_id
    );
    db
      .updateUser(area, children, playdate, mommydate, flavor, user_id)
      .then(() => res.status(200).send())
      .catch(console.log);
  },
  deleteUser: (req, res, next) => {
    const db = res.app.get("db");
    db
      .deleteUser(params.id)
      .then(() => res.status(200).json())
      .catch(console.log);
  },
  createPost: (req, res, next) => {
    const db = req.app.get("db");
    const { putpost } = req.body;
    // console.log(req.body);
    db
      .createPost([putpost, req.user.user_id])
      .then(() => res.status(200).send())
      .catch(console.log);
  },
  getPost: (req, res, next) => {
    console.log("GetPost HIT");
    const db = req.app.get("db");
    const { params } = req;
    console.log(req.body);

    db
      .getPost(req.params.id)
      .then(user => {
        res.status(200).send(user);
      })
      .catch(console.log);
  },
  getRecentPost: (req, res, next) => {
    const db = req.app.get("db");
    const { params } = req;
    console.log(req.body);

    db
      .getRecentPost(req.params.id)
      .then(user => {
        res.status(200).send(user);
      })
      .catch(console.log);
  },
  getAllPost: (req, res, next) => {
    const db = req.app.get("db");
    const { params } = req;
    console.log(req.body);

    db
      .getAllPost(req.params.id)
      .then(user => {
        res.status(200).send(user);
      })
      .catch(console.log);
  },
  updatePost: (req, res, next) => {
    const db = req.app.get("db");
    db
      .updatePost([params.id, query.desc])
      .then(() => res.status(200).send())
      .catch(console.log);
  },
  deletePost: (req, res, next) => {
    const db = res.app.get("db");
    db
      .deletePost(params.id)
      .then(() => res.status(200).json())
      .catch(console.log);
  },
  getUserPic: (req, res, next) => {
    console.log("hit: getUserPic", req.body);
    const db = req.app.get("db");
    const { params } = req;
    console.log(req.body);

    db
      .getUserPic(req.params.id)
      .then(user => {
        res.status(200).send(user);
      })
      .catch(console.log);
  },
  getAuthorID: (req, res, next) => {
    const db = req.app.get("db");
    const { params } = req;
    console.log(req.body);

    db
      .getAuthorID(req.params.id)
      .then(user => {
        res.status(200).send(user);
      })
      .catch(console.log);
  }
  // getProfile: (req, res, next) => {
  //   const db = req.app.get("db");
  //   const { params } = req;
  //   console.log(req.body);

  //   db
  //     .getProfile(req.params.id)
  //     .then(user => {
  //       res.status(200).send(user);
  //     })
  //     .catch(console.log);
  // },
  // updateProfile: (req, res, next) => {
  //   const { area, children, playdate, mommydate, flavor } = req.body;
  //   const db = req.app.get("db");
  //   db
  //     .updateProfile([area, children, playdate, mommydate, flavor])
  //     .then(() => res.status(200).send())
  //     .catch(console.log);
  // }
};
