import TextInput from "./components/TextInput/TextInput";

import ".././public/stylesheets/styles.css";

export function App() {

  TextInputProps={
    label: "Text Input",
    placeholder: "placeholder",
  }

  return (
    <div id="app">
      <h1>Component Library</h1>
      <TextInput 
        props={TextInputProps}
      />
    </div>
  )
}