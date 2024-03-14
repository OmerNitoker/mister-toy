
import { useEffect, useRef, useState } from "react"
import { toyService } from "../services/toy.service.js"
import { utilService } from "../services/util.service.js"

const toyLabels = toyService.getLabels()

export function ToyFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

    onSetFilter = useRef(utilService.debounce(onSetFilter))

    useEffect(() => {
        // update father cmp that filters change very type
        onSetFilter.current(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        if (field === 'inStock' && value === '') value = ''
        else if (type === 'select-one') value = value === 'true'
        else if (type === 'number') value = +value
        else if (type === 'select-multiple') value = Array.from(target.selectedOptions, (option) => option.value) 
       
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    return (
        <section className="toy-filter main-layout">
            <h2>Toys Filter</h2>
            <form >
                <div>
                    <label htmlFor="txt">Name:</label>
                    <input type="txt"
                        id="txt"
                        name="txt"
                        placeholder="By name"
                        value={filterByToEdit.txt}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="inStock">Show:</label>
                    <select name="inStock" id="inStock" value={filterByToEdit.inStock} onChange={handleChange}>
                        <option value="">All</option>
                        <option value="true">In Stock</option>
                        <option value="false">Out of Stock</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="labels">Labels:</label>
                    <select multiple name="labels" id="labels" onChange={handleChange}>
                        <option value="">All</option>
                        <>
                            {toyLabels.map(label => (
                                <option key={label} value={label}>{label}</option>
                            ))}
                        </>
                    </select>
                </div>
            </form>
        </section>
    )
}