# MVVM CLI Generator para React Native

Um gerador de componentes MVVM para React Native usando Yeoman.

Este CLI automatiza a criação da estrutura:

```
src/screens/NomeDoComponente/
  ├── index.tsx
  ├── Model.ts
  ├── View.tsx
  └── ViewModel.ts
```

---

## 🚀 Criação do CLI

1. Crie a estrutura inicial:
   ```bash
   mkdir generator-mvvm
   cd generator-mvvm
   ```

2. Inicialize o projeto:
   ```bash
   npm init -y
   ```

3. Instale o Yeoman Generator:
   ```bash
   npm install -g yo generator-generator
   ```

4. Crie a estrutura de pastas:
   ```
   generator-mvvm/
   ├── generators/
   │   └── app/
   │       ├── index.js
   │       └── templates/
   │           ├── index.tsx
   │           ├── Model.ts
   │           ├── View.tsx
   │           └── ViewModel.ts
   └── package.json
   ```

5. Edite o `package.json` e adicione:

No package.json do gerador, o nome deve começar com generator-nome-atalho.

🔹 Isso faz com que o Yeoman reconheça que seu gerador se chama mvvm.
🔹 Portanto, você rodaria com:

```bash
   yo mvvm
```

   ```json
   {
     "name": "generator-mvvm",
     "version": "1.0.0",
     "description": "Gerador MVVM para React Native",
     "keywords": ["yeoman-generator"],
     "main": "generators/app/index.js",
     "type": "module",
     "files": ["generators"],
     "dependencies": {
       "yeoman-generator": "^5.7.0"
     }
   }
   ```

---

## 🛠️ Instalação do CLI (primeira vez)
### (caso queira só usar o CLI, clone o projeto e siga esses passos)

No diretório do gerador:

```bash
# Instala as dependências
npm install

# Linkar o generator-mvvm ao comando "yo mvvm", para ficar disponível globalmente.
npm link
```

---

## ✅ Como usar no seu projeto React Native

1. Acesse seu projeto React Native:
   ```bash
   cd caminho/do/seu-projeto
   ```

2. Rode o CLI:
   ```bash
   yo mvvm
   ```

3. Digite o nome do componente (por exemplo `Home`) e os arquivos serão gerados em:
   ```
   src/screens/Home/
   ```

---

## 🔄 Atualização do CLI

Se você editar o código do CLI ou adicionar novos templates:

1. No diretório do gerador:
   ```bash
   npm link
   ```

   Isso vai atualizar o link global com as últimas alterações.

2. No seu projeto, você já pode rodar novamente:
   ```bash
   yo mvvm
   ```

   O CLI usará a versão atualizada automaticamente.

---

## ❌ Remover o link (caso necessário)

Se quiser remover o CLI do seu sistema:

```bash
npm unlink -g generator-mvvm
```

---

Feito por [ FunctionDev - Keidson Roby ] com ❤️ para acelerar seu fluxo com MVVM no React Native.