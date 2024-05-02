import styles from './Jobs.module.css'
import Filters from './components/Filters'
import JobSection from './components/JobSection'

export default function Jobs() {
    return (
        <div className={styles.jobs}>
            <Filters/>
            <JobSection />
        </div>
    )
}
