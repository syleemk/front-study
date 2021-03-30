// Callback Hell example
// Promise 객체를 사용함으로써 더이상 인자로 나중에 호출할 callback 전달받지 않아도됨
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
  .loginUser(id, password)
  // .then(user=> userStorage.getRoles(user))
  .then(userStorage.getRoles)
  .then((userWithRole) =>
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
  )
  .catch(console.log);
