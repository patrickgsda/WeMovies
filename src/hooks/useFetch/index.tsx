import { useReducer } from 'react';
import { REQUEST_STATUS } from '../../constants';

type Action<T> = {
  type: string;
  response?: T;
  error?: any;
};

export type State<T> = {
  status: string;
  error?: any;
  response?: T;
};

const initialState: State<any> = {
  status: REQUEST_STATUS.IDLE,
  error: null,
  response: null,
};

function reducer<T>(state: State<T>, action: Action<T>) {
  switch (action.type) {
    case 'error':
      return {
        ...state,
        status: REQUEST_STATUS.REJECTED,
        error: action.error,
      };
    case 'success':
      return {
        ...state,
        status: REQUEST_STATUS.RESOLVED,
        response: action.response,
      };
    case 'started':
      return {
        ...state,
        status: REQUEST_STATUS.PENDING,
      };
    default:
      return state;
  }
}

const useFetch = <T, U>(callback: (data?: U) => Promise<T>) => {
  const [state, dispatch] = useReducer<(state: State<T>, action: Action<T>) => State<T>>(
    reducer,
    initialState
  );

  const fetchData = (data?: U) => {
    dispatch({ type: 'started' });

    callback(data)
      .then((response: T) => {
        dispatch({ type: 'success', response });
      })
      .catch((error) => {
        dispatch({ type: 'error', error });
      });
  };

  return { state, fetchData };
};

export default useFetch;
