import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";


const Sidebar = () => {
    const navigate = useNavigate();
    // Menus
    const menus = [
        {
            title:'Dashboard',
            link:'/dashboard',
            icon:<IoHomeOutline/>,
        },
        {
            title:'Products',
            link:'/products',
            icon:<AiOutlineProduct/>,
        },
        {
            title:'User Management',
            link:'/user-management',
            icon:<BsPeople/>,
        }
    ]

    const signOutHandler = () => {
      localStorage.removeItem('user_token');
      navigate('/login');
  }
  return (
    <div className="sidebar border bg-dark border-right col-md-3 col-lg-2 p-0 text-bg-dark">
      <div className="offcanvas-md offcanvas-end text-bg-dark text-white" aria-labelledby="sidebarMenuLabel">
        <div className="sidebar-header pt-3 text-center">
            <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" to="/dashboard"><RxDashboard size={18} style={{marginRight:'6px'}}/> Admin Dash</Link>
        </div>
        <hr className="my-3"/>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            {menus.map(menu =>{
                return(
                    <li className="nav-item" key={menu.title}>
                        <NavLink className="nav-link d-flex align-items-center text-white gap-2"  to={menu.link}>
                            {menu.icon}
                            {menu.title}
                        </NavLink>
                    </li>
                )
            })}
          </ul>
          <hr className="my-3"/>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <Link className="nav-link d-flex text-white align-items-center gap-2" to="/">
                <CiSettings />
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex  text-white  align-items-center gap-2" onClick={signOutHandler} to="/">
                <CiLogout />
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar