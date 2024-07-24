import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormCompo from "./Components/FormCompo"

export default function Login(){
    const nav = useNavigate();
    const [user,setUser] = useState({email:'',pass:'',utype:'c'});
    const TestFun = (e) =>{
        nav("/staff");
    }
    const submithandler = (e)=>{
        e.preventDefault();
        console.log(e);
    }
    const userHanlder = (propertyName,newVal)=>{
        setUser((prevUser)=>{
            return {...prevUser,[propertyName]:newVal};
        })
    }
    const inputHandler = (e)=>{
        userHanlder(e.target.name,e.target.value);
    }
    const LoginForm = {
        formContent:[
            {name:'email',type:'email',placeHolder:'Email',value:user.email,required:true,disable:false, inputfunction:inputHandler},
            {name:'pass',type:'password',placeHolder:'Password',value:user.pass,required:true,disable:false, inputfunction:inputHandler},
            {name:'utype',type:'select',placeHolder:'Select Login Type',required:true,disable:false,defaultVal:user.utype,options:[{label:'Client',val:'c'},{label:'Staff',val:'s'}], inputfunction:inputHandler},
        ],
        formButtons:[
            {type:'submit',label:'Login',color:'primary'}
        ]
    };
    return(
        <>
        <div className="col-4">
            <FormCompo inputPattern={LoginForm} submitHandler={submithandler}/>
        </div>
        <h1>{user.email} {user.pass} {user.utype}</h1>
        </>
    )
}