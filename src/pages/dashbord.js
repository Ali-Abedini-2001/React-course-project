import React from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
const Dashbord = () => {
    const location = useLocation();
    const styles = {
        parentStyle: {
            width: '70%',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '10% auto'
        },
        divStyle: {
            width: '40%',
            height: '4rem',
            textAlign: 'center',
            borderRadius: '1rem'

        },
        firstDiv: {
            backgroundColor: 'red'
        },
        secondDiv: {
            backgroundColor: 'green'
        },
        aTag: {
            color: 'white',
            textDecoration: "none",
            lineHeight: '4rem',
            fontSize: '2rem'
        }
    }
    let { urlName } = useParams();
    // urlName === "/dashbord" ?
    //     (<Link to="/users"></Link>) :
    //     (<Link to="/dashbord"></Link>);

    return (<>
    <Outlet/>
        {/* <div style={styles.parentStyle}>
            <div style={{ ...styles.divStyle, ...styles.firstDiv }}><Link style={styles.aTag} to="/myClass/currentClass">کلاسهای جاری</Link></div>
            <div style={{ ...styles.divStyle, ...styles.secondDiv }}><Link style={styles.aTag} to="/myClass/advanceClass">کلاس های سابق</Link></div>
        </div> */}
       
    </>);
}

export default Dashbord;