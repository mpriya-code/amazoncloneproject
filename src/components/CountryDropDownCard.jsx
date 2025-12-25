import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleDot } from "@fortawesome/free-solid-svg-icons";

export default function CountryDropDownCard() {
    return(
            <div className="country-dropdown-card">
                <ul>
                    <li>
                        <label class="country-option">
                            <input type="radio" name="country" checked/>
                            <span className="radio"></span>
                            <span>English - EN</span>                           
                        </label>
                    </li>
                    <div className="nav-divider"></div> 
                    <li>                     
                         <label class="country-option">
                            <input type="radio" name="country"/>
                            <span className="radio"></span>
                            <span>Hindi - HI</span>
                        </label>
                    </li>
                    <li>                       
                         <label class="country-option">
                            <input type="radio" name="country"/>
                            <span className="radio"></span>
                            <span>Tamil  - TA</span>                             
                        </label>
                    </li>
                    <li>
                         <label class="country-option">
                            <input type="radio" name="country"/>
                            <span className="radio"></span>
                            <span>Telugu - TE</span>                            
                        </label>
                    </li>
                    <li>
                         <label class="country-option">
                            <input type="radio" name="country"/>
                            <span className="radio"></span>
                            <span>Kanada - KN</span>
                        </label>
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
