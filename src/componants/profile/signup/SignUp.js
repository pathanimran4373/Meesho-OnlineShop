import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "./SignUp.css"

function ResisterPage() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "") {
            toast.error('name is required');
        } else if (number === "") {
            toast.error('number is required');
        } else if (email === "") {
            toast.error('email is required');
        } else if (password === "") {
            toast.error('password is required');
        } else {
            localStorage.setItem('name', name);
            localStorage.setItem('number', number);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert("you resister succefully");
            navigate('/login')
        }
    };


    return (
        <div className="login-form-container-box">


            <form className='login-box-container' action="">
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt='background_image'></img>
                <div className='input-details'>
                    <h3>Register</h3>
                    <input type="name" placeholder="name" className="input-box" value={name} onChange={(e) => setName(e.target.value)} />
                    <hr className='hrLine'></hr>
                    <input type="number" placeholder="number" className="input-box" value={number} onChange={(e) => setNumber(e.target.value)} />
                    <hr className='hrLine'></hr>
                    <input type="email" placeholder="email" className="input-box" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <hr className='hrLine'></hr>
                    <input type="password" placeholder="password" className="input-box" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <hr className='hrLine'></hr>

                    <input type="submit" value="Sign Up" className="submit-btn" onClick={handleSubmit} />

                    <p className='botom-Line'>If you are a User ! <span><Link className='link' to="/login">Sign In</Link></span></p>

                </div>

            </form>

        </div>

    )
}

export default ResisterPage
