import React from 'react'
import convert from '../assets/vector.png';

export const Purchase = ({purchase}) => {



 const changePurchase = (e) => {

    const inputValue = parseFloat(document.querySelector('#valuePurchase').value);
    const result1 = (purchase * inputValue).toFixed(2);

    document.getElementById('valueResult').value = result1;

 }

  return (
    <div data-content id='purchase' className='tabs__purchase tabs--active'>
        <div className='tabs__current'>
            <p>Dólares</p>
            <div className='tabs__right'>                
                <p>Envías</p>
                <div>
                    <span>$</span>
                    <input id='valuePurchase' type='number' name='value'/>
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
