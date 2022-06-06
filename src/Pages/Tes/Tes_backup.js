import React, { useEffect, useState } from 'react';
// import Axios from 'axios';

import './style.css';

export const Tes = () => {

    const [Data, setData] = useState([])

    useEffect(() => {

        const axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/todos',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                // console.log(response)
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const handleMap = (data) => {
        return data.map((value) => {
            return <div>
                <h5>
                    title : {value.title}
                </h5>
            </div>
        })
    }
}
