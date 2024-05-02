import { TextField } from '@mui/material'
import styles from './LocationFilter.module.css'

export default function LocationFilter() {
    return (
        <div className={styles.location_filter}>
            <TextField
                fullWidth
                label="Search Location"
                id="outlined-size-small"
                placeholder='Location name'
                size="small"
            />
        </div>
    )
}
