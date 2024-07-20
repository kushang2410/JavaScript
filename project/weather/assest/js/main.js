$(document).ready(function () {
  $.ajax({
    url: "https://api.countrystatecity.in/v1/countries/IN/states",
    headers: {
      "X-CSCAPI-KEY": "V0ozTFhtd3BFdUpmNlR2Tnc5R0ZPcGlwWXJBQjlaWFl5NU5NN0tiMQ=="
    },
    method: "GET",
    success: function (response) {
      response.forEach(function (state) {
        $("#stateSelect").append(`<option value="${state.iso2}">${state.name}</option>`);
      });
    },
    error: function (error) {
      console.error("Error fetching weather states:", error);
    }
  });
});

$("#stateSelect").change(function () {
  var selectedState = $(this).val();
  if (selectedState !== "") {
    $("#citySelect").prop("disabled", false).html('<option value="" selected>Select City</option>');

    $.ajax({
      url: `https://api.countrystatecity.in/v1/countries/IN/states/${selectedState}/cities`,
      headers: {
        "X-CSCAPI-KEY": "V0ozTFhtd3BFdUpmNlR2Tnc5R0ZPcGlwWXJBQjlaWFl5NU5NN0tiMQ=="
      },
      method: "GET",
      success: function (response) {
        response.forEach(function (city) {
          $("#citySelect").append(`<option value="${city.name}">${city.name}</option>`);
        });
      },
      error: function (error) {
        console.error("Error fetching weather cities:", error);
      }
    });
    // });
  } else {
    $("#citySelect").prop("disabled", true).html('<option value="" selected>Select City</option>');
  }
});

$("#citySelect").change(function () {
  var selectedCity = $(this).val();
  if (selectedCity !== "") {
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},IN&appid=21ab976edb5097a8941c0cc2451c3274&units=metric`,
      method: "GET",
      success: function (response) {
        var weatherInfo = `
                  <h2 class="text-center mt-5 fw-bold text-uppercase font-monospace">${response.name}, ${response.sys.country}</h2>
  <p class="text-center mt-4">Temperature:</p>
  <img src="assest/images/cloud.png" height="120px" width="120px" alt="" class="d-flex align-items-center m-auto">
  <p class="text-center">${response.main.temp}°C</p>
  <p class="text-center">Weather: ${response.weather[0].main}</p>
`;
        $("#weatherInfo").html(weatherInfo);
      },
      error: function (error) {
        console.error("Error fetching weather data:", error);
      }
    });
  }
});