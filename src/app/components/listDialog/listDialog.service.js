export class ListDialogService {
  constructor($mdDialog, $document) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.$document = $document;
  }

  open(title, items, $event) {
    return this.$mdDialog.show({
      controller: 'ListDialogController',
      controllerAs: 'listDialog',
      templateUrl: 'app/components/listDialog/listDialog.html',
      bindToController: true,
      parent: angular.element(this.$document.body),
      escapeToClose: true,
      clickOutsideToClose: true,
      fullscreen: false,
      targetEvent: $event,
      locals: {
        title, items
      }
    });
  }
}
