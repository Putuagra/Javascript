const personAccount = {
  firstName: "Jamal",
  lastName: "Udin",
  incomes: [],
  expenses: [],

  totalIncome() {
    const total = this.incomes.reduce((acc, num) => acc + num, 0);
    return total;
  },

  totalExpense() {
    const total = this.expenses.reduce((acc, num) => acc + num, 0);
    return total;
  },

  accountInfo() {
    return `Account Information for ${this.firstName} ${this.lastName}:
Total Income: ${this.totalIncome()}
Total Expenses: ${this.totalExpense()}
Account Balance: ${this.accountBalance()}`;
  },

  addIncome(amount) {
    this.incomes.push(amount);
  },

  addExpense(amount) {
    this.expenses.push(amount);
  },

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};

personAccount.addIncome(100000);
personAccount.addExpense(50000);
personAccount.addExpense(25000);

console.log(personAccount.accountInfo());

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp(newUser) {
  const existingUser = users.find((user) => user.email === newUser.email);

  if (existingUser) {
    return "User already has an account.";
  }

  newUser._id = generateId();
  newUser.createdAt = new Date().toLocaleString();
  newUser.isLoggedIn = false;

  users.push(newUser);

  return "User has been successfully registered.";
}

function generateId() {
  return Math.random().toString(36).substr(2, 6);
}

const newUser = {
  username: "John",
  email: "john@example.com",
  password: "123456",
};

console.log(signUp(newUser));
console.log(users);

function signIn(email, password) {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return "Email not found.";
  }

  if (user.password !== password) {
    return "Incorrect email or password.";
  }

  user.isLoggedIn = true;
  return "User successfully logged in.";
}

const email = "alex@alex.com";
const password = "123123";

console.log(signIn(email, password));

function rateProduct(productId, userId, rateValue) {
  const productObj = products.find((product) => product._id === productId);

  if (!productObj) {
    return "product not found";
  }

  if (rateValue < 1 || rateValue > 5) {
    return "Rate must between 1 and 5";
  }

  productObj.ratings.push({ userId, rate: rateValue });
  return "Product has been rated successfully.";
}

const productId = "hedfcg";
const userId = "ghderc";
const rating = 4;

console.log(rateProduct(productId, userId, rating));
console.log(products);

function averageRating(productId) {
  const product = products.find((product) => product._id === productId);

  if (!product) {
    return "Product not found.";
  }

  if (product.ratings.length === 0) {
    return "No ratings available for this product.";
  }

  const totalRating = product.ratings.reduce(
    (acc, rating) => acc + rating.rate,
    0
  );
  const average = totalRating / product.ratings.length;
  return average.toFixed(2); // Return 2 decimal
}

const productId2 = "eedfcf";

console.log("Average Rating:", averageRating(productId2));

function likeProduct(productId, userId) {
  const product = products.find((product) => product._id === productId);

  if (!product) {
    return "Product not found.";
  }

  const userLiked = product.likes.includes(userId);

  if (userLiked) {
    product.likes = product.likes.filter(
      (likedUserId) => likedUserId !== userId
    );
    return "Product has been unliked.";
  } else {
    product.likes.push(userId);
    return "Product has been liked.";
  }
}

const productIdLike = "aegfal";
const userIdLike = "as12de";

console.log(likeProduct(productIdLike, userIdLike));
console.log(products);
