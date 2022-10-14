const makeMints = async () => {
  console.log('Making mints for you...');
  const makingMints = async (ms = 3000) => new Promise((r) => setTimeout(r, ms));
  await makingMints();
  console.log('Here you go!');
  return true
}


export default makeMints