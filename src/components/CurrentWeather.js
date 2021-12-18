
import React from 'react';
import {Card, Image} from 'semantic-ui-react';
//import moment from 'moment'


function CurrentWeather({weatherData}){
    return (
        <div>
            <Card centered>
                <Card.Content>
                    <Image src={`/${weatherData.name}.jpg`} wrapped ui={true} size='medium' alt={weatherData.name} />
                    <Card.Header>{weatherData.name}</Card.Header>
                    <p>Current time {new Date((weatherData.dt+ weatherData.timezone)*1000).toLocaleTimeString('pl-PL') }</p>
                    <p>Sunrise time: {new Date((weatherData.sys.sunrise + weatherData.timezone) * 1000).toLocaleTimeString('pl-PL')}</p>
                    <p>Sunset time: {new Date((weatherData.sys.sunset + weatherData.timezone) * 1000).toLocaleTimeString('pl-PL')}</p>
                    </Card.Content>
                    <hr/>
                    <Card.Content>
                    <img src={`${process.env.REACT_APP_WEATHER_ICON_URL}${weatherData.weather[0].icon}@2x.png`} alt=''/>
                    <p>Temperature: {weatherData.main.temp}&deg;C</p>
                    <p>{weatherData.weather[0].desc}</p>
                    <p>wind force:{weatherData.wind.speed}km/h</p>
                    <p>wind direction: {weatherData.wind.deg}</p>
                </Card.Content>
            </Card>
        </div>
    )
}

export default CurrentWeather