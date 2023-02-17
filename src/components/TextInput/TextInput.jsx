
const TextInput = ({ props }) => {
  return (
    <div id="textInput">

      <label className="textInput-label" for="textInput-input">{props.label}</label>
      <input 
      id="textInput-input"
      type="text"
      placeholder={props.placeholder}
    />
    </div>
  )
}

export default TextInput;