export class Validation {
  static isEmpty<T>(iterable: Iterable<T>): boolean {
    return this.isDeepEqual([...iterable].length, 0);
  }

  static isDeepEqual<T>(firstValue: T, secondValue: T): boolean {
    return firstValue === secondValue;
  }

  static isEven(value: number) {
    return this.isDeepEqual(value % 2, 0);
  }
}
