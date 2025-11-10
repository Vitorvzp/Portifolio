# Frontend - Site React com Vite

Este é o projeto de frontend, implementado com React e Vite.

## Estrutura

- `index.html`: Arquivo HTML principal.
- `src/`: Contém o código-fonte React (JSX/TSX).
- `package.json`: Lista de dependências Node.js.
- `vite.config.ts`: Configuração do bundler Vite.

## Configuração e Execução

1.  **Instalação de Dependências**:
    ```bash
    npm install
    # ou
    pnpm install
    ```

2.  **Execução em Desenvolvimento**:
    ```bash
    npm run dev
    # ou
    pnpm run dev
    ```
    O site estará disponível em `http://localhost:5173` (ou outra porta, dependendo da configuração do Vite).

3.  **Build para Produção**:
    ```bash
    npm run build
    # ou
    pnpm run build
    ```
    Os arquivos estáticos para deploy serão gerados na pasta `dist/`.

## Comunicação com o Backend

O frontend precisa se comunicar com o backend (API Flask) para as funcionalidades de chat e, se implementado, para buscar o `faq.json`.

**URLs da API:**

- **Chat**: O frontend deve enviar requisições `POST` para `/api/chat` no endereço do backend.
- **FAQ**: Se você implementar a rota `/api/faq` no backend, o frontend deve fazer requisições `GET` para este endpoint.

**Configuração de URL da API:**

Recomenda-se usar variáveis de ambiente no frontend (ex: `.env` com `VITE_API_URL=http://localhost:5000`) para configurar o endereço do backend, facilitando a troca entre ambientes de desenvolvimento e produção.

**Exemplo de uso no React (em `src/main.tsx` ou componente de chat):**

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // URL padrão

// Exemplo de chamada para o chat
fetch(`${API_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Olá!' })
})
// ...
```
Certifique-se de que o backend está configurado para aceitar requisições do domínio do frontend (CORS).
