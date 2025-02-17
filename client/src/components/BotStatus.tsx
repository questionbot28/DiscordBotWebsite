import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Users, Hash, Activity } from "lucide-react";

export function BotStatus() {
  const stats = [
    { icon: Server, label: "Servers", value: "1,000+" },
    { icon: Users, label: "Users", value: "100,000+" },
    { icon: Hash, label: "Channels", value: "5,000+" },
    { icon: Activity, label: "Uptime", value: "99.9%" },
  ];

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Bot Status</h2>
        <Badge variant="outline" className="px-4 py-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-green-500 inline-block"></span>
          Online
        </Badge>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
