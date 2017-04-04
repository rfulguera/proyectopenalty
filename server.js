var mysql = require("mysql");

//require the express nodejs module
var express = require('express');
	//set an instance of exress
	app = express();
	//require the body-parser nodejs module
	bodyParser = require('body-parser');

	//require the path nodejs module
	path = require("path");
	
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true })); 

//tell express that www is the root of our public web folder
app.use(express.static(path.join(__dirname, 'public')));

//tell express what to do when the /form route is requested

//inicio form
app.post('/form',function(req, res){
	res.setHeader('Content-Type', 'application/json');

	//mimic a slow network connection
	setTimeout(function(){

		res.send(JSON.stringify({
			nom: req.body.nom || null,
			ape: req.body.ape || null,
			dir: req.body.dir || null,
			corr: req.body.corr || null,
			tel: req.body.tel || null,
			usu: req.body.usu || null,
			pas: req.body.pas || null,

		}));

	}, 1000)



	var rol = { NOMBRE:req.body.nom, APELLIDOS:req.body.ape, DIRECCION:req.body.dir, CORREOELECTRONICO:req.body.corr, TELEFONO: req.body.tel, USUARIO: req.body.usu, PASSWORD1:req.body.pas};
    con.query('INSERT INTO CLIENTES SET ?', rol, function (err, res) {
        if (err) throw err;

        console.log('Last insert ID:', res.insertId);
    });


	//debugging output for the terminal
	console.log('GUARDADO');
});
//finaliza form






 


var usu1;


//inicio form2
app.post('/form2',function(req, res){
	res.setHeader('Content-Type', 'application/json');
		

					con.query('select COUNT(*), IDENTIFICADOR,NOMBRE from CLIENTES where USUARIO = "'+req.body.email+' " and PASSWORD1 = "'+req.body.password+'"', function (err, rows) {
					        if (err) throw err;


							console.log(rows);
					        codigo = rows[0];
					        console.log(codigo);

					        COD2= codigo["COUNT(*)"];
					        console.log(COD2);

					        ID= codigo["IDENTIFICADOR"];
					        console.log(ID);
					        
					        Nom=codigo["NOMBRE"];
					        console.log(Nom);



					        if (COD2==1) {
									setTimeout(function(){
										

										var objeto={password: ID,email:Nom};
										res.send(objeto);

									})
					        }
					       

					    });


	//debugging output for the terminal
	console.log('usuario: '+ req.body.email + '       password: '+ req.body.password);
});
//finaliza form2












app.post('/form3',function(req, res){
	res.setHeader('Content-Type', 'application/json');

	
	setTimeout(function(){

		res.send(JSON.stringify({
			vender10: req.body.vender10 || null,
			objeto: req.body.objeto || null,
		}));

	}, 1000)


					var venta2 = { fec: '2017-04-04 00:00:00', montotal:'0',cantidadarticulos:'0',clienteid:req.body.vender10};
				    con.query('INSERT INTO VENTAS SET ?', venta2, function (err, res) {
				        if (err) throw err;

				        console.log('NroVenta el ID:'+ req.body.vender10);
    				});

				    


			    	con.query('SELECT MAX( idventas ) FROM  VENTAS', function (err, rows) {
			        if (err) throw err;

			        console.log('roles');
			        console.log(rows);
			        var datos = rows[0];
			        var Identificador = datos["MAX( idventas )"];
			        console.log(Identificador);




			        var pro=JSON.parse(req.body.objeto);
				    for (var i = 0; i<=pro.length; i++) {
				    	var sto=pro[i].stock;
				    	var id=pro[i].id;

				    	var DetalleVenta = { cantidad: '1', subtotal:sto ,productosid:id,ventaid:Identificador};
			            con.query('INSERT INTO DETALLEVENTA SET ?', DetalleVenta, function (err, res) {
			                if (err) throw err;

			                console.log('ID del detalle de Venta:', res.insertId);
			                });
				    	
				    }

			      });

			    	

});
//finaliza form













//falta
app.get('/devolverusuario',function(req,res){
	var usuario={username:usu1,password:'1234'}
	res.send(usuario);
	req.require()
})







var con=mysql.createConnection({
	host: "sql9.freemysqlhosting.net",
	user: "sql9166447",
	password:"QKVUIYGg6u",
	database:"sql9166447"

});






con.connect(function(err){
	if (err) {
		console.log("Error en la conexion");
		return;
	}
	console.log("Conectado");
	
});























































//wait for a connection
var server =app.listen(process.env.PORT || 5000, function () {
  console.log('Servidor Arriba');
});























