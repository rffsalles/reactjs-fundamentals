const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date)).toString();
};

export default formatDate;
