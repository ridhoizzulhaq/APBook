const axios = require('axios');

async function fetchFromMoralis() {
    const url = 'https://testnet-aptos-api.moralis.io/wallets/nfts?limit=5&owner_addresses%5B0%5D=0x28a4b6672589b929502fe580d3c4c8a1d49bcabd5bb6ec75b9761858d34ef44d';
    const apiKey = ''; // Ganti dengan kunci API yang sebenarnya

    try {
        const response = await axios.get(url, {
            headers: {
                'accept': 'application/json',
                'X-API-Key': apiKey
            }
        });

        console.log('Data:', response.data);
        // Lanjutkan dengan pengolahan data atau pembandingan database di sini
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchFromMoralis();
