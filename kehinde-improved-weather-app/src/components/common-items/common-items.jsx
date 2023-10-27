import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './common-items.css';

axios.get('https://api.weatherbit.io/v2.0/current', {
    params: {
        city: 'New York,NY',
        key: 'YOUR_API_KEY'
    }
})
    .then(response => {
        const data = response.data;
        const temperature = data.data[0].temp;
        const sunrise = data.data[0].sunrise;
        const sunset = data.data[0].sunset;
        
    })
    .catch(error => {
        console.log(error);
    });

function Sunrise() {
    return (
        <div>
            <h2>Sunrise Time: {response.sunrise}</h2>
        </div>
    )
}
function Temperature() {
    return (
        <div>
            <h2>Temperature: {response.temperature}</h2>
        </div>
    )
}
function Sunset() {
    return (
        <div>
            <h2>Sunset Time: {response.sunset}</h2>
        </div>
    )
}
