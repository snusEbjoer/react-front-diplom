import Home from './Home'
import "./assets/login/css/main.css"
import axios from 'axios'
import { useState } from 'react'


function SignUp() {
    const [data, setData] = useState({
        fio: "",
        email: "",
        password: "",
        name:""
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
          password: data.password,
          fio: data.fio,
          name: data.name
        };
        axios.post('http://localhost:3000/auth/SignUp', userData)
        .then(function (response) {
            console.log(response.status, response.data);
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
                    Регистрация
                </span>
                <span className="login100-form-title p-b-48">
                    <i className="zmdi zmdi-font"></i>
                </span>
                <div className="wrap-input100 validate-input">
                    <span className="btn-show-pass">
                        <i className="zmdi zmdi-eye"></i>
                    </span>
                    <input className="input100" type="text" name="fio" value={data.fio} onChange={handleChange}/>
                    <span className="focus-input100" data-placeholder="ФИО"></span>
                </div>
                <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                    <input className="input100" type="text" name="email" value={data.email} onChange={handleChange}/>
                    <span className="focus-input100" data-placeholder="Email"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Enter password">
                    <span className="btn-show-pass">
                        <i className="zmdi zmdi-eye"></i>
                    </span>
                    <input className="input100" type="password" name="password" value={data.password} onChange={handleChange}/>
                    <span className="focus-input100" data-placeholder="Пароль"></span>
                </div>
                <div className="wrap-input100 validate-input">
                    <span className="btn-show-pass">
                        <i className="zmdi zmdi-eye"></i>
                    </span>
                    <input className="input100" type="text" name="name" value={data.name} onChange={handleChange}/>
                    <span className="focus-input100" data-placeholder="Название организации"></span>
                </div>
                <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn"></div>
                        <button onClick={SignIn} className="login100-form-btn">
                            Зарегистрироваться
                        </button>
                    </div>
                </div>

                <div className="text-center p-t-115">
                    <span className="txt1">
                        Уже есть аккаунт?
                    </span>

                    <a className="txt2" href="#">
                        Войти
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

export default SignUp