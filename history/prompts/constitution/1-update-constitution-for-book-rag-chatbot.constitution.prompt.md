---
id: 1
title: update-constitution-for-book-rag-chatbot
stage: constitution
date: 2025-12-26
surface: agent
model: Claude Sonnet 4.5
feature: none
branch: main
user: Claude Code
command: /sp.constitution
labels: [constitution,book,rag,chatbot]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

```
/sp.constitution

Project: Spec-Driven Technical Book with Embedded RAG Chatbot

Objective:
Build a technical book using Spec-Kit Plus and Claude Code, published with Docusaurus on GitHub Pages, with an embedded RAG chatbot that answers questions strictly from the book content, including user-selected text.

Core principles:
- Spec-first, AI-native development
- Accuracy and zero hallucination
- Clarity for a technical audience
- Reproducibility and modularity

Standards:

Book:
- Content generated from Spec-Kit Plus specs
- Docusaurus-compatible Markdown
- Consistent technical tone and structure
- Proper navigation, sidebar, and cross-linking

Deployment:
- Successful Docusaurus build
- GitHub Pages deployment
- Clear README and setup instructions

RAG Chatbot:
- Embedded in the book UI
- Stack: OpenAI Agents/ChatKit, FastAPI, Neon Serverless Postgres, Qdrant Cloud (Free Tier)
- Supports book-wide and selected-text-only Q&A
- Retrieval required before generation
- Explicit "answer not found" when context
```

## Response snapshot

Updated the project constitution to reflect the Spec-Driven Technical Book with Embedded RAG Chatbot project. The updated constitution now includes:

- Core Principles: Spec-First, AI-Native Development; Accuracy and Zero Hallucination; Clarity for Technical Audience; Reproducibility and Modularity
- Book Standards: Content generation from Spec-Kit Plus specs, Docusaurus compatibility
- Deployment Standards: GitHub Pages deployment requirements
- RAG Chatbot Standards: Technical stack and functionality requirements
- Development Workflow: Implementation and quality gates

The constitution version was updated from 1.0.0 to 1.1.0 with a Sync Impact Report included at the top of the file.

## Outcome

- ✅ Impact: Updated constitution to reflect project requirements and principles
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md with new principles and standards
- 🔁 Next prompts: Continue with spec development for the book and RAG chatbot
- 🧠 Reflection: Constitution now properly defines the project scope and principles

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin feature specification development