const path = require("path");

const SRC_DIR = path.resolve(__dirname, "src");
const OUT_DIR = path.resolve(__dirname, "build");

const config = {
    entry: {
        "add-property": path.resolve(SRC_DIR, "lambdas/addProperty.ts")
    },
    externals: ["aws-sdk"],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: OUT_DIR,
        filename: "[name].js",
        library: "[name]",
        libraryTarget: "umd"
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: 'ts-loader'
            }
        ]
    }
};

module.exports = config