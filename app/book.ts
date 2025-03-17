export interface Book {
    id: number
    cover: string
    title: string
    category: string[]
    authors?: string[]
    publisher?: string
    publishedDate?: string
}

const Books: Book[] = [
    {id: 1, cover: 'https://m.media-amazon.com/images/I/51syg8mStRL._SY445_SX342_.jpg', title: 'The Great Gatsby', category: ['Fiction', 'School', 'Historical Fiction', 'Romance', 'Literature', 'Novels', 'Read For School', 'High School', 'Historical', 'American'], authors: ['F. Scott Fitzgerald'], publisher: 'Scribner', publishedDate: '1925-04-10'},
    {id: 2, cover: 'https://m.media-amazon.com/images/I/710DjekSUkL._SL1500_.jpg', title: 'The Da Vinci Code', category: ['Fiction', 'Mystery', 'Thriller', 'Mystery Thriller', 'Historical Fiction', 'Suspense', 'Adventure', 'Crime', 'Novels', 'Adult'], authors: ['Dan Brown'], publisher: 'Doubleday', publishedDate: '2003-03-18'},
    {id: 3, cover: 'https://m.media-amazon.com/images/I/71vK8XjRM+L._SL1500_.jpg', title: 'Angels & Demons', category: ['Fiction', 'Mystery', 'Thriller', 'Mystery Thriller', 'Suspense', 'Adventure', 'Crime', 'Historical Fiction', 'Novels', 'Adult'], authors: ['Dan Brown'], publisher: 'Pocket Books', publishedDate: '2000-05-01'},
    {id: 4, cover: 'https://m.media-amazon.com/images/I/91S62yKmflL._SL1500_.jpg', title: 'The Lost Symbol', category: ['Fiction', 'Mystery', 'Thriller', 'Mystery Thriller', 'Suspense', 'Adventure', 'Historical Fiction', 'Crime', 'Novels', 'Adult'], authors: ['Dan Brown'], publisher: 'Doubleday', publishedDate: '2009-09-15'},
    {id: 5, cover: 'https://m.media-amazon.com/images/I/91D5VnQAHWL._SL1500_.jpg', title: 'Inferno', category: ['Fiction', 'Thriller', 'Mystery', 'Mystery Thriller', 'Historical Fiction', 'Adventure', 'Suspense', 'Crime', 'Novels'], authors: ['Dan Brown'], publisher: 'Doubleday', publishedDate: '2013-05-14'},
    {id: 6, cover: 'https://m.media-amazon.com/images/I/81eB+7+CkUL._SL1500_.jpg', title: 'To Kill a Mockingbird', category: ['Fiction', 'Classic', 'Historical Fiction', 'Literature', 'American'], authors: ['Harper Lee'], publisher: 'J.B. Lippincott & Co.', publishedDate: '1960-07-11'},
    {id: 7, cover: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._SL1500_.jpg', title: '1984', category: ['Fiction', 'Dystopian', 'Science Fiction', 'Political Fiction', 'Classic'], authors: ['George Orwell'], publisher: 'Secker & Warburg', publishedDate: '1949-06-08'},
    {id: 8, cover: 'https://m.media-amazon.com/images/I/91A6EgLH+2L._SL1500_.jpg', title: 'Harry Potter and the Sorcerer\'s Stone', category: ['Fiction', 'Fantasy', 'Young Adult', 'Adventure', 'Magic'], authors: ['J.K. Rowling'], publisher: 'Bloomsbury', publishedDate: '1997-06-26'},
    {id: 9, cover: 'https://m.media-amazon.com/images/I/91M9xPIf10L._SL1500_.jpg', title: 'The Hobbit', category: ['Fiction', 'Fantasy', 'Adventure', 'Classic', 'Epic Fantasy'], authors: ['J.R.R. Tolkien'], publisher: 'George Allen & Unwin', publishedDate: '1937-09-21'},
    {id: 10, cover: 'https://m.media-amazon.com/images/I/71cf1cKjsIS._SL1200_.jpg', title: 'Pride and Prejudice', category: ['Fiction', 'Classic', 'Romance', 'Historical Fiction', 'Literature'], authors: ['Jane Austen'], publisher: 'T. Egerton', publishedDate: '1813-01-28'}

]

export default Books;