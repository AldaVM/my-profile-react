---
title: "Métodos esenciales para trabajar con arreglos en JavaScript"
excerpt: "Una breve introducción a métodos esenciales que te ayudarán a trabajar con arreglos en JavaScript"
description: "Una breve introducción a métodos esenciales que te ayudarán a trabajar con arreglos en JavaScript"
tag: "#javascript"
coverImage:
  default: "/assets/blog/cover.png"
  medium: "/assets/blog/cover.png"
date: "2020-09-17"
timeRead: "5 min"
author:
  name: Aldair Valencia
  picture: "/assets/blog/cover.png"
ogImage:
  url: "/assets/blog/cover.png"
---

Trabajar con arreglos en JavaScript ahora es una tarea fácil gracias a métodos incorporados en las últimas versiones de ECMAScript, tales como <code class="code-mark">filter</code>, <code class="code-mark">map</code> y <code class="code-mark">reduce</code> son métodos que utilizo día a día en el trabajo, hacen que tu código sea más legible y son alternativas a nuestras clásicas estructuras de control (<code class="code-mark">for</code> y <code class="code-mark">while</code>) y métodos como <code class="code-mark">forEach</code>. A continuación veremos una pequeña introducción de cada método y algunos ejercicios para reforzar los conceptos.

## Map

El método map nos permite iterar un arreglo y ejercutar una función por cada iteración, como resultado obtendremos un arreglo del mismo tamaño que el original, su sintaxis es la siguiente:

<blockquote class="code-sintaxis">
 <span>array.map(function callback(currentValue, index, originalArray) { <br>
  <span>// Setencia a ejercutar por cada elemento del arreglo</span> <br>
 })<span>
</blockquote>

Hay que tener en cuenta que en cada iteración, nuestra función callback debe retornar un valor, dicho valor será un elemento en el nuevo arreglo que retorne <code class="code-mark">map</code>.

Ahora veremos un ejercicio con <code class="code-mark">map</code> y seguidamente crearemos nuestra propia función custom map para tener más claro su funcionamiento.

### Ejercicio:

Supongamos que tenemos una lista de clientes y necesitamos agregar a cada uno un descuento, el cual será un valor booleano, siendo true si las compras del mismo son mayores a 150, en caso contrario sería false.

```
const clients = [
  {
    id: "001",
    name: "Jon",
    amount_shopping: 150,
  },
  {
    id: "002",
    name: "Juan",
    amount_shopping: 35,
  },
  {
    id: "003",
    name: "Gabriel",
    amount_shopping: 140,
  },
  {
    id: "004",
    name: "Jin",
    amount_shopping: 200,
  },
  {
    id: "005",
    name: "Aurelio",
    amount_shopping: 480,
  },
];
```

Para el ejercicio tenemos que verificar si la propiedad <code class="code-mark">amount_shopping</code> es mayor a 150, seguidamente agregar una nueva propiedad llamada <code class="code-mark">discount</code> con el valor true si cumple la condición, veamos como podemos hacer esto usando <code class="code-mark">map</code>.

```
const clientsWithDiscount = clients.map((client) => ({
  ...client,
  discount: client.amount_shopping > 150,
}));
```

Con estás pocas líneas de código hemos resuelto el ejercicio, veamos lo que hace:

Primero declaramos una constante que guardará el nuevo arreglo, nuestra arrow function dentro de map retornará un nuevo objeto por cada iteración, en la línea 2, gracias <code class="code-mark">spread syntax</code> desconponemos las propiedades ya existentes del objeto cliente y las creamos a nuestro nuevo objecto, por último, agregamos una nueva key llamada <code class="code-mark">discount</code>, la cual tendrá como valor el resultado de la expresión booleana de <code class="code-mark">client.amount_shopping > 150</code>.

Para entender mejor el funcionamiento de <code class="code-mark">map</code> vamos a crear nuestra propia función MyMap que en ensencia hará lo mismo:

```
Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    newArray.push(callback(this[index]));
  }
  return newArray;
};
```
