import Button from "./button";
import illustration from "/illustration-intro.svg";
import { TestimonyInfo } from "../lib/definitions";
import Avatar1 from "/avatar-anisha.png";
import Avatar2 from "/avatar-ali.png";
import Avatar3 from "/avatar-richard.png";
import Avatar4 from "/avatar-shanai.png";

import TestimonyList from "./testimony";

const testimonies: TestimonyInfo[] = [
    {user_name:"Anisha Li", user_icon: Avatar1, testimony: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"},
    {user_name:"Ali Bravo", user_icon: Avatar2, testimony: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"},
    {user_name:"Richard Watts", user_icon: Avatar3, testimony: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"},
    {user_name:"Shanai Gough", user_icon: Avatar4, testimony: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"}
]


export default function Main() {

    return (
        <>
            <div className="pt-7 px-[4%] grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
                 <Landing/>
            </div>
            <div className="pt-9 grid lg:px-[4%] md:grid-cols-2">
                 <Articles/>
            </div>
            <div className="pt-7">
                <Testiomny/>
            </div>
        </>
    )
};

const Landing = () => {

    return(
        <>
            <div className="order-last md:pt-[2.5rem] lg:pt-[3rem] xl:pt-[4.5rem] text-center md:order-first">
                <div>
                    <p className="font-bold md:text-[2.1rem] lg:text-[2.6rem] xl:text-[3.3rem] text-left md:w-[85%] lg:w-[95%] my-0 leading-[1.15] indent-4 md:indent-0 text-[2.43rem]">Bring everyone together to build better products.</p>
                    <br/>
                    <p className="text-left text-[1.18rem] md:px-0 my-0 md:text-[0.73rem] lg:text-[0.97rem] xl:text-[1.1rem] md:w-[70%] lg:w-[67%] xl:w-[65%]">Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.</p>
                </div>
                <br/>
                <div className="flex w-full md:justify-start justify-center">
                    <Button classes={""} text="Get Started" />
                </div>
            </div>
            <img src={illustration} className="md:order-last order-first w-[100%] h-auto" alt="Illustration Image" />
        </>
    )
}

const Articles = () => {
    return(
        <>
            <div className=" px-[4%] lg:px-0">
                <p className="font-bold m-0 text-center md:text-left lg:w-[80%] xl:w-[80%] xl:text-5xl text-[2.65rem]">What’s different about Manage?</p>

                <p className="text-center text-base md:text-[0.73rem] lg:text-[0.97rem] xl:text-[1.1rem] md:text-left md:w-[80%] lg:w-[75%] xl:w-[65%]">Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams.</p>
            </div>
            <div className="list-none w-full pt-8">
                <li className="">
                    <div className="pl-4 md:pl-0">
                        <div className="rounded-l-full bg-very-Pale-Red lg:bg-white w-full">
                            <Button classes={"py-2 px-[1.6rem]"} text="01" />
                            <span className="px-4 lg:px-3">Track company-wide progress</span>
                        </div>
                    </div>
                    <p className="px-[2%] lg:pl-20">See how your day-to-day tasks fit into the wider vision. Go from 
                    tracking progress at the milestone level all the way done to the 
                    smallest of details. Never lose sight of the bigger picture again.</p>
                </li>

                <li>
                    <div className="pl-4 md:pl-0">
                        <div className="rounded-l-full bg-very-Pale-Red lg:bg-white w-full">
                            <Button classes={"py-2 px-[1.6rem]"} text="02" />
                            <span className="px-4 lg:px-3">Advanced built-in reports</span>
                        </div>
                    </div>
                    <p className="px-[2%] lg:pl-20">Set internal delivery estimates and track progress toward company 
                    goals. Our customisable dashboard helps you build out the reports 
                    you need to keep key stakeholders informed.</p>
                </li>

                <li>
                    <div className="pl-4 md:pl-0">
                        <div className="rounded-l-full bg-very-Pale-Red lg:bg-white w-full">
                            <Button classes={"py-2 px-[1.6rem]"} text="03" />
                            <span className="px-4 lg:px-3">Everything you need in one place</span>
                        </div>
                    </div>
                    <p className="px-[2%] lg:pl-20">Stop jumping from one service to another to communicate, store files, 
                    track tasks and share documents. Manage offers an all-in-one team 
                    productivity solution.</p>
                </li>
            </div>
        </>
    )
}

const Testiomny = () => {
    return(
        <>
        <p className=" px-[4%] font-bold m-0 text-center md:text-5xl text-4xl">What they've said</p>
        <TestimonyList testimonies={testimonies} />
        <div className="flex w-full justify-center">
            <Button classes={""} text="Get Started" />
        </div>
        </>
    )
}