import axios from 'axios';
import React from 'react';
import { myTaskRoute } from '../../Utilities/APIRoutes';

const MyTask = () => {
    const data = axios.get(myTaskRoute);
    console.log(data);
    return (
        <div>
            mytask
        </div>
    );
};

export default MyTask;