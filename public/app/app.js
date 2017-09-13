(function(){
    var booksLogger = angular.module("BooksLogger",['ngRoute']);
    
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
    
    booksLogger.config(['booksProvider', 'constants',function(books, constService){
        books.setIncludeVersionInTitle(true);
    }])

    booksLogger.config(['$routeProvider', function(routeProvider){
        routeProvider.when
    }])

})();



