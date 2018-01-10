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
      .read_user(req.params.id)
      .then(user => {
        res.status(200).send(user);
      })
      .catch(console.log);
  },
  update: (req, res, next) => {
    const db = req.app.get("db");
    db
      .updateProfile([params.id, query.desc])
      .then(() => res.status(200).send())
      .catch(console.log);
  },
  delete: (req, res, next) => {
    const db = res.app.get("db");
    db
      .deleteProfile(params.id)
      .then(() => res.status(200).json())
      .catch(console.log);
  }
};
