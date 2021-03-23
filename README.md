# Challenge  - Shopping List

### Objectives


This project aims to calculate the values of a shopping list and divide that same value among a group of people.
To solve the challenge, the process was broken down into four parts:


1) Sum the total value per item using a JavaScript *map* function, which returns an array. The response is stored in the *eachItemTotal* variable.

2) Perform the sum of all items using JavaScript's *reduce* and store it in the *totalAmount* variable.


3) The calculation of how much each person must pay is done and stored in a vector called *valuePerPerson*. This process takes place as follows:
+ Calculate the mod of the total value by the number of people, which gives us two possibilities: there is and there is no remainder.
    + If there is no remainder, an array is created with the same number of people and everyone will pay the same amount (for example, the total purchase is 4000 cents, so we have an array of [1000, 1000, 1000, 1000]).
    + Otherwise, I subtract the remainder from the total amount. For example, 22 cents for 5 people: the remainder is 2, then the subtraction of 22 - 2 results in 20. The result is divided by the number of people and the answer attributed to all indexes of an array that is the same size as the number of people (20/5 = 4, so we have a array of [4, 4, 4, 4, 4]). Then, a loop with size of the remainder is performed, so that some of the people receive a cent more, in order to reach the total amount that must be paid. Finally, the array is reversed, so that, if there is a larger value (for example: [5, 5, 4, 4, 4]), it stays at the end of the array ([4,4,4,5,5]). And it works pretty fine even if the total value is inferior than the number of people.
	
4) I create a *Map*, using E-mails as the key and assigning each of the values of the array that is returned above. At last, the answer is stored in the *anwser* variable and logged at the console.


### Test Procedure


*Challenge function parameters:*

The challenge function expects two lists as parameters. A list of objects containing the information for each item on the shopping list and a list with the E-mails of those who will make the payment.

**Item's list:**

It must contain at least one object with the 3 fields below:

| Field | Data Type |
| ------ | ------ |
| item | *string* |
| price | *number* (must be an integer) |
| quantity | *number* (must be an integer) |



This is the item list template:

```javascript
    [{ 
        item: "Chocolate",
        price: 501, 
        quantity: 3
    },
    { 
        item: "Coffee",
        price:  755,
        quantity: 4
    }]
```

*Note: We are working with cents, so the "price" field expects an integer value in order to avoid conversion losses.*

**E-mails's list:**

It should contain only the strings with the E-mails::

```javascript
    ['example@example.com', 'test@test.com']
```

### Starting the test:

After unzip the file and enter the challenge folder. Just pass the two parameters below to start the process:

```JavaScript
const shoppingList = [{ 
    item: "Chocolate",
    price: 501, 
    quantity: 3
},
{ 
    item: "Coffee",
    price:  755,
    quantity: 4
}]

const emails = ['example@example.com', 'test@test.com']

challenge(shoppingList, emails)
```

Inside the "challenge" folder, execute at the prompt the command below:

```
node index.js
```

Finally, the challenge answer will be:

```sh
Map(2) {
  'example@example.com' => '2261 cents',
  'test@test.com' => '2262 cents'
}
```
