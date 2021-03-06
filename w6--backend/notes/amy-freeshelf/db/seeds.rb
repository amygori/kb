# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  books = [{
    "title": "Structure and Interpretation of Computer Programs",
    "author": "Harold Abelson, Gerald Jay Sussman, and Julie Sussman",
    "url": "https://mitpress.mit.edu/sicp/",
    "shortDescription": "An excellent computer science text used in introductory courses at MIT. One of the bibles of the LISP/Scheme world.",
    "coverImageUrl": "https://mitpress.mit.edu/sites/default/files/imagecache/booklist_node/9780262510875.jpg",
    "publisher": "The MIT Press",
    "publicationDate": "1984",
    "detailedDescription": "Structure and Interpretation of Computer Programs has had a dramatic impact on computer science curricula over the past decade. This long-awaited revision contains changes throughout the text. There are new implementations of most of the major programming systems in the book, including the interpreters and compilers, and the authors have incorporated many small changes that reflect their experience teaching the course at MIT since the first edition was published. A new theme has been introduced that emphasizes the central role played by different approaches to dealing with time in computational models: objects with state, concurrent programming, functional programming and lazy evaluation, and nondeterministic programming. There are new example sections on higher-order procedures in graphics and on applications of stream processing in numerical programming, and many new exercises. In addition, all the programs have been reworked to run in any Scheme implementation that adheres to the IEEE standard."
  },
  {
    "title": "Building Skills in Object-Oriented Design",
    "author": "Steven F. Lott",
    "url": "http://www.itmaybeahack.com/book/oodesign-python-2.1/latex/BuildingSkillsinOODesign.pdf",
    "shortDescription": "The coffee-shop reason for reading this book is to provide the beginning designer with a sequence of interesting and moderately complex exercises in OO design.",
    "coverImageUrl": "",
    "publisher": "",
    "publicationDate": "2009",
    "detailedDescription": "The intent of this book is to help you, the beginning designer, by giving you a sequence of interesting and moderately complex exercises in OO design. The exercises are not focused on a language, but on a design process. The exercises are not hypothetical, but must lead directly to working programs. This book can also help managers develop a level of comfort with the process of OO software development. This book allows the reader to explore the processes and artifacts of OO design before project deadlines make good design seem impossible."
  },{
    "title": "You Don't Know JS: Up & Going",
    "author": "Kyle Simpson",
    "url": "https://github.com/getify/You-Dont-Know-JS/tree/master/up%20%26%20going",
    "shortDescription": "If you're just getting into programming and/or JavaScript, this book will briefly explore what you need to get up and going.",
    "coverImageUrl": "https://raw.githubusercontent.com/getify/You-Dont-Know-JS/master/up%20%26%20going/cover.jpg",
    "publisher": "O'Reilly",
    "publicationDate": "March 2015",
    "detailedDescription": "It’s easy to learn parts of JavaScript, but much harder to learn it completely—or even sufficiently—whether you’re new to the language or have used it for years. With the 'You Don’t Know JS' book series, you’ll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced JavaScript programmers simply avoid. The series’ first book, Up & Going, provides the necessary background for those of you with limited programming experience. By learning the basic building blocks of programming, as well as JavaScript’s core mechanisms, you’ll be prepared to dive into the other, more in-depth books in the series—and be well on your way toward true JavaScript."
  },
  {
    "title": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "url": "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
    "shortDescription": "You’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language.",
    "coverImageUrl": "https://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg",
    "publisher": "O'Reilly",
    "publicationDate": "2012",
    "detailedDescription": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you. Explore many popular design patterns, including Modules, Observers, Facades, and Mediators. Learn how modern architectural patterns—such as MVC, MVP, and MVVM—are useful from the perspective of a modern web application developer. This book also walks experienced JavaScript developers through modern module formats, how to namespace code effectively, and other essential topics."
  },
  {
    "title": "An Introduction to Programming in Go",
    "author": "Caleb Doxsy",
    "url": "http://www.golang-book.com/books/intro",
    "shortDescription": "This book will teach you how to write computer programs using a programming language designed by Google named Go.",
    "coverImageUrl": "http://www.golang-book.com/public/img/intro/cover.0.png",
    "publisher": "",
    "publicationDate": "2012",
    "detailedDescription": "Computer programming is the art, craft and science of writing programs which define how computers operate. This book will teach you how to write computer programs using a programming language designed by Google named Go. Go is a general purpose programming language with advanced features and a clean syntax. Because of its wide availability on a variety of platforms, its robust well-documented common library, and its focus on good software engineering principles, Go is an ideal language to learn as your first programming language."
  },
  {
    "title": "Clojure for the Brave and True",
    "author": "Daniel Higgenbotham",
    "url": "https://www.braveclojure.com/clojure-for-the-brave-and-true/",
    "shortDescription": "In Clojure for the Brave and True, you'll learn to wield this awesome language to its fullest!",
    "coverImageUrl": "http://nostarch.com/sites/default/files/styles/uc_product/public/clojure_cover-front_final.png",
    "publisher": "No Starch Press",
    "publicationDate": "2015",
    "detailedDescription": "For weeks, months—nay!—from the very moment you were born, you’ve felt it calling to you. At long last you'll be united with the programming language you've been longing for: Clojure! Clojure’s popularity continues to grow, with companies like Netflix using it to build everything from complex, distributed systems to simple microservices to user interfaces. In Clojure for the Brave and True, you'll learn to wield this awesome language to its fullest!"
  },
  {
    "title": "Joy of Elixir",
    "author": "Ryan Bigg",
    "url": "https://joyofelixir.com/toc.html",
    "shortDescription": "Joy of Elixir is a gentle introduction to programming, aimed at people who already know some things about computers, but who have little-to-no programming experience.",
    "coverImageUrl": "https://joyofelixir.com/images/small-cover.png",
    "publisher": "Leanpub",
    "publicationDate": "2017",
    "detailedDescription": "Joy of Elixir is a gentle introduction to programming, aimed at people who already know some things about computers, but who have little-to-no programming experience. If you think you don't know enough about computers, well you got here already and that's enough! This book will teach you the core concepts of the Elixir programming language in a fun and enjoyable way. If you're completely new to programming and you want to learn how to make a computer do things using the power of programming and you want to experience some joy while doing it, then read on!"
  }
]

User.create!(
  name: 'amy',
  email: 'amy@momentumlearn.com',
  password: 'password',
  password_confirmation: 'password'
)

books.map do |book|
  Book.create!(
    title: book[:title],
    author: book[:author],
    url: book[:url],
    description: book[:shortDescription],
    user_id: 1
  )
end