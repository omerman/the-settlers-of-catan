module.exports = () => {
  const roll = () => Math.floor(Math.random() * 6) + 1;
  return [roll(), roll()];
};