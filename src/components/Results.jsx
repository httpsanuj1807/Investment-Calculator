import { calculateInvestmentResults, formatter } from "../util/investment.js";
function Results({ inputValues }) {
  const resultData = calculateInvestmentResults(inputValues);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearResult) => {
          const totalInterest =
            yearResult.valueEndOfYear -
            yearResult.annualInvestment * yearResult.year - initialInvestment;
          const totalAmountInvested = yearResult.valueEndOfYear - totalInterest;  
          return (
            <tr key={yearResult.year}>
              <td>{yearResult.year}</td>
              <td>{formatter.format(yearResult.valueEndOfYear)}</td>
              <td>{formatter.format(yearResult.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Results;
