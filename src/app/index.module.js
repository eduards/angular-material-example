import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { ConsultationController } from './core/consultation/consultation.controller';
import { ProfileNameFilter } from './core/consultation/profileName.filter';
import { ListDialogController } from './components/listDialog/listDialog.controller';
import { ListDialogService } from '../app/components/listDialog/listDialog.service';
import { ProfilesService } from '../app/components/model/profiles.service';
import { ProfessionsService } from '../app/components/model/professions.service';
import { ConsultationsService } from '../app/components/model/consultation.service';
import { ProfessionalsService } from '../app/components/model/professionals.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('babylonHealth', ['ngAnimate', 'ui.router', 'ngMaterial'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('ListDialogService', ListDialogService)
  .filter('profileName', ProfileNameFilter.prototype.filter)
  .service('ProfilesService', ProfilesService)
  .service('ProfessionsService', ProfessionsService)
  .service('ProfessionalsService', ProfessionalsService)
  .service('ConsultationsService', ConsultationsService)
  .controller('ConsultationController', ConsultationController)
  .controller('ListDialogController', ListDialogController)
  .directive('bhNavbar', NavbarDirective)
