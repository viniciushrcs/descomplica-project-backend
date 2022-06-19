const { ApolloServer } = require('apollo-server')
const typeDefs = require('./graphql/_typeDefs/types')
const resolvers = require('./graphql/resolvers')

const serverConfig = {
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  playground: {
    endpoint: '/graphql',
  },
}

module.exports = new ApolloServer(serverConfig)
