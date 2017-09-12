(function(){
    angular.module("BooksLogger")
    .factory('dataService', dataService);

    function dataService(logger, $q){

        function getAllBooks(){
            var booksArray =  [
                {
                    "book_id": 1,
                    "title": "Anna Karenina",
                    "author": "Leo Tolstoy",
                    "year_published": "1878"
                },
                {
                    "book_id": 2,
                    "title": "The Things They Carried",
                    "author": "Tim O'Brien",
                    "year_published": "1990"
                },
                {
                    "book_id": 3,
                    "title": "Invisible Man",
                    "author": "Ralph Ellison",
                    "year_published": "1952"
                }
            ];

            logger.output('Getting all Books..');


            var deferred = $q.defer();

            setTimeout(function(){
                if (true){
                    deferred.notify("Just getting started gathering books...");
                    deferred.notify("Almost done gathering books...");
                    deferred.resolve(booksArray);
                }
                else{
                    deferred.reject("Error Retrieving Books..");
                }
            }, 3000);

            return deferred.promise;
        }

        function getAllReaders(){
            logger.output('Getting all Readers..');

            return [
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
            ]
        }

        return{
            getAllBooks : getAllBooks,
            getAllReaders : getAllReaders
        }
    }

    dataService.$inject = ['logger', '$q'];
})();