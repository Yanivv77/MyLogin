import React from 'react'
import './index.css'
import lion from './lion.png'
function LoginPage() {
  return (
    <div>
      <div className="login-page">
        <div className="row h-100 parent-row d-none d-lg-block">
          <div className="col-md-4 parent-first-part"></div>
          <div className="col-md-8 parent-second-part"></div>
        </div>

        <div className="row child-row">
          <div className="col-md-4 child-first-part d-flex align-items-center">
            <img src={lion} alt="" height="300" width="300" />
          </div>
          <div className="col-md-8 child-second-part d-flex align-items-center justify-content-center">
            <div className="text-part d-flex flex-column">
              <h1>LOGIN</h1>

              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />

              <div className="d-flex align-items-center justify-content-between">
                <button>LOGIN</button>

                <div>
                  <a href=" ">Forgot Password</a> <br />
                  <a href=" ">Register</a>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-2 w-100 align-items-center">
                <div className="left-divider"></div>
                <p className="mb-2 mx-2">OR</p>
                <div className="right-divider"></div>
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <img
                  height="40"
                  width="40"
                  className="mx-5"
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt=""
                />
                <img
                  className="mx-5"
                  height="30"
                  width="30"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
