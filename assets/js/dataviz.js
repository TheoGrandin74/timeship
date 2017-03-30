var launches;
var option = document.querySelector('select');
console.log(option);

function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'tmp/launches.JSON', false); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

function init() {
  loadJSON(function(response) {
    // Parse JSON string into object
    launches = JSON.parse(response);
    //    document.querySelector('body').innerHTML = launches.launches[0].isostart.slice(0,4);
  });
}


function canvas(date){
  var dataRUS = [];
  var dataUSA = [];
  var j = 0;
  for(var i = 0; i < 5; i++){
    var countRUS = 0;
    var countUSA = 0;
    while(j < 56 && parseInt(launches.launches[j].isostart.slice(0,4)) <= date+i){
      if(parseInt(launches.launches[j].isostart.slice(0,4)) == date+i){
        if(launches.launches[j].rocket.agencies[0].countryCode == "RUS")
          countRUS++;
        if(launches.launches[j].rocket.agencies[0].countryCode == "USA")
          countUSA++;
      }
      j++
    }
    dataRUS.push(countRUS);
    dataUSA.push(countUSA);
  }
  console.log(dataRUS);
  console.log(dataUSA);
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [date, date+1, date+2, date+3, date+4],
      defaultFontColor: '#ff0000',
      datasets: [
        {
          label: 'Launches by country',
          data: dataUSA,
          backgroundColor: [
            '#2ECC71'
          ],
          borderColor: [
            '#2ECC71'
          ],
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#fff',
          borderWidth: 1,
          fill: false
        },
        {
          data: dataRUS,
          backgroundColor: [
            '#EF5B59'
          ],
          borderColor: [
            '#EF5B59'
          ],
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#fff',
          borderWidth: 1,
          fill: false
        }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            suggestedMax: 6
          }
        }]
      },
      responsive:true,
      fontColor: '#fff',
      legend: {
        display: false,
      }
    }
  });

}

option.addEventListener('change', () =>{
  canvas(parseInt(option.value));
});

init();
canvas(1961);