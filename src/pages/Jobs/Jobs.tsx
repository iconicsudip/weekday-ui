import styles from './Jobs.module.css'
import Filters from './components/Filters'
import JobSection from './components/JobSection'

/**
 * This page is used to display the jobs page with filters and job section
 * @returns 
 */

export default function Jobs() {
    return (
        <div className={styles.jobs}>
            <Filters/>
            <JobSection />
        </div>
    )
}
