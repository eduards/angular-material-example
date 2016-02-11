export class ProfessionalsService {
  constructor($q) {
    'ngInject';

    this.$q = $q;
  }

  getAvailableByType(type, subtype) {
    // Simulating $http.get('/api/professionals' + '?type=' + type + '&available=true')
    return this.$q.when([{
      id: 1,
      name: 'Mr. Jeffrey Braithwaite',
      type: 'GP',
      subtype: 'Male',
      availability: [new Date('2016-02-14T14:00'), new Date('2016-02-14T11:00')]
    }, {
      id: 2,
      name: 'Mr. Rifki Guirgis',
      type: 'GP',
      subtype: 'Male',
      availability: [new Date('2016-02-15T16:30')]
    }, {
      id: 3,
      name: 'Mr. Christopher Guyer',
      type: 'GP',
      subtype: 'Male',
      availability: [new Date('2016-02-12T14:00'), new Date('2016-02-14T11:00'), new Date('2016-02-24T09:00')]
    }, {
      id: 4,
      name: 'Prof. Michel Cummings',
      type: 'GP',
      subtype: 'Male',
      availability: [new Date('2016-02-14T14:00')]
    }, {
      id: 5,
      name: 'Dr. Jane Smith',
      type: 'GP',
      subtype: 'Female',
      availability: [new Date('2016-02-15T14:00')]
    }, {
      id: 6,
      name: 'Dr. Steve Hurel',
      type: 'GP',
      subtype: 'Male',
      availability: [new Date('2016-02-15T14:00')]
    }, {
      id: 6,
      name: 'Ms. Maja Gonzales',
      type: 'Nurse',
      availability: [new Date('2016-02-19T14:00')]
    }, {
      id: 6,
      name: 'Ms. Claire Bijo',
      type: 'Nurse',
      availability: [new Date('2016-02-15T17:30')]
    }, {
      id: 7,
      name: 'Dr. Lara Lajiz',
      type: 'GP',
      subtype: 'Female',
      availability: [new Date('2016-02-15T14:00'), new Date('2016-02-17T11:00')]
    }].filter(professional => professional.type === type &&
      (angular.isUndefined(subtype) || professional.subtype === subtype)));
  }
}
