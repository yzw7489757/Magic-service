import UserController from '../controller/user-controller'

export default {
  prefix: '/api/user',
  routes:[
    {
      path: '/register',
      method: 'post',
      action: UserController.register
    },
    {
      path: '/login',
      method: 'post',
      action: UserController.login
    },
  ]
}
