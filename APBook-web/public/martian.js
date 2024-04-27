document.getElementById('connectWallet').addEventListener('click', async () => {
    if ("martian" in window) {
        await window.martian.connect();
        console.log('Wallet connected');
    } else {
        window.open("https://www.martianwallet.xyz/", "_blank");
    }
});

document.getElementById('disconnectWallet').addEventListener('click', async () => {
    await window.martian.disconnect();
    console.log('Wallet disconnected');
});

document.getElementById('createCollection').addEventListener('click', async () => {
    const name = document.getElementById('collectionName').value;
    const description = document.getElementById('collectionDesc').value;
    const url = document.getElementById('collectionURL').value;
    const txnHash = await window.martian.createCollection(name, description, url);
    console.log('Collection created:', txnHash);
});

document.getElementById('createToken').addEventListener('click', async () => {
    const collectionName = document.getElementById('tokenCollectionName').value; // Corrected to use the specific collection name input for tokens
    const tokenName = document.getElementById('tokenName').value;
    const tokenDesc = document.getElementById('tokenDesc').value;
    const tokenSupply = document.getElementById('tokenSupply').value;
    const imageURL = document.getElementById('tokenImageURL').value;
    const txnHash = await window.martian.createToken(collectionName, tokenName, tokenDesc, tokenSupply, imageURL);
    console.log('Token created:', txnHash);
});
