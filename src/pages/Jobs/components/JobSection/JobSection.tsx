import { Alert, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react'
import { T_Job } from '../../../../types/job';
import JobCard from '../../../../components/JobCard';
import styles from './JobSection.module.css'
import useInfiniteScroll from '../../../../hooks/useInfiniteScroll';
import { getJobs } from '../../../../api/jobs';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

/**
 * This component is used to display the jobs
 * @constant filterDetails - The details of the filters applied to the jobs from the redux store
 * @constant showError - A boolean to check if there is an error
 * @function setShowError - A function to set the error
 * @constant allJobs - The list of all the jobs
 * @function setAllJobs - A function to set the list of all the jobs
 * @constant tempAllJobs - The list of all the jobs temporarily so that the original list is not affected
 * @function setTempAllJobs - A function to set the list of all the jobs temporarily
 * @constant loading - A boolean to check if the jobs are loading
 * @function setLoading - A function to set the loading
 * @constant page - The page number
 * @function setPage - A function to set the page number
 * @constant total - The total number of jobs
 * @function setTotal - A function to set the total number of jobs
 * @constant lastPostRef - A reference to the last jobPost to implement infinite scrolling
 * @function handleClose - A function to handle the closing of the error
 * 
 * @returns 
 */

export default function JobSection() {
    const filterDetails = useSelector((state:RootState)=>state.queryDetails)
    const [showError, setShowError] = useState<boolean>(false);
    const [allJobs, setAllJobs] = useState<T_Job[]>([]);
    const [tempAllJobs, setTempAllJobs] = useState<T_Job[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const lastJobPostRef = useInfiniteScroll(() => {
        if (page!==total && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [total, !loading]);

    const handleClose = () => {
        setShowError(false)
    }

    useEffect(() => {
        setLoading(true)
        getJobs(page).then((data) => {
            const { jobs, totalCount } = data
            setAllJobs([...allJobs, ...jobs])
            setTempAllJobs([...tempAllJobs, ...jobs])
            setLoading(false)
            setTotal(totalCount)
        }).catch(() => {
            setShowError(true)
            setLoading(false)
        })
    }, [page])

    useEffect(() => {
        const { experience, searchedCompany, searchedLocation, jobType, techStacks, roles, salary } = filterDetails

        let filteredJobs = tempAllJobs
        if(experience!=="") {
            filteredJobs = filteredJobs.filter(job => job.minExp!==null &&  job.minExp >= parseInt(experience))
        }
        if(searchedCompany!=="") {
            filteredJobs = filteredJobs.filter(job => job.jobDetailsFromCompany.includes(searchedCompany.toLowerCase()))
        }
        if(searchedLocation!=="") {
            filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().includes(searchedLocation.toLowerCase()))
        }
        if(jobType!=="") {
            filteredJobs = filteredJobs.filter(job => {
                if(jobType === 'remote'){
                    return job.location.toLowerCase() === jobType.toLowerCase()
                }
                return job.location.toLowerCase() !== 'remote'
            })
        }
        if(salary!=="") {
            filteredJobs = filteredJobs.filter(job => job.minJdSalary !== null && job.minJdSalary >= parseInt(salary))
        }

        if(techStacks.length > 0) {
            filteredJobs = filteredJobs.filter((job:T_Job) => {
                let flag = false
                techStacks.forEach((stack:string) => {
                    if (job.jobDetailsFromCompany.toLowerCase().includes(stack.toLowerCase())) {
                        flag = true
                    }
                })
                return flag
            })
        }

        if(roles.length > 0) {
            filteredJobs = filteredJobs.filter((job:T_Job) => {
                let flag = false
                roles.forEach((role:string) => {
                    if (job.jobDetailsFromCompany.toLowerCase().includes(role.toLowerCase()) || job.jobRole.toLowerCase() === role.toLowerCase()) {
                        flag = true
                    }
                })
                return flag
            })
        }
        setAllJobs(filteredJobs)
    }, [filterDetails, allJobs, tempAllJobs])

    return (
        <>
            {showError && 
                <Alert severity="error" onClose={handleClose}>
                    Something went wrong
                </Alert>
            }
            <div className={styles.jobs} >
                {allJobs.length > 0 && allJobs.map((job:T_Job) => {
                    return <div ref={total !== page ? lastJobPostRef : null}>
                        <JobCard key={job.jdUid} job={job} />
                    </div>
                })}
            </div>
            {allJobs.length === 0 && !loading &&
                <div className={styles.no_jobs}>
                    <img src="/nothing-found.png" alt="nothing-found" />
                    <h4>No Jobs available for this category at the moment</h4>
                </div>
            }
            {loading && 
                <div className={styles.loader}>
                    <CircularProgress />
                </div>
            }
        </>
    )
}
