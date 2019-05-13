const { db } = require("../pgAdaptor");
const { GraphQLObjectType, GraphQLID } = require("graphql");
const { ProveidorsType, ProductesType, GuanysTypes  } = require("./types");

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
        Producte: {
            type: ProductesType,
            args: { clau: { type: GraphQLID } },
            resolve(parentValue, args) {
                const query = `SELECT * FROM productes WHERE clau=$1`;
                const values = [args.id];

                return db
                    .one(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        },
        Proveidor: {
            type: ProveidorsType,
            args: { empresa: { type: GraphQLID } },
            resolve(parentValue, args) {
                const query = `SELECT * FROM proveidors WHERE empresa=$1`;
                const values = [args.id];

                return db
                    .one(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        },
        Guany: {
            type: GuanysTypes,
            args: { venda: { type: GraphQLID } },
            resolve(parentValue, args) {
                const query = `SELECT * FROM guanys WHERE venda=$1`;
                const values = [args.id];

                return db
                    .one(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        },
    }
});

exports.query = RootQuery;
