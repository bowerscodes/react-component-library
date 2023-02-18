import Button from "./components/Button/Button"
import TextInput from "./components/TextInput/TextInput";

import ".././public/stylesheets/styles.css";

export function App() {

  ButtonProps={
    primary: true,
    backgroundColor: 'rgba(255, 255, 255)',
    size: 'medium',
    label: 'Button',
  }

  TextInputProps={
    id: "text-input",
    label: "Text Input",
    placeholder: "placeholder",
  }

  return (
    <div id="app">
      <h1>Component Library</h1>
      <Button 
        primary={ButtonProps.primary}
        backgroundColor={ButtonProps.backgroundColor}
        size={ButtonProps.size}
        label={ButtonProps.label}
      />
      <TextInput 
        props={TextInputProps}
      />
    </div>
  )
}