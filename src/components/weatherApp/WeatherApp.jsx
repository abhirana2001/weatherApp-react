import React, { useState } from 'react'
import "./WeatherApp.css"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clouds from "../assests/cloud.png"
import clear from "../assests/clear.png"
import drizzle from "../assests/drizzle.png"
import rain from "../assests/rain.png"
import wind from "../assests/wind.png"
import snow from "../assests/snow.png"
import humidity from "../assests/humidity.png"
function WeatherApp() {
    const [weathImg,setWeathImg] = useState(clear)
    
    const search =async()=>{
        
        let element = document.getElementsByClassName("inputCity")
        if(element[0].value ===""){
           return console.log("fail")
        }
        else{

        }
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
      let res = await fetch(url)
      let data = await res.json()
      let temp = document.getElementsByClassName("weather-temp")[0].innerHTML = Math.floor(data.main.temp) +"°c";
      let cityName = document.getElementsByClassName("weather-location")[0].innerHTML = data.name
      let humidityPersentage = document.getElementsByClassName("humidity-persentage")[0].innerHTML = data.main.humidity +"%"
      let weather = document.getElementsByClassName("text")[0].innerHTML = data.weather[0].main
      let windspeed = document.getElementsByClassName("humidity-persentage-right")[0].innerHTML = data.wind.speed +" "+"km/h"
      let weth = data.weather[0].icon
      if(weth ==="01d"||weth ==="01n"){
       setWeathImg(clear)

      }
      else if(weth ==="02d" ||weth ==="02n"  ){
        setWeathImg(clouds)
 
       }
       else if(weth ==="13d" || weth ==="13n"){
        setWeathImg(snow)
 
       }
       else if(weth ==="03d" || weth ==="03d"||weth ==="04d" ||weth ==="04n"){
        setWeathImg(drizzle)
 
       }
       else if(weth ==="09d" || weth ==="09n" || weth ==="10d" || weth ==="10n"){
        setWeathImg(rain)
 
       }
       else{
        setWeathImg(clear)
       }
}

       
    let api_key="a05e33d0ec0f92fdf817de41eb37d432" 

    return (
        <div className='container'>
              <div className="top-bar">
             <input className='inputCity' onKeyDown={(e)=> e.key ==="Enter" ? search():"" } type="text" placeholder="search..."/>
             <div className="searchIcon" onClick={()=>search()}><FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={{color: "#ffffff",}} /></div>
            
        </div>
        <div className="weather-img">
                <img src={clouds} alt="" />
             </div>
             <div className="weather-temp">24 °c</div>
             <div className="weather-location">london</div>
             <div className="data-container">
                <div className="elements-left">
                    <img  src={weathImg} alt="" />
                    <div className="data-left">
                        <div className="humidity-persentage">64%</div>
                        <div className="text">humidity</div>
                    </div>
                </div>
                <div className="elements-right">
                    <img src={wind} alt="" />
                    <div className="data-right">
                        <div className="humidity-persentage-right">5 km/h</div>
                        <div className="text">wind speed</div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default WeatherApp
