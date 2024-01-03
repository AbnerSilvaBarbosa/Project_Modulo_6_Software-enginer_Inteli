<table>
<tr>
<td>
<a href= "https://www.dell.com/pt-br"><img src="docs/img/Dell_Logo.svg.png" alt="Dell" border="0" width="20%"></a>
</td>
<td><a href= "https://www.inteli.edu.br/"><img src="https://github.com/2023M6T3-Inteli/Grupo-6/blob/main/docs/img/inteli-logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="30%"></a>
</td>
</tr>
</table>

# Desenvolvimento de serviços em cloud computing com app dispositivo móvel

## TINAN


### Integrantes:

- <a href="https://www.linkedin.com/in/abner-silva-barbosa-8a3542225/">Abner Silva</a>
- <a href="https://www.linkedin.com/in/arthur-fraige/">Arthur Fraige</a>
- <a href="https://www.linkedin.com/in/carolina-favaro-fricks-1a0423231/">Carolina Fricks</a>
- <a href="https://www.linkedin.com/in/gabriel--nascimento/">Gabriel Nascimento</a>
- <a href="https://www.linkedin.com/in/mike-mouadeb/">Mike Mouadeb</a>
- <a href="https://www.linkedin.com/in/sophia-de-oliveira-tosar-aba7ab23b/">Sophia Tosar</a>
<br><br>
## 💻 Projeto
Um aplicativo mobile de rede social para funcionários tem como objetivo engajar os colaboradores da Dell, fornecendo uma plataforma interna onde eles possam se conectar, compartilhar informações, colaborar, celebrar conquistas e fortalecer os laços dentro da organização. O aplicativo inclui recursos como perfis de usuários, feeds de notícias, processo de gameficação e até mesmo um ranking.
A solução surgiu diante de um problema muito comum em grandes organizações: a retenção de talentos e a desmotivação de funcionários.
Com esse projeto, os benefícios gerados são diversos: aumento do engajamento dos funcionários, melhoria da comunicação interna, facilitação da integração de novos funcionários, identificação de talentos e líderes emergentes e promoção de um ambiente de trabalho mais transparente e participativo.

## 💾 Estrutura de pastas
|📂[codigo](/codigo)<br>
&emsp;|📂[backend](/codigo/backend)<br>
 &emsp; &emsp;|📂[IA](/codigo/backend/IA)<br>
 &emsp; &emsp;|📂[database](/codigo/backend/database)<br>
 &emsp; &emsp;|📂[logs](/codigo/backend/logs)<br>
 &emsp; &emsp;|📂[modules](/codigo/backend/modules)<br>
 &emsp; &emsp; &emsp;|📂[admin](/codigo/backend/modules/admin)<br>
 &emsp; &emsp; &emsp;|📂[health](/codigo/backend/modules/health)<br>
 &emsp; &emsp; &emsp;|📂[leader](/codigo/backend/modules/leader)<br>
 &emsp; &emsp; &emsp;|📂[user](/codigo/backend/modules/user)<br>
 &emsp; &emsp;|📂[prisma](/codigo/backend/prisma)<br>
 &emsp; &emsp;|📂[routes](/codigo/backend/routes)<br>
 &emsp; &emsp;|📂[scripts](/codigo/backend/scripts)<br>
  &emsp;|📂 [frontend](/codigo/frontend)<br>
  &emsp; &emsp;|📂[api](/codigo/frontend/api)<br>
  &emsp; &emsp;|📂[assets](/codigo/frontend/assets)<br>
  &emsp; &emsp;|📂[components](/codigo/frontend/components)<br>
  &emsp; &emsp;|📂[context](/codigo/frontend/context)<br>
  &emsp; &emsp;|📂[pages](/codigo/frontend/pages)<br>
  &emsp; &emsp;|📂[scripts](/codigo/frontend/scripts)<br>
<br>
|📂 [docs](/docs)<br>
  &emsp;|📂[img](/docs/img)<br>
  &emsp; &emsp;|📂[src](/docs/img/img_docs)<br>
|📄[readme.md](/README.md)<br>

## 🛠 Instalação

1 - Clone do GitHub atual
<br>
2 - Para rodar localmente o projeto, é necessário:
<br>
&emsp; 2.1 - Criar o .env dentro da pasta ```backend ```;
<br>
&emsp; 2.2 - Rodar no prompt de comando dentro da pasta ```backend o comando``` ```npm run start:dev``` ;
<br>
&emsp; 2.3 - No front-end é necessário baixar as dependências utilizando o node 18 >=;
<br>
&emsp; 2.4 - Rodar no prompt de comando dentro da pasta ```bfrontend o comando``` ```npm run dev```;
<br>
&emsp; 2.5 - Para visualizar a aplicação no dispositivo móvel recomenda-se a utilização do [expo](https://expo.dev/);
<br>
3 - O projeto já está pronto para teste local.
<br>

## 💻 Configuração para Aplicação

1 - Criação de VPC e subredes na AWS
<br>
2 - Criação de EC2 na AWS
<br>
3 - Criação de LoadBalancer na AWS
<br>
4 - Criação de RDS na AWS
<br>
5 - Configuração de variáveis de ambiente para a ligação com os serviços AWS


## 📄 Histórico de lançamentos

A cada atualização os detalhes devem ser lançados aqui.

* Sprint 1 - 12/05/2023
    * Entrega da análise de negócios
    * A primeira versão do Wireframe
    * A primeira versão do Mockup
    * A primeira versão da arquitetura
    * Requisitos funcionais
    * Requisitos não funcionais
    * Benchmarking
    * Desing System
    * Casos de uso
* Sprint 2 - 24/02/2023
    * Segunda versão da arquitetura
    * Arquitetura de mensageria
    * Algumas páginas desenvolvidas em React-native
    * Definição de endpoints
    * Arquitetura backend
    * Arquitetura banco de dados
* Sprint 3 - 26/05/2023
    * Páginas a mais de React-native
    * Terceira versão da arquitetura
    * Pipeline de dados - ETL
    * Construção da base dados
    * Finalização dos testes unitários
    * Documentação da API
    * Construção dos logs no backend
    * Início da integração do back-end e front-end
* Sprint 4 - 09/06/2023
    * Implementação do modelo de recomendação
    * Finalização da integração
    * Implementação do MQTT - produção e consumo de mensagem
    * Fluxo da aplicação com a nova IA
* Sprint 5 - 23/06/2023
    * Finalização do front-end
    * Finalização da integração
    * Finalização do modelo de recomendação
    * Finalização da documentação
    * Testes de integração
    * Logs

## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"> This project is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

## Referências
- <a href="https://reactnative.dev/">React native</a>
- <a href= "https://expressjs.com/">Express</a>
- <a href= "https://code.visualstudio.com/">VS code</a>


