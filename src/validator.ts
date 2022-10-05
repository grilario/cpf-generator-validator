class CPFValidator {
  cpf: string;

  constructor(cpf: string) {
    this.cpf = cpf;
  }

  clearCPF() {
    this.cpf = this.cpf.replace(/\D+/g, "");
  }

  removeDigits() {
    return this.cpf.slice(0, -2);
  }

  static createDigit(partialCPF: string) {
    const cpf = Array.from(partialCPF, Number);

    const counter = cpf.reduce((_, digit, i) => {
      const multiplicand = cpf.length - i + 1;
      return _ + multiplicand * digit;
    }, 0);

    const digit = 11 - (counter % 11);
    return digit > 9 ? "0" : String(digit);
  }

  validate() {
    this.clearCPF();
    const cpfNoDigits = this.removeDigits();
    const penultNumber = CPFValidator.createDigit(cpfNoDigits);
    const lastNumber = CPFValidator.createDigit(cpfNoDigits + penultNumber);

    const isValid = this.cpf.slice(-2) === "".concat(penultNumber, lastNumber);

    return isValid;
  }
}

export { CPFValidator };
