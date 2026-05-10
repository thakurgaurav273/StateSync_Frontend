"use client";
import { endpoints } from "@/lib/endpoints";
import { useEffect } from "react";
import { useRequest } from "@/hooks/useRequest";
import AppShell from "@/components/layout/shell";

export default function Home() {
const { request: getIssues, data: issues } = useRequest({...endpoints.issues.getIssues});
useEffect(() => {
  getIssues();
}, []);

  return (
    <AppShell>
      <div>
        {/* {issues.map((issue) => (
          <div key={issue.id}>{issue.title}</div>
        ))} */}
      </div>
    </AppShell>
  );
}
