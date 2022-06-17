const { postgres } = require('./src/config')

module.exports = {
  client: postgres.client,
  connection: {
    host: postgres.connection.host,
    port: postgres.connection.port,
    user: postgres.connection.user,
    password: postgres.connection.password,
    database: postgres.connection.database,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: './src/infra/database/migrations',
    tableName: 'knex_migrations',
  },
}
