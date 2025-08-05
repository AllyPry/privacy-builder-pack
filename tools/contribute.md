# Contribution Guide for the Tools Directory

Thank you for your interest in contributing to the **Privacy & Ethereum Tools Directory**! This guide will help you add new tools in a consistent format and ensure the list remains high-quality and searchable.

---

## Goals

- Maintain a **flat structure**.
- Find a relevant category
- Include a **short description** for each tool.
- Tag tools with relevant topics from the **approved tag list** (see below).
- Keep entries clean, and consistent.

---

# How to Add a Tool

When adding a new tool, please use the following format:

## Approved categories
Only use categories from the following list.

`Integrated Development Environments (IDE)`, `API Libraries`, `Ethereum Blockchain Explorers`, `Privacy-Related EIPs & Standards`, `Security Tools`, `Cryptography Libraries`, `Data Storage`, `VPN & Network Privacy`, `Browsers & Search`, `Whistleblowing & Reporting`

1. Find you relevant category, and then -

```json
      {
        "name": "Tool Name",
        "link": "https://example.com",
        "description": "Short, clear description of what the tool does.",
        "tags": ["tag1", "tag2", "tag3"]
      },
```

Example:

```json
      {
        "name": "Awesome Zero-Knowledge Proofs",
        "link": "https://github.com/matter-labs/awesome-zero-knowledge-proofs?tab=readme-ov-file#learn",
        "description": "A curated list of awesome things related to learning ZKP.",
        "tags": ["zero-knowledge", "resources", "privacy"]
      },
```

## Approved Tags
Only use tags from the following list. These tags make the directory searchable and filterable:

`adblock`, `anonymity`, `blockchain`, `browser`, `cryptography`, `decentralised`, `EIP`, `encryption`, `ethereum`, `framework`, `homomorphic`, `journalism`, `mpc`, `os`, `osint`, `p2p`, `privacy`, `protocol`, `resources`, `search`, `security`, `standards`, `vpn`, `whistleblowing`, `zero-knowledge`

```
If you feel a tag is missing, open an issue to propose it.
```

# Formatting Rules

1. Keep the JSON formatting clean.

2. Ensure spacing and indentation match the existing style.

3. Tools should be categories accordingly.

4. Use sentence case for descriptions (only the first word capitalized unless proper nouns).

5. Avoid promotional language. Be factual and concise.

## Don’ts

- Don’t use unapproved tags.

- Don’t use unapproved tags.

- Don’t write lengthy descriptions—keep it brief and informative.

- Don’t add broken links.

# Best Practices

- Double-check the URL is correct and points to the official page.

- Test links before submitting your PR.

- Use lowercase tags only.

- Check if the tool already exists to avoid duplicates.

# Submitting Your Contribution

1. Fork the repository.

2. Edit the tools.json file.

3. Follow the formatting and tagging rules above.

4. Submit a Pull Request with a clear title and description.

We appreciate your help in building a powerful, privacy-conscious toolset for the community!
