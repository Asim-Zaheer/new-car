import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from "axios"

function Login() {
  const history =useNavigate()
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
async function submit(e){
    e.preventDefault()
    try{
        await axios.post("http://localhost:4000/",{
           email,password
        })
        .then(res=>{
          if(res.data == "exist"){
            history("/reservation")
          }
           else if(res.data == "notexist"){
            alert("please Signup First")
          }
        })
        .catch(e=>{
          alert ("Wrong details")
          console.log(e)
        })
    }catch(e){
        console.log(e)
    }
}
return (

   <>
     
     <div
          className="modal signUp-modal fade"
          id="logInModal01"
          tabindex="-1"
          aria-labelledby="logInModal01Label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="logInModal01Label">
                  Log In
                </h4>
                <p>
                  Don’t have any account?{" "}
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#signUpModal01"
                  >
                    Sign Up
                  </button>
                </p>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="bi bi-x"></i>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row g-4">
                    <div className="col-md-12">
                      <div className="form-inner">
                        <label>Enter your email address*</label>
                        <input type="email" placeholder="Type email" onChange={(e)=>{setEmail(e.target.value)}} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <label>Password*</label>
                        <input
                          id="password3"
                          type="password"
                          placeholder="*** ***"
                          onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <i className="bi bi-eye-slash" id="togglePassword3"></i>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                          <input type="checkbox" id="html" />
                          <label for="html">Remember Me</label>
                        </div>
                        <a to="#" className="forgot-pass">
                          Forget Password?
                        </a>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <button className="primary-btn2" type="submit" onClick={submit} >
                          Log In
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="terms-conditon">
                    <p>
                      By sign up,you agree to the{" "}
                      <NavLink to="/guide">‘terms & conditons’</NavLink>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default Login