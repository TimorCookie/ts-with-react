import React,{useState,useEffect, useRef, useContext} from 'react';
import {themeContext} from '../App';

const LikeButton:React.FC = ()=> {
    const [obj,setobj] = useState({
        like: 0,
        on: true
    })


    const likeRef = useRef(0)
    const didMountRef = useRef(false)
    const domRef = useRef<HTMLInputElement>(null)
    const handleClick = ()=> {
        setTimeout(()=> {
            alert(`you have clicked for ${likeRef.current}次`)
        }, 3000)
    }

    const theme = useContext(themeContext)
    const style = {
        color: theme.color,
        background: theme.background
    }
    useEffect(()=> {
        console.log('document effect')
        document.title = `点击了${obj.like}次`
        console.log(likeRef.current)
        console.log('themeContext',theme)
    },[obj.like])

    useEffect(()=> {
        if(didMountRef.current) {
            console.log('this is updated')
        } else {
            didMountRef.current = true
        }
    })
    useEffect(()=> {
        if(domRef&&domRef.current) {
            console.log(domRef)
            domRef.current.focus()
        }
    })
    return(
        <>
            <button onClick={()=>{setobj({like: obj.like+1,on:obj.on});likeRef.current++}}>{obj.like}</button>
            <button style={style} onClick={()=>{setobj({like: obj.like,on:!obj.on})}}>{obj.on?'ON':'OFF'}</button>
            <button onClick={handleClick}>Alert!</button>
            <input type="text" ref={domRef}/>
        </>
        
    )
}



export default LikeButton