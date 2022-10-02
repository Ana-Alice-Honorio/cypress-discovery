
var avengers = ['Tony Stark' ,'Bruce Banner', 'Natasha Romanoff', 'Steve Rogers', 'Scot Lang' ];

function avengersList() {

    var ul = document.getElementById("avengers");
    ul.innerHTML = '';

    avengers.forEach(function(oneAvenger) {
    var li = document.createElement('li');
    var text = document.createTextNode(oneAvenger);
    li.appendChild(text);
    ul.appendChild(li);
  })
  }