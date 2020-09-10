const formatValue = (value: number): string =>
  `R$ ${Intl.NumberFormat().format(value)}`; // TODO

export default formatValue;
