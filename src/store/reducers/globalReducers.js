const InitState = {
  username: "Trysia",
};

export const chatReducer = (state = InitState, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME": {
      return { ...state, username: action.payload };
    }
    default: {
      return state;
    }
  }
};
