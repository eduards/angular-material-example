export class ConsultationsService {
  constructor($q, $log) {
    'ngInject';

    this.$q = $q;
    this.$log = $log;
  }

  bookAppointment(profileId, professionalId, appointment) {
    let consultationBooking = {
      profileId, professionalId, appointment
    };

    // Simulating $http.post('/api/consultations', consultationBooking)
    // The API interpretes a booking with an undefined profileId as a booking for "Someone else" (A person the application does not know about)
    this.$log.log('Simulating $http.post(\'/api/consultations\', consultationBooking) with data: ', consultationBooking)
    return this.$q.when(true);
  }
}
