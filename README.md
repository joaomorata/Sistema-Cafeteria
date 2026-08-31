# Sistema Cafeteria ☕🍰



> **Um sistema web simples, moderno e eficiente para a gestão completa de cafeterias.**
> Desenvolvido em **.NET (Web API)** no backend e **HTML5/CSS3/JS** no frontend, o projeto permite organizar categorias, produtos, clientes e pedidos de forma integrada e relacional.
> 
> 

---

### 🚀 Funcionalidades

**☕ Gestão de Cardápio & Estoque**

* **Categorias:** Cadastro e organização de categorias de produtos (`CategoriaController`).


* **Produtos:** Controle do catálogo com fotos, preços e categorias associadas (`ProdutoController`).



**👥 Gestão de Vendas & Atendimento**

* **Clientes:** Base cadastral de clientes para histórico de consumo (`ClienteController`).


* **Pedidos:** Emissão e gerenciamento das compras realizadas na cafeteria (`PedidoController`).



**💻 Painel Interativo**

* Interface web leve e responsiva (`index.html` + `style.css`) consumindo a API C# via requisições assíncronas em JavaScript (`script.js`).



---

### 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia |
| --- | --- |
| **Backend** | C# (.NET Web API)

 |
| **ORM** | Entity Framework Core (`CafeteriaDbContext`)

 |
| **Frontend** | HTML5, CSS3, JavaScript puro (Fetch API)

 |
| **Testes API** | Swagger & Arquivo `CafeteriaDB.http`<br> |

---

### 🗄️ Estrutura do Projeto

```text
Sistema-Cafeteria/
├── CafeteriaDB/              # Backend (API RESTful)
│   ├── Controllers/          # Endpoints (Categoria, Cliente, Pedido, Produto)
│   ├── Models/               # Mapeamento do Banco de Dados e Entidades
│   └── Program.cs            # Configurações do servidor e serviços
└── FrontEnd/                 # Interface do Usuário
    ├── index.html            # Estrutura visual da aplicação
    ├── style.css             # Estilização e layout
    └── script.js             # Consumo da API e regras de tela

```

---

### ⚙️ Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter os seguintes itens configurados:

* **SDK do .NET Core**

* **Visual Studio 2022** (com suporte a *Desenvolvimento Web e ASP.NET*) ou **VS Code**

* **SQL Server** ou **LocalDB**


---

### 🏃‍♂️ Como Executar

1. **Clone o repositório:**
```bash
git clone https://github.com/joaomorata/Sistema-Cafeteria.git
cd Sistema-Cafeteria

```


2. **Configure a conexão com o Banco de Dados:**
> Abra o arquivo `CafeteriaDB/appsettings.json` e ajuste a chave `ConnectionStrings` apontando para o seu SQL Server.
> 
> 


3. **Inicie a API (Backend):**
```bash
cd CafeteriaDB
dotnet restore
dotnet run

```


*A API abrirá na porta local configurada no `launchSettings.json` (ex: `https://localhost:7xxxx`)*.


4. **Abra o Frontend:**
* Abra o arquivo `FrontEnd/index.html` em qualquer navegador (ou utilize a extensão *Live Server* no VS Code).


* Garanta que o endpoint base no arquivo `script.js` corresponda à porta onde a API está em execução.
