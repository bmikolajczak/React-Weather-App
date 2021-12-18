import React from 'react';
import {Card} from 'semantic-ui-react';

const WeeklyWeather = ({weatherData})=>{
    //reducing array of days to 5 
    const slicedArr= weatherData.daily.slice(1,6)
    return(
        <Card.Group>
        {slicedArr.map(day=>
           <Card key={day.dt}>
                <Card.Content>
                    <Card.Header>{new Date(day.dt*1000).toLocaleDateString('en-GB', { weekday: 'long' })} </Card.Header>   
                    <img src={`${process.env.REACT_APP_WEATHER_ICON_URL}${day.weather[0].icon}@2x.png`} alt={day.weather[0].icon}/>
                    <p>{day.temp.day}&deg;C</p>
                    <p>{day.weather[0].description}</p>
                </Card.Content>
            </Card> 
        )}
            
        </Card.Group>
    )
}

export default WeeklyWeather;