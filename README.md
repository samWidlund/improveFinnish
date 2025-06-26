# improveFinnish

Finnish study webapp created using React + Vite

[Production deployment](https://improvefinnish-frontend.onrender.com/)

- backend and API via **Express.js**
- **SQLite** database
- frontend + backend hosted via **Render**
- **tailwindcss** for styling
- **daisyUI** theme

## Quick start

### 1. Install dependencies:

```sh
npm install
```

### 2. Run app:

**Development:**

```sh
npm run dev
```

Starts both frontend and backend in development mode.

**Production:**

1. **Frontend:**
   ```sh
   npm run build
   ```
2. **Backend:**
   ```sh
   npm run start-backend
   ```
> [!NOTE]
> .env file in root folder is needed when running the app. The variable VITE_API_URL is compulsory. For development, set the variable to ``http://localhost:5000``


Now your built frontend from `dist/` and the API are served via the backend.

## Backlog

- [x] add flipcard effect
- [ ] improve database content
- [ ] shorten backend startup time
- [ ] fix debugTimeOut time
- [ ] implement Hugging Face AI
- [ ] add .env info in README
