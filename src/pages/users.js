import React, { useState, useEffect,useContext } from 'react';
// import { UserContext } from '../context/userContext';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
const Users = () => {
    const loc = useLocation();
    const [user, setUser] = useState([]);
    // const {user,setUser} =useContext(UserContext);
    const baseUrl = 'https://reqres.in/api/';
    const nav = useNavigate();

    useEffect(() => {
        axios.get(baseUrl + `users`)
            .then((res) => { setUser(res?.data?.data); })
            .catch((error) => console.log(error.response.data.error))
    }, [])

    const handleCreate = async () => {
        const newUser = {
            first_name: "Ali",
            last_name: "Abedini",
            email: "aliabedini2001@gmail.com",
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        };
        
        const response = await axios.post(baseUrl + `users`, newUser);
        console.log(response.data);
        setUser([...user,newUser])

    }
    // useEffect(()=>{
    //     handleCreate();
    // },[user])

    


    const handleUpdate = async (newUser) => {
        newUser.first_name = "Updated";
        const res = await axios.put(`https://reqres.in/api/users/${newUser.id}`)
        const updatedUsers = [...user];
        const index = updatedUsers.indexOf(newUser);
        updatedUsers[index] = {...newUser};
       setUser(updatedUsers)


    }
    

    const handleDelete = (id) => {

        axios.delete(`https://reqres.in/api/users/${id}`).then((response) => {
            const newUsers = user.filter((item) => item.id !== id);
            setUser(newUsers)

        }).catch((err) => { console.log(err) })

    }

    return (
        <>
            <button onClick={handleCreate} className="bg-purple-800">Create</button>
            <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-10 ">
                {
                    user.map((user) => {
                        return (
                            <>
                                <div className="grid justify-items-center">
                                    <img src={user.avatar} style={{ borderRadius: "50%", width: "100px" }} alt=""></img>
                                    {/* <Link  to={`/users/${user.id}`}><h4>{user.first_name} {user.last_name}</h4></Link> */}
                                    <h4>{user.first_name} {user.last_name}</h4>
                                    <h5>{user.email}</h5>
                                    <div className="flex flex-row">
                                        <div className="col-4 w-24">
                                            <button onClick={() => { nav('/myProfile', { state: `${user.id}` }); }} className="bg-green-500">Show</button>
                                        </div>
                                        <div className="col-4 w-24">
                                            <button onClick={() => { handleUpdate(user) }} className="bg-blue-500">Update</button>
                                        </div>
                                        <div className="col-4 w-24" onClick={() => { handleDelete(user.id) }}>
                                            <button className="bg-red-500">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }



            </div>
            
        </>
    );
}

export default Users;