const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLFloat } = graphql;

const ProductesType = new GraphQLObjectType({
    name: "Productes",
    type: "Query",
    fields: {
        part: { type: GraphQLString },
        tipus: { type: GraphQLString },
        especificacio: { type: GraphQLString },
        psuggerit: { type: GraphQLFloat },
        clau: { type: GraphQLString }
    }
});

const ProveidorsType = new GraphQLObjectType({
    name: "Proveidors",
    type: "Query",
    fields: {
        empresa: { type: GraphQLString },
        credit: { type: GraphQLString },
        efectiu: { type: GraphQLString },
    }
});

const GuanysTypes = new GraphQLObjectType({
   name: "Guanys",
   type: "Query",
   fields:{
       venda: { type: GraphQLString },
       factor: { type: GraphQLString },
   }
});
exports.ProductesType = ProductesType;
exports.ProveidorsType = ProveidorsType;
exports.GuanysTypes = GuanysTypes;
