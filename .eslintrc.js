module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-ezui`
  extends: ["ezui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
