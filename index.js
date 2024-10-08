const fs = require("fs-extra");
const { prompt } = require("inquirer"); // Importing prompt from inquirer
const path = require("path");

const snippetsFilePath = path.join(__dirname, "snippets.json");

// Load snippets from the JSON file or initialize it if it doesn't exist
async function loadSnippets() {
  if (await fs.pathExists(snippetsFilePath)) {
    return await fs.readJson(snippetsFilePath);
  } else {
    await fs.writeJson(snippetsFilePath, []);
    return [];
  }
}

// Save snippets to the JSON file
async function saveSnippets(snippets) {
  await fs.writeJson(snippetsFilePath, snippets);
}

// Add a new snippet
async function addSnippet(snippet) {
  const snippets = await loadSnippets();
  snippets.push(snippet);
  await saveSnippets(snippets);
  console.log("Snippet added successfully!");
}

// List all snippets
async function listSnippets() {
  const snippets = await loadSnippets();
  console.log("Code Snippets:");
  snippets.forEach((snippet, index) => {
    console.log(`${index + 1}. [${snippet.tags.join(", ")}] ${snippet.code}`);
  });
}

// Delete a snippet
async function deleteSnippet(index) {
  const snippets = await loadSnippets();
  if (index > 0 && index <= snippets.length) {
    snippets.splice(index - 1, 1);
    await saveSnippets(snippets);
    console.log("Snippet deleted successfully!");
  } else {
    console.log("Invalid snippet index. Please try again.");
  }
}

// Main CLI function
async function main() {
  const snippets = await loadSnippets();
  const choices = ["Add Snippet", "List Snippets", "Delete Snippet", "Exit"];

  const { action } = await prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: choices,
    },
  ]);

  switch (action) {
    case "Add Snippet":
      const { code, tags } = await prompt([
        {
          type: "input",
          name: "code",
          message: "Enter the code snippet:",
        },
        {
          type: "input",
          name: "tags",
          message: "Enter tags (comma-separated):",
        },
      ]);
      await addSnippet({
        code,
        tags: tags.split(",").map((tag) => tag.trim()),
      });
      break;

    case "List Snippets":
      await listSnippets();
      break;

    case "Delete Snippet":
      const { index } = await prompt([
        {
          type: "input",
          name: "index",
          message: "Enter the snippet number to delete:",
        },
      ]);
      await deleteSnippet(parseInt(index));
      break;

    case "Exit":
      console.log("Exiting...");
      process.exit();
      break;
  }

  // Re-run the main function to allow further actions
  main();
}

// Start the CLI
main();
