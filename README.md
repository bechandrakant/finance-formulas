# finance-formulas

## Build finance calculators in minutes, not weekends.

Every fintech app eventually needs the same formulas.

SIP. SWP. EMI. FD. CAGR. Retirement corpus. Present value. Future value.

And somehow, every developer ends up rewriting them from scratch.

`finance-formulas` gives you clean, tested, TypeScript-first finance math you can drop into your app and ship.

## The Finance Math Layer Your App Deserves

Finance calculators look simple until they are wrong.

A tiny rounding bug can break an EMI estimate. A slightly off return formula can mislead a retirement planner. A copied spreadsheet formula can quietly drift away from what your product actually needs.

This package exists so developers, indie hackers, fintech builders, and students can stop rebuilding the same formulas again and again.

Use it like a tiny finance engine:

- Plug it into calculators, dashboards, onboarding flows, and learning tools
- Trust tested formulas instead of random snippets
- Keep your app code focused on product, UI, and user experience

## Badges

[![npm version](https://img.shields.io/npm/v/finance-formulas.svg)](https://www.npmjs.com/package/finance-formulas)
[![Downloads](https://img.shields.io/npm/dw/finance-formulas)](https://www.npmjs.com/package/finance-formulas)
![License](https://img.shields.io/npm/l/finance-formulas)
[![CI](https://github.com/bechandrakant/finance-formulas/actions/workflows/ci.yml/badge.svg)](https://github.com/bechandrakant/finance-formulas/actions)
![TypeScript](https://img.shields.io/badge/TypeScript-supported-blue)

## Why This Exists

Finance math is easy to underestimate.

You start with one SIP calculator.

Then someone asks for inflation.

Then EMI.

Then retirement corpus.

Then SWP for FIRE planning.

Then variable returns because real markets are not flat lines.

Before you know it, your app has a pile of formulas, edge cases, rounding differences, and tests you did not plan to write.

`finance-formulas` packages those battle-tested formulas into simple, predictable functions.

No drama. No hidden state. Just numbers in, numbers out.

## Features

- SIP calculator for monthly wealth building
- SWP calculator for retirement and FIRE withdrawal planning
- EMI calculator for loans and mortgages
- FD calculator for fixed deposit maturity values
- CAGR calculator for investment growth comparison
- Present Value and Future Value calculators
- Retirement Corpus calculator for long-term planning
- Rule of 72 / Time to Double calculator
- Variable Returns compounding for real-world market scenarios
- Inflation-adjusted SIP support
- Total loan interest calculation

## Install

```bash
npm install finance-formulas
```

```bash
yarn add finance-formulas
```

```bash
pnpm add finance-formulas
```

## Quick Examples

### Plan Monthly Wealth Growth

```ts
import { calculateSIP } from "finance-formulas";

calculateSIP(5000, 12, 10);
// 1161695
```

### Estimate How Long Retirement Money Lasts

```ts
import { calculateSWP } from "finance-formulas";

calculateSWP(1000000, 15000, 6);
// 82 months
```

### Show Loan EMI Instantly

```ts
import { calculateEMI } from "finance-formulas";

calculateEMI(500000, 8.5, 20);
// { emi: 4339, totalPayment: 1041388, totalInterest: 541388 }
```

### Model Real-World Market Returns

```ts
import { compoundWithVariableReturns } from "finance-formulas";

compoundWithVariableReturns(1000, [4, 9, -2, 12]);
// 1244
```

## Who Is This For?

- Fintech apps that need fast, reliable calculators
- Indie hackers shipping money tools
- SaaS dashboards with finance widgets
- FIRE and retirement planning projects
- Interview prep and coding practice
- Students learning finance math
- Builders tired of copying formulas from random blog posts

## Design Philosophy

- Pure functions
- No runtime dependencies
- Tree-shakable exports
- Fully typed TypeScript API
- Tested calculator behavior
- Tiny surface area
- Works in JavaScript and TypeScript

## Roadmap

More calculators are coming.

- XIRR
- IRR
- NPV
- Inflation-adjusted retirement planning
- Step-up SIP
- Goal-based investment calculator
- Loan prepayment calculator
- Debt snowball calculator
- Asset allocation helpers
- Tax-aware return calculators

Have a formula you keep rewriting? Open an issue or send a PR.

## Call To Action

If this saves you from writing one more finance formula by hand:

- Star the repo
- Share it with a developer building money tools
- Use it in your next fintech side project
- Contribute a calculator the ecosystem needs

Small formulas power big products.

## Footer Tagline

Build the product. Let `finance-formulas` handle the math.
