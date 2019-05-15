const { db } = require("../pgAdaptor");

const { GraphQLObjectType, GraphQLID,GraphQLString,GraphQLFloat } = require("graphql");
const { ProductesType} = require("./types");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
        Producte: {
            type: ProductesType,
            args: {
                clau: { type: GraphQLID }
                },
            resolve(parentValue, args) {
                const query = `select * from productes where clau = $1;`;
                const values = [
                    args.clau
                ];

                return db
                    .one(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        },

    }
});

exports.query = RootQuery;
