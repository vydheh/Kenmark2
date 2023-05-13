const {Sequelize} = require('sequelize');
const PASSWORD ='';
const DB_USER_NAME = "root";
const DB_NAME = "vechicle";

const dbConnection = new Sequelize(DB_NAME,DB_USER_NAME,PASSWORD,{
    host:process.env.DB_HOST || 'localhost',
    port : process.env.DB_PORT,
    dialect :"mysql",
    logging:false,
});

const authenticateDbConnection = async () =>{
    try{
        await dbConnection.authenticate();
        console.log("Connection has beeen established");
    }
    catch(error){
        console.log("unable to connect to database",error);
    }
}
authenticateDbConnection();

module.exports = dbConnection