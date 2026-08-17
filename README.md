# User Directory

A responsive User Directory application built as a frontend take-home assignment for Entelligo.

The application fetches user data from the DummyJSON API and allows users to browse a directory and view detailed user profiles.

## Features

- Browse users in a responsive card-based layout
- View detailed information for individual users
- Dynamic user detail routes
- Loading state with skeleton UI
- Error state with retry functionality
- Responsive design for desktop, tablet, and mobile
- Avatar fallback using user initials
- Accessible navigation between user list and detail pages

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- shadcn/ui
- DummyJSON API

## API

User data is fetched from:

https://dummyjson.com/users

Individual users are fetched using:

https://dummyjson.com/users/{id}

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/vaibhavpratap23/user-directory.git
