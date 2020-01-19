import HomeController from '../controller/home-controller';
export default {
  prefix: '/api/home',
  routes: [
    {
      path: '/',
      method: 'get',
      action: HomeController.hello,
    },
  ],
};
