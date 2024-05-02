import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useEffect, useState } from 'react'
import { TbX } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import jobTypes from '../../data/job-type.json'
import { setQuery } from '../../store/slices/querySlice'

/**
 * This component is used to filter the job type of the job
 * 
 * @constant jobType - The type of the job
 * @function setJobType - A function to set the type of the job
 * @function dispatch - A function to dispatch an action to the redux store
 * @function handleChange - A function to handle the change in the job type filter
 * @function handleDelete - A function to handle the deletion of the job type filter
 * 
 * @returns 
 */

export default function JobTypeFilter() {
    const [jobType, setJobType] = useState('')
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        setJobType(event.target.value)
    }

    const handleDelete = () => {
        setJobType('')
    }

    useEffect(() => {
        dispatch(setQuery({
            jobType: jobType
        }))
    }, [jobType])

    return (
        <FormControl sx={{ width: "100%" }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label">Job Type</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={jobType}
                label="Job Type"
                onChange={handleChange}
                endAdornment={
                    jobType && (
                        <IconButton onClick={handleDelete} size="small">
                            <TbX/>
                        </IconButton>
                    )
                }
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {jobTypes.map((type) => (
                    <MenuItem key={type.id} value={type.value}>{type.type}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
