app.controller('TopicsController', ['$scope','$http', '$location', '$routeParams', 'TopicFactory','UserFactory', '$window','Upload', '$timeout', function($scope, $http, $location, $routeParams, TopicFactory, UserFactory, $window, Upload, $timeout){
  // $scope.img = [];
  function getHTML(){
    TopicFactory.getTopics(function(topics){
      console.log(topics.data);
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
      console.log(topics.data);
      $scope.topics = topics;
    })
  }
  getHTML();
  function getUser(){
    UserFactory.loggedIn(function(user){
      console.log(user)
      $scope.current_user = user;
    })
  }
  getUser();
  $scope.submit = function() {
     if ($scope.form.file.$valid && $scope.file) {
       $scope.upload($scope.file);
     }
   };
    $scope.test = "hallo";
    // console.log(session)
    $scope.addTopic = function(topics){
        TopicFactory.create(topics,function(){
          getHTML();
        })
    }
    $scope.logOut = function(){
      $window.localStorage.clear();
      $location.path('/')
    }


    // upload later on form submit or something similar
	        $scope.uploadPic = function(file) {
            console.log(file)
            console.log($scope)
			    file.upload = Upload.upload({
			      url: '/uploads', //this is the route that your server must listen for
            data: {title: $scope.title, description: $scope.description, file: file}
			    });

			    file.upload.then(function (response) {
			      $timeout(function () {
			        file.result = response.data;
			      });
			    }, function (response) {
			      if (response.status > 0)
			        $scope.errorMsg = response.status + ': ' + response.data;
			    }, function (evt) {
			      // Math.min is to fix IE which reports 200% sometimes
			      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            getHTML();
			    });
		    }


        $scope.test = "hallo";
        // console.log(session)
        $scope.createMessage = function(messages){
            TopicFactory.createMessages(messages,function(){
              getHTML();
            })
        }


}])
