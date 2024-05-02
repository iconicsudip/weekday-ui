/**
 * This function is used to get the currency symbol
 * @param currency  - The currency of the country
 * @returns 
 */

export const getCurrecySymbol = (currency: string) => {
    switch (currency) {
        case 'USD':
        return '$';
        case 'EUR':
        return '€';
        case 'GBP':
        return '£';
        case 'INR':
        return '₹';
        default:
        return currency;
    }
}