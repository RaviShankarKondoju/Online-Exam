function PollCtrl(examService,formDataService) {
    var vm = this;
    //
    vm.$onInit = $onInit;
    // vm.refreshExam = refreshExam;
    //
    vm.onSubmit = vm.onSubmit || onUserDidSubmit;
    // vm.onReset  = vm.onReset || onUserDidReset;
    //
    // vm.showError = showError;
    vm.addNewQuestion = addNewQuestion;
    vm.addNewAnswer = addNewAnswer;
    vm.remove = remove;
    vm.uncheckSiblings = uncheckSiblings;


    //
    function $onInit() {
        vm.quiz = [];
        // vm.refreshExam();
    }

    vm.survey = {
        'title': '',
        'questions': [{id: 1, 'title': '', 'answers': [{id: 1, 'title': ''}, {id: 2, 'title': ''}]}]
    };
    formDataService.addData(vm.survey);
    // function refreshExam() {
    //     return examService.list().then(function refreshedExam(response) {
    //         vm.exam = response.data;
    //     });
    // }

    function onUserDidSubmit(questions) {
        return examService.create(questions)
            // .then(onUserDidReset)
            // .catch(vm.showError);
    }
    //
    // //
    // function onUserDidReset() {
    //     vm.title = '';
    //     // vm.quiz.$setPristine();
    //     // vm.quiz.$setUntouched();
    // }
    //
    // //
    // function showError(response) {
    //     alert(response.data.errors.join("\n"));
    // }

    function addNewQuestion() {

        var newQuestionNo = vm.survey.questions.length + 1;
        vm.survey.questions.push({
            'id': newQuestionNo,
            'title': '',
            'answers': [{id: 1, 'title': '', 'correct': 0}, {id: 2, 'title': ''}]
        });
    }

      function addNewAnswer(question) {
        console.log(question);
        var newAnswerNo = question.answers.length + 1;
        question.answers.push({'id': newAnswerNo, 'title': ''});
    }

    function remove(item, items) {

        items.splice(items.indexOf(item), 1);
        items.forEach(function (elem) {
            elem.id = items.indexOf(elem) + 1;
        });
        formDataService.setStep();
    }

    function uncheckSiblings() {

        if (item.correct) {
            vm.selected = item;
        }

    }
}