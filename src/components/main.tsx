import Button from "./button";
import illustration from "/illustration-intro.svg";

export default function Main() {

    return (
        <>
            <div className="pt-7 px-[4%] grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
                 <Landing/>
            </div>
            <div className="grid grid-rows-1 grid-cols-2">
                 <Articles/>
            </div>
            <div>
                <Testiomny/>
            </div>
        </>
    )
};

const Landing = () => {

    return(
        <>
            <div className="order-last text-center md:order-first">
                <div>
                    <p className="font-bold md:text-[2.1rem] lg:text-[2.8rem] md:text-left md:w-[80%] my-0 leading-[1.15] text-[2.4rem]">Bring everyone together to build better products.</p>
                    <br/>
                    <p className="text-left my-0 md:text-[0.975rem] md:w-[70%]">Manage makes it simple for software teams to plan day-to-day 
                    tasks while keeping the larger team goals in view.</p>
                </div>

                <Button classes={""} text="Get Started" />
            </div>
            <img src={illustration} className="md:order-last order-first w-[100%] h-auto" alt="Illustration Image" />
        </>
    )
}

const Articles = () => {
    return(
        <>
            <div>
                What’s different about Manage?

                Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams. 
            </div>
            <ul>
                <li>
                    <Button classes={""} text="01" />
                    Track company-wide progress
                    See how your day-to-day tasks fit into the wider vision. Go from 
                    tracking progress at the milestone level all the way done to the 
                    smallest of details. Never lose sight of the bigger picture again.
                </li>

                <li>
                    <Button classes={""} text="02" />
                    Advanced built-in reports
                    Set internal delivery estimates and track progress toward company 
                    goals. Our customisable dashboard helps you build out the reports 
                    you need to keep key stakeholders informed.
                </li>

                <li>
                    <Button classes={""} text="03" />
                    Everything you need in one place
                    Stop jumping from one service to another to communicate, store files, 
                    track tasks and share documents. Manage offers an all-in-one team 
                    productivity solution.
                </li>
            </ul>
        </>
    )
}

const Testiomny = () => {
    return(
        <>
        <h3>What they've said</h3>
        <ul>
            <li>
                Anisha Li
                “Manage has supercharged our team’s workflow. The ability to maintain 
                visibility on larger milestones at all times keeps everyone motivated.”
            </li>

            <li>
                Ali Bravo
                “We have been able to cancel so many other subscriptions since using 
                Manage. There is no more cross-channel confusion and everyone is much 
                more focused.”
            </li>

            <li>
                Richard Watts
                “Manage allows us to provide structure and process. It keeps us organized 
                and focused. I can’t stop recommending them to everyone I talk to!”
            </li>

            <li>
                Shanai Gough
                “Their software allows us to track, manage and collaborate on our projects 
                from anywhere. It keeps the whole team in-sync without being intrusive.”
            </li>
        </ul>
        <Button classes={""} text="Get Started" />
        </>
    )
}