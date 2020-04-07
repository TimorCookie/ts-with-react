import {useState,useEffect} from 'react';


const useMousePosition = ()=> {
    const [positions, setPositions] =  useState({x:0,y:0})
    const updatePositions = (e:MouseEvent)=> {
        setPositions({x:e.clientX,y:e.clientY})
    }
    useEffect(() => {
        document.addEventListener('click', updatePositions)
        return () => {
            document.removeEventListener('click',updatePositions);
        };
    }, []);

    return positions
}


export default useMousePosition;