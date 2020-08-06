const tempResult = (state) => {
  if (state.formula.slice(0, -1 !== NaN)) {
    return eval(state.formula);
  } else {
    return eval(state.formula.slice(0, -1));
  }
};

export default {
  tempResult,
};