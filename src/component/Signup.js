import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
    const history =useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:4000/signup", {
           email,
          password,
        })
        .then((res) => {
          if ((res.data == "exist")) {
            alert("user already exist")
          } else if ((res.data =="notexist")) {
            history("/")
          }
        })
        .catch(e=>{
          alert("wrong details")
          console.log(e);
      })
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div
        className="modal signUp-modal fade"
        id="signUpModal01"
        tabindex="-1"
        aria-labelledby="signUpModal01Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="signUpModal01Label">
                Sign Up
              </h4>
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#logInModal01"
                >
                  Log In
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
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>First Name*</label>
                      <input type="text" placeholder="First name"  />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Last Name*</label>
                      <input type="text" placeholder="Last name"  />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <label>Enter your email address*</label>
                      <input
                        type="email"
                        placeholder="Type email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Password*</label>
                      <input
                        id="password"
                        type="password"
                        placeholder="*** ***"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <i className="bi bi-eye-slash" id="togglePassword"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Confirm Password*</label>
                      <input
                        id="password2"
                        type="password"
                        placeholder="*** ***"
                      />
                      <i className="bi bi-eye-slash" id="togglePassword2"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <button
                        className="primary-btn2"
                        type="submit"
                        onClick={submit}
                      >
                        Sign Up Now
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
      {/* SIGNUP END  */}
    </>
  );
}

export default Signup;
