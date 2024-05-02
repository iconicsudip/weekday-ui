import { Button, Card } from '@mui/material'
import styles from './JobCard.module.css'
import { T_Job } from '../../types/job'
import { Link } from 'react-router-dom'
import { getCurrecySymbol } from '../../utils/functions'

interface Props {
    job: T_Job
}

export default function JobCard({ job }: Props) {
    return (
        <Card className={styles.job_card}>
            <div className={styles.job_title}>
                <img className={styles.logo} src="/weekday.png" alt="logo" />
                <div className={styles.job}>
                    <Link to={`${job.jdLink}`} target="_blank">
                        <h3>Company Name</h3>
                    </Link>
                    <h5 className={styles.name}>{job.jobRole}</h5>
                    <p className={styles.sub_text}>{job.location}</p>
                </div>
            </div>
            <div className={styles.estm}>
                Estimated Salary: {getCurrecySymbol(job.salaryCurrencyCode)} {job.minJdSalary ?? 0} - {job.maxJdSalary ?? 0}
            </div>
            <div className={styles.job_desc}>
                <h3 className={styles.company}>About Company</h3>
                <p className={styles.desc}>{job.jobDetailsFromCompany}</p>
            </div>
            <div className={styles.show_more}>
                <Link to={`${job.jdLink}`} target="_blank">
                    Show more
                </Link>
            </div>
            <div className={styles.min_exp}>
                <h5 className={styles.title}>
                    Experience
                </h5>
                <p className={styles.exp}>{job.minExp ?? 0} {job.minExp ? 'Years' : 'Year'} - {job.maxExp ?? 0} {job.maxExp ? 'Years' : 'Year'}</p>
            </div>
            <div className={styles.apply_btn}>
                <Link to={`${job.jdLink}`} target="_blank">
                    <Button variant="contained" color="primary" fullWidth>
                        ⚡ Easy Apply
                    </Button>
                </Link>
            </div>
        </Card>
    )
}
