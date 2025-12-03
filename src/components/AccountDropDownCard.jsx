export default function AccountDropDownCard(){
    return(
        <div className="nav-account-dropdown-card">
            <div className="nav-accounts">
                 <div className="nav-account-profile">
                <div className="nav-select-profile"> 
                    Who is shopping? Select a profile.
                </div>
                <div>
                    <button className="nav-manage-profile">
                        Manage Profiles
                    </button>
                </div>
            </div>
            </div>
           
             {/* wish list div  */}
            <div className="nav-wish-list">
                <div className="nav-account-title">
                    Your Lists
                </div>
                <ul>
                    <li>
                        <a className="nav-account-link">
                            <span className="nav-account-text">Create a Wish List</span>
                        </a>
                    </li>
                    <li>
                        <a className="nav-account-link">
                            <span className="nav-account-text">Wish from Any Website</span>
                        </a>
                    </li>
                    <li>
                        <a className="nav-account-link">
                            <span className="nav-account-text">Baby Wishlist</span>
                        </a>
                    </li>
                    <li>
                        <a className="nav-account-link">
                            <span className="nav-account-text">Discover Your Style</span>
                        </a>
                    </li>
                    <li>
                        <a className="nav-account-link">
                            <span className="nav-account-text">Explore Showroom</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* account list div  */}
            <div className="nav-account-list">
                <div className="nav-account-title">
                    Your Account
                </div>
                 <ul>
                     <li>
                        <a className="nav-account-link">
                            <span className="nav-account-text">Switch Accounts</span>
                        </a>
                    </li>
                     <li>
                        <a className="nav-account-link">
                            <span className="nav-account-text">Sign Out</span>
                        </a>
                    </li>
                <div className="nav-divider"></div>
                <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Your Account</span>
                    </a>
                </li>
                 <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Your Orders</span>
                    </a>
                </li>
                 <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Your Wish List</span>
                    </a>
                </li>
                <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Keep shopping for</span>
                    </a>
                </li>
                <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Your Recommendations</span>
                    </a>
                </li>
                 <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Recalls and Product Safety Alerts</span>
                    </a>
                </li>
                 <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Your Prime Membership</span>
                    </a>
                </li>
                 <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Your Prime Video</span>
                    </a>
                </li>
                 <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Your Subscribe & Save Items</span>
                    </a>
                </li>
                 <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Memberships & Subscriptions</span>
                    </a>
                </li>
                 <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Your Seller Account</span>
                    </a>
                </li>
                 <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Content Library</span>
                    </a>
                </li>
                 <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Devices</span>
                    </a>
                </li>
                 <li>
                    <a className="nav-account-link">
                        <span className="nav-account-text">Register for a free Business Account</span>
                    </a>
                </li>
              </ul>
            </div>

        </div>
    )
}