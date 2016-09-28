app.controller('MessagesController', ['$scope','$http', '$location', '$routeParams', 'MessageFactory','UserFactory', function($scope, $http, $location, $routeParams, MessageFactory, UserFactory){

  // function getHTML(){
  //   TopicFactory.getTopics(function(topics){
  //     console.log(topics);
  //     $scope.topics = topics;
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
    $scope.test = "hallo";
    // console.log(session)
    $scope.addPost = function(messages){
        MessageFactory.create(messages,function(){
          getHTML();
        })
    }
}])
