import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    // const navigate = useNavigate();
    const [values, setValues] = useState([]);
    const baseUrl = 'https://reqres.in/api/';

    useEffect(() => {
        localStorage.setItem("loginData", JSON.stringify(values));
        // axios.get(baseUrl + `users`)
        //     .then((res) => { console.log(res.data.data) })
        //     .catch((err) => { console.log(err) });
    }, [])

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post(baseUrl + `users`, values)
            .then((res) => { console.log(res.data) })
            .catch((err) => { console.log(err.response.data.error) });
    }

    const notify = () => {
        toast.success('Login was successful!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <>
            <div className="main-loginPage">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup-loginPage">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input className='form-input px-4 py-3 rounded-full' onChange={(e) => handleChange(e)} type="text" value={values?.userName} name="userName" placeholder="User name" required="" />
                        <input className='form-input px-4 py-3 rounded-full' onChange={(e) => handleChange(e)} type="email" value={values?.email} name="email" placeholder="Email" required="" />
                        <input className='form-input px-4 py-3 rounded-full' onChange={(e) => handleChange(e)} type="password" value={values?.password} name="password" placeholder="Password" required="" />
                        <button>Sign up</button>
                    </form>
                </div>

                <div className="login-loginPage">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <label htmlFor="chk" aria-hidden="true">Login</label>
                        <input className='form-input px-4 py-3 rounded-full' type="email" value={values?.email} name="email" placeholder="Email" required="" />
                        <input className='form-input px-4 py-3 rounded-full' type="password" value={values?.password} name="password" placeholder="Password" required="" />
                        <button onClick={notify}>Login</button>

                    </form>
                </div>
            </div>
            <ToastContainer position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </>
    );
}

export default Login;