import { describe, expect, it } from "vitest";
import { CPFValidator } from "./validator";

describe("CPF validator", () => {
  const checkCPF = new CPFValidator("261.903.890-15");

  it("should remove letters and symbols and the last two digits of the CPF", () => {
    checkCPF.clearCPF();

    expect(checkCPF.cpf).toBe("26190389015");
    expect(checkCPF.removeDigits()).toBe("261903890");
  });

  it("should find the penultimate digit of the CPF", () => {
    const partialCPF = checkCPF.removeDigits();

    expect(CPFValidator.createDigit(partialCPF)).toBe("1");
  });

  it("should return valid CPF for CPF: 261.903.890-15", () => {
    expect(checkCPF.validate()).toBeTruthy();
  });

  it("should return invalid CPF for CPF: 261.903.890-13", () => {
    const checkCPF = new CPFValidator("261.903.890-13");

    expect(checkCPF.validate()).toBeFalsy();
  });
});
