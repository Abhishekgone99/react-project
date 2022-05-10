import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './enquiry.css'

const Enquiry = () => {
    let [fname, setfname] = useState('')
    let [lname, setlname] = useState('')
    let [email, setemail] = useState('')
    let [mobile, setmobile] = useState('')
    let [passengers, setpassengers] = useState('')
    let [destination, setdestination] = useState('')
    let [departure, setdeparture] = useState('')
    let [departureDate, setdepartureDate] = useState('')
    let [returnDate, setreturnDate] = useState('')
    let [budget, setbudget] = useState('')
    let [yes, setyes] = useState('')
    let [no, setno] = useState('')
    let [nomatter, setnomatter] = useState('')
    let [bnpn, setbnpn] = useState('')
    let [dnpi, setdnpi] = useState('')
    let [train, settrain] = useState('')
    let [plane, setplane] = useState('')
    let [other, setother] = useState('')
    let history = useHistory();

    let submitFn = (e) => {
        e.preventDefault();
        let data = { fname, lname, email, mobile, passengers, destination, departure, departureDate, returnDate, budget, yes, no, nomatter, bnpn, dnpi, train, plane, other }
        fetch(" http://localhost:4000/inquiryDetails", {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert("your inquiry received. we will get back to you soon")
        history.push('./ourTours')

    }
    return (
        <div className="details">

            <div className='inquiryForm'>
                <form onSubmit={submitFn}>
                    <h1>Travel Inquiry Form</h1>
                    <p>Thank you for allowing Luffy Tours&Travels to research a fare for your upcoming trip. We will work to get you the best price available. Please fill out the Travel Inquiry Form in its entirety, and you will be contacted within 12 hours to discuss your Itinerary in Detail. </p>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='fname' name='name' placeholder='First Name' required value={fname} onChange={(e) => setfname(e.target.value)} /> &nbsp;
                        <input type="text" id='lname' name='name' placeholder='Last Name' required value={lname} onChange={(e) => setlname(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id='email' name='email' placeholder='ex: myname@example.com' required value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile Number</label>
                        <input type="tel" id='mobile' name='mobile' required value={mobile} onChange={(e) => setmobile(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="passengers">Number of Travelers? Adults? Children?</label> <br />
                        <input type="number" id='passengers' name='passengers' required value={passengers} onChange={(e) => setpassengers(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="destination">Where would you like to Travel?</label> <br />
                        <textarea name="destination" id="destination" cols="40" rows="5" value={destination} onChange={(e) => setdestination(e.target.value)}></textarea>
                    </div>
                    <div>
                        <label htmlFor="departure">What is your city of Departure?</label> <br />
                        <input type="text" id='departure' name='departure' required value={departure} onChange={(e) => setdeparture(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="departureDate">What is your Departure Date?</label> <br />
                        <input type="date" id='departureDate' name='departureDate' required value={departureDate} onChange={(e) => setdepartureDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="returnDate">What is your Return Date?</label> <br />
                        <input type="date" id='returnDate' name='returnDate' required value={returnDate} onChange={(e) => setreturnDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="budget">What is your budget for this trip(per person)?</label> <br />
                        <textarea name="budget" id="budget" cols="40" rows="5" value={budget} onChange={(e) => setbudget(e.target.value)}></textarea>
                    </div>
                    <div>
                        <label htmlFor="inclusive">Do You Prefer All-Inclusive?</label> <br />
                        <input type="radio" id='yes' name='inclusive' value={yes} onChange={(e) => setyes(e.target.value)} /> <label htmlFor="yes">YES</label><br />
                        <input type="radio" id='no' name='inclusive' value={no} onChange={(e) => setno(e.target.value)} /> <label htmlFor="no">NO</label><br />
                        <input type="radio" id='no matter' name='inclusive' value={nomatter} onChange={(e) => setnomatter(e.target.value)} /> <label htmlFor="no matter">DOESN'T MATTER</label>
                    </div>
                    <div>
                        <label htmlFor="payment">What kind of payment arrangement would you like?</label> <br />
                        <input type="radio" id='bnpn' name='payment' value={bnpn} onChange={(e) => setbnpn(e.target.value)} /> <label htmlFor="bnpn">BOOK NOW, PAY NOW</label><br />
                        <input type="radio" id='dnpi' name='payment' value={dnpi} onChange={(e) => setdnpi(e.target.value)} /> <label htmlFor="dnpi">DEPOSIT NOW, PAY INSTALLMENTS</label><br />
                    </div>
                    <div>
                        <label htmlFor="tranport">How will you travel?</label> <br />
                        <input type="radio" id='plane' name='transport' value={plane} onChange={(e) => setplane(e.target.value)} /> <label htmlFor="plane">PLANE</label><br />
                        <input type="radio" id='train' name='transport' value={train} onChange={(e) => settrain(e.target.value)} /> <label htmlFor="train">TRAIN</label><br />
                        <input type="radio" id='other' name='transport' value={other} onChange={(e) => setother(e.target.value)} /> <label htmlFor="other">OTHER</label><br />
                    </div>
                    <button>Submit</button>

                </form>
            </div>

        </div>
    );
}

export default Enquiry;