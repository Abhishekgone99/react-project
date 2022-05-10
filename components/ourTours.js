import './ourTours.css'
import ToursChild from './ToursChild';
import { useState, useEffect } from 'react';

const OurTours = () => {
    let [tourlist, settourlist] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/tourlist")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                settourlist(data)
            })
    }, [])
    let title = "Our Tours"
    return (
        <div className="tours">

            <ToursChild data={tourlist} funcdata={settourlist} heading={title} />

        </div>
    );
}

export default OurTours;
