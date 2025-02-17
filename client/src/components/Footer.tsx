import { SiDiscord } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <SiDiscord className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">EduSphere</span>
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2025 All rights reserved
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              Made with <span className="text-red-500 mx-1">❤️</span> by Rohanpreet Singh Pathania
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}