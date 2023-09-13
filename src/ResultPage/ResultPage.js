import cloudIcon from "../assets/cloud-icon.webp"
import humidityIcon from "../assets/humidity-icon.png"
import pressureIcon from "../assets/pressure-icon.jpg"
import windIcon from "../assets/wind-icon.jpg"

const ResultPage = (props) => {
    const resultdata = props.apidata
    const F = resultdata.main.temp
    const temperature = Math.round((F - 32) * 5 / 9)
    return (
        <div className="rp-parent">
            <div className="rp-title">TODAY'S WEATHER </div>
            <div className="rp-weatherInfo">
                <div className="rp-cityname">{resultdata?.name}</div>
                <div>
                    <div className="rp-temp">{temperature}°C</div>
                    <div className="rp-desc">{resultdata.weather[0].main}</div>
                </div>
            </div>
            <div className="rpw-flexparent">
                <div className="rp-weatherDetails">
                    <div className="rp-clouds">Clouds</div>
                    <div>{resultdata.clouds.all}%</div>
                    <div>
                        <img className="rp-cloud" src={cloudIcon} alt=''></img>
                    </div>
                </div>
                <div className="rp-weathercells">
                    <div className="rp-humidity">Humidity</div>
                    <div>{resultdata.main.humidity}%</div>
                    <div>
                        <img className="rp-humidityicon" src={humidityIcon} alt=''></img>
                    </div>
                </div>
                <div className="rp-windspeed">
                    <div className="rp-wind">Wind</div>
                    <div>{resultdata.wind.speed}m/s</div>
                    <div>
                        <img className="rp-imgWind" src={windIcon} alt=''></img>
                    </div>
                </div>
                <div className="rp-windpressure">
                    <div className="rp-pressure">Pressure</div>
                    <div>{resultdata.main.pressure}Pa</div>
                    <div>
                        <img className="rp-imgPressure" src={pressureIcon} alt=''></img>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default ResultPage;