import { useCallback, useState, type ReactNode } from "react";
import type { TestimonyInfo } from "../lib/definitions";

export default function TestimonyList({testimonies}: {testimonies: TestimonyInfo[]}) {
    const [hidden, setHidden] = useState(0);
    
    const handleTestimonySlide = useCallback((index: string | number) =>{
        if (typeof index != "number") {
            return "error"
        }
        setHidden(index);
        /* create a tailwind transition variable that adds classes to the li item */
    }, []);
    return(
        <ul className="list-none pt-[6.5rem] px-[4%] lg:px-0 grid grid-flow-row-dense lg:grid-flow-col lg:w-full lg:gap-8 lg:overflow-scroll">
            {testimonies.map((testimony: TestimonyInfo, index: number) => 
            (<>
                <li key={index} className={`${hidden == index? "flex": "hidden lg:flex"} relative lg:w-[512px] flex pt-20 flex-col justify-center items-center`}>
                    <img src={testimony.user_icon} className="absolute top-0" alt={`user ${testimony.user_name}`} />
                    <div className="text-center pt-20 bg-very-light-gray">
                        <p className="font-bold">{testimony.user_name}</p>
                        <p className="text-">{testimony.testimony}</p>
                    </div>
                </li>
            </>))} 
            <div className="flex w-full justify-center">
                {testimonies.map((testimony: TestimonyInfo, index: number) => 
                (<>
                <input className="text-bright-red bg-bright-red lg:hidden" type="radio" onClick={() => handleTestimonySlide(index)} checked={hidden == index? true: false} name="testimony scroll" id={`${testimony.user_name}-radio`} />
                </>))}
            </div>
        </ul>

    )
}