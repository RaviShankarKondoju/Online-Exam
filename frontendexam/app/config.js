function appConfig($routeProvider) {
    $routeProvider
            .when('/', { template: '<quiz></quiz>' })
        .when('/preview', { template: '<info></info>' })
        .otherwise({
            redirectTo: '/'
        })
}