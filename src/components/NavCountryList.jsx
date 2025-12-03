import CountryDropDownCard from "./CountryDropDownCard"
import "../css/country-dropdown.css"

export default  function NavCountryList(){
    return (
        <div className="nav-country-list">
            <div className="nav-country-option">
                <div className="flag">
                    <img src='./images/indianflag.png'  alt="Indian Flag"/> 
                </div>
                <label id="country-label" htmlFor="country-select">EN</label>                 
            </div>
             <span className="caret"></span> 

             {/*   Country Dropdown Card   */}
             <CountryDropDownCard/>
        </div>
    )
}