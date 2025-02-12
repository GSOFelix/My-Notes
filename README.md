# **My Notes - React Native com TypeScript e Expo**

Este é um **app de notas** desenvolvido em **React Native** com **TypeScript**, utilizando o **Expo** como ferramenta de desenvolvimento e **SQLite** para armazenamento local dos dados. O aplicativo permite que os usuários **adicionem, editem, excluam e selecionem notas**, além de fornecer uma funcionalidade de **pesquisa** de notas usando palavras-chave no **título** ou **conteúdo**.

## **Funcionalidades**

- **Adicionar notas**: Permite ao usuário criar novas notas, com título e conteúdo.
- **Editar notas**: O usuário pode editar uma nota existente.
- **Excluir notas**: O usuário pode excluir notas que não deseja mais manter.
- **Pesquisar notas**: O aplicativo permite pesquisar notas utilizando palavras-chave, buscando tanto no título quanto no conteúdo da nota.
- **Armazenamento local com SQLite**: Utiliza o SQLite para armazenar as notas localmente no dispositivo.

## **Tecnologias Utilizadas**

- **React Native**: Framework para desenvolvimento de apps móveis multiplataforma.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática e outros recursos.
- **Expo**: Plataforma que facilita o desenvolvimento com React Native, permitindo uma configuração rápida e fácil.
- **SQLite**: Banco de dados local para armazenar as notas no dispositivo do usuário.
- **React Navigation**: Biblioteca de navegação para facilitar a transição entre telas no aplicativo.
- **Lottie**: Animações interativas para tornar a interface mais dinâmica.

## **Funcionalidades Detalhadas**

1. **Adicionar Notas**: 
   - O usuário pode criar uma nova nota, fornecendo um título e conteúdo.
   - As notas são salvas localmente no banco de dados SQLite.
   
2. **Editar Notas**: 
   - O usuário pode editar o título e o conteúdo das notas já salvas.
   - As alterações são automaticamente salvas no banco de dados.

3. **Excluir Notas**: 
   - O usuário pode excluir notas que não são mais necessárias, removendo-as do banco de dados.

4. **Pesquisar Notas**: 
   - A pesquisa permite que o usuário localize notas rapidamente digitando palavras-chave no campo de busca.
   - A busca é feita no título e no conteúdo das notas.

5. **Armazenamento Local com SQLite**:
   - As notas são armazenadas localmente usando SQLite, garantindo que os dados não sejam perdidos, mesmo se o app for fechado.

## **Tela de Pesquisa**
A funcionalidade de pesquisa oferece uma experiência rápida e intuitiva, permitindo que o usuário busque por notas utilizando palavras-chave no título ou no conteúdo. A pesquisa é feita em tempo real, proporcionando uma resposta imediata enquanto o usuário digita.

## **Instruções de Instalação**
Para rodar este projeto em sua máquina local, siga os passos abaixo:

1. Clonar o Repositório
    ```sh
    git clone https://github.com/GSOFelix/My-Notes
    ```
cd my-notes

2. Instalar as Dependências
Execute o comando abaixo para instalar as dependências do projeto:
    ```sh
    npm install
    ```

3. Rodar o Projeto com Expo
Inicie o servidor do Expo com o seguinte comando:
    ```sh
    npm start
    ```
Isso abrirá a página do Expo no seu navegador. Você pode escanear o QR code com o aplicativo Expo Go no seu celular para testar o app no dispositivo físico.