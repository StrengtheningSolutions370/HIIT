import { ExerciseCategory } from "./exercise-category";

export class Exercise {
    exerciseID?: number;
    name: string;
    description: string;
    exerciseCategory?: ExerciseCategory;
    exerciseCategoryID: number;
    lessons?: [];
}