import React from 'react'

function HookChange() {
    const [count, countChange] = useState(0)
  return (
    <div>
        <button onClick={() => countChange(count + 1)}>Next</button>
    </div>
  )
}

export default HookChange
