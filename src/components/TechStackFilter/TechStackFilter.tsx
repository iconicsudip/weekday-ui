import { Chip, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import techStacks from '../../data/tech-stack.json'
import { TbX } from "react-icons/tb";
import { MenuProps } from "../../constant/chip.constant";
import { useDispatch } from "react-redux";
import { setQuery } from "../../store/slices/querySlice";

export default function TechStackFilter() {
    const [techStack, setTechStack] = useState<string[]>([])
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent<any>) => {
        setTechStack(event.target.value)
    }

    const handleDelete = (event: React.MouseEvent,value:string) => {
        event.stopPropagation()
        setTechStack(techStack.filter((tech) => tech !== value))
    }

    const handleRemove = () => {
        setTechStack([])
    }

    useEffect(() => {
        dispatch(setQuery({
            techStacks: techStack
        }))
    }, [techStack])
    return (
        <FormControl sx={{ width: "100%" }} size="small">
            <InputLabel id="demo-multiple-chip-label">Tech Stack</InputLabel>
            <Select
                
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={techStack}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Tech Stack" />}
                endAdornment={
                    techStack.length > 0 && (
                        <IconButton onClick={handleRemove} size="small">
                            <TbX />
                        </IconButton>
                    )
                }
                renderValue={(selected) => (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4,zIndex:3 }}>
                        {selected.map((value) => (
                            <Chip size="small" key={value} onMouseDown={(event) => {
                                event.stopPropagation();
                            }} label={techStacks.filter((tech)=> tech.value === value)[0].label} onDelete={(e)=>{
                                handleDelete(e,value)
                            }} />
                        ))}
                    </div>
                )}
                MenuProps={MenuProps}
            >
                {techStacks.map((name) => (
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
