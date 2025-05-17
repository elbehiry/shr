
#!/bin/bash

# Install required dependencies
npm install --legacy-peer-deps react react-dom @types/react @types/react-dom @types/node typescript @tanstack/react-query react-router-dom lucide-react @radix-ui/react-accordion @radix-ui/react-alert-dialog class-variance-authority @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-slot recharts embla-carousel-react react-day-picker date-fns sonner @radix-ui/react-toast clsx tailwind-merge

# Install dev dependencies
npm install --legacy-peer-deps -D vite @vitejs/plugin-react-swc

# Set execute permissions on node_modules/.bin files
chmod +x ./node_modules/.bin/vite

# Build project
echo "Running build..."
npm run build

echo "Setup completed!"
