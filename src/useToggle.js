import {useReducer} from "react";

const initState = {
  count: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        count: state.count + action.payload
      }
    case 'RES':
      return {
        count: 0
      }
  }
}

export function useToggle(colors) {
  const [value, dispatch] = useReducer(reducer, initState);

  function toggle() {
    if (value.count < colors.length - 1) {
      dispatch({
        type: 'NEXT',
        payload: 1
      });
    } else {
      dispatch({
        type: 'RES'
      });
    }
  }

  return [colors[value.count], toggle];
}