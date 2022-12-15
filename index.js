import express from "express";
import mongoose from "mongoose";
import { Account } from "./models/banking-service-models/Accounts.js";
import { Address } from "./models/banking-service-models/Addresses.js";
import { BalanceHistory } from "./models/banking-service-models/Balance_History.js";
import { CustomerAddress } from "./models/banking-service-models/Customer_Addresses.js";
import { CustomerPurchase } from "./models/banking-service-models/Customer_Purchase.js";
import { Customer } from "./models/banking-service-models/Customers.js";
import { Merchant } from "./models/banking-service-models/Merchants.js";
import { ProductService } from "./models/banking-service-models/Products_and_Services.js";
import { AccountType } from "./models/banking-service-models/Ref_Account_Types.js";
import { AddressType } from "./models/banking-service-models/Ref_Address_Types.js";
import { CustomerType } from "./models/banking-service-models/Ref_Customer_Types.js";
import { TransactionType } from "./models/banking-service-models/Ref_Transactions_Types.js";
import { Transaction } from "./models/banking-service-models/Transactions.js";

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

// Once you have created a tarball or zip file of your Express.js application, 
// you can use it to easily deploy your application to a production environment.


// # Create a tarball of your project
// tar -zcvf online-banking-database-design-app.tar.gz *



// Once you have created the tarball, you can then set up a folder on your production 
// server where you can store the tarball and other necessary files. This might be a 
// folder such as /var/www/my-node-app, for example.

// Next, you will need to upload the tarball to the production server and extract it into the 
// appropriate folder. This can be done using the scp and tar commands, respectively:


// # Upload the tarball to the production server
// scp my-node-app.tar.gz user@my-production-server:/var/www/my-node-app

// # Extract the tarball on the production server
// ssh user@my-production-server
// tar -xvf /var/www/my-node-app/my-node-app.tar.gz -C /var/www/my-node-app
