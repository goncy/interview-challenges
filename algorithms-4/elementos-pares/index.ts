export default function filtrarPares(array: unknown[]): unknown[] {
  // TODO: implement
  const mapa = new Map();
  const result: any = [];
  array.forEach((element) => {
    if (!mapa.has(element)) {
      mapa.set(element, 0);
    }
    mapa.set(element, mapa.get(element) + 1);
  });
  for (let [key, value] of mapa) {
    if (value % 2 === 0) {
      result.push(key);
    }
  }
  console.log(result)
  return result;
}
