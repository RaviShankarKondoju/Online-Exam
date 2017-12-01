<div class="container">
    <navigation class="row"></navigation>
        <div class="row">
            <div class="col-md-7">
                <form novalidate="" class="survey form ">
                    <div class="form-group">
                        <!-- <label for="surveytitle">Survey-titel</label> -->
                        <input type="text" class="form-control input-lg" ng-model="vm.survey.title" id="surveytitle" placeholder="Enter Title" />
                    </div>
                    <!--<button class="btn btn-default" ngf-select="" ng-model="survey.file" name="file" ngf-pattern="'image/*'" ngf-accept="'image/*'" ngf-max-size="20MB" ngf-min-height="100" ngf-resize="{width: 1024, height: 768}">Select an Image</button>-->
                    <!--<p>Image: {{survey.file.$ngfName}}</p>-->
                    <div class="col-md-12 well" id="questions" ng-repeat="question in vm.survey.questions">
                        <span class="btn btn-danger pull-right" title="Remove this question" ng-click="vm.remove(question, vm.survey.questions)" ng-if="$index > 0">X</span>
                        <div class="form-group">
                            <h3>Question {{ $index+1 }}</h3>
                            <input type="text" class="form-control" ng-model="question.title" name="" placeholder="Enter a question" />
                        </div>
                        <div class="row">
                            <div class="col-xs-10" id="answers" ng-repeat="answer in question.answers">
                                <div class="form-group">
                                    <label for="answers" class="control-label">Answer {{ $index+1 }}</label>
                                    <div class="input-group col-md-12">
                                        <input type="text" required="" placeholder="Type answer here" class="form-control input-sm" name="" ng-model="answer.title" />
                                        <!-- <span class="input-group-addon input-sm">
                                        <input type="checkbox" title="Mark as correct answer" checked="" ng-model='answer.correct' ng-true-value="1" ng-false-value="0" ng-click="uncheckSiblings(answer, question.answers)"/>
                                      </span> -->
                                        <span class="input-group-btn" ng-click="vm.remove(answer, question.answers)">
                            <button class="btn btn-danger btn-sm" type="button" title="Remove this answer" ng-show="$index > 1">X</button>
                          </span>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-sm" ng-show="$last" ng-click="vm.addNewAnswer()" ng-if="question.answers.length <= 4">+ Add another answer</button>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <button class="btn btn-primary" ng-click="vm.addNewQuestion()" ng-if="vm.survey.questions.length <= 9">+ Add another question</button>
                    <!--<div class="col-md-12">
                      <br />
                      <b>Data</b>
                      <pre>{{ survey | json }}</pre>
                    </div>-->
                </form>
            </div>
        </div>
        <div class="row">
            <preview class="col-xs-12"></preview>

        </div>
    </div>