import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SunRise() {
    const [sunrise, setSunrise] = useState('');

    useEffect(() => {
        const fetchSunrise = async () => {
            const response = await axios.get('https://api.weatherbit.io/v2.0/current', {
                params: {
                    city: 'New York,NY',
                    key: 'YOUR_API_KEY'
                }
            });
            setSunrise(response.data.data[0].sunrise);
        };
        fetchSunrise();
    }, []);

    return (
        <div>
            <h2>Sunrise Time: {sunrise}</h2>
        </div>
    );
}

export default SunRise;