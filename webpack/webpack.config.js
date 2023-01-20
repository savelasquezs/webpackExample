const path=require("path")

const HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    // archivo que va a compilar
    entry:"./src/index.js",
    output:{
        // el nombre dist es importante y hace referencia a distribution y es estandar
        // __dirname es la carpeta base
        path: path.resolve(__dirname,"dist"),
        filename:"main.js"
    },
    // extensiones soportadas
    resolve:{
        extensions:[".js"]
    },
    // usa el babel loader, tampoco se que hace
    module:{
        rules:[
            {
                test:/\.js?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    // se puede trabajar con plugins aunque tengo que averiguar para que sirve el htmlwebpack
    plugins:[
        new HtmlWebpackPlugin({
            inject:true,
            template:"./public/index.html",
            filename:"./index.html"
        })
    ]

}