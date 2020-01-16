import ProjectController from '../controller/application-controller';

export default {
  prefix: '/api/application',
  routes:[
    {
      path: '/insert',
      method: 'post',
      action: ProjectController.addNewProject
    },
    {
      path: '/list',
      method: 'get',
      action: ProjectController.getProjectList
    }
  ]
};
