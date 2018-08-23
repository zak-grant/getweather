const request = require("request");

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=O6zILA52TDGWHgdrKSXJSHrnQgZkeiL7&location=${encodedAddress}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect to Google servers");
      } else if (body.status === "ZERO_RESULTS") {
        callback("Unable to find that address");
      } else if (body.status === "OK") {
        callback(undefined, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;
