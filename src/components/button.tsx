
const Button = ({classes, text}: {classes: string | null, text: string}) => {

    return(
        <>
            <button className={`${classes} bg-bright-red`}>
                {text}
            </button>
        </>
    )
}

export default Button