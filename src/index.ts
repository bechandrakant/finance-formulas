// Import all calculator functions
import { calculateSIP, calculateSIPWithInflation } from './calculators/sip';
import { calculateEMI, EMIResult } from './calculators/emi';
import { calculateFD, FDResult } from './calculators/fd';
import { calculateCAGR } from './calculators/cagr';

// Re-export all calculator functions
export { calculateSIP, calculateSIPWithInflation, calculateEMI, calculateFD, calculateCAGR };
export type { EMIResult, FDResult };
