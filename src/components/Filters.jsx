import './Filters.css'
import { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'


export function Filters () {
    const { filters, setFilters } = useFilters()

    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        setFilters(prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price starting at: </label>
                <input 
                type="range" 
                id={minPriceFilterId}
                min='0'
                max='1500'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
                <span>$ {filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}