import { ComponentProps } from "react";

import { cn, formatDefaultDate } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export default function MailList({ items, id, onClick }: any) {
  return (
    <div className="flex flex-col gap-2 px-4">
      {items.map((item) => (
        <button
          key={item.id}
          className={cn(
            "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-primary hover:text-white group",
            id === item.id && "bg-primary text-white"
          )}
          onClick={() => onClick(item.id)}
        >
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">
                  {item.name ? item.name : "Anonymous"}
                </div>
                {!item.isRead && (
                  <span
                    className={cn(
                      "flex h-2 w-2 rounded-full bg-primary group-hover:bg-white",
                      id === item.id && "bg-white"
                    )}
                  />
                )}
              </div>
              <div
                className={cn(
                  "ml-auto text-xs"
                  // mail.selected === item.id
                  //   ? "text-foreground"
                  //   : "text-muted-foreground"
                )}
              >
                {formatDefaultDate(new Date(item.createdAt))}
              </div>
            </div>
            {/* <div className="text-xs font-medium">{item.subject}</div> */}
          </div>
          {/* <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.text.substring(0, 300)}
            </div>
            {item.labels.length ? (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null} */}
        </button>
      ))}
    </div>
  );
}

function getBadgeVariantFromLabel(
  label: string
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}
