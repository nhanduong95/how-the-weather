import { ACTION } from './const';

export const fetchCurrentForecast = params => {
  return ({ type: ACTION.FETCH_CURRENT_FORECAST, params });
}

export const handleCurrentForecast = resp => {
  return ({ type: ACTION.HANDLE_CURRENT_FORECAST, resp });
}

export const fetchMultiCurrentForecast = params => {
  return ({ type: ACTION.FETCH_MULTI_CURRENT_FORECAST, params });
}

export const handleMultiCurrentForecast = resp => {
  return ({ type: ACTION.HANDLE_MULTI_CURRENT_FORECAST, resp });
}