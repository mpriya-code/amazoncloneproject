import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CountryDropDownCard() {
    return(
            <div className="country-dropdown-card">
                <ul>
                    <li>
                        <div className="country-text">
                            <i className="fa fa-circle-o country-radio"></i> 
                            <span>English </span>
                            -
                            <span> EN</span>
                        </div>
                    </li>
                    <div className="nav-divider"></div> 
                    <li>
                        <div className="country-text">
                            <i className="fa fa-circle-o country-radio"></i> 
                            <span>Hindi </span>
                            -
                            <span> HI</span>
                        </div>
                    </li>
                    <li>
                        <div className="country-text">
                            <i className="fa fa-circle-o country-radio"></i> 
                            <span>Tamil </span>
                            -
                            <span> TA</span>
                        </div>
                    </li>
                    <li>
                        <div className="country-text">
                            <i className="fa fa-circle-o country-radio"></i> 
                            <span>Telugu </span>
                            -
                            <span> TE</span>
                        </div>
                    </li>
                    <li>
                        <div className="country-text">
                            <i className="fa fa-circle-o country-radio"></i> 
                            <span>Kanada </span>
                            -
                            <span> KN</span>
                        </div>
                    </li>          
                </ul>
                <div className="country-text">
                    <a href="#">
                    <div className="country-link">Learn More</div>
                    </a>         
                </div>
                <div className="nav-divider"></div>
                <div className="country-bottom-text">
                    <div className="flag">
                    <img src='./images/indianflag.png'  alt="Indian Flag"/> 
                    </div>
                    <span> You are shopping on Amazon.in</span>
                </div>        
                <div className="country-bottom-text">
                    <a href="#">
                    <div className="country-link"> Change country/region</div>                   
                    </a>   
                </div>
            </div> 
    )
}
