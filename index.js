import express from "express";
import mongoose from "mongoose";
import { Account } from "./models/Accounts.js";
import { Address } from "./models/Addresses.js";
import { BalanceHistory } from "./models/Balance_History.js";
import { CustomerAddress } from "./models/Customer_Addresses.js";
import { CustomerPurchase } from "./models/Customer_Purchase.js";
import { Customer } from "./models/Customers.js";
import { Merchant } from "./models/Merchants.js";
import { ProductService } from "./models/Products_and_Services.js";
import { AccountType } from "./models/Ref_Account_Types.js";
import { AddressType } from "./models/Ref_Address_Types.js";
import { CustomerType } from "./models/Ref_Customer_Types.js";
import { TransactionType } from "./models/Ref_Transactions_Types.js";
import { Transaction } from "./models/Transactions.js";

const app = express();
const PORT = 3000;
mongoose
  .connect("mongodb://localhost:27017/banking_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
    // explicitly creating all tables
    Account.createCollection();
    Address.createCollection();
    BalanceHistory.createCollection();
    CustomerAddress.createCollection();
    CustomerPurchase.createCollection();
    Customer.createCollection();
    Merchant.createCollection();
    ProductService.createCollection();
    AccountType.createCollection();
    AddressType.createCollection();
    CustomerType.createCollection();
    TransactionType.createCollection();
    Transaction.createCollection();
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", async (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server run at ${PORT}`);
});
