import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
    const loginHandler = (e) => {
        e.preventDefault();
        let path = 'faculty';
        navigate(path)
        console.log('test', path)
    }
    return (
        <div className='card login-card '>
        <div className='card-body'>
            <form onSubmit={(e) => loginHandler(e)}>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={() => console.log('test')}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={() => console.log('test')}
                    />
                </div>
                <div className="form-group form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        onChange={() => console.log('test')}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className='justify-content-center d-flex'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
        </div>
    )
}

export default Login