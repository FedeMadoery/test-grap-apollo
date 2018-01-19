import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import mocks from './mocks';
import resolvers from "./resolvers";

const typeDefs = `
scalar Date
type Usuario @model {
  apellido: String!
  createdAt: Date!
  email: String @isUnique
  id: ID! @isUnique
  edad: Int
  isPublished: Boolean! @defaultValue(value: false)
  nombre: String!
  password: String!
  updatedAt: Date!
}
type Query {
    allUsers: [Usuario]
    findUser(email: String!): Usuario
    updateUser(id: ID, edad: Int): Usuario
}
`;

const schema = makeExecutableSchema({ typeDefs , resolvers});

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
