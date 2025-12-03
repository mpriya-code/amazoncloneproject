import AccountDropDownCard from "./AccountDropDownCard"
import "../css/account-dropdown.css"

export default  function NavAccountList(){
    return (
            <div className="nav-account">
                <div className="nav-account-option">
                    <span className="nav-account-top-text">
                    Hello, sign in
                    </span>
                    <span className="nav-account-bottom-text"> Account & Lists</span> 
                </div>
                 <button className="nav-arrow nav-arrow-button"></button>  
                {/*  Account Dropdown card  */}
                <AccountDropDownCard/>
            </div>
    )
}