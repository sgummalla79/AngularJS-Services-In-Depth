(function(){
    angular.module("BooksLogger")
    .factory('dataService', dataService);

    dataService.$inject = ['logger', '$q', '$http'];

    function dataService(logger, $q, $http){

        return{
            getAllBooks : getAllBooks,
            getAllReaders : getAllReaders,
            getBookById : getBookById,
            updateBook : updateBook,
            addBook : addBook
        }

        function getAllBooks(id){
            return $http({
                method : 'GET',
                url : '/api/books/'
            })
            .then(function(response){
                return $q.resolve(response.data);
            })
            .catch(function(response){
                return $q.reject('Error getting books. (HTTP status: ' + response.status + ')');  
            });
        }

        function getBookById(id){
            return $http({
                method : 'GET',
                url : '/api/books/' + id
            })
            .then(function(response){
                return $q.resolve(response.data);
            })
            .catch(function(response){
                return $q.reject('Error getting book. (HTTP status: ' + response.status + ')');  
            });
        }

        function updateBook(book){
            return $http({
                method : 'PUT',
                url : '/api/books/' + book.book_id,
                data : book
            })
            .then(function(response){
                return 'Book updated: ' + response.config.data.title;
            })
            .catch(function(response){
                return $q.reject('Error updating book. (HTTP status: ' + response.status + ')');  
            });
        }

        function addBook(newBook){
            return $http({
                method : 'POST',
                url : '/api/books/',
                data : newBook
            })
            .then(function(response){
                return 'Book Created: ' + response.config.data.title;
            })
            .catch(function(response){
                return $q.reject('Error adding book. (HTTP status: ' + response.status + ')');  
            });
        }

        function getAllReaders(){
            logger.output('Getting all Readers..');

            var deferred = $q.defer();

            setTimeout(function(){
                if (true){
                    deferred.resolve([
                        {
                            reader_id : 1,
                            name : 'Marie',
                            weeklyReadingGoal : 315,
                            totalMinutesRead : 5600
                        },
                        {
                            reader_id : 2,
                            name : 'Daniel',
                            weeklyReadingGoal : 210,
                            totalMinutesRead : 3000
                        },
                        {
                            reader_id : 3,
                            name : 'Lanier',
                            weeklyReadingGoal : 140,
                            totalMinutesRead : 600
                        }
                    ]);
                }
                else{
                    deferred.reject("error retreiving readers");
                }
            }, 1000);

            return deferred.promise;
        }
    }
})();