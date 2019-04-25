module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.31.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateDashboard {
  count: Int!
}

type AggregateGraph {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Dashboard {
  id: ID!
  createdAt: DateTime!
  createdBy: User!
  graphs(where: GraphWhereInput, orderBy: GraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Graph!]
  icon: String
  publicUrl: String
  title: String!
  updatedAt: DateTime!
  updateInterval: Int!
}

type DashboardConnection {
  pageInfo: PageInfo!
  edges: [DashboardEdge]!
  aggregate: AggregateDashboard!
}

input DashboardCreateInput {
  id: ID
  createdBy: UserCreateOneWithoutDashboardsInput!
  graphs: GraphCreateManyWithoutDashboardInput
  icon: String
  publicUrl: String
  title: String!
  updateInterval: Int
}

input DashboardCreateManyWithoutCreatedByInput {
  create: [DashboardCreateWithoutCreatedByInput!]
  connect: [DashboardWhereUniqueInput!]
}

input DashboardCreateOneWithoutGraphsInput {
  create: DashboardCreateWithoutGraphsInput
  connect: DashboardWhereUniqueInput
}

input DashboardCreateWithoutCreatedByInput {
  id: ID
  graphs: GraphCreateManyWithoutDashboardInput
  icon: String
  publicUrl: String
  title: String!
  updateInterval: Int
}

input DashboardCreateWithoutGraphsInput {
  id: ID
  createdBy: UserCreateOneWithoutDashboardsInput!
  icon: String
  publicUrl: String
  title: String!
  updateInterval: Int
}

type DashboardEdge {
  node: Dashboard!
  cursor: String!
}

enum DashboardOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  icon_ASC
  icon_DESC
  publicUrl_ASC
  publicUrl_DESC
  title_ASC
  title_DESC
  updatedAt_ASC
  updatedAt_DESC
  updateInterval_ASC
  updateInterval_DESC
}

type DashboardPreviousValues {
  id: ID!
  createdAt: DateTime!
  icon: String
  publicUrl: String
  title: String!
  updatedAt: DateTime!
  updateInterval: Int!
}

input DashboardScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  icon: String
  icon_not: String
  icon_in: [String!]
  icon_not_in: [String!]
  icon_lt: String
  icon_lte: String
  icon_gt: String
  icon_gte: String
  icon_contains: String
  icon_not_contains: String
  icon_starts_with: String
  icon_not_starts_with: String
  icon_ends_with: String
  icon_not_ends_with: String
  publicUrl: String
  publicUrl_not: String
  publicUrl_in: [String!]
  publicUrl_not_in: [String!]
  publicUrl_lt: String
  publicUrl_lte: String
  publicUrl_gt: String
  publicUrl_gte: String
  publicUrl_contains: String
  publicUrl_not_contains: String
  publicUrl_starts_with: String
  publicUrl_not_starts_with: String
  publicUrl_ends_with: String
  publicUrl_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  updateInterval: Int
  updateInterval_not: Int
  updateInterval_in: [Int!]
  updateInterval_not_in: [Int!]
  updateInterval_lt: Int
  updateInterval_lte: Int
  updateInterval_gt: Int
  updateInterval_gte: Int
  AND: [DashboardScalarWhereInput!]
  OR: [DashboardScalarWhereInput!]
  NOT: [DashboardScalarWhereInput!]
}

type DashboardSubscriptionPayload {
  mutation: MutationType!
  node: Dashboard
  updatedFields: [String!]
  previousValues: DashboardPreviousValues
}

input DashboardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DashboardWhereInput
  AND: [DashboardSubscriptionWhereInput!]
  OR: [DashboardSubscriptionWhereInput!]
  NOT: [DashboardSubscriptionWhereInput!]
}

input DashboardUpdateInput {
  createdBy: UserUpdateOneRequiredWithoutDashboardsInput
  graphs: GraphUpdateManyWithoutDashboardInput
  icon: String
  publicUrl: String
  title: String
  updateInterval: Int
}

