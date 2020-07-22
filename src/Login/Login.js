import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {userActions} from '../action'
import history from '../route/History'
import "./login.scss"
const Login = () => 
  {
    
    const [formData, setFormData] = useState({
        username: "",
        password: ""
      });

      const { username, password } = formData;
      const dispatch = useDispatch();

    const onFormChange = (e) => 
      {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }));
      }
    
    const userLogin = () =>
      {
        const { username,password } = formData;
        dispatch(userActions.login(username, password));
        console.log(formData);
        history.push('/dashboard')
        
      }

      return (
        <div className="login-outer-wrapper">
            <div className="login-box">
                <div>
                   <label>Usrename</label>
                   <input type="text" placeholder="username" name="username" onChange={e => onFormChange(e)}/><br/>
                   <label>Password</label>
                   <input type="password" placeholder ="password" name="password" onChange={e => onFormChange(e)}/><br/>
                   <button className="login-btn" onClick={userLogin}>Login</button>
                </div>
            
            </div>
        </div>
      )
  }

  export default Login;