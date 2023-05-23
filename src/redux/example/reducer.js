import * as types from './types';

const INITIAL_STATE = {
  userInfo: null,
  message: null,
  loading: false,
  transactions: null,
  balance: null,
};

function UserReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_USER_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
      };
    case types.GET_USER_PROFILE_SUCCESS:
      const result = action.payload;
      return {
        ...state,
        loading: false,
        userInfo: {...result.user, balance: result.balance},
        transactions: result.transactions,
      };
    default:
      return state;
  }
}

export default UserReducer;
