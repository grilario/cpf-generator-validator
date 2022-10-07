# CPF Generator and Validator

Use to generate and validate CPF's(Cadastro de Pessoa Física)

## Generating CPF

```js
import { CPFGenerator } from "./lib/generator";

new CPFGenerator().generate(); // Generate a CPF without formation, only numbers
new CPFGenerator().generate({ format: true }); // Generate a CPF in the format 000.000.000-00
```

## Validating CPF

```js
import { CPFValidator } from "./lib/validator";

new CPFValidator("00000000000").validate();
// or
new CPFValidator("000.000.000-00").validate();

// Returns true or false
```
