import Link from "next/link";

import { User } from "@/types/user";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const initials = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <Card className="flex h-full flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-14 w-14 shrink-0">
          <AvatarImage
            src={user.image}
            alt={`${user.firstName} ${user.lastName}`}
          />

          <AvatarFallback>
            {initials}
          </AvatarFallback>
        </Avatar>

        <div className="min-w-0">
          <h2 className="truncate font-semibold">
            {user.firstName} {user.lastName}
          </h2>

          <p className="text-sm text-muted-foreground">
            @{user.username}
          </p>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col space-y-4">
        <div>
          <p className="text-sm font-medium">
            Email
          </p>

          <p className="mt-1 truncate text-sm text-muted-foreground">
            {user.email}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium">
            Company
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            {user.company.name}
          </p>
        </div>

        <Link
          href={`/users/${user.id}`}
          className="mt-auto inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
        >
          View Details
        </Link>
      </CardContent>
    </Card>
  );
}