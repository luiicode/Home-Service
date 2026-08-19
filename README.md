# Home Service

**Landing page + sitio de servicios para construcción, remodelación y mantenimiento del hogar.**

---

## 🇪🇸 Español

### 📖 Descripción

**Home Service** es una landing page construida en React que promociona servicios de construcción residencial, remodelación y acabados. Incluye una página de inicio con secciones de servicios, sobre nosotros y equipo, una página de preguntas frecuentes con acordeón, y una página de contacto con formulario que envía la solicitud directamente por WhatsApp.

### 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev) + [React Compiler](https://react.dev/learn/react-compiler) (vía Babel plugin)
- **Bundler:** [Vite 8](https://vitejs.dev)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`)
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com) (estilo `base-nova`, base `neutral`) sobre [Base UI](https://base-ui.com)
- **Routing:** [react-router-dom v7](https://reactrouter.com)
- **Iconografía:** [lucide-react](https://lucide.dev)
- **Tipografías:** Fuentes variables self-hosted vía Fontsource (`Geist`, `Public Sans`, `Rubik`)
- **Utilidades de clases:** `clsx`, `tailwind-merge`, `class-variance-authority`
- **Linting:** ESLint 10 + `typescript-eslint` + reglas de React Hooks / React Refresh
- **Package manager:** `pnpm`

### 🏗️ Arquitectura y estructura de carpetas

```
home-service/
├── public/
│   ├── favicon.svg
│   ├── hero.jpeg
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── shared/          # Componentes de layout persistente
│   │   │   ├── MenuBar.tsx  # Navbar responsive con menú móvil y scroll-to-section
│   │   │   └── Footer.tsx   # Footer con navegación y CTA de contacto
│   │   └── ui/               # Primitivas shadcn/ui (Base UI + CVA)
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── input.tsx
│   ├── lib/
│   │   └── utils.ts          # Helper `cn()` (clsx + tailwind-merge)
│   ├── pages/
│   │   ├── home/Home.tsx     # Hero, servicios, sobre nosotros, equipo
│   │   ├── faqs/              # FAQ con Accordion + data separada
│   │   │   ├── FAQS.tsx
│   │   │   └── data.ts
│   │   └── contact/Contact.tsx # Formulario controlado → deep link a WhatsApp
│   ├── App.tsx                # Layout raíz: MenuBar + <Outlet/> + Footer
│   ├── route.tsx              # Definición de rutas (React Router v7)
│   ├── main.tsx                # Entry point + BrowserRouter
│   └── index.css               # Tokens de tema, fuentes, capa base de Tailwind
├── components.json             # Configuración de shadcn/ui
├── vite.config.ts               # Plugins: react(), tailwindcss(), React Compiler (babel)
├── tsconfig.*.json               # Config de TypeScript (app / node / raíz)
└── package.json
```

**Patrón de arquitectura:** layout persistente mediante rutas anidadas — `App.tsx` renderiza `MenuBar` y `Footer` una sola vez y expone un `<Outlet/>` donde React Router inyecta `Home`, `Faqs` o `Contact` según la ruta activa. Esto evita remounts innecesarios del header/footer al navegar.

### 🚀 Getting Started

**Requisitos previos:** Node.js 18+ y `pnpm` instalado globalmente (`npm i -g pnpm`).

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd home-service
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Levantar el entorno de desarrollo**
   ```bash
   pnpm dev
   ```
   El sitio quedará disponible en `http://localhost:5173`.

4. **Compilar para producción**
   ```bash
   pnpm build
   ```

5. **Previsualizar el build de producción**
   ```bash
   pnpm preview
   ```

6. **Ejecutar el linter**
   ```bash
   pnpm lint
   ```

### ✨ Características principales

- **Navbar responsive con scroll-to-section:** `MenuBar.tsx` alterna entre un menú hamburguesa en móvil (`md:hidden`) y navegación horizontal en desktop, usando `scrollIntoView` para navegar a secciones (`servicios`, `team`, `about`) dentro de la misma página.
- **Layout persistente vía rutas anidadas:** `App.tsx` + `route.tsx` implementan el patrón de layout de React Router v7, manteniendo `MenuBar` y `Footer` montados entre transiciones de página.
- **Formulario de contacto → WhatsApp:** `Contact.tsx` captura nombre, correo, teléfono y mensaje en un `useState` controlado, y al enviar construye un mensaje pre-formateado que abre `wa.me` con el texto codificado (`encodeURIComponent`), evitando la necesidad de backend para leads simples.
- **FAQ dirigido por datos:** `faqs/data.ts` separa el contenido de la lógica de presentación, permitiendo actualizar preguntas sin tocar el componente `Accordion`.
- **Sistema de diseño basado en tokens:** `index.css` define variables CSS (`--color-theme1/2`, `--color-Btheme`, radios, tipografías) consumidas por Tailwind v4 vía `@theme`, permitiendo theming centralizado sin tocar clases utilitarias.
- **Componentes UI accesibles:** `accordion.tsx`, `button.tsx`, `card.tsx` e `input.tsx` están construidos sobre primitivas de Base UI con variantes gestionadas por `class-variance-authority`, siguiendo el patrón shadcn/ui (`data-slot`, `cn()` para merge de clases).
- **React Compiler habilitado:** `vite.config.ts` integra `@vitejs/plugin-react` con `reactCompilerPreset()` vía Babel, optimizando memoización automática sin necesidad de `useMemo`/`useCallback` manuales.

---

## 🇬🇧 English

### 📖 Description

**Home Service** is a React landing page promoting residential construction, remodeling, and finishing services. It includes a homepage with services, about, and team sections, an FAQ page with an accordion, and a contact page with a form that routes the request directly to WhatsApp.

### 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev) + [React Compiler](https://react.dev/learn/react-compiler) (via Babel plugin)
- **Bundler:** [Vite 8](https://vitejs.dev)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`)
- **UI components:** [shadcn/ui](https://ui.shadcn.com) (`base-nova` style, `neutral` base color) on top of [Base UI](https://base-ui.com)
- **Routing:** [react-router-dom v7](https://reactrouter.com)
- **Icons:** [lucide-react](https://lucide.dev)
- **Fonts:** Self-hosted variable fonts via Fontsource (`Geist`, `Public Sans`, `Rubik`)
- **Class utilities:** `clsx`, `tailwind-merge`, `class-variance-authority`
- **Linting:** ESLint 10 + `typescript-eslint` + React Hooks / React Refresh rules
- **Package manager:** `pnpm`

### 🏗️ Architecture & File Structure

```
home-service/
├── public/
│   ├── favicon.svg
│   ├── hero.jpeg
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── shared/          # Persistent layout components
│   │   │   ├── MenuBar.tsx  # Responsive navbar with mobile menu + scroll-to-section
│   │   │   └── Footer.tsx   # Footer with navigation and contact CTA
│   │   └── ui/               # shadcn/ui primitives (Base UI + CVA)
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── input.tsx
│   ├── lib/
│   │   └── utils.ts          # `cn()` helper (clsx + tailwind-merge)
│   ├── pages/
│   │   ├── home/Home.tsx     # Hero, services, about, team
│   │   ├── faqs/              # FAQ with Accordion + decoupled data
│   │   │   ├── FAQS.tsx
│   │   │   └── data.ts
│   │   └── contact/Contact.tsx # Controlled form → WhatsApp deep link
│   ├── App.tsx                # Root layout: MenuBar + <Outlet/> + Footer
│   ├── route.tsx              # Route definitions (React Router v7)
│   ├── main.tsx                # Entry point + BrowserRouter
│   └── index.css               # Theme tokens, fonts, Tailwind base layer
├── components.json             # shadcn/ui configuration
├── vite.config.ts               # Plugins: react(), tailwindcss(), React Compiler (babel)
├── tsconfig.*.json               # TypeScript config (app / node / root)
└── package.json
```

**Architecture pattern:** persistent layout through nested routes — `App.tsx` renders `MenuBar` and `Footer` once and exposes an `<Outlet/>` where React Router injects `Home`, `Faqs`, or `Contact` depending on the active route. This avoids unnecessary header/footer remounts on navigation.

### 🚀 Getting Started

**Prerequisites:** Node.js 18+ and `pnpm` installed globally (`npm i -g pnpm`).

1. **Clone the repository**
   ```bash
   git clone <REPOSITORY_URL>
   cd home-service
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:5173`.

4. **Build for production**
   ```bash
   pnpm build
   ```

5. **Preview the production build**
   ```bash
   pnpm preview
   ```

6. **Run the linter**
   ```bash
   pnpm lint
   ```

### ✨ Key Features

- **Responsive navbar with scroll-to-section:** `MenuBar.tsx` toggles between a hamburger menu on mobile (`md:hidden`) and horizontal navigation on desktop, using `scrollIntoView` to jump to in-page sections (`servicios`, `team`, `about`).
- **Persistent layout via nested routes:** `App.tsx` + `route.tsx` implement React Router v7's layout-route pattern, keeping `MenuBar` and `Footer` mounted across page transitions.
- **Contact form → WhatsApp:** `Contact.tsx` captures name, email, phone, and message through a controlled `useState`, then builds a pre-formatted message on submit and opens `wa.me` with URL-encoded text (`encodeURIComponent`), removing the need for a backend for simple leads.
- **Data-driven FAQ:** `faqs/data.ts` separates content from presentation logic, allowing questions to be updated without touching the `Accordion` component.
- **Token-based design system:** `index.css` defines CSS variables (`--color-theme1/2`, `--color-Btheme`, radii, fonts) consumed by Tailwind v4 through `@theme`, enabling centralized theming without editing utility classes.
- **Accessible UI components:** `accordion.tsx`, `button.tsx`, `card.tsx`, and `input.tsx` are built on Base UI primitives with variants managed by `class-variance-authority`, following the shadcn/ui pattern (`data-slot`, `cn()` for class merging).
- **React Compiler enabled:** `vite.config.ts` wires `@vitejs/plugin-react` with `reactCompilerPreset()` via Babel, enabling automatic memoization without manual `useMemo`/`useCallback`.

---

Made with ⚙️ React + TypeScript · **Home Service** © 2026
