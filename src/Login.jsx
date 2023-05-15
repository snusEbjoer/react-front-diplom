import { useNavigate } from 'react-router-dom'
import Home from './Home'
import "./assets/login/css/main.css"
import axios from 'axios'
import { useState } from 'react'


function Login() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
      });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };
      
      const SignIn = (e) => {
        e.preventDefault();
        const userData = {
          email: data.email,
          password: data.password
        };
        axios.post('http://localhost:3000/auth/login', userData)
        .then(function (response) {
            console.log(response.status, response.data.access_token);
            navigate('/profile')
          })
          .catch(function (error) {
            console.log(error);
          });
        }

    
  return (
    <div>
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <form className="login100-form validate-form">
                <span className="login100-form-title p-b-26">
                    Вход
                </span>
                <span className="login100-form-title p-b-48">
                    <i className="zmdi zmdi-font"></i>
                </span>
                <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                    <input className="input100" type="text" name="email" value={data.email} onChange={handleChange}/>
                    <span className="focus-input100" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Enter password">
                    <span className="btn-show-pass">
                        <i className="zmdi zmdi-eye"></i>
                    </span>
                    <input className="input100" type="password" name="password" value={data.password} onChange={handleChange}/>
                    <span className="focus-input100" data-placeholder="Password"></span>
                </div>

                <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn"></div>
                        <button onClick={SignIn} className="login100-form-btn">
                            Войти
                        </button>
                    </div>
                </div>

                <div className="text-center p-t-115">
                    <span className="txt1">
                        Нет аккаунта?
                    </span>

                    <a className="txt2" href="#">
                        Зарегистрироваться
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="dropDownSelect1"></div>
</div>
  )
}

export default Login