input DashboardUpdateManyDataInput {
  icon: String
  publicUrl: String
  title: String
  updateInterval: Int
}

input DashboardUpdateManyMutationInput {
  icon: String
  publicUrl: String
  title: String
  updateInterval: Int
}

input DashboardUpdateManyWithoutCreatedByInput {
  create: [DashboardCreateWithoutCreatedByInput!]
  delete: [DashboardWhereUniqueInput!]
  connect: [DashboardWhereUniqueInput!]
  set: [DashboardWhereUniqueInput!]
  disconnect: [DashboardWhereUniqueInput!]
  update: [DashboardUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [DashboardUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [DashboardScalarWhereInput!]
  updateMany: [DashboardUpdateManyWithWhereNestedInput!]
}

input DashboardUpdateManyWithWhereNestedInput {
  where: DashboardScalarWhereInput!
  data: DashboardUpdateManyDataInput!
}

input DashboardUpdateOneRequiredWithoutGraphsInput {
  create: DashboardCreateWithoutGraphsInput
  update: DashboardUpdateWithoutGraphsDataInput
  upsert: DashboardUpsertWithoutGraphsInput
  connect: DashboardWhereUniqueInput
}

input DashboardUpdateWithoutCreatedByDataInput {
  graphs: GraphUpdateManyWithoutDashboardInput
  icon: String
  publicUrl: String
  title: String
  updateInterval: Int
}

input DashboardUpdateWithoutGraphsDataInput {
  createdBy: UserUpdateOneRequiredWithoutDashboardsInput
  icon: String
  publicUrl: String
  title: String
  updateInterval: Int
}

input DashboardUpdateWithWhereUniqueWithoutCreatedByInput {
  where: DashboardWhereUniqueInput!
  data: DashboardUpdateWithoutCreatedByDataInput!
}

input DashboardUpsertWithoutGraphsInput {
  update: DashboardUpdateWithoutGraphsDataInput!
  create: DashboardCreateWithoutGraphsInput!
}

input DashboardUpsertWithWhereUniqueWithoutCreatedByInput {
  where: DashboardWhereUniqueInput!
  update: DashboardUpdateWithoutCreatedByDataInput!
  create: DashboardCreateWithoutCreatedByInput!
}

input DashboardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  createdBy: UserWhereInput
  graphs_every: GraphWhereInput
  graphs_some: GraphWhereInput
  graphs_none: GraphWhereInput
  icon: String
  icon_not: String
  icon_in: [String!]
  icon_not_in: [String!]
  icon_lt: String
  icon_lte: String
  icon_gt: String
  icon_gte: String
  icon_contains: String
  icon_not_contains: String
  icon_starts_with: String
  icon_not_starts_with: String
  icon_ends_with: String
  icon_not_ends_with: String
  publicUrl: String
  publicUrl_not: String
  publicUrl_in: [String!]
  publicUrl_not_in: [String!]
  publicUrl_lt: String
  publicUrl_lte: String
  publicUrl_gt: String
  publicUrl_gte: String
  publicUrl_contains: String
  publicUrl_not_contains: String
  publicUrl_starts_with: String
  publicUrl_not_starts_with: String
  publicUrl_ends_with: String
  publicUrl_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  updateInterval: Int
  updateInterval_not: Int
  updateInterval_in: [Int!]
  updateInterval_not_in: [Int!]
  updateInterval_lt: Int
  updateInterval_lte: Int
  updateInterval_gt: Int
  updateInterval_gte: Int
  AND: [DashboardWhereInput!]
  OR: [DashboardWhereInput!]
  NOT: [DashboardWhereInput!]
}

input DashboardWhereUniqueInput {
  id: ID
}

scalar DateTime

type Graph {
  id: ID!
  createdAt: DateTime!
  createdBy: User!
  dashboard: Dashboard!
  icon: String
  publicUrl: String
  title: String!
  updatedAt: DateTime!
  updateInterval: Int!
}

type GraphConnection {
  pageInfo: PageInfo!
  edges: [GraphEdge]!
  aggregate: AggregateGraph!
}

input GraphCreateInput {
  id: ID
  createdBy: UserCreateOneWithoutGraphsInput!
  dashboard: DashboardCreateOneWithoutGraphsInput!
  icon: String
  publicUrl: String
  title: String!
  updateInterval: Int
}

input GraphCreateManyWithoutCreatedByInput {
  create: [GraphCreateWithoutCreatedByInput!]
  connect: [GraphWhereUniqueInput!]
}

input GraphCreateManyWithoutDashboardInput {
  create: [GraphCreateWithoutDashboardInput!]
  connect: [GraphWhereUniqueInput!]
}

input GraphCreateWithoutCreatedByInput {
  id: ID
  dashboard: DashboardCreateOneWithoutGraphsInput!
  icon: String
  publicUrl: String
  title: String!
  updateInterval: Int
}

input GraphCreateWithoutDashboardInput {
  id: ID
  createdBy: UserCreateOneWithoutGraphsInput!
  icon: String
  publicUrl: String
  title: String!
  updateInterval: Int
}

type GraphEdge {
  node: Graph!
  cursor: String!
}

enum GraphOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  icon_ASC
  icon_DESC
  publicUrl_ASC
  publicUrl_DESC
  title_ASC
  title_DESC
  updatedAt_ASC
  updatedAt_DESC
  updateInterval_ASC
  updateInterval_DESC
}

