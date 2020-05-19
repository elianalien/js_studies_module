import React from 'react';
import ReactDOM from 'react-dom';
import { cars, generateReport, getCars } from './cars';

document.getElementById('message-element').textContent = 'Loading...';

getCars().then(
    cars => {
        const message = generateReport(cars, 10000);
        document.getElementById('message-element').textContent = message;
    }
)

// const App = () => (
//     <div> Hello!!!</div>
// );

// ReactDOM.render(<App />, document.getElementById('app'));