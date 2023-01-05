module.exports = {
  eventio: {
    output: {
      target: "src/__generated__",
      client: "react-query",
      mode: "tags-split",
      override: {
        query: {
          signal: false,
        },
        mutator: {
          path: "./src/api/client.ts",
          name: "customInstance",
        },
      },
    },
    input: {
      target: "./swagger.yaml",
    },
    hooks: {
      afterAllFilesWrite: "prettier --write",
    },
  },
};
