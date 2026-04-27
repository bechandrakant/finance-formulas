# finance-formulas 💰

[![npm version](https://img.shields.io/npm/v/finance-formulas.svg)](https://www.npmjs.com/package/finance-formulas)
[![CI](https://github.com/bechandrakant/finance-formulas/actions/workflows/ci.yml/badge.svg)](https://github.com/bechandrakant/finance-formulas/actions)
[![Downloads](https://img.shields.io/npm/dm/finance-formulas)](https://www.npmjs.com/package/finance-formulas)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/bechandrakant/finance-formulas/ci.yml)
![License](https://img.shields.io/npm/l/finance-formulas)
![TypeScript](https://img.shields.io/badge/TypeScript-supported-blue)
[![semantic-release](https://img.shields.io/badge/semantic--release-automated-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

Simple finance calculators for JavaScript/TypeScript with full type safety and comprehensive tests.

## Install

npm install finance-formulas

## Usage

```js
import {
  calculateSIP,
  calculateSIPWithInflation,
  calculateEMI,
  calculateFD,
  calculateCAGR,
  calculateTotalInterest,
  timeToDouble,
  retirementCorpus,
  lumpsumFutureValue,
} from "finance-formulas";

// SIP
calculateSIP(5000, 12, 10);
// → 1161695

// SIP with inflation adjustment
calculateSIPWithInflation(5000, 12, 3, 10);
// → 864410

// EMI
calculateEMI(500000, 8.5, 20);
// → { emi: 4339, totalPayment: 1041388, totalInterest: 541388 }

// Total Interest Paid
calculateTotalInterest(500000, 4339, 20);
// → 541360

// Time to Double Money (Rule of 72)
timeToDouble(7);
// → 10.285714285714286

// FD
calculateFD(100000, 7, 5);
// → { maturityAmount: 140255, interestEarned: 40255 }

// CAGR
calculateCAGR(10000, 20000, 3);
// → 26 (%)

// Retirement Corpus
retirementCorpus(50000, 3, 20, 30, 7);
// → 13447265

// Lump Sum Future Value
lumpsumFutureValue(1000, 5, 10);
// → 1629
```

## TypeScript Support

This package includes full TypeScript definitions. All functions are properly typed:

```typescript
import {
  calculateSIP,
  calculateSIPWithInflation,
  calculateEMI,
  calculateFD,
  calculateCAGR,
  calculateTotalInterest,
  timeToDouble,
  retirementCorpus,
  lumpsumFutureValue,
  EMIResult,
  FDResult,
} from "finance-formulas";

const emiResult: EMIResult = calculateEMI(500000, 8.5, 20);
const fdResult: FDResult = calculateFD(100000, 7, 5);
const totalInt: number = calculateTotalInterest(500000, 4339, 20);
const doubleTime: number = timeToDouble(7);
const corpus: number = retirementCorpus(50000, 3, 20, 30, 7);
const futureValue: number = lumpsumFutureValue(1000, 5, 10);
```

## Testing

Run tests with:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

## API Reference

### `calculateSIP(monthlyInvestment: number, annualRate: number, years: number): number`

Calculates the future value of a Systematic Investment Plan (SIP).

- `monthlyInvestment`: Monthly investment amount
- `annualRate`: Annual return rate (percentage)
- `years`: Investment period in years

### `calculateSIPWithInflation(monthlyInvestment: number, annualRate: number, inflationRate: number, years: number): number`

Calculates the inflation-adjusted future value of a SIP.

- `monthlyInvestment`: Monthly investment amount
- `annualRate`: Annual return rate (percentage)
- `inflationRate`: Annual inflation rate (percentage)
- `years`: Investment period in years

### `calculateEMI(loanAmount: number, annualRate: number, years: number): EMIResult`

Calculates Equated Monthly Installment for a loan.

- `loanAmount`: Total loan amount
- `annualRate`: Annual interest rate (percentage)
- `years`: Loan tenure in years

Returns:

```typescript
{
  emi: number; // Monthly EMI amount
  totalPayment: number; // Total amount to be paid
  totalInterest: number; // Total interest to be paid
}
```

### `calculateFD(principal: number, annualRate: number, years: number): FDResult`

Calculates Fixed Deposit maturity amount.

- `principal`: Initial deposit amount
- `annualRate`: Annual interest rate (percentage)
- `years`: Deposit period in years

Returns:

```typescript
{
  maturityAmount: number; // Final maturity amount
  interestEarned: number; // Total interest earned
}
```

### `calculateTotalInterest(principal: number, emi: number, years: number): number`

Calculates total interest paid on a loan.

- `principal`: Principal loan amount
- `emi`: Monthly EMI amount
- `years`: Loan tenure in years

Useful complement to `calculateEMI` for understanding the true cost of borrowing.

**Example:**

```typescript
// Get EMI for a 500000 loan at 8.5% for 20 years
const emiResult = calculateEMI(500000, 8.5, 20);
// → { emi: 4339, totalPayment: 1041388, totalInterest: 541388 }

// Calculate total interest separately
const totalInterest = calculateTotalInterest(500000, 4339, 20);
// → 541360
```

### `timeToDouble(rate: number): number`

Estimates years required to double money using the Rule of 72.

The Rule of 72 is a simple formula that estimates how long it will take
for an investment to double in value at a given annual interest rate.
It's a quick mental math approximation that's surprisingly accurate
for interest rates between 5% and 10%.

- `rate`: Annual interest rate (in percentage, e.g., 7 for 7%)

Returns estimated years to double the investment.

**Example:**

```typescript
// At 7% annual return, money doubles in about 10.29 years
timeToDouble(7);
// → 10.285714285714286

// At 8% annual return, money doubles in about 9 years
timeToDouble(8);
// → 9
```

### `calculateCAGR(beginValue: number, endValue: number, years: number): number`

Calculates Compound Annual Growth Rate.

- `beginValue`: Initial value
- `endValue`: Final value
- `years`: Time period in years

Returns the CAGR as a percentage (rounded to nearest integer).

### `lumpsumFutureValue(principal: number, annualRate: number, years: number): number`

Calculates the future value of a lump sum investment using compound interest.

Used when someone invests once and lets it grow over time.

Formula: FV = P (1 + r)^n

- `principal`: Initial investment amount (present value)
- `annualRate`: Annual interest rate as a percentage (e.g., 5 for 5%)
- `years`: Number of years the investment will grow

Returns the future value of the investment (rounded to nearest integer).

**Example:**

```typescript
// Calculate future value of $1000 at 5% annual rate for 10 years
lumpsumFutureValue(1000, 5, 10);
// → 1629

// Calculate future value of ₹50000 at 7% for 5 years
lumpsumFutureValue(50000, 7, 5);
// → 70128
```

### `retirementCorpus(monthlyExpense: number, inflationRate: number, yearsToRetirement: number, yearsAfterRetirement: number, returnRate: number): number`

Calculates the lump sum retirement corpus needed to sustain expenses
throughout retirement, accounting for inflation during the accumulation
phase and investment returns during the retirement phase.

This function helps answer: "How much money do I need at retirement?"

- `monthlyExpense`: Current monthly expense amount
- `inflationRate`: Annual inflation rate (percentage, e.g., 3 for 3%)
- `yearsToRetirement`: Number of years until retirement
- `yearsAfterRetirement`: Number of years to sustain in retirement
- `returnRate`: Expected annual return rate (percentage, e.g., 7 for 7%)

Returns the required retirement corpus amount (rounded to nearest integer).

**Example:**

```typescript
// Calculate corpus needed for retirement:
// - Current monthly expense: ₹50,000
// - Inflation rate: 3% annually
// - 20 years until retirement
// - 30 years of retirement to sustain
// - Expected returns: 7% annually
retirementCorpus(50000, 3, 20, 30, 7);
// → 13447265

// For lower monthly expenses
retirementCorpus(30000, 3, 20, 30, 7);
// → 8068359
```
