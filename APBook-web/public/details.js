document.getElementById('fetchDetails').addEventListener('click', async () => {
    if ("martian" in window) {
        try {
            const response = await window.martian.connect();
            const address = response.address;
            const details = await window.martian.getAccount(address);
            const authKey = details.authentication_key;

            // Initialize Moralis
            await Moralis.start({
                apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Ijc1YjY4ODM3LWU5ZjktNDJlZS05YmY2LTEyYmJhOGMxMWZkMCIsIm9yZ0lkIjoiMjc4MDQ0IiwidXNlcklkIjoiMjgzNzAzIiwidHlwZUlkIjoiNGUyZTQzZjgtZWMzNS00NmEyLThjMzYtZDYzMzY1NWJjZDAwIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTQxOTE1MDAsImV4cCI6NDg2OTk1MTUwMH0.9pNOK6yy_Eyue5iiZVE9c_GzcyMkzkDxqXy-BEfSups"  // Replace YOUR_API_KEY with your actual Moralis API key
            });

            // Use the authentication key as the owner address to fetch NFTs
            const nftResponse = await Moralis.AptosApi.wallets.getNFTByOwners({
                limit: 5,
                ownerAddresses: [authKey],
                network: "testnet"
            });

            console.log(nftResponse);
            document.getElementById('transactionDetails').innerText = JSON.stringify(nftResponse, null, 2);
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('transactionDetails').innerText = 'Failed to fetch details. See console for error.';
        }
    } else {
        window.open("https://www.martianwallet.xyz/", "_blank");
        document.getElementById('transactionDetails').innerText = 'Martian Wallet is not installed.';
    }
});
