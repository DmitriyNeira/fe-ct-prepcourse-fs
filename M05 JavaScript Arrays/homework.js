/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];

}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.map( array => { return array+1})

}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   x=palabras.join(' ');
   return x;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma=0;
   for (let x=0;x<arrayOfNums.length; x++){
      suma=suma+arrayOfNums[x];
   
   }
   

   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma=0;
   for (let i=0; i<resultadosTest.length ; i++){
      suma=suma+resultadosTest[i];

   }
   return suma/resultadosTest.length;

}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   
   //*return Math.max(...arrayOfNums); usando el operador de propagación se puede hacer en una linea
   //que lindo es ver opciones así en google, pero me toca practicar.
   
   /*

   Este es el código que yo escribí inicialmente (me hice muchos lios)

   var mayor;
   mayor_total=arrayOfNums[0];

   for (let i=0;i<arrayOfNums.length-1; i++){
      if (  arrayOfNums[i]>arrayOfNums[i+1]){
         
         if ((i!==0) && (mayor_total<mayor )) {
            mayor_total=mayor;
         }
         mayor=arrayOfNums[i];
         //console.log("mayor total: ",mayor_total);
      } else  
         if ((i!==0) && (mayor_total<mayor )) {
            
            mayor_total=mayor;
         }
         mayor= arrayOfNums[i+1]
      }


return mayor_total;*/ 
//Este es el código mejorado.


let max = arrayOfNums[0]; 
   for (let i = 1; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] > max) {
      max = arrayOfNums[i];
      }
   }

   return max;


}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length===0){
      return 0; 
      }
      if (arguments.length===1){
         return arguments[0];
      }

      producto=1;
      for (let i=0;i<arguments.length;i++){
         
         producto=producto *arguments[i];
         
         
      }
      return producto;
}


function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var con=0;
   array.forEach(array => { if (array>18) {
   console.log(array);
   con=con+1;
   }   
   })

   return con;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia>7) {
      return ("Dato mal ingresado");
   }

   if (numeroDeDia ===7 || numeroDeDia ===1 ){
      return "Es fin de semana";
   } else {return "Es dia laboral";}

   //no estoy seguro de si esté bien o se supone que deba hacerlo con un array 

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código
   var numstr=num.toString();
   var digitos= numstr.split("");
   console.log(digitos);
   numstr.split("");
   if (numstr[0]==9){
      return true;
   }else return false;





}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (i=0;i<array.length-1;i++){

      if (array[i]!==array[i+1]){
         return false;
      }

   } return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   //! Cuidado con el "alguno"
   var mes=[];
   for (let i=0;i<array.length;i++){
      if (array[i]==="Enero"){mes.push("Enero");}
      if (array[i]==="Marzo"){mes.push("Marzo");}
      if (array[i]==="Noviembre"){mes.push("Noviembre");}
   }
   console.log(mes.length)


   if (mes.includes("Enero") && mes.includes("Marzo") && mes.includes("Noviembre")){

      return mes;
   } else return "No se encontraron los meses pedidos";

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   //* let x=[0,6,12,18,24,30,36,42,48,54,60];
   //* return x;
   //*? Asumiré que debería poder poner cualquier límite de la tabla sin escribirlo
   var tabla=0;
   var arrtabla=[0];
   for (let i=0 ;i<10;i++){  //aquí fácilmente si me dieran un límite coloco el límite en vez de 10

      tabla=tabla+6;
      arrtabla.push(tabla);
   }
   return arrtabla;


}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var nummay100=[];
   for (let i=0; i<array.length;i++){

      if (array[i]>100){
         nummay100.push(array[i]);
      }

   }

   return nummay100;

}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var ar=[];
   for (let i=0; i<10;i++){
      num=num+2
      ar.push(num);

      if (num===10){
         return "Se interrumpió la ejecución";  
         // con un return se termina la función directamente, por lo que no se necesita el break
         // en caso de querer usar el break pondría un if extra al final del for
      }

   } 
   //* if(num===10){return "Se interrumpió la ejecución"} else return ar:
   return ar;

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var ar=[];
   for (let i=0; i<10;i++){

      if (i===5){
         continue;
         
      }
      num=num+2
      ar.push(num);

      

   } 
   return ar;



}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
