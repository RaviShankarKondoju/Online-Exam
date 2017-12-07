angular.module('poll', ['ngRoute'])
.factory('examService', examService)
    .factory('formDataService', formDataService)
    .component('quiz', {
        templateUrl: 'app/exam-form/exam-form.tpl',
        controller: PollCtrl,
        controllerAs: 'vm'

        // require: {
        //     notesController: '^notes'
        // },

        // bindings: {
        //     data: '<',
        //     onSubmit: '<',
        //     onReset: '<'
        // }
    })
    .component('preview', {
        templateUrl: 'app/preview-form/preview-form.tpl',
        controller: FormControl,
        controllerAs: 'vm',

        require: {
            pollCtrl: '^quiz'
        }

        // bindings: {
        //     data: '<',
        //     onSubmit: '<',
        //     onReset: '<'
        // }
    })
    .component('navigation', {templateUrl: 'app/navigation/navigation.tpl'})
    .component('info', {templateUrl: 'app/info/info.tpl'})
    .config(appConfig);