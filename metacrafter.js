/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftProject = [];


function mintNFT (Name, Hue, apparelLook, someotherFeatures) {
    const nft = { Name, Hue, apparelLook, someotherFeatures };
    nftProject.push(nft);
    console.log(`Minted: ${Name}`);
}
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.



function listNFTs () {
    nftProject.forEach(nft => console.log(nft));
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function getTotalSupply() {
    console.log(nftProject.length);
}


// print the total number of NFTs we have minted to the console

// call your functions below this line

mintNFT('Aman', 'Green', 'T-Shirt', ' TALL, Gold Ring');
mintNFT('Pranjal', 'Blue', 'Jacket', ' SHORT , Silver Chain');
mintNFT('Ayush', 'Brown', 'Sweater', ' TALL , Bracelet');

// Minting at least three NFTs


// Displaying details of the NFTs
listNFTs();
getTotalSupply();j
