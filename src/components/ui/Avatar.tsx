import getInitials from "@/utils/getInitials";

interface IAvatarStyles {
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;  
}

interface AvatarProps {
  avatarUrl?: string;
  name: string;
  className?: string;
  avatarStyle?: IAvatarStyles;
}

const Avatar = ({
  avatarUrl,
  name,
  className,
  avatarStyle,
}: AvatarProps) => {
  const nameInitials = getInitials(name);

  const style = {
    width: avatarStyle?.width || "2.5rem",
    height: avatarStyle?.height || "2.5rem",
    backgroundColor: avatarStyle?.backgroundColor || "#6B7280",
    color: avatarStyle?.textColor || "#FFFFFF",
    borderRadius: avatarStyle?.borderRadius || "9999px",
  };

  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${className || ""}`}
      style={style}
    >
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-sm font-bold">
          {nameInitials}
        </span>
      )}
    </div>
  );
};

export default Avatar;