<h1 align="center">:file_cabinet: Fábrica de Aplicativos</h1>

## :memo: Descrição
Projeto criado para a matéria de Códigos de Alta Performance Web. Site de uma fábrica de aplicativos.

## :books: Funcionalidades
* <b>Funcionalidades </b>: Neste site, o usuário irá fazer o seu cadastro, descrever as idéias que tem para o seu aplicativo, dar um nome para o aplicativo, escolher o que deseja de personalização e funcionalidades para o seu aplicativo, acompanhar o desenvolvimento passo a passo e com o crescimento do seu aplicativo poderá fazer upgrades de recursos. 

## :wrench: Tecnologias utilizadas
* HTML
* CSS
* Javascript
* Node.J
* Postgres

## :soon: Implementação futura
* Projeto poderá conter algumas alterações de melhorias.

## :handshake: Colaboradores :man_technologist:
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/GaldiLuna">
        <sub>
          <b>GaldiLuna</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :receipt: Mockup/Storyboard
- [Figma](https://www.figma.com/file/CDhrosYGqwQcq9Sqzh2YKn/Fabrica-de-Aplicativos?node-id=0%3A1&t=aW9xvoaIenEIfxY1-0) In Progress

## :hammer_and_wrench: Estrutura de Dados
- Cliente
  - Deverá Fazer Cadastro de sua Ideia.

```s
    Usuario {
        user_id:0001
        user_name:"Nome do Usuario"
        user_last_name:"Sobrenome do Usuario"
        e_mail:"nome@site.com.com"
        phone:5582987654321
        idea:"Descrição da Ideia do Cliente"
    }
```

- Aplicativo
  - Cadastro de cada aplicativo solicitado.

```s
    Aplicativo {
        id_aplicativo:01
        nome_aplicativo:"APP"
        valor_aplicativo:1500.00
        user_id:0001
    }
```

## :dart: Status do projeto
* API pronta.
* Front em construção.
