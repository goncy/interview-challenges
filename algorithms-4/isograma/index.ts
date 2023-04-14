export default function esIsograma(string: string): boolean {
  // TODO: implement
  const palabra = string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z]/g, "");
  if (palabra.split(" ").length > 1 || palabra.length === 0) {
    return false;
  }
  const set = new Set();
  for (const letra of palabra) {
    if (set.has(letra)) {
      return false;
    } else {
      set.add(letra);
    }
  }
  return true;
}

/*
MEJORA:
export default function esIsograma(string: string): boolean {
  // TODO: implement
  const palabra = string.toLowerCase().normalize('NFD').replace(/[^a-z]/g, "")
  
  return new Set([...palabra]).size === palabra.length
}
*/
