# Version Control Example Project

## What is this project for?

I'm creating this project to help myself understand how version control works, as well as to help in implementation of this type of system in another project.

## What will this be built in?

- NodeJS
- Express
- Postgres

## Forking Function

This function takes in a recipe id, and an info object. The recipe id is used to locate an existing recipe in the database. The info object contains an `author_id` of the currently logged in user who is forking the designated recipe. It also contains a `forked_from` key which holds the _original_ recipe's id.

**Information on Object Mutation:**
There is a small amount of object mutation in this implementation of forking. This is because some values need to removed, and others overwritten with new values before the forked recipe can be added to the database.

`delete recipe.id` -> This was done because the original recipe's id cannot exist in the new recipe row. It causes a duplicate primary key error.

`recipe.author_id = author_id` -> Overwrites the recipe's author_id before the forked version is added to the database so that the user who is forking can have edit permissions, or whatever else they need for their version of the recipe.

`recipe.forked_from = forked_from` -> Forked_from's initial value is null, this overwrites it so that the end users know that they are looking at a forked version of a recipe.

````js
function fork_recipe(recipe_id, info) {
  const { author_id, forked_from } = info
  return findById(recipe_id).then(res => {
    const { instructions, ...recipe } = res
    delete recipe.id
    recipe.author_id = author_id
    recipe.forked_from = forked_from

    const forkedrec = {
      ...recipe
    }
    return db("recipes")
      .insert(forkedrec, "id")
      .then(rec => {
        const [id] = rec
        const InstEntries = instructions.map((inst, i) => {
          return { step_number: i + 1, body: inst.body, recipe_id: id }
        })

        return db("instructions")
          .insert(InstEntries)
          .then(inst_rec => {
            return findById(id)
          })
      })
  })
}```
````
