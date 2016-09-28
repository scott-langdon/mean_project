app.controller('ShowController', ['$scope','$http','$location', 'TopicFactory', 'MessageFactory', '$routeParams', function($scope, $http, $location, TopicFactory, MessageFactory, $routeParams){
      function getHTML(){
    TopicFactory.getTopic($routeParams.id, function(topic){
      console.log(topic);
      $scope.topic = topic;
    })
  }
getHTML();
$scope.addPost = function(messages){
    messages._topic = $routeParams.id
    MessageFactory.create(messages,function(){
      getHTML();
    })
}


    // $scope.test = "hallo";
    // $scope.aTopic = function(topics){
    //     TopicFactory.create(topics,function(){
    //       getHTML();
    //     })
    // }
}])
