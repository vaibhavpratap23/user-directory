import Link from "next/link";

import { getUser } from "@/lib/api";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UserDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserDetailsPage({
  params,
}: UserDetailsPageProps) {
  const { id } = await params;
  const user = await getUser(id);

  const initials = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Back Navigation */}
        <Link
          href="/"
          className="mb-8 inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          ← Back to Users
        </Link>

        <Card className="overflow-hidden">

          {/* Profile Header */}
          <CardHeader className="border-b bg-muted/30">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
              <Avatar className="h-24 w-24 border-4 border-background shadow-sm">
                <AvatarImage
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                />

                <AvatarFallback className="text-xl">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div>
                <CardTitle className="text-2xl sm:text-3xl">
                  {user.firstName} {user.lastName}
                </CardTitle>

                <p className="mt-1 text-muted-foreground">
                  @{user.username}
                </p>

                <Badge className="mt-3">
                  {user.company.title}
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-10 p-6 sm:p-8">

            {/* Contact Information */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">
                Contact Information
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="mt-1 break-all text-sm text-muted-foreground">
                    {user.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {user.phone}
                  </p>
                </div>
              </div>
            </section>

            {/* Personal Information */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">
                Personal Information
              </h2>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <p className="text-sm font-medium">Age</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {user.age}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">Gender</p>
                  <p className="mt-1 capitalize text-sm text-muted-foreground">
                    {user.gender}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">Birth Date</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {user.birthDate}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">Blood Group</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {user.bloodGroup}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">Height</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {user.height} cm
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">Weight</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {user.weight} kg
                  </p>
                </div>
              </div>
            </section>

            {/* Address */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">
                Address
              </h2>

              <div className="rounded-lg border bg-muted/20 p-4">
                <p className="text-sm">
                  {user.address.address}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {user.address.city}, {user.address.state}
                </p>

                <p className="text-sm text-muted-foreground">
                  {user.address.country} - {user.address.postalCode}
                </p>
              </div>
            </section>

            {/* Professional Information */}
            <section>
              <h2 className="mb-4 text-lg font-semibold">
                Professional Information
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium">Company</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {user.company.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">Department</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {user.company.department}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">Job Title</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {user.company.title}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">University</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {user.university}
                  </p>
                </div>
              </div>
            </section>

          </CardContent>
        </Card>
      </div>
    </main>
  );
}