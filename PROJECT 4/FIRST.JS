function calculateTax() {
    // Define the tax brackets and rates
    const taxBrackets = [
        { threshold: 10000, rate: 0.1 }, // 10% for income up to $10,000
        { threshold: 30000, rate: 0.15 }, // 15% for income from $10,001 to $30,000
        { threshold: 100000, rate: 0.2 }, // 20% for income from $30,001 to $100,000
        { threshold: Infinity, rate: 0.25 } // 25% for income above $100,000
    ];

    return function(income) {
        let tax = 0;
        let previousThreshold = 0;

        for (const bracket of taxBrackets) {
            if (income > previousThreshold) {
                const taxableIncome = Math.min(income, bracket.threshold) - previousThreshold;
                tax += taxableIncome * bracket.rate;
                previousThreshold = bracket.threshold;
            } else {
                break;
            }
        }

        return tax;
    };
}

// Create the tax calculation function
const taxCalculator = calculateTax();

// Test the function with various incomes
console.log(`Tax on $8,000: $${taxCalculator(8000).toFixed(2)}`); // 10% of $8,000
console.log(`Tax on $15,000: $${taxCalculator(15000).toFixed(2)}`); // 10% on first $10k, 15% on $5k
console.log(`Tax on $50,000: $${taxCalculator(50000).toFixed(2)}`); // 10% on first $10k, 15% on next $20k, 20% on $20k
console.log(`Tax on $120,000: $${taxCalculator(120000).toFixed(2)}`); // 10%, 15%, 20%, 25% on remaining
