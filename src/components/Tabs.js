import React from 'react'

export const Tabs = ({purchase, sell}) => {
  return (
    <div className='tabs__menu'>
        <div data-tabs='#purchase' className='tab__purchase border--active'>
            <p >Dólar compra</p>
            <p className='tab__current'>{purchase}</p>
        </div>
        <div data-tabs='#sell'>
            <p >Dólar venta</p>
            <p className='tab__current'>{sell}</p>
        </div>
    </div>
  )
}
