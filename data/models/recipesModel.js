const db = require("../dbConfig");

module.exports = {
  find,
  findById,
  findByTitle,
  findByRecipeId,
  add,
  update,
  remove
};

function find() {
  return db('recipes');
}

function findById(id) {
  return db("recipes").where("id", id).first();
}

function findByTitle(title) {
  return db("recipes").where(title);
}

function findByRecipeId(RecipeId) {
  return db('instructions').select('*').where("recipe_id", RecipeId)
}

function add(recipe) {
  // TODO: add code here
  const { instructions, ...recipeEntry } = recipe;

  return db("recipes")
    .insert(recipeEntry, "id")
    .then(rec => {
        const [id] = rec;
        const InstEntries = instructions.map((inst, i) => {
            return { step_number: i +1, body: inst.body, recipe_id: id }
        })
        
        return db('instructions').insert(InstEntries).then(inst_rec => {
          return db('recipes as r').where('r.id', '=', id).join('instructions as i', 'r.id', '=', 'i.recipe_id').select('r.*', db.raw(`json_agg(json_build_object('step', i.step_number, 'body', i.body)) as instructions`)).groupBy('r.id').first();
        })

    });
}

function update(changes) {
  // TODO: add code here
}

function remove(id) {
  // TODO: add code here
}
