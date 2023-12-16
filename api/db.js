import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Dbls4848",
    database: "projeto_argos"
});
