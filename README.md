# POO
Programação Orientada ao Objeto

Exercício de fixação dos conceitos de Módulos, Herança, Construtor, get e set, Classe Abstrata, Polimorfismo em Javascript executando no Node.
Essa aplicação implementa um sistema bancário onde são criadas contas, com dados do saldo, agência e clientes, e métodos para movimentações financeiras. 
Para executar a aplicação, usar o comando "node index.js".

Módulos:
O uso de **módulos** é essencial para a organização no desenvolvimento e manutenção de uma aplicação. Para que se tenha um código limpo, organizado e coerente, o código é dividido em diferentes arquivos .js, cada um contendo uma funcionalidade da aplicação. O comando "import" é usado para importar as classes e métodos de outros módulos para serem usados no módulo que se queira usar. O módulo principal da aplicação, onde o programa deve começar a rodar é denominado "index.js".

Herança, Construtor, get e set:
As classes "ContaCorrente" e "ContaPoupanca" (classes filho) **herdam** os recursos da classe "Conta" (classe pai) através do comando "extends" e executa os métodos da classe pai através do comando "super".
Dentro da classe pai estão definidos o **construtor**, que cria e inicia uma instância de uma conta; os métodos **set** e **get**, que definem e retornam o valor do saldo inserido na criação da classe filho;
os métodos "sacar", "depositar" e "transferencia" para realizar as transações bancárias.

Classe Abstrata:
Uma conta pode ser do tipo conta corrente ou conta poupança, e a classe "Conta" existe para prover os recursos necessários para a criação e movimentação das contas, sejam correntes ou poupanças. Como não pode existir uma conta que não seja corrente ou poupança, a classe "Conta" não pode ser instanciada, apenas herdada pelas classes "ContaCorrente" e "ContaPoupanca". Portanto, a classe "Conta" é uma **classe abstrata**.

Polimorfismo:
O método "depositar" pode ser encontrado tanto na classe pai "Conta" quanto na classe filho "ContaPoupanca", com diferentes aplicações. Dessa forma, ao chamar o método a partir de uma conta poupança, ele será executado conforme definido dentro da classe "ContaPoupanca". Já quando é chamado a partir de uma conta corrente, ele será executado conforme definido na classe "Conta", já que a classe "ContaCorrente" não possui uma definição específica desse método e ele será herdado da classe pai. Portanto, o método "depoistar" é um **método polimórfico**

