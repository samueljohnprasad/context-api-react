export const contextReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRAN":
      return {
        transaction: state.transaction+action.payload,
      };

      case'DEL_TRAN':
      return {
        transaction: state.transaction+action.payload,
      }

    default:
      return {
        state,
      };
  }
};
