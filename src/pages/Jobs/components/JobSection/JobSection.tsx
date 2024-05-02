import { Alert, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react'
import { T_Job } from '../../../../types/job';
import JobCard from '../../../../components/JobCard';
import styles from './JobSection.module.css'
import useInfiniteScroll from '../../../../hooks/useInfiniteScroll';

export default function JobSection() {
    const [showError, setShowError] = useState<boolean>(false);
    const [allJobs, setAllJobs] = useState<T_Job[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    const lastPostRef = useInfiniteScroll(() => {
        if (page!==total && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [total, !loading]);
    const myHeaders = new Headers();
    const fetchData = async (page:number = 0) => {
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": page
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        setLoading(true)

        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then(async (response) => {
                const { jdList, totalCount } = await response.json()
                setAllJobs([...allJobs , ...jdList])
                setLoading(false)
                setTotal(totalCount)
            })
            .catch((error) => {
                setShowError(true)
                setLoading(false)
            });
    }

    const handleClose = () => {
        setShowError(false)
    }

    useEffect(() => {
        fetchData(page)
    }, [page])
    return (
        <>
            {showError && 
                <Alert severity="error" onClose={handleClose}>
                    Something went wrong
                </Alert>
            }
            <div className={styles.jobs} >
                {allJobs && allJobs.map((job:T_Job) => {
                    return <div ref={total !== page ? lastPostRef : null}>
                        <JobCard key={job.jdUid} job={job} />
                    </div>
                })}
            </div>
            {loading && 
                <div className={styles.loader}>
                    <CircularProgress />
                </div>
            }
        </>
    )
}
