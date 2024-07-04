type IState = {
  count: number
}

type Action =
  | {
      type: 'plusOne'
    }
  | {
      type: 'minusOne'
    }
  | {
      type: 'plus100'
    }
  | {
      type: 'minus100'
    }

export function counterReducer(state: IState, action: Action) {
  switch (action.type) {
    case 'plusOne': {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    case 'minusOne': {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    case 'plus100': {
      return {
        ...state,
        count: state.count + 100,
      }
    }
    case 'minus100': {
      return {
        ...state,
        count: state.count - 100,
      }
    }
    default:
      return state
  }
}
