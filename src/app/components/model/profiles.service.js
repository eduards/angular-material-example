export class ProfilesService {
  constructor($q) {
    'ngInject';

    this.$q = $q;
  }

  getAll() {
    // Simulating $http.get('/api/profiles')
    return this.$q.when([{
      id: 1,
      name: 'Max',
      imageUrl: 'https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg',
      type: 'identity'
    }, {
      id: 2,
      name: 'Sarah',
      imageUrl: 'http://images.wisegeek.com/young-calico-cat.jpg',
      type: 'family'
    }]);
  }
}
