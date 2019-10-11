const initialState = {
  count: 0,
  clickCount:0,
  resetNumber: ''
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clickCount : state.clickCount + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clickCount : state.clickCount + 1
      };
      case 'RESET':
        return {
          ...state,
          count: state.count,
          resetNumber: action.count
        };
        case 'CHANGE':
          return{
            ...state,
            count: parseInt(state.resetNumber),
            clickCount: 0
          };
    default:
      return state;
  }
}

export default counterReducer;