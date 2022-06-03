# # online-grocery-store-frontend

This is an online-grocery-store frontend built with ReactJS. For the resources a dummy server has been created with json-server which the app accesses with Fetch api and performs different CRUD operations on.

## Clone the repo
clone the repo with the following command:
```
git clone https://github.com/kekcode-9/online-grocery-store-frontend.git
```

## Installation

run the command bellow to install all dependencies:
```
npm install
```
## Running the json-server
In VS Code open a terminal and run the following command:
```
npx json-server --watch data/db.json --port 8000
```

## Running the react app
Open a separate terminal (without closing the last one) and run:
```
npm start
```

## Changing port for server
Modify the command for running json-server by replacing 8000 with desired port.
Next, in App.js file, change the content of ```baseUrl``` to ```'http://localhost:<port-number>/'``` and replace <port-number> with the desired port number.

## App functionality (so far)
1. The app does not have a user-login/registration feature.
2. Items can be added to and removed from cart.
3. Items from Cart can be ordered by clicking on the "payout" button.
4. Items can be removed from the orders list by clicking on the "Cancel Order" button.
5. Presently, one item can only be added one time to the cart.
