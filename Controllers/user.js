
const dbConnection = require('../utils/dbConnection');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// require('../utils/AllTableRelationship');

exports.insertuser = async (req, res) => {
  console.log('here');
    const { name, mobilenumber, password ,Dateofbirth, Gender } = req.body;
    const sql = `INSERT INTO users (name, mobilenumber, password, Dateofbirth, Gender) VALUES ('${name}', '${mobilenumber}', '${password}','${Dateofbirth}','${Gender}')`;
  await  dbConnection.query(sql, (err, result) => {
      if (err) {
        throw err;
      }
      console.log('User registered');
    return res.json('User registered');
      // res.end()
    });
  };

  // module.exports = insertuser();