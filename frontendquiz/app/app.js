angular.module('quizApp', ['ngRoute'])
    .factory('examService', examService)
    .factory('quizFactory', quizFactory)
    .component('quiz', {
        templateUrl: 'app/exam-form/exam-form.tpl',
        controller: ExamFormController,
        controllerAs: 'vm',

        // require: {
        //     notesController: '^notes'
        // },

        // bindings: {
        //     data: '<',
        //     onSubmit: '<',
        //     onReset: '<'
        // }
    })
    .component('navigation', { templateUrl: 'app/navigation/navigation.tpl' })
    .component('info', { templateUrl: 'app/info/info.tpl' })
    .config(appConfig);