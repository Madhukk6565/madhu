import React, { useState } from "react";
import axios from "axios";
import LoginService from './LoginService';
import { useNavigate } from "react-router-dom";


function Newlogin(){

    const [logemail, setlogEmail] = useState({

        usernameOrEmail:"",
    
        password:""
    
      });
    
    
    
    
      const onChangeEmail = (e) => {
    
        const value = e.target.value;
    
        setlogEmail({ ...logemail, [e.target.name]:value})
    
      }
    
      const navigate = useNavigate();
    
      const onLoginClick = (e)=>{
    
        e.preventDefault()
    
        LoginService.loginForm(logemail).then((res)=>{
    
          // console.log('Logged in',res);
    
          if(res.status === 200){
    
            alert(`You are Logged in successfully Welcome to the Cricket World!!!!!`)
    
            navigate('/H')
    
            // window.location.href = "/profile"
    
          }
    
          else{
    
            alert('Invalid credentials')
    
          }
    
        }).catch((error)=>{
    
          if(error.response.status === 401){
    
            alert('Invalid credentials')
    
          }
    
        })
    
      }
    return(
       
        <div class="log">
        <div class="login">
             <form  class="box" >
            <h1>LOGIN</h1>
            <br>
            </br>
            
            <input   onChange={(e)=>onChangeEmail(e)}  name="usernameOrEmail" type="text"  placeholder='Enter username' id="username" />
            <span id="us" style={{color:"red"}}>      </span>
            <br>
            </br>
           
            <input  onChange={(e)=>onChangeEmail(e)} name="password" type="text"  placeholder='Enter password' id="password" />
            <span id="pass"  style={{color:"red"}}>     </span>
            <br>
            </br>
            <br>
            </br>
            <input  href=" " type="submit" onClick={(e)=>onLoginClick(e)} name="submit"/>
            <br/><br/>
            
            <label>SIGN IN</label><br/>
            <a href=" /S">Not yet Registered?</a>

        </form>
        </div>
        </div>


    )
}
export default Newlogin;

