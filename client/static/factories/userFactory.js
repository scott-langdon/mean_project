app.factory('UserFactory', ['$http', function($http){
    var user = {data:[]}
    return{
        create:function(user, callback){
            $http({
                method:"POST",
                url:"/users",
                data:user
            }).then(function(user){
                callback();
            })
        },
        login:function(user,callback){
            $http({
                method:"POST",
                url:"/login",
                data:user
            }).then(function(user){
                callback();
            })
        },

        editPuser: function(user, callback){
        $http({
          method:"POST",
          url:'/editUser',
          data: user
        }).then(function(user){
          callback();
        })
      },

      edit: function(callback){
        $http({
          method:"GET",
          url:'/user'
        }).then(function(res){
          callback(res.data);
        })
      },

        loggedIn: function(callback){
          $http({
            method:"GET",
            url:'/usersLogged'
          }).then(function(res){
            callback(res.data);
          })
        }
    }

}])
