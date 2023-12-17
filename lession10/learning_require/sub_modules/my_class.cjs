class MyClass {
  #className = "Test With Me";
  #admin = "Tho Test";
  print() {
    console.log(`Welcome to group ${this.#className} - Admin ${this.#admin}`);
  }
}

module.exports = MyClass;