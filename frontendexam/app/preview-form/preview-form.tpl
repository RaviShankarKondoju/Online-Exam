<button class="btn btn-lg btn-success" ng-click="vm.togglePreview()">Preview</button>
<div class="well" ng-if="vm.preview">
    <form id="poll">
        <h2>{{vm.formData.title || 'Online Exam'}}</h2>
        <div ng-repeat="question in vm.formData.questions">
            <h3>{{question.title || 'Question ' + question.id}}</h3>
            <div class="radio" ng-repeat="answer in question.answers">
                <label>
                    <input type="radio" ng-model="question.answer" name="optionsRadios{{answer.id}}"
                           id="optionsRadios{{answer.id}}" value="option{{answer.id}}"/>
                    {{answer.title || 'Answer ' + answer.id}}
                </label>
            </div>
        </div>
        <div class="formnav row">
            <button class="btn btn-primary btn-sm col-md-4" ng-show="step > 0" ng-click="vm.setStep(-1)">Previous
                Question
            </button>
            <button class="btn btn-primary btn-sm col-md-4 pull-right"
                    ng-hide="step == vm.formData.questions.length -1" ng-if="vm.formData.questions[step].answer"
                    ng-click="vm.setStep(1)">Next Question
            </button>
            <div class="clearfix"></div>
            <button id="submit" class="btn btn-success btn-block btn-lg"
                    ng-show="(step + 1 == vm.formData.questions.length) && vm.formData.questions[step].answer"
                    ng-click="">Submit
            </button>
        </div>
    </form>
</div>
