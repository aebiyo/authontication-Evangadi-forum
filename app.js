const mysql = require('mysql2');

const dbConnection = mysql.createPool({
	host: "91.204.209.39",
	user: yohanii_group4Team2,
	password: forumteam2,
	database: yohaniiq-EvangadiForum,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});
dbConnection.execute("select 'test '",(err ,result) => {
    if(err){
        console.log(err.message)
    }
       else{ 
        console.log(result)
    }
})