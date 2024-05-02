import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'
import { TbX } from 'react-icons/tb'

const jobTypes = [{
    id:'1',
    type:'Remote',
    value:'remote'
},
{
    id:'2',
    type: 'Onsite',
    value:'onsite'
}]
export default function JobTypeFilter() {
    const [jobType, setJobType] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setJobType(event.target.value)
    }

    const handleDelete = () => {
        setJobType('')
    }

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