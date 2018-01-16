module.exports = {
  createUser: (req, res, next) => {
    const db = req.app.get("db");
    const { id, firstname, lastname, displayname, picture } = req.body;
    console.log(id, firstname, lastname, displayname, picture);
    db
      .createUser([id, firstname, lastname, displayname, picture])
      .then(() => res.status(200).send())
      .catch(console.log);
  },
  getUser: (req, res, next) => {
    const db = req.app.get("db");
    const { params } = req;
    // console.log(params);
    db
      .getUser(req.params.uid)
      .then(user => {
        res.status(200).send(user);
      })
      .catch(console.log);
  },
  updateUser: (req, res, next) => {
    const db = req.app.get("db");
    db
      .updateUser([params.id, query.desc])
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
  }
};
