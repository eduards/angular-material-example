export class ListDialogController {
  constructor($mdDialog, items, title) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.items = items;
    this.title = title;
  }

  selectListItem(item) {
    return angular.isDefined(item.label) ?
      this.$mdDialog.hide(item.value) :
      this.$mdDialog.hide(item);
  }

  closeDialog() {
    this.$mdDialog.cancel();
  }
}
