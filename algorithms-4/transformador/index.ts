type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: number;
  nombre: string;
  edad: number;
};

export default function transformador(input: Input): Output[] {
  // TODO: implement
  const result: Output[] = [];
  for (let i = 0; i < input.nombres.length; i++) {
    let obj = {
      id: (i + 1),
      nombre: input.nombres[i],
      edad: input.edades[i],
    };
    result.push(obj);
  }
  console.log(result)
  return result;
}
