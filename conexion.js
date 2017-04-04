var mysql = require("mysql");

var con=mysql.createConnection({
	host: "sql9.freemysqlhosting.net",
	user: "sql9166447",
	password:"QKVUIYGg6u",
	database:"sql9166447"

})


con.connect(function(err){
	if (err) {
		console.log("Error en la conexion");
		return;
	}
	console.log("conexion Establecida");
})


var rol = { NOMBRE: 'EDGAR3', APELLIDOS:'TERRAZAS2',DIRECCION:'AV.TERRAZAS',CORREOELECTRONICO:'EDGAR@OUTLOOK.COM' ,TELEFONO:'78965523',USUARIO:'ETERRAZAS',PASSWORD1:'123'};
    con.query('INSERT INTO CLIENTES SET ?', rol, function (err, res) {
        if (err) throw err;

        console.log('Last insert ID:', res.insertId);
    });