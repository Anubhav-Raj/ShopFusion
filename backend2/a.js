const fs = require("fs");

// Change the working directory to where the script is located
process.chdir(__dirname);

// Read the existing JSON file
const inputFile = "./mobileBrand.json";

try {
  const fileContent = fs.readFileSync(inputFile, "utf-8");
  const jsonData = JSON.parse(fileContent);

  // Check if jsonData is an array
  if (Array.isArray(jsonData)) {
    // Create an array of objects with each brand as a property
    const brandObjects = jsonData.map((brand) => ({ Cell_Phone_Brand: brand }));

    // Write the new JSON file
    const outputFile = "./brands.json";
    fs.writeFileSync(
      outputFile,
      JSON.stringify(brandObjects, null, 2),
      "utf-8"
    );

    console.log("New JSON file created with separate objects for each brand.");
  } else {
    console.error("The content of the input file is not an array.");
  }
} catch (error) {
  console.error("Error reading or parsing the input JSON file:", error.message);
}
