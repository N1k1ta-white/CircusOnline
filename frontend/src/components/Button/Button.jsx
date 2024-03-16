import './Button.css'

export default function Button({children, ...props}){
    return(
        <button className="button-index" {...props}>{children}</button>
    )
}