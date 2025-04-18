import { BinIcon } from "../icons/binIcons";
import { ShareIcon } from "../icons/shareIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";
interface CardProps {
    title: string;
    link: string;
    type: "Twitter" | "Youtube"
}
export function Card({ title, link:originalLink, type }: CardProps) {
    let link = originalLink;
    if (type === "Twitter") {
        link = link.replace(
            /^(?:https?:\/\/)?(?:www\.)?x\.com/, 
            "https://twitter.com"
        );
    }
    return <div>
        <div className="bg-white p-8 rounded-md shadow-md border-gray-100 max-w-72 border min-h-48 min-w-72 ">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-4"><ShareIcon /></div>{title}
                </div>
                <div className="flex items-center">
                    <div className="text-gray-500 pr-2"><a href={link} target="_blank"><ShareIcon /></a></div>
                    <div  onClick={async () => {
          const response = await axios.delete(`${BACKEND_URL}/api/v1/brain/share`, {
            share: true
          }, {
            headers: {
              "Authorization": localStorage.getItem("token")
            }
          });
          const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
          alert(shareUrl);
        }} className="text-gray-500"><BinIcon/></div>
                </div>
            </div>
            <div className="justify-center items-center flex pt-2 ">
                {type === "Youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {type === "Twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>
        </div>
    </div>
}