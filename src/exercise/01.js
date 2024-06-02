import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  const [{count}, dispatch] = React.useReducer(counterReducer, {
    count: initialCount,
  })

  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function counterReducer(currentCount, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: currentCount.count + action.step,
      }
  }
}

function App() {
  return <Counter />
}

export default App
