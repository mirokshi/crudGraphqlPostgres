const graphql = require("graphql");
const db = require("../pgAdaptor").db;
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLScalarType} = graphql;
const { ProductesType} = require("./types");

const RootMutation = new GraphQLObjectType({
    name: "RootMutationType",
    type: "Mutation",
    fields: {
        addProducte: {
            type: ProductesType,
            args: {
                part: { type: GraphQLString },
                tipus: { type: GraphQLString },
                especificacio: { type: GraphQLString },
                psuggerit: { type: GraphQLFloat },
                clau: { type: GraphQLID },
            },
            resolve(parentValue, args) {
                const query = `INSERT INTO productes(part, tipus, especificacio, psuggerit, clau) VALUES ($1, $2, $3, $4, $5) RETURNING part,tipus,especificacio,psuggerit,clau`;
                const values    = [
                    args.part,
                    args.tipus,
                    args.especificacio,
                    args.psuggerit,
                    args.clau
                ];

                return db
                    .one(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        },
        deleteProducte:{
            type: ProductesType,
            args:{
                clau: { type: GraphQLID },
            },
            resolve(parentValue, args) {
                const query = `DELETE FROM productes WHERE clau = $1`;
                const values = [
                    args.clau
                ];
                return db
                    .one(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        },
        updateProducte:{
            type: ProductesType,
            args: {
                part: { type: GraphQLString },
                clau: { type: GraphQLID },
            },
            resolve(parentValue, args) {
                const query = `UPDATE productes SET part=$1 WHERE clau=$2 RETURNING part,clau`;
                const values    = [
                    args.part,
                    args.clau
                ];

                return db
                    .one(query, values)
                    .then(res => res)
                    .catch(err => err);
            }
        }
    }
},);

exports.mutation = RootMutation;
