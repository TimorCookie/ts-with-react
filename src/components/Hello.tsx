import React from 'react';


interface IHelloProps {
    message?: string;
}

const Hello:React.FunctionComponent<IHelloProps> = (props)=> {
    return (
    <div>{props.message}</div>
    )
}

Hello.defaultProps = {
    message: 'hello world'
}


export default Hello