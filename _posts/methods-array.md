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

Trabajar con arreglos en JavaScript ahora es una tarea fácil gracias a métodos incorporados en las últimas versiones de ECMAScript, tales como <code class="code-mark">filter</code>, <code class="code-mark">map</code> y <code class="code-mark">reduce</code> son métodos que utilizo día a día en el trabajo, hacen que tu código sea más legible, siendo métodos alternativos a clásicas estructuras de control como: <code class="code-mark">for</code> y <code class="code-mark">while</code>, además, de métodos como <code class="code-mark">forEach</code>. A continuación veremos una pequeña introducción de cada método y algunos ejercicios para reforzar los conceptos.

## Map

El método map nos permite iterar un arreglo y ejercutar una función por cada iteración, como resultado obtendremos un arreglo del mismo tamaño que el original, su sintaxis es la siguiente:

#### Sintaxis:

<blockquote class="code-sintaxis">
 <span>array.map(function callback(currentValue, index, originalArray) { <br>
  <span>// Setencia a ejercutar por cada elemento del arreglo</span> <br>
 })<span>
</blockquote>

Hay que tener en cuenta que en cada iteración, nuestra función callback debe retornar un valor, dicho valor será un elemento en el nuevo arreglo que retorne <code class="code-mark">map</code>.

Ahora resolvamos un ejercicio con <code class="code-mark">map</code>, seguidamente crearemos nuestra propia función custom map para tener más claro su funcionamiento.

### Ejercicio:

Supongamos que tenemos una lista de clientes y necesitamos agregar a cada uno un descuento, el cual será un valor booleano, siendo <code class="code-mark">true</code> si las compras del mismo son mayores a 150, en caso contrario será <code class="code-mark">false</code>.

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

Para resolver el ejercicio tenemos que verificar si la propiedad <code class="code-mark">amount_shopping</code> es mayor a 150, seguidamente agregar una nueva propiedad llamada <code class="code-mark">discount</code> a cada nuevo elemento con el valor <code class="code-mark">true</code> si cumple la condición, veamos como podemos hacer esto usando <code class="code-mark">map</code>.

```
const clientsWithDiscount = clients.map((client) => ({
  ...client,
  discount: client.amount_shopping > 150,
}));
```

Con estás pocas líneas de código hemos resuelto el ejercicio, veamos lo que hace:

Primero declaramos una constante que guardará el nuevo arreglo, nuestra arrow function dentro de map retornará un nuevo objeto por cada iteración, en la línea 2, gracias <code class="code-mark">spread syntax</code> desconponemos las propiedades ya existentes del objeto <code class="code-mark">client</code> y las agregamos a nuestro nuevo objeto, por último, agregamos una nueva key llamada <code class="code-mark">discount</code>, la cual tendrá como valor el resultado de la expresión booleana de <code class="code-mark">client.amount_shopping > 150</code>.

Para entender mejor el funcionamiento de <code class="code-mark">map</code> vamos a crear nuestra propia función MyMap que en ensencia hará lo mismo:

```
Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    newArray.push(callback(this[index], index = index, this));
  }
  return newArray;
};
```

Iniciamos extendiendo el prototipo <code class="code-mark">Array</code> con un nuevo método llamado <code class="code-mark">myMap</code>, el cual tomará como argumento una función callback, en la línea dos inicializamos un array que retornaremos al ejectuar el método, luego, el bucle <code class="code-mark">for</code> se ejecutará el mismo número de veces que el tamaño del arreglo al cual se le aplicará el método, y por cada iteración agregamos un nuevo elemento a <code class="code-mark">newArray</code> que contendrá el resultado de la función callback, está función tomará como primer parametro cada elemento del arreglo (al que se le aplicará nuestro método), como segundo tenemos el index actual y como tercero el arreglo original.

Para validar su funcionamiento resolveremos el mismo ejercicio de antes con nuestra propia función <code class="code-mark">myMap</code>:

```
const clientsWithDiscount = clients.myMap((client) => ({
  ...client,
  discount: client.amount_shopping > 150,
}));
```

## Filter

El método <code class="code-mark">filter</code> es similar a <code class="code-mark">map</code> con la diferencia que este retornará un nuevo arreglo con la misma cantidad de datos que el original o menor a ella, ya que nos permite filtrar elementos de un arreglo si cumplen con cierta condición.

#### Sintaxis:

<blockquote class="code-sintaxis">
 <span>array.filter(function callback(currentValue, index, originalArray) { <br>
  <span>// codición</span> <br>
 })<span>
</blockquote>

Como observamos <code class="code-mark">filter</code> recibe una función callback al igual que <code class="code-mark">map</code>, pero dentro de la función debemos especificar una expresión booleana.

Veamos un ejercicio:

### Ejercicio:

Vamos a trabajar con nuestra lista clientes del ejercicio anterior, pero ahora solo nos interesa obtener en un arreglo los clientes que aplican al descuento (client.amount_shopping > 150).

```
const clientsWithDiscount = clients.filter((client) => client.amount_shopping > 150);
```

Al imprimir los resultados <code class="code-mark">clientsWithDiscount</code> solo tenemos los clientes que cumplen con la condición, como vemos <code class="code-mark">filter</code> es muy últil al tener que filtrar elementos de un arreglo que cumplan con cierta condición.

Ahora te reto a que crees tu propio método <code class="code-mark">MyFilter</code>.

## Reduce
