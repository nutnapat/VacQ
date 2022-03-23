const mysql = require("mysql");
var connection = mysql.createPool({ 
    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'vacCenter'
});
// connection.getConnection(function(err, connection) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     connection.on('error', function(err) {
//       console.log(err);
//     });
//     // do something with the connection...
//   });
module.exports = connection;