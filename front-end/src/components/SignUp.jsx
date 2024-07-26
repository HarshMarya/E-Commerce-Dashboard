import React, { useEffect, useState } from 'react'
import '../css/signup.css'
import { useNavigate,Link } from 'react-router-dom'

function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem('user')
        // auth ? navigate("/") : null
        if(auth){
            navigate("/")
        }
    })


    const handleSubmit = async () => {
        console.log(name, email, password);
        let result = await fetch('http://localhost:3000/register', {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': "application/json"
            }
        })
        result = await result.json()
        console.log(result)
        localStorage.setItem("user", JSON.stringify(result))
        if (result) {
            navigate("/")
        }
    }

    return (
        <section>
            <div className='flex justify-center items-center h-[100vh] flex-col gap-6'>
                <form className="form">
                    <p className="title">Sign up </p>
                    <div className="input-container">
                        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <input type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="button" onClick={handleSubmit} className="submit">
                        Sign Up
                    </button>
                    <p className="signup-link">
                        Already have a account?
                        <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </section>
    )
}

export default SignUp
