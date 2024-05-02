import { Chip, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'
import { TbX } from 'react-icons/tb'
import allRoles from '../../data/roles.json'
import { MenuProps } from '../../constant/chip.constant'


export default function RolesFilter() {
    const [roles, setRoles] = useState<string[]>([])

    const handleChange = (event: SelectChangeEvent<any>) => {
        setRoles(event.target.value)
    }

    const handleDelete = (event: React.MouseEvent, value: string) => {
        event.stopPropagation()
        setRoles(roles.filter((tech) => tech !== value))
    }

    const handleRemove = () => {
        setRoles([])
    }
    return (
        <FormControl sx={{ width:"100%" }} size="small">
            <InputLabel id="demo-multiple-chip-label">Roles</InputLabel>
            <Select

                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={roles}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Roles" />}
                endAdornment={
                    roles.length > 0 && (
                        <IconButton onClick={handleRemove} size="small">
                            <TbX />
                        </IconButton>
                    )
                }
                renderValue={(selected) => (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, zIndex: 3 }}>
                        {selected.map((value) => (
                            <Chip size="small" key={value} onMouseDown={(event) => {
                                event.stopPropagation();
                            }} label={allRoles.filter((tech) => tech.value === value)[0].label} onDelete={(e) => {
                                handleDelete(e, value)
                            }} />
                        ))}
                    </div>
                )}
                MenuProps={MenuProps}
            >
                {allRoles.map((name) => (
                    <MenuItem
                        key={name.id}
                        value={name.value}
                    >
                        {name.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
