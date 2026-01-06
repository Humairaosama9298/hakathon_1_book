<!-- SYNC IMPACT REPORT
Version change: 1.0.0 → 1.1.0
Modified principles:
- Principle 1: Template → Spec-First, AI-Native Development
- Principle 2: Template → Accuracy and Zero Hallucination
- Principle 3: Template → Clarity for Technical Audience
- Principle 4: Template → Reproducibility and Modularity
Added sections: Book Standards, Deployment Standards, RAG Chatbot Standards
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md ✅ updated
- .specify/templates/spec-template.md ✅ updated
- .specify/templates/tasks-template.md ✅ updated
- .specify/templates/commands/*.md ⚠ pending
Follow-up TODOs: None
-->

# Spec-Driven Technical Book with Embedded RAG Chatbot Constitution

## Core Principles

### I. Spec-First, AI-Native Development
All development begins with clearly defined specifications using Spec-Kit Plus. Every feature, component, and system interaction must be documented in specifications before implementation. AI tools (Claude Code) are integral to the development process and must be leveraged for all development tasks.

### II. Accuracy and Zero Hallucination
The RAG chatbot must only provide answers based on retrieved content from the book. No generated responses should contain information not present in the source material. When content is not found in the book, the system must explicitly state "answer not found".

### III. Clarity for Technical Audience
All content, code, and documentation must be written with a technical audience in mind. Clear, precise language and proper technical terminology are required. The book should provide comprehensive, well-structured information that serves as a reliable reference.

### IV. Reproducibility and Modularity
All components of the system must be modular and reproducible. The book generation process, deployment pipeline, and RAG system should be easily reproducible by others. Each component should be independently testable and deployable.

### V. Book Content Standards
Content must be generated from Spec-Kit Plus specifications and formatted as Docusaurus-compatible Markdown. Maintain consistent technical tone, proper navigation structure, sidebar organization, and cross-linking throughout the book.

### VI. RAG System Integrity
The embedded chatbot must strictly adhere to retrieval-augmented generation principles. It must retrieve relevant content before generating any response. The system must support both book-wide and selected-text-only question answering modes.

## Additional Standards

### Book Standards
- Content generated from Spec-Kit Plus specs
- Docusaurus-compatible Markdown
- Consistent technical tone and structure
- Proper navigation, sidebar, and cross-linking

### Deployment Standards
- Successful Docusaurus build
- GitHub Pages deployment
- Clear README and setup instructions

### RAG Chatbot Standards
- Embedded in the book UI
- Stack: OpenAI Agents/ChatKit, FastAPI, Neon Serverless Postgres, Qdrant Cloud (Free Tier)
- Supports book-wide and selected-text-only Q&A
- Retrieval required before generation
- Explicit "answer not found" when context unavailable

## Development Workflow

### Implementation Requirements
- Spec-first approach using Spec-Kit Plus
- Claude Code AI assistance for all development tasks
- Integration between Docusaurus, RAG system, and book content
- Proper testing of both book generation and chatbot functionality

### Quality Gates
- Successful Docusaurus build before deployment
- RAG system accuracy verification
- Cross-linking and navigation validation
- Performance testing for chatbot response times

## Governance

All development must adhere to the core principles defined above. Changes to this constitution require explicit documentation, approval, and migration planning. All pull requests and code reviews must verify compliance with these principles. The development process must maintain the integrity of the spec-first, AI-native approach while ensuring accuracy and reproducibility.

**Version**: 1.1.0 | **Ratified**: 2025-12-26 | **Last Amended**: 2025-12-26