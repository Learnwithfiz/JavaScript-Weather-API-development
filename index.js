//key = 9871af446e0aaec458ca1990c497b103 
 var userInput = document.getElementById("userInput");
 userInput.addEventListener("input",function(){
    $url = "https://api.openweathermap.org/data/2.5/weather?q="+userInput.value+"&appid=9871af446e0aaec458ca1990c497b103";
    fetch($url)
    .then(function(response){
      return response.json();
    }).then(function(data){
        var result = data.main.temp -273.15;
        document.getElementById("cityname").innerHTML = userInput.value
        document.getElementById("temp").innerHTML =result.toFixed(2);
        document.getElementById("speed").innerHTML = data.wind.speed ;
        document.getElementById("Description").innerHTML =data.weather[0].description ;
        document.getElementById("icon").src ="https://openweathermap.org/img/w/"+ data.weather[0].icon+".png"
    })
 })
