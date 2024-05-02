import { FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useEffect, useState } from 'react'
import { TbX } from 'react-icons/tb'
import basePay from '../../data/base-pay.json'
import { useDispatch } from 'react-redux'
import { setQuery } from '../../store/slices/querySlice'


export default function PayFilter() {
    const [minimumPay, setMinimumPay] = useState<string>("")
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent) => {
        setMinimumPay(event.target.value)
    }

    const handleDelete = () => {
        setMinimumPay("")
    }

    useEffect(() => {
        dispatch(setQuery({
            salary: minimumPay.toString()
        }))
    }, [minimumPay])
    return (
        <FormControl sx={{ width: "100%" }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label">Base Pay</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={minimumPay}
                label="Base Pay"
                onChange={handleChange}
                endAdornment={
                    minimumPay && (
                        <IconButton onClick={handleDelete} size="small">
                            <TbX />
                        </IconButton>
                    )
                }
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {basePay.map((pay) => (
                    <MenuItem key={pay.id} value={pay.value}>{pay.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
