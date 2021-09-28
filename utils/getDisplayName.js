export const getDisplayName = ({ first_name, last_name }) => {
  const name = [first_name, last_name]
    .filter((n) => n)
    .join(' ')
    .trim();

  return name;
};
