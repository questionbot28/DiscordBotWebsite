
import { create } from 'zustand';

interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  setUser: (user: User | null) => set({ user }),
}));

const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const REDIRECT_URI = `${window.location.origin}/api/auth/callback`;

export async function loginWithDiscord() {
  const params = new URLSearchParams({
    client_id: DISCORD_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'identify guilds',
    state: crypto.randomUUID()
  });

  window.location.href = `https://discord.com/oauth2/authorize?${params}`;
}

export function getDiscordAvatarUrl(user: User) {
  return user.avatar 
    ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/${parseInt(user.discriminator) % 5}.png`;
}
