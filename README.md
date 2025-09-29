# LinePay - Mais que um négocio, uma solução Node.js

## introdução

Olá sou Rodrigo Carvalho👋

O objetivo desse projeto é mostrar como uma solução empresarial pode ser vendida, e além disso mostrar, que o principal, como a tecnologia do Node.js do Javascript consegue ser uma ótima alternativa para pequenas e até mesmo, GIGANTESCAS empresas

Esse meu pensamento começou quando dei uma olhada nisso aqui:
<img width="719" height="285" alt="image" src="https://github.com/user-attachments/assets/5da16215-294c-44c6-be74-70ed9b655750" />

Ai eu começei a dúvidar... Será mesmo que tanta gente usa esse ferramenta que é o Node.js, e pode apostar que SIM!

Mas por que tantas pessoas usam, vou listar alguns motivos
1. Linguagem fácil (teóricamente)
2. encontra facilmente profissionais
3. ferramenta lotada de frameworks e lib
4. custo baixo de salário para desenvolvedores
5. uma pessoa que trabalha com Node.js as vezes também trabalha no Front-End

Enfim dito isso, por que reclamam tanto do Node.js

Esse problema vem mais de como o JavaScript funciona, que sinceramente chega a ser triste

<img width="639" height="724" alt="36716123_2077835782484342_36801779463094272_n" src="https://github.com/user-attachments/assets/d01bbe0b-6331-4a73-a0e6-33018567b193" />

Simplesmente uma linguagem mal feita e criada as pressas

Vou listar algumas dos motivos
- Tipagem Fraca e Dinâmica (minha maior raiva 😤)
- converte tipos absolutamente do nada
- problemas de escopo (bem chato também)
- Callback hell
- Performance e entre outros (muitos aliás)

### Por que o Node.js pode ser uma ótima ferramenta?

O Node.js em si é uma excelente ferramenta quando se utilizada em 100%, ainda mais atrelada com outras tecnologias como TypeScript e libs para testes automatizados

alguns dos exemplos de por que usar Node.js são
- ferramentas nativas excelentes que te deixam com controle total do projeto (pode ser também um malefício dependendo da pessoa)
- Node.js puro pode ser bem performático ( melhor que Python )
- Ecossistema riquissímo de bibliotecas (O que pode se tornar também um problama se for mal utilizado)
- comunidade grande de programadores
- fácil portabilidade e manutenção
- entre outras qualidades

Vou mostrar um exemplo de como sua perfomance consegue ser muito boa
<img width="946" height="506" alt="image" src="https://github.com/user-attachments/assets/3cb268e7-f2e4-41c5-8b1c-395957a76df2" />

Consegue ser 5,31x mais rápido que o python em criar e consegue ser 31,4x mais rápido em listar, algo muito superior em relação a linguagem Python para back-end

### O que vou mostrar aqui?

Vou além de mostrar como o Node.js NATIVO consegue ser uma excelente ferramenta, que é possível resolver problemas reais de négocios como o Stripe e vender isso como um produto.

Além disso vou usar MUITA IA (Inteligência Artificial) por que além de ser uma maravilhosa ferramenta, também está na moda 😁


## Capítulo 1: O que vou fazer nessa aplicação?

Nessa aplicação vou resolver esses seguintes problemas

Desafio: Idempotência e Cobranças Duplicadas em Ambientes Distribuídos

"Uma análise mais técnica"
Garantia de Entrega Exata (Exactly-Once Delivery) em Sistemas Distribuídos Baseados em Webhooks para Ambientes de Alta Confiabilidade Financeira

Este projeto propõe um novo protocolo de entrega determinística de mensagens assíncronas com garantia exactly-once sobre infraestruturas baseadas em webhooks — frequentemente sujeitas a falhas, duplicações e condições de corrida. O estudo combina consensus algorithms como Raft/Paxos, técnicas de idempotency orchestration, e event sourcing para construir uma camada confiável de comunicação entre sistemas financeiros, com ênfase no ecossistema de pagamentos como Stripe, PayPal e bancos via Open Banking.

Mais vou utilizar muito do Node.js nativo para fazer esse Projeto

entre as tecnologias a parte que vou usar seram:

### TypeScript
basicamente uma linguagem a parte do javascript que permite uma tipagem forte se for configurado da maneira certa, claro que tem suas excessões, porém já ajuda muito, oque eu recomendo é ativar o modo estrito no módulo de configuração do TypeScript

```json

{
  "compilerOptions": {
    "strict": true
  }
}

```
### EsLint + Prettier
Eles basicamente vão deixar nosso código bonito, "sem" erros, entre aspas por que as vezes escapa 😋, e com um certo "padrão de projeto" para nossa aplicação

Abaixo vou listar alguns exemplos de por que utilizá-lo
- Previne erros comuns (ex.: esquecer return, usar variável não definida).
- Força consistência no código (mesmo time ou projeto grande).
- Integra com IDEs (VSCode, WebStorm) e exibe avisos em tempo real.
- Funciona com TypeScript para reforçar tipos e boas práticas.
- Pode aplicar auto-fix em várias regras (eslint --fix).

### Bun
Tecnologia moderna criada a pouquíssimo tempo para runtime de TypeScript/JavaScript, "rival" do Node.js e Deno, porém nessa aplicação só vou usar para rodar os arquivos typeScript da aplicação para depois fazer o Build, pode ser usado outras tecnologias como ts-node, mas vamos utilizar está

Se quiserem usar apenas rodam estes comandos

```bash
curl -fsSL https://bun.sh/install | bash
```

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Jest
Criado para ser tudo em um, o Jest é uma biblioteca para testes JavaScript e TypeScript, tudo de testes que precisamos para o código de nossa aplicação vai ser o Jest

### Docker Swarm
Um processo de orquestração para fazermos o deploy de nossa aplicação utilizando o Docker, basicamente vamos criar um deploy aonde caso ele caia, outro já vai entrar, impossibilitando que o servidor caia de uma vez e acabe com nossa aplicação

Mais para a parte do deploy, vou explicar como funciona essa ferramenta.









