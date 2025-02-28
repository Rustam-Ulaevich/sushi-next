import React from 'react'
import { Title, FilterCheckbox } from '.'
import { Input } from '../ui'


interface Props {
    className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={''}>
            <Title text='Фильтрация' size='sm' className='mb-5 font-bold'/>

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text='Можно собирать' value='1' />
                <FilterCheckbox text='Новинки' value='2' />
            </div>

            <div className='mt-5 border-y-neutral-100 py-6 pb-7'>
                <p className='mb-3 font-bold'>Цена от и до:</p>
                <div className='flex gap-3 mb-5'>
                    <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
                    <Input type='number' placeholder='1000' min={100} max={1000} />
                </div>
              
            </div>


        </div>
    )
}