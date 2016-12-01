exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('nationbuildertestdata', function(table) {
    console.log('createdTable')

    table.integer('id')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.integer('phone')
    table.string('employer')
    table.string('facebook_username')

  })
};

exports.down = function(knex, Promise) {
  console.log('droppedTable')
  return knex.schema.dropTableIfExists('nationbuildertestdata')
};
