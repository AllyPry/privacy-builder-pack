# Contribution Guide for Framework Examples

Thank you for your interest in contributing to the **Framework Examples** section of the Privacy Builder Pack!  
This guide explains how to contribute your own project summaries easily and consistently.

---

## How to Contribute

1. **Fork the Repository**  
   - Click the "Fork" button at the top-right corner of the repository page.

2. **Clone Your Fork Locally**

  ```bash
  git clone https://github.com/your-username/privacy-builder-pack.git
  cd privacy-builder-pack/framework
  ```
3. **Prepare Your Summary File**

- Generate a summary image of your project. It should be in .png format.

**Naming convention:**
  ```bash
  PFS-<your-project-name>.png
  Example: PFS-privacy-wallet.png
  ```

4. **Add Your File**

- Place your .png file inside the /framework directory (alongside the other examples).

- Double-check the file name matches the required format.

5. **Commit Your Changes**

 ```bash
  git add framework/PFS-your-project-name.png
  git commit -m "Add PFS summary for <your project name>"
  git push origin main
 ```

6. Open a Pull Request

- Go to your fork on GitHub.

- Click "Compare & Pull Request."

- In the description, mention the project name and briefly state what your project does.

#### File Requirements

- **Format:** .png

- **Naming:** PFS-<project-name>.png

- **Size:** Keep file sizes optimized (use tools like TinyPNG if needed).

- **Content:** Must represent a real project, preferably based on privacy-related technologies or experiments using the Pagency framework.

## Quick Checklist Before Submitting

> Does your file follow the correct naming pattern?

> Is the image clear, readable, and relevant?

> Have you verified that your file is in the /framework directory?

> Did you submit a clear and descriptive Pull Request?


Thanks for Contributing!
Your contributions help make Pagency more discoverable and inspire other builders in the privacy ecosystem.
