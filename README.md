# Tirar Visto

Este projeto é uma landing page para consultoria de vistos, desenvolvida em React e estilizada com Tailwind CSS. O objetivo é oferecer uma experiência moderna, responsiva e intuitiva para quem deseja tirar o visto de forma simples e segura.

## ✨ Funcionalidades

- **Layout Responsivo:** Adapta-se a diferentes tamanhos de tela (desktop, tablet, mobile).
- **Seção Hero:** Headline, descrição, CTA, vídeo e estatísticas de sucesso.
- **Botão de Ação:** Chama o usuário para iniciar o processo de visto.
- **Estatísticas:** Mostra números de vistos/passaportes emitidos e famílias atendidas.
- **Menu de Navegação:** Links para Home, Quem somos, Serviços e Contato.
- **Imagens e Vídeos:** Elementos visuais para aumentar a confiança do usuário.

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/) (ou outro bundler, se aplicável)

## 📁 Estrutura de Pastas

```
src/
  components/
    ui/
      button.tsx
      card.tsx
  screens/
    TirarVisto/
      sections/
        HeroSection/
          HeroSection.tsx
        MainContentSection/
          MainContentSection.tsx
  assets/
    logo-1.png
    vector-51.svg
    frame-36920.png
    cleanshot-2025-05-08-at-14-28-22-2x.png
public/
  index.html
```

## 🖥️ Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/tirar-visto.git
   cd tirar-visto
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

## 📱 Responsividade

O layout utiliza classes utilitárias do Tailwind CSS para garantir boa visualização em qualquer dispositivo. Teste redimensionando a janela do navegador ou usando as ferramentas de desenvolvedor.

## 📝 Customização

- **Textos e imagens:** Edite os arquivos em `src/screens/TirarVisto/sections/` para alterar textos, imagens e links.
- **Cores e fontes:** Modifique as classes Tailwind diretamente nos componentes ou personalize o arquivo de configuração do Tailwind (`tailwind.config.js`).

## 📦 Build para produção

Para gerar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos finais estarão na pasta `dist/`.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com 💙 por [Seu Nome ou Agência]