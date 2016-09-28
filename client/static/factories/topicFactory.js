app.factory('TopicFactory', ['$http', function($http){
    var topics = {data:[]};
    var topic = {data:[]};
    return{
        create:function(topics, callback){
            $http({
                method:"POST",
                url:"/topics",
                data:topics
            }).then(function(topics){
                callback();
            })
        },
        getTopics: function(callback){
          $http({
            method:"GET",
            url:"/topics"
          }).then(function(res){
            topics.data = res.data
            callback(topics);
          })
        },
    getTopic: function(id,callback){
        $http({
          method: "GET",
          url: "/topic/"+ id
        }).then(function(res){
          topic.data = res.data
          callback(topic);
        })
      },

  createMessages: function(messages, callback){
      $http({
          method:"POST",
          url:"/messages/",
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
