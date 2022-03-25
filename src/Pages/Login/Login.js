import React from 'react'
import { Container, Form } from 'react-bootstrap'
import BackgroundLogin from "../../Assets/Img/bg-login.png";
import Rectangle62 from "../../Assets/Img/Rectangle62.png";
// import './Login.css'

export const Login = () => {
    return (
        <div>
            <Container fluid>
                <div className='row'>
                    <div className='col-lg-8 text-center'>
                        <img src={BackgroundLogin} alt="" />
                    </div>
                    <div className='col-lg-4 bg-light'>
                        <img src={Rectangle62} alt="" />
                        <h3 className='text-center mt-5'>Welcome, Admin BCR</h3>
                        <Form>
                            <div className='mb-3'>
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder='Contoh: johndee@gmail.com'></input>
                            </div>
                            <div className='mb-4'>
                                <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder='6+ karakter'></input>
                            </div>
                            <button type="submit" className="btn btn-primary col-12 mb-3">Sign In</button>
                        </Form>
                        {/* <p>Email</p> */}
                    </div>
                </div>
            </Container>
        </div>
    )
}
