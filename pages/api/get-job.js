//Create the connection to database
console.log(process.env.REACT_APP_DATABASE_URL);
const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.REACT_APP_DATABASE_URL);
export default function getJobs(req, res) {
  connection.query("SELECT * FROM `jobsdetail` ", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}
