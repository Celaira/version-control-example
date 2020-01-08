const db = require('../dbConfig');


module.exports = {
    findById,
    findByUsername,
    findBy,
    add

};

function findById(id) {
  return db("users")
    .select("id", "username")
    .where("id", id);
}

function findByUsername(username) {
  return db("users").where(username);
}

function findBy(filter) {
    return db("users").where(filter);
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}