app.controller('songsController', function ($scope, $mdDialog, $mdToast, songsFactory, $http) {
    //reading the products
    $scope.allSongs = [];
    $scope.getSongs = function () {
        $scope.songs = [];
        songsFactory.readProducts().then(function (response) {
            for (i = 0; i < response.data.length; i++) {
                $scope.allSongs.push(response.data[i]);
                $scope.songs.push($scope.allSongs[i]);
            }
        }, function (error) {
            $scope.errorText = "No Songs found";
        });
    }
    $scope.readOneSong = function (song) {
        $scope.name = song.song;
        $scope.imageUrl = song.cover_image;
        $scope.artists = song.artists;
        $scope.songUrl = song.url;
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'musicplayer/app/templates/play_song.html',
            targetEvent: event,
            // clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true,
            fullScreen: true
        });
    }

    function DialogController($scope, $mdDialog) {
        $scope.cancel = function () {
            $mdDialog.cancel();
        };

    }
    $scope.getSongs();
});
