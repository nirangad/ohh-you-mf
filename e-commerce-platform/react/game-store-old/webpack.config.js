// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// const { ModuleFederationPlugin } = require("webpack").container;
// const deps = require("./package.json").dependencies;

import path from "path";
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
const { ModuleFederationPlugin } = webpack.container;
import packageJson from "./package.json" with { type: "json" };
const deps = packageJson.dependencies;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/main.tsx", // Adjust if your entry point is different
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
    {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // Add rules for other asset types if needed
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"), // Match Vite's default alias
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new ModuleFederationPlugin({
      name: "gameStore",
      filename: "remoteEntry.js", // Still needed for potential consumption by other apps
      remotes: {
        // Define the remote microfrontends that this host will consume
        // games: "games@http://localhost:3001/remoteEntry.js",
        // gameShoppingCart: "gameShoppingCart@http://localhost:3002/remoteEntry.js",
        // Add more remotes as needed
      },
      shared: {
        // Share dependencies to avoid duplication across microfrontends
        react: { singleton: true, requiredVersion: deps.react },
        "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
        // Add other shared dependencies as needed
      },
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
};
