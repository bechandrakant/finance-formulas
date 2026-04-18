# finance-formulas 💰

[![npm version](https://img.shields.io/npm/v/finance-formulas.svg)](https://www.npmjs.com/package/finance-formulas)
[![CI](https://github.com/bechandrakant/finance-formulas/actions/workflows/ci.yml/badge.svg)](https://github.com/bechandrakant/finance-formulas/actions)
[![Downloads](https://img.shields.io/npm/dm/finance-formulas)](https://www.npmjs.com/package/finance-formulas)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/bechandrakant/finance-formulas/ci.yml)
![License](https://img.shields.io/npm/l/finance-formulas)
![TypeScript](https://img.shields.io/badge/TypeScript-supported-blue)

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

// FD
calculateFD(100000, 7, 5);
// → { maturityAmount: 140255, interestEarned: 40255 }

// CAGR
calculateCAGR(10000, 20000, 3);
// → 26 (%)
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
  EMIResult,
  FDResult,
} from "finance-formulas";

const emiResult: EMIResult = calculateEMI(500000, 8.5, 20);
const fdResult: FDResult = calculateFD(100000, 7, 5);
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

### `calculateCAGR(beginValue: number, endValue: number, years: number): number`

Calculates Compound Annual Growth Rate.

- `beginValue`: Initial value
- `endValue`: Final value
- `years`: Time period in years

Returns the CAGR as a percentage (rounded to nearest integer).
