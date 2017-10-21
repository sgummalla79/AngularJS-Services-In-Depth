(function(){

    angular.module('BooksLogger').controller('EditBookController', ['dataService', '$routeParams', '$cookies', '$cookieStore', '$location', EditBookController]);

    function EditBookController(dataService, $routeParams, $cookies, $cookieStore, $location){
        var vm = this;
        
        var bookId = $routeParams.bookId;

        dataService.getBookById(bookId)
        .then(function(data){
            vm.currentBook = data;
        }, function(error){
            console.log(error);
        });

        $cookieStore.put('lastEdited', vm.currentBook);

        vm.setAsFavorite = function(){
            $cookies.favoriteBook = vm.currentBook.title;
        }

        vm.saveBook = function(){
            dataService.updateBook(vm.currentBook)
            .then(function(){
                $location.path('/');
            }, function(error){
                console.log(error);
            });
        }
    }

})();