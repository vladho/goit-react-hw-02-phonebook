import "./App.css"
import react, { Component } from "react"
// import shortid from "shortid"
import Phonebook from "./components/Phonebook/Phonebook"
import Contacts from "./components/Contacts/Contacts"
import Section from "./components/Section/Section"
import { v4 as uuidv4 } from "uuid"
import Filter from "./components/Filter/Filter"

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  }

  // generateId = shortid.generate()
  test = 1

  submitForm = (data) => {
    console.log(data)
    this.setState({ contacts: [...this.state.contacts, data] })
  }

  render() {
    // console.log(this.state.contacts.length)
    return (
      <>
        <Section title="Phonebook">
          <Phonebook onSubmit={this.submitForm} />
        </Section>
        <Section title="Contacts">
          <Filter />
          {this.state.contacts.map((el) => (
            <ul key={uuidv4()} className="contacts__name">
              <Contacts contacts={el} />
            </ul>
          ))}
        </Section>
      </>
    )
  }
}

export default App
