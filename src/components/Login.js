import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'

function Login() {

    const [Credentials, setCredentials] = useState({email:"",password:""})
    
    const history = useHistory() 
    const HandleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/user/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body:JSON.stringify({email:Credentials.email,password:Credentials.password})
          });
          const json = await response.json()
          console.log(json)
          if(json.sucess){
            localStorage.setItem('token', json.authtoken);
            history.push('/');
          }else{
            alert("Plese login using correct credentials")
          }
          

     
    }
    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value });
      };
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <div className="mb-3">
          <h1>Login</h1>
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            name="email"
            value={Credentials.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={Credentials.password}
            name="password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div className='container my-3'>
        <h6>Don't have an account? <Link className='link-primary' to='/signup'>Signup now</Link></h6>
        </div>
      </form>
    </div>
  );
}

export default Login;
