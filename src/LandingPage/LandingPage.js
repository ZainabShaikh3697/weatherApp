import weatherIcon from '../weatherImage.png'
const LandingPage = () => {
    return (
        <div>
            <img className="weather-image" src={weatherIcon}></img>
            <div className='text'>What's The Weather Today?</div>
        </div>
    )
}
export default LandingPage;