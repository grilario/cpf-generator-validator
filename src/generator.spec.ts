import { describe, expect, it } from "vitest";
import { CPFGenerator } from "./generator";
import { CPFValidator } from "./validator";

describe("CPF generator", () => {
  it("should generate a valid cpf", () => {
    const generated = new CPFGenerator().generate();

    expect(generated.length).toBe(11);
    expect(new CPFValidator(generated).validate()).toBeTruthy();
  });

  it("should generate a valid formatted cpf", () => {
    const generated = new CPFGenerator().generate({ format: true });

    expect(new CPFValidator(generated).validate()).toBeTruthy();
    expect(generated.match(/(\d{3}).(\d{3}).(\d{3})-(\d{2})/)).not.toBeNull();
  });
});
