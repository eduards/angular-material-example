export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/core/home/home.html'
    })
    .state('consultation', {
      url: '/consultation',
      templateUrl: 'app/core/consultation/consultation.html',
      controller: 'ConsultationController',
      controllerAs: 'consultation'
    });

  $urlRouterProvider.otherwise('/');
}