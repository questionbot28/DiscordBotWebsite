import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const commands = [
  {
    name: "/help",
    description: "Shows all available commands",
    category: "General",
  },
  {
    name: "/play",
    description: "Play music in voice channel",
    category: "Music",
  },
  {
    name: "/ban",
    description: "Ban a user from the server",
    category: "Moderation",
  },
  {
    name: "/poll",
    description: "Create a poll",
    category: "Utility",
  },
  {
    name: "/rank",
    description: "Show user level and XP",
    category: "Levels",
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
