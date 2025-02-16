const { getRandomWeatherReport, getRandomNumber, WeatherConditions } = require("../../utils/weatherGenerator");

describe("Tests for the weather generator", () => {
    test("Tests that the getRandomWeatherReport generates a proper weather report", () => {
        const randomReport = getRandomWeatherReport();

        expect(typeof randomReport.temperature).toBe('number');
        expect(Object.values(WeatherConditions)).toContain(randomReport.weatherCondition)

    });

    test("Tests that the random number generator generates a number in the proper bounds", () => {
        const lowerBound = 1;
        const upperBound = 5;
        const randomNumber = getRandomNumber(lowerBound, upperBound);
        expect(randomNumber).toBeGreaterThanOrEqual(lowerBound);
        expect(randomNumber).toBeLessThanOrEqual(upperBound);
    });
});