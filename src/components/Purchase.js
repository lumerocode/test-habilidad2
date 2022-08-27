import React from 'react'
import convert from '../assets/vector.png';

export const Purchase = ({purchase, sell, tabsAll, content}) => {

 //Botón para hacer la conversión
 const changePurchase = (e) => {

    tabsAll.forEach(tab => {
  
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
          
  
    });

 }

 //Tipo de cambio
 const handleInputChange = (e) => {

    const inputValue = parseFloat(document.querySelector('#valuePurchase').value);

    if(!(document.querySelector('#valuePurchase').value.trim())) {
        document.getElementById('valueResult').value = 0;
    }else{
        const result1 = (inputValue * purchase).toFixed(2);

        document.getElementById('valueResult').value = result1;

        document.getElementById('valueSell').value = inputValue;
        document.getElementById('valueResult2').value = (inputValue / sell).toFixed(2);
    }

 }

  return (
    <div data-content id='purchase' className='tabs__purchase tabs--active'>
        <div className='tabs__current'>
            <p>Dólares</p>
            <div className='tabs__right'>                
                <p>Envías</p>
                <div>
                    <span>$</span>
                    <input id='valuePurchase' type='number' name='value'
                    onChange={handleInputChange}/>
                </div>
            </div>
        </div>
        <div className='tabs__current'>
            <p>Soles</p>
            <div className='tabs__right'>                
                <p>Recibes</p>
                <div>
                    <span>S/.</span>
                    <input id='valueResult' type='text' readOnly/>
                </div>
            </div>
        </div>
        <button className='tabs__button-change'
            onClick={changePurchase}><img src={convert}/>
        </button>
        <button className='tabs__button'>Iniciar operación</button>
    </div>
  )
}
