/**
 * @class WeatherAPI
 */
export default class WeatherAPI {
  API = {
    url: 'api.openweathermap.org/data/2.5/weather?',
  };

  constructor(
    APIKey = '7a4a4fbaf6edfb92fdb16fd769b6d738', // default key
    loc = { lat: 0, lon: 0 },
  ) {
    this.API.key = APIKey;
    this.setLocation(loc);
  }

  setLocation(loc) {
    this.API.lat = loc.lat;
    this.API.lon = loc.lon;
  }

  async getWeather() {
    this.generateAPICall();
    let apiCall;
    let weatherJSON = '';
    try {
      apiCall = await fetch(`${this.APIcall}`);
      weatherJSON = await apiCall.json();
    } catch (error) {
      // error handling
    }
    return weatherJSON;
  }

  generateAPICall() {
    this.APIcall = `${this.API.url}lat=${this.API.lat}&lon=${this.API.lon}&appid=${this.API.key}`;
  }
}
