const blogs = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    author: "Alice Johnson",
    url: "https://example.com/javascript-closures",
    likes: 12,
  },
  {
    id: 2,
    title: "Getting Started with Node.js",
    author: "Bob Smith",
    url: "https://example.com/nodejs-basics",
    likes: 25,
  },
  {
    id: 3,
    title: "PostgreSQL Tips for Developers",
    author: "Carol Williams",
    url: "https://example.com/postgresql-tips",
    likes: 18,
  },
  {
    id: 4,
    title: "Building REST APIs with Express",
    author: "David Brown",
    url: "https://example.com/express-rest-api",
    likes: 31,
  },
  {
    id: 5,
    title: "Sequelize ORM Best Practices",
    author: "Emma Davis",
    url: "https://example.com/sequelize-best-practices",
    likes: 9,
  },
];

let nextId = 6;

export const getBlogs = () => {
  return blogs;
};

export const addBlog = (title: string, author: string, url: string) => {
  blogs.push({ id: nextId++, title, author, url, likes: 0 });
};
