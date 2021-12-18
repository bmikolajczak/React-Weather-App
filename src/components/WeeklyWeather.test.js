import React from 'react';
import { render, screen,  } from '@testing-library/react';
import WeeklyWeather from './WeeklyWeather';

const mockData = {
    daily:[
        {},
        {
            dt: 10000,
            temp:{
                day: 25,
            },
            weather:[
                {
                    icon: "13d",
                    description: "cloudy"
                }
            ]
        }
    ]
}

test('Renders name of the day correctly',()=>{
    render(<WeeklyWeather weatherData={mockData}/>);
    const nameOfDay= screen.getByText(/^(Sun|Mon|(T(ues|hurs))|Fri)(day|\.)?$|Wed(\.|nesday)?$|Sat(\.|urday)?$|T((ue?)|(hu?r?))\.?$/i);
    expect(nameOfDay).toBeInTheDocument();
});

test('renders weather icon correctly', ()=>{
    render(<WeeklyWeather weatherData={mockData}/>);
    const weatherIcon= screen.getByAltText(mockData.daily[1].weather[0].icon);
    expect(weatherIcon).toBeInTheDocument();
});

test('renders weather description correctly', () => {
    
    render(<WeeklyWeather weatherData={mockData} />);
    const description = screen.getByText(mockData.daily[1].weather[0].description);
    expect(description).toBeInTheDocument();
  });