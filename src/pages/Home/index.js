import {useEffect, useRef, useState} from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import './index.css'

async function updateData(data){
    await fetch("http://127.0.0.1:3001/posts/1", {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({data})
    })
}



export default function Home(){
    const [data,setData] = useState([])
    let start = useRef(false)
    // useEffect(()=>{
    //     //会打印两次开始，第一次是data的初始化，第二次是data从json-server得到数据时
    //     if(!start.current){
    //         console.log("开始")
    //         return
    //     }
    //     updateData(data)
    //         .then(_=>console.log("update"))
    // },[data])

    // useEffect(()=>{
    //     fetch("http://127.0.0.1:3001/posts/1")
    //         .then(res=>{
    //             return res.json()
    //         })
    //         .then(data=>{
    //             setData(data.data)
    //         })
    //     setTimeout(()=>{
    //         start.current=true
    //     },3000)
    // },[])
    return (
        <div className="container">
            <div className="title">
                备忘录
            </div>
            <Edit addData={setData}/>
            <hr/>
            <List data={data} setData={setData}/>
        </div>
    )
}




