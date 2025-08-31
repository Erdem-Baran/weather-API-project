async function weather(input){
    try{
    const weather_url = await fetch("https://goweather.xyz/weather/" + input);
    if(!weather_url.ok)
        throw new Error ("Geçerli bir ülke giriniz.");
    const weather_data  = await weather_url.json();
    console.log(weather_data)
    showWeather(weather_data)
    }
     catch(err){
        err_fn(err.message)
    }
}
async function country(input){
    try{
    const country_url = await fetch("https://restcountries.com/v3.1/name/" + input);
    if(!country_url.ok)
        throw new Error("Geçerli bir ülke giriniz.");
    const country_data  = await country_url.json();
    console.log(country_data)
    showCountry(country_data[0])
    }
    catch(err){
        err_fn(err.message)
    }
}
// weather()
// country()
