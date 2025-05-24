import {calculateInvestmentResults, formatter} from "../util/investment.js";

export function Result({input}) {
    const result = calculateInvestmentResults(input);
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

    return (<table id="result">
        <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>PInterest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        </thead>
        <tbody>
        {result.map(year => {
            const totalInterest = year.valueEndOfYear - year.annualInvestment * year.year - initialInvestment;
            const totalAmountInvested = year.valueEndOfYear - totalInterest;

            return <tr key={year.year}>
                <td>{year.year}</td>
                <td>{formatter.format(year.valueEndOfYear)}</td>
                <td>{formatter.format(year.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
            </tr>;
        })}
        </tbody>
    </table>);
}