import NavCountryList from "./NavCountryList"
import NavAccountList from "./NavAccountList"
import NavOrders from "./NavOrders"
import NavCart from "./NavCart"

export default function NavRightComponents() {
    return(
        <>
            <NavCountryList/>
            <NavAccountList />
            <NavOrders/>
            <NavCart/>  
        </>
    )
}