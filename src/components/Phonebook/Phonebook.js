import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from "./Phonebook.module.css"

class Phonebook extends Component {
  state = {}
  render() {
    return (
      <div className={styles.phonebook}>
        <form>
          <h2>Phonebook</h2>
          <label>
            <p>Name</p>
            <input className={styles.inpt} />
          </label>
          <button className={styles.btn}>Add contact</button>
        </form>
      </div>
    )
  }
}

Phonebook.propTypes = {}

export default Phonebook
