/* const test = require('./test');

console.log('Sum: '+test._add(2,4));

function webpackConfiguration(env, argv) {

}

module.exports = webpackConfiguration; */

// We are exporting this so that webpack can access it outside of this file
/**
 * In browser we have window object, similarly in node, we have module
 */
module.exports = (env, argv) => {
    return {
        mode: 'production',
        entry: './src/index.tsx',
        resolve: {
            extensions: [".js", "jsx", ".ts", ".tsx", ".css"],
        },
        externals: {
            react: "React",
            "react-dom": "ReactDOM"
        },
        output: {
            // Defining a namespace
            library: "ArtifiAdmin",

            // Defining a bundle target
            libraryTarget: "umd",

            // Defining bundled file name
            filename: 'admin.js'
            // path: __dirname + "/dist/",
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/, // Run this loader against those files having .ts and .tsx extension
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
                    loader: 'url-loader'
                },
            ],
        },
    }
}