import { RefreshCcw, Search, Zap } from "lucide-react";
import { Avatar, Button, Input } from "@/components/ui";

export default function TopNavbar() {
  return (
    <nav className="flex w-full text-white items-center">
      <p className="text-xl font-bold text-center py-4">
        State Sync
      </p>
      <div className="flex items-center gap-4 ml-auto">
        <Input placeholder="Search..." suffix={<Search className="text-gray-400 hover:text-white" height={16} width={16} />} />
        <RefreshCcw className="text-gray-400 hover:text-white" />
        <Zap className="text-gray-400 hover:text-white" />
        <Button className="bg-[var(--color-primary)]">
          Create Issue
        </Button>
        <Avatar name="John Doe" avatarStyle={{
          height: '30px',
          width: '30px'
        }} />
      </div>
    </nav>
  )
}