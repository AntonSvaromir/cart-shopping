import "./style.scss"
function Button({title, onClick}) {
   return ( <button className="btn" onClick={onClick}>{title}</button> );
}

export default Button;