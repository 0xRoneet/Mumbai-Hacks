"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { useTheme } from "next-themes";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
  },
  {
    icon: "BadgeCheck",
    title: "Social Proof",
    description:
      "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
  },
  {
    icon: "Goal",
    title: "Targeted Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
  },
  {
    icon: "PictureInPicture",
    title: "Strong Visuals",
    description:
      "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
  },
  {
    icon: "MousePointerClick",
    title: "Clear CTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
  },
  {
    icon: "Newspaper",
    title: "Clear Headline",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
  },
];

export const FeaturesSection = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  // Color styles based on theme
  const bgGradient = isDarkMode
    ? "bg-gradient-to-br from-gray-900 to-gray-800"
    : "bg-gradient-to-br from-primary-100 to-primary-200";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";
  const backgroundColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const subtextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white bg-opacity-80";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-300";
  const iconColor = isDarkMode ? "bg-purple-600 text-white" : "bg-purple-300 text-gray-800";
  const titleColor = isDarkMode ? "text-purple-400" : "text-purple-800";

  return (
    <section className={`relative min-h-screen ${backgroundColor} w-full -mt-8 overflow-hidden`}>
      <h2 className="text-lg text-purple-500 text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className={`text-3xl md:text-4xl text-center font-bold mb-4 ${textColor}`}>
        What Makes Us Different
      </h2>

      <h3 className={`md:w-1/2 mx-auto text-xl text-center mb-8 ${subtextColor}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className={`h-full ${cardBg} ${borderColor} shadow-lg`}>
              <CardHeader className="flex flex-col items-center">
                <div className={`p-2 rounded-full ring-8 ring-purple-200 mb-4 ${iconColor}`}>
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    className="text-white"
                  />
                </div>
                <CardTitle className={`${titleColor}`}>{title}</CardTitle>
              </CardHeader>

              <CardContent className={`text-center ${subtextColor}`}>
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
