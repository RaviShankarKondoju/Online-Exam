function PollCtrl(formDataService) {
    var vm = this;
    //
    vm.$onInit = $onInit;
    // vm.refreshExam = refreshExam;
    //
    // vm.onSubmit = vm.onSubmit || onUserDidSubmit;
    // // vm.onReset  = vm.onReset || onUserDidReset;
    //
    // vm.showError = showError;
    vm.addNewQuestion = addNewQuestion;
    vm.addNewAnswer = addNewAnswer;
    vm.remove = remove;
    vm.uncheckSiblings = uncheckSiblings;

    vm.survey = { 'title' : '', 'questions': [ { id: 1, 'title' : '', 'answers' : [{id: 1, 'title' : ''/*, 'correct' : 0*/}, {id: 2, 'title' : ''/*, 'correct' : 0*/}] } ] };

    //
    function $onInit() {
        vm.exam = [];
        // vm.refreshExam();
    }

    // function refreshExam() {
    //     return examService.list().then(function refreshedExam(response) {
    //         vm.exam = response.data;
    //     });
    // }

    // function onUserDidSubmit(title) {
    //     return examService.create(title)
    //         .then(onUserDidReset)
    //         .catch(vm.showError);
    // }
    //
    // //
    // function onUserDidReset() {
    //     vm.title = '';
    //     vm.quiz.$setPristine();
    //     vm.quiz.$setUntouched();
    // }
    //
    // //
    // function showError(response) {
    //     alert(response.data.errors.join("\n"));
    // }

    function addNewQuestion() {
        var newQuestionNo = vm.survey.questions.length+1;
        vm.survey.questions.push({ 'id': newQuestionNo, 'title' : '', 'answers' : [{ id: 1, 'title' : '', 'correct' : 0}, {id: 2, 'title' : ''/*, 'correct' : 0*/ }] });
    }

    function addNewAnswer() {
        var newAnswerNo = this.question.answers.length+1;
        this.question.answers.push({ 'id': newAnswerNo, 'title' : ''/*, 'correct' : 0*/ });
    }

    function remove(item, items) {

        items.splice(items.indexOf(item), 1);
        items.forEach( function (elem) {
            elem.id = items.indexOf(elem)+1;
            // if(item.correct) elem.correct = 0;
        });
        // set new step for form
        formDataService.setStep();
    }

    function uncheckSiblings() {

        if(item.correct) {
            vm.selected = item;
            // items.forEach( function (elem) {
            // 	if (elem != $scope.selected) elem.correct = 0;
            // });
            // console.log(item);
        }

    }
}