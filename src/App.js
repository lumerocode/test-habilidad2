import { useEffect, useState } from 'react';
import './App.scss';
import { Purchase } from './components/Purchase';
import { Sell } from './components/Sell';
import { Tabs } from './components/Tabs';


function App() {

  //Estado que recibe y actualiza los datos traidos de la API
  const [newData, setNewData] = useState([]);

  //Destructuración del objeto newData
  const {purchase_price, sale_price} = newData;

  //API
  const API = `https://exchangeratecs.herokuapp.com/api/rates`;

  //Trayendo datos de la API
  useEffect(() => {
    (async function () { 
      const data = await fetch(API) //Hace el llamado a la API en un tiempo
        .then((res) => res.json()) //Devolvemos la respuesta que recibimos en formato Json
        setNewData(data)//Guardamos esa respuesta en setNewData
     })();
  },[API]);

  //Tabs
  const tabsAll = document.querySelectorAll('[data-tabs]')
  const content = document.querySelectorAll('[data-content]')


  tabsAll.forEach(tab => {

      tab.addEventListener('click', () => {

        //Recorrer cada content
        content.forEach(c => {
          c.classList.remove('tabs--active')
        })

        const t = document.querySelector(tab.dataset.tabs);
        t.classList.add('tabs--active');

        //Recorrer cada tab
        tabsAll.forEach( e => {
          e.classList.remove('border--active')
        })
        tab.classList.add('border--active')
      })

  });

 
  return (
    <main>
      <section className='section'>
        <div className='section__desc'>
          <h1 className='section__title'>El mejor tipo de cambio</h1>
          <p className='section__text'>para cambiar dólares y soles online en Perú</p>
        </div>

        <div className='tabs'> 
          <Tabs
          purchase={purchase_price}
          sell={sale_price}/>
          <div className='tabs__content'>
            <Purchase
            purchase={purchase_price}/>
            <Sell
            sell={sale_price}/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
