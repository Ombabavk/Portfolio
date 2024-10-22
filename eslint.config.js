import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

export default [
    js.configs.recommended,
    {
        files: ["src/**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                // Browser globals
                window: "readonly",
                document: "readonly",
                // Timer functions
                setTimeout: "readonly",
                clearTimeout: "readonly",
                setInterval: "readonly",
                clearInterval: "readonly",
                // Animation
                requestAnimationFrame: "readonly",
                cancelAnimationFrame: "readonly",
                // React
                React: "readonly",
                JSX: "readonly",
                IntersectionObserver: "readonly"
            }
        },
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
            "jsx-a11y": jsxA11yPlugin
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...jsxA11yPlugin.configs.recommended.rules,
            // Relaxing some rules that are too strict for your use case
            "react/react-in-jsx-scope": "off",
            "no-unused-vars": ["warn", { 
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_"
            }],
            // Making accessibility rules warnings instead of errors for now
            "jsx-a11y/click-events-have-key-events": "warn",
            "jsx-a11y/no-noninteractive-element-interactions": "warn",
            // Add keyboard interaction rules
            "jsx-a11y/interactive-supports-focus": "warn"
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        env: {
            browser: true,
            es2021: true,
            node: true
        }
    }
];
