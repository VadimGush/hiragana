import { Review, RandomPicker, ReviewCard } from "@/core/Review";
import type Creator from "./Creator";

function createCard(
  meaning: string,
  note: string,
  japanese: string[]
): ReviewCard {
  return new ReviewCard({
    question: meaning,
    answers: japanese,
    shownAnswers: [japanese[0]],
    note: note,
    type: "translation",
    input: "hiragana"
  });
}

class JapanesePhrases implements Creator {
  id = "phrases";
  name = "Japanese Common Phrases";

  meaning: boolean = false;
  reading: boolean = false;
  translation: boolean = true;
  shuffling: boolean = false;

  create(_: string[]): Review | undefined {
    const cards = [
      createCard("Glad to meet you", "", ["はじめまして"]),
      createCard("Look forward to work with you", "", [
        "よろしくおねがいします",
      ]),
      createCard("Good morning", "", ["おはようございます"]),
      createCard("Good day", "", ["こんにちは"]),
      createCard("Good evening", "", ["こんばんは"]),

      createCard("Good night", "", ["おやすみなさい"]),
      createCard("Excuse me", "", ["すみません"]),
      createCard("I'm sorry", "", ["ごめんなさい"]),
      createCard("Thank you", "", ["ありがとうございます", "ありがとう"]),
      createCard("You're welcome", "", ["どういたしまして"]),
    ];
    return new Review(new RandomPicker(cards));
  }
}

export default JapanesePhrases;
