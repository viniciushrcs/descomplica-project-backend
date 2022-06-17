exports.up = (knex) =>
  knex.schema.createTable('student', (table) => {
    table.uuid('id').primary().unique().notNullable()
    table.string('name').notNullable().unique()
    table.string('cpf').notNullable().unique()
    table.string('email').notNullable().unique()
  })

exports.down = (knex) => knex.schema.dropTable('student')

