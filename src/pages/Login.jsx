import { useEffect, useState } from "react"
import { FaGoogle,FaGithub,FaFacebookF } from "react-icons/fa";
import LoginWithGoogle from "../components/Login/LoginWithGoogle";
import LoginWithGithub from "../components/Login/LoginWithGithub";
import LoginWithFacebook from "../components/Login/LoginWithFacebook";
import RegisterForm from "../components/Register/RegisterForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {
  const [formData,setFormData] = useState({});
  const [loginWith,setLoginWith] = useState('Google');
  const [registerFormData,setRegisterFormData] = useState({});
  const [formActive,setFormActive] = useState('Login');
  const navigate = useNavigate();
 
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem('user_token', true);
      console.log('Login formData...', formData);
      navigate('/dashboard')
      Swal.fire({
        icon: 'success',
        title: 'Logged In!',
        text: 'Logged In Successfully.',
        timer: 2000,
        showConfirmButton: false
    });
    }
  }, [formData,navigate]); 

  useEffect(() => {
    if (Object.keys(registerFormData).length > 0) {
      localStorage.setItem('user_token', true);
      console.log('Register formData...', registerFormData);
      Swal.fire({
        icon: 'success',
        title: 'Sign Up!',
        text: 'Sign up successfully',
        timer: 2000,
        showConfirmButton: false
    });
      navigate('/dashboard')
    }
  }, [registerFormData,navigate]);

  const whichFormIsOpenHandler = (formName) => {
    setFormActive(formName);
  };

  return (
   <div className="login_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
              
              <div className="login_form_box card">
                {/* Login header */}
                <div className="login_header border-radius-lg py-3 pe-1 p-0 position-relative mx-3 z-index-2">
                  <h1 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign In</h1>
                  <div className="loginWight_icons">
                      <FaFacebookF onClick={() => setLoginWith('Facebook')}/>
                      <FaGithub  onClick={() => setLoginWith('Github')}/>
                      <FaGoogle  onClick={() => setLoginWith('Google')}/>
                  </div>
                </div>
                
                {formActive ==='Login' ? (
                  <div className="card-body">
                  {loginWith ==='Google' && (<LoginWithGoogle formActiveHandler={whichFormIsOpenHandler} setData={setFormData}/>)}
                  {loginWith ==='Github' && (<LoginWithGithub formActiveHandler={whichFormIsOpenHandler} setData={setFormData}/>)}
                  {loginWith ==='Facebook' && (<LoginWithFacebook formActiveHandler={whichFormIsOpenHandler} setData={setFormData}/>)}
                </div>
                )
                :(
                  <div className="card-body">
                    <RegisterForm formActiveHandler={whichFormIsOpenHandler} setRegisterData={setRegisterFormData}/>
                  </div>
                )}
                


              </div>

              
          </div>
        </div>
      </div>
   </div>
  )
}

export default Login