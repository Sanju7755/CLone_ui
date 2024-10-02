import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import Image from "next/image";

export function Cards() {
  const { theme } = useTheme();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 bg-black pt-8 px-8 pb-4">
      <div className="relative w-full pb-[100%]">
        <MagicCard
          className="absolute inset-0 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#262626"}
        >
          Magic
        </MagicCard>
      </div>
      <div className="relative w-full pb-[100%]">
        <MagicCard
          className="absolute inset-0 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#262626"}
        >
         Card
        </MagicCard>
      </div>
      <div className="relative w-full pb-[100%]">
        <MagicCard
          className="absolute inset-0 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#262626"}
        >
          Magic 3
        </MagicCard>
      </div>
      <div className="relative w-full pb-[100%]">
        <MagicCard
          className="absolute inset-0 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#262626"}
        >
          Magic 4
        </MagicCard>
      </div>
      <div className="relative w-full pb-[100%]">
        <MagicCard
          className="absolute inset-0 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#262626"}
        >
          Magic 5
        </MagicCard>
      </div>
      <div className="relative w-full pb-[100%]">
        <MagicCard
          className="absolute inset-0 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#262626"}
        >
          Magic 6
        </MagicCard>
      </div>
    </div>
  );
}
