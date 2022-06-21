const { postgres } = require('./src/config')

module.exports = {
  client: postgres.client,
  connection: postgres.connection,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: './src/infra/database/migrations',
    tableName: 'knex_migrations',
  },
}
