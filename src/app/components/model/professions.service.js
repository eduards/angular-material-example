export class ProfessionsService {
  constructor($q) {
    'ngInject';

    this.$q = $q;
  }

  getAll() {
    // Simulating $http.get('/api/professions')
    return this.$q.when([{
      id: 1,
      name: 'GP',
      imageUrl: 'http://i.imgur.com/WrYWdTA.jpg',
      alternatives: ['Male', 'Female']
    }, {
      id: 2,
      name: 'Nurse',
      imageUrl: 'http://designyoutrust.com/wp-content/uploads/2012/02/baby-milk-tea1.jpg'
    }, {
      id: 3,
      name: 'Therapist',
      imageUrl: 'https://i.ytimg.com/vi/SF6McpBnu5A/maxresdefault.jpg',
      alternatives: ['Priory', 'Psychologists', 'Counselors']
    }, {
      id: 4,
      name: 'Specialist',
      imageUrl: 'http://i.telegraph.co.uk/multimedia/archive/03497/comedy-hamster_3497562b.jpg'
    }]);
  }
}
