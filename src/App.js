import "./App.css"
import react, { Component } from "react"
// import shortid from "shortid"
import Phonebook from "./components/Phonebook/Phonebook"

class App extends Component {
  state = {
    contacts: [],
    name: "",
  }
  render() {
    return (
      <>
        <Phonebook />
      </>
    )
  }
}

export default App
