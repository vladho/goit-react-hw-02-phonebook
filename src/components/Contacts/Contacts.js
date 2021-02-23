import React from "react"
import PropTypes from "prop-types"
import styles from "./Contacts.module.css"
import { v4 as uuidv4 } from "uuid"

const Contacts = ({ contacts }) => {
  const { name, number } = contacts
  return (
    <>
      <li className={styles.name}>
        {name}: {number}
      </li>
    </>
  )
}

Contacts.propTypes = {}

export default Contacts
