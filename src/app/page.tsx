"use client";

import { Card, CardHeader } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { FcLandscape } from "react-icons/fc";

export default function Index() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className="flex h-screen">
      <span className="m-auto">
        <Card className="max-w-[480px]">
          <CardHeader className="flex gap-3">
            <FcLandscape className="h-16 w-16" />
            <div className="flex flex-col">
              <p className="text-md font-semibold">Pondasi Templates</p>
              <p className="text-xs font-light text-default-500">Keep it simple.</p>
            </div>
          </CardHeader>
        </Card>
      </span>
    </div>
  );
}
