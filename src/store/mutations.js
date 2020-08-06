const APPEND = (state, payload) => {
  state.formula = payload;
};

const CHANGE_RESULT = (state, payload) => {
  state.tempResult = payload;
};

const CLEAR = (state) => {
  state.formula = '';
  state.tempResult = '';
};

const BACKSPACE = (state) => {
  if (state.formula.length === 1) {
    CLEAR();
  } else {
    state.formula = state.formula.slice(0, -1);
  }
};

const NEGATIVE = (state, payload) => {
  state.formula = payload;
};

const PERCENT = (state, payload) => {
  state.formula = payload;
};

const EQUALS = (state) => {
  state.formula = state.tempResult;
};

export default {
  APPEND,
  CHANGE_RESULT,
  CLEAR,
  BACKSPACE,
  NEGATIVE,
  PERCENT,
  EQUALS,
};