export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["Feat", "Fix", "Chore", "Style", "Docs", "Refactor"]],
    "type-case": [2, "always", "pascal-case"],
    "subject-case": [0], // 한국어 허용
    "header-max-length": [2, "always", 100],
  },
};
