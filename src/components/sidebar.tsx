import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterICon";
import { YouTubeIcon } from "../icons/YoutubeIcons";
import { SideBarItem } from "./sidebarItem";

export function SideBar(){
    return <div className="h-screen bg-white border-r w-72  absolute left-0 top-0 pl-6">
        <div className="text-4xl pt-4 flex items-center left gap-2">
            <div className="text-purple-800"><BrainIcon/></div>
            Brainly
        </div>
        <div className="pt-4 ">
            <SideBarItem text="Twitter" icon={<TwitterIcon/>}></SideBarItem>
            <SideBarItem text="Youtube" icon={<YouTubeIcon/>}></SideBarItem>
        </div>
    </div>
}