export const selectRecordsCollection = state => state.records.collection;
export const selectRecordsBytes = state =>
  state.records.collection
    .map(({payload}) => payload.length)
    .reduce((acc, bytes) => acc + bytes, 0);
