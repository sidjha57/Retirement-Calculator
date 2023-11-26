import { CurrencyCodeType } from "types/userDefinedTypes"
import { CURRENCIES } from "@utils/constants"

export const formattedCurrency = (currencyCode: CurrencyCodeType, currencyValue: number) => {
    return Intl.NumberFormat(CURRENCIES[currencyCode as CurrencyCodeType].locale, {style: 'currency', currency: currencyCode, maximumFractionDigits: 0}).format(currencyValue)
}