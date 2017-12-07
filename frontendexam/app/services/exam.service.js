function examService($http, $interpolate) {
    var exam = $interpolate('/api/exam/{{id}}');

    return {
        // list: list,
        create: create
        // destroy: destroy,
        // update: update
    };
    //
    // function list() {
    //     return $http.get(quiz());
    // }

    function create(questions) {
        var data = {
            questions: questions
        };

        return $http.post(exam(), data);
    }

    // function destroy(id) {
    //     return $http.delete(note({ id: id }));
    // }
    //
    // function update(id, title, text) {
    //     var data = {
    //         title: title,
    //         text: text
    //     };
    //
    //     return $http.put(note({ id: id }), data);
    // }
}