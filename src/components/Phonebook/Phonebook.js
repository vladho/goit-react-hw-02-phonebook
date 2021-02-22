import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from "./Phonebook.module.css"
// import shortid from "shortid"

class Phonebook extends Component {
  state = {
    // id: "",
    message: "",
  }

  //   generateId = shortid.generate()

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)

    this.reset()
  }

  onIputChange = (e) => {
    this.setState({ message: e.currentTarget.value })
  }

  reset = () => {
    this.setState({ message: "" })
  }
  render() {
    return (
      <div className={styles.phonebook}>
        <form onSubmit={this.handleSubmit}>
          <h2>Phonebook</h2>
          <label>
            <p>Name</p>
            <input type="text" value={this.state.message} className={styles.inpt} onChange={this.onIputChange} />
          </label>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
      </div>
    )
  }
}

Phonebook.propTypes = {}

export default Phonebook
