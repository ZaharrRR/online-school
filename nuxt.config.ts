// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "MegaSchool",
      meta: [
        { name: "description", content: "Online school for young programmers" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
