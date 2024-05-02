import styles from './Filters.module.css'
import ExperienceFilter from '../../../../components/ExperienceFilter'
import NameFilter from '../../../../components/NameFilter'
import LocationFilter from '../../../../components/LocationFilter'
import JobTypeFilter from '../../../../components/JobTypeFilter'
import TechStackFilter from '../../../../components/TechStackFilter'
import RolesFilter from '../../../../components/RolesFilter'
import PayFilter from '../../../../components/PayFilter'

export default function Filters() {
    return (
        <div className={styles.filters}>
            <ExperienceFilter />
            <NameFilter />
            <LocationFilter />
            <JobTypeFilter />
            <TechStackFilter />
            <RolesFilter/>
            <PayFilter />
        </div>
    )
}
