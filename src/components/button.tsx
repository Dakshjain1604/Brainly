import { ReactElement } from "react";

interface ButtonProps{
    variant:"primary" | "secondary";
    text:string;
    startIcon?:ReactElement;
    onClick?:()=>void;
    fullWidth?:boolean
    loading?:boolean
}

const variantClasses={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600"
}

const defaulstyles=" flex justify-center items-center px-4 py-2 rounded-md font-light cursor-pointer"

export function Button({variant,text,startIcon,onClick,fullWidth,loading}:ButtonProps){
    return <button onClick={onClick} className={variantClasses[variant] +" "+ defaulstyles + `${fullWidth ? " w-full flex justify-center" :" "} ${ loading? " opacity-40":" "}`} >
        <div className="pr-2 ">{startIcon}</div>
        {text}
    </button>
}


