
import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./button";
import { Input } from "./Input";
export function CreateContentModal({ open, onClose }) {
    
    return <div className="p-4">
        
        {open && <div className="w-screen h-screen fixed top-0 left-0 bg-gray-600/60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100  p-4 rounded-xl ">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer ">
                            <CrossIcon />
                        </div>
                    </div>
                    <div>
                        <Input placeholder={"Title"} />
                        <Input placeholder={"link"} />
                    </div>
                    <div className="flex justify-center">
                        <Button className="pr-2" variant="primary" text="Submit" />
                    </div>
                </span>
            </div>
        </div>}
    </div>
}


