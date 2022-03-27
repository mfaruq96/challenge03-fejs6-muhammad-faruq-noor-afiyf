import React from 'react';
import { Container, Form } from 'react-bootstrap';
import BackgroundLogin from "../../Assets/Img/bg-login.png";
import Rectangle62 from "../../Assets/Img/Rectangle62.png";
import '../../Assets/Css/Auth.css';

export const AuthError = () => {
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
                    <h3 className='mt-4'>Welcome, Admin BCR</h3>
                    <div class="alert alert-danger" role="alert">
                        Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.
                    </div>
                    <Form>
                        <div className='mb-3'>
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder='Contoh: johndee@gmail.com'></input>
                        </div>
                        <div className='mb-4'>
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder='6+ karakter'></input>
                        </div>
                        <a href="/dashboard" className="btn mf-auth-blue col-12 mb-3">Sign In</a>
                    </Form>
                </div>
            </div>
        </div>
    )
}
