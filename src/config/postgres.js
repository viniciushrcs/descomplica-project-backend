require('dotenv').config()

module.exports = {
  client: 'pg',
  connection: process.env.POSTGRES_HOST,
}
