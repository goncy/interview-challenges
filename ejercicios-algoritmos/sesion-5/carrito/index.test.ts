import type {Carrito} from "./types";

import {expect, describe, it} from "vitest";

import manejarCarrito from ".";

describe("manejarCarrito", () => {
  it("debería agregar un elemento cuando el carrito está vacío", () =>
    expect(
      manejarCarrito(
        {
          id: "pizza",
          nombre: "Pizza",
          precio: 100,
        },
        1,
      ),
    ).toMatchObject([
      [
        "pizza",
        {
          cantidad: 1,
          producto: {
            id: "pizza",
            nombre: "Pizza",
            precio: 100,
          },
        },
      ],
    ]));

  it("debería modificar el carrito cuando el elemento ya existe", () => {
    const carrito: Carrito = [
      [
        "pizza",
        {
          cantidad: 5,
          producto: {
            id: "pizza",
            nombre: "Pizza",
            precio: 100,
          },
        },
      ],
    ];

    expect(
      manejarCarrito(
        {
          id: "pizza",
          nombre: "Pizza",
          precio: 100,
        },
        -3,
        carrito,
      ),
    ).toMatchObject([
      [
        "pizza",
        {
          cantidad: 2,
          producto: {
            id: "pizza",
            nombre: "Pizza",
            precio: 100,
          },
        },
      ],
    ]);
  });

  it("debería eliminar un producto del carrito cuando la cantidad es 0", () => {
    const carrito: Carrito = [
      [
        "pizza",
        {
          cantidad: 5,
          producto: {
            id: "pizza",
            nombre: "Pizza",
            precio: 100,
          },
        },
      ],
    ];

    expect(
      manejarCarrito(
        {
          id: "pizza",
          nombre: "Pizza",
          precio: 100,
        },
        -5,
        carrito,
      ),
    ).toMatchObject([]);
  });
});
