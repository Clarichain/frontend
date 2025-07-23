"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import {
  CheckCircle,
  Clock,
  FileEdit,
  Files,
  FileText,
  LucideProps,
} from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const iconMap = {
  "file-text": FileText,
  "check-circle": CheckCircle,
  clock: Clock,
  "file-edit": FileEdit,
};

export interface StatCardProps {
  title: string;
  value: string;
  textColorClass: string;
  backgroundColorClass: string;
  index: number;
  icon: keyof typeof iconMap;
}

export const StatCard = ({
  title,
  value,
  textColorClass,
  backgroundColorClass,
  index,
  icon,
}: StatCardProps) => {
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariant}
    >
      <Card>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="font-medium text-[16px] text-neutral-gray">{title}</p>
            <h1
              className={`font-bold text-[24px] ${textColorClass}`}
            >
              {value}
            </h1>
          </div>
          {IconComponent && (
            <div className={cn("rounded-md p-2", backgroundColorClass, textColorClass)}>
              <IconComponent />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
