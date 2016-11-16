
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('testDB').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('testDB').insert({id: 1, first_name: 'kitty', last_name: 'Cute-ingtons', email:'kittysocute@catz.com', phone:'12445657', employer:'facebook'}),
        knex('testDB').insert({id: 2, first_name: 'Candle', last_name: 'Abra', email:'flickeringlight@chandeliers.com', phone:'47839743', employer:'Chandeliers r us', facebook_username:'Chandeliers For A Nice Time'}),
        knex('testDB').insert({id: 3, first_name: 'Water', last_name: 'Bottle', email:'quenchyourthirst@water.com', phone:'547885', employer:'Pure Springs', facebook_username:'Stay Hydrated Out There!'})
      ]);
    });
};
