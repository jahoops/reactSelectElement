module.exports = {
    entry: { sb:'./src/react-searchbox.jsx',sb2:'./src/react-searchbox.jsx' },
    output: {
        path: __dirname + '/dist',
        filename: "MyLibrary.[name].js",
        library: ["MyLibrary", "[name]"],
        libraryTarget: 'umd',
    },
    devServer: {
      contentBase: './dist'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            }
          ]
    },
    externals: {
        react: 'React',
        "react-dom": 'ReactDOM'
    }
  };