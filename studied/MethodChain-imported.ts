import { Calculator} from './MethodChain';

let calc = new Calculator
let result = calc.add(1).add(2).multiply(3).multiply(4).value
console.log(result)  // (0 + 1 + 2) * 3 * 4 = ?
