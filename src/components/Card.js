import React from 'react'
import { useState } from 'react';
import './Card.css'

export default function Card({ food, count, bonus, weight, description, disabled }) {

    const [selected, setSelected] = useState(false)

    const inverseSelected = () => {
        if (!disabled) {
            setSelected(!selected);
        }
    }

    return (
        <div className={'card default ' + (selected ? 'selected ' : '') + (disabled ? 'disabled ' : '')} onClick={inverseSelected}>
            <div className='info-container'>
                <div>
                    Сказочное заморское яство
                </div>
                <div className='main-txt'>
                    Нямушка
                </div>
                <div className='main2-txt'>
                    {food}
                </div>
                <div className='side-txt mt15'>
                    {count} порций
                </div>
                <div className='side-txt'>
                    {bonus}
                </div>
            </div>
            <div className='weight-container'>
                <div className='weight'>
                    {weight}
                </div>
                <div >
                    кг
                </div>
            </div>
            <div className={'card-footer'}>
                {disabled && <span>Печалька, {food} закончися.</span>}
                {selected && <span>{description}</span>}
                {!disabled && !selected && <span>Чего сидишь? Порадуй котэ, <span className='buy-btn' onClick={inverseSelected}>купи.</span></span>}
            </div>
        </div>
    )
}
