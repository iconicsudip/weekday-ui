import { TextField } from '@mui/material'
import styles from './Namefilter.module.css'
import { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { useDispatch } from 'react-redux'
import { setQuery } from '../../store/slices/querySlice'

/**
 * This component is used to filter the name of the company
 * 
 * @constant name - The name of the company
 * @function setName - A function to set the name of the company
 * @function debouncedText - A function to debounce the text
 * @function dispatch - A function to dispatch an action to the redux store
 * 
 * @returns 
 */

export default function NameFilter() {
    const [name, setName] = useState('')
    const debouncedText = useDebounce(name)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setQuery({
            searchedCompany: debouncedText
        }))

    }, [debouncedText])
    return (
        <div className={styles.name_filter}>
            <TextField
                fullWidth
                label="Search Company"
                id="outlined-size-small"
                placeholder='Company name'
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}
