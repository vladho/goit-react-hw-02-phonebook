import React from "react"
import PropTypes from "prop-types"
import styles from "./Contacts.module.css"

const Contacts = ({ contacts }) => {
  return <div className={styles.contacts}>{contacts}</div>
}

Contacts.propTypes = {}

export default Contacts
