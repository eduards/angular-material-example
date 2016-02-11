export class ConsultationController {
  constructor($mdDialog, $log,$filter, ListDialogService, ProfilesService, ProfessionsService, ProfessionalsService, ConsultationsService) {
    'ngInject';

    this.$log = $log;
    this.$filter = $filter;
    this.$mdDialog = $mdDialog;
    this.ListDialogService = ListDialogService;
    this.ProfessionalsService = ProfessionalsService;
    this.ProfessionsService = ProfessionsService;
    this.ConsultationsService = ConsultationsService;

    this.selectedProfile = undefined;
    this.selectedProfession = undefined;
    this.selectedProfessionAlternative = undefined;
    this.selectedProfessional = undefined;
    this.selectedAppointment = undefined;
    this.addedPhoto = undefined;
    this.addedNote = undefined;
    this.dateFormat = 'MMM, d \u00A0\u00A0\'at\' HH:mm';

    this.activate(ProfilesService, ProfessionsService);
  }

  activate(ProfilesService, ProfessionsService) {
    ProfilesService.getAll().then(profiles => {
      profiles.push({
        name: 'Someone Else',
        imageUrl: '/assets/images/add-cross.png',
        type: 'other'
      })
      this.profiles = profiles;
    });

    ProfessionsService.getAll().then(professions => {
      this.professions = professions;
    });
  }

  selectProfile(profile) {
    this.selectedProfile = profile;
  }

  isProfileSelected(profile) {
    return this.selectedProfile === profile;
  }

  selectProfession(profession, $event) {
    if (profession.alternatives) {
      let listValues = profession.alternatives.map(profession => {
        return {
          label: profession,
          value: profession
        }
      }).concat({
        label: 'All',
        value: undefined
      });

      this.ListDialogService
        .open('Select Doctor', listValues, $event)
        .then(selectedAlternative => {
          this.selectedProfession = profession;
          this.selectedProfessionAlternative = selectedAlternative;
          this.loadProfessionalsForProfession(profession.name, selectedAlternative);
        });
    } else {
      this.selectedProfession = profession;
      this.selectedProfessionAlternative = undefined;
      this.loadProfessionalsForProfession(profession.name);
    }
  }

  loadProfessionalsForProfession(type, subtype) {
    this.ProfessionalsService.getAvailableByType(type, subtype).then(professionals => {
      this.professionals = professionals;

      this.professionals.forEach(professional => {
        professional.availability.sort();
        professional.earliestAvailability = professional.availability[0];
      });

      this.professionals.sort((firstVal, nextVal) => {
        return firstVal.earliestAvailability < nextVal.earliestAvailability ? -1 :
          firstVal.earliestAvailability > nextVal.earliestAvailability ? 1 :
          0;
      });

      this.selectedProfessional = this.professionals[0];
      this.selectedAppointment = angular.isDefined(this.professionals[0]) ?
        this.professionals[0].earliestAvailability :
        undefined;
    });
  }

  isProfessionSelected(profession) {
    return this.selectedProfession === profession;
  }

  getAvailableProfessionals() {
    if (angular.isUndefined(this.professionals)) {
      return [];
    }
    return this.professionals
      .filter(professional => angular.isDefined(professional.earliestAvailability));
  }

  selectProfessional($event) {
    let listValues = this.getAvailableProfessionals().map(profession => {
      return {
        label: profession.name,
        value: profession
      }
    });
    this.ListDialogService
      .open('Select Doctor', listValues, $event)
      .then(selectedProfessional => {
        this.setProfessional(selectedProfessional);
      });
  }

  setProfessional(professional) {
    this.selectedProfessional = professional;
    this.selectedAppointment = professional.earliestAvailability;
  }

  selectAppointment($event) {
    let listValues = this.selectedProfessional.availability.map(availability => {
      return {
        label: this.$filter('date')(availability, this.dateFormat),
        value: availability
      }
    });
    this.ListDialogService
      .open('Select Doctor', listValues, $event)
      .then(selectedAppointment => {
        this.selectedAppointment = selectedAppointment;
      });
  }

  isObligatoryBookingDataSet() {
    return angular.isDefined(this.selectedProfile) &&
      angular.isDefined(this.selectProfessional) &&
      angular.isDefined(this.selectedAppointment);
  }

  addPhoto() {
    alert('This function is not implemented yet.');
  }

  addNote() {
    alert('This function is not implemented yet.');
  }

  bookConsultation() {
    if (!this.isObligatoryBookingDataSet()) {
      this.$log.error('Booking data is missing.');
      alert('Booking data is missing. (This alert box is a temporary solution)');
      return;
    }

    this.ConsultationsService.bookAppointment(
      this.selectedProfile.id,
      this.selectedProfessional.id,
      this.selectedAppointment
    ).then(() => {
      alert('The booking submission was successfull. (This alert box is a temporary solution)');
    }).catch(() => {
      alert('The booking submission failed. (This alert box is a temporary solution)');
    });
  }

}
