import React from 'react'
import {calculateInvestmentResults,formatter} from '../util/investment'

function Result({investmentData}) {
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
      {calculateInvestmentResults(investmentData).map((data) => (
        <tr key={data.year}>
          <td>{data.year}</td>
          <td>{formatter.format(data.valueEndOfYear)}</td>
          <td>{formatter.format(data.interest)}</td>
          <td>{formatter.format(data.interest)}</td>
          <td>{formatter.format(data.valueEndOfYear - data.interest)}</td>
        </tr>
      ))}
    </tbody>
    </table>
  )
}

export default Result