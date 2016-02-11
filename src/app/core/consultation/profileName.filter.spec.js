describe('Filter profileName', function() {

  beforeEach(angular.mock.module('babylonHealth'));

  beforeEach(inject(($rootScope, $filter) => {
    this.$filter = $filter;
    this.$rootScope = $rootScope;
  }));

  it('should return the profile name if the profile type is not "identity"', () => {
    let result = this.$filter('profileName')({
      name: 'TEST_PROFILE_NAME',
      type: 'other'
    });
    expect(result).toEqual('TEST_PROFILE_NAME');
  });

  it('should return the String "Yourself" if the profile type is "identity"', () => {
    let result = this.$filter('profileName')({
      name: 'TEST_PROFILE_NAME',
      type: 'identity'
    });
    expect(result).toEqual('Yourself');
  });

});
