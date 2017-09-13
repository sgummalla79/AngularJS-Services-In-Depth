(function(){
    angular.module("BooksLogger")
    .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', '$q', BooksController]);
    
    function BooksController(books, data, logger, badgeService, $q){
        var vm = this;
    
        vm.appName = books.appName;
        vm.allBooks = [];
        vm.allReaders = [];

        var booksPromise = data.getAllBooks();
        var readersPromise = data.getAllReaders();

        $q.all([booksPromise, readersPromise])
        .then(getAllDataSuccess, null, getAllDataNotifications)
        .catch(getAllDataError);

        function getAllDataSuccess(dataArray){
            console.log(dataArray);

            vm.allBooks = dataArray[0];
            vm.allReaders = dataArray[1];
        }

        function getAllDataError(error){
            logger.output(error);
        }

        function getAllDataNotifications(notification){
            logger.output(notification);
        }
        
        vm.getBadge = badgeService.retrieveBadge;
        
        logger.output("BooksController has been Created");
    }
})();
