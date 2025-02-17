import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth, loginWithDiscord, getDiscordAvatarUrl } from "@/lib/auth";

export function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* Logo with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-2 outline-none">
            <SiDiscord className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">EduSphere</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            <DropdownMenuItem asChild>
              <Link href="/">
                <a className="w-full cursor-pointer">Home</a>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/commands">
                <a className="w-full cursor-pointer">Commands</a>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/status">
                <a className="w-full cursor-pointer">Status</a>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

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
        <div className="flex items-center gap-4 ml-auto mr-4">
          <Button
            size="sm"
            className="gap-2 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 hidden sm:flex"
            onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=1159874534485262410&permissions=8&integration_type=0&scope=bot", "_blank")}
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