import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  // Don't lint generated files or non-source configs
  {
    ignores: [
      "dist",
      "node_modules",
      "scripts",
      "public", // vendored, minified assets (e.g. the Stockfish engine) — not ours to lint
      "**/*.d.ts",
      "tailwind.config.ts",
    ],
  },

  js.configs.recommended,

  // Vite config — needs Node globals
  {
    files: ["vite.config.ts"],
    languageOptions: {
      parser: tsParser,
      globals: { ...globals.node },
    },
    plugins: { "@typescript-eslint": tseslint },
    rules: {
      ...tseslint.configs["flat/recommended"].rules,
      "no-undef": "off",
    },
  },

  // All TypeScript source files
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...tseslint.configs["flat/recommended"].rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // TypeScript handles undefined-variable checking better than ESLint
      "no-undef": "off",
      // Use the TypeScript-aware version; ignore unused function param names
      // (common in interface/type definitions like `(from: string) => void`)
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { vars: "all", args: "none", ignoreRestSiblings: true },
      ],
      // exhaustive-deps fires on intentional patterns here (stable dispatch ref,
      // using .id instead of full objects as deps) — suppress the noise
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
