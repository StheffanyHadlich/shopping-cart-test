# Shopping cart

A successful promotional campaign can bring many advantages to businesses looking to acquire new customers, increase sales, or clear out stock. Our goal is to create a simple shopping cart system with a promotional campaign.

### **Promotion**

- **Get 3 for the Price of 2**:
    
    Customers who add multiple products to their cart will receive the third product for free. The free product will always be the lowest-priced item.
    
    - Buy 1, pay for 1.
    - Buy 2, pay for 2.
    - Buy 3, pay for 2 (lowest-priced item is free).
    - Buy 4, pay for 3, and so on.

## **Key Requirements**

- The API should be able to **Add** and **Remove** items from the shopping cart.
- The API should calculate the **total price** based on:
    - The items user has added to cart;
    - Whether or not it is eligible for the **"Get 3 for 2" promotion.**

---

### **Product Price Table**

| Product | Price (USD) |
| --- | --- |
| T-shirt | 35.99 |
| Jeans | 65.50 |
| Dress | 80.75 |

---

### **Sample Scenarios**

**Scenario 1**:

A common customer adds 3 t-shirts to the cart.

- **Expected total**: USD 71.98
    - (Using "Get 3 for 2", the customer pays for 2 t-shirts, and 1 is free).

**Scenario 2**:

A common customer adds 2 t-shirts and 2 jeans.

- **Expected total**: USD 166.99
    - (The free item is the t-shirt since it's the cheapest item).


## **Documentation **

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

