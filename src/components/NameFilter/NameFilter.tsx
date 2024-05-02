import { TextField } from '@mui/material'
import styles from './Namefilter.module.css'

export default function NameFilter() {
    return (
        <div className={styles.name_filter}>
            <TextField
                fullWidth
                label="Search Company"
                id="outlined-size-small"
                placeholder='Company name'
                size="small"
            />
        </div>
    )
}
