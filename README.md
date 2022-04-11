# Desafio 1

1. ```docker pull luizaugustoventura/hello-golang:prod```
2. ```docker run luizaugustoventura/hello-golang:prod```

# Desafio 2

> Para poder utilizar o arquivo *api.http* de rotas da aplicação Node, é necessário ter alguma extensão do vscode para testar APIs, como por exemplo a *REST Client*. Todas as rotas atendem na porta 80, portanto não é necessário torná-las explícitas na URL na hora de fazer a chamada.

### Rotas:

* **GET /** : 
Retorna uma mensagem com o primeiro nome cadastrado no banco de dados

* **POST /register** : 
Registra um nome no banco de dados e retorna uma mensagem com aquele nome
```
JSON Body:
{
    "name": "string"
}
```

* **GET /search?name=Your+name+goes+here** : 
Retorna uma mensagem com o nome especificado no parâmetro, caso ele exista, ou uma mensagem de erro

* **GET /list** :
Retorna uma mensagem com todos os nomes cadastrados no banco de dados


