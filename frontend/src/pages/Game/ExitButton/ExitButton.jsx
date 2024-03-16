import "./ExitButton.css"

export default function ExitButton(){

    function handleExit(){
        console.log("EXIT");
    }

    return (
        <>
            <button class="button-82-pushable" onClick={handleExit}>
            <span class="button-82-shadow"></span>
            <span class="button-82-edge"></span>
            <span class="button-82-front text">
                ESC
            </span>
            </button>
        </>
    )
}