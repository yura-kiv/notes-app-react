import { Note } from "../../interfaces/note";

type categories = "Task" | "Random Thought" | "Idea";

const categories: string[] = ["Task", "Random Thought", "Idea"];

interface Statistic {
  [key: string]: { [key: string]: string | number };
}

export class FormateRow {
  static getNotesStatistic(notesData: Note[]): Statistic {
    const statistic: Statistic = {};
    categories.forEach((category) => {
      let active = 0;
      let archive = 0;
      notesData.forEach((note) => {
        if (note.category === category) {
          note.status === "active" ? active++ : archive++;
        }
      });
      statistic[category] = { active, archive };
    });
    return statistic;
  }

  static findDatesInContent(content: string): string[] {
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    const dates = content.match(dateRegex) || [];
    return dates.map((date) => {
      const [day, month, year] = date.split("/");
      return `${day}/${month}/${year}`;
    });
  }
}
