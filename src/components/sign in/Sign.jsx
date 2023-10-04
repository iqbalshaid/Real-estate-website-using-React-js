import React from 'react';
import img from "../images/pricing.jpg"
import Back from "../common/Back";
import "./sign.css";
const Sign = ()=>{
    return(
        <div className='sign'>
        <Back name='Sign IN' title='Get Login in our website' cover={img} />
            <div className='conatiner'>
                <div className='text1'>
                    <h6>SIGN IN</h6>
                    <span>User Sign in property related query</span>
                </div>
                <div className='box1'>
                    <div className='input1'>
                        <label for = "email">Email</label><br />
                        <input type = "text" placeholder='Enter your Email'></input>

                    </div>
                    <div className='input2'>
                        <label for = "password">Password</label><br />
                        <input type = "text" placeholder='Enter your Password'></input>

                    </div>
                    <button className='submit'>Submit</button>
                </div>
            </div>
        </div>
    )
}
export  default Sign;