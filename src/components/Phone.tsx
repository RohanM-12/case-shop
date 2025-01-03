import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}
const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
    return (<div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}{...props}>
        <img className="pointer-events-none z-50 select-none" src={dark ? "/img/phone-dark.png" : "/img/phone-white.png"} alt="phone template" />
        <div className="absolute -z-10 inset-0">
            <img className="object-cover" src={imgSrc} alt="overlayed phone image" />
        </div>
    </div >);

}

export default Phone