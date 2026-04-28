import { type FormEvent, useMemo, useState } from 'react'

type LoanResult = {
  monthlyInstalment: number
  totalInterestPayable: number
  totalAmount: number
}

const formatter = new Intl.NumberFormat('en-BW', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

function formatPula(value: number) {
  return `P ${formatter.format(value)}`
}

export function LoanCalculator() {
  const [amount, setAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [periodMonths, setPeriodMonths] = useState('')
  const [error, setError] = useState('')
  const [result, setResult] = useState<LoanResult | null>(null)

  const results = useMemo(
    () => [
      {
        label: 'Monthly Instalment',
        value: result ? formatPula(result.monthlyInstalment) : '--',
      },
      {
        label: 'Total Interest Payable',
        value: result ? formatPula(result.totalInterestPayable) : '--',
      },
      {
        label: 'Total Amount',
        value: result ? formatPula(result.totalAmount) : '--',
      },
    ],
    [result],
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const principal = Number(amount)
    const annualRate = Number(interestRate)
    const months = Number(periodMonths)

    if (!amount || !interestRate || !periodMonths) {
      setError('Enter an amount, interest rate, and repayment period.')
      setResult(null)
      return
    }

    if (
      Number.isNaN(principal) ||
      Number.isNaN(annualRate) ||
      Number.isNaN(months) ||
      principal <= 0 ||
      annualRate < 0 ||
      months <= 0
    ) {
      setError('Use valid positive numbers. Interest rate may be zero, but not negative.')
      setResult(null)
      return
    }

    const monthlyRate = annualRate / 100 / 12
    const monthlyInstalment =
      monthlyRate === 0
        ? principal / months
        : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))

    const totalAmount = monthlyInstalment * months
    const totalInterestPayable = totalAmount - principal

    setError('')
    setResult({
      monthlyInstalment,
      totalInterestPayable,
      totalAmount,
    })
  }

  return (
    <div className="calculator-card">
      <form className="loan-form" onSubmit={handleSubmit} noValidate>
        <label className="field">
          <span>Amount (BWP)</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="25000"
          />
        </label>

        <label className="field">
          <span>Interest Rate (%)</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={interestRate}
            onChange={(event) => setInterestRate(event.target.value)}
            placeholder="12"
          />
        </label>

        <label className="field">
          <span>Period in Months</span>
          <input
            type="number"
            min="1"
            step="1"
            value={periodMonths}
            onChange={(event) => setPeriodMonths(event.target.value)}
            placeholder="12"
          />
        </label>

        <button className="button button--primary button--full" type="submit">
          Calculate
        </button>
      </form>

      {error ? <p className="calculator-error">{error}</p> : null}

      <div className="results-grid">
        {results.map((item) => (
          <div className="result-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <p className="calculator-disclaimer">
        This is an annualised loan calculator. For monthly returns and a detailed
        amortization schedule, please login.
      </p>
    </div>
  )
}
