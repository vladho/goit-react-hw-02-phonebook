import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from "./Filter.module.css"

class Filter extends Component {
  state = {
    filter: "",
  }

  onInputChange = (e) => {
    this.setState({ filter: e.target.value })
  }
  render() {
    return (
      <div className={styles.filter}>
        <label>
          <p>Find contacts by name</p>
          <input type="text" value={this.filter} onChange={this.onInputChange} className={styles.inpt} />
        </label>
      </div>
    )
  }
}

Filter.propTypes = {}

export default Filter
