const googleSearch = require("./script");

const dbMock = ['dog.com','dogdog.com','carsales.com','rentacar.com',];


describe("googleSearch",()=>{

    it ('This is a test',()=>{
        expect(googleSearch('dog',dbMock)).toEqual(['dog.com','dogdog.com']);
    });

    it('Test it works for null and undeifined input',()=>{
        expect(googleSearch(null,dbMock)).toEqual([]);
        expect(googleSearch(undefined,dbMock)).toEqual([]);
    });

    it('Does not return more than 3 outputs',()=>{
        expect(googleSearch('.com',dbMock).length).toEqual(3);
    });

});