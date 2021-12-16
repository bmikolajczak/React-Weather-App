
import React from 'react';
import {Card, Image } from 'semantic-ui-react';


function RenderExample(){
    return (
        <div>Hello There
            <p>i am an example code</p>
        
        <Card>
            <Card.Content>
                <Image src="https://www.polska.travel/images/pl-PL/glowne-miasta/poznan/poznan_ratusz_2_1170.jpg" floated='right'
                size='small'
                    />
            <Card.Header>Poznań</Card.Header>
            <p>Current time {5*5/2}</p>
            </Card.Content>
            <Card.Content extra>
            <p>Temperature: </p>
            <p>weather icon here</p>
            <p>weateher desc here</p>
            <p>wind force here</p>
            <p>wind dir here</p>
            </Card.Content>
            
        </Card>
        
        </div>
    )
}

export default RenderExample