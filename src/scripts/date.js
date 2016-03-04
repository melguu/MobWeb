angular.module('kuveij')
    .filter('javaDate', function () {
        return function (javaDateString) {
            return moment(javaDateString, "ddd MMM DD HH:mm:ss zzz gggg")
                .fromNow();
        };
    });