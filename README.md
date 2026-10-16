# Apollo Green Solutions — Energy Management Website

A modern, responsive B2B website developed as part of the technical assignment for the **Full Stack Developer Intern** position at Apollo Green Solutions.

The website presents industrial and commercial energy management solutions, with a focus on IoT-based monitoring, energy efficiency, and a smooth user experience.

## Live Demo

**Website:** [Add Vercel URL after deployment]

## Features

- **Home:** Animated hero section, value proposition, product highlights, and calls to action.
- **Products:** Energy management solutions with descriptions, icons, and key specifications.
- **About:** Company mission, values, and team presentation.
- **Contact:** Contact form with name, email, message fields, and validation.
- **Dark and Light Mode:** Theme switching with saved user preferences.
- **Responsive Design:** Optimized layouts for desktop, tablet, and mobile.
- **Animations:** Scroll-triggered animations, page transitions, and interactive UI elements.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework and App Router |
| React 19 | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS 3 | Responsive styling |
| Framer Motion | Animations and transitions |
| Lucide React | Icons |
| next-themes | Dark and light theme management |
| Vercel | Deployment |
| GitHub | Source code and version control |

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Meriemjrbb/apollo-green-website.git
cd apollo-green-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

### Code Quality Checks

```bash
npm run lint
npx tsc --noEmit
```

## Contact Form Configuration

The contact form includes client-side validation and a Next.js API route.

Email delivery requires server-side configuration of the email provider. Without valid email credentials, the API returns an error instead of reporting a successful submission.

Configure the required environment variables locally and in Vercel before enabling production email delivery.

**Do not commit API keys or other secrets to GitHub.**

## Design Decisions

**B2B-focused visual identity**

The design uses a green-inspired palette, clear typography, and structured content to communicate sustainability, technology, and professionalism.

**Motion and micro-interactions**

Framer Motion adds animated page elements, scroll effects, and interactive navigation while keeping the experience focused on usability.

**Responsive-first interface**

Tailwind CSS utilities support flexible layouts and consistent spacing across different screen sizes.

**Theme personalization**

Light and dark themes adapt the interface to user preferences, with theme persistence across visits.

**Component-based architecture**

Reusable React components separate navigation, sections, animations, and interface elements for easier maintenance.

**SEO and performance**

The project uses Next.js metadata configuration, optimized production builds, and static rendering where appropriate.

## Project Structure

```text
app/
  about/
  products/
  contact/
  api/contact/
  layout.tsx
  page.tsx
  globals.css

components/
  layout/
  ThemeProvider.tsx
  ThemeToggle.tsx

lib/
public/
```

## Deployment

The website is deployed using Vercel, with the source code maintained on GitHub.

## Assignment

Developed for the **Apollo Green Solutions — Full Stack Developer Intern Technical Assignment**.

The implementation demonstrates Next.js and TypeScript development, responsive UI design, Framer Motion animations, component organization, and deployment readiness.
