import React, { useEffect, useState } from 'react'

const Apiweather = () =>{

    const[location,setLocation] = useState({
        latitude: 0,
        longitude: 0 
    })
    useEffect (()=> {
        navigator.geolocation.getCurrentPosition(function(position){
              setLocation({
                 latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                 })
        })
    },[])

    const typeUnitsImperial ="imperial"
    const typeUnitsMetric ="metric"  

    const [data, setData] = useState({
        name:"",
        country:"",
        temperature:0,
        icon:"",
        feelike:"",
        humidity:""

    })
    

    useEffect(()=>{
        const fetchData = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=0397f7af6c748f2a6c99ccaf7d6a2c95&units=${typeUnitsMetric}`
            const data = await fetch(url).then(res => res.json())
            setData({
                name:data.name,
                country:data.sys.country,
                temperature:data.main.temp,
                icon:data.weather[0].icon,
                feelike:data.main.feels_like,
                humidity:data.main.humidity

            })
            
        }
        fetchData()   
    },[location.latitude, location.longitude])

    const urlIcon = `https://openweathermap.org/img/wn/${data.icon}@2x.png`

    return(
        <div>
            
             <p className="dataCountry" className="style">Your city is: <strong>{data.name}</strong>  in the best country <strong>{data.country}</strong> </p>
             <p className="dataClimate" className="style">The temperature of this city is: <strong>{data.temperature}</strong>  <br/> Feels like is <strong> {data.feelike} </strong>  <br/> Humidity is <strong>{data.humidity}</strong> </p>
             <img src={urlIcon}/>
                
        </div>
    )
}


export default Apiweather