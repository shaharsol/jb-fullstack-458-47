const generate = (length = 10, isUseSpecialChars = false) => {
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  if (isUseSpecialChars) {
    characters += "!@#$%^&*()_";
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  return password;
};

module.exports = {
  generate,
};
