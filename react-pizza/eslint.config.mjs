import js from "@eslint/js"
import globals from "globals"
import prettier from "eslint-config-prettier"
import reactPlugin from "eslint-plugin-react"

// vscode 类型提示
/** @type {import ('eslint').Linter.Config[] } */

export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect"
      }
    },
    files: ["**/*.js", "**/*.jsx"], //add jsx
    rules: {
      "react/no-unescaped-entities": "off",
      "react/prop-types": "off"
    },
    languageOptions: {
      globals: {
        ...globals.browser, ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  reactPlugin.configs.flat["jsx-runtime"],
  prettier
]
