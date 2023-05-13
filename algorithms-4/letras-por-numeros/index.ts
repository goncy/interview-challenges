export default function letrasPorNumeros(string: string): string {
  // TODO: implement
  const cleanUp = string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^a-z]/g, "");
  let result = "";
  for (let i = 0; i < cleanUp.length; i++) {
    if (cleanUp[i] === " ") continue;
    let index = cleanUp.charCodeAt(i) - 96;
    result += index + " ";
  }
  return result.trim();
}
