describe('Directive bh-navbar', function() {
  let vm, element;

  beforeEach(angular.mock.module('babylonHealth'));

  beforeEach(inject(($compile, $rootScope, $state) => {
    this.$state = $state;
    this.$rootScope = $rootScope;

    element = angular.element(`
      <bh-navbar></bh-navbar>
    `);

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    vm = element.isolateScope();
  }));

  it('should be compiled', () => {
    expect(element.html()).not.toEqual(null);
  });

  it('should have isolate scope', () => {
    expect(vm).toEqual(jasmine.any(Object));
  });

  it('should set the tabIndex initially to 0', () => {
    expect(vm.selectedTabIndex).toEqual(0);
  });

  it('should set the tabIndex to 0 if the state changes to "home"', () => {
    this.$state.go('consultation');
    this.$rootScope.$digest();
    this.$state.go('home');
    this.$rootScope.$digest();
    expect(vm.selectedTabIndex).toEqual(0);
  });

  it('should set the tabIndex to 1 if the state changes to "consultation"', () => {
    this.$state.go('consultation');
    this.$rootScope.$digest();
    expect(vm.selectedTabIndex).toEqual(1);
  });

});
