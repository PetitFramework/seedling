export default class CurrencyService {
    constructor ({ position = 'r', currency = '₽', separator = ' ', decimal = ',', decimalCount = 0 }) {
        this.position = position
        this.currency = currency
        this.separator = separator
        this.decimal = decimal
        this.decimalCount = Math.abs(decimalCount)
        this.decimalCount = isNaN(this.decimalCount) ? 0 : this.decimalCount
    }

    get (number) {
        return `${this.formatMoney(number)} ${this.currency}`
    }

    formatMoney (amount) {
        try {
            const negativeSign = amount < 0 ? '-' : ''
            const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(this.decimalCount)).toString()
            const j = (i.length > 3) ? i.length % 3 : 0

            return negativeSign + (j ? i.substr(0, j) + this.separator : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + this.separator) + (this.decimalCount ? this.decimal + Math.abs(amount - i).toFixed(this.decimalCount).slice(2) : '')
        } catch (e) {
            //
        }
    }
}
