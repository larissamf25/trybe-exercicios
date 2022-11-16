import EmailNotification from './EmailNotification';
import Notificator from './Notificator';

type Book = {
  book: string;
  author: string;
  genre: string;
}

class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  private wishlist: Book[];
  notificator: Notificator;

  constructor(readingGoal: number, email: string) {
    this.notificator = new EmailNotification(email);
    this.readingGoal = readingGoal;
    this.booksRead = 0;
    this.wishlist = [];
  }

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }

  progressNotification(message: string): void {
    console.log(message);
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
}

const readTracker = new ReadingTracker(20, 'larissamf25@gmail.com');
readTracker.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
readTracker.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);