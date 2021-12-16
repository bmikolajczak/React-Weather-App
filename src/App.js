import './App.css';
import Example from './components/CurrentWeather';
import WeeklyWeather from './components/WeeklyWeather';

// const cities=[
//   { key: 'pz', value: 'poznan', text: 'Poznań' },
//   { key: 'ld', value: 'london', text: 'London' },
//   { key: 'hav', value: 'havana', text: 'Havana' },
// ]


function App() {
  return (
    <div className="App">
      <select class="ui dropdown select" onChange={(e)=> console.log(e.target.value)}>
        <option disabled selected>Choose your city</option>
        <option value="poznan">Poznań</option>
        <option value="london">London</option>
        <option value="havana">Havana</option>
      </select>
      <Example/>
      <WeeklyWeather/>
    </div>
  );
}

export default App;
