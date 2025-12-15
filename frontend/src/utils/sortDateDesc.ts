import { IAchievement } from "@/types/achievement.types";


const sortDateDesc = (list: IAchievement[]): IAchievement[] => {
    return [...list].sort((a, b) => b.date.getTime() - a.date.getTime());
};

export default sortDateDesc;