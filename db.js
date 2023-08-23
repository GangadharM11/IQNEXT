
import mysql from 'mysql2';


//import { createPool } from "mysql";

export  const con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "Root@123",
    database:"fifa"
  });
  
  con.connect((err)=> {
    if (err) {console.log("error")}
    else {console.log("Connected!")}
  });







// export const db =async()=>{
//     await mysql.mysqlConnection("mysql://root@localhost:3306/fifa").then(console.log("Connected")).catch(err=>console.log("error"))
// }