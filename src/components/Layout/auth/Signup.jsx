import {React, useState} from 'react';
import Label from '../../Elements/Labels/Label';
import Input from '../../Elements/InputFields/Input';
import Button from '../../Elements/Buttons/Button';
import { register} from '../../../api/auth/register';
import storage from '../../../utils/storage';
import { Navigate } from 'react-router-dom';

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    try {
      if(password !== confirmPassword){
        //  TODO
      }
      const registerData = {
        "name": name,
        "email": email,
        "password": password
      }
      signup(registerData);

    } catch (error) {
      //  TODO
    }
  }

  const signup = async(registerData) => {
    const response = await register(registerData);
    console.log("response:",response);
    if(response.data.statusCode === 200){
      storage.setUser(response.data.data);
      storage.setToken(response.data.token);
      <Navigate to = '/' replace = {true} />
    }
  }

  return (
    <div className='flex justify-center items-center content-center h-screen'>
       <div className='w-[40%] h-[90%] flex flex-col justify-center content-center items-center gap-3  px-2 p-3 pt-0'>
       <div className='flex self-start color-primary'>
          <p className='text-size-5 mb-2'>Create Account</p>
        </div>
        <Label 
              labelStyle = {{
                color: "#adbac7",
                fontSize: "1.8rem",
                fontWeight: "500",
                alignSelf: "flex-start",
              }}
              title = "Full Name"
          />

          <Input 
              inputStyle = {{
                width: "100%",
                height: "4rem",
                paddingLeft: "2rem",
              }} 
              value = {name}
              setValue = {setName}
          />
          <Label 
              labelStyle = {{
                color: "#adbac7",
                fontSize: "1.8rem",
                fontWeight: "500",
                alignSelf: "flex-start",
              }}
              title = "Email"
          />

          <Input 
              inputStyle = {{
                width: "100%",
                height: "4rem",
                paddingLeft: "2rem",
              }} 
              value = {email}
              setValue = {setEmail}
          />
        <Label 
              labelStyle = {{
                color: "#adbac7",
                fontSize: "1.8rem",
                fontWeight: "500",
                alignSelf: "flex-start",
              }}
              title = "Password"
          />

          <Input 
              inputStyle = {{
                width: "100%",
                height: "4rem",
                paddingLeft: "2rem",
              }} 
              value = {password}
              setValue = {setPassword}
          />
          <Label 
              labelStyle = {{
                color: "#adbac7",
                fontSize: "1.8rem",
                fontWeight: "500",
                alignSelf: "flex-start",
              }}
              title = "Confirm Password"
          />

          <Input 
              inputStyle = {{
                width: "100%",
                height: "4rem",
                paddingLeft: "2rem",
                marginBottom: "2rem"
              }} 
              value = {confirmPassword}
              setValue = {setConfirmPassword}
          />

            <Button
              buttStyle = {{
                  width: "100%",
                  height: "5.5rem",
                  color: "#fff",
                  fontSize: "1.8rem"
              }}
              title = "Sign up" 
              onClick = {handleSignup}
          />
        </div>
    </div>
  )
}

export default Signup
