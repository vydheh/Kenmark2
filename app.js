const express = require('express');
// const db = require('./db');

const app = express();
const dbConnection = require('./utils/dbConnection');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
require('./utils/AllTableRelationship');

// const insertuser = require('./Routes/Register_user');
app.use(require('./Routes/Register_user'))
// app.use(insertuser)
// app.post('/register', (req, res) => {
//     const { name, mobilenumber, password ,Dateofbirth, Gender } = req.body;
//     const sql = `INSERT INTO users (name, mobilenumber, password, Dateofbirth, Gender) VALUES ('${name}', '${mobilenumber}', '${password}','${Dateofbirth}','${Gender}')`;
//     dbConnection.query(sql, (err, result) => {
//       if (err) {
//         throw err;
//       }
//       console.log('User registered');
//       res.send('User registered');
//     });
//   });

//   app.post('/login', (req, res) => {
//     const { name, password } = req.body;
//     const sql2 = `SELECT * FROM users WHERE name = '${name}' AND password = '${password}'`;
//     dbConnection.query(sql2, (err, result) => {
//       if (err) {
//         throw err;
//       }
//       if (result.length === 0) {
//         res.status(401).send('Invalid email or password');
//         res.send("Invalid");
//         return;
//       }
//       res.send('Login successful');
//     });
//   });

  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
//  const port = 3000;

//  app.use(express.json());

// app.post('/users',(req,res) =>{
//     const {name,mobilenumber,password} = req.body;

//     db.users.create({
//         name,mobilenumber,password
//     })
//     .then(user =>{
//         res.status(201).json(users);
//     })
//     .catch(error =>{
//         res.status(500).json({error:'Error creating user'});
//     })
// });
