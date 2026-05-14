import { Text } from "@/components/ui";
import { SIZES } from "@/lib/constants";
import { ListFilter, SlidersHorizontal } from "lucide-react";
const Issues = () => {
  const instantFilters = [
    { name: "Todo", value: "todo" },
    { name: "Created", value: "created" },
    { name: "Assigned", value: "assigned" },
  ];

  const actionButtons = [
    { name: "Create Issue", value: "create", icon: <ListFilter size={SIZES.ICON_SIZES.md} /> },
    {
      name: "Import Issues",
      value: "import",
      icon: <SlidersHorizontal size={SIZES.ICON_SIZES.md} />,
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <Text className="font-semibold" size="md">
        My Issues
      </Text>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 ">
          {instantFilters.map((filter) => (
            <Text
              key={filter.value}
              className="px-3 py-[4px] rounded-md text-white cursor-pointer border border-[var(--text-muted)]"
              size="sm"
            >
              {filter.name}
            </Text>
          ))}
        </div>
        <div className="flex gap-2">
          {actionButtons.map(
            (action) =>
              action.icon && (
                <div
                  key={action.value}
                  className="flex items-center gap-1 rounded-full p-2 text-white cursor-pointer border border-[var(--text-muted)]"
                >
                  {action.icon}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Issues;
