// Import all calculator functions
import { calculateSIP, calculateSIPWithInflation } from "./calculators/sip";
import { calculateEMI, EMIResult } from "./calculators/emi";
import { calculateFD, FDResult } from "./calculators/fd";
import { calculateCAGR } from "./calculators/cagr";
import { calculateTotalInterest } from "./calculators/totalInterest";

// Re-export all calculator functions
export {
  calculateSIP,
  calculateSIPWithInflation,
  calculateEMI,
  calculateFD,
  calculateCAGR,
  calculateTotalInterest,
};
export type { EMIResult, FDResult };
