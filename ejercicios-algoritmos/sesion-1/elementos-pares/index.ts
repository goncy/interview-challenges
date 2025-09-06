import { Validation } from "../../helpers/Validation";

function getElementAndCounter(elements: unknown[]) {
  const elementAndCounter: Map<unknown, number> = new Map();

  for (const element of elements) {
    if (!elementAndCounter.has(element)) {
      elementAndCounter.set(element, 1);
    } else {
      elementAndCounter.set(element, elementAndCounter.get(element) + 1);
    }
  }

  return {
    elementAndCounter,

  };
}

export default function filtrarPares(array: unknown[]): unknown[] {
  if (Validation.isEmpty(array)) return [];

  const { elementAndCounter } = getElementAndCounter(array);
  
  const evenTimesElements = [...elementAndCounter]
    .filter(([_, counter]) => (Validation.isEven(counter)))
    .map(([element]) => element);

  return evenTimesElements;
}
