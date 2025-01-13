import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
    const lower = word.toLowerCase();
    const n1 = lower.charAt(0).toUpperCase();
    return n1+lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
  )
}
