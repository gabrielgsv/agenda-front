import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "2dby5j",
    experimentalStudio: true,
  },

  env: {
    appAdress: "http://localhost:5173",
    urlApi: "http://localhost:4000",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