type GraphPreviousValues {
  id: ID!
  createdAt: DateTime!
  icon: String
  publicUrl: String
  title: String!
  updatedAt: DateTime!
  updateInterval: Int!
}

input GraphScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  icon: String
  icon_not: String
  icon_in: [String!]
  icon_not_in: [String!]
  icon_lt: String
  icon_lte: String
  icon_gt: String
  icon_gte: String
  icon_contains: String
  icon_not_contains: String
  icon_starts_with: String
  icon_not_starts_with: String
  icon_ends_with: String
  icon_not_ends_with: String
  publicUrl: String
  publicUrl_not: String
  publicUrl_in: [String!]
  publicUrl_not_in: [String!]
  publicUrl_lt: String
  publicUrl_lte: String
  publicUrl_gt: String
  publicUrl_gte: String
  publicUrl_contains: String
  publicUrl_not_contains: String
  publicUrl_starts_with: String
  publicUrl_not_starts_with: String
  publicUrl_ends_with: String
  publicUrl_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  updateInterval: Int
  updateInterval_not: Int
  updateInterval_in: [Int!]
  updateInterval_not_in: [Int!]
  updateInterval_lt: Int
  updateInterval_lte: Int
  updateInterval_gt: Int
  updateInterval_gte: Int
  AND: [GraphScalarWhereInput!]
  OR: [GraphScalarWhereInput!]
  NOT: [GraphScalarWhereInput!]
}

type GraphSubscriptionPayload {
  mutation: MutationType!
  node: Graph
  updatedFields: [String!]
  previousValues: GraphPreviousValues
}

input GraphSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GraphWhereInput
  AND: [GraphSubscriptionWhereInput!]
  OR: [GraphSubscriptionWhereInput!]
  NOT: [GraphSubscriptionWhereInput!]
}

input GraphUpdateInput {
  createdBy: UserUpdateOneRequiredWithoutGraphsInput
  dashboard: DashboardUpdateOneRequiredWithoutGraphsInput
  icon: String
  publicUrl: String
  title: String
  updateInterval: Int
}

input GraphUpdateManyDataInput {
  icon: String
  publicUrl: String
  title: String
  updateInterval: Int
}

input GraphUpdateManyMutationInput {
  icon: String
  publicUrl: String
  title: String
  updateInterval: Int
}

