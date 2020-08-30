import React from 'react'
import Card from './Card'
import './CardGrid.css'

export default function CardGrid({data}) {

    // Через функцию map массив с данными обрабывается, возвращая элементы 'Card'.
    return (
        <div className='CardGrid'>
            {
                data.map((pack) => {
                    return <Card 
                        food={pack.food}
                        count={pack.count}
                        bonus={pack.bonus}
                        weight={pack.weight}
                        description={pack.description}
                        disabled={pack.disabled}
                    />
                })
            }
        </div>
    )
}
