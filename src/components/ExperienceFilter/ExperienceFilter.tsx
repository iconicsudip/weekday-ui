import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useEffect, useState } from 'react'
import { TbX } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { setQuery } from '../../store/slices/querySlice'

/**
 * This component is used to filter the experience of the job
 * @constant minimumExperience - The minimum experience required for the job
 * @function setMinimumExperience - A function to set the minimum experience required for the job
 * @function dispatch - A function to dispatch an action to the redux store
 * @function handleChange - A function to handle the change in the experience filter
 * @function handleDelete - A function to handle the deletion of the experience filter
 * @returns 
 */

export default function ExperienceFilter() {
    const [minimumExperience, setMinimumExperience] = useState<string>("")
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        setMinimumExperience(event.target.value)
    }

    const handleDelete = () => {
        setMinimumExperience("")
    }

    useEffect(() => {
        dispatch(setQuery({
            experience: minimumExperience.toString()
        }))
    }, [minimumExperience])
    return (
        <FormControl sx={{ width: "100%" }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label">Experience</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={minimumExperience}
                label="Experience"
                onChange={handleChange}
                endAdornment={
                    minimumExperience && (
                        <IconButton onClick={handleDelete} size="small">
                            <TbX/>
                        </IconButton>
                    )
                }
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {Array.from({ length: 10 }, (_, i) => i).map((experience) => (
                    <MenuItem key={experience+1} value={experience+1}>{experience+1}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