input GraphUpdateManyWithoutCreatedByInput {
  create: [GraphCreateWithoutCreatedByInput!]
  delete: [GraphWhereUniqueInput!]
  connect: [GraphWhereUniqueInput!]
  set: [GraphWhereUniqueInput!]
  disconnect: [GraphWhereUniqueInput!]
  update: [GraphUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [GraphUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [GraphScalarWhereInput!]
  updateMany: [GraphUpdateManyWithWhereNestedInput!]
}

input GraphUpdateManyWithoutDashboardInput {
  create: [GraphCreateWithoutDashboardInput!]
  delete: [GraphWhereUniqueInput!]
  connect: [GraphWhereUniqueInput!]
  set: [GraphWhereUniqueInput!]
  disconnect: [GraphWhereUniqueInput!]
  update: [GraphUpdateWithWhereUniqueWithoutDashboardInput!]
  upsert: [GraphUpsertWithWhereUniqueWithoutDashboardInput!]
  deleteMany: [GraphScalarWhereInput!]
  updateMany: [GraphUpdateManyWithWhereNestedInput!]
}

input GraphUpdateManyWithWhereNestedInput {
  where: GraphScalarWhereInput!
  data: GraphUpdateManyDataInput!
}

input GraphUpdateWithoutCreatedByDataInput {
  dashboard: DashboardUpdateOneRequiredWithoutGraphsInput
  icon: String
  publicUrl: String
  title: String
  updateInterval: Int
}

input GraphUpdateWithoutDashboardDataInput {
  createdBy: UserUpdateOneRequiredWithoutGraphsInput
  icon: String
  publicUrl: String
  title: String
  updateInterval: Int
}

input GraphUpdateWithWhereUniqueWithoutCreatedByInput {
  where: GraphWhereUniqueInput!
  data: GraphUpdateWithoutCreatedByDataInput!
}

input GraphUpdateWithWhereUniqueWithoutDashboardInput {
  where: GraphWhereUniqueInput!
  data: GraphUpdateWithoutDashboardDataInput!
}

input GraphUpsertWithWhereUniqueWithoutCreatedByInput {
  where: GraphWhereUniqueInput!
  update: GraphUpdateWithoutCreatedByDataInput!
  create: GraphCreateWithoutCreatedByInput!
}

input GraphUpsertWithWhereUniqueWithoutDashboardInput {
  where: GraphWhereUniqueInput!
  update: GraphUpdateWithoutDashboardDataInput!
  create: GraphCreateWithoutDashboardInput!
}

input GraphWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  createdBy: UserWhereInput
  dashboard: DashboardWhereInput
  icon: String
  icon_not: String
  icon_in: [String!]
  icon_not_in: [String!]
  icon_lt: String
  icon_lte: String
  icon_gt: String
  icon_gte: String
  icon_contains: String
  icon_not_contains: String
  icon_starts_with: String
  icon_not_starts_with: String
  icon_ends_with: String
  icon_not_ends_with: String
  publicUrl: String
  publicUrl_not: String
  publicUrl_in: [String!]
  publicUrl_not_in: [String!]
  publicUrl_lt: String
  publicUrl_lte: String
  publicUrl_gt: String
  publicUrl_gte: String
  publicUrl_contains: String
  publicUrl_not_contains: String
  publicUrl_starts_with: String
  publicUrl_not_starts_with: String
  publicUrl_ends_with: String
  publicUrl_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  updateInterval: Int
  updateInterval_not: Int
  updateInterval_in: [Int!]
  updateInterval_not_in: [Int!]
  updateInterval_lt: Int
  updateInterval_lte: Int
  updateInterval_gt: Int
  updateInterval_gte: Int
  AND: [GraphWhereInput!]
  OR: [GraphWhereInput!]
  NOT: [GraphWhereInput!]
}

input GraphWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createDashboard(data: DashboardCreateInput!): Dashboard!
  updateDashboard(data: DashboardUpdateInput!, where: DashboardWhereUniqueInput!): Dashboard
  updateManyDashboards(data: DashboardUpdateManyMutationInput!, where: DashboardWhereInput): BatchPayload!
  upsertDashboard(where: DashboardWhereUniqueInput!, create: DashboardCreateInput!, update: DashboardUpdateInput!): Dashboard!
  deleteDashboard(where: DashboardWhereUniqueInput!): Dashboard
  deleteManyDashboards(where: DashboardWhereInput): BatchPayload!
  createGraph(data: GraphCreateInput!): Graph!
  updateGraph(data: GraphUpdateInput!, where: GraphWhereUniqueInput!): Graph
  updateManyGraphs(data: GraphUpdateManyMutationInput!, where: GraphWhereInput): BatchPayload!
  upsertGraph(where: GraphWhereUniqueInput!, create: GraphCreateInput!, update: GraphUpdateInput!): Graph!
  deleteGraph(where: GraphWhereUniqueInput!): Graph
  deleteManyGraphs(where: GraphWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  dashboard(where: DashboardWhereUniqueInput!): Dashboard
  dashboards(where: DashboardWhereInput, orderBy: DashboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dashboard]!
  dashboardsConnection(where: DashboardWhereInput, orderBy: DashboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DashboardConnection!
  graph(where: GraphWhereUniqueInput!): Graph
  graphs(where: GraphWhereInput, orderBy: GraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Graph]!
  graphsConnection(where: GraphWhereInput, orderBy: GraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GraphConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  dashboard(where: DashboardSubscriptionWhereInput): DashboardSubscriptionPayload
  graph(where: GraphSubscriptionWhereInput): GraphSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  dashboards(where: DashboardWhereInput, orderBy: DashboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dashboard!]
  displayName: String!
  email: String!
  graphs(where: GraphWhereInput, orderBy: GraphOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Graph!]
  password: String!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  dashboards: DashboardCreateManyWithoutCreatedByInput
  displayName: String!
  email: String!
  graphs: GraphCreateManyWithoutCreatedByInput
  password: String!
}

input UserCreateOneWithoutDashboardsInput {
  create: UserCreateWithoutDashboardsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutGraphsInput {
  create: UserCreateWithoutGraphsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutDashboardsInput {
  id: ID
  displayName: String!
  email: String!
  graphs: GraphCreateManyWithoutCreatedByInput
  password: String!
}

input UserCreateWithoutGraphsInput {
  id: ID
  dashboards: DashboardCreateManyWithoutCreatedByInput
  displayName: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  displayName_ASC
  displayName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  displayName: String!
  email: String!
  password: String!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  dashboards: DashboardUpdateManyWithoutCreatedByInput
  displayName: String
  email: String
  graphs: GraphUpdateManyWithoutCreatedByInput
  password: String
}

input UserUpdateManyMutationInput {
  displayName: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutDashboardsInput {
  create: UserCreateWithoutDashboardsInput
  update: UserUpdateWithoutDashboardsDataInput
  upsert: UserUpsertWithoutDashboardsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutGraphsInput {
  create: UserCreateWithoutGraphsInput
  update: UserUpdateWithoutGraphsDataInput
  upsert: UserUpsertWithoutGraphsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutDashboardsDataInput {
  displayName: String
  email: String
  graphs: GraphUpdateManyWithoutCreatedByInput
  password: String
}

input UserUpdateWithoutGraphsDataInput {
  dashboards: DashboardUpdateManyWithoutCreatedByInput
  displayName: String
  email: String
  password: String
}

input UserUpsertWithoutDashboardsInput {
  update: UserUpdateWithoutDashboardsDataInput!
  create: UserCreateWithoutDashboardsInput!
}

input UserUpsertWithoutGraphsInput {
  update: UserUpdateWithoutGraphsDataInput!
  create: UserCreateWithoutGraphsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  dashboards_every: DashboardWhereInput
  dashboards_some: DashboardWhereInput
  dashboards_none: DashboardWhereInput
  displayName: String
  displayName_not: String
  displayName_in: [String!]
  displayName_not_in: [String!]
  displayName_lt: String
  displayName_lte: String
  displayName_gt: String
  displayName_gte: String
  displayName_contains: String
  displayName_not_contains: String
  displayName_starts_with: String
  displayName_not_starts_with: String
  displayName_ends_with: String
  displayName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  graphs_every: GraphWhereInput
  graphs_some: GraphWhereInput
  graphs_none: GraphWhereInput
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    