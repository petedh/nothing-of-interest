function timerCtrl ($scope) {
    $scope.seconds = 0;
}
function timerCtrl ($scope, $interval) {
    var increase = function() { $scope.seconds++; }
    $scope.seconds = 0;
    $interval(function() {
        increase();
    }, 1000);
}