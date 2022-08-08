const swapi = require('./script2');
const fetch = require('node-fetch');

it('calls swapi to get People', () => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then((data) => {
        expect(data.count).toEqual(87);
    });
});

it('calls swapi to get People with Promise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then((data) => {
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    });
});
