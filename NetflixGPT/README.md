# Form Validation working- 
- The user enters input.
- The user clicks "Sign In" or "Sign Up". handleBtnClick is called.
- Input values are sent to FormValidate.
- Regex checks the input:
- If invalid → returns an error message which is displayed.
- If valid → returns null, and the authentication logic (Firebase) runs.
- Any error message is shown on the screen if something is wrong.

---
# How to get data when user types in an input:
- Create a state variable using useState.
- Bind the input’s value to this state variable.
- Use onChange on the input to update the state whenever the user types.
###### This is the one approach which is not optimized beacause:
- State updates trigger re-render
- You don’t need live updates
###### The other way is to use useRef:
- useRef avoids re-render
- It gives faster performance