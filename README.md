# QualificaHub

Plataforma web de divulgação de cursos gratuitos, desenvolvida como protótipo acadêmico alinhado ao **ODS 4 — Educação de Qualidade** da ONU.

> Projeto da disciplina de Desenvolvimento Web — AV1

---

## Sobre o projeto

O QualificaHub centraliza cursos gratuitos disponíveis na internet em um único ambiente digital, facilitando o acesso à qualificação profissional para jovens em busca do primeiro emprego, estudantes da rede pública, adultos que desejam se requalificar e pessoas em situação de vulnerabilidade social.

### Metas do ODS 4 contempladas

| Meta | Descrição                                                                                                   |
| ---- | ----------------------------------------------------------------------------------------------------------- |
| 4.3  | Garantir igualdade de acesso à educação técnica, profissional e superior de qualidade e a preços acessíveis |
| 4.4  | Aumentar o número de jovens e adultos com habilidades relevantes para emprego e empreendedorismo            |
| 4.5  | Eliminar desigualdades e garantir acesso à educação para os públicos mais vulneráveis                       |

---

## Funcionalidades

- Catálogo de cursos exibidos em cards com informações principais
- Busca por nome do curso em tempo real
- Filtro por categoria (Tecnologia, Administração, Idiomas, Empreendedorismo, Informática)
- Trilhas de aprendizagem organizadas por objetivo (Primeiro Emprego, Informática Básica, Programação, Empreendedorismo)
- Layout responsivo para desktop e mobile
- Formulário de contato com validação client-side

---

## Tecnologias

Desenvolvido exclusivamente com tecnologias nativas, sem frameworks ou bibliotecas externas.

- **HTML5** semântico
- **CSS3** com custom properties (variáveis CSS)
- **JavaScript** puro (ES6+)

---

## Estrutura de pastas

```
qualifica-hub/
├── index.html
├── components/
│   ├── header.html
│   └── footer.html
├── pages/
│   ├── courses.html
│   ├── trails.html
│   ├── about.html
│   └── contact.html
└── assets/
    ├── css/
    │   ├── main.css          # Variáveis, reset e tipografia base
    │   ├── layout.css        # Header, navegação e footer
    │   ├── components.css    # Hero, cards, filtros, trilhas e formulário
    │   └── responsive.css    # Media queries (900px / 768px / 480px)
    ├── js/
    │   ├── data.js           # Catálogo de cursos e metadados de trilhas
    │   ├── courses.js        # Renderização, busca e filtro de cursos
    │   ├── trails.js         # Renderização das trilhas de aprendizagem
    │   └── main.js           # Carregamento de componentes e navegação mobile
    └── images/
        └── logo.png
```

---

## Como executar

O projeto utiliza `fetch()` para carregar os componentes de header e footer, o que requer um servidor HTTP local. Abrir o `index.html` diretamente pelo sistema de arquivos (`file://`) não funcionará corretamente.

**Opção recomendada — Live Server (VS Code):**

1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Abra a pasta do projeto no VS Code
3. Clique em **Go Live** na barra de status ou clique com o botão direito no `index.html` e selecione **Open with Live Server**

**Alternativa — GitHub Pages:**

O projeto está configurado para funcionar com GitHub Pages. Após o push, acesse:

```
https://dev-lovers.github.io/qualifica-hub/
```

---

## Integrantes

| Nome                             |
| -------------------------------- |
| Alessandro Ferreira de Freitas   |
| Carlos Antônio de Jesus Rocha    |
| Cláudio Zicri Santos da Silva    |
| Felipe Maurício Alves Ferreira   |
| Lauã Monteiro Vídero Caldas Reis |
| Rafael Sampaio de Jesus          |
| Raissa Souza Novaes              |
