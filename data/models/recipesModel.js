const db = require("../dbConfig");

module.exports = {
  findById,
  findByTitle,
  add,
  update,
  remove
};

function findById(id) {
  return db("recipes").where(id);
}

function findByTitle(title) {
  return db("recipes").where(title);
}

function add(recipe) {
  // TODO: add code here
  const {
      author_id,
      title,
      img,
      prep_time,
      cook_time,
      notes,
      instructions
  }

  db("recipes")
    .insert(author_id, title, img, prep_time, cook_time, notes, "id")
    .then(rec => {
        console.log(rec)
        const InstEntries = instructions.map((inst, i) => {
            return { step_number: i +1, body: inst, recipe_id: rec.id }
        })
    });
}

function update(changes) {
  // TODO: add code here
}

function remove(id) {
  // TODO: add code here
}
