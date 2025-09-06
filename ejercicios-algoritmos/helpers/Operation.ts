export class Operation {
    static sum(...numbers: Array<number>): number {
        return numbers
            .filter(isFinite)
            .reduce((previousNumber, currentNumber) => previousNumber + currentNumber, 0) ?? 0
    }

    static substraction(...numbers: Array<number>): number {
        return numbers
            .filter(Number.isFinite)
            .reduce((previousNumber, currentNumber) => previousNumber - currentNumber) ?? 0
    }
}

