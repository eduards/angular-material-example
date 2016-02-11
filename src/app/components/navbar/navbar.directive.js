export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {},
    link: (scope) => {
      scope.$on('$stateChangeSuccess', (event, toState) => {
        if (toState.name === 'home') {
          scope.selectedTabIndex = 0;
        } else if (toState.name === 'consultation') {
          scope.selectedTabIndex = 1;
        }
      });
    }
  };

  return directive;
}
