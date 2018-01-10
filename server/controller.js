module.exports = {
  createUser: (req, res, next) => {
    const db = req.app.get("db");
    const { firstName, lastName, age, displayName, picture } = req.body;
    db
      .createUser([firstName, lastName, age, displayName, picture])
      .then(() => res.status(200).send())
      .catch(console.log);
  },
  getUser: (req, res, next) => {
    const db = req.app.get("db");
    const { params } = req;
    console.log(params);
    db
      .getUser(req.params.id)
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
  }
  //   , createPost: (req, res, next) => {
  //     const db = req.app.get("db");
  //     const { post } = req.body;
  //     db
  //       .createPost(post)
  //       .then(() => res.status(200).send())
  //       .catch(console.log);
  //   },
  //   getPost: (req, res, next) => {
  //     const db = req.app.get("db");
  //     const { params } = req;

  //     db
  //       .getPost(req.params.id)
  //       .then(post => {
  //         res.status(200).send(user);
  //       })
  //       .catch(console.log);
  //   },
  //   updatePost: (req, res, next) => {
  //     const db = req.app.get("db");
  //     db
  //       .updatePost([params.id, query.desc])
  //       .then(() => res.status(200).send())
  //       .catch(console.log);
  //   },
  //   deletePost: (req, res, next) => {
  //     const db = res.app.get("db");
  //     db
  //       .deletePost(params.id)
  //       .then(() => res.status(200).json())
  //       .catch(console.log);
  //   }
};
