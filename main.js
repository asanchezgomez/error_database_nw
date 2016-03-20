var sqlite = require('sqlite-cipher');

sqlite.connect('myEncrypedFile.db','MyPassword');
sqlite.run("CREATE TABLE COMPANYS(ID  INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL);");
sqlite.insert("COMPANYS",{NAME:"My COMPANY"});

var rows = sqlite.run("SELECT * FROM COMPANYS;");
for(var i = 0; i < rows.length; i++)
	console.log(rows[i].NAME);

//Delete row
var name = "My COMPANY";

//First attempt --> it does not work (works!!)
sqlite.run("DELETE FROM COMPANYS WHERE NAME = '?'",[name]);
rows = sqlite.run("SELECT * FROM COMPANYS;");
console.log("First attempt:");
for(var i = 0; i < rows.length; i++)
	console.log(rows[i].NAME);
console.log("Finished first attempt");

