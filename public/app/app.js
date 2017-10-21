(function(){
    var booksLogger = angular.module("BooksLogger",['ngRoute', 'ngCookies']);

    booksLogger.run(['$rootScope', function($rootScope){
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
            console.log('Successfully chnaged routes');
        });

        $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
            console.log('error changing routes');

            console.log(event);
            console.log(current);
            console.log(previous);
            console.log(rejection);
        });
    }]);
    
    booksLogger.provider("books", ['constants', function(constService){
        this.$get = function(){
            var appName = constService.APP_TITLE;
            var appDesc = constService.APP_DESCRIPTION;
            var appVersion = constService.APP_VERSION;
    
            if (includeVersionInTitle){
                appName += ' ' + appVersion;
            }
    
            return {
                appName : appName,
                appDesc : appDesc
            }
        }
    
        var includeVersionInTitle = false;
        this.setIncludeVersionInTitle = function(value){
            includeVersionInTitle = value;
        }
    }])
    
    booksLogger.config(['booksProvider','$routeProvider', '$locationProvider', appConfig])

    function appConfig(booksProvider, $routeProvider, $locationProvider){
        booksProvider.setIncludeVersionInTitle(true);

        $routeProvider
            .when('/',{
                templateUrl : '/app/templates/books.html',
                controller : 'BooksController',
                controllerAs : 'books'
            })
            .when('/AddBook',{
                templateUrl : '/app/templates/addBook.html',
                controller : 'AddBookController',
                controllerAs : 'addBook'
            })
            .when('/EditBook/:bookId',{
                templateUrl : '/app/templates/editBook.html',
                controller : 'EditBookController',
                controllerAs : 'editBook',
            })
            .otherwise('/');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
            });
    }
})();



