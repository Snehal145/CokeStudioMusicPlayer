app.controller('songsController',function($scope,$mdDialog,$mdToast,songsFactory,$http){
    //reading the products

    $scope.readProducts = function(){
        songsFactory.readProducts().then(function (response){
            $scope.allSongs = response.data;
        },function (response){
            $scope.showToast("unable to read the songs.");
        });
    }

    $scope.getSongs = function(){
    $scope.songs = [];
    songsFactory.readProducts().then(function (response){
        for(i=0;i<response.data.length;i++){
            $scope.songs.push(response.data[i].song);
        }
    });
}
});

