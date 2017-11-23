function appConfig($routeProvider) {
    $routeProvider
        .when('/', { template: '<quiz></quiz>' })
        .when('/info', { template: '<info></info>' })
        .otherwise({
            redirectTo: '/'
        })
}