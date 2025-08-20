// I passed email and password for validation to this function as parameter
export const FormValidate = (email, password, name) => {
  //These are Regular Expressions (Regex). They are patterns used to check whether a string (like email or password) is valid or not !!

  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  // isEmailValid, isNameValid and isPasswordValid---> this will store bool value i.e true / false

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
