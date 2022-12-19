//Create the connection to database

const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.DATABASE_URL);
export default function postJobs(req, res) {
  const company = req.body.company;
  const position = req.body.position;
  const img = req.body.img;
  const detail = req.body.detail;
  const salary = req.body.salary;
  const hilight = req.body.hilight;
  connection.query(
    "INSERT INTO jobsdetail (company,position,img,detail,salary,hilight) VALUES(?,?,?,?,?,?)",
    [company, position, img, detail, salary, hilight],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
}
