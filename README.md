# AI Model Marketplace (dApp)

This project is a decentralized application (dApp) for an AI Model Marketplace. It allows users to browse, purchase, and rate AI models on the Ethereum blockchain.

---

## Features

- **Smart Contract Integration**: Interacts with an Ethereum smart contract to manage AI model listings, purchases, ratings, and withdrawals.
- **Frontend Interface**: Simple web interface for listing, purchasing, rating models, and viewing model details.
- **MetaMask Support**: Interact with the Ethereum network via MetaMask.

---

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - Required for the JavaScript backend
- [MetaMask](https://metamask.io/) - For interacting with the Ethereum blockchain
- [Hardhat](https://hardhat.org/) - For deploying the smart contract and running the local blockchain

---

## Project Structure

AI-Model-Marketplace/ ├── contracts/ │ └── AIModelMarketplace.sol # Solidity smart contract ├── scripts/ │ └── deploy.js # Hardhat deployment script ├── frontend/ │ ├── index.html # HTML file for the frontend │ ├── app.js # JavaScript for frontend logic and Web3 │ ├── styles.css # Styling for the frontend ├── artifacts/ # Compiled contract ABI and bytecode ├── hardhat.config.js # Hardhat configuration file ├── package.json # Node.js dependencies and scripts └── README.md # Project documentation (this file)


---

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

git clone https://github.com/yourusername/ai-model-marketplace.git
cd ai-model-marketplace
## 2. Install Dependencies
Install the required dependencies:


npm install
## 3. Compile the Smart Contract
To compile the smart contract, run:


npx hardhat compile
## 4. Deploy the Smart Contract
Start the local Ethereum node:


npx hardhat node
In a new terminal, deploy the contract:


npx hardhat run scripts/deploy.js --network localhost
Take note of the contract address displayed after deployment.

## 5. Connect Frontend to Smart Contract
In frontend/app.js, replace YOUR_CONTRACT_ADDRESS with the deployed contract address and add the contract's ABI to the contractABI variable.


const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractABI = [
  // Contract ABI goes here
];
## 6. Run the Frontend
To serve the frontend on your local server, use Python's HTTP server (ensure you're in the frontend folder):


python -m http.server
Visit http://localhost:8000 to interact with the AI Model Marketplace dApp.

## Usage
Listing Models: You can list AI models by interacting with the smart contract using the addModel function.
Purchasing Models: Use the purchaseModel function to buy AI models listed on the platform.
Rating Models: Rate AI models after purchase using the rateModel function.
Withdraw Earnings: Models creators can withdraw earnings using the withdraw function.
License
This project is licensed under the MIT License.

go

This should be ready to copy-paste into your `README.md` file for GitHub
## Images
THis is contract adress and ABI.
![Screenshot 2025-01-09 224024](https://github.com/user-attachments/assets/84ada5f2-73ee-4f56-abad-f7835499f078)
We run it with using pythun httt server. It shows all actions in terminal.
![Screenshot 2025-01-09 223947](https://github.com/user-attachments/assets/815a7245-b4e8-4e59-b676-2a2637fd3296)

![Screenshot 2025-01-09 223917](https://github.com/user-attachments/assets/7e3712d3-05c9-49aa-b0be-3187dbbfc1e6)


Next run npx hardhut node to get all accounts with privat keys


![Screenshot 2025-01-09 223141](https://github.com/user-attachments/assets/54486f42-0220-4a3a-8790-c01e3b5eee8c)
![Screenshot 2025-01-09 223033](https://github.com/user-attachments/assets/91db5d3a-17a8-46f6-972c-f9fc7ffe775e)
![Screenshot 2025-01-09 223022](https://github.com/user-attachments/assets/75d87f1a-7e27-4e05-ac22-51ee46846772)


