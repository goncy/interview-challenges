# Carrito de compras

Estamos implementando un carrito de compras para nuestra tienda virtual. Dado un listado de productos con `id`, `nombre` y `precio`, tenemos que implementar una función que reciba: un producto, una cantidad (positiva o negativa) y opcionalmente un carrito base y devuelva un nuevo carrito. Si la cantidad es 0, debemos eliminar el producto del carrito, el formato del carrito debe ser el siguiente:

```ts
interface Producto {
  id: string;
  nombre: string;
  precio: number;
}

type Item = {
  cantidad: number;
  producto: Producto;
}

type Carrito = [Producto['id'], Item][]

// Input
let carrito = manejarCarrito({id: 'pizza', nombre: 'Pizza', precio: 100}, 5)

// Output
[
  ['pizza', {
    cantidad: 5,
    producto: {
      id: 'pizza',
      nombre: 'Pizza',
      precio: 100
    }
  }]
]

---

// Input
carrito = manejarCarrito({id: 'pizza', nombre: 'Pizza', precio: 100}, -3, carrito)

// Output
[
  ['pizza', {
    cantidad: 2,
    producto: {
      id: 'pizza',
      nombre: 'Pizza',
      precio: 100
    }
  }]
]

---

// Input
carrito = manejarCarrito({id: 'pizza', nombre: 'Pizza', precio: 100}, -2, carrito)

// Output
[]
```
