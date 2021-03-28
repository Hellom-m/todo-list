## Webpack

### 1. 执行 `npm run build` 报错 内容：`You may need an appropriate loader to handle this file type, currently no loaders are configured `

报错原因：webpack只能解析以.js的文件类型，只支持ES5的语法。我们使用以.vue文件类型时，需要为其指定loader。



### 2. 报错内容：`You may need an additional loader to handle the result of these loaders.`

报错原因：`Vue Loader`的配置和其他Loader不太一样。除了通过一条规则将`vue-loader`应用在扩展名为`.vue`文件之外。还需要在 webpack 配置中增加插件，`new VueLoaderPlugin()`这个插件必须写，它的作用就是将你定义过的规则复制并应用在其他的`.vue`文件中相应的语言块。就比如有一条匹配`/.js$/`的规则，将会应用在`.vue`文件中的`<script>`里。
[参考文档](https://vue-loader.vuejs.org/zh/guide/#手动设置)


### 3. webpack-dev-server | cross-env
webpack-dev-server 是 webpack 提供的小型Express服务器。使用它为webpack打包生成的资源文件提供web服务。主要有两个功能：`为静态文件提供web服务`和 `自动刷新和热替换`。

cross-env 是用来解决在不同环境(windows、mac)下设置环境变量的写法不同的问题。


### 4. `npm run dev` 报错 `Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema.configuration.devtool should match pattern "^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$".BREAKING CHANGE since webpack 5: The devtool option is more strict.Please strictly follow the order of the keywords in the pattern.`

报错原因：检查devtool的匹配，webpack 5 要求的匹配会更加严格，所以要重新考虑配置。
解决：将原有的写法：

`config.devtool = '#cheap-module-eval-source-map',` 替换为以下写法即可：

`config.devtool = isDev ? false : '#cheap-module-eval-source-map',`

### 5. `npm run dev` 报错 `Cannot find module 'babel-plugin-syntax-jsx'.`

报错原因：缺少相应组件

解决：`npm install babel-plugin-syntax-jsx --save-dev` 即可