import { getUsers } from "@/lib/api";
import { UserCard } from "@/components/user-card";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const data = await getUsers();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                DIRECTORY
              </p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                User Directory
              </h1>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                Browse and explore user profiles, contact information,
                professional details, and more.
              </p>
            </div>

            <Badge variant="secondary" className="w-fit px-3 py-1">
              {data.total} users
            </Badge>
          </div>
        </div>

        {/* User Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

      </div>
    </main>
  );
}