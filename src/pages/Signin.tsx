import { Input } from "../components/Input";
import { Button } from "../components/button";
export function Signin() {
    return <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
        <div className="bg-white rounded border-0 min-w-48 flex flex-col p-6">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <div className=" pt-4 pb-4">
                <Button variant="primary" text="Signin" fullWidth={true} loading={false}/>
            </div>

        </div>
    </div>
}


