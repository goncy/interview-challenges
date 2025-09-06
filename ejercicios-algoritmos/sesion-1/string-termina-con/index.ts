// export default function stringTerminaCon(
//   string: string,
//   final: string,
// ): boolean {

import { Operation } from "../../helpers/Operation";
import { Validation } from "../../helpers/Validation";

//   if (final.length > string.length) return false

//   const stringFinal = [...string].reverse().splice(0, final.length)
//   return stringFinal.reverse().join('') === final
// }


// export default function stringTerminaCon(
//   string: string,
//   final: string,
// ): boolean {

//   if (final.length > string.length) return false

//   for (let index = 0; index < final.length; index++) {
//     const finalChar = final[(final.length - 1) - index]
//     const char = string[(string.length - 1) - index]

//     if (finalChar !== char) return false
//   }

//   return true
// }


function len<T>(value: Iterable<T>): number {
  return [...value].length
}

export default function stringTerminaCon(
  string: string,
  final: string,

): boolean {
  if (len(final) > len(string)) return false


  const indexOfFirstfinalLetter = len(string) - len(final)
  return final === string.slice(indexOfFirstfinalLetter, string.length)

}


// export default function stringTerminaCon(
//   string: string,
//   final: string,
// ): boolean {

//   const stringEndCharacters: string =
//     string.slice(Operation.substraction(...[string, final].map(len)), len(string))
//   return Validation.isDeepEqual(final, stringEndCharacters)
// }
