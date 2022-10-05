import { CPFValidator } from "./validator";

class CPFGenerator {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  generate({ format }: { format?: boolean } = {}) {
    const cpfNoDigit = this.rand();
    const digitOne = CPFValidator.createDigit(cpfNoDigit);
    const digitTwo = CPFValidator.createDigit(cpfNoDigit + digitOne);

    const newCPF = "".concat(cpfNoDigit, digitOne, digitTwo);

    if (format) {
      return newCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    return newCPF;
  }
}

export { CPFGenerator };
