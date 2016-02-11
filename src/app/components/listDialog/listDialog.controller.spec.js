describe('ListDialogController', function() {
  let controller;

  let testItems = ['TEST_ITEM_1', 'TEST_ITEM_2'];
  let testLabeledItem = {
    label: 'TEST_LABELED_ITEM_LABEL',
    value: 'TEST_LABELED_ITEM__VALUE'
  };
  let testTitle = 'TEST_TITLE';

  beforeEach(angular.mock.module('babylonHealth'));

  beforeEach(inject(($controller, $mdDialog) => {
    this.$mdDialog = $mdDialog;

    spyOn($mdDialog, 'cancel').and.callThrough();
    spyOn($mdDialog, 'hide').and.callThrough();

    controller = $controller('ListDialogController', {
      items: testItems,
      title: testTitle
    });
  }));

  it('should put the provided items on the scope', () => {
    expect(controller.items).toEqual(testItems);
  });

  it('should put the provided title on the scope', () => {
    expect(controller.title).toEqual(testTitle);
  });

  describe('Function cancelDialog', () => {
    it('should call the dialog service', () => {
      controller.closeDialog();
      expect(this.$mdDialog.cancel).toHaveBeenCalled();
    });
  });

  describe('Function selectListItem', () => {
    it('should close the dialog with the provided item as the return value', () => {
      controller.selectListItem(testItems[0]);
      expect(this.$mdDialog.hide).toHaveBeenCalledWith(testItems[0]);
    });

    it('should close the dialog with the value of the provided labeled item as the return value', () => {
      controller.selectListItem(testLabeledItem);
      expect(this.$mdDialog.hide).toHaveBeenCalledWith(testLabeledItem.value);
    });
  });

});
