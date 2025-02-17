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

export async function loginWithDiscord() {
  window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify%20guilds';
}

export function getDiscordAvatarUrl(user: User) {
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
}