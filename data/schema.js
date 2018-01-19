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
  nombre: String!
  password: String!
  updatedAt: Date!
}
type AcuerdoTrabajo @model {
  createdAt: Date!
  estado: EstadosAcuerdoTrabajo! @defaultValue(value: Solicitud)
  evaluacionCliente: EvaluacionCliente @relation(name: "EvaluacionCliente")
  evaluacionProfesional: EvaluacionProfesional @relation(name: "EvaluacionProfesional")
  fechaFin: Date!
  fechaInicio: Date!
  id: ID! @isUnique
  profesional: Profesional @relation(name: "Profesional")
  tarea: Tarea @relation(name: "TipoTrabajo")
  updatedAt: Date!
  usuario: Usuario @relation(name: "Cliente")
}
enum EstadosAcuerdoTrabajo {
  Solicitud
  En_revision_Profesional
  Rechazado
  Aceptado
  Cancelado
}
type EvaluacionCliente @model {
  acuerdoTrabajo: AcuerdoTrabajo @relation(name: "EvaluacionCliente")
  createdAt: Date!
  cumplimientoPago: Int!
  cumplimientoTerminos: Int!
  id: ID! @isUnique
  updatedAt: Date!
}
type EvaluacionProfesional @model {
  acuerdoTrabajo: AcuerdoTrabajo @relation(name: "EvaluacionProfesional")
  calidadDelTrabajo: Int!
  createdAt: Date!
  cumplimientoPlazos: Int!
  id: ID! @isUnique
  precio: Int!
  prolijidad: Int!
  updatedAt: Date!
}
type Profesion @model {
  createdAt: Date!
  id: ID! @isUnique
  nombre: String!
  profesionals: [Profesional!]! @relation(name: "Profesion")
  tareas: [Tarea!]! @relation(name: "Categoria")
  updatedAt: Date!
}
type Profesional @model {
  acuerdosTrabajo: [AcuerdoTrabajo!]! @relation(name: "Profesional")
  apellido: String!
  createdAt: Date!
  email: String @isUnique
  id: ID! @isUnique
  nombre: String!
}
type Tarea @model {
  nombre: String!
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
