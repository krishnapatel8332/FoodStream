/\*\*

FOOD ORDERING APP

- Header
- -Logo
- -carts
- -bav bar
- body
- -search
- -restaurant container
- -restaurant card
- --img
- --name of the restaurant , starts rating, cuisines ,delivery time

---

- footer
- -adress
- -copy right
- -contact
- -links
  \*/

// useState and useEffect are two hook function which re-renders aur components
// shimmer ui is used to show the fake pages until the api is fetched and this is CONSITIONAL RENDERING
// ? is used in the optional chaining and this to avoid any null or undefind object..
// whenever the state variable updates ,react triggers a reconcilliation(re renders the component) \*
useEffect
it is imported from the react library
it take two argument call back function and a depedency array
if dependecy array is empty the called once initial render
if depemdemcy array is given as argument the useeffect get called at every render
if dependency array is [loginbtn] => called everytime when loginbtn gets changed or updated

Never use useState in any condition or outside the function

                                                      Different Routes

\*
Router Provider will provide this routing configuration to the app
errorElement is used when we want to show any type of error on the webpage using errorElement;
react router dom give us access to a hook useRouterError using this it gives more information of error
children routes
Outlet a very important component of router which fills the path of according to their children
outlet is used when we want to render 2 or more components at the same time i.e it can be header and footer \* Link \* is a super power given by dom to naviagte our page without refres
network side routing -: The whole page doest relowed it render only component
