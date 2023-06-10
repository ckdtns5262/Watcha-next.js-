import React from "react";

interface InputProps {
    id : string;
    name : string;
    onChange : any;
    value : string;
    type? : string;
    placeholder : string;
    autoComplete : string;
}





const Input:React.FC<InputProps> = ({id, onChange, value, type, placeholder, name, autoComplete}) => {
    return ( 
    <div className="m-0">
        <input
        id={id}
        onChange={onChange}
        autoComplete ="on"
        value={value}
        name={name}
        type={type}
        className ="rounded-sm w-[20rem] h-11 text-md bg-white text-black focus:outline-none appearance-none px-3 py-2"
        placeholder={placeholder}
        />
    </div> 
    );
}
 
export default Input;