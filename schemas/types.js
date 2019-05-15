const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLFloat,GraphQLID } = graphql;

const ProductesType = new GraphQLObjectType({
    name: "Productes",
    type: "Query",
    fields: {
        part: { type: GraphQLString },
        tipus: { type: GraphQLString },
        especificacio: { type: GraphQLString },
        psuggerit: { type: GraphQLFloat },
        clau: { type: GraphQLID }
    }
});
exports.ProductesType = ProductesType;

