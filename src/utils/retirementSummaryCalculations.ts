export function FutureValue (presentValue: number, numberOfYears: number, annualRateOfInterest: number): number {
    if (annualRateOfInterest > 1) {
        annualRateOfInterest /= 100;
    }
    // FV = PV * (1+r)^n
    return presentValue * Math.pow((1 + annualRateOfInterest), numberOfYears);
}

export function SIPComponent (monthlyContribution: number, numberOfYears: number, annualRateOfInterest: number): number {
    const numberOfMonths = (numberOfYears) * 12;
    if (annualRateOfInterest > 1) {
        annualRateOfInterest /= 100;
    }
    const monthlyRateOfInterest = annualRateOfInterest / 12;

    // FV = MC * [(1+MRI)^NOM - 1] * (1 + MRI) / MRI
    return monthlyContribution * (Math.pow(monthlyRateOfInterest + 1, (numberOfMonths - 1)) * ((1 + monthlyRateOfInterest) / monthlyRateOfInterest));
}

export function EstimatedPensionPotCurrent (presentValue: number, monthlyContribution: number, numberOfYears: number, annualRateOfInterest: number): number {
    return FutureValue(presentValue, numberOfYears, annualRateOfInterest) + SIPComponent(monthlyContribution, numberOfYears, annualRateOfInterest);
}

export function MonthlyIncome (futureValue: number, retirementAgeInYears: number, annualRateOfInterest: number): number {
    const numberOfMonths = (90 - retirementAgeInYears) * 12;
    if (annualRateOfInterest > 1) {
        annualRateOfInterest /= 100;
    }
    const monthlyRateOfInterest = annualRateOfInterest / 12;
    
    // Monthly Income = (FV * r)/ ((1+r)^n - 1)
    return (futureValue * monthlyRateOfInterest) / (Math.pow(1+monthlyRateOfInterest, numberOfMonths) - 1);
}

export function EstimatedPensionPotRequired (desiredMonthlyIncome: number, retirementAgeInYears: number, annualRateOfInterest: number): number {
    const numberOfMonths = (90 - retirementAgeInYears) * 12;
    if (annualRateOfInterest > 1) {
        annualRateOfInterest /= 100;
    }
    const monthlyRateOfInterest = annualRateOfInterest / 12;
    
    // Pension Pot = DMI * ((1+r)^n - 1) / r
    return desiredMonthlyIncome * (Math.pow(1+monthlyRateOfInterest, numberOfMonths) - 1) / monthlyRateOfInterest;
}

export function monthlyContributionRequired (pensionPotEstimated: number, numberOfYears: number, annualRateOfInterest: number): number {
    const numberOfMonths = (numberOfYears) * 12;
    if (annualRateOfInterest > 1) {
        annualRateOfInterest /= 100;
    }
    const monthlyRateOfInterest = annualRateOfInterest / 12;

    return ( pensionPotEstimated * monthlyRateOfInterest ) / (Math.pow(1+monthlyRateOfInterest, numberOfMonths) - 1);
}

