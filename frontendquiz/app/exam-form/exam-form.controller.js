function ExamFormController(examService, quizFactory) {
    var vm = this;
    //
    vm.$onInit = $onInit;
    // vm.refreshExam = refreshExam;
    //
    vm.onSubmit = vm.onSubmit || onUserDidSubmit;
    // // vm.onReset  = vm.onReset || onUserDidReset;
    //
    // vm.showError = showError;
    vm.start = start;
    vm.reset = reset;
    vm.getQuestion = getQuestion;
    vm.checkAnswer = checkAnswer;
    vm.nextQuestion = nextQuestion;
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

    function onUserDidSubmit(title) {
        return examService.create(title)
            .then(onUserDidReset)
            .catch(vm.showError);
    }
    //
    function onUserDidReset() {
        vm.title = '';
        vm.quiz.$setPristine();
        vm.quiz.$setUntouched();
    }
    //
    function showError(response) {
        alert(response.data.errors.join("\n"));
    }
    
    function start() {
        vm.id = 0;
        vm.quizOver = false;
        vm.inProgress = true;
        vm.getQuestion();
    }
    
    function reset() {
        vm.inProgress = false;
        vm.score = 0;
    }
    
    function getQuestion() {
        var q = quizFactory.getQuestion(vm.id)
        if(q) {
            vm.question = q.question;
            vm.options = q.options;
            vm.answer = q.answer;
            vm.answerMode = true;
        } else {
            vm.quizOver = true;
        }
        
    }
    
    function checkAnswer() {
        if(!$('input[name=answer]:checked').length) return;

        var ans = $('input[name=answer]:checked').val();

        if(ans == vm.options[vm.answer]) {
            vm.score++;
            vm.correctAns = true;
        } else {
            vm.correctAns = false;
        }

        vm.answerMode = false;

    }

    function nextQuestion() {
        vm.id++;
        vm.getQuestion();

    }

    vm.reset();
}