var productos=[
	{ pathImage: "Images/clubes/ima1.png",name: "ATLETICO_1", descripcion:"BAN ROMPEVIENTOS VD-BC", precio:"150$",idproducto:"41" },
    { pathImage: "Images/clubes/ima2.png",name: "ATLETICO_2", descripcion:"GIMNASIA ESGRIMA DE LA PLATA", precio:"300$",idproducto:"42"},
    { pathImage: "Images/clubes/ima3.png",name: "ATLETICO_3", descripcion:"BAN BERMUDA SALIDA NG-VD-BC", precio:"200$", idproducto:"43"},
    { pathImage: "Images/clubes/ima4.png",name: "ATLETICO_4", descripcion:"BAN BERMUDA SALIDA VD-BC", precio:"150$",idproducto:"44"},
    { pathImage: "Images/clubes/ima5.png",name: "ATLETICO_5", descripcion:"BAN BUZO CANGURO SALIDA C/CIERRE CUADROS DAMA NG-N", precio:"300$" ,idproducto:"45"},
    { pathImage: "Images/clubes/ima6.png",name: "ATLETICO_6", descripcion:"articulo de clubes estilo deportivo", precio:"200$",idproducto:"46"}

]
app.get("/devolverproducto",function(req,res){
	res.send(productos);
})

var gimnasia=[
	{ pathImage: "Images/clubes/ima7.png",name: "ESCRIMA_1", descripcion:"GELP BERMUDA SALIDA MICROFIBRA MR-BC", precio:"150$",idproducto:"53" },
    { pathImage: "Images/clubes/ima8.png",name: "ESCRIMA_2", descripcion:"GELP BOLSO VIAJE MR-BC", precio:"300$",idproducto:"54"},
    { pathImage: "Images/clubes/ima9.png",name: "ESCRIMA_3", descripcion:"GELP BUZO CANGURO SALIDA CON CIERRE SIN FRISA AZ-M", precio:"200$",idproducto:"55"},
    { pathImage: "Images/clubes/ima10.png",name: "ESCRIMA_4", descripcion:"GELP CAMISETA 3 MR-AZ-BC", precio:"150$",idproducto:"56" },
    { pathImage: "Images/clubes/ima11.png",name: "ESCRIMA_5", descripcion:"GELP CAMISETA ALTERNATIVA 3 AZ-BC-MR", precio:"300$",idproducto:"57" },
    { pathImage: "Images/clubes/ima12.png",name: "ESCRIMA_6", descripcion:"GELP CAMISETA ALTERNATIVA KIDS MR-BC 2016", precio:"200$",idproducto:"58"}
]
app.get("/devolvergimnasia",function(req,res){
	res.send(gimnasia)
})

var taller=[
	{ pathImage: "Images/clubes/ima13.png",name: "TALLER_1", descripcion:"CAT BOLSO VIAJE MR-BC", precio:"150$" ,idproducto:"47"},
    { pathImage: "Images/clubes/ima14.png",name: "TALLER_2", descripcion:"CAT BUZO CANGURO SALIDA C/CIERRE MR-BC", precio:"300$",idproducto:"48" },
    { pathImage: "Images/clubes/ima15.png",name: "TALLER_3", descripcion:"CAT BUZO CREW SALIDA MR-AZ", precio:"200$",idproducto:"49"},
    { pathImage: "Images/clubes/ima16.png",name: "TALLER_4", descripcion:"CAT CAMISETA 3 AZ-NA-BC", precio:"150$" ,idproducto:"50"},
    { pathImage: "Images/clubes/ima17.png",name: "TALLER_5", descripcion:"CAT CAMISETA ALTERNATIVA NA-AZ", precio:"300$",idproducto:"51" },
    { pathImage: "Images/clubes/ima18.png",name: "TALLER_6", descripcion:"GELP CAMISETA ALTERNATIVA", precio:"200$",idproducto:"52"}

]
app.get("/devolvertaller",function(req,res){
	res.send(taller)
})

var sarmiento=[
	{ pathImage: "Images/clubes/ima19.png",name: "SARMIENTO_1", descripcion:"CAS BERMUDA SALIDA MICROFIBRA NG-BC", precio:"150$" ,idproducto:"59"},
    { pathImage: "Images/clubes/ima20.png",name: "SARMIENTO_2", descripcion:"CAS BOLSO VIAJE NG-VD-BC", precio:"300$",idproducto:"60" },
    { pathImage: "Images/clubes/ima21.png",name: "SARMIENTO_3", descripcion:"CAS BUZO CANGURO SALIDA C/CIERRE RUST. VD-BC", precio:"200$",idproducto:"61"},
    { pathImage: "Images/clubes/ima22.png",name: "SARMIENTO_4", descripcion:"CAS CAMISETA ALT. S/SPONSORS BC-VD", precio:"150$" ,idproducto:"62"},
    { pathImage: "Images/clubes/ima23.png",name: "SARMIENTO_5", descripcion:"CAS CAMISETA ALTERNATIVA BC-VD", precio:"300$",idproducto:"63" },
    { pathImage: "Images/clubes/ima24.png",name: "SARMIENTO_6", descripcion:"CAS CAMISETA ALTERNATIVA NG-VD-BC", precio:"200$",idproducto:"64"}

]
app.get("/devolversarmiento",function(req,res){
	res.send(sarmiento)
})