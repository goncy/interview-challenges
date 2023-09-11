export interface Producto {
  id: string;
  nombre: string;
  precio: number;
}

export type Item = {
  cantidad: number;
  producto: Producto;
}

export type Carrito = [Producto['id'], Item][]
