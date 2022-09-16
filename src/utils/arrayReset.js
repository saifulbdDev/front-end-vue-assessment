const arrayReset = (value) => value.filter((record) => {
  let item;
  if (record.selected) {
    record.selected = false;
    item = record;
  } else {
    item = record;
  }
  return item;
});

export default arrayReset;
