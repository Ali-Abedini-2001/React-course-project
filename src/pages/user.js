import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

const UserV = () => {
    
    let { id } = useParams();
    console.log(id)
    const [user, setUser] = useState({});
    useEffect( () => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then((res) => { setUser(res?.data?.data);
                console.log(res?.data?.data); })
            .catch((error) => console.log(error.response.data.error))
    },[])

    
    return (
        <>
            <img src={user.avatar} style={{ borderRadius: "50%", width: "100px" }} alt=""></img>
            <h4>{user.first_name} {user.last_name}</h4>
            <h5>{user.email}</h5>
        </>

    );
}

export default UserV;