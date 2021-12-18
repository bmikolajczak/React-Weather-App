import './App.css';
import React from 'react'
import CurrentWeather from './components/CurrentWeather';
import WeeklyWeather from './components/WeeklyWeather';
import axios from 'axios';
import {Header} from 'semantic-ui-react'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: {},
      weeklyWeather: {}
    };
  }

  handleChange(e){
    //first call to get current weather and basic information for a second call
    axios.get(`${process.env.REACT_APP_WEATHER_API_URL}/weather?q=${e.target.value}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
          .then(response=> {
            
            this.setState({currentWeather: response.data})
            //second call for getting weekly weather using latitude and longitude info from first call
            axios.get(`${process.env.REACT_APP_WEATHER_API_URL}/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then(res=>{
              this.setState({weeklyWeather: res.data}) 
          })
        })
  }
  render(){
    return (
    <div className="App">
      <Header as='h1'> React Weather App </Header>
      <select className="ui dropdown select" onChange={
        (e)=> {this.handleChange(e)}}>
        <option disabled selected>Choose your city</option>
        <option value="poznan">Poznań</option>
        <option value="london">London</option>
        <option value="havana">Havana</option>
      </select>
      
      {/*Checking whether state is empty or not. If so, React will only render above elems and empty divs insted of 
      components without throwing errors*/}

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
