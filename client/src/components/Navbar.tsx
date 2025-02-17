import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth, loginWithDiscord, getDiscordAvatarUrl } from "@/lib/auth";

export function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <SiDiscord className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">EduSphere</span>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col space-y-4 mt-6">
              <Link href="/">
                <a className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </a>
              </Link>
              <Link href="/commands">
                <a className="text-sm font-medium transition-colors hover:text-primary">
                  Commands
                </a>
              </Link>
              <Link href="/status">
                <a className="text-sm font-medium transition-colors hover:text-primary">
                  Status
                </a>
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex flex-1 items-center justify-center space-x-6">
          <Link href="/">
            <a className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </a>
          </Link>
          <Link href="/commands">
            <a className="text-sm font-medium transition-colors hover:text-primary">
              Commands
            </a>
          </Link>
          <Link href="/status">
            <a className="text-sm font-medium transition-colors hover:text-primary">
              Status
            </a>
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            size="sm"
            className="gap-2 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 hidden sm:flex"
            onClick={() => window.open("https://discord.com/oauth2/authorize?your-bot-url", "_blank")}
          >
            <SiDiscord className="h-4 w-4" />
            Add to Discord
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src={getDiscordAvatarUrl(user)} alt={user.username} />
                  <AvatarFallback>{user.username[0]}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  {user.username}#{user.discriminator}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => useAuth().setUser(null)}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={loginWithDiscord}
            >
              <SiDiscord className="h-4 w-4" />
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}