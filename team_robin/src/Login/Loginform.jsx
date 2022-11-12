import React, { useEffect } from "react"
import { useState } from "react"
import {useDispatch,useSelector} from "react-redux"
import styles from './login.module.css'
import {useNavigate} from "react-router-dom"
import { userLogin } from "../AuthReducer/action"
import { getProductData } from "../ProductReducer/action";

const LoginForm = () => {
    const dispatch=useDispatch();
    const fxData=useSelector((state)=>state.Auth);
    const data=useSelector((state)=>state.Prod)
    const {productData}=data;
    useEffect(()=>{
        dispatch(getProductData(1))
    },[])

    const {isAuth,isErrorLogin}=fxData
    console.log("isAuth"+isAuth)
    console.log("isAut"+isAuth)
    // console.log(isAuth)
    
    const Navigate=useNavigate()
    const [email, setEmail] = useState("bkc@gmail.com");
    const [password,setPassword]=useState(12345678)

   
    const handledSubmit = (e) => {
        e.preventDefault();
        const user={
            email,
            password,
        }
          dispatch(userLogin(user));
        //   Navigate("/")
        console.log(user)
     }
    return (
        <>
            <form className={styles.form}>
                <label>EMAIL ADDRESS</label>
                <input type="text" className={styles.input}
                    name="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <label>PASSWORD</label>
                <input type="password" className={styles.input}
                 value={password}
                 name="password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <button className={styles.signInBtn} onClick={handledSubmit}>SIGN IN</button>
            </form>
        </>
    )
}
export default LoginForm;