module.exports = {

    getTotalValues : (amount, totalEmails) => {

        let value
        const remainder = amount % totalEmails
        const valuesArray = new Array(totalEmails)

        if(remainder == 0){
            value = amount / totalEmails
            valuesArray.fill(value)

        } else {
            value = (amount - remainder) / totalEmails
            valuesArray.fill(value)

            for(i = 0; i < remainder; i++){
                valuesArray[i] = valuesArray[i] + 1
            }
        }
        return valuesArray.reverse()
    },

    getValuesPerEmail : (emails, valuesArray) =>{
        const valuePerEmail = new Map()
        emails.forEach((element, index) => {
            valuePerEmail.set(element, valuesArray[index] + " cents")
        })
        return valuePerEmail
    }

}