const mysql = require('mysql2')
const dotenv = require('dotenv')
const result = dotenv.config()
if(result.error){
            throw result.error
}
const db = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,  
            database: process.env.DATABASE,
            password: process.env.PASSWORD 
})
db.connect((err) => {
            if (err) {
                console.log(err);
            }
            console.log('Connected to the database');
          });
module.exports = db 