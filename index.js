import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

const ContaC1 = new ContaCorrente(1000, '001')
const ContaP1 = new ContaPoupanca(0, '001')

const ContaC2 = new ContaCorrente(1000, '001')
const ContaP2 = new ContaPoupanca(0, '001')

const Cliente1 = new Cliente(ContaC1, ContaP1, 'yeda', '57036740')
const Cliente2 = new Cliente(ContaC2, ContaP2, 'victor', '08367852400')

console.log("\nMostrar informações dos Clientes:")
console.log(Cliente1)
console.log(Cliente2)

console.log("\nMétodo depositar 400 em victor a partir da poupança:")
ContaP2.depositar(400)
console.log("\nMétodo depositar 400 em victor a partir da conta corrente:")
ContaC2.depositar(400)

console.log("\nApos deposito:")
console.log(Cliente1)
console.log(Cliente2)


console.log("\nTransferir 500 de victor para yeda:")
ContaC2.transferir(500, ContaC1)

console.log("\nApos transferencia:")
console.log(Cliente1)
console.log(Cliente2)
