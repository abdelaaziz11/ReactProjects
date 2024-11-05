import React from 'react';

let cars = [
    {
        "brand": "Mercedes",
        "model": "AMG",
        "body": "van",
        "color": "red",
        "price": "80000$",
        "year": 2019
    },
    {
        "brand": "BMW",
        "model": "M760i",
        "body": "4WD",
        "color": "black",
        "price": "50000$",
        "year": 2020
    },
    {
        "brand": "Toyota",
        "model": "RAV4",
        "body": "crossover",
        "color": "gray",
        "price": "15000$",
        "year": 2015
    },
    {
        "brand": "Hyundai",
        "model": "Grand i10 Nios",
        "body": "hatchback",
        "color": "yellow",
        "price": "30000$",
        "year": 2018
    },
    {
        "brand": "Dacia",
        "model": "Duster",
        "body": "sedan",
        "color": "blue",
        "price": "25000$",
        "year": 2010
    }
]

const Car = ({brand, model, body, color, price, year}) => {
        return (
            <>
                <tr>
                    <td>{brand}</td>
                    <td>{model}</td>
                    <td>{body}</td>
                    <td>{color}</td>
                    <td>{price}</td>
                    <td>{year}</td>
                </tr>
            </>
        )
    }

const CarList = () => {

    const displayCars = () => {
        return cars.map((car, key) => {
                const {brand, model, body, color, price, year} = car;
                return <Car brand={brand} year={year} body={body} color={color} model={model} price={price} key={key}/>
            })
    }

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Body</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {displayCars()}
                </tbody>
            </table>
        </>
    )
}

export default CarList;