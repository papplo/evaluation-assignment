import { useState, createRef } from 'react';

const months = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
const years = [2022, 2023, 2024, 2025, 2026, 2027]

export function App() {
    const [cardNumber, setCardNumber] = useState('')
    const [cardCVC, setCardCVC] = useState('')
    const [cardHolder, setCardHolder] = useState('');
    const [selectedMonth, setSelectedMonth] = useState()
    const [selectedYear, setSelectedYear] = useState()

    const [validity, setValidity] = useState({
        number: undefined,
        holder: undefined,
        month: undefined,
        year: undefined,
        cvc: undefined
    })

    function sanitizeStringToDigits(string) {
       return string.replace(/[^0-9]/g, '')
    }

    function handleCardNumberChange(event) {
        if (event.target.value.length < 19) {
            setCardNumber(sanitizeStringToDigits(event.target.value))
        }

        const sanitizeUserInput = event.target.value.match(/[0-9]{4}/g)
        if (sanitizeUserInput?.length == 4) {
            setValidity(prev => ({
                ...prev,
                number: false
            }))
            setCardNumber(sanitizeUserInput.join(' '))
        } else {
            setValidity(prev => ({
                ...prev,
                number: true
            }))
        }

    }

    function handleCardHolderChange(event) {
        setCardHolder(event.target.value)
        setValidity(prev => ({
            ...prev,
            holder: false
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('thanks for submitting')
    }

    return (
        <main className="container">
            <section className="credit-card-form">
                <article className="composition-credit-card">
                    <div className="composition-emblem"></div>
                    <div className="composition-card-number">{cardNumber}</div>
                    <div className="composition-details">
                        <div className="details-card-holder-name">
                            Holder Name
                            <h5>{cardHolder}&nbsp;</h5>
                        </div>
                        <div className="details-card-expiration-date">
                            Expiration Date
                            <h5>{selectedMonth?.toString().padStart(2,0)} / {selectedYear}</h5>
                        </div>
                    </div>
                </article>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        contentEditable="false"
                        required
                        inputMode="numeric"
                        pattern="[0-9\s]{13,19}"
                        maxLength="19"
                        placeholder="XXXX XXXX XXXX XXXX "
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        aria-invalid={validity.number}
                    />

                    <label htmlFor="cardName">Card Name</label>
                    <input 
                        type="text" 
                        name="cardName" 
                        required 
                        placeholder="Card Name" 
                        aria-label="Card Name" 
                        defaultValue={cardHolder} 
                        onChange={handleCardHolderChange} 
                        aria-invalid={validity.holder} 
                    />

                    <div className="grid">
                        <fieldset id="date-selector">
                            <label htmlFor="month">Expiration Month</label>
                            <select id="month" name="month" required onChange={(event) => setSelectedMonth(event.target.value)}>
                                <option value=''>Month</option>
                                {months.map(month => (
                                    <option key={month} value={month}>{month.toString().padStart(2, 0)}</option>
                                ))}
                            </select>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="month">Expiration Year</label>
                            <select id="year" name="year" required onChange={(event) => setSelectedYear(event.target.value)} >
                                <option value=''>Year</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="frmCCCVC">CVC</label>
                            <input name="cvc" id="frmCCCVC" required inputtype="numeric" maxLength="3" placeholder="* * *" value={cardCVC} onChange={(event) => setCardCVC(event.target.value)} />
                        </fieldset>
                    </div>

                    <fieldset>
                        <label htmlFor="terms">
                            <input type="checkbox" role="switch" id="terms" name="terms" required/>
                            I agree to the <a href="#">Privacy Policy</a>
                        </label>
                    </fieldset>


                    <button type="submit">Submit</button>
                </form>
            </section>
        </main>
    )
}