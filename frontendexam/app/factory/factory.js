function formDataService() {
    var formData = {};

    var addData = function(newObj) {

        formData = newObj;

    };

    var getData = function() {

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
        getData: getData,
        setStep: setStep,
        getStep: getStep
    }
}