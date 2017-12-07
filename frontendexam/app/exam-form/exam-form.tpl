<div class="container">
    <navigation class="row"></navigation>
    <div class="row">
        <div class="col-md-7">
            <form novalidate=""  class="survey_form" ng-submit="vm.onSubmit(vm.questions)">
                <div class="form-group">
                    <input type="text" class="form-control input-lg" ng-model="vm.survey.title" id="surveytitle"
                           placeholder="Enter Title"/>
                </div>
                <div class="col-md-12 well" id="questions" ng-repeat="question in vm.survey.questions">
                    <span class="btn btn-danger pull-right" title="Remove this question"
                          ng-click="vm.remove(question, vm.survey.questions)" ng-if="$index > 0">X</span>
                    <div class="form-group">
                        <h3>Question {{ $index+1 }}</h3>
                        <input type="text" class="form-control" ng-model="question.title" ng-change="vm.questions = question.title" name="title"
                               placeholder="Enter a question"/>
                    </div>
                    <div class="row">
                        <div class="col-xs-10" id="answers" ng-repeat="answer in question.answers">
                            <div class="form-group">
                                <label for="answer" class="control-label">Answer {{ $index+1 }}</label>
                                <div class="input-group col-md-12">
                                    <input type="text" required="" placeholder="Type answer here"
                                           class="form-control input-sm" name="" ng-model="answer.title"/>
                                      <span class="input-group-btn" ng-click="vm.remove(answer, question.answers)">
                            <button class="btn btn-danger btn-sm" type="button" title="Remove this answer"
                                    ng-show="$index > 1">X</button>
                          </span>
                                </div>
                            </div>
                            <button class="btn btn-primary btn-sm" ng-show="$last" ng-click="vm.addNewAnswer(question)"
                                    ng-if="question.answers.length <= 4">+ Add another answer
                            </button>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <button class="btn btn-primary" ng-click="vm.addNewQuestion()" ng-if="vm.survey.questions.length <= 9">+
                    Add another question
                </button>
                <button>Submit</button>
            </form>
        </div>
        <div class="col-md-5 preview">
        <preview class="col-xs-12" ></preview>
        </div>
    </div>
</div>