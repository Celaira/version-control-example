const db = require('../dbConfig');

module.exports = {
    findById,
    findByTitle,
    add,
    update,
    remove
}

function findById(id) {
    return db('recipes').where(id)
}

function findByTitle(title) {
    return db('recipes').where(title)
}

function add(recipe) {
    // TODO: add code here
}

function update(changes) {
    // TODO: add code here
}

function remove(id) {
    // TODO: add code here
}