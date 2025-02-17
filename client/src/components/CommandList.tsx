
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const commands = [
  // Help Commands
  {
    name: "!help",
    description: "Show study help menu",
    category: "Help",
  },
  {
    name: "!musichelp",
    description: "Show music help menu",
    category: "Help",
  },
  // Study Commands
  {
    name: "!11",
    description: "Get Class 11 Questions",
    category: "Study",
  },
  {
    name: "!12",
    description: "Get Class 12 Questions",
    category: "Study",
  },
  {
    name: "!subjects",
    description: "List All Subjects",
    category: "Study",
  },
  {
    name: "!chapters11",
    description: "View Class 11 Chapters",
    category: "Study",
  },
  {
    name: "!chapters12",
    description: "View Class 12 Chapters",
    category: "Study",
  },
  // Music Commands
  {
    name: "!join",
    description: "Join your voice channel",
    category: "Music",
  },
  {
    name: "!play <song>",
    description: "Play a song",
    category: "Music",
  },
  {
    name: "!moodplay <mood>",
    description: "Play music based on mood (happy/sad/chill/energetic/focus)",
    category: "Music",
  },
  {
    name: "!bassboost",
    description: "Apply bassboost effect",
    category: "Music Effect",
  },
  {
    name: "!8d",
    description: "Apply 8D effect",
    category: "Music Effect",
  },
  {
    name: "!nightcore",
    description: "Apply nightcore effect",
    category: "Music Effect",
  },
  {
    name: "!slowand_reverb",
    description: "Apply slow + reverb effect",
    category: "Music Effect",
  },
  {
    name: "!normal",
    description: "Remove all effects",
    category: "Music Effect",
  },
  {
    name: "!pause",
    description: "Pause current song",
    category: "Music",
  },
  {
    name: "!resume",
    description: "Resume paused song",
    category: "Music",
  },
  {
    name: "!stop",
    description: "Stop playing",
    category: "Music",
  },
  {
    name: "!volume <0-200>",
    description: "Adjust volume",
    category: "Music",
  },
  {
    name: "!seek <forward/back> <seconds>",
    description: "Skip forward/backward in song",
    category: "Music",
  },
  // Ticket Commands
  {
    name: "!setuptickets",
    description: "Set up the ticket system",
    category: "Tickets",
  },
  // Invite Commands
  {
    name: "!invites",
    description: "See your invite statistics",
    category: "Invites",
  },
  {
    name: "!invite-stats @user",
    description: "Check specific user's invite statistics",
    category: "Invites",
  },
  {
    name: "!invite-history @user",
    description: "View user's invite history",
    category: "Invites",
  },
  {
    name: "!invite-leaderboard",
    description: "Display invite leaderboard",
    category: "Invites",
  },
  {
    name: "!addinv @user <number>",
    description: "Add invites to a user",
    category: "Invites Admin",
  },
  {
    name: "!removeinv @user <number>",
    description: "Remove invites from a user",
    category: "Invites Admin",
  },
  {
    name: "!reset-invites @user",
    description: "Reset user's invite count",
    category: "Invites Admin",
  },
  {
    name: "!fake-invite-check @user",
    description: "Check for fake invites",
    category: "Invites Admin",
  },
];

export function CommandList() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6">Commands</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Command</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {commands.map((command) => (
              <TableRow key={command.name}>
                <TableCell className="font-mono">{command.name}</TableCell>
                <TableCell>{command.description}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{command.category}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
