import React, { Link, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
const MyProfile = () => {
    const location = useLocation();
    const Navigate = useNavigate();
    console.log("location.state", location.state);
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${location.state}`)
            .then((res) => {
                setUser(res?.data?.data);
                console.log(res?.data?.data);
            })
            .catch((error) => console.log(error.response.data.error))
    }, [])
    // const notify = () => {
    //     toast.success('Login was successful!', {
    //         position: "bottom-center",
    //         autoClose: 3000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "colored",
    //     });
    // }
    return (
        <>
            <div className="flex flex-col items-center text-red-500 border border-2 hover:border-dotted border-black rounded-md pr-8 pl-8 pt-4 shadow-xl font-semibold">
                <img src={user.avatar} style={{ borderRadius: "50%", width: "100px" }} alt=""></img>
                <h4>{user.first_name} {user.last_name}</h4>
                <h5>{user.email}</h5>
                <button className="w-14 bg-red-500" onClick={() => {
                    Navigate('/users');
                }}>back</button>
            </div>
        </>

        // <div >
        //     <button className="notify-btn" onClick={notify}>Notify!</button>
        //     <ToastContainer position="bottom-center"
        //         autoClose={3000}
        //         hideProgressBar={false}
        //         newestOnTop={false}
        //         closeOnClick
        //         rtl={false}
        //         pauseOnFocusLoss
        //         draggable
        //         pauseOnHover
        //         theme="colored" />
        // </div>

    );
}

export default MyProfile;