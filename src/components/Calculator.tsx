import { useReducer } from 'react'
import Button from './Button'
import { counterReducer } from '../reducers/counter'

export default function Calculator() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
  })

  return (
    <div className="p-4">
      <p className="text-white">Calcultor</p>
      <p className="text-white">{state.count}</p>
      <ul>
        <li>
          <Button onClick={() => dispatch({ type: 'plusOne' })} variant="solid">
            +1
          </Button>
        </li>
        <li>
          <Button
            onClick={() => dispatch({ type: 'minusOne' })}
            variant="solid"
          >
            -1
          </Button>
        </li>
        <li>
          <Button onClick={() => dispatch({ type: 'plus100' })} variant="solid">
            Set +100
          </Button>
        </li>
        <li>
          <Button
            onClick={() => dispatch({ type: 'minus100' })}
            variant="solid"
          >
            Set -100
          </Button>
        </li>
      </ul>
    </div>
  )
}
