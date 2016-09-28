app.controller('editUsersController', ['$scope','$http', '$location', '$routeParams','UserFactory', function($scope, $http, $location, $routeParams,UserFactory){

  // function getHTML(){
  //   userFactory.getUsers(function(users){
  //     console.log(users);
  //     $scope.users = users;
  //   })
  // }
  // getHTML();
  // function getUser(){
  //   UserFactory.loggedIn(function(user){
  //     console.log(user)
  //     $scope.current_user = user;
  //   })
  // }
  // getUser();
  //
   function getUse(){
      UserFactory.loggedIn(function(user){
        console.log(user)
        $scope.current_user = user;
      })
    }

    $scope.test = "hallo";
    // console.log(session)
    function getUser(){
        UserFactory.edit(function(user){
          console.log(user);
          $scope.user = user
        })
    }

    $scope.editUser = function(user){
        UserFactory.editPuser(user,function(){
            $location.url('/dashboard');
          })
    }
    getUser();
}])
