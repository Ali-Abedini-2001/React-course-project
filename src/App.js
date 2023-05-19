import "./App.css"
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './pages/dashbord';
import UserV from './pages/user';
import MyProfile from './pages/myProfile';
import Login from './pages/login';
import User from './pages/users';
import {
  Route,
  Link,
  BrowserRouter,
  Routes,
  NavLink
} from "react-router-dom";
export default function App() {

  const [loggedInStatus, setLoggedInStatus] = useState("Not_logged_in");
  const [user, setUser] = useState({});
  const notifyUser = () => {
    toast.success('User exists!', {
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
  const notifyNoUser = () => {
    toast.danger('No user!', {
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
  const checkLoginStatus = () => {
    axios.get('http://localhost:3000/', { withCredentials: true })
      .then((res) => {
        if (res.data.logged_in && loggedInStatus === "Not_logged_in") {
          setLoggedInStatus("logged_in");
          setUser(res.data.user)
          notifyUser();
        } else if (!res.data.logged_in & loggedInStatus === "logged_in") {
          setLoggedInStatus("Not_logged_in")
          setUser({})
          notifyNoUser();
        }

        // console.log("logged in ?", res);
      })
      .catch((err) => { console.log("check login error", err); });
  }
  useEffect(() => {
    checkLoginStatus();
  }, [])
  const menu = [
    {
      id: 0,
      icon: "fa fa-sign-in fa-2x",
      title: "ورود کاربر",
      route: "/login",
      component: <Login />
    },
    {
      id: 1,
      icon: "fa fa-user fa-2x",
      title: "پروفایل",
      route: "/myProfile",
      component: <MyProfile />
    },
    {
      id: 2,
      icon: "fa fa-home fa-2x",
      title: "داشبورد",
      route: "/dashbord",
      component: <Dashbord />
    },
    {
      id: 4,
      icon: "fa fa-users fa-2x",
      title: " کاربر ها",
      route: "/users",
      component: <User />
    }

    // {
    //   id: 2,
    //   icon: "fa fa-folder-open fa-2x",
    //   title: "کلاسهای من",
    //   route: "/myClass",
    //   component: <MyClass />
    // },
    // {
    //   id: 3,
    //   icon: "fa fa-bar-chart-o fa-2x",
    //   title: "کلاسهای جاری",
    //   route: "/myClass/currentClass",
    //   component: <MyClass />
    // },
    // {
    //   id: 4,
    //   icon: "fa fa-check fa-2x",
    //   title: "کلاسهای سابق",
    //   route: "/myClass/advanceClass",
    //   component: <MyClass />
    // },
    // {
    //   id: "",
    //   title: "ثبت نام",
    //   route: "/register",
    //   component:<Register/>
    // }

  ];

  return (
    <div className="app">
      <BrowserRouter>
        <div className="area"></div><nav className="main-menu bg-purple-800">
          <ul>
            {menu.map((item) => (
              <li key={item.id}>
                <NavLink to={item.route}>
                  <i className={item.icon}></i>
                  <span className="nav-text">
                    {item.title}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="logout">
            <li>
              <Link to="/login">
                <i className="fa fa-power-off fa-2x"></i>
                <span className="nav-text">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </nav>


        <Routes>
          {/* {
            menu.map((item) => <Route path={item.route} element={item.component}></Route>)
          } */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Dashbord />}>
            <Route path="users" element={<User />} />
          </Route>
          <Route path="/myProfile" element={<MyProfile />}></Route>

          <Route path="/users" element={<User />}>
            <Route path=":id" element={<UserV />}></Route>
          </Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

