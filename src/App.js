import './App.css';
import React from 'react'
import CurrentWeather from './components/CurrentWeather';
import WeeklyWeather from './components/WeeklyWeather';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: {},
      weeklyWeather: {}
    };
  }
  render(){
    return (
    <div className="App">
      <select class="ui dropdown select" onChange={
        (e)=> {
          axios.get(`${process.env.REACT_APP_WEATHER_API_URL}/weather?q=${e.target.value}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
          .then(response=> {
            this.setState({currentWeather: response.data})
            axios.get(`${process.env.REACT_APP_WEATHER_API_URL}/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(res=>{
              this.setState({weeklyWeather: res.data})
              
          })
        })
          
        }
        }>
        <option disabled selected>Choose your city</option>
        <option value="poznan">Poznań</option>
        <option value="london">London</option>
        <option value="havana">Havana</option>
      </select>
      {(typeof this.state.currentWeather.main != 'undefined') ? 
        (<CurrentWeather weatherData={this.state.currentWeather}/>) : 
        (<div></div>)}

      {(typeof this.state.weeklyWeather.daily != 'undefined') ?
        (<WeeklyWeather weatherData={this.state.weeklyWeather}/>) : 
        (<div></div>)}

    </div>
  );}

  
}

export default App;
