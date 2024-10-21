const {Sequelize} = require("sequelize");

function connections() {
    try {
        const connection = new Sequelize(process.env.MYSQL_URI);
        connection.authenticate();
        console.log("successfully connected to database");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connections;