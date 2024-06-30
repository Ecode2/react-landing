
const Button = ({classes, text}: {classes: string | null, text: string}) => {

    return(
        <>
            <button className={` bg-bright-red py-3 px-8 text-base text-white font-bold rounded-full border-0 ${classes}`}>
                {text}
            </button>
        </>
    )
}

export default Button