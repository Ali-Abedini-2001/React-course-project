import React from "react";
import Table from "../components/table";
import { useState } from "react";

const MyClass = () => {
    const users = [
        {
            id: 1,
            title: "React-js",
            date: "1401/05/27",
            class: "React1",
            time: "پنجشنبه (14 الی 20)",
            actionflag: true
        },
        {
            id: 2,
            title: "React-js",
            date: "1401/06/02",
            class: "React2",
            time: "پنجشنبه (14 الی 20)",
            actionflag: true
        },
        {
            id: 3,
            title: "React-js",
            date: "1401/06/09",
            class: "React3",
            time: "پنجشنبه (14 الی 20)",
            actionflag: true
        },
        {
            id: 4,
            title: "React-js",
            date: "1401/06/16",
            class: "React4",
            time: "پنجشنبه (14 الی 20)",
            actionflag: true
        }
    ];
    const [userList, setUserlist] = useState(users);
    const mainTitle = ["ردیف", "عنوان", "تاریخ جلسه", "کلاس", "زمان برگزاری", "عملیات"];
    //const city = ["تهران", "ساری", "بندرعباس", "اهواز"];
    //const [cityList, setCityList] = useState(city);
    const [count, setcount] = useState(5);
    //const currentClass=["React1","React2"];
    // function filter_twoArrays(filter,result){

    //     for(let i=0; i< filter.length; i++){
    //       for(let j=0; j< result.length; j++){
    //         if(filter[i] !== result[j]){
    //           result.splice(j,1)
    //         }
    //       }
    //     }
    // }
    // const currentClassData = () => {
    //    let current = filter_twoArrays(currentClass,userList.class);
    //    return current
    // }

    const increase = () => {
        setcount(count + 1);
    }
    const decrease = () => {
        setcount(count - 1);
    }

    const removeItem = (id) => {
        const filterList = userList.filter((item) => item.id !== id);
        setUserlist(filterList);
    }
    const [data, setData] = useState();
    const handlechange = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
    }

    // const [formData,setFormData]=useState([]);

    // const sub = () => {
    //     return firstname+" "+lastname
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        let newData = JSON.stringify(data)
        localStorage.setItem("profileData", newData)
    }
    return (
        <div className="container myClassContainer">
            <div className="main">
                <div className="menu"><b className="padding">فهرست</b></div>
                <Table deleteItem={removeItem} userListProperty={userList} isActive={true} title={mainTitle} />
                <button className="countbtn1" onClick={increase}>+</button>
                <button className="countbtn2" onClick={decrease}>-</button>
                <input className="countNum" value={count} />
            </div>
            {/* collapse */}
            <div className="collapse-able">
                <div class='showHide'>
                    <input type="checkbox" id="toggle" />
                    <label for="toggle">
                        <span class='expand'>
                            <span class="change plus">+</span>
                            <span class="change mines">-</span>
                            نمایش فرم
                        </span>
                    </label>
                    <div class="fieldsetContainer">
                        <form onSubmit={(e) => { handleSubmit(e) }} className="form" id="fdstLorem" >
                            <label>نام:  </label>
                            <input placeholder="نام خود را وارد کنید"
                                value={data?.firstName} type="text" name="firstName"
                                onChange={(val) => {
                                    handlechange(val);
                                }} />
                            <label>نام خانوادگی:  </label>
                            <input placeholder="نام خانوادگی خود را وارد کنید"
                                value={data?.lastName} type="text" name="lastName"
                                onChange={(val) => {
                                    handlechange(val);
                                }} />
                            <label>جنسیت: </label>
                            <input onChange={(val) => { handlechange(val) }} name="gender" type="radio" value="female"></input>زن
                            <input onChange={(val) => { handlechange(val) }} name="gender" type="radio" value="male"></input>مرد
                            {/* <select>
                                {cityList.map(name => (
                                    <option value={cityList} onChange={(val)=>{
                                
                                        setCityList(val.target.value)
                                    }}>{name}</option>
                                ))}
                            </select> */}
                            <button className="btn1">ارسال</button>
                        </form>
                    </div>
                    <p className="formData">{data}</p>
                </div>
            </div>
        </div>);
}

export default MyClass;