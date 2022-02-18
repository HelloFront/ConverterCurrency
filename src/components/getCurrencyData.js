const getCurrencyDate = () => {
  try {
    const data = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then(res => res.json());

    return data;
  } catch(err) {
    console.log(err.code);
  }
}
export default getCurrencyDate;