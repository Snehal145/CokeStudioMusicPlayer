app.factory("songsFactory",function($http){
    var factory = {};

    factory.readProducts = function(){
        return $http({method:"POST",
        url:"http://starlord.hackerearth.com/sureify/cokestudio"
    });
    };
    return factory;
});