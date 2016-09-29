app.controller('usersController', ['$scope','$location','UserFactory', function($scope, $location, UserFactory){
    $scope.test = "hallo";
    $scope.create = function(user){
        UserFactory.create(user,function(){
            $location.url('/dashboard');
        })
    }
    var images= ["balloons.jpg","Confetti_in_Toronto.jpg","coolCat.jpg","stars.jpg","zoolander.jpg", "music_notes.png"];
    var randNumber = Math.floor(Math.random() * images.length);
    console.log(randNumber)
    $scope.randImg = "assets/loginPhotos/"+ images[randNumber];
    console.log($scope.randImg);


//
//   var width = Math.max(960, innerWidth),
//     height = Math.max(500, innerHeight);
//
// var i = 0;
//
// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);
//
// $scope.circles = svg.append("rect")
//     .attr("width", width)
//     .attr("height", height)
//     .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);
//
// function particle() {
//   var m = d3.mouse(this);
//
//   svg.insert("circle", "rect")
//       .attr("cx", m[0])
//       .attr("cy", m[1])
//       .attr("r", 1e-6)
//       .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
//       .style("stroke-opacity", 1)
//     .transition()
//       .duration(2000)
//       .ease(Math.sqrt)
//       .attr("r", 100)
//       .style("stroke-opacity", 1e-6)
//       .remove();
//
//       // particle();
//   d3.event.preventDefault();
// }


    $scope.login = function(user){
        UserFactory.login(user,function(){
            $location.url('/dashboard');
          })
    }

}])
