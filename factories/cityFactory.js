module.exports = (city) => {
    return new City({
        uid: city._id,
        name: city.name,
        img: city.img,
        prices: city.prices,
        dateCreatedAt: new Date(),
        country: city.country,
        population: city.population,
        lat: city.lat,
        lon: city.lon,
    });
};