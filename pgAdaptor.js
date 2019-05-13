require('dotenv').config()
const pgPromise = require('pg-promise');

const pgp = pgPromise({}); // Empty object means no additional config required

const config = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
};

const db = pgp(config);

// db.one("select * from productes where clau=1;")
//     .then(res => {
//         console.log(res);
//     }).catch((error) =>{
//     console.log(error);
// });

// db.query("select * from productes;")
//     .then(res => {
//         console.log(res);
//     }).catch((error) =>{
//     console.log(error);
// });

exports.db = db;
