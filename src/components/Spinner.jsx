import React from 'react'
import './Spinner.css'

export function Spinner (props) {
  return(
    <svg className="Spinner" viewBox="0 0 50 50">
      <circle className="SpinnerPath" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
  )
}
