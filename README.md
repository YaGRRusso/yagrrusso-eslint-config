# YaGRRusso ESLInt Config
Configuração de ESLint para trabalhar com Javascript.

## Configuração 

1- Instale o pacote no seu projeto como dependência de desenvolvimento.
```bash
npm i -D eslint @yagrrusso/eslint-config
```

2- Crie um arquivo `.eslintrc.json` na raiz do seu projeto e extenda algum preset ESLint da biblioteca.
```json
{
    "extends": ["@yagrrusso/eslint-config/html"]
    // "extends": ["@yagrrusso/eslint-config/react"]
    // "extends": ["@yagrrusso/eslint-config/node"]
}
```

3- Instale a extensão do [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no seu VSCode.

4- Configure o ESLint no seu VSCode no arquivo `settings.json`.
```json
{
    "eslint.format.enable": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}

```

## Presets
Importe um dos presets da lista abaixo para o seu projeto.
### Html/JS
Bibliotecas utilizadas nas configurações para HTML:

- eslint
- eslint-config-prettier
- eslint-config-standard
- eslint-plugin-html
- eslint-plugin-import
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-unused-imports
- prettier

### React/TS
Bibliotecas utilizadas nas configurações para React:

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-prettier
- eslint-config-standard
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-unused-imports
- prettier
- eslint-config-next (NEXTJS)

### Node/TS
Bibliotecas utilizadas nas configurações para Node:

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-prettier
- eslint-config-standard
- eslint-plugin-import
- eslint-plugin-n
- eslint-plugin-prettier
- eslint-plugin-promise
- eslint-plugin-unused-imports
- prettier