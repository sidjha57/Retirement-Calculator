/**
 * Calculates the future value of a single investment.
 * @param presentValue - The present value of the investment.
 * @param numberOfYears - The number of years the investment is held.
 * @param annualRateOfInterest - The annual interest rate.
 * @returns The future value of the investment.
 */
export function FutureValue(presentValue: number, numberOfYears: number, annualRateOfInterest: number): number {
    annualRateOfInterest /= 100;

    // FV = PV * (1+r)^n
    const futureValue = presentValue * Math.pow((1 + annualRateOfInterest), numberOfYears);

    return Math.ceil(futureValue);
}

/**
 * Calculates the future value of a series of monthly contributions (SIP).
 * @param monthlyContribution - The monthly contribution amount.
 * @param numberOfYears - The number of years the contributions are made.
 * @param annualRateOfInterest - The annual interest rate.
 * @returns The future value of the SIP.
 */
export function SIPComponent(monthlyContribution: number, numberOfYears: number, annualRateOfInterest: number): number {
    const numberOfMonths = numberOfYears * 12;

    annualRateOfInterest /= 100;

    const monthlyRateOfInterest = annualRateOfInterest / 12;

    // FV = MC * [(1+MRI)^NOM - 1] * (1 + MRI) / MRI
    const wealthAtRetirement = monthlyContribution * (Math.pow(1 + monthlyRateOfInterest, numberOfMonths) - 1) * ((1 + monthlyRateOfInterest) / monthlyRateOfInterest);

    return Math.ceil(wealthAtRetirement);
}

/**
 * Calculates the estimated pension pot at the current age.
 * @param presentValue - The present value of existing investments.
 * @param monthlyContribution - The monthly contribution amount.
 * @param numberOfYears - The number of years to calculate the pension pot.
 * @param annualRateOfInterest - The annual interest rate.
 * @returns The estimated pension pot at the current age.
 */
export function EstimatedPensionPotCurrent(presentValue: number, monthlyContribution: number, numberOfYears: number, annualRateOfInterest: number): number {
    const pensionPot = FutureValue(presentValue, numberOfYears, annualRateOfInterest);
    const sipComponent = SIPComponent(monthlyContribution, numberOfYears, annualRateOfInterest);

    const estimatedPensionPot = pensionPot + sipComponent;

    return Math.ceil(estimatedPensionPot);
}

/**
 * Calculates the monthly income needed to sustain a desired monthly income until the age of 90.
 * @param futureValue - The future value of the investment.
 * @param retirementAgeInYears - The retirement age.
 * @param annualRateOfInterest - The annual interest rate.
 * @returns The required monthly income.
 */
export function MonthlyIncome(futureValue: number, retirementAgeInYears: number, annualRateOfInterest: number): number {
    const numberOfMonths = (90 - retirementAgeInYears) * 12;
    annualRateOfInterest /= 100;

    const monthlyRateOfInterest = annualRateOfInterest / 12;

    // Monthly Income = (FV * r) / ((1+r)^n - 1)
    const monthlyIncome = (futureValue * monthlyRateOfInterest) / ((Math.pow(1 + monthlyRateOfInterest, numberOfMonths) - 1) * (1 + monthlyRateOfInterest));

    return Math.ceil(monthlyIncome);
}

/**
 * Calculates the estimated pension pot required to sustain a desired monthly income until the age of 90.
 * @param desiredMonthlyIncome - The desired monthly income after retirement.
 * @param retirementAgeInYears - The retirement age.
 * @param annualRateOfInterest - The annual interest rate.
 * @returns The estimated pension pot required.
 */
export function EstimatedPensionPotRequired(desiredMonthlyIncome: number, retirementAgeInYears: number, annualRateOfInterest: number): number {
    // Pension Pot = DMI * ((1+r)^n - 1) / r
    return SIPComponent(desiredMonthlyIncome, (90 - retirementAgeInYears), annualRateOfInterest);
}

/**
 * Calculates the monthly contribution required to achieve a target pension pot.
 * @param pensionPotEstimated - The estimated pension pot.
 * @param numberOfYears - The number of years to calculate the contribution.
 * @param annualRateOfInterest - The annual interest rate.
 * @returns The required monthly contribution.
 */
export function monthlyContributionRequired(pensionPotEstimated: number, numberOfYears: number, annualRateOfInterest: number): number {
    return MonthlyIncome(pensionPotEstimated, numberOfYears, annualRateOfInterest);
}
