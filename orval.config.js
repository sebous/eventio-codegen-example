module.exports = {
  eventio: {
    output: {
      target: "src/__generated__/eventio.ts",
      client: "react-query",
      mode: "single",
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
      target: "./eventio.yaml",
    },
    hooks: {
      afterAllFilesWrite: "prettier --write",
    },
  },
  petstore: {
    output: {
      target: "src/__generated__/petstore.ts",
      client: "react-query",
      mode: "single",
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
      target: "./petstore.yaml",
    },
    hooks: {
      afterAllFilesWrite: "prettier --write",
    },
  },
};
