import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from "./Phonebook.module.css"
import { v4 as uuidv4 } from "uuid"

class Phonebook extends Component {
  initialState = {
    name: "",
    number: "",
  }
  state = {
    ...this.initialState,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.reset()
  }

  onInputChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value, id: uuidv4() })
  }

  reset = () => {
    this.setState({ ...this.initialState })
  }
  render() {
    return (
      <div className={styles.phonebook}>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input type="text" value={this.state.name} name="name" className={styles.inpt} onChange={this.onInputChange} />
          </label>
          <label>
            <p>Number</p>
            <input type="text" value={this.state.number} name="number" className={styles.inpt} onChange={this.onInputChange} />
          </label>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
      </div>
    )
  }
}

Phonebook.propTypes = {
  props: PropTypes.string,
}

export default Phonebook