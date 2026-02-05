# Personal Portfolio: User Guide & Manual

**Version:** 1.0
**Date:** February 5, 2026

## Table of Contents
1. [Overview](#overview)
2. [Installation Guide](#installation-guide)
    * [Prerequisites](#prerequisites)
    * [Setup & Deployment](#setup--deployment)
3. [User Manual](#user-manual)
    * [Navigating the Site](#navigating-the-site)
    * [Browsing Projects](#browsing-projects)
    * [Contacting the Developer](#contacting-the-developer)
4. [FAQ](#faq)

---

## Overview

This Personal Portfolio website serves as a centralized hub to showcase professional skills, software engineering projects, and technical experience. It is designed for recruiters, potential clients, and peer developers to easily access resume details and contact information.

The application is a Single Page Application (SPA) built using **React**, ensuring a responsive and seamless user experience.

---

## Installation Guide

This section is intended for developers or graders who wish to run the portfolio source code locally.

### Prerequisites
Before you begin, ensure you have the following installed on your machine:
* **Node.js** (v14.0.0 or higher)
* **npm** (normally comes with Node.js)
* A code editor (e.g., VS Code)

### Setup & Deployment

1.  **Clone the Repository**
    Open your terminal and clone the project:
    ```bash
    git clone [https://github.com/your-username/personal-portfolio.git](https://github.com/your-username/personal-portfolio.git)
    cd personal-portfolio
    ```

2.  **Install Dependencies**
    Install the necessary React dependencies listed in `package.json`:
    ```bash
    npm install
    ```

3.  **Start the Application**
    Run the app in development mode:
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make edits.

---

## User Manual

This section explains how to interact with the live website. The interface is divided into key sections: **Home**, **Skills**, **Projects**, and **Contact**.

### Navigating the Site

The **NavBar** is fixed at the top of the screen, allowing you to jump quickly between different sections without reloading the page.

* **Home:** Returns you to the introductory Banner.
* **Skills:** Jumps to the technical proficiency section.
* **Projects:** Displays the project gallery.
* **Contact:** Scrolls to the inquiry form.

> **Note:** On mobile devices, the NavBar may collapse into a hamburger menu icon. Tap the icon to expand the navigation options.

![Screenshot placeholder: Navigation Bar with links to Home, Skills, Projects, and Contact] I will have Screenshots here once that portion of my website is done, currently in the styling phase.

### The Banner (Home)
Upon loading the site, you are greeted by the **Banner**. This section introduces the developer and provides a brief professional summary.
* **Action:** Click the "My Work" button (if available) to scroll down to the Projects section immediately.

### Viewing Skills
The **Skills** component categorizes technical abilities (e.g., Languages, Frameworks, Tools).
* Hover over specific skill icons to see the name of the technology.

### Browsing Projects
The **Projects** section displays a gallery of completed work.
1.  **Project Cards:** Each project is displayed as a card containing a title, description, and technology stack.
2.  **Learn More:** Click on a project card or the "View Code" link to be taken to the specific GitHub repository or live demo for that project.

![Screenshot placeholder: Grid view of Project Cards showing titles and descriptions] I will have Screenshots here once that portion of my website is done, currently in the styling phase.

### Contacting the Developer
The **Contact** section allows you to send a direct message.
1.  Enter your **Name**, **Email**, and **Message** in the provided fields.
2.  Click **Submit**.
3.  You should see a confirmation alert that your message has been sent.

> **Privacy Note:** Your email address is only used to reply to your inquiry and is not stored publicly.

---

## FAQ

**Q: Is the portfolio mobile-friendly?**
**A:** Yes. The application is built with responsive CSS, ensuring it looks good on desktops, tablets, and mobile phones.

**Q: Where can I find a downloadable version of the resume?**
**A:** A "Download Resume" button is located in the Banner section (or footer), which will provide a PDF version of the full CV.

**Q: I found a bug in the layout. How do I report it?**
**A:** Please submit an issue by using the Contact form on the website to describe the problem.

**Q: Why are images taking a moment to load?**
**A:** High-quality project screenshots may take a moment to load depending on your internet connection. We use lazy loading to ensure the rest of the site remains interactive while images fetch.
