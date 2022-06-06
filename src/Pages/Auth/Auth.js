import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import BackgroundLogin from "../../Assets/Img/bg-login.png";
import Rectangle62 from "../../Assets/Img/Rectangle62.png";
import '../../Assets/Css/Auth.css';

export const Auth = () => {

    const [error, setError] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")

    const hadleInput = (event) => {

        if (event.target.id === "email") {
            setUsername(event.target.value)
        } else if (event.target.id === "password") {
            setpassword(event.target.value)
        }
    }

    const validasi = () => {
        let paswordCorrect = 123456
        let UsernameCorrect = "coba@gmail.com"

        if (username === UsernameCorrect) {
            if (password === paswordCorrect) {
                alert("ke selanjutnya")
            }
            else {
                alert("Uspass salah")
            }
        }

        else {
            alert("Username /email salah")
        }
    }
    return (
        <div>
            <div className='row'>
                <div className='col-lg-8'>
                    <img src={BackgroundLogin} alt="" className='mf-auth-background' />
                </div>
                <div className='col-lg-4'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <img src={Rectangle62} alt="" />
                    <h3 className='mt-4'>Welcome, Admin BCR - STAGING</h3>
                    <Form>
                        <div className='mb-3'>
                            <label for="email" className="form-label">Email</label>
                            <input onChange={(event) => { hadleInput(event) }} type="email" className="form-control" id="email" placeholder='Contoh: johndee@gmail.com'></input>
                        </div>
                        <div className='mb-4'>
                            <label for="password" className="form-label">Password</label>
                            <input onChange={(event) => { hadleInput(event) }} type="password" className="form-control" id="password" placeholder='6+ karakter'></input>
                        </div>
                        <a href="/dashboard" className="btn mf-auth-blue col-12 mb-3">Sign In</a>
                        {/* <button onClick={() => { validasi() }} className="btn mf-auth-blue col-12 mb-3">Sign In</button> */}
                    </Form>
                </div>
            </div>
        </div>
    )
}
