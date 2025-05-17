
#!/bin/bash

# Install required dependencies
npm install react react-dom @tanstack/react-query react-router-dom lucide-react @radix-ui/react-accordion @radix-ui/react-alert-dialog class-variance-authority @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-slot recharts embla-carousel-react react-day-picker date-fns

# Install dev dependencies
npm install -D typescript @types/react @types/react-dom @types/node vite @vitejs/plugin-react-swc

# Build project
npm run build

echo "Setup completed!"
