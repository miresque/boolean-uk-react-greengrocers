import { useEffect, useState } from 'react'

export default function FilterBar(props) {
    const { storeItems, storeItemsOnDisplay, setStoreItemsOnDisplay } = props
    const ascendingOrder = -1
    const noOrder = 0
    const descendingOrder = 1
    const [selectedType, setSelectedType] = useState('none')
    const [sortedStatus, setSortedStatus] = useState(noOrder)

    const filterByType = () => {
        let filteredStoreItems = [...storeItems]
        if (selectedType === 'Veg') {
            filteredStoreItems = storeItems.filter(item => item.type === 'Veg')
        } else if(selectedType === 'Fruit') {
            filteredStoreItems = storeItems.filter(item => item.type === 'Fruit')
        }
        setStoreItemsOnDisplay(filteredStoreItems)
    }
    
    const sortByPrice = () => {
        let sortedStoreItems = [...storeItemsOnDisplay]
        if (sortedStatus === descendingOrder || sortedStatus === 0) {
            setSortedStatus(ascendingOrder)
            sortedStoreItems.sort((a, b) => {
                return a.price - b.price
            })
        } else if(sortedStatus === ascendingOrder) {
            setSortedStatus(descendingOrder)
            sortedStoreItems.sort((a, b) => {
                return b.price - a.price
            })
        }
        setStoreItemsOnDisplay(sortedStoreItems)
    }

    useEffect(() => {
        filterByType()
        },
        [selectedType]
    )

    return (
        <ul className="filter-sort">
            <li>
                <form id='filter-by-type-form'>
                    <label>
                        <p>Filter By Type:</p>
                        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                            <option value="none"></option>
                            <option value="Veg">Veg</option>
                            <option value="Fruit">Fruit</option>
                        </select>
                    </label>
                </form>
            </li>
            <li>
                <button onClick={sortByPrice}>{sortedStatus === ascendingOrder?'Ascending ↑':
                                               sortedStatus === descendingOrder?'Descending ↓':'Sort By Price'}</button>
            </li>
        </ul>
    )
}