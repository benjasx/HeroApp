# Heroes SPA

Esta es una Aplicación de Una Sola Página (SPA) construida con React, diseñada para mostrar información sobre varios héroes.

## Tecnologías Utilizadas

*   **React**: Una librería de JavaScript para construir interfaces de usuario.
*   **React Router**: Para el enrutamiento declarativo en aplicaciones React.
*   **Vite**: Una herramienta de construcción rápida que proporciona una experiencia de desarrollo ultrarrápida.
*   **ESLint**: Para el linting y la calidad del código.
*   **Query String**: Una librería para analizar y convertir cadenas de consulta URL.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

*   `src/`: Contiene el código fuente principal de la aplicación.
    *   `HeroesApp.jsx`: El componente principal de la aplicación.
    *   `auth/`: Componentes, ayudantes, hooks y páginas relacionados con la autenticación.
    *   `heroes/`: Componentes, datos, ayudantes, hooks, layouts y páginas relacionados con los héroes.
    *   `hooks/`: Hooks personalizados de React, como `useForm.jsx`.
    *   `router/`: Configuración de enrutamiento de la aplicación, incluyendo `AppRouter.jsx`.
    *   `styles.css`: Estilos globales para la aplicación.
    *   `ui/`: Componentes y hooks de la interfaz de usuario.
*   `assets/heroes/`: Contiene imágenes de los héroes.
*   `public/`: Activos públicos.
*   `package.json`: Dependencias y scripts del proyecto.
*   `vite.config.js`: Configuración de Vite.

## Instalación y Ejecución

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone <repository_url>
    cd heroes-spa
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    # o
    yarn dev
    ```

    La aplicación estará disponible en `http://localhost:5173` (o en otro puerto si el 5173 está en uso).

4.  **Compila para producción:**
    ```bash
    npm run build
    # o
    yarn build
    ```

    Esto creará una carpeta `dist` con la compilación lista para producción.

## Linting

Para ejecutar el linter:

```bash
npm run lint
# o
yarn lint
