
#!/bin/bash

# Install required dependencies
npm install --legacy-peer-deps react react-dom @types/react @types/react-dom @types/node typescript @tanstack/react-query react-router-dom lucide-react @radix-ui/react-accordion @radix-ui/react-alert-dialog class-variance-authority @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-slot recharts embla-carousel-react react-day-picker date-fns sonner @radix-ui/react-toast clsx tailwind-merge react-hook-form cmdk input-otp vaul next-themes tailwindcss-animate zod @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip @hookform/resolvers

# Install dev dependencies
npm install --legacy-peer-deps -D vite @vitejs/plugin-react-swc lovable-tagger

# Set execute permissions on node_modules/.bin files
chmod +x ./node_modules/.bin/vite

# Build project
echo "Running build..."
npm run build

echo "Setup completed!"
