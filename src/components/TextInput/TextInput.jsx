
const TextInput = ({ 
  props
 }) => {
  
  return (
    <div id="textInput">

      <label className="input-label" for={props.id}>{props.label}</label>
      <input 
      id={props.id}
      type="text"
      placeholder={props.placeholder}
    />
    </div>
  )
}

export default TextInput;