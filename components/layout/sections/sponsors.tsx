// "use client";

// import { Icon } from "@/components/ui/icon";
// import { Marquee } from "@devnomic/marquee";
// import "@devnomic/marquee/dist/index.css";
// import { icons } from "lucide-react";
// import { useTheme } from "next-themes";

// interface sponsorsProps {
//   icon: string;
//   name: string;
// }

// const sponsors: sponsorsProps[] = [
//   {
//     icon: "Crown",
//     name: "Acmebrand",
//   },
//   {
//     icon: "Vegan",
//     name: "Acmelogo",
//   },
//   {
//     icon: "Ghost",
//     name: "Acmesponsor",
//   },
//   {
//     icon: "Puzzle",
//     name: "Acmeipsum",
//   },
//   {
//     icon: "Squirrel",
//     name: "Acme",
//   },
//   {
//     icon: "Cookie",
//     name: "Accmee",
//   },
//   {
//     icon: "Drama",
//     name: "Acmetech",
//   },
// ];

// export const SponsorsSection = () => {
//   const { theme } = useTheme();

//   // Define color classes based on the theme
//   const isDarkMode = theme === "dark";
//   const textColor = isDarkMode ? "text-white" : "text-gray-900";
//   const secondaryTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
//   const backgroundColor = isDarkMode ? "bg-gray-900" : "bg-white";
//   const iconColor = isDarkMode ? "text-purple-300" : "text-purple-600";

//   return (
//     <section
//       id="sponsors"
//       className={`max-w-[75%] mx-auto pb-24 sm:pb-32 ${backgroundColor}`}
//     >
//       <h2 className={`text-lg md:text-xl text-center mb-6 ${textColor}`}>
//         Our Platinum Sponsors
//       </h2>

//       <div className="mx-auto">
//         <Marquee
//           className="gap-[3rem]"
//           fade
//           innerClassName="gap-[3rem]"
//           pauseOnHover
//         >
//           {sponsors.map(({ icon, name }) => (
//             <div
//               key={name}
//               className={`flex items-center text-xl md:text-2xl font-medium ${textColor}`}
//             >
//               {/* <Icon
//                 name={icon as keyof typeof icons}
//                 size={32}
//                 className={`mr-2 ${iconColor}`}
//               /> */}
//               {name}
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </section>
//   );
// };
