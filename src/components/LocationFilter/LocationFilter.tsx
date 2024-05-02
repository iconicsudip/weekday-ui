import { TextField } from '@mui/material'
import styles from './LocationFilter.module.css'
import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { useDispatch } from 'react-redux'
import { setQuery } from '../../store/slices/querySlice'

/**
 * This component is used to filter the location of the job
 * 
 * @constant name - The name of the location
 * @function setName - A function to set the name of the location
 * @function debouncedText - A function to debounce the text
 * @function dispatch - A function to dispatch an action to the redux store
 * 
 * @returns 
 */

export default function LocationFilter() {
    const [name, setName] = useState('')
    const debouncedText = useDebounce(name)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setQuery({
            searchedLocation: debouncedText
        }))

    }, [debouncedText])
    return (
        <div className={styles.location_filter}>
            <TextField
                fullWidth
                label="Search Location"
                id="outlined-size-small"
                placeholder='Location name'
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}
