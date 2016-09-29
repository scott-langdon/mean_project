app.controller('ShowController', ['$scope','$http','$location',"$window", 'TopicFactory', 'MessageFactory', '$routeParams', function($scope, $http, $location, $window, TopicFactory, MessageFactory, $routeParams){
  function getHTML(){
    // topics._id = $routeParams.id
    TopicFactory.getTopicsOfUser($routeParams.id, function(topics){
      console.log(topics);
      var temp;
      var tempArr;
      for(var i=0; i<topics.data.length; i++){
        if(topics.data[i].photo){
        temp = topics.data[i].photo;
        tempArr = temp.split("/");
        // console.log(tempArr);
        temp = tempArr[tempArr.length - 1];
        // console.log(temp);
        // $scope.img.push(temp);
        topics.data[i].photoName = temp;
      }
    }
      $scope.topics = topics;
    })
  }
  getHTML();

  $scope.logOut = function(){
    $window.localStorage.clear();
    $location.path('/')
  }
// $scope.topics = function(topics){
//   topics._id = $routeParams.id
//   TopicFactory.show(topics,function(){
//     getHTML();
//   })
// }
// $scope.addPost = function(messages){
//     messages._topic = $routeParams.id
//     MessageFactory.create(messages,function(){
//       getHTML();
//     })
// }


    // $scope.test = "hallo";
    // $scope.aTopic = function(topics){
    //     TopicFactory.create(topics,function(){
    //       getHTML();
    //     })
    // }
}])
