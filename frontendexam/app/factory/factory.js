function formDataService() {
    var formData = {};

    var addData = function(newObj) {

        formData = newObj;
        console.log(formData)

    };

    var getDataquiz = function() {

        return formData;

    };

    var step = 0;

    var setStep = function(num) {

        step += num;

    };

    var getStep = function() {

        return step;

    };

    return {
        addData: addData,
        getDataquiz: getDataquiz,
        setStep: setStep,
        getStep: getStep
    }
}