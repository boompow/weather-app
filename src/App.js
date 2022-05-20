import './App.css';
import Top from './Top';
import Bottom from './Bottom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Error from './Error';

function App() {
  const [cityName, setCityName ] = useState('London');
  const [temp, setTemp ] = useState('');
  const [cloud, setCloud] = useState('');
  const [description, setDescription] = useState('');
  const [err, setErr ] = useState(false);
  const [country, setCountry ] = useState('')
  const [humidity, setHumidity ] = useState('');
  const [feels, SetFeels ] = useState('');
  const [wind, setWind] = useState('');
  const [networkErr, setNetworkErr] = useState(false);

  const API = '8e3eba406205f3e0c657b1340a17f41c';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}`;
 
  useEffect(()=>{
    const callData = async () =>{
      try{
        const response = await axios.get(url);
        const data = await response.data;
        const CountryCode = await data.sys.country;
        const countryCodeResponse = await axios.get(`https://restcountries.com/v2/alpha/${CountryCode}`);
        const countryName = await countryCodeResponse.data.name;
        setCountry(countryName.length > 12? `${countryName.slice(0,13)}...`: countryName);
        setErr(false);
        setTemp(Number(data.main.temp) -270); // original temp. is in Kelvins
        setCloud(data.weather[0].main);
        setDescription(data.weather[0].description);
        SetFeels(data.main.feels_like -270);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        
      }catch(err){
        console.log(err.message);
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        if(err.response.status === 404) setErr(true)
        if(err.message === 'Network Error') setNetworkErr(true);
      }
    }

    callData();
  }, [url, cityName])


  return (
    <div className="App">
      <Error
        error = {networkErr}
        />
      <Top 
        err = {err}
        country = {country}
        city = {cityName}
        setCity = {setCityName}
        temp = {temp}
        cloud = {cloud}
        description = {description}
      />
      <Bottom
        feels = {feels}
        humidity = {humidity}
        wind = {wind}
        err = {err}
      />
    </div>
  );
}

export default App;
