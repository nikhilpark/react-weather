import React from "react";

export default class API extends React.Component {

        state = {
                loading:true,
                temp:null,
                temp_min:null,
                temp_max:null,
                wind_deg:null,
                wind_speed:null,
                weather:null,
                name:null,
                country:null,


        };

        async componentDidMount() {
                const api_key = "b41cca6b4f5592308fa8b579b37903ac"
                const city = "Kolkata"
                const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key

                const response = await fetch(url)
                const data = await response.json();
                this.setState({
                        temp: data.main.temp,
                        loading: false,
                        temp_min: data.main.temp_min,
                        temp_max:data.main.temp_max,
                        wind_deg: data.wind.deg,
                        wind_speed:data.wind.speed,
                        weather:data.weather[0].main,
                        name: data.name,
                        country:data.sys.country,
                        })
                console.log(data)
                console.log(data.sys.country)


        
        }

        render() {
                return (
                       <>
                       
                       {this.state.name}
                </>
                )
        }



  
}