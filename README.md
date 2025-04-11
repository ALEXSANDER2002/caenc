# CAENC App

Este é um projeto Next.js com TypeScript, Tailwind CSS e várias bibliotecas de UI modernas.

## Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)

## Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd caenc-app
```

2. Instale as dependências:
```bash
pnpm install
```

## Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto (se necessário):
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente no arquivo `.env` conforme necessário.

## Executando a Aplicação

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

### Produção

Para construir a aplicação para produção:

```bash
pnpm build
```

Para iniciar o servidor de produção:

```bash
pnpm start
```

## Scripts Disponíveis

- `pnpm dev`: Inicia o servidor de desenvolvimento
- `pnpm build`: Constrói a aplicação para produção
- `pnpm start`: Inicia o servidor de produção
- `pnpm lint`: Executa o linter para verificar erros de código

## Tecnologias Utilizadas

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI
- Shadcn/ui
- Zod (validação)
- React Hook Form
- E várias outras bibliotecas modernas

## Estrutura do Projeto

- `/app`: Páginas e rotas da aplicação
- `/components`: Componentes reutilizáveis
- `/lib`: Utilitários e configurações
- `/public`: Arquivos estáticos
- `/styles`: Estilos globais
- `/hooks`: Hooks personalizados

## Suporte

Se você encontrar algum problema ou tiver dúvidas, por favor abra uma issue no repositório. 