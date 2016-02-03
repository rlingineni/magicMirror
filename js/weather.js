// Docs at http://simpleweatherjs.com

function getWeather()
{
    
 $.simpleWeather({
    location: 'Dallas, TX',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>' ;
      html += '<p>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</p>';

        
      $("#weather").html(html);
   
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });


}