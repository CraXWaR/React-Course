export default function UserInputs({inputFunction, userInput}) {
    return (<section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="initialInvestment">Initial Investment</label>
                <input type="number" id="initialInvestment" name="initialInvestment"
                       value={userInput.initialInvestment} required
                       onChange={(e) => inputFunction('initialInvestment', e.target.value)}/>
            </p>
            <p>
                <label htmlFor="annualInvestment">Annual Investment</label>
                <input type="number" id="annualInvestment" name="annualInvestment"
                       value={userInput.annualInvestment} required
                       onChange={(e) => inputFunction('annualInvestment', e.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="expectedReturn">Expected Return (%)</label>
                <input type="number" step="0.1" id="expectedReturn" name="expectedReturn"
                       value={userInput.expectedReturn} required
                       onChange={(e) => inputFunction('expectedReturn', e.target.value)}/>
            </p>
            <p>
                <label htmlFor="duration">Duration (years)</label>
                <input type="number" id="duration" name="duration"
                       value={userInput.duration} required
                       onChange={(e) => inputFunction('duration', e.target.value)}/>
            </p>
        </div>
    </section>);
}