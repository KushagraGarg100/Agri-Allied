<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Agri-Allied-AI-Powered Crop Advisory Chatbot for Mountain Agriculture

---

### Project Overview

This project involves building a single-page, mobile-responsive web application designed to act as an immediate decision-support system for field supervisors working in remote agricultural areas. The primary objective is to bridge the communication gap in isolated regions by providing an instant, intelligent chat interface that delivers localized agricultural solutions on demand.

---

### Core Components & Architecture

* **The Intelligent Chat Interface:** A clean, mobile-first user interface built using **React** or **HTML/JavaScript** that allows field supervisors to submit queries regarding crop health, pest control, and post-harvest operations in plain text.


* **AI Integration & Guardrails:** A backend pipeline that connects to a public LLM API, such as the **Gemini API**. The core technical focus is implementing an advanced **system prompt** that tightly constrains the model's knowledge base specifically to mountain farming in Uttarakhand, successfully eliminating dangerous hallucinations.


* **Responsible AI Framework:** A safety layer built directly into the system, including strict verification disclaimers and a dedicated evaluation framework to analyze model limitations and ensure safe deployment.



---

### Project Scope & Deliverables

The project is designed to be executed over a **6–8 week window** at a medium complexity level, culminating in the following specific outputs:

1. **Functional Prototype:** A fully operational, deployed, or packaged web application featuring the responsive chat interface.


2. **System Prompt Documentation:** Comprehensive engineering notes outlining the exact rules, constraints, and personas used to secure the LLM.


3. **Responsible AI Reflection Note:** A technical breakdown detailing model limitations, handled edge cases, and safety compliance metrics.
>>>>>>> 79a7dbb057ddc8792a9fde99fc308909ea8f8cff
