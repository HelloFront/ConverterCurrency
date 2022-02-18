import getCurrencyDate from './components/getCurrencyData';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Converter from './components/Converter/Converter';

function App() {
  const [data, setData] = useState(null)
  const time = 400000;
  const storageTime = localStorage.getItem('time');

  (async () => {
    if (storageTime === null) {
      const result = await getCurrencyDate();
      localStorage.setItem('currencyData', JSON.stringify(result));
      localStorage.setItem('time', +new Date());
    } else if(+new Date() - storageTime > time) {
      const result = await getCurrencyDate()
      localStorage.setItem('currencyData', JSON.stringify(result));
      localStorage.setItem('time', +new Date());
    }
  })()



  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('currencyData'));
    if(Array.isArray(storageData)) setData([...storageData])
  }, []);

  return (
    <>
      <Header data={data}/>
      <Converter />
    </>
  );
}

export default App;
