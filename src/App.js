import "./App.css"
import react, { Component } from "react"
// import shortid from "shortid"
import Phonebook from "./components/Phonebook/Phonebook"
import Contacts from "./components/Contacts/Contacts"

class App extends Component {
  state = {
    contacts: [],
    name: "",
  }

  // generateId = shortid.generate()
  test = 1

  submitForm = (data) => {
    this.setState({ contacts: [...this.state.contacts, data] })
  }

  render() {
    console.log(this.state.contacts.length)
    return (
      <>
        <Phonebook onSubmit={this.submitForm} />
        {this.state.contacts.map((el) => (
          <Contacts contacts={el.message} />
        ))}
      </>
    )
  }
}

export default App
