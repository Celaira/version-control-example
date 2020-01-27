exports.seed = function(knex) {
  // Deletes ALL existing entries.
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { recipe_id: 1, step_number: 1, body: "take eggplant" },
        { recipe_id: 1, step_number: 2, body: "cook eggplant" },
        { recipe_id: 1, step_number: 3, body: "eat eggplant" },
        {
          recipe_id: 2,
          step_number: 1,
          body: "pour your crunchy people food into a bowl"
        },
        {
          recipe_id: 2,
          step_number: 2,
          body:
            "smother your crunchy people food with processed cows lacrimal essence"
        },
        {
          recipe_id: 2,
          step_number: 3,
          body:
            "shovel your milky people food into your mouth in easy to manage bite-sized spoonfuls"
        },
        { recipe_id: 3, step_number: 1, body: "get egg and crack into a bowl" },
        {
          recipe_id: 3,
          step_number: 2,
          body:
            "add small amount of milk and whisk the ever-loving devil out of those eggs"
        },
        {
          recipe_id: 3,
          step_number: 3,
          body: "pour milky egg mixture into a well greased sizzly hot pan"
        },
        {
          recipe_id: 3,
          step_number: 4,
          body: "stir with rubber spatula whilst the eggs solidify"
        },
        {
          recipe_id: 3,
          step_number: 5,
          body: "cheese those eggy bois, if you are so inclined."
        },
        {
          recipe_id: 3,
          step_number: 6,
          body:
            "serve while they're still hot or you will end up hating yourself"
        }
      ])
    })
}
