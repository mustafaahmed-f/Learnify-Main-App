"use client";

import { Card, CardContent } from "@/_components/ui/card";
import { DiscoveryInstructor } from "./types";
import { Award, BookOpen, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

type DiscoveryInstructorCardProps = {
  instructor: DiscoveryInstructor;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function DiscoveryInstructorCard({ instructor }: DiscoveryInstructorCardProps) {
  return (
    <motion.article
      className="w-[260px] shrink-0 snap-start sm:w-[300px]"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card className="h-full rounded-lg border-border/80 bg-card shadow-sm shadow-slate-950/5 transition-shadow hover:shadow-lg hover:shadow-slate-950/10">
        <CardContent className="space-y-5 p-5">
          <div className="flex items-start gap-4">
            <div
              className={`flex size-14 shrink-0 items-center justify-center rounded-lg text-base font-bold ${instructor.accent}`}
            >
              {getInitials(instructor.name)}
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold text-foreground">
                {instructor.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {instructor.role}
              </p>
            </div>
          </div>

          <p className="line-clamp-2 min-h-10 text-sm text-muted-foreground">
            {instructor.specialty}
          </p>

          <div className="grid grid-cols-3 gap-2 rounded-lg bg-muted/60 p-3 text-center text-xs">
            <span className="space-y-1">
              <Star className="mx-auto size-3.5 fill-amber-400 text-amber-400" />
              <strong className="block text-foreground">
                {instructor.rating}
              </strong>
            </span>
            <span className="space-y-1">
              <Users className="mx-auto size-3.5 text-primary" />
              <strong className="block text-foreground">
                {instructor.students}
              </strong>
            </span>
            <span className="space-y-1">
              <BookOpen className="mx-auto size-3.5 text-emerald-600" />
              <strong className="block text-foreground">
                {instructor.courses}
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Award className="size-4 text-primary" />
            Instructor profile
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}

export default DiscoveryInstructorCard;
