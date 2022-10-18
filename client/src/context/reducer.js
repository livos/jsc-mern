const reducer = (state, action) => {
  throw new Erro(`no such action : ${action.type}`);
};

export default reducer;
