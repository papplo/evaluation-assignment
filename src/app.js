import { useState } from 'react';

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const years = [2022, 2023, 2024, 2025, 2026, 2027]

export function App() {
    const [cardNumber, setCardNumber] = useState(undefined)
    const [cardCVC, setCardCVC] = useState('')
    const [cardHolder, setCardHolder] = useState('');
    const [selectedMonth, setSelectedMonth] = useState(undefined)
    const [selectedYear, setSelectedYear] = useState(undefined)

    function handleCardNumberChange(userCardNumberInput) {
        setCardNumber(event.target.value);
    }

    function handleCardHolderChange(userCardNameInput) {
        setCardHolder(event.target.value)
    }

    return (
        <main className="container">
            <section className="credit-card-form">
                <form>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="tel" name="cardNumber" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="XXXX XXXX XXXX XXXX " defaultValue={cardNumber} onChange={handleCardNumberChange}/>

                    <label htmlFor="cardName">Card Name</label>
                    <input type="text" name="cardName" placeholder="Card Name" aria-label="Card Name" required defaultValue={cardHolder} onChange={handleCardHolderChange}/>

                    <div className="grid">
                        <fieldset id="date-selector">
                            <label for="month">Expiration Month</label>
                            <select id="month" name="month" required onSelect={(event) => setSelectedMonth(event.target.value)}>
                                <option value=''>Month</option>
                                {months.map(month => (
                                    <option value={month}>{month.toString().padStart(2, 0)}</option>
                                ))}
                            </select>
                        </fieldset>
                        <fieldset>
                            <label for="month" visuallyHidden>Expiration Year</label>
                            <select id="month" name="month" required onSelect={(event) => setSelectedYear(event.target.value)} >
                                <option value=''>Year</option>
                                {years.map(year => (
                                    <option value={year}>{year}</option>
                                ))}
                            </select>
                        </fieldset>
                        <fieldset>
                            <label for="frmCCCVC">CVC</label>
                            <input name="cvc" id="frmCCCVC" required autocomplete="cc-csc" maxLength="3" placeholder="* * *" defaultValue={cardCVC} onChange={(event) => SetCardCVC(event.target.value)}/>
                        </fieldset>
                    </div>

                    <fieldset>
                        <label htmlFor="terms">
                            <input type="checkbox" role="switch" id="terms" name="terms" />
                            I agree to the <a href="#">Privacy Policy</a>
                        </label>
                    </fieldset>


                    <button type="submit">Submit</button>
                </form>
            </section>
        </main>
    )
}