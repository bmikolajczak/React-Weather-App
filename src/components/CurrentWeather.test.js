import React from 'react';
import { render, screen,  } from '@testing-library/react';
import CurrentWeather from './CurrentWeather';


const mockData={
        name: 'city',
        dt: 100000,
        timezone: 0,
        main: {
            temp: 21,
        },
        sys:{
            sunrise: 10000,
            sunset: 10001,
        },
        weather: [{
            icon: "3dn",
            desc: "example"
        }],
        wind:{
            deg: 300,
            speed: 20,
        }
    }


test('renders header of the app', () => {
    
    render(<CurrentWeather weatherData={mockData} />);
    const headerElement = screen.getByText(mockData.name);
    expect(headerElement).toBeInTheDocument();
  });

test('renders img correctly', ()=>{
    render(<CurrentWeather weatherData={mockData}/>);
    const cityImage= screen.getByAltText(mockData.name);
    expect(cityImage).toBeInTheDocument();
});

test('Current weather renders correctly',()=>{
    render(<CurrentWeather weatherData={mockData}/>);
    const temperature= screen.getByText(`Temperature: ${mockData.main.temp}°C`);
    const windDirection=screen.getByText(`wind direction: ${mockData.wind.deg}`)
    expect(temperature).toBeInTheDocument();
    expect(windDirection).toBeInTheDocument();
})
  



