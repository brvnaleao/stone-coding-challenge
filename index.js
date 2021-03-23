const { getTotalValues, getValuesPerEmail } = require ('./helpers/functions');
 
/**
 * Returns a Map with the value that a person (e-mail) should pay in cents.
 * @param {Object[]} shoppingList - The shopping list object with three keys: item's name, price and quantity
 * @param {number} shoppingList.price - The shoppingList price of the item.
 * @param {number} shoppingList.quantity - The shoppingList quantity of the item.
 * @param {string} shoppingList.item - The shoppingList's item description.
 * 
 *  @also
 *
 * @param {string[]} emails - The list with e-mails that will pay the bill.
 */
const challenge = (shoppingList, emails) =>  {

        if(emails.length < 1)
            return console.log('There must be at least one person to pay the bill!')
       
           
        if(shoppingList.length < 1)
            return console.log('There must be at least one product at the shopping list!')

         
        const eachItemTotal = shoppingList.map((item) => item.price * item.quantity)
        const totalAmount = eachItemTotal.reduce((acc, itemTotal) => acc + itemTotal)
        const valuePerPerson = getTotalValues(totalAmount, emails.length)
        const anwser = getValuesPerEmail(emails, valuePerPerson)
        console.log(anwser)
}


const shoppingList = [{ 
    item: 'Chocolate',
    price: 501, 
    quantity: 3
},
{ 
    item: 'Coffee',
    price:  755,
    quantity: 4
}]

 
const emails =  ['example@example.com', 'test@test.com']


challenge(shoppingList, emails)