import "./ExitButton.css"

export default function ExitButton(){

    function handleExit(){
        console.log("EXIT");
    }

    return (
        <>
            <button className="button-82-pushable" onClick={handleExit}>
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
                ESC
            </span>
            </button>
        </>
    )
}