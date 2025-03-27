import { createContext, useState, ReactNode } from "react";
import { Book, BookStatus } from "../types/Book";

export type BookContextType = {
    books: Book[];
    addBook: (book: Book) => void;
    updateBook: (id: string, book: Book) => void;
    removeBook: (id: string) => void;
};

export const BookContext = createContext<BookContextType | null>(null);
export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [bookList, setBookList] = useState<Book[]>([
      {
          id: "1",
          name: "הכוזרי",
          description: "חיבור פילוסופי מאת רבי יהודה הלוי המתאר דיונים על עקרונות היהדות.",
          status: BookStatus.toRead,
      },
      {
          id: "2",
          name: "חפץ חיים",
          description: "ספר מוסר מאת רבי ישראל מאיר הכהן על חשיבות שמירת הלשון ודיני רכילות.",
          status: BookStatus.available,
      },
      {
          id: "3",
          name: "אור החיים על התורה",
          description: "פירוש על חמישה חומשי תורה מאת רבי חיים בן עטר, המשלב פשט, רמז וסוד.",
          status: BookStatus.unAvailable,
      },
      {
          id: "4",
          name: "מסילת ישרים",
          description: "ספר מוסר מאת הרמח״ל המסביר את שלבי ההתעלות הרוחנית של האדם.",
          status: BookStatus.toRead,
      },
      {
          id: "5",
          name: "נתיבות שלום",
          description: "ספר יסוד בחסידות מאת האדמו״ר מסלונים על עבודת ה׳ ומידות טובות.",
          status: BookStatus.available,
      },
  ]);

  const bookContextValue: BookContextType = {
      books: bookList,
      addBook: (book: Book) => {
          setBookList((prevList) => [...prevList, book]);
      },
      removeBook: (id: string) => {
          setBookList((prevList) => prevList.filter((book) => book.id !== id));
      },
      updateBook: (id: string, updatedBook: Book) => {
          setBookList((prevList) =>
              prevList.map((book) => (book.id === id ? updatedBook : book))
          );
      },
  };

  return <BookContext.Provider value={bookContextValue}>{children}</BookContext.Provider>;
};
