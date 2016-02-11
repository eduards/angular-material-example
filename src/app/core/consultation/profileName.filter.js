export class ProfileNameFilter {
  filter() {
    'ngInject';

    return function(profile) {
      return profile.type === 'identity' ? 'Yourself' : profile.name;
    }
  }
}
