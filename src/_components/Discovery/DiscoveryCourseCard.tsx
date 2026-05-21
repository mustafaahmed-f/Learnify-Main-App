"use client";

import { Card, CardContent } from "@/_components/ui/card";
import { DiscoveryCourse } from "./types";
import { cn } from "@/lib/utils";
import { BookOpen, Clock, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

type DiscoveryCourseCardProps = {
  course: DiscoveryCourse;
};

function DiscoveryCourseCard({ course }: DiscoveryCourseCardProps) {
  return (
    <motion.article
      className="w-[280px] shrink-0 snap-start sm:w-[320px]"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card className="h-full overflow-hidden rounded-lg border-border/80 bg-card py-0 shadow-sm shadow-slate-950/5 transition-shadow hover:shadow-lg hover:shadow-slate-950/10">
        <div
          className={cn(
            "flex h-32 items-start justify-between bg-gradient-to-br p-4 text-white",
            course.accent
          )}
        >
          <span className="rounded-md bg-white/20 px-2.5 py-1 text-xs font-semibold backdrop-blur">
            {course.badge}
          </span>
          <BookOpen className="size-6" />
        </div>

        <CardContent className="space-y-4 p-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-primary">
              {course.level}
            </p>
            <h3 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-foreground">
              {course.title}
            </h3>
            <p className="truncate text-sm text-muted-foreground">
              by {course.instructor}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
              {course.rating}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="size-3.5" />
              {course.students}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {course.duration}
            </span>
            <span>{course.lessons} lessons</span>
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <span className="text-lg font-semibold text-foreground">
              {course.price}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Preview course
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}

export default DiscoveryCourseCard;
