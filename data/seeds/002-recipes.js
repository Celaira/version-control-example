exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('recipes').del()
      .then(function () {
        // Inserts seed entries
        return knex('recipes').insert([
          {title: 'Eggplant', cook_time: 15, img: 'https://image.shutterstock.com/image-photo/grilled-eggplants-seasoned-olive-oil-260nw-87708241.jpg', notes: 'when i was a young boy my father took me into the city to see a marching band...'},
          {title: 'Cereal', cook_time: 45, img: 'https://image.shutterstock.com/z/stock-photo-cornflakes-with-milk-in-the-white-bowl-322906217.jpg', notes: 'Cereal is one the most delicate and complex recipes known throughout the history of mankind...'},
          {title: 'Scrambled Eggs', cook_time: 2, img: 'https://image.shutterstock.com/image-photo/mexican-food-recipes-revoltillo-de-600w-752977636.jpg', notes: 'if you are a human, then the only proper way to consume scrambled eggs is with ketchup'},
          {title: 'Home Fries', cook_time: 20, img: 'https://image.shutterstock.com/z/stock-photo-fried-potatoes-147539354.jpg', notes: 'so many useless notes.'}
        ]);
      });
  };