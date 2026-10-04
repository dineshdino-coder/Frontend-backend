import react from 'react';
import {useState, useEffect} from 'react';
import BodyData from './BodyData';
import Pagination from './Pagination';

const Layout = () => {

    const [apiData, setApiData] = useState([]);
    const [page, setPage] = useState(1);
    const [querrys, setQuerrys] = useState("albumId=");
    const [sortingOrder, setSortingOrder] = useState("asc");

    const fetchData = async () => {
        let url = `https://jsonplaceholder.typicode.com/photos?${querrys}${page}`;
        let res = await fetch(url);
        let data = await res.json();
        setApiData(data);
    }

    useEffect(() => {
        fetchData();
        window.scrollTo({
            top:0, 
            behavior: 'smooth'
        });
    }, [page]);
    
    const sorting = () => {
        let apiDataCopy = [...apiData];
        apiDataCopy.sort((a,b) => {
            if (sortingOrder !== "asc") {
                setSortingOrder("asc");
                return a.title.localeCompare(b.title);
            } else {
                setSortingOrder("desc");
                return b.title.localeCompare(a.title);
            }
        });
        setApiData(apiDataCopy);
    }
    return(
        <div>
            <h1>Layout</h1>
            <BodyData apiData={apiData} sorting={sorting}/>
            <Pagination page={page} setPage={setPage}/>
        </div>
    )
}
export default Layout;