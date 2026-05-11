import { Text } from "@/components/ui";
const Issues = () => {
  const instantFilters = [
    { name: "Todo", value: "todo" },
    { name: "Created", value: "created" },
    { name: "Assigned", value: "assigned" },
  ];

  const actionButtons = [
    { name: "Create Issue", value: "create" },
    { name: "Import Issues", value: "import" },
  ];
  return (
    <div className="flex flex-col gap-2">
      <Text className="font-semibold" size="md">
        My Issues
      </Text>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {instantFilters.map((filter) => (
            <Text
              key={filter.value}
              className="px-3 py-[4px] rounded-md text-white cursor-pointer border border-[var(--text-muted)]"
              size="sm"
            >
              {filter.name}
            </Text>
          ))}
          <div className="flex gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Issues;
