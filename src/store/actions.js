const append= ({ state, commit }, value) => {
  let newFormula = state.formula;
  const entries = newFormula.split(/[\+\-\*\/]/);
  const lastEntry = entries[entries.length - 1];
  if ((/\./).test(value) && (/\./).test(lastEntry)) return false;
  if (
    !(/[0-9\.]/).test(value) &&
    !(/[0-9\.]/).test(newFormula[newFormula.length - 1])
  ) {
    newFormula = newFormula.slice(0, -1);
  }
  newFormula += value.toString();
  commit('APPEND', newFormula);
};

const negative = ({ state, commit }) => {
  let newFormula = state.formula;
  if (
    newFormula.length === 0 ||
    (/[\+\-\*\/]/).test(newFormula[newFormula.length - 1])
  ) return false;
  const entries = newFormula.split(/[\+\-\*\/]/);
  const lastEntry = entries[entries.length - 1];
  const lastEntryLength = lastEntry.length;
  const restOfEntry = newFormula.slice(0, lastEntryLength * -1);
  if (restOfEntry[restOfEntry.length - 1] === '-') {
    newFormula = restOfEntry.slice(0, -1) + '+' + lastEntry;
  } else if (restOfEntry[restOfEntry.length - 1] === '+') {
    newFormula = restOfEntry.slice(0, -1) + '-' + lastEntry;
  } else {
    newFormula = restOfEntry + '-' + lastEntry;
  }
  commit('NEGATIVE', newFormula);
};

const percent = ({ state, commit }) => {
  let newFormula = state.formula;
  if (
    newFormula.length === 0 ||
    (/[\+\-\*\/]/).test(newFormula[newFormula.length - 1])
  ) return false;
  const entries = newFormula.split(/[\+\-\*\/]/);
  const lastEntry = entries[entries.length - 1];
  const lastEntryLength = lastEntry.length;
  const newEntry = Number(lastEntry) / 100;
  newFormula = newFormula.slice(0, lastEntryLength * -1);
  newFormula += newEntry.toString();
  commit('PERCENT', newFormula);
};

export default {
  append,
  negative,
  percent,
};