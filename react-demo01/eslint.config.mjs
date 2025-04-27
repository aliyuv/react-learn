import js from "@eslint/js"
import globals from "globals"
import prettier from "eslint-config-prettier"

// vscode 类型提示
/** @type {import ('eslint').Linter.Config[] } */

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
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
  prettier
]
