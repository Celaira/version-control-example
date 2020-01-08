exports.up = function(knex) {
    return ( knex.schema
        .createTable('users', tbl => {
            tbl.icrements('id');
            tbl.text('username')
            .unique()
            .notNullable();
            tbl.text('password')
            .notNullable();
            tbl.text('first_name');
            tbl.text('last_name');
            tbl.text('email');
            tbl.text('avatar_url');

        })
        .createTable('recipes', tbl => {
            tbl.increments('id');
            tbl.integer('author_id')
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
            tbl.text('title')
            .notNullable();
            tbl.text('img');
            tbl.integer('prep_time');
            tbl.integer('cook_time');
            tbl.text('notes');
        })
        .createTable('instructions', tbl => {
            tbl.increments('id');
            tbl.integer('recipe_id')
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('set null')
                .notNullable();
            tbl.integer('step_number')
            .notNullable();
            tbl.text('body');
        })
        .createTable('edits', tbl => {
            tbl.increments('id');
            tbl.integer('recipe_id')
            .references('id')
            .intable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable();
            tbl.JSON('changes');
            tbl.datetime('date_modified').defaultTo(knex.fn.now());
            tbl.integer('owner_id')
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable();
        })
    )
}

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('edits')
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipes')
        .dropTableIfExists('users')
    
}