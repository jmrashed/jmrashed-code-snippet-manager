# jmrashed-code-snippet-manager

A simple CLI tool for managing code snippets. This package allows developers to store, categorize, and retrieve code snippets easily, enhancing productivity and organization.

## Features

- **Add Snippet**: Quickly add new code snippets with associated tags.
- **List Snippets**: View all stored snippets in a neatly formatted list.
- **Delete Snippet**: Remove snippets by their index.
- **Tagging**: Organize snippets with tags for easy retrieval.

## Installation

To install `jmrashed-code-snippet-manager`, use npm:

```bash
npm install -g jmrashed-code-snippet-manager
```

*Note: The `-g` flag installs the package globally, allowing you to use the CLI from anywhere in your terminal.*

## Usage

After installation, you can start managing your code snippets by running the following command:

```bash
jmrashed-code-snippet-manager
```

### Commands

1. **Add Snippet**: You will be prompted to enter the code snippet and its tags (comma-separated).
2. **List Snippets**: Displays all your snippets with their respective tags.
3. **Delete Snippet**: Prompts for the snippet number you wish to delete.

## Example

Here’s an example of how you might use the tool:

1. Start the CLI tool:
    ```bash
    jmrashed-code-snippet-manager
    ```
   
2. Choose **Add Snippet** from the menu and enter:
   - Code Snippet: `console.log('Hello, World!');`
   - Tags: `javascript, console, hello`
   
3. Choose **List Snippets** to see:
   ```
   Code Snippets:
   1. [javascript, console, hello] console.log('Hello, World!');
   ```

4. Choose **Delete Snippet** and enter the snippet number (e.g., `1`) to remove it.

## File Structure

The tool creates a `snippets.json` file in the same directory where you run the CLI. This file will store your snippets in JSON format.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**[jmrashed](https://www.npmjs.com/~jmrashed)**

Feel free to reach out with any questions or suggestions!