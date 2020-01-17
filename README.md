## 简介

Magic Platform Service

## 项目结构

```
.
├── src
│   ├── conf
│   ├── controller      //controller层
│   ├── service         //service层
│   ├── entity          //数据模型
│   ├── interface
│   ├── middlewares
│   ├── routes          //路由层
│   ├── services        //业务逻辑层
│   ├── types
│   ├── utils
│   ├── validator       //数据校验
│   └── index.ts        //项目入口index.js
├── ecosystem.config.js //pm2配置
├── nodemon.json        //nodemon配置
├── package.json
└── tsconfig.json
```

## 使用

- 在浏览器中开打`localhost:3000`

### 生产环境启动

- 生产环境使用 pm2 启动 可以达到负载均衡 执行：yarn pro 或 npm run pro （生产环境端口默认：8080）
