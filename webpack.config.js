﻿const path = require('path');

module.exports = {
   entry: {                                                                  
      main: './install/index.js'
   },
   output: {                                                                
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      publicPath: '/dist'
   },
   devServer: {                                                          
      overlay: true
   },
   module: {                                                         
      rules: [                                                         
         {                                                               
            test: /\.js$/,                                          
            exclude: '/node_modules/'                          
         }
      ]
   }
};