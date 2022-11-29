# Shopping Cart Simulator

The purpose of this app is to simluate adding items to a online-store shopping cart.

The basic UI of the app is as shown in the figure below. A number of cards are organized from dummy data in a local json file. As the "add to cart" button is clicked, the items are added to the cart and the icon above the "My Cart" tab increments. The cart data is saved on localStorage.

<p align="center">
  <img src="https://github.com/KCrandall6/shopping-cart-sim/blob/main/figures/Screen%20Shot%202022-11-29%20at%2012.41.59%20AM.png" alt="Main App Screen Shot"/>
</p>

The "My Cart" tab includes the items added to the cart. Here you have the option to "delete from cart" which will delete the item and decrement the total cost as well as the count badge.

<p align="center">
  <img src="https://github.com/KCrandall6/shopping-cart-sim/blob/main/figures/Screen%20Shot%202022-11-29%20at%2012.42.36%20AM.png" alt="My Cart Screen Shot"/>
</p>

Feel free to fork and add additional features!!


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.