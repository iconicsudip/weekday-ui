
const BASE_URL = import.meta.env.VITE_APP_API_URL

export const getJobs = async (page: number,limit: number = 10) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
        "limit": limit,
        "offset": page
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
    };

    try {
        const response = await fetch(BASE_URL, requestOptions);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const { jdList, totalCount } = await response.json();
        return {
            jobs: jdList,
            totalCount
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}