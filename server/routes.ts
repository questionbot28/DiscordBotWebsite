import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get('/api/auth/callback', async (req, res) => {
    const { code } = req.query;
    
    if (!code) {
      return res.status(400).json({ error: 'No code provided' });
    }

    try {
      const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams({
          client_id: process.env.DISCORD_CLIENT_ID!,
          client_secret: process.env.DISCORD_CLIENT_SECRET!,
          grant_type: 'authorization_code',
          code: code.toString(),
          redirect_uri: `${process.env.PUBLIC_URL}/auth/callback`
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const tokens = await tokenResponse.json();
      
      const userResponse = await fetch('https://discord.com/api/users/@me', {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`
        }
      });

      const user = await userResponse.json();
      
      // Store tokens and user in session/storage as needed
      res.redirect('/?login=success');
    } catch (error) {
      console.error('OAuth error:', error);
      res.redirect('/?error=auth_failed');
    }
  });

  app.post('/api/auth/logout', (req, res) => {
    // Clear session/tokens
    res.json({ success: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
