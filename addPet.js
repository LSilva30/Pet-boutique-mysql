const mysql = require('mysql')                          //imports mysql library we added from npm
const { dbconfig } = require('./dbconfig')              //uses our secret info from the dbconfig folder
const db = mysql.createConnection(dbconfig)             // makes connection
db.connect()                                            //opens the connection

const pet = {
    name: 'Cindy',
    type: 'dog',
    size: 'medium'
}
const customer_name = 'Luiz'


db.query(`INSERT INTO pets VALUES (null,
    (SELECT id FROM customers WHERE first_name = "${customer_name}"),
     "${pet.name}", "${pet.type}", "${pet.size}")`, (err, results) => {
    if (err) {
    console.error(err)
    }
    console.log(results)
})
db.end()                                               // closes our open connection to our mysql database
