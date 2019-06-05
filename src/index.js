
const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
    type Query {
        info: String!
        feed: [Link!]!
    },
    type Mutation {
        post(url: String!)
    }
    type Link {
        id: ID!
        description: String!
        url: String!
    },
`;

let links = [{
    id: "link-0",
    url: 'www.howtographql.com',
    description: 'Full stack tutorial for graphQL'
}];

const resolvers = {
    Query: {
        info: () => {
           return (`This is the API of Hackernews`);
        },
        feed: () => links,
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});
server.start(() => console.log(`server is running on http://localhost:4000`));
