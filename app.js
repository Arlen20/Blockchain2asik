const contractAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' // Replace with actual address
const contractABI = [
	{
		inputs: [],
		name: 'getModels',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'name',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'description',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: 'price',
						type: 'uint256',
					},
				],
				internalType: 'struct AIModelMarketplace.Model[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'description',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: 'price',
				type: 'uint256',
			},
		],
		name: 'listModel',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'models',
		outputs: [
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'description',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: 'price',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] // Add your ABI here

let contract
let provider
let signer

async function initContract() {
	if (typeof window.ethereum !== 'undefined') {
		provider = new ethers.providers.Web3Provider(window.ethereum)
		signer = provider.getSigner()
		contract = new ethers.Contract(contractAddress, contractABI, signer)
		console.log('Contract initialized:', contract)
	} else {
		console.error('MetaMask not detected.')
	}
}

initContract()
