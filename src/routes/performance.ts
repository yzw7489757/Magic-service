import PerformanceController from '../controller/performance-controller';

export default {
  prefix: '/api/performance',
  routes:[
    {
      path: '/insert',
      method: 'post',
      action: PerformanceController.insert
    },
    {
      path: '/list',
      method: 'get',
      action: PerformanceController.list
    }
  ]
};
