import React, { useEffect, useState } from "react";
import { CreditCard, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import ProjectLayout from "@/components/layout/ProjectLayout";
import { useRouter } from "next/router";

export default function ProjectDashboard(props) {
  const router = useRouter();

  const [appContent, setAppContent] = useState({
    files: 0,
    urls: 0,
    bots: 0,
    humans: 0,
  });
  const [isDataLoading, setIsDataLoading] = useState(true);

  const fetchContentEntries = async () => {
    setIsDataLoading(true);
    const response = await fetch(`/api/projects/${router.query.id}/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const appContent = await response.json();

    setAppContent(appContent);
    setIsDataLoading(false);
  };

  useEffect(() => {
    if (router.query.id) {
      fetchContentEntries();
    }
  }, [router.query.id]);

  return (
    <>
      <ProjectLayout>
        <main className="grid gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total File</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{appContent?.files}</div>
              <p className="text-xs text-muted-foreground hidden">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total URL</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{appContent?.urls}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Conversation Human
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{appContent?.humans}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Conversation Bot
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{appContent?.bots}</div>
            </CardContent>
          </Card>
        </main>
      </ProjectLayout>
    </>
  );
}
