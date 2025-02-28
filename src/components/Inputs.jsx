import React, { useState } from 'react'

function Inputs({ investmentData, handleInvestmentData }) {

    return (
        <section id="user-input">
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input value={investmentData.initialInvestment} onChange={(e) => handleInvestmentData(e)} name='initialInvestment' type="number" />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input value={investmentData.annualInvestment} onChange={(e) => handleInvestmentData(e)} name='annualInvestment' type="number" />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected Return</label>
                    <input value={investmentData.expectedReturn} onChange={(e) => handleInvestmentData(e)} name='expectedReturn' type="number" />
                </p>
                <p>
                    <label>Duration</label>
                    <input value={investmentData.duration} onChange={(e) => handleInvestmentData(e)} name='duration' type="number" />
                </p>
            </div>

        </section>

    )
}

export default Inputs