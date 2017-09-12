(function(){
    angular.module("BooksLogger")
    .controller('BooksController', ['books', 'dataService', 'logger', 'badgeService', function(books, data, logger, badgeService){
        var vm = this;
    
        vm.appName = books.appName;
        vm.allBooks = [];

        data.getAllBooks()
        .then(getBooksSuccess, null, getBooksNotification)
        .catch(getBooksError);

        function getBooksSuccess(booksRetrieved){
            throw 'error in success handler';
            vm.allBooks = booksRetrieved;
        }

        function getBooksError(error){
            logger.output(error);
        }

        function getBooksNotification(notification){
            logger.output(notification);
        }
        
        vm.allReaders = data.getAllReaders();

        vm.getBadge = badgeService.retrieveBadge;
        
        logger.output("BooksController has been Created");
    }])
})();
