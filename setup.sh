
#!/bin/bash

# Install required dependencies
npm install react react-dom @types/react @types/react-dom @types/node typescript @tanstack/react-query react-router-dom lucide-react @radix-ui/react-accordion @radix-ui/react-alert-dialog class-variance-authority @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-slot recharts embla-carousel-react react-day-picker date-fns sonner @radix-ui/react-toast clsx tailwind-merge

# Install dev dependencies
npm install -D vite @vitejs/plugin-react-swc

# Build project
npm run build

echo "Setup completed!"
