<div class="container">
    <navigation class="row"></navigation>
    <form name="vm.quiz" ng-submit="vm.onSubmit(vm.title)" class="panel panel-default">
        <div class="quiz-area" ng-show="vm.inProgress">
            <div ng-show="!vm.quizOver">
                    <h2 id="question">{{vm.question}}</h2>
                    <ul id="options">
                        <li ng-repeat="option in vm.options">
                            <label for="title">
                                <input id="title" ng-model="vm.title" type="radio" name="answer" value="{{option}}">
                                {{option}}
                            </label>
                        </li>
                    </ul>
                    <button ng-click="vm.checkAnswer()" ng-show="vm.answerMode">Submit</button>
    </form>

                    <div ng-show="!vm.answerMode">
                        <button ng-click="vm.nextQuestion()" class="next-question">Next</button>
                        <span ng-show="vm.correctAns">That is correct!</span>
                        <span ng-show="!vm.correctAns">Sorry, that is an incorrect answer.</span>
                    </div>
            </div>


            <div ng-show="vm.quizOver">
                <h2>Quiz is over</h2>
                <button ng-click="vm.reset()">Play again</button>
            </div>

            <div id="vm.score">
                Score: {{vm.score}}
            </div>
        </div>

        <div class="intro" ng-show="!vm.inProgress">
            <p>Welcome to the QuizApp</p>
            <button id="startQuiz" ng-click="vm.start()">Start the Quiz</button>
        </div>

</div>