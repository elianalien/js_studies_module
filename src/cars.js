const carJSON = `
[
    {
        "model": "CRV",
        "year": "2000",
        "maker": "Honda",
        "transmission": "A/T",
        "price": 8000
    },
    {
        "model": "Rio",
        "year": "2014",
        "maker": "KIA",
        "transmission": "A/T",
        "price": 14000
    },
    {
        "model": "Innova",
        "year": "2018",
        "maker": "Toyota",
        "transmission": "M/T",
        "price": 30000
    },
    {
        "model": "Pajero",
        "year": "2017",
        "maker": "Mitsubishi",
        "transmission": "A/T",
        "price": 40000
    },
    {
        "model": "Clubman",
        "year": "2019",
        "maker": "Mini",
        "transmission": "A/T",
        "price" : 70000
    }
]`;

// parse the string into JSON array object
const cars = JSON.parse(carJSON);
console.log(cars);

export { cars }