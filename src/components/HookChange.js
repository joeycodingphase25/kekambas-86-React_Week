import React from 'react'

function HookChange(props) {
  return (
    <div>
        <button onClick={() => props.setCount(props.count + 1)}>Next</button>
    </div>
  )
}

export default HookChange
