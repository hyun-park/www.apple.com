module.exports = {
    // 다른 js 파일들을 import 하는 시작 js 파일 위치
    entry: "./src/js/entry.js",

    // 컴파일 후 한 파일로 만든 js 파일을 생성할 위치
    output: {
        path: __dirname,
        filename: "./src/js/bundle.js"
    },

    module: {
        rules: [{
            test: /\.(s*)css$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }]
    }
};
