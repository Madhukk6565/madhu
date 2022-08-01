import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SaveLoginService from "./SaveLoginService";
function Registration(){

    const [login, setlogin] = useState({

        firstName: "",
    
        lastName: "",
    
        email: "",
    
        password: "",
    
      });
    
    
    
      const handleChange = (e) => {
    
        const value = e.target.value;
    
        setlogin({ ...login, [e.target.name]: value });
    
      };
    
      const navigate = useNavigate();
    
      const saveLogin = (e) => {
    
        e.preventDefault();
    
        SaveLoginService.saveLog(login)
    
        .then((response) => {
    
          console.log("added");
    
          if(response.status === 200){
    
            alert('Registered successfully')
    
            navigate('/login')
    
          }
    
        })
    
        .catch((error) => {
    
          console.log(error);
    
          if(error.response.status === 400){
    
            alert('Email already exists')
    
          }
    
          else if(error.response.status === 500){
    
            alert('Please fill the required fields')
    
          }
    
        });
    
    
    
      };

    return(
        <div class="container"><br/>

        <h1 class="text-success text-center">SIGN IN</h1>
        <div class="col-lg-5 m-auto d-block">
            <form action="#" onchange="return validation()" >

                
                <div class="form-group">
                    <label>FirstName</label>
                    <input  onChange={(e) => handleChange(e)} name="firstName"type="text"  class="form-control" id="user" autocomplete="off"/>
                    <span id="username" class="text-danger font-weight-bold"></span>
                </div>

                <div class="form-group">
                    <label>Lastname</label>
                    <input onChange={(e) => handleChange(e)} name="lastName" type="text"  class="form-control" id="last" autocomplete="off"/>
                    <span id="lastname" class="text-danger font-weight-bold"></span>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input onChange={(e) => handleChange(e)} name="email"type="text"class="form-control" id="email" autocomplete="off"/>
                    <span id="emails" class="text-danger font-weight-bold"></span>
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input  onChange={(e) => handleChange(e)} name="password" type="text"  class="form-control" id="pass" autocomplete="off"/>
                    <span id="password" class="text-danger font-weight-bold"></span>
                </div>

                

            
                <input type="submit" onClick={(e) => saveLogin(e)}  class="btn btn-success"/>
              <a href="login.html"><input type="Login" name="Login" value="Login" class="btn btn-success" style="width:73px; height:40px align=left "/></a>
            
            
            
            
            </form>

        </div>
    </div>


    )
}
export default Registration;