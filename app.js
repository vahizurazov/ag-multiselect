var arr = [
  { id: '0000-000', accountName: 'Lol' },
  { id: '0000-001', accountName: 'Lol1' },
  { id: '0000-002', accountName: 'Lol2' },
]

angular.module('myApp', ['btorfs.multiselectQuestions']).controller('myController', function ($scope) {
  $scope.message = 'Hello, AngularJS!'
  $scope.accessibleAccounts = [...arr]
  $scope.accessibleAccountsSelected = [arr[0]]
})
