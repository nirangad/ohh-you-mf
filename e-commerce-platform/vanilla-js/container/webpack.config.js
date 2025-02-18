import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from "html-webpack-plugin";
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    static: "./dist",
    port: 8000,
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8001/remoteEntry.js",
        cart: "cart@http://localhost:8002/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
