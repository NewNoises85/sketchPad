$(document).ready(function() {



function createGraph() {
    for (var x = 0; x < 16; x++) {
        for (var y = 0; y < 16; y++) {
            $("<div>").addClass("unit").appendTo(".container");
        }
    }
};

createGraph();

$('.container').on('mouseenter', '.unit', function () {
    $(this).css('background-color', 'black');
});

$('#reset, #classicSketch').on('click', function () {
  $('.unit').css('background-color', 'lightgrey');
  $('.container').on('mouseenter', '.unit', function () {
      $(this).css('background-color', 'black');
  });
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

$('#colorSketch').on('click', function() {
  $('.unit').css('background-color', 'lightgrey');
  $('.container').on('mouseenter', '.unit', function (){
    $(this).css('background-color', getRandomColor);
  });
});

$('#adjustSize').on('click', function promptMe(){
    $(".container").empty();
    var gridSize = prompt("Please provide a Grid Size");
    $(function() {
        for (var x = 0; x < gridSize; x++) {
            for (var y = 0; y < gridSize; y++) {
                $("<div>").addClass("unit").appendTo(".container");
                 }
              }
                });
              var pixelSize = 500 / gridSize;
              $('.unit').css('height', pixelSize);
              $('.unit').css('width', pixelSize);

});
$('#adjustSize').on('click', function () {
  $('.unit').css('background-color', 'lightgrey');
  $('.container').on('mouseenter', '.unit', function () {
      $(this).css('background-color', 'black');

  });
});

});
