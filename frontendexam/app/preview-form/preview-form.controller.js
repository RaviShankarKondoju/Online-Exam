function FormControl(formDataService) {

    var vm = this;
    vm.$onInit = $onInit;
    vm.togglePreview = togglePreview;
    vm.setStep = setStep;

    vm.preview = false;

    // $scope.step = 0;

    vm.step = formDataService.getStep();

    vm.formData = formDataService.getDataquiz();


    function $onInit() {
        // vm.notesController will be our parent controller (NotesController)
        // vm.data will contain the data of this note
    }

    function togglePreview() {
        vm.preview = (vm.preview === false) ? true : false;
    }

    function setStep(num) {
        formDataService.setStep(num)
        vm.step = formDataService.getStep();
    }

}

