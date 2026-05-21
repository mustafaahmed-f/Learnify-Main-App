"use client";

import { Card, CardContent } from "@/_components/ui/card";
import { DiscoveryLiveClass } from "./types";
import { cn } from "@/lib/utils";
import { CalendarDays, Clock, Radio, Users } from "lucide-react";
import { motion } from "framer-motion";

type DiscoveryLiveClassCardProps = {
  liveClass: DiscoveryLiveClass;
};

function DiscoveryLiveClassCard({ liveClass }: DiscoveryLiveClassCardProps) {
  return (
    <motion.article
      className="w-[280px] shrink-0 snap-start sm:w-[320px]"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card className="h-full overflow-hidden rounded-lg border-border/80 bg-card py-0 shadow-sm shadow-slate-950/5 transition-shadow hover:shadow-lg hover:shadow-slate-950/10">
        <div
          className={cn(
            "flex h-28 items-start justify-between bg-gradient-to-br p-4 text-white",
            liveClass.accent
          )}
        >
          <span className="rounded-md bg-white/20 px-2.5 py-1 text-xs font-semibold backdrop-blur">
            {liveClass.level}
          </span>
          <Radio className="size-6" />
        </div>

        <CardContent className="space-y-4 p-5">
          <div className="space-y-2">
            <h3 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-foreground">
              {liveClass.title}
            </h3>
            <p className="truncate text-sm text-muted-foreground">
              with {liveClass.instructor}
            </p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CalendarDays className="size-4 text-primary" />
              {liveClass.startsAt}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              {liveClass.duration}
            </span>
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Users className="size-3.5" />
              {liveClass.seatsLeft} seats left
            </span>
            <span className="text-xs font-medium text-primary">
              Preview class
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}

export default DiscoveryLiveClassCard;
