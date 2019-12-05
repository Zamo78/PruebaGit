//1-Sumar numeros positivos de una lista.

function sumaPos(){

var lista= [1,3,-5,4,20];
var res=0;
var l=[];


for (var i=0;i<lista.length;i++){
	if(lista[i]>0){
	 l.push(lista[i]);	
	 res += lista[i];
	}
}
//console.log(res);
return "-----------------"+
"<br>Lista: "+l+
"<br>Suma: "+res+
"<br>-----------------";

}

//2-Ordenar alfabeticamente las palabras de un listado.

function Alf(){
var p=["lunes","martes","miercoles","jueves","viernes"];

 var p1 = p.sort();

//console.log(p1);
return "-----------------"+
"<br>Lista normal: "+p+
"<br>Lista Ordenada: "+p1+
"<br>-----------------";
}

//3-Pasar a mayuscula la primer letra de un listado de palabras.
function Mayus(){
var p3 = ["java","json","jquery","react"];
var p4 = [];

for (var i=0; i<p3.length; i++){
	p4[i]= p3[i].charAt(0).toUpperCase() + p3[i].slice(1);
}

//console.log(p);
return "-----------------"+
"<br>Lista normal: "+p3+
"<br>Lista mayuscula: "+p4+
"<br>-----------------";
}

//4-Remover de una lista los elementos falsy.
function Falsy(){
var p5 = [1,false,-5,0,NaN];
var s= [];
for (var i=0; i<p5.length; i++){
	if(p5[i]) {
		s.push(p5[i]);
	}

}
//console.log("Lista sin falsy: "+s);
return "-----------------"+ 
"<br>Lista normal: "+p5+
"<br>Lista sin falsy: "+s+
"<br>-----------------";
}

//5-Oracion a lista
function oraLista(){
var oracion = "Pablito clavo un clavito.";
var l = oracion.split([" "]);
//console.log(l);

//Lista a oracion

p6=l.join(' ');

//console.log(p);

return "-----------------"+
"<br>Oracion a Lista: "+l+
"<br>Lista a oracion: "+p6+
"<br>-----------------";
}

//6-Invertir las palabras de una oracion.
function Invertir(){
var str = "Esto es una prueba";

var rev = str.split([" "]).reverse().join(" ");

//console.log(rev);
return "-----------------"+
"<br>String normal: "+str+
"<br>String inverso: "+rev+
"<br>-----------------";
}

//7-Enumerar en una oracion, las palabras de un listado.
function enumPal(){
var pal = ["rojo","blanco","negro","azul","verde"];

var str1= pal.join(", ");
var n = 0, j;

console.log("Lista: "+str1);

for (var i=0; i<str1.length; i++){
	if (str1.charAt(i) == ","){
		n++;
		var j = i;
	}
}

str1 = str1.substring(0,j)+ " y" + str1.substring(j+1, str1.length);
//console.log("Cadena: "+str);
return "-----------------"+ 
"<br>Listado palabras: "+pal+
"<br>String enumerado: "+str1+
"<br>-----------------";
}