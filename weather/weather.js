const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/b3f0e6c8c62b6b5668a06c69a4f52c60/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
}

module.exports.getWeather = getWeather;
