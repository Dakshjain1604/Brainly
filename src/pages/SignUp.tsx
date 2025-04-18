import { useRef } from "react";
import axios from 'axios';
import { Input } from "../components/Input";
import { Button } from "../components/button";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
export function Signup() {

    const usernameRef = useRef<HTMLInputElement>();
    const PasswordRef = useRef<HTMLInputElement>();
    const navigate=useNavigate();
    function singup() {
        const username = usernameRef.current?.value;
        const password = PasswordRef.current?.value;
        axios.post(`${BACKEND_URL}` + "/api/v1/signup", {
            username,
            password
        })  
        
        navigate("/signin")
        alert("you have signed up")
    }
    return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        <div className="bg-white rounded border-0 min-w-48 flex flex-col p-6">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={PasswordRef} placeholder="Password" />
            <div className=" pt-4 pb-4">
                <Button onClick={singup} variant="primary" text="SignUp" fullWidth={true} loading={false} />
            </div>

        </div>
    </div>
}


