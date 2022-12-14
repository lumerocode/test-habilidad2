import React from 'react'
import convert from '../assets/vector.png';

export const Sell = ({sell, purchase, tabsAll, content}) => {

  //Botón para hacer la conversión
  const changeSell = (e) => {

    tabsAll.forEach(tab => {

        //Recorrer cada content
        content.forEach(c => {
          c.classList.add('tabs--active')
        })

        const t2 = document.querySelector(tab.dataset.tabs);
        t2.classList.remove('tabs--active');

        //Recorrer cada tab
        tabsAll.forEach( e => {
          e.classList.add('border--active')
        })

        tab.classList.remove('border--active')
        
    });
    
  }

  //Tipo de cambio 
  const handleInputChange2 = (e) => {

    const inputValue2 = parseFloat(document.querySelector('#valueSell').value);

    if(!(document.querySelector('#valueSell').value.trim())) {
        document.getElementById('valueResult2').value = 0;
    }else{
        const result2 = (inputValue2 / sell).toFixed(2);
        
        document.getElementById('valueResult2').value = result2;

        document.getElementById('valuePurchase').value = inputValue2;
        document.getElementById('valueResult').value = (inputValue2 * purchase).toFixed(2);
    }
 }  

  return (
    <div data-content id='sell' className='tabs__sell'>
        <div className='tabs__current'>
            <p>Soles</p>
            <div className='tabs__right'>                
                <p>Envías</p>
                <div>
                    <span>S/.</span>
                    <input id='valueSell' type='number'
                    onChange={handleInputChange2}/>
                </div>
            </div>
        </div>
        <div className='tabs__current'>
            <p>Dólares</p>
            <div className='tabs__right'>                
                <p>Recibes</p>
                <div>
                    <span>$</span>
                    <input id='valueResult2' type='text' readOnly/>
                </div>
             </div>
        </div>
        <button 
            className='tabs__button-change'
            onClick={changeSell}
            ><img src={convert}/>
        </button>
        <button 
            className='tabs__button'
            type='submit'   
        >Iniciar operación</button>
    </div>
  )
}
