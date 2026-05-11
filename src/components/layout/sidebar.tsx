import { SIZES } from "@/lib/constants";
import { Box, CheckCircle, ChevronDown, ChevronUp, Inbox, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar, Text } from "../ui";

const Sidebar = () => {
  const router = useRouter();
  const [sideNavState, setSideNavState] = useState({
    workspaceExpanded: false,
    teamsExpanded: false,
  });
  const accessNavItems = [
    {
      name: "Inbox",
      href: "/",
      icon: <Inbox className="text-gray-400 hover:text-white" size={SIZES.ICON_SIZES.lg} />,
    },
    {
      name: "Issues",
      href: "/issues",
      icon: <CheckCircle className="text-gray-400 hover:text-white" size={SIZES.ICON_SIZES.lg} />,
    },
  ];

  const workspaceNavItems = [
    {
      name: "Projects",
      href: "/projects",
      icon: <Box className="text-gray-400 hover:text-white" size={SIZES.ICON_SIZES.lg} />,
    },
    {
      name: "Members",
      href: "/members",
      icon: <Users className="text-gray-400 hover:text-white" size={SIZES.ICON_SIZES.lg} />,
    },
    {
      name: "Teams",
      href: "/teams",
      icon: <Users className="text-gray-400 hover:text-white" size={SIZES.ICON_SIZES.lg} />,
    },
  ];
  return (
    <div className="flex flex-col h-full w-full">
      <div className="branding flex items-center gap-2 px-4 pt-6 pb-4">
        <Avatar
          name="State Sync"
          avatarStyle={{
            width: "40px",
            height: "40px",
            backgroundColor: "var(--color-primary)",
            textColor: "#fff",
            borderRadius: "4px",
          }}
        />
        <Text>Engineering</Text>
      </div>
      <nav className="flex flex-col gap-2 px-4">
        {accessNavItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}

        <Text
          onClick={() =>
            setSideNavState({
              ...sideNavState,
              workspaceExpanded: !sideNavState.workspaceExpanded,
            })
          }
          className="flex gap-2 items-center cursor-pointer"
        >
          Workspace{" "}
          {sideNavState.workspaceExpanded ? (
            <ChevronUp size={SIZES.ICON_SIZES.md} />
          ) : (
            <ChevronDown size={SIZES.ICON_SIZES.md} />
          )}
        </Text>

        <div className="flex flex-col gap-2 pl-1">
          {sideNavState.workspaceExpanded &&
            workspaceNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-gray-400 hover:text-white"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
