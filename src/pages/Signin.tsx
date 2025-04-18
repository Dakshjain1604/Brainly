import { Input } from "../components/Input";
import { Button } from "../components/button";
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin() {
    const usernameRef = useRef<HTMLInputElement>();
    const PasswordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();
    async function signin() {
        const username = usernameRef.current?.value;
        const password = PasswordRef.current?.value;
        const response = await axios.post(`${BACKEND_URL}` + "/api/v1/signin", {
            username,
            password
        })
        console.log(response)
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/DashBoard");

    }
    return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        <div className="bg-white rounded border-0 min-w-48 flex flex-col p-6">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={PasswordRef} placeholder="Password" />
            <div className=" pt-4 pb-4">
                <Button onClick={signin} variant="primary" text="Signin" fullWidth={true} loading={false} />
            </div>
        </div>
    </div>
}


