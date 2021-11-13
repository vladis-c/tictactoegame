import React from "react"
import styles from "./Sqare.module.css"

/* CHAGNE STYLING */

function Square({ value, onClick }) {
  // props object desctructuring method, then no need for props
  return (
    <button
      className={`${styles.button} ${value && styles.filled}`}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Square
