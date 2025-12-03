import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faChevronRight, faAngleRight} from '@fortawesome/free-solid-svg-icons'; 
import {faDesktop, faFire , faGear, faCircleUser} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect , useRef} from 'react'

import PriceRangeSlider from "../components/PriceRangeSlider"

export default function SideBar() {

    const [collapsed , setCollapsed] = useState(false)
    const [expandedMenu, setExpandedMenu] = useState(null);
    const [height, setHeight] = useState("0px");

   const [menuLevel, setMenuLevel] = useState("main");
   const [currentMainItem, setCurrentMainItem] = useState(null);
  

    const contentRef = useRef(null);

     const mainMenuItems = ["Handmade"];
    
  // Submenu items depending on main menu selection
    const subMenuItems = {
      Handmade: ["Toys", "Gifts", "Phone"]
    };

    function toggleSidebar(){
        setCollapsed(!collapsed)
    }


    useEffect(() => {
        setHeight(expandedMenu ? `${contentRef.current.scrollHeight}px` : "0px")
    }, [expandedMenu])

    function firstDropDown(){
        setExpandedMenu(!expandedMenu)
    }


    const handleMainClick = (item) => {
         setCurrentMainItem(item);
         setMenuLevel("submenu");
    }

    const handleBack = () => {  
         setMenuLevel("main");
         setCurrentMainItem(null);
    };
 
   
    return (
        <div id="side-bar" className={`sidebar ${collapsed ? "collapsed" : "open"}`}>               
               
                    <button id="toggleSidebarBtn" className={`arrow-button ${collapsed ? "collapsed" : "open"}`}
                    onClick={toggleSidebar}></button>

                    <div id="side-navbar-heading">
                        <FontAwesomeIcon icon={faCircleUser} />
                        {!collapsed &&  <h2 className="signin-label">Hello, <span>Sign In</span></h2> }
                    </div>  
                     

                     <div 
                          id="sidebar-maincontent-container"                          
                          className={`menu main ${menuLevel === "main" ? "active" : "inactive"}`}
                      >

                            <div className="sidebar-navcontent-heading">
                                <FontAwesomeIcon icon={faFire} />
                                {!collapsed && <span>Trending</span>}                            
                            </div>
                           <ul>
                              <li>     
                                  <a href="#" className="menu-item"> 
                                    {!collapsed &&  <div  className="menu-label">Best Sellers</div>}
                                 </a>  
                              </li>

                               <li>
                                 <a href="#" className="menu-item">  
                                       {!collapsed &&  <div  className="menu-label">New Releases</div>}
                                </a>
                              </li>
                        </ul>
                 

                        <div className="side-bar-divider"></div>                

                        <div className="sidebar-navcontent-heading">
                              <FontAwesomeIcon icon={faDesktop} />
                             {!collapsed && <span> Digital Content and Devices</span>}       
                        </div>   
                        <ul>
                            <li>
                                  <a href="#" >   
                                    <div  className="menu-item" onClick={()=>handleMainClick("Prime Video")}>
                                         {!collapsed &&  <div  className="menu-label">Prime Video</div>}
                                        {!collapsed &&  <FontAwesomeIcon className="arrow" 
                                        icon={faChevronRight}  />}  
                                    </div>
                                    
                                  </a>                       
                            </li>

                            <li>

                                  <a href="#" >   
                                       <div  className="menu-item" onClick={()=>handleMainClick("Amazon Music")}>
                                    {!collapsed &&  <div  className="menu-label">Amazon Music</div>}
                                    {!collapsed && <FontAwesomeIcon className="arrow"
                                     icon={faChevronRight} />} 
                                     </div> 
                                </a>                        
                            </li>

                             <div className="side-bar-divider"></div>   
                            <li>

                            </li>


                        </ul>                  
                          
                             
                          <div className="sidebar-navcontent-heading">
                             <FontAwesomeIcon icon={faGear} />
                             {!collapsed && <span> Programs & Features </span>}
                        </div>   

                        <ul>
                            <li>
                                 <a href="#" > 
                                       <div  className="menu-item" onClick={()=>handleMainClick("Gift Cards & Top Up")}>
                                        {!collapsed &&  <div  className="menu-label">Gift Cards & Top Up</div>}
                                        {!collapsed && <FontAwesomeIcon className="arrow"
                                         icon={faChevronRight} />} 
                                         </div>
                                </a>
                            </li>

                             <li>
                                 <a href="#" > 
                                <div  className="menu-item" onClick={()=>handleMainClick("Find a Gift")}>                                  
                                    {!collapsed &&  <div  className="menu-label">Find a Gift</div>}
                                    {!collapsed && <FontAwesomeIcon className="arrow" 
                                    icon={faChevronRight}  onClick={()=>handleMainClick("Find a Gift")} />} 
                                    </div>
                                </a>
                             </li>

                            <li>
                                 <a href="#" >    
                                 {!collapsed && 
                                 <div  className="menu-item" onClick={()=>handleMainClick("Handmade")}>                               
                                     <div  className="menu-label">Handmade</div>
                                     <FontAwesomeIcon className="arrow" 
                                    icon={faChevronRight}  />
                                    </div>
                                    }
                                </a>
                            </li>
                            <li>
                                 <a href="#"> 
                                      {!collapsed &&   <div  className="menu-item" 
                                      onClick={()=>handleMainClick("Amazon Launchpad")}>      
                                   <div  className="menu-label">Amazon Launchpad</div>                               
                                    <FontAwesomeIcon className="arrow"
                                     icon={faChevronRight}  />
                                     </div>
                                     }                          
                                 </a>
                            </li>

                        </ul>   
                          <div 
                                ref = {contentRef}
                                className="sidenavContainer"
                                id="firstContainer"
                                style={{ maxHeight: height }}
                            >  

                            <ul>
                                <li>
                                     <a href="#" >
                                        {!collapsed &&   <div  className="menu-item" 
                                      onClick={()=>handleMainClick("Made in Italy")}>                                        
                                        {!collapsed &&  <div  className="menu-label">Made in Italy</div>}     
                                        {!collapsed && <FontAwesomeIcon icon={faChevronRight} /> }  
                                        </div>
}
                                    </a>
                                </li>

                                <li>
                                     <a href="#" className="menu-item">                                     
                                         {!collapsed &&  <div  className="menu-label">Home Services</div>}   
                                         {!collapsed &&<FontAwesomeIcon icon={faChevronRight} /> }
                                       </a>
                                </li>

                                <li>
                                       <a href="#" className="menu-item">                                      
                                           {!collapsed &&  <div  className="menu-label">Amazon Business</div>}   
                                         {!collapsed && <FontAwesomeIcon icon={faChevronRight} />} 
                                </a>
                                </li>

                                <li>
                                     <a href="#" className="menu-item">                                       
                                         {!collapsed &&  <div  className="menu-label">Amazon Second Chance</div>}   
                                         {!collapsed && <FontAwesomeIcon icon={faChevronRight} />}
                                        </a>
                                </li>

                            </ul>                                 
                             
                            </div>
                          
                         

                             {!collapsed && <div className="sideNavBarDropDown"
                                id="firstDropDown"
                                 onClick={firstDropDown}
                                > 
                                     { expandedMenu ? <span>See More </span> : <span>See Less </span>}                                     
                                     { expandedMenu ?
                                        <FontAwesomeIcon icon={faChevronDown} 
                                        style={{"color": "#8e9090", "marginLeft": "10px"}}> </FontAwesomeIcon>
                                        :
                                         <FontAwesomeIcon icon={faChevronUp} 
                                        style={{"color": "#8e9090", "marginLeft": "10px"}}> </FontAwesomeIcon>
                                    }
                            </div> 
                            }
                            
                            {!collapsed && 
                              <PriceRangeSlider/>
                            }

                         <div style={{height: "50px"}}></div>

                    </div> 

        {/* Submenu */}

          <div 
            id="sidebar-subcontent-container"
            className={`submenu-content-container submenu ${menuLevel === "submenu" ? "active" : "inactive submenu"}`}
          >

           <div className="side-bar-submenu">
                 <FontAwesomeIcon icon={faAngleRight} 
                 style={{"color": "#8e9090"}} 
                 onClick={handleBack}
                 />
                MAIN MENU
          </div>
            <hr />
        

           {currentMainItem && subMenuItems[currentMainItem] &&
             subMenuItems[currentMainItem].map((subItem) => (
              <div key={subItem} className="menu-item">
                {subItem}
              </div>
            ))}        
       </div>
                    
      </div>
    )
}
