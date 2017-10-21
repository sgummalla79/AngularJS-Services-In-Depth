(function(){
    angular.module("BooksLogger")
    .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', '$q', '$cookies', '$cookieStore', BooksController]);
    
    function BooksController(books, dataService, logger, badgeService, $q, $cookies, $cookieStore){
        var vm = this;
    
        vm.appName = books.appName;
        vm.getBadge = badgeService.retrieveBadge;
        vm.allBooks = [];

        dataService.getAllReaders()
        .then(function(data){
            vm.allReaders = data;
        }, function(error){
            console.log(error);
        });

        dataService.getAllBooks()
        .then(function(data){
            vm.allBooks = data;
        }, function(error){
            console.log(error);
        });

        vm.favoriteBook =  $cookies.favoriteBook;
        vm.lastEdited = $cookieStore.get('lastEdited');
    }
})();
