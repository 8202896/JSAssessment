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
const NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_codeName, _race, _gender, _class, _organization, _uniqueSkill) {
    const NFT = {
        "codeName":_codeName,
        "race":_race,
        "gender":_gender,
        "class":_class,
        "organization":_organization,
        "uniqueSkill":_uniqueSkill,

    }
    NFTs.push(NFT);
    console.log("Operator: "+_codeName);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
 for(let i = 0; i < NFTs.length; i++){
    console.log("\nContract: \t\t" + (i + 1));
    console.log("Code Name: \t\t" + NFTs[i].codeName);
    console.log("Race: \t\t\t" + NFTs[i].race);
    console.log("Gender: \t\t" + NFTs[i].gender);
    console.log("Classification: " + NFTs[i].class);
    console.log("Organization: \t" + NFTs[i].organization);
    console.log("Unique Skill: \t" + NFTs[i].uniqueSkill);
 }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Texas", "Lupo", "Female", "Specialist", "Penguin Logistics", "Torrential Sword Rain");
mintNFT("Skadi", "Unknown", "Female", "Guard", "Abyssal Hunter", "Tidal Elegy");
mintNFT("Ling", "Undisclosed", "Female", "Supporter", "Sui", "To Remain Oneself");
mintNFT("Rosmontis", "Feline", "Female", "Sniper", "Rhodes Island", "As You Wish");
mintNFT("Mudrock", "Sarkaz", "Female", "Defender", "Rhodes Island", "Bloodline of Impure Soil");
mintNFT("Surtur", "Sarkaz", "Female", "Guard", "Rhodes Island", "Twillight");
mintNFT("Ch'en", "Lung", "Female", "Guard/Sniper", "Great Lungmen", "Shadow Assualt/Holiday Storm");
listNFTs();
getTotalSupply();
