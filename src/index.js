import React from 'react';
import ReactDOM from 'react-dom';
import { cars } from './cars';

const formatCar = car => {
    const {
        model,
        year,
        maker,
        transmission,
        price
    } = car;

    return `${year} ${maker} ${model} ${transmission}: $${price}`;
}

const generateReport = (cars, maxPrice) =>
    cars
        .filter(car => car.price > maxPrice)
        .map(formatCar)
        .join('\n');

const message = generateReport(cars, 20000);
document.getElementById('message-element').textContent = message;

const App = () => (
    <div> Hello!!!</div>
);

ReactDOM.render(<App />, document.getElementById('app'));