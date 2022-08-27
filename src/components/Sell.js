import React from 'react'
import convert from '../assets/vector.png';

export const Sell = ({sell}) => {

  const changeSell = (e) => {

    const inputValue2 = parseFloat(document.querySelector('#valueSell').value);
    const result2 = (inputValue2 / sell).toFixed(2);
    
    document.getElementById('valueResult2').value = result2;
    
  }

  return (
    <div data-content id='sell' className='tabs__sell'>
        <div className='tabs__current'>
            <p>Soles</p>
            <div className='tabs__right'>                
                <p>Envías</p>
                <div>
                    <span>S/.</span>
                    <input id='valueSell' type='number'/>
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
