(function(){
    angular.module('BooksLogger').controller('AddBookController', ['dataService','$location', AddBookController]);


    function AddBookController(dataService, $location){
        var vm = this;
        
        vm.newBook = {
            'title' : '',
            'author' : '',
            'yearPublished' : ''
        }

        vm.saveBook = function(){
            dataService.addBook(vm.newBook)
            .then(function(){
                $location.path('/');
            }, function(error){
                console.log(error);
            });
        }
    }
})();