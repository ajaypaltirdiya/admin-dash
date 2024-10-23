import {useLocation, useNavigate } from "react-router-dom"
import { FaRegCircleUser } from "react-icons/fa6";
import Swal from "sweetalert2";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname.replace(/-/g, ' ').split(' ').map((word) => word[1].toUpperCase() + word.slice(2)).join(' ')

    const signOutHandler = () => {
        localStorage.removeItem('user_token');
        navigate('/login');
        Swal.fire({
            icon: 'success',
            title: 'Logged Out!',
            text: 'Logged Out Successfully.',
            timer: 2000,
            showConfirmButton: false
        });
    }

  return (
    <header className="dash_header">
        <div className="page_content">
            <h4 className="text-muted">Page / <span className="text-dark">{pathname}</span></h4>
            <h5>{pathname}</h5>
        </div>

        <div className="right_widget">
            <div className="user__detail" onClick={() => signOutHandler()}>
                <FaRegCircleUser />
                <span>Sign Out</span>
            </div>
        </div>
       
    </header>
  )
}

export default Header