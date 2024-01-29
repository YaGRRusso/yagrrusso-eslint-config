# YaGRRusso ESLInt Config
Configuração de ESLint para trabalhar com Javascript/Typescript.

## Configuração 

1- Instale o pacote no seu projeto como dependência de desenvolvimento.
```bash
npm i -D eslint @yagrrusso/eslint-config
```

2- Crie um arquivo `.eslintrc.json` na raiz do seu projeto e extenda algum preset ESLint da biblioteca.
```json
{
    // .eslintrc.json
    "extends": ["@yagrrusso/eslint-config/[react|node]"]
}
```

3- Instale a extensão do [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no seu VSCode.

4- Configure o ESLint no seu VSCode no arquivo de configurações do usuário `settings.json`.
```json
{
    // settings.json
    "editor.tabSize": 2,
    "eslint.format.enable": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    }
}
```

## Presets
Importe um dos presets da lista abaixo para o seu projeto.

### React
Bibliotecas utilizadas nas configurações para React:

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint-config-prettier
- eslint-config-standard
- eslint-import-resolver-typescript
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-simple-import-sort
- eslint-plugin-unused-imports

### Node
Bibliotecas utilizadas nas configurações para Node:

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint-config-prettier
- eslint-config-standard
- eslint-import-resolver-typescript
- eslint-plugin-import
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-simple-import-sort
- eslint-plugin-unused-imports