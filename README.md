# wx-miniprogram-base

## 目录结构

```
|-- dist                            编译结果目录
|-- src                             源代码目录
|   |-- app.js                      项目入口文件
|   |-- app.json                    小程序配置文件
|   |-- sitemap.json                小程序配置文件
|   |-- assets                      静态资源存放目录
|   |   |-- images
|   |       |-- commons
|   |       |   |-- error_rockets.png
|   |       |-- icons
|   |           |-- .gitkeep
|   |-- components                  公共组件存放目录
|   |   |-- base                    基础能力组件
|   |       |-- Layout
|   |       |-- Loading
|   |       |-- Skeleton
|   |       |-- ErrorPage
|   |-- dicts                       公共字典存放目录
|   |   |-- .gitkeep
|   |-- libs                        第三方工具库存放目录（外部引入）
|   |   |-- .gitkeep
|   |-- pages                       页面存放目录
|   |   |-- index
|   |       |-- index.js
|   |       |-- index.json
|   |       |-- index.less
|   |       |-- index.wxml
|   |-- scripts                     公共脚本存放目录（wxs）
|   |   |-- .gitkeep
|   |-- services                    API服务存放目录
|   |   |-- .gitkeep
|   |-- styles
|   |   |-- index.less              项目公共样式类文件
|   |   |-- theme.less              项目主题样式（变量 or mixin）
|   |-- templates                   公共模板存放目录
|   |   |-- .gitkeep
|   |-- utils                       公共封装函数存放目录（自我封装）
|       |-- base.js                 基础能力
|       |-- request.js              基础请求功能
|-- .editorconfig  EditorConfig     配置文件
|-- .env                            环境变量配置文件
|-- .eslintignore
|-- .eslintrc
|-- .gitignore
|-- .stylelintignore
|-- .stylelintrc
|-- commitlint.config.js
|-- config.yaml                     编译配置文件
|-- jsconfig.json
|-- package.json
|-- project.config.json             微信开发者工具项目配置文件
└── webpack.config.js               webpack 配置扩展文件
```
