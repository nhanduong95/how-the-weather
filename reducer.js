import { ACTION } from './const';

const initalState = {
  weatherForecast: []
}

const reducerStore = (state = initalState, action) => {
  switch (action.type) {
    case ACTION.HANDLE_CURRENT_FORECAST:
      return {
        ...state,
        weatherForecast: [action.resp]
      }
    case ACTION.HANDLE_MULTI_CURRENT_FORECAST:
      return {
        ...state,
        weatherForecast: action.resp
      }
    default: {
      return state;
    }
  }
}

export default reducerStore;