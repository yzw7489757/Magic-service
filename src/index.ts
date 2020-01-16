import 'reflect-metadata';
import * as Koa from 'koa';
import { createConnection } from 'typeorm';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import AppRoutes from './routes/index';
import { RouteModel, RouteGroup } from './interfaces/route';
import * as redisStore from 'koa-redis'
import * as onerror from 'koa-onerror'
import * as session from 'koa-generic-session'
import * as logger from 'koa-logger'
import { SESSION_KEY, REDIS_KEY,JWT_KEY } from './conf/secretKeys';
import { REDIS_CONF } from './conf/db';
import * as jwt from 'koa-jwt'
import errorHandle from './middlewares/errorHandle';
import * as cors from '@koa/cors';
// const cors = require('@koa/cors');

const redis = {
  key: REDIS_KEY,
  prefix: 'magic:sess:',
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  store:redisStore({
    host: REDIS_CONF.host,
    port: REDIS_CONF.port,
  })
}

createConnection()
  .then(async connection => {
    const app = new Koa();
    const router = new Router();
    const port = process.env.PORT || 3000;

    app.use(cors({
      origin:'*',
      credentials:true
    }))
   

    // 错误处理
    onerror(app)
    // 处理jwt 401
    app.use(errorHandle);
    
    app.use(jwt({
      secret:JWT_KEY,
    }).unless({
      path: [/^\/api\/user/],
    }))
    
    app.keys = [SESSION_KEY]
    
    // app.use(session(redis))
    // registered All Routes Group
    // router.prefix('/api')
    Object.keys(AppRoutes).forEach(groupKey => {
      const group: RouteGroup = AppRoutes[groupKey]
      const prefix = group.prefix || '';
      group.routes.forEach((route: RouteModel) => {
        router[route.method](`${prefix}${route.path}`, route.action)
      });
    })

    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.use(logger())
    app.listen(port);

    console.log(`application running at port:${port}`);
  })
  .catch(error => console.log('TypeORM 链接失败: ', error));
