const getArgs = (args) => {
  const res = {};
  const [executer, file, ...rest] = args;

  rest.forEach((value, index, array) => {
    if (value.startsWith("-")) {
      const key = value.substring(1);
      if (index === array.length - 1) {
        res[key] = true;

        return;
      }

      const nextValue = array[index + 1];

      if (!nextValue.startsWith("-")) {
        res[key] = nextValue;
      } else {
        res[key] = true;
      }
    }
  });

  return res;
};

export { getArgs };
