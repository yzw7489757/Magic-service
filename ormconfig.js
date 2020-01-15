const env = process.env.NODE_ENV;

module.exports = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'a7489757',
  database: 'magic_db',
  synchronize: true,
  logging: false,
  entities: [`${env == 'dev' ? 'src' : 'dist'}/entity/*{.ts,.js}`]
};
