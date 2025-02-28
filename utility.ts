//1
interface User {
    id: number;
    name: string;
    email: string;
  }
  function updateUser(user: Partial<User>): void {
    console.log("Updated user:", user);
  }
  updateUser({ name: "Alice" }); 

  //2
  interface UserProfile {
    id?: number;
    name?: string;
    age?: number;
  }
  type RequiredUserProfile = Required<UserProfile>;
  const profile: RequiredUserProfile = {
    id: 1,
    name: "John",
    age: 30,
  };

//3
const config: Readonly<{
    apiKey: string;
    timeout: number;
  }> = {
    apiKey: "12345",
    timeout: 5000,
  };
    
//4
interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  type ProductSummary = Pick<Product, "id" | "name" | "price">;
  const productSummary: ProductSummary = {
    id: 1,
    name: "Laptop",
    price: 999.99,
  };

  //5
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  type UserWithoutEmail = Omit<User, "email">;
  const userWithoutEmail: UserWithoutEmail = {
    id: 1,
    name: "Alice",
  };

  //6
  type UserRoles = Record<number, string>;
const roles: UserRoles = {
  1: "Admin",
  2: "User",
  3: "Guest",
};

  