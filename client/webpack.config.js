// client/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
    return {
        mode: "development",
        entry: {
            main: "./src/js/index.js",
            install: "./src/js/install.js",
        },
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        plugins: [
            // Generates the index.html file using the provided template
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                title: "Just Another Text Editor",
            }),
            // Injects our custom service worker
            new InjectManifest({
                swSrc: "./src-sw.js",
                swDest: "src-sw.js",
            }),
            // Creates a manifest.json file
            new WebpackPwaManifest({
                fingerprints: false,
                inject: true,
                name: "Just Another Text Editor",
                short_name: "JATE",
                description: "Just Another Text Editor!",
                background_color: "#225ca3",
                theme_color: "#225ca3",
                start_url: "/",
                publicPath: "/",
                icons: [
                    {
                        src: path.resolve("src/images/logo.png"),
                        sizes: [96, 128, 192, 256, 384, 512],
                        destination: path.join("assets", "icons"),
                    },
                ],
            }),
            // Copies additional assets to the dist folder
            new CopyWebpackPlugin({
                patterns: [{ from: "./src/images", to: "assets/icons" }],
            }),
        ],
        module: {
            rules: [
                // CSS loaders
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                // Babel loader
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: [
                                "@babel/plugin-proposal-object-rest-spread",
                                "@babel/transform-runtime",
                            ],
                        },
                    },
                },
            ],
        },
    };
};
