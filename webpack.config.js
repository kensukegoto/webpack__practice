module.exports = (environment) => {

    const mode = (environment !== "development" && environment !== "production") ? "development" : environment;
    const devtool = environment !== "development" ? false : "inline-source-map"

    return {
        mode: mode,
        entry: {
          index: ['whatwg-fetch','./src/main.js'], // fetchを使う
        },
        output:{
          filename: '[name].bundle.js',
        },
        module: {
          rules: [
            { 
              test: /\.jsx?$/, 
              exclude: /node_modules/, 
              loader: "babel-loader", 
              options: {
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            "useBuiltIns": "usage",　// entryとするとファイル中でimportが必要
                            "corejs" : 3 // Promiseなどコードを見て必要なものをpolyfillとして読み込む
                        }
                    ]
    
                ]
              }
            }
          ]
        },
        devtool: devtool
      }
}