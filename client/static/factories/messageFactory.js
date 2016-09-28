app.factory('MessageFactory', ['$http', function($http){
    var messages = {data:[]};
    var message = {data:[]};
    return{
        create:function(messages, callback){
            $http({
                method:"POST",
                url:"/messages/" + messages._topic,
                data:messages
            }).then(function(messages){
                callback();
            })
        },
        getMessages: function(callback){
          $http({
            method:"GET",
            url:"/topics"
          }).then(function(res){
            topics.data = res.data
            callback(topics);
          })
        }
      }
}])
