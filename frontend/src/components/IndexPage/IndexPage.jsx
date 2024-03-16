import Button from "../Button/Button";
import './IndexPage.css'
import Input from "../Input/Input";
export default function IndexPage(){
    return (
        <section className="button-index-container">
            <section className="button-index-section">
                <div class="inputButton">
                    <Input id = "inputCode" />
                    <Button id ="inputButton">Enter</Button>
                    <Button id ="createButton">Create your Room</Button>
                </div>
            </section>
        </section>
)
}