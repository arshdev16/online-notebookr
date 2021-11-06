import React,{useState} from "react";
import { useHistory } from "react-router-dom";

function Signup() {
    const [Credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
    
    const history = useHistory() 
    const HandleSubmit = async (e)=>{
        e.preventDefault()
        if(Credentials.password !== Credentials.cpassword){
          return alert("password and confirm password do not matcb")      
        }
        const response = await fetch(`http://localhost:5000/user/auth/createuser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body:JSON.stringify({name: Credentials.name ,email:Credentials.email,password:Credentials.password})
          });
          const json = await response.json()
          console.log(json)
          if(json.sucess){
            localStorage.setItem('token', json.authtoken);
            history.push('/');
          }else{
            alert(json.error)
          }
    }

    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value });
      };



  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
      <div className="mb-3">
        <h1>Sign Up</h1>
          <label htmlFor="exampleInputEmail1" className="form-label">
             Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="name"
            name="name"
            value={Credentials.name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="email"
            name='email'
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
            name="password"
            value={Credentials.password}
            onChange={onChange}
            minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={Credentials.cpassword}
            onChange={onChange}
            minLength={5} required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
