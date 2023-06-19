var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-back-matter_foreword",
  "level": "1",
  "url": "front-back-matter_foreword.html",
  "type": "Section",
  "number": "1",
  "title": "Foreword to the Functions First Edition",
  "body": " Foreword to the Functions First Edition  By Charlotte Curtis  This \"Functions First\" edition is an adaptation of the original Foundations of Python Programming book that places an emphasis on learning to program , not learning to program in Python . This book was created for Mount Royal University's introductory programming course, where students learn Python first and then follow up with C++ or Java depending on their major. The following changes were made:   As suggested by the name, functions were moved much earlier in the book and are introduced as the major programming construct. We have observed that functions are one of the most challenging concept for beginners, so the early introduction provides the opportunity to practice this concept throughout the course.    Most turtle graphics examples were removed to keep the focus on terminal programs.    Python-specific data structures and patterns like dictionaries, list comprehension, tuple packing and unpacking were removed to maintain a focus on the core programming concepts.    Iteration was rearranged to introduce while before for loops in order to emphasize the initialization, condition, update pattern.    Several chapters such as sorting, testing, and inheritance were removed to keep the content consistent with a single semester course.     The majority of the adaptation was done by Matthew Hrehirchuk, with supervision and edits by Eric Chalmers, Charlotte Curtis, and Patrick Perri. Support for this adaptation was provided by Mount Royal University Library's OER adaptation grant program.  At the time of writing in June 2023, this book is still a work in progress. If you spot any errors or confusing text, please don't hesitate to submit an issue to our issue tracker.   "
},
{
  "id": "front-back-matter_foreword_og",
  "level": "1",
  "url": "front-back-matter_foreword_og.html",
  "type": "Section",
  "number": "2",
  "title": "Original Foreword",
  "body": " Original Foreword  By David Beazley  As an educator, researcher, and book author, I am delighted to see the completion of this book. Python is a fun and extremely easy-to-use programming language that has steadily gained in popularity over the last few years. Developed over ten years ago by Guido van Rossum, Python's simple syntax and overall feel is largely derived from ABC, a teaching language that was developed in the 1980's. However, Python was also created to solve real problems and it borrows a wide variety of features from programming languages such as C++, Java, Modula-3, and Scheme. Because of this, one of Python's most remarkable features is its broad appeal to professional software developers, scientists, researchers, artists, and educators.  Despite Python's appeal to many different communities, you may still wonder why Python? or why teach programming with Python? Answering these questions is no simple task—especially when popular opinion is on the side of more masochistic alternatives such as C++ and Java. However, I think the most direct answer is that programming in Python is simply a lot of fun and more productive.  When I teach computer science courses, I want to cover important concepts in addition to making the material interesting and engaging to students. Unfortunately, there is a tendency for introductory programming courses to focus far too much attention on mathematical abstraction and for students to become frustrated with annoying problems related to low-level details of syntax, compilation, and the enforcement of seemingly arcane rules. Although such abstraction and formalism is important to professional software engineers and students who plan to continue their study of computer science, taking such an approach in an introductory course mostly succeeds in making computer science boring. When I teach a course, I don't want to have a room of uninspired students. I would much rather see them trying to solve interesting problems by exploring different ideas, taking unconventional approaches, breaking the rules, and learning from their mistakes. In doing so, I don't want to waste half of the semester trying to sort out obscure syntax problems, unintelligible compiler error messages, or the several hundred ways that a program might generate a general protection fault.  One of the reasons why I like Python is that it provides a really nice balance between the practical and the conceptual. Since Python is interpreted, beginners can pick up the language and start doing neat things almost immediately without getting lost in the problems of compilation and linking. Furthermore, Python comes with a large library of modules that can be used to do all sorts of tasks ranging from web-programming to graphics. Having such a practical focus is a great way to engage students and it allows them to complete significant projects. However, Python can also serve as an excellent foundation for introducing important computer science concepts. Since Python fully supports procedures and classes, students can be gradually introduced to topics such as procedural abstraction, data structures, and object-oriented programming — all of which are applicable to later courses on Java or C++. Python even borrows a number of features from functional programming languages and can be used to introduce concepts that would be covered in more detail in courses on Scheme and Lisp.  In reading Jeffrey's preface, I am struck by his comments that Python allowed him to see a higher level of success and a lower level of frustration and that he was able to move faster with better results. Although these comments refer to his introductory course, I sometimes use Python for these exact same reasons in advanced graduate level computer science courses at the University of Chicago. In these courses, I am constantly faced with the daunting task of covering a lot of difficult course material in a blistering nine week quarter. Although it is certainly possible for me to inflict a lot of pain and suffering by using a language like C++, I have often found this approach to be counterproductive—especially when the course is about a topic unrelated to just programming. I find that using Python allows me to better focus on the actual topic at hand while allowing students to complete substantial class projects.  Although Python is still a young and evolving language, I believe that it has a bright future in education. This book is an important step in that direction. David Beazley University of Chicago Author of the Python Essential Reference  "
},
{
  "id": "front-back-matter_preface",
  "level": "1",
  "url": "front-back-matter_preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface   Today, it is hard to imagine life without computers. We carry them in our pockets, read with them on the couch, and use them on our desk at work. Computing is the Swiss Army knife of the 21st century: a convenient tool that can be used to solve a wide array of problems. The original computers were large and limited in function: nothing more than very basic calculators. The military was the first to find some of the many applications of this technology: made small, computers could be used to improve the precision of bombing; made large and (relatively) powerful, they could be used to break military codes. As computers continued to grow in power and drop in price, many more peaceful applications were found:     Scientists in both natural and social sciences can use them to analyze vast quantities of data. For example, astronomers are able to identify distant stars in large images of the sky and sociologists are able to analyze the behavior of all the citizens of a country.    Artists and students of literature can use them to analyze great works, to find patterns in them that the human eye or ear had missed and use them to algorithmically generate some new works (examples from literature[ 1 , 2 ] and music ).    Business people can use them to instantaneously keep track of the health of their business across the globe and analyze past behaviors to better prepare for the future.    Doctors and medical researchers can use them to track the effect of new medicines across vast populations of patients.    Software engineers can use them to create apps and websites that attract billions of users.     Today, the amount of computing power and the volume of data available to us is staggering. The field of machine learning is just beginning to harness this power and data and is transforming the field of computer science. At one level, machine learning, allows programs to do for themselves what programmers have had to do for years, which is to recognize complex patterns in the data. Machine learning algorithms are now routinely doing better than humans in tasks like reading X-rays, or recommending a restaurant to try.  This course is about exploring the use of computer programs to solve these kinds of problems, whatever your area of interest and major might be.  To do so, this book will teach you how to understand and create computer programs in Python. Python is a programming language that is in wide use both for professional software development and in education. In the professional world, it is used for anything from creating small scripts that rename files in a folder, to developing full web applications such as YouTube, SnapChat and DropBox. In the world of education, Python is a popular language because of its relatively simple syntax, its robust set of built-in functionality and its beginner-friendly error messages. For all these reasons and more, Python has become widespread in the world of data science and machine learning as well; in fact, it is the principal language of TensorFlow , Google's open-source machine learning library.  At the beginning of each chapter, we will outline for you the learning goals and objectives that should be accomplished once you have gone through the chapter. And, throughout the textbook, you will find projects that connect what you have learned to solving real world problems.  Understanding computer programs requires orderly, logical, mechanistic thinking. Programs are just sequences of actions to perform; when executed, they transform input data into output data:     numbers turn into other numbers (e.g. basic math operations like sin or log)    images turn into words or numbers (e.g. a cell phone photo of a diseased-looking leaf of a plant becomes the name of the disease affecting the plant or the number of whiteflies infesting it)    images turn into other images (e.g. filters in Instagram)    words turn into tables (e.g. reporting the number of times each character speaks in Shakespeare's works)    numbers turn into 3D models of great works of art (e.g. Stanford's Michelangelo project )       Get in the Learning Zone  Programs execute very reliably, and very quickly, but not creatively. Computers do what you tell them to do, not what you mean for them to do. Thus, understanding computer code involves a lot of mental simulation of what will actually happen, not what you wish would happen. This can be frustrating at times but it's something that you will get better at with practice. As you go through the activities in this class, some will be easy for you to complete, i.e. in your comfort zone. Being in your comfort zone is nice but it probably means you are not learning very much. More challenging activities will encourage you to think through the problems and to refer back to the reading to allow you to enter your learning zone. This is the zone that you strive to be in for as much of the course as possible. Beyond your learning zone lies the panic zone where the problem overwhelms your ability to grow and learn. If you find yourself in the panic zone, please seek help from your instructor and\/or classmates: none of the activities in this book are intended to stump you. As you understand how to solve some simpler problems, you will develop the ability to join these solutions together to solve increasingly challenging problems with real-world applications.   In addition to mechanistic thinking, writing computer programs requires creative problem solving or the ability to identify a complex situation, think creatively about possible solutions, and express those solutions clearly and accurately. As it turns out, the process of learning to program is an excellent opportunity to practice problem solving skills you can use in other parts of your life. We sincerely believe that the combination of knowledge of Python, creative problem solving skills and expressing those solutions in such a way that a computer can effectively carry them out (computational thinking) will make you more productive and efficient in tackling your work in future classes,whether in Computer Science, Business, Psychology or History. And it may even pique your interest in becoming a Data Scientist or a Computer Scientist.   "
},
{
  "id": "front-back-matter_contributor-list",
  "level": "1",
  "url": "front-back-matter_contributor-list.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements  To paraphrase the philosophy of the Free Software Foundation, this book is free like free speech, but not necessarily free like free pizza. It came about because of a collaboration that would not have been possible without the GNU Free Documentation License. So we would like to thank the Free Software Foundation for developing this license and, of course, making it available to us.  We would also like to thank the more than 100 sharp-eyed and thoughtful readers who have sent us suggestions and corrections over the past few years. In the spirit of free software, we decided to express our gratitude in the form of a contributor list. Unfortunately, this list is not complete, but we are doing our best to keep it up to date. It was also getting too large to include everyone who sends in a typo or two. You have our gratitude, and you have the personal satisfaction of making a book you found useful better for you and everyone else who uses it. New additions to the list for the 2nd edition will be those who have made on-going contributions.  If you have a chance to look through the list, you should realize that each person here has spared you and all subsequent readers from the confusion of a technical error or a less-than-transparent explanation, just by sending us a note.  Impossible as it may seem after so many corrections, there may still be errors in this book. If you should stumble across one, we hope you will take a minute to report the problem on our issue tracker.   Functions First Edition     Conversion from RST to PreTeXt and the majority of chapter reordering and associated exercise modification was completed by Matthew Hrehirchuk. Matthew also wrote the \"Additional Resources\" chapter and designed many exercises.    Eric Chalmers, Charlotte Curtis, and Patrick Perri did the final edits and are responsible for the ongoing maintenance of the book.       Second Edition     An email from Mike MacHenry set me straight on tail recursion. He not only pointed out an error in the presentation, but suggested how to correct it.    It wasn't until 5th Grade student Owen Davies came to me in a Saturday morning Python enrichment class and said he wanted to write the card game, Gin Rummy, in Python that I finally knew what I wanted to use as the case study for the object oriented programming chapters.    A special thanks to pioneering students in Jeff's Python Programming class at GCTAA during the 2009-2010 school year: Safath Ahmed, Howard Batiste, Louis Elkner-Alfaro, and Rachel Hancock. Your continual and thoughtfull feedback led to changes in most of the chapters of the book. You set the standard for the active and engaged learners that will help make the new Governor's Academy what it is to become. Thanks to you this is truly a student tested text.    Thanks in a similar vein to the students in Jeff's Computer Science class at the HB-Woodlawn program during the 2007-2008 school year: James Crowley, Joshua Eddy, Eric Larson, Brian McGrail, and Iliana Vazuka.    Ammar Nabulsi sent in numerous corrections from Chapters 1 and 2.    Aldric Giacomoni pointed out an error in our definition of the Fibonacci sequence in Chapter 5.    Roger Sperberg sent in several spelling corrections and pointed out a twisted piece of logic in Chapter 3.    Adele Goldberg sat down with Jeff at PyCon 2007 and gave him a list of suggestions and corrections from throughout the book.    Ben Bruno sent in corrections for chapters 4, 5, 6, and 7.    Carl LaCombe pointed out that we incorrectly used the term commutative in chapter 6 where symmetric was the correct term.    Alessandro Montanile sent in corrections for errors in the code examples and text in chapters 3, 12, 15, 17, 18, 19, and 20.    Emanuele Rusconi found errors in chapters 4, 8, and 15.    Michael Vogt reported an indentation error in an example in chapter 6, and sent in a suggestion for improving the clarity of the shell vs. script section in chapter 1.       First Edition     Lloyd Hugh Allen sent in a correction to Section 8.4.    Yvon Boulianne sent in a correction of a semantic error in Chapter 5.    Fred Bremmer submitted a correction in Section 2.1.    Jonah Cohen wrote the Perl scripts to convert the LaTeX source for this book into beautiful HTML.    Michael Conlon sent in a grammar correction in Chapter 2 and an improvement in style in Chapter 1, and he initiated discussion on the technical aspects of interpreters.    Benoit Girard sent in a correction to a humorous mistake in Section 5.6.    Courtney Gleason and Katherine Smith wrote horsebet.py , which was used as a case study in an earlier version of the book. Their program can now be found on the website.    Lee Harr submitted more corrections than we have room to list here, and indeed he should be listed as one of the principal editors of the text.    James Kaylin is a student using the text. He has submitted numerous corrections.    David Kershaw fixed the broken catTwice function in Section 3.10.    Eddie Lam has sent in numerous corrections to Chapters 1, 2, and 3. He also fixed the Makefile so that it creates an index the first time it is run and helped us set up a versioning scheme.    Man-Yong Lee sent in a correction to the example code in Section 2.4.    David Mayo pointed out that the word unconsciously in Chapter 1 needed to be changed to subconsciously .    Chris McAloon sent in several corrections to Sections 3.9 and 3.10.    Matthew J. Moelter has been a long-time contributor who sent in numerous corrections and suggestions to the book.    Simon Dicon Montford reported a missing function definition and several typos in Chapter 3. He also found errors in the increment function in Chapter 13.    John Ouzts corrected the definition of return value in Chapter 3.    Kevin Parks sent in valuable comments and suggestions as to how to improve the distribution of the book.    David Pool sent in a typo in the glossary of Chapter 1, as well as kind words of encouragement.    Michael Schmitt sent in a correction to the chapter on files and exceptions.    Robin Shaw pointed out an error in Section 13.1, where the printTime function was used in an example without being defined.    Paul Sleigh found an error in Chapter 7 and a bug in Jonah Cohen's Perl script that generates HTML from LaTeX.    Craig T. Snydal is testing the text in a course at Drew University. He has contributed several valuable suggestions and corrections.    Ian Thomas and his students are using the text in a programming course. They are the first ones to test the chapters in the latter half of the book, and they have make numerous corrections and suggestions.    Keith Verheyden sent in a correction in Chapter 3.    Peter Winstanley let us know about a longstanding error in our Latin in Chapter 3.    Chris Wrobel made corrections to the code in the chapter on file I\/O and exceptions.    Moshe Zadka has made invaluable contributions to this project. In addition to writing the first draft of the chapter on Dictionaries, he provided continual guidance in the early stages of the book.    Christoph Zwerschke sent several corrections and pedagogic suggestions, and explained the difference between gleich and selbe .    James Mayer sent us a whole slew of spelling and typographical errors, including two in the contributor list.    Hayden McAfee caught a potentially confusing inconsistency between two examples.    Angel Arnal is part of an international team of translators working on the Spanish version of the text. He has also found several errors in the English version.    Tauhidul Hoque and Lex Berezhny created the illustrations in Chapter 1 and improved many of the other illustrations.    Dr. Michele Alzetta caught an error in Chapter 8 and sent some interesting pedagogic comments and suggestions about Fibonacci and Old Maid.    Andy Mitchell caught a typo in Chapter 1 and a broken example in Chapter 2.    Kalin Harvey suggested a clarification in Chapter 7 and caught some typos.    Christopher P. Smith caught several typos and is helping us prepare to update the book for Python 2.2.    David Hutchins caught a typo in the Foreword.    Gregor Lingl is teaching Python at a high school in Vienna, Austria. He is working on a German translation of the book, and he caught a couple of bad errors in Chapter 5.    Julie Peters caught a typo in the Preface.      "
},
{
  "id": "general-intro_introduction-the-way-of-the-program",
  "level": "1",
  "url": "general-intro_introduction-the-way-of-the-program.html",
  "type": "Section",
  "number": "1.1",
  "title": "The Way of the Program",
  "body": " The Way of the Program  The goal of this book is to teach you to understand and create computer programs in Python. At the beginning of each chapter, we will outline for you the learning goals and objectives that should be accomplished once you have gone through the chapter.  Understanding computer programs requires a very step-by-step approach where each step is very specifically expressed. When executed (run), programs are the sequences of actions performed that transform input data into output data. They execute very reliably, and very fast, but not creatively. Computers do what you tell them to do, not what you mean for them to do. Thus, understanding computer code involves a lot of mental simulation of what will actually happen , not what you wish would happen.  The tools we use to write computer programs can feel quite mechanistic - precise, specific, and linear, but the process of programming requires creative problem solving. Problem solving involves the ability to understand and analyze problems, to think creatively about solutions, and to express a solution clearly and accurately. As it turns out, the process of learning to program is an excellent opportunity to practice your problem solving skills.   Learning Goals  This chapter will:     Introduce terminology used to describe how solutions are expressed.    Introduce the Python programming language and how it is executed in this book.    Distinguish between formal & natural languages.    Demonstrate a simple program.    Introduce the use of comments to express a program's algorithm.       Objectives  Readers should be able to:     Use the Activecode and CodeLens components to explore and understand code.    Answer the Checkpoint questions successfully.    Express how an algorithm is related to a program.    Define, and express the basic components of, a program.      "
},
{
  "id": "general-intro_algorithms",
  "level": "1",
  "url": "general-intro_algorithms.html",
  "type": "Section",
  "number": "1.2",
  "title": "Algorithms",
  "body": " Algorithms  If problem solving is a central part of computer science, then the solutions that you create through the problem solving process are also important. In computer science, we refer to these solutions as algorithms . An algorithm is a step by step list of instructions that if followed exactly will solve the problem under consideration.  For example, an algorithm to compute the length of a triangle's hypotenuse might look like this:   Algorithm Example 1 (English)     Ask for the lengths of the two sides    Use Pythagorean Theorem to find hypotenuse    Display the hypotenuse      Notice that this algorithm consists of a set of steps. It is written in English, for ease of understanding but that it assumes the reader knows the required sub-steps. Although simple algorithms are easily understood when written in English, more complicated algorithms need more precise notation. For improved precision, algorithms are often written in pseudocode. Pseudocode is a notation that is more precise than English but generally not as precise as a programming language. The same algorithm expressed in pseudocode might look something like this:   Algorithm Example 2 (Pseudocode)     Ask for length of non-hypotenuse sides:    Ask for first side's length. Call this side     Ask for second side's length. Call this side       Let    Display hypotenuse length      Notice how the pseudocode example is more structured - using numbered steps and a hierarchy of sub-steps as needed; and how it uses variables and a formula to express the mathematics more precisely.  Our goal in computer science is to take a problem and develop an algorithm that can serve as a general solution : a solution that can work in (most) circumstances. Once we have such a solution, we can use our computer to automate its execution. Programming is a skill that allows a computer scientist to take an algorithm and represent it in a notation (a program) that can be followed by a computer. A program is written in a programming language such as Python, the language you will learn in this book.  To help you understand the differences amongst an algorithm, psuedocode and a program, consider this program that finds the hypothenuse of a right-angled triangle:   side_a = int(input(\"Enter the length of the first side:\")) side_b = int(input(\"Enter the length of the second side:\")) hypotenuse = (side_a**2 + side_b**2)**(1\/2) print(\"The hypotenuse of that triangle is:\", hypotenuse)   A program is an algorithm expressed in a programming language. We might also say that a program is an implementation of an algorithm. In this example, both the algorithm and the program have three major steps. The first step gets some input from the user and the input into something the computer can do math with; the second step performs a calculation using the information obtained in the first step; and the final step displays the result to the user. Even though we haven't covered any details of Python, hopefully you can see the correspondence between the steps of the algorithm, which could be followed by a human (but not executed by a computer), and the steps of the program, which can be executed by a computer (try executing this one using the Run button).  Algorithms are important because the process of solving a problem through programming begins with designing an algorithm. The programmer often expresses the algorithm in pseudocode to better understand the sub-steps, then converts the algorithm to a program for the computer to execute. In the next section, you will learn how to execute Python programs on a computer.   Check your understanding    An algorithm is:     A solution to a problem that can be solved by a computer.    While it is true that algorithms often do solve problems, this is not the best answer. An algorithm is more than just the solution to the problem for a computer. An algorithm can be used to solve all sorts of problems, including those that have nothing to do with computers.      A step by step sequence of instructions that if followed exactly will solve the problem under consideration.    Algorithms are like recipes: they must be followed exactly, they must be clear and unambiguous, and they must end.      A series of instructions implemented in a programming language.    Programming languages are used to express algorithms, but an algorithm does not have to be expressed in terms of a programming language.      A special kind of notation used by programmers.    Programmers sometimes use a special notation to illustrate or document an algorithm, but this is not the definition of an algorithm.     "
},
{
  "id": "p-116",
  "level": "2",
  "url": "general-intro_algorithms.html#p-116",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algorithms "
},
{
  "id": "note-1",
  "level": "2",
  "url": "general-intro_algorithms.html#note-1",
  "type": "Note",
  "number": "1.2.1",
  "title": "Algorithm Example 1 (English).",
  "body": " Algorithm Example 1 (English)     Ask for the lengths of the two sides    Use Pythagorean Theorem to find hypotenuse    Display the hypotenuse     "
},
{
  "id": "p-122",
  "level": "2",
  "url": "general-intro_algorithms.html#p-122",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pseudocode "
},
{
  "id": "note-2",
  "level": "2",
  "url": "general-intro_algorithms.html#note-2",
  "type": "Note",
  "number": "1.2.2",
  "title": "Algorithm Example 2 (Pseudocode).",
  "body": " Algorithm Example 2 (Pseudocode)     Ask for length of non-hypotenuse sides:    Ask for first side's length. Call this side     Ask for second side's length. Call this side       Let    Display hypotenuse length     "
},
{
  "id": "p-130",
  "level": "2",
  "url": "general-intro_algorithms.html#p-130",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "programming language "
},
{
  "id": "p-132",
  "level": "2",
  "url": "general-intro_algorithms.html#p-132",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "program "
},
{
  "id": "p-134",
  "level": "2",
  "url": "general-intro_algorithms.html#p-134",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question1_2_1",
  "level": "2",
  "url": "general-intro_algorithms.html#question1_2_1",
  "type": "Checkpoint",
  "number": "1.2.3",
  "title": "",
  "body": " An algorithm is:     A solution to a problem that can be solved by a computer.    While it is true that algorithms often do solve problems, this is not the best answer. An algorithm is more than just the solution to the problem for a computer. An algorithm can be used to solve all sorts of problems, including those that have nothing to do with computers.      A step by step sequence of instructions that if followed exactly will solve the problem under consideration.    Algorithms are like recipes: they must be followed exactly, they must be clear and unambiguous, and they must end.      A series of instructions implemented in a programming language.    Programming languages are used to express algorithms, but an algorithm does not have to be expressed in terms of a programming language.      A special kind of notation used by programmers.    Programmers sometimes use a special notation to illustrate or document an algorithm, but this is not the definition of an algorithm.    "
},
{
  "id": "general-intro_the-python-programming-language",
  "level": "1",
  "url": "general-intro_the-python-programming-language.html",
  "type": "Section",
  "number": "1.3",
  "title": "The Python Programming Language",
  "body": " The Python Programming Language  The programming language you will be learning is Python. Python is an example of a high-level language that is designed to be easily read by humans and where the human does not need to have specific knowledge about the computer hardware. Other high-level languages you might have heard of are C++, PHP, and Java.  As you can infer from the name high-level language, there are also low-level languages , sometimes referred to as machine languages or assembly languages. Loosely speaking, low-level languages use numerical codes or symbols to tell the computer how to process and move data. Generally, computers can only execute programs written in low-level languages. Thus, programs written in a high-level language have to be processed before they can run. This extra processing takes some time, which is a small disadvantage of high-level languages. However, the advantages to high-level languages are enormous.  First, it is much easier to program in a high-level language. Programs are shorter so they take less time to write, and being easier to read, they are easier to correct. Second, high-level languages are portable , meaning that they can run on different kinds of computers with few or no modifications. Low-level programs are based on the hardward for a particular kind of computer system and have to be rewritten to run on another.  Due to these advantages, almost all programs are written in high-level languages. Low-level languages are used for a few specialized applications where, being designed for a specific kind of computer, they can run very fast.  Two kinds of programs process high-level languages into low-level languages: interpreters and compilers . An interpreter reads a high-level program and executes it, meaning that it does what the program says one line at a time. It alternates between reading lines and performing computations.   A compiler reads the program and translates it completely before the program starts running. In this case, the high-level program is called the source code , and the translated program is called the object code or the executable . Once a program is compiled, you can execute it repeatedly without further translation.   Like many modern languages, Python uses both processes. Programs are first compiled into a lower level language, called byte code , and then interpreted by a program called a virtual machine . Because of the way programmers interact with it (often adding individual lines of code and then running their programms), and because of the speed of modern computers, Python is usually considered an interpreted language.  For the core material in this book, you will not need to install or run Python natively on your computer. Instead, you'll be writing simple programs and executing them right in your browser.  However, if you are using this book for a course, you will need a complete Python environment, rather than the limited environment available in this online textbook. To do that, either install Python and an integrated development environment on your computer so that it can run natively, or use a remote server that provides a command line shell or IDE.   Example IDEs (2023)  Downloadable: Visual Studio Code, PyCharm, Jupyter, Thonny  Online servers: Python Tutor , Google Colaboratory    Check your understanding    Source code is another name for:     the instructions in a program, written in a high-level language.    If the instructions are strored in a file, it is called the source code file.      the language that you are programming in (e.g., Python).    This language is simply called the programming language, or simply the language. Programs are writte in this language.      the environment\/tool in which you are programming.    The environment may be called the IDE, or integrated development environment, though not always.      the number (or code ) that you must input at the top of each program to tell the computer how to execute your program.    There is no such number that you must type in at the start of your program.      What is the difference between a high-level programming language and a low-level programming language?     It is high-level if you are standing and low-level if you are sitting.    In this case high and low have nothing to do with altitude.      It is high-level if you are programming for a computer and low-level if you are programming for a phone or mobile device.    High and low have nothing to do with the type of device you are programming for. Instead, look at what it takes to run the program written in the language.      It is high-level if the program must be processed before it can run, and low-level if the computer can execute it without additional processing.    Python is a high level language but must be interpreted into machine code (binary) before it can be executed.      It is high-level if it easy to program in and is very short; it is low-level if it is really hard to program in and the programs are really long.    While it is true that it is generally easier to program in a high-level language and programs written in a high-level language are usually shorter, this is not always the case.      Pick the best replacements for and in the following sentence:  When comparing compilers and interpreters, a compiler is like while an interpreter is like .     1 = pseudocode, 2 = an algorithm    Both compiling and interpreting are processes that convert a program into code that can be understood by a computer. Who is the audience for pseudocode and algorithms? Humans.      1 = translating an entire book, 2 = translating a line at a time    Compilers take the entire source code and produce object code or the executable and interpreters execute the code line by line.      1 = software, 2 = hardware    Both compilers and interpreters are software.      1 = object code, 2 = byte code    Compilers can produce object code or byte code depending on the language. An interpreter produces neither.     "
},
{
  "id": "p-144",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#p-144",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "high-level language "
},
{
  "id": "p-145",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#p-145",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "low-level languages "
},
{
  "id": "p-146",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#p-146",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "portable "
},
{
  "id": "p-148",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#p-148",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interpreters compilers "
},
{
  "id": "p-149",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#p-149",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "source code object code executable "
},
{
  "id": "p-150",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#p-150",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "byte code virtual machine "
},
{
  "id": "p-152",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#p-152",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrated development environment "
},
{
  "id": "note-3",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#note-3",
  "type": "Note",
  "number": "1.3.1",
  "title": "Example IDEs (2023).",
  "body": " Example IDEs (2023)  Downloadable: Visual Studio Code, PyCharm, Jupyter, Thonny  Online servers: Python Tutor , Google Colaboratory  "
},
{
  "id": "p-155",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#p-155",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question1_3_1",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#question1_3_1",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": " Source code is another name for:     the instructions in a program, written in a high-level language.    If the instructions are strored in a file, it is called the source code file.      the language that you are programming in (e.g., Python).    This language is simply called the programming language, or simply the language. Programs are writte in this language.      the environment\/tool in which you are programming.    The environment may be called the IDE, or integrated development environment, though not always.      the number (or code ) that you must input at the top of each program to tell the computer how to execute your program.    There is no such number that you must type in at the start of your program.    "
},
{
  "id": "question1_3_2",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#question1_3_2",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "",
  "body": " What is the difference between a high-level programming language and a low-level programming language?     It is high-level if you are standing and low-level if you are sitting.    In this case high and low have nothing to do with altitude.      It is high-level if you are programming for a computer and low-level if you are programming for a phone or mobile device.    High and low have nothing to do with the type of device you are programming for. Instead, look at what it takes to run the program written in the language.      It is high-level if the program must be processed before it can run, and low-level if the computer can execute it without additional processing.    Python is a high level language but must be interpreted into machine code (binary) before it can be executed.      It is high-level if it easy to program in and is very short; it is low-level if it is really hard to program in and the programs are really long.    While it is true that it is generally easier to program in a high-level language and programs written in a high-level language are usually shorter, this is not always the case.    "
},
{
  "id": "question1_3_3",
  "level": "2",
  "url": "general-intro_the-python-programming-language.html#question1_3_3",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "",
  "body": " Pick the best replacements for and in the following sentence:  When comparing compilers and interpreters, a compiler is like while an interpreter is like .     1 = pseudocode, 2 = an algorithm    Both compiling and interpreting are processes that convert a program into code that can be understood by a computer. Who is the audience for pseudocode and algorithms? Humans.      1 = translating an entire book, 2 = translating a line at a time    Compilers take the entire source code and produce object code or the executable and interpreters execute the code line by line.      1 = software, 2 = hardware    Both compilers and interpreters are software.      1 = object code, 2 = byte code    Compilers can produce object code or byte code depending on the language. An interpreter produces neither.    "
},
{
  "id": "general-intro_special-ways-to-execute-python-in-this-book",
  "level": "1",
  "url": "general-intro_special-ways-to-execute-python-in-this-book.html",
  "type": "Section",
  "number": "1.4",
  "title": "Special Ways to Execute Python in this Book",
  "body": " Special Ways to Execute Python in this Book  This book provides two additional ways to execute Python programs. Both techniques are designed to assist you as you learn the Python programming language. They will help you increase your understanding of how Python programs work.  First, you can write, modify, and execute programs using a unique ActiveCode interpreter that allows you to execute Python code right in the text itself (right from the web browser). Although this is certainly not the way real programs are written, it provides an excellent environment for learning a programming language like Python since you can experiment with the language as you are reading.  Take a look at the ActiveCode interpreter in action. Try pressing the Save & Run button below. (If you are not logged in, it will just say Run .)   print(\"My first program adds two numbers, 2 and 3:\") print(2 + 3)   Now try modifying the program shown above. First, modify the text in the first line by changing the word adds to the word multiplies . Now press Save & Run again. You can see that the result of the program has changed. However, it still prints 5 as the answer. Modify the second print statement by changing the addition symbol, + , to the multiplication symbol, * . Press Save & Run again to see the new results.  As the name suggests, Save & Run also saves your latest version of the code, and you can recover it even in later sessions when logged in . If not logged in, Run saves versions only until your browser leaves the current web page , and then you lose all modifications.  If you are logged in, when a page first loads, each ActiveCode window will have a Load History button, to the right of the Save & Run button. If you click on it, or if you run any code, that button turns into a slider. If you click on the slider location box, you can use your left and right arrow buttons to switch to other versions you ran. Alternately you can drag the box on the slider. Now move the slider to see a previously saved version of your code. You can edit or run any version.  In addition to ActiveCode, you can also execute Python code with the assistance of a unique visualization tool. This tool, known as CodeLens , allows you to control the step by step execution of a program. It also lets you see the values of all variables as they are created and modified. In ActiveCode, the source code executes from beginning to end and you can see the final result. In CodeLens you can see and control the step by step progress. Note that the red arrow always points to the next line of code that is going to be executed. The light green arrow points to the line that was just executed. Click on the Show in CodeLens button to make the CodeLens window show up, and then click on the Forward button a few times to step through the execution.  Sometimes, we will present code examples explicitly in a CodeLens window in the textbook, as below. When we do, think of it as an encouragement to use the CodeLens features to step through the execution of the program.   print(\"My first program adds two numbers, 2 and 3:\") print(2 + 3)    Check your understanding    The activecode interpreter allows you to (select all that apply):     save programs and reload saved programs.    You can (and should) save the contents of the activecode window.      type in Python source code.    You are not limited to running the examples that are already there. Try adding to them and creating your own.      execute Python code right in the text itself within the web browser.    The ActiveCode interpreter will allow you type Python code into the textbox and then you can see it execute as the interpreter interprets and executes the source code.      receive a yes\/no answer about whether your code is correct or not.    Although you can (and should) verify that your code is correct by examining its output, ActiveCode will not directly tell you whether you have correctly implemented your program.      CodeLens allows you to (select all that apply):     measure the speed of a program's execution.    In fact, CodeLens steps through each line one by one as you click, which is MUCH slower than the Python interpreter.      control the step by step execution of a program.    By using CodeLens, you can control the execution of a program step by step. You can even go backwards!      write and execute your own Python code.    CodeLens works only for the pre-programmed examples.      execute the Python code that is in CodeLens.    By stepping forward through the Python code in CodeLens, you are executing the Python program.     "
},
{
  "id": "p-185",
  "level": "2",
  "url": "general-intro_special-ways-to-execute-python-in-this-book.html#p-185",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ActiveCode "
},
{
  "id": "p-190",
  "level": "2",
  "url": "general-intro_special-ways-to-execute-python-in-this-book.html#p-190",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "CodeLens "
},
{
  "id": "p-192",
  "level": "2",
  "url": "general-intro_special-ways-to-execute-python-in-this-book.html#p-192",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question1_4_1",
  "level": "2",
  "url": "general-intro_special-ways-to-execute-python-in-this-book.html#question1_4_1",
  "type": "Checkpoint",
  "number": "1.4.1",
  "title": "",
  "body": " The activecode interpreter allows you to (select all that apply):     save programs and reload saved programs.    You can (and should) save the contents of the activecode window.      type in Python source code.    You are not limited to running the examples that are already there. Try adding to them and creating your own.      execute Python code right in the text itself within the web browser.    The ActiveCode interpreter will allow you type Python code into the textbox and then you can see it execute as the interpreter interprets and executes the source code.      receive a yes\/no answer about whether your code is correct or not.    Although you can (and should) verify that your code is correct by examining its output, ActiveCode will not directly tell you whether you have correctly implemented your program.    "
},
{
  "id": "question1_4_2",
  "level": "2",
  "url": "general-intro_special-ways-to-execute-python-in-this-book.html#question1_4_2",
  "type": "Checkpoint",
  "number": "1.4.2",
  "title": "",
  "body": " CodeLens allows you to (select all that apply):     measure the speed of a program's execution.    In fact, CodeLens steps through each line one by one as you click, which is MUCH slower than the Python interpreter.      control the step by step execution of a program.    By using CodeLens, you can control the execution of a program step by step. You can even go backwards!      write and execute your own Python code.    CodeLens works only for the pre-programmed examples.      execute the Python code that is in CodeLens.    By stepping forward through the Python code in CodeLens, you are executing the Python program.    "
},
{
  "id": "general-intro_more-about-programs",
  "level": "1",
  "url": "general-intro_more-about-programs.html",
  "type": "Section",
  "number": "1.5",
  "title": "More About Programs",
  "body": " More About Programs  A program is a sequence of instructions that specifies how to perform a computation. The computation might be something as complex as rendering an html page in a web browser or encoding a video and streaming it across the network. It can also be a symbolic computation, such as searching for and replacing text in a document or (strangely enough) a program that is designed to compile another program.  The details look different in different languages, but a few basic instructions appear in just about every language.    input  Get data from the keyboard, a file, or some other device.    output  Display data on the screen or send data to a file or other device.     expression (processing)  Perform basic mathematical operations like addition and multiplication; and logical operations like and , or , and not .    conditional execution  Check to see which instructions should be executed.    repetition (or interation)  Perform some action repeatedly, usually with some variation.    Believe it or not, that's pretty much all there is to it. Every program you've ever used, no matter how complicated, is made up of instructions that look more or less like these. Thus, we can describe programming as the process of breaking a large, complex task into smaller and smaller subtasks until the subtasks are simple enough to be performed with sequences of these basic instructions.   Check your understanding    A program is:     a sequence of instructions that specifies how to perform a computation.    It is just step-by-step instructions that the computer can understand and execute. Programs often implement algorithms, but note that algorithms are typically less precise than programs and do not have to be written in a programming language.      something you follow along at a play or concert.    True, but not in this context. We mean a program as related to a computer.      a computation, even a symbolic computation.    A program can perform a computation, but by itself it is not one.      the same thing as an algorithm.    Programs often implement algorithms, but they are not the same thing. An algorithm is a step by step list of instructions, but those instructions are not necessarily precise enough for a computer to follow. A program must be written in a programming language that the computer knows how to interpret.      "
},
{
  "id": "p-211",
  "level": "2",
  "url": "general-intro_more-about-programs.html#p-211",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "program "
},
{
  "id": "p-219",
  "level": "2",
  "url": "general-intro_more-about-programs.html#p-219",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question1_5_1",
  "level": "2",
  "url": "general-intro_more-about-programs.html#question1_5_1",
  "type": "Checkpoint",
  "number": "1.5.1",
  "title": "",
  "body": " A program is:     a sequence of instructions that specifies how to perform a computation.    It is just step-by-step instructions that the computer can understand and execute. Programs often implement algorithms, but note that algorithms are typically less precise than programs and do not have to be written in a programming language.      something you follow along at a play or concert.    True, but not in this context. We mean a program as related to a computer.      a computation, even a symbolic computation.    A program can perform a computation, but by itself it is not one.      the same thing as an algorithm.    Programs often implement algorithms, but they are not the same thing. An algorithm is a step by step list of instructions, but those instructions are not necessarily precise enough for a computer to follow. A program must be written in a programming language that the computer knows how to interpret.    "
},
{
  "id": "general-intro_formal-and-natural-languages",
  "level": "1",
  "url": "general-intro_formal-and-natural-languages.html",
  "type": "Section",
  "number": "1.6",
  "title": "Formal and Natural Languages",
  "body": " Formal and Natural Languages  Natural languages are the languages that people speak, such as English, Spanish, Korean, and Mandarin Chinese. They were not purposely designed by people (although people have tried to impose some order on them); they evolved naturally.  Formal languages are languages that are designed by people for specific applications. For example, the notation that mathematicians use is a formal language that is particularly good at denoting relationships among numbers and symbols. Chemists use a formal language to represent the chemical structure of molecules. And most importantly:    Programming languages are formal languages that have been designed to express computations.    Formal languages tend to have strict rules about syntax. For example, 3 + 3 = 6 is a syntactically correct mathematical statement, but 3 = + 6 $ is not. H₂O is a syntactically correct chemical name, but ₂Zz is not.  Syntax rules come in two flavors, pertaining to tokens and structure . Tokens are the basic elements of the language, such as words, numbers, and symbols. One of the problems with 3 = + 6 $ is that the symbol $ is not a legal token in mathematics (at least as far as we know). Similarly, ₂Zz is not legal in chemistry because there is no element with the abbreviation Zz .  When you read a word in English, you have to make sure the tokens are correct and appropriate. Humans are quite good at figuring out the tokens despite their many variations as seen by our ability to read various fonts, bumper stickers, and Internet spellings (e.g.: α, ∀, and a are all recognizable as the letter a; the text 'e5c4p3' can be read as 'escape').  The second type of syntax rule pertains to the structure of a statement— that is, the way the tokens are arranged. The statement 3 = + 6 $ is structurally illegal because you can't place a plus sign immediately after an equal sign. Similarly, molecular formulas have to have subscripts after the element name, not before.  When you read a sentence in English or a statement in a formal language, you have to figure out what the structure of the sentence is (although in a natural language you do this subconsciously). This process is called parsing . For example, when you hear the sentence, The other shoe fell , you understand that the other shoe is the subject and fell is the verb. Once you have parsed a sentence, you can figure out what it means — the semantics of the sentence. Assuming that you know what a shoe is and what it means to fall, you will understand the general implication of this sentence.  People who grow up speaking a natural language—that is, everyone—often have a hard time adjusting to formal languages like computer programing languages. Although formal and natural languages have many features in common — tokens, structure, syntax, and semantics — there are many differences:    ambiguity  Natural languages are full of ambiguity, which people deal with by using contextual clues and other information.  Formal languages are designed to be nearly or completely unambiguous, which means that any statement has exactly one meaning, regardless of context.  For example, in a natural language, someone may be 'tall' for their age. However in a a formal language like Python, tall = True has one meaning.    literalness  Formal languages mean exactly what they say; in Python we code height = 192.6 . On the other hand, natural languages are full of idiom and metaphor. If someone says, How's the weather up there? we can assume they are implying the other person is so tall that they must experience a different weather at their head's elevation.    Here are some suggestions for reading programs (and other formal languages):    Remember that formal languages are much more dense than natural languages. It takes longer to read them and little inconsistencies in spelling and punctuation, which you can get away with in natural languages, will make a big difference in a formal language. Practice paying extra attention to all the tokens.     Recognize that structure is very important, and is usually quite consistent, in formal languages. Always start reading a formal language from top to bottom but make note of indentations (it really matters) and other ways the program's flow will be modified. Recognize that some instructions will be executed but not others (conditional execution) or that some actions will happen more than once (repetition). Learn to to identify these kinds of structures, the algorithm's parts and the program's overall flow. Learn to see, identify, and use common programming structures.     It bears repeating, computers will do only what you tell them to do and nothing more. They do not 'understand' your intentions. In later chapters we will discuss how to make 'self-documenting' code that makes your programing intentions plainer to others reading your code, but always be ready to parse the program to understand what the code is actually doing and not what you assume it ought to do.      Check your understanding    The differences between natural and formal languages include:     natural languages can be parsed while formal languages cannot.    Actually both languages can be parsed (determining the structure of the sentence), but formal languages can be parsed more easily in software.      ambiguity and literalness.    Both of these can be present in natural languages, but cannot exist in formal languages.      there are no differences between natural and formal languages.    There are several differences between the two but they are also similar.      tokens, structure, syntax, and semantics.    These are the similarities between the two.      True or False: Reading a program is like reading other kinds of text.     True    It usually takes longer to read a program because the structure is as important as the content and must be interpreted in smaller pieces for understanding.      False    It usually takes longer to read a program because the structure is as important as the content and must be interpreted in smaller pieces for understanding.     "
},
{
  "id": "p-229",
  "level": "2",
  "url": "general-intro_formal-and-natural-languages.html#p-229",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Natural languages "
},
{
  "id": "p-230",
  "level": "2",
  "url": "general-intro_formal-and-natural-languages.html#p-230",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Formal languages "
},
{
  "id": "p-233",
  "level": "2",
  "url": "general-intro_formal-and-natural-languages.html#p-233",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tokens structure "
},
{
  "id": "p-235",
  "level": "2",
  "url": "general-intro_formal-and-natural-languages.html#p-235",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "structure "
},
{
  "id": "p-236",
  "level": "2",
  "url": "general-intro_formal-and-natural-languages.html#p-236",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parsing semantics "
},
{
  "id": "p-246",
  "level": "2",
  "url": "general-intro_formal-and-natural-languages.html#p-246",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question1_6_1",
  "level": "2",
  "url": "general-intro_formal-and-natural-languages.html#question1_6_1",
  "type": "Checkpoint",
  "number": "1.6.1",
  "title": "",
  "body": " The differences between natural and formal languages include:     natural languages can be parsed while formal languages cannot.    Actually both languages can be parsed (determining the structure of the sentence), but formal languages can be parsed more easily in software.      ambiguity and literalness.    Both of these can be present in natural languages, but cannot exist in formal languages.      there are no differences between natural and formal languages.    There are several differences between the two but they are also similar.      tokens, structure, syntax, and semantics.    These are the similarities between the two.    "
},
{
  "id": "question1_6_2",
  "level": "2",
  "url": "general-intro_formal-and-natural-languages.html#question1_6_2",
  "type": "Checkpoint",
  "number": "1.6.2",
  "title": "",
  "body": " True or False: Reading a program is like reading other kinds of text.     True    It usually takes longer to read a program because the structure is as important as the content and must be interpreted in smaller pieces for understanding.      False    It usually takes longer to read a program because the structure is as important as the content and must be interpreted in smaller pieces for understanding.    "
},
{
  "id": "general-intro_a-typical-first-program",
  "level": "1",
  "url": "general-intro_a-typical-first-program.html",
  "type": "Section",
  "number": "1.7",
  "title": "A Typical First Program",
  "body": " A Typical First Program  Traditionally, the first program written in a new language is called Hello, World! because all it does is display the words, Hello, World! In Python, the source code looks like this.   print(\"Hello, World!\")   This is an example of using the print function , which doesn't actually print anything on paper. It displays a value on the screen. The term is left over from the days when it was more common to output the result of our computer programs to paper rather than to the screen. In this case, the result is the phrase:  Hello, World!  Here is the example in an ActiveCode window, where you can run it and modify it.   print(\"Hello, World!\")   The quotation marks in the program mark the beginning and end of the value. They don't appear in the result. You'll learn more about why in the next chapter.  Some people judge the quality of a programming language by the simplicity of the Hello, World! program. By this standard, Python does about as well as possible.   Check your understanding    The print function:     sends information to the printer to be printed on paper.    Within the Python programming language, the print statement has nothing to do with the printer.      displays a value on the screen.    Yes, the print statement is used to display the value of the thing being printed.      tells the computer to put the information in print, rather than cursive, format.    The format of the information is called its font and has nothing to do with the print statement.      tells the computer to speak the information.    That would be nice! But no...     "
},
{
  "id": "p-262",
  "level": "2",
  "url": "general-intro_a-typical-first-program.html#p-262",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "print function "
},
{
  "id": "p-266",
  "level": "2",
  "url": "general-intro_a-typical-first-program.html#p-266",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question1_7_1",
  "level": "2",
  "url": "general-intro_a-typical-first-program.html#question1_7_1",
  "type": "Checkpoint",
  "number": "1.7.1",
  "title": "",
  "body": " The print function:     sends information to the printer to be printed on paper.    Within the Python programming language, the print statement has nothing to do with the printer.      displays a value on the screen.    Yes, the print statement is used to display the value of the thing being printed.      tells the computer to put the information in print, rather than cursive, format.    The format of the information is called its font and has nothing to do with the print statement.      tells the computer to speak the information.    That would be nice! But no...    "
},
{
  "id": "general-intro_predict-before-you-run",
  "level": "1",
  "url": "general-intro_predict-before-you-run.html",
  "type": "Section",
  "number": "1.8",
  "title": "Predict Before You Run!",
  "body": " Predict Before You Run!  You've run your first program! You'll be doing that a lot in this book and the programs will become increasingly complicated. One way to help understand what is happening and learn programming is predicting the effect of running a snippet of code before actually running the program. Later on in your development, you may make predictions about large snippets of code, but for now you will typically be predicting the effect of executing a single line of code. A prediction will either be about what gets printed out, or about the value of a variable, or that an error will occur.  A prediction is not a random guess. It is based on some explanation you have about what the current state of variables is and about what you think certain commands in Python do.  "
},
{
  "id": "general-intro_to-understand-a-program-change-it",
  "level": "1",
  "url": "general-intro_to-understand-a-program-change-it.html",
  "type": "Section",
  "number": "1.9",
  "title": "To Understand a Program, Change It!",
  "body": " To Understand a Program, Change It!  To check your understanding or your predictions, always run the program. This seems like an obvious step a programmer would always make, but it is something that novice programmers too often overlook doing.  To check your understanding about the state of variables before your code snippet runs, add diagnostic print statements that print out the types and values of variables. Sometimes referred to as 'echo prints', add these print statements just before and after the code snippet you are trying to understand.   x = 4 y = 7 print(x, type(x), y, type(y)) # echo print y = x + 0.2 ;print(type(y), \"y=\",y) # diagnostic print on same line   If you made a prediction about the output that will be generated when the code snippet runs, then you can just run the program to see if you are right. If, however, you made a prediction about a change that occurs in the value of a variable, add an extra diagnostic print statement right after the line of code that you think should be changing that variable.  The diagnostic print statements are temporary. Once you have verified that a program is doing what you think it's doing, you will remove these extra print statements.  Even if you feel that you have a good grasp on the program though, we advise changing it at least a few times to see if you understand how it behaves in different situations. Sometimes you'll surprise yourself!  When you get any surprises, you will want to revise your understanding or your predictions. If you were wrong about the values or types of variables before the code snippet was run, you may want to revisit your understanding of the previous code. Once you understand how that result came to be, you should make some changes to the program to make sure your new understanding is accurate and what you intend for the algorithm.  "
},
{
  "id": "general-intro_comments",
  "level": "1",
  "url": "general-intro_comments.html",
  "type": "Section",
  "number": "1.10",
  "title": "Comments",
  "body": " Comments  As programs get bigger and more complicated, they get more difficult to read. Formal languages are dense, and it is often difficult to look at a piece of code and figure out what it is doing, or why. For this reason, it is a good idea to add notes to your programs to explain in natural language what the program is doing. These notes are called comments.  A comment in a computer program is text that is intended only for the human reader - it is completely ignored by the interpreter. In Python, the # token starts a comment. The rest of the line is ignored. Here is a new version of Hello, World! .   #--------------------------------------------------- # This demo program shows off how elegant Python is! # Written by Joe Soap, December 2010. # Anyone may freely copy or modify this program. #--------------------------------------------------- print(\"Hello, World!\") # Isn't this easy!   Notice that when you run this program, it still only prints the phrase Hello, World! None of the comments appear. You'll also notice that we've left a blank line in the program. Blank lines are also ignored by the interpreter, but comments and blank lines can make your programs much easier for humans to parse. Use them liberally!  Another way to use comments is to use them to plan your program - by including the natural language or pseudocode version of the algorithm an outline before you start coding. Consider how the code below uses comment to indicate the steps one might use to solve a word problem:   #1 set all known values and constants #2 formulae (coded as functions) ## unit conversions ## governing equations #3 user input ## convert units #4 solving #5 rounding for significant digits #6 solutions statement to display the answer   There is one other way in Python that code is sometimes documented, by enclosing portions of the text within triple-quotes, \"\"\" \"\"\" . This tells Python that the text should be treated as a string instead of as code to interpret. Strictly speaking, triple-quotes are not comments because the interpreter can still access their contents. In a later chapter we will discuss how this is useful when we document portions of our code ( functions ) with ( docstrings ). Some programmers take advantage of triple-quoted code not being executed as part of their debugging process: one can essentially 'turn off' portions of our code without having to delete it, and then turn it 'back on' by removing the enclosing triple-quotes.   Check your understanding    What are comments for?     To tell the computer what you mean in your program.    Comments are ignored by the computer.      For the people who are reading your code to know, in natural language, what the program is doing.    The computer ignores comments. It's for the humans that will consume your program.      Nothing, they are extraneous information that is not needed.    Comments can provide much needed information for anyone reading the program.      Nothing in a short program. They are only needed for really large programs.    Even small programs benefit from comments.     "
},
{
  "id": "p-285",
  "level": "2",
  "url": "general-intro_comments.html#p-285",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "comment "
},
{
  "id": "p-289",
  "level": "2",
  "url": "general-intro_comments.html#p-289",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question1_10_1",
  "level": "2",
  "url": "general-intro_comments.html#question1_10_1",
  "type": "Checkpoint",
  "number": "1.10.1",
  "title": "",
  "body": " What are comments for?     To tell the computer what you mean in your program.    Comments are ignored by the computer.      For the people who are reading your code to know, in natural language, what the program is doing.    The computer ignores comments. It's for the humans that will consume your program.      Nothing, they are extraneous information that is not needed.    Comments can provide much needed information for anyone reading the program.      Nothing in a short program. They are only needed for really large programs.    Even small programs benefit from comments.    "
},
{
  "id": "general-intro_glossary",
  "level": "1",
  "url": "general-intro_glossary.html",
  "type": "Section",
  "number": "1.11",
  "title": "Glossary",
  "body": " Glossary    Activecode  A unique interpreter environment that allows Python to be executed from within a web browser.    algorithm  A step by step list of instructions that if followed exactly will solve the problem under consideration.    assignment  Binding a (variable) name to a specific value.    byte code  An intermediate language between source code and object code. Many modern languages first compile source code into byte code and then interpret the byte code with a program called a virtual machine .    CodeLens  An interactive environment that allows the user to control the step by step execution of a Python program    comment  Information in a program that is meant for other programmers (or anyone reading the source code) and has no effect on the execution of the program.    compile  To translate a program written in a high-level language into a low-level language all at once, in preparation for later execution.    conditional execution  Also known as selections or decisions. The checking to see which steps are appropriate to execute.    execute  The process by which a computer program is read and acted upon. Also sometimes we say 'run'.    formal language  Any one of the languages that people have designed for specific purposes, such as representing mathematical ideas or computer programs; all programming languages are formal languages.    high-level language  A programming language like Python that is designed to be easy for humans to read and write.    input  Getting data from the keyboard, a file, or some other device. Also, = input( ) a built-in Python function that gets data from the user via the keyboard.    integrated development environment (IDE)  A software applications that helps programmers code efficiently by providing tools to develop, edit, and test their programs.    interpret  To execute a program in a high-level language by translating it one line at a time.    low-level language  A programming language that is designed to be easy for a computer to execute; also called machine language or assembly language.    natural language  Any one of the languages that people speak that evolved naturally.    object code  The output of the compiler after it translates the program.    output  Displaying data to the screen, to a file or other device.    parse  To examine a program and analyze the syntactic structure.    portable  A property of a program that can run on more than one kind of computer.    print function  A function used in a program or script that causes the Python interpreter to display a value on its output device.    problem solving  The process of formulating a problem, finding a solution, and expressing the solution.    program  A sequence of instructions that specifies to a computer actions and computations to be performed.    programming language  A vocabulary and set of grammatical rules for instructing a computer or computing device to perform specific tasks.    Python shell  An interactive user interface to the Python interpreter, and the user of a Python shell types commands at the prompt (>>>), and presses the return key to send these commands immediately to the interpreter for processing. To initiate the Python Shell, the user should open theterminal and type python . Once the user presses enter, the Python Shell appears and the user can interact with it.    repetition  Also called iterating. Executing a set of instructions, performing some algorithm steps, more than once.    runtime error  An error that does not occur until the program has started to execute but that prevents the program from continuing.    semantic error  An error in a program that makes it do something other than what the programmer intended.    semantics  The meaning of a program.    shell mode  A mode of using Python where expressions can be typed and executed in the command prompt, and the results are shown immediately in the command terminal window. Shell mode is initiated by opening the terminal of your operating system and typing python . Press enter and the Python Shell will appear. This is in contrast to source code . Also see the entry under Python shell .    source code  The instructions in a program, stored in a file, in a high-level language before being compiled or interpreted.    syntax  The rules that define a programming language.    syntax error  An error in a program that makes it impossible to parse — and therefore impossible to interpret.    token  One of the basic elements of the syntactic structure of a program, analogous to a word in a natural language.    virtual machine  Software that runs programs and apps that does not depend on the computer's physical hardware. This allows those programs and apps to interact with the user in the same way no matter what computer platform (OS, CPU etc.) the user has. Python's virtual machine converts (interprets) the byte code into computer specific machine code.    "
},
{
  "id": "p-328",
  "level": "2",
  "url": "general-intro_glossary.html#p-328",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "source code Python shell "
},
{
  "id": "simple-python-data_introduction",
  "level": "1",
  "url": "simple-python-data_introduction.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction",
  "body": " Introduction  This chapter introduces several basic building blocks of Python programs:     literals, like numbers and character strings    operators, like + and *    function calls, which take values as inputs and compute new values    variables, which save values so they can be used later in the program     These are the basic building blocks that are assembled to create programs that you interact with everyday—from the software running on your smartwatch, to the infrastructure behind the largest websites, and every app running on your phone.   Learning Goals     To understand Python's storage model    To solve problems using the ‘accumulator pattern'    To understand operator precedence    To distinguish between expressions, values, and printed representations    To recogonize & explain hard coding       Objectives     Given some sample code identify variables that reference an object of a particular type    Given a variable of one type convert it to another    Simulate evaluation of an expression and assignment statement    Use reassignment to increment a variable (accumulator pattern)    Get input from a user and convert the input to the appropriate type    Identify the following types of values: strings, integers, floats, functions    Recognize valid vs. invalid variable names    Write an assignment statement    Update a reference diagram after reassignment      "
},
{
  "id": "simple-python-data_values-and-data-types",
  "level": "1",
  "url": "simple-python-data_values-and-data-types.html",
  "type": "Section",
  "number": "2.2",
  "title": "Values and Data Types",
  "body": " Values and Data Types  A value is one of the fundamental things — like a word or a number — that a program manipulates. Some values are 5 (the result when we add 2 + 3 ), and \"Hello, World!\" . These objects are classified into different classes, or data types: 4 is an integer, and Hello, World! is a string, so-called because it contains a string or sequence of letters. You (and the interpreter) can identify strings because they are enclosed in quotation marks.  We can specify values directly in the programs we write. For example we can specify a number as a literal just by (literally) typing it directly into the program (e.g., 5 or 4.32 ). In a program, we specify a word, or more generally a string of characters, by enclosing the characters inside quotation marks (e.g., \"Hello, World!\" ).  During execution of a program, the Python interpreter creates an internal representation of literals that are specified in a program. It can then manipulate them, for example by multiplying two numbers. We call the internal representations objects or just values .  You can't directly see the internal representations of values. You can, however, use the print function to see a printed representation in the output window.  The printed representation of a number uses the familiar decimal representation (reading Roman Numerals is a fun challenge in museums, but thank goodness the Python interpreter doesn't present the number 2014 as MMXIV in the output window). Thus, the printed representation of a number shown in the output window is the same as the literal that you specify in a program.  The printed representation of a character string, however, is not exactly the same as the literal used to specify the string in a program. For the literal in a program, you enclose the string in quotation marks. The printed representation, in the output window, omits the quotation marks.   print(3.2) print(\"Hello, World!\")    Literals appear in programs. The Python interpreter turns literals into values , which have internal representations that people never get to see directly. Outputs are external representations of values that appear in the output window. When we are being careful, we will use the terms this way. Sometimes, however, we will get a little sloppy and refer to literals or external representations as values.   Numbers with a decimal point belong to a class called float , because these numbers are represented in a format called floating-point . At this stage, you can treat the words class and type interchangeably. We'll come back to a deeper understanding of what a class is in later chapters.  You will soon encounter other types of objects as well, such as lists and dictionaries. Each of these has its own special representation for specifying an object as a literal in a program, and for displaying an object when you print it. For example, list contents are enclosed in square brackets [ ] . You will also encounter some more complicated objects that do not have very nice printed representations: printing those won't be very useful.   Check your understanding    What appears in the output window when the following statement executes?   print(\"Hello World!\")      Nothing is printed. It generates a runtime error.    \"Hello World!\" has a printed representation, so there will not be an error.      \"Hello World!\"    The literal in the program includes the quote marks, but the printed representation omits them.      Hello World!    The printed representation omits the quote marks that are included in the string literal.     "
},
{
  "id": "p-359",
  "level": "2",
  "url": "simple-python-data_values-and-data-types.html#p-359",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "value "
},
{
  "id": "p-360",
  "level": "2",
  "url": "simple-python-data_values-and-data-types.html#p-360",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "literal "
},
{
  "id": "p-361",
  "level": "2",
  "url": "simple-python-data_values-and-data-types.html#p-361",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "objects values "
},
{
  "id": "note-4",
  "level": "2",
  "url": "simple-python-data_values-and-data-types.html#note-4",
  "type": "Note",
  "number": "2.2.1",
  "title": "",
  "body": " Literals appear in programs. The Python interpreter turns literals into values , which have internal representations that people never get to see directly. Outputs are external representations of values that appear in the output window. When we are being careful, we will use the terms this way. Sometimes, however, we will get a little sloppy and refer to literals or external representations as values.  "
},
{
  "id": "p-366",
  "level": "2",
  "url": "simple-python-data_values-and-data-types.html#p-366",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "float "
},
{
  "id": "p-368",
  "level": "2",
  "url": "simple-python-data_values-and-data-types.html#p-368",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question2_2_1",
  "level": "2",
  "url": "simple-python-data_values-and-data-types.html#question2_2_1",
  "type": "Checkpoint",
  "number": "2.2.2",
  "title": "",
  "body": " What appears in the output window when the following statement executes?   print(\"Hello World!\")      Nothing is printed. It generates a runtime error.    \"Hello World!\" has a printed representation, so there will not be an error.      \"Hello World!\"    The literal in the program includes the quote marks, but the printed representation omits them.      Hello World!    The printed representation omits the quote marks that are included in the string literal.    "
},
{
  "id": "simple-python-data_operators-and-operands",
  "level": "1",
  "url": "simple-python-data_operators-and-operands.html",
  "type": "Section",
  "number": "2.3",
  "title": "Operators and Operands",
  "body": " Operators and Operands  You can build complex expressions out of simpler ones using operators . Operators are special tokens that represent computations like addition, multiplication and division. The values the operator works on are called operands .  The following are all legal Python expressions whose meaning is more or less clear:  20 + 32 5 ** 2 (5 + 9) * (15 - 7)  The tokens + , - , and * , and the use of parentheses for grouping, mean in Python what they mean in mathematics. The asterisk ( * ) is the token for multiplication, and ** is the token for exponentiation. Addition, subtraction, multiplication, and exponentiation all do what you expect.  Remember that if we want to see the results of the computation, the program needs to specify that with the word print . The first three computations occur, but their results are not printed out.   20 + 32 5 ** 2 (5 + 9) * (15 - 7) print(7 + 5)   In Python 3, which we will be using, the division operator \/ produces a floating point result (even if the result is an integer; 4\/2 is 2.0 ). If you want truncated division, which ignores the remainder, you can use the \/\/ operator (for example, 5\/\/2 is 2 ).   print(9 \/ 5) print(5 \/ 9) print(9 \/\/ 5)   Pay particular attention to the examples above. Note that 9\/\/5 truncates rather than rounding, so it produces the value 1 rather 2.  The truncated division operator, \/\/ , also works on floating point numbers. It truncates to the nearest integer, but still produces a floating point result. Thus 7.0 \/\/ 3.0 is 2.0 .   print(7.0 \/ 3.0) print(7.0 \/\/ 3.0)   The modulus operator , sometimes also called the remainder operator or integer remainder operator works on integers (and integer expressions) and yields the remainder when the first operand is divided by the second. In Python, the modulus operator is a percent sign ( % ). The syntax is the same as for other operators.   print(7 \/\/ 3) # This is the integer division operator print(7 % 3) # This is the remainder or modulus operator   In the above example, 7 divided by 3 is 2 when we use integer division and there is a remainder of 1.  The modulus operator turns out to be surprisingly useful. For example, you can check whether one number is divisible by another—if x % y is zero, then x is divisible by y . Also, you can extract the right-most digit or digits from a number. For example, x % 10 yields the right-most digit of x (in base 10). Similarly x % 100 yields the last two digits.   Check your understanding    What value is printed when the following statement executes?   print(18 \/ 4)      4.5    Because the result is not an integer, a floating point answer is produced.      5    Even if \/\/ were used, it would still truncate, not round      4    Perhaps you are thinking of the integer division operator, \/\/      4.0    \/ performs exact division, without truncation      2    \/ does division. Perhaps you were thinking of %, which computes the remainder?      What value is printed when the following statement executes?   print(18.0 \/\/ 4)      4.5    - \/\/ does truncated division.      5    - Neither \/ nor \/\/ leads to rounding up      4    - Even though it truncates, it produces a floating point result      4.0    - Yes, even though it truncates, it produces a floating point result because 18.0 is a float      2    - \/ does division. Perhaps you were thinking of %, which computes the remainder?      What value is printed when the following statement executes?   print(18 % 4)      4.25    The % operator returns the remainder after division.      5    The % operator returns the remainder after division.      4    The % operator returns the remainder after division.      2    The % operator returns the remainder after division.     "
},
{
  "id": "p-376",
  "level": "2",
  "url": "simple-python-data_operators-and-operands.html#p-376",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "operators operands "
},
{
  "id": "simple-python-data_modulus-operator",
  "level": "2",
  "url": "simple-python-data_operators-and-operands.html#simple-python-data_modulus-operator",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "modulus operator remainder operator integer remainder operator "
},
{
  "id": "p-386",
  "level": "2",
  "url": "simple-python-data_operators-and-operands.html#p-386",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question2_3_1",
  "level": "2",
  "url": "simple-python-data_operators-and-operands.html#question2_3_1",
  "type": "Checkpoint",
  "number": "2.3.1",
  "title": "",
  "body": " What value is printed when the following statement executes?   print(18 \/ 4)      4.5    Because the result is not an integer, a floating point answer is produced.      5    Even if \/\/ were used, it would still truncate, not round      4    Perhaps you are thinking of the integer division operator, \/\/      4.0    \/ performs exact division, without truncation      2    \/ does division. Perhaps you were thinking of %, which computes the remainder?    "
},
{
  "id": "question2_3_2",
  "level": "2",
  "url": "simple-python-data_operators-and-operands.html#question2_3_2",
  "type": "Checkpoint",
  "number": "2.3.2",
  "title": "",
  "body": " What value is printed when the following statement executes?   print(18.0 \/\/ 4)      4.5    - \/\/ does truncated division.      5    - Neither \/ nor \/\/ leads to rounding up      4    - Even though it truncates, it produces a floating point result      4.0    - Yes, even though it truncates, it produces a floating point result because 18.0 is a float      2    - \/ does division. Perhaps you were thinking of %, which computes the remainder?    "
},
{
  "id": "question2_3_3",
  "level": "2",
  "url": "simple-python-data_operators-and-operands.html#question2_3_3",
  "type": "Checkpoint",
  "number": "2.3.3",
  "title": "",
  "body": " What value is printed when the following statement executes?   print(18 % 4)      4.25    The % operator returns the remainder after division.      5    The % operator returns the remainder after division.      4    The % operator returns the remainder after division.      2    The % operator returns the remainder after division.    "
},
{
  "id": "simple-python-data_function-calls",
  "level": "1",
  "url": "simple-python-data_function-calls.html",
  "type": "Section",
  "number": "2.4",
  "title": "Function Calls",
  "body": " Function Calls  The Python interpreter can compute new values with function calls. You are familiar with the idea of functions from high school algebra. There you might define a function f by specifying how it transforms an input into an output, f(x) = 3x + 2 . Then, you might write f(5) and expect to get the value 17.  Python adopts a similar syntax for invoking functions. If there is a named function foo that takes a single input, we can invoke foo on the value 5 by writing foo(5) .  There are many built-in functions available in Python. You'll be seeing some in this chapter and the next couple of chapters.  Functions are like factories that take in some material, do some operation, and then send out the resulting object.   In this case, we refer to the materials as arguments or inputs and the resulting object is referred to as output or return value. This process of taking input, doing something, and then sending back the output is demonstrated in the gif below.    Don't confuse the output value of a function with the output window. The output of a function is a Python value and we can never really see the internal representation of a value. But we can draw pictures to help us imagine what values are, or we can print them to see an external representation in the output window.  To confuse things even more, print is actually a function. All functions produce output values. Only the print function causes things to appear in the output window.   It is also possible for programmers to define new functions in their programs. You will learn how to do that later in the course. For now, you just need to learn how to invoke, or call, a function, and understand that the execution of the function returns a computed value.   def square(x: int) -> int: return x * x def sub(x: int, y: int) -> int: return x - y   We've defined two functions above. The code is hidden so as not to bother you (yet) with how functions are defined. square takes a single input parameter, and returns that input multiplied by itself. sub takes two input parameters and returns the result of subtracting the second from the first. Obviously, these functions are not particularly useful, since we have the operators * and - available. But they illustrate how functions work. The visual below illustrates how the square function works.    print(square(3)) square(5) print(sub(6, 4)) print(sub(5, 9))   Notice that when a function takes more than one input parameter, the inputs are separated by a comma. Also notice that the order of the inputs matters. The value before the comma is treated as the first input, the value after it as the second input.  Again, remember that when Python performs computations, the results are only shown in the output window if there's a print statement that says to do that. In the activecode window above, square(5) produces the value 25 but we never get to see that in the output window, because it is not printed.   Function calls as part of complex expressions  Anywhere in an expression that you can write a literal like a number, you can also write a function invocation that produces a number.  For example:   print(square(3) + 2) print(sub(square(3), square(1+1)))   Let's take a look at how that last execution unfolds.     Functions are objects; parentheses invoke functions  Remember that earlier we mentioned that some kinds of Python objects don't have a nice printed representation? Functions are themselves just objects. If you tell Python to print the function object, rather than printing the results of invoking the function object, you'll get one of those not-so-nice printed representations.  Just typing the name of the function refers to the function as an object. Typing the name of the function followed by parentheses () invokes the function.   print(square) print(square(3))    "
},
{
  "id": "note-5",
  "level": "2",
  "url": "simple-python-data_function-calls.html#note-5",
  "type": "Note",
  "number": "2.4.1",
  "title": "",
  "body": " Don't confuse the output value of a function with the output window. The output of a function is a Python value and we can never really see the internal representation of a value. But we can draw pictures to help us imagine what values are, or we can print them to see an external representation in the output window.  To confuse things even more, print is actually a function. All functions produce output values. Only the print function causes things to appear in the output window.  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "simple-python-data_function-calls.html#exercise-16",
  "type": "Checkpoint",
  "number": "2.4.2",
  "title": "",
  "body": ""
},
{
  "id": "simple-python-data_data-types",
  "level": "1",
  "url": "simple-python-data_data-types.html",
  "type": "Section",
  "number": "2.5",
  "title": "Data Types",
  "body": " Data Types  If you are not sure what class (data type) a value falls into, Python has a function called type which can tell you.   print(type(\"Hello, World!\")) print(type(17)) print(\"Hello, World\") print(type(3.2))   What about values like \"17\" and \"3.2\" ? They look like numbers, but they are in quotation marks like strings.   print(type(\"17\")) print(type(\"3.2\"))   They're strings!  Strings in Python can be enclosed in either single quotes ( ' ) or double quotes ( \" ), or three of each ( ''' or \"\"\" )   print(type('This is a string.')) print(type(\"And so is this.\")) print(type(\"\"\"and this.\"\"\")) print(type('''and even this...'''))   Double quoted strings can contain single quotes inside them, as in \"Bruce's beard\" , and single quoted strings can have double quotes inside them, as in 'The knights who say \"Ni!\"' . Strings enclosed with three occurrences of either quote symbol are called triple quoted strings. They can contain either single or double quotes:   print('''\"Oh no\", she exclaimed, \"Ben's bike is broken!\"''')   Triple quoted strings can even span multiple lines:   print(\"\"\"This message will span several lines of the text.\"\"\")   Python doesn't care whether you use single or double quotes or the three-of-a-kind quotes to surround your strings. Once it has parsed the text of your program or command, the way it stores the value is identical in all cases, and the surrounding quotes are not part of the value.   print('This is a string.') print(\"\"\"And so is this.\"\"\")   So the Python language designers usually chose to surround their strings by single quotes. What do you think would happen if the string already contained single quotes?  When you type a large integer, you might be tempted to use commas between groups of three digits, as in 42,000 . This is not a legal integer in Python, but it does mean something else, which is legal:   print(42500) print(42,500)   Well, that's not what we expected at all! Because of the comma, Python chose to treat this as a pair of values. In fact, a print statement can print any number of values as long as you separate them by commas. Notice that the values are separated by spaces when they are displayed.   print(42, 17, 56, 34, 11, 4.35, 32) print(3.4, \"hello\", 45)   Remember not to put commas or spaces in your integers, no matter how big they are. Also revisit what we said in the previous chapter: formal languages are strict, the notation is concise, and even the smallest change might mean something quite different from what you intended.   The examples in this online text describe how print works in Python 3. If you install Python 2.7 on your machine, it will work slightly differently. One difference is that print is not called as a function, so there are no parentheses around the values to be printed.    Check your understanding    How can you determine the type of a variable?     Print out the value and determine the data type based on the value printed.    You may be able to determine the data type based on the printed value, but it may also be deceptive, like when a string prints, there are no quotes around it.      Use the type function.    The type function will tell you the class the value belongs to.      Use it in a known equation and print the result.    Only numeric values can be used in equations.      Look at the declaration of the variable.    In Python variables are not declared. Values, not variables, have types in Python. A variable can even take on values with different types during a program's execution.      What is the data type of ‘this is what kind of data'?     Character    It is not a single character.      Integer    The data is not numeric.      Float    The value is not numeric with a decimal point.      String    Strings can be enclosed in single quotes.     "
},
{
  "id": "p-434",
  "level": "2",
  "url": "simple-python-data_data-types.html#p-434",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "type "
},
{
  "id": "note-6",
  "level": "2",
  "url": "simple-python-data_data-types.html#note-6",
  "type": "Note",
  "number": "2.5.1",
  "title": "",
  "body": " The examples in this online text describe how print works in Python 3. If you install Python 2.7 on your machine, it will work slightly differently. One difference is that print is not called as a function, so there are no parentheses around the values to be printed.  "
},
{
  "id": "p-446",
  "level": "2",
  "url": "simple-python-data_data-types.html#p-446",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question2_5_1",
  "level": "2",
  "url": "simple-python-data_data-types.html#question2_5_1",
  "type": "Checkpoint",
  "number": "2.5.2",
  "title": "",
  "body": " How can you determine the type of a variable?     Print out the value and determine the data type based on the value printed.    You may be able to determine the data type based on the printed value, but it may also be deceptive, like when a string prints, there are no quotes around it.      Use the type function.    The type function will tell you the class the value belongs to.      Use it in a known equation and print the result.    Only numeric values can be used in equations.      Look at the declaration of the variable.    In Python variables are not declared. Values, not variables, have types in Python. A variable can even take on values with different types during a program's execution.    "
},
{
  "id": "question2_5_2",
  "level": "2",
  "url": "simple-python-data_data-types.html#question2_5_2",
  "type": "Checkpoint",
  "number": "2.5.3",
  "title": "",
  "body": " What is the data type of ‘this is what kind of data'?     Character    It is not a single character.      Integer    The data is not numeric.      Float    The value is not numeric with a decimal point.      String    Strings can be enclosed in single quotes.    "
},
{
  "id": "simple-python-data_type-conversion-functions",
  "level": "1",
  "url": "simple-python-data_type-conversion-functions.html",
  "type": "Section",
  "number": "2.6",
  "title": "Type conversion functions",
  "body": " Type conversion functions  Sometimes it is necessary to convert values from one type to another. Python provides a few simple functions that will allow us to do that. The functions int , float and str will (attempt to) convert their arguments into types int , float and str respectively. We call these type conversion functions.  The int function can take a floating point number or a string, and turn it into an int. For floating point numbers, it discards the decimal portion of the number - a process we call truncation towards zero on the number line. Let us see this in action:   print(3.14, int(3.14)) print(3.9999, int(3.9999)) # This doesn't round to the closest int! print(3.0, int(3.0)) print(-3.999, int(-3.999)) # Note that the result is closer to zero print(\"2345\", int(\"2345\")) # parse a string to produce an int print(17, int(17)) # int even works on integers print(int(\"23bottles\"))   The last case shows that a string has to be a syntactically legal number, otherwise you'll get one of those pesky runtime errors. Modify the example by deleting the bottles and rerun the program. You should see the integer 23 .  The type converter float can turn an integer, a float, or a syntactically legal string into a float.   print(float(\"123.45\")) print(type(float(\"123.45\")))   The type converter str turns its argument into a string. Remember that when we print a string, the quotes are removed in the output window. However, if we print the type, we can see that it is definitely str .   print(str(17)) print(str(123.45)) print(type(str(123.45)))   One common operation where you might need to do a type conversion is when you are concatenating several strings together but want to include a numeric value as part of the final string. Because we can't concatenate a string with an integer or floating point number, we will often have to convert numbers to strings before concatenating them.    Check your understanding    What value is printed when the following statement executes?   print(int(53.785))      Nothing is printed. It generates a runtime error.    The statement is valid Python code. It calls the int function on 53.785 and then prints the value that is returned.      53    The int function truncates all values after the decimal and prints the integer value.      54    When converting to an integer, the int function does not round.      53.785    The int function removes the fractional part of 53.785 and returns an integer, which is then printed.     "
},
{
  "id": "p-465",
  "level": "2",
  "url": "simple-python-data_type-conversion-functions.html#p-465",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "type conversion "
},
{
  "id": "p-471",
  "level": "2",
  "url": "simple-python-data_type-conversion-functions.html#p-471",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question2_6_1",
  "level": "2",
  "url": "simple-python-data_type-conversion-functions.html#question2_6_1",
  "type": "Checkpoint",
  "number": "2.6.1",
  "title": "",
  "body": " What value is printed when the following statement executes?   print(int(53.785))      Nothing is printed. It generates a runtime error.    The statement is valid Python code. It calls the int function on 53.785 and then prints the value that is returned.      53    The int function truncates all values after the decimal and prints the integer value.      54    When converting to an integer, the int function does not round.      53.785    The int function removes the fractional part of 53.785 and returns an integer, which is then printed.    "
},
{
  "id": "simple-python-data_variables",
  "level": "1",
  "url": "simple-python-data_variables.html",
  "type": "Section",
  "number": "2.7",
  "title": "Variables",
  "body": " Variables  One of the most powerful features of a programming language is the ability to manipulate variables . A variable is a name that refers to a value.  Assignment statements create new variables and also give them values to refer to.   message = \"What's up, Doc?\" n = 17 pi = 3.14159   This example makes three assignments. The first assigns the string value \"What's up, Doc?\" to a new variable named message . The second assigns the integer 17 to n , and the third assigns the floating-point number 3.14159 to a variable called pi .  The assignment token , = , should not be confused with equality (we will see later that equality uses the == token). The assignment statement links a name , on the left hand side of the operator, with a value , on the right hand side. This is why you will get an error if you enter:   17 = n    When reading or writing code, say to yourself n is assigned 17 or n gets the value 17 or n is a reference to the object 17 or n refers to the object 17 . Don't say n equals 17 .   A common way to represent variables on paper is to write the name with an arrow pointing to the variable's value. This kind of figure, known as a reference diagram , is often called a state snapshot because it shows what state each of the variables is in at a particular instant in time. (Think of it as the variable's state of mind). This diagram shows the result of executing the assignment statements shown above.   If your program includes a variable in any expression, whenever that expression is executed it will produce the value that is linked to the variable at the time of execution. In other words, evaluating a variable looks up its value.   message = \"What's up, Doc?\" n = 17 pi = 3.14159 print(message) print(n) print(pi)   In each case the result is the value of the variable. To see this in even more detail, we can run the program using codelens.   message = \"What's up, Doc?\" n = 17 pi = 3.14159 print(message) print(n) print(pi)   Now, as you step through the statements, you can see the variables and the values they reference as those references are created.  We use variables in a program to remember things, like the current score at the football game. But variables are variable . This means they can change over time, just like the scoreboard at a football game. You can assign a value to a variable, and later assign a different value to the same variable.   This is different from math. In algebra, if you give x the value 3, it cannot change to refer to a different value half-way through your calculations!   To see this, read and then run the following program. You'll notice we change the value of day three times, and on the third assignment we even give it a value that is of a different type.   day = \"Thursday\" print(day) day = \"Friday\" print(day) day = 21 print(day)   A great deal of programming is about having the computer remember things. For example, we might want to keep track of the number of missed calls on your phone. Each time another call is missed, we will arrange to update or change the variable so that it will always reflect the correct value.  Any place in a Python program where a number or string is expected, you can put a variable name instead. The python interpreter will substitute the value for the variable name.  For example, we can find out the data type of the current value of a variable by putting the variable name inside the parentheses following the function name type .   message = \"What's up, Doc?\" n = 17 pi = 3.14159 print(type(message)) print(type(n)) print(type(pi))    If you have programmed in another language such as Java or C++, you may be used to the idea that variables have types that are declared when the variable name is first introduced in a program. Python doesn't do that. Variables don't have types in Python; values do. That means that it is acceptable in Python to have a variable name refer to an integer and later have the same variable name refer to a string. This is almost never a good idea, because it will confuse human readers (including you), but the Python interpreter will not complain.    Check your understanding    What is printed when the following statements execute?   day = \"Thursday\" day = 32.5 day = 19 print(day)      Nothing is printed. A runtime error occurs.    It is legal to change the type of data that a variable holds in Python.      Thursday    This is the first value assigned to the variable day, but the next statements reassign that variable to new values.      32.5    This is the second value assigned to the variable day, but the next statement reassigns that variable to a new value.      19    The variable day will contain the last value assigned to it when it is printed.     "
},
{
  "id": "p-481",
  "level": "2",
  "url": "simple-python-data_variables.html#p-481",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variables "
},
{
  "id": "p-482",
  "level": "2",
  "url": "simple-python-data_variables.html#p-482",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Assignment statements "
},
{
  "id": "p-484",
  "level": "2",
  "url": "simple-python-data_variables.html#p-484",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "assignment token "
},
{
  "id": "note-7",
  "level": "2",
  "url": "simple-python-data_variables.html#note-7",
  "type": "Note",
  "number": "2.7.1",
  "title": "",
  "body": " When reading or writing code, say to yourself n is assigned 17 or n gets the value 17 or n is a reference to the object 17 or n refers to the object 17 . Don't say n equals 17 .  "
},
{
  "id": "p-486",
  "level": "2",
  "url": "simple-python-data_variables.html#p-486",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reference diagram state snapshot "
},
{
  "id": "note-8",
  "level": "2",
  "url": "simple-python-data_variables.html#note-8",
  "type": "Note",
  "number": "2.7.2",
  "title": "",
  "body": " This is different from math. In algebra, if you give x the value 3, it cannot change to refer to a different value half-way through your calculations!  "
},
{
  "id": "note-9",
  "level": "2",
  "url": "simple-python-data_variables.html#note-9",
  "type": "Note",
  "number": "2.7.3",
  "title": "",
  "body": " If you have programmed in another language such as Java or C++, you may be used to the idea that variables have types that are declared when the variable name is first introduced in a program. Python doesn't do that. Variables don't have types in Python; values do. That means that it is acceptable in Python to have a variable name refer to an integer and later have the same variable name refer to a string. This is almost never a good idea, because it will confuse human readers (including you), but the Python interpreter will not complain.  "
},
{
  "id": "p-497",
  "level": "2",
  "url": "simple-python-data_variables.html#p-497",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question2_7_1",
  "level": "2",
  "url": "simple-python-data_variables.html#question2_7_1",
  "type": "Checkpoint",
  "number": "2.7.4",
  "title": "",
  "body": " What is printed when the following statements execute?   day = \"Thursday\" day = 32.5 day = 19 print(day)      Nothing is printed. A runtime error occurs.    It is legal to change the type of data that a variable holds in Python.      Thursday    This is the first value assigned to the variable day, but the next statements reassign that variable to new values.      32.5    This is the second value assigned to the variable day, but the next statement reassigns that variable to a new value.      19    The variable day will contain the last value assigned to it when it is printed.    "
},
{
  "id": "simple-python-data_variable-names-and-keywords",
  "level": "1",
  "url": "simple-python-data_variable-names-and-keywords.html",
  "type": "Section",
  "number": "2.8",
  "title": "Variable Names and Keywords",
  "body": " Variable Names and Keywords  Variable names can be arbitrarily long. They can contain both letters and digits, but they have to begin with a letter or an underscore. Although it is legal to use uppercase letters, by convention we don't. If you do, remember that case matters. Bruce and bruce are different variables.   Variable names can never contain spaces.   The underscore character ( _ ) can also appear in a name. It is often used in names with multiple words, such as my_name or price_of_tea_in_china . There are some situations in which names beginning with an underscore have special meaning, so a safe rule for beginners is to start all names with a letter.  If you give a variable an illegal name, you get a syntax error. In the example below, each of the variable names is illegal.  76trombones = \"big parade\" more$ = 1000000 class = \"Computer Science 101\"  76trombones is illegal because it does not begin with a letter. more$ is illegal because it contains an illegal character, the dollar sign. But what's wrong with class ?  It turns out that class is one of the Python keywords . Keywords define the language's syntax rules and structure, and they cannot be used as variable names. Python has thirty-something keywords (and every now and again improvements to Python introduce or eliminate one or two):     and  as  assert  break  class  continue    def  del  elif  else  except  exec    finally  for  from  global  if  import    in  is  lambda  nonlocal  not  or    pass  raise  return  try  while  with    yield  True  False  None         You might want to keep this list handy. If the interpreter complains about one of your variable names and you don't know why, see if it is on this list.   Check your understanding    True or False: the following is a legal variable name in Python: A_good_grade_is_A+     True    - The + character is not allowed in variable names.      False    - The + character is not allowed in variable names (everything else in this name is fine).     "
},
{
  "id": "p-507",
  "level": "2",
  "url": "simple-python-data_variable-names-and-keywords.html#p-507",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Variable names "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "simple-python-data_variable-names-and-keywords.html#warning-1",
  "type": "Warning",
  "number": "2.8.1",
  "title": "",
  "body": " Variable names can never contain spaces.  "
},
{
  "id": "p-512",
  "level": "2",
  "url": "simple-python-data_variable-names-and-keywords.html#p-512",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "keywords "
},
{
  "id": "table-1",
  "level": "2",
  "url": "simple-python-data_variable-names-and-keywords.html#table-1",
  "type": "Table",
  "number": "2.8.2",
  "title": "",
  "body": "   and  as  assert  break  class  continue    def  del  elif  else  except  exec    finally  for  from  global  if  import    in  is  lambda  nonlocal  not  or    pass  raise  return  try  while  with    yield  True  False  None        "
},
{
  "id": "p-514",
  "level": "2",
  "url": "simple-python-data_variable-names-and-keywords.html#p-514",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question2_8_1",
  "level": "2",
  "url": "simple-python-data_variable-names-and-keywords.html#question2_8_1",
  "type": "Checkpoint",
  "number": "2.8.3",
  "title": "",
  "body": " True or False: the following is a legal variable name in Python: A_good_grade_is_A+     True    - The + character is not allowed in variable names.      False    - The + character is not allowed in variable names (everything else in this name is fine).    "
},
{
  "id": "simple-python-data_choosing-the-right-variable-name",
  "level": "1",
  "url": "simple-python-data_choosing-the-right-variable-name.html",
  "type": "Section",
  "number": "2.9",
  "title": "Choosing the Right Variable Name",
  "body": " Choosing the Right Variable Name  Programmers generally choose names for their variables that are meaningful to the human readers of the program — they help the programmer document, or remember, what the variable is used for. Beginning programmers sometimes think it is funny to use strange or obscene names for their variables. This is not good practice and will not amuse your professor. Get in the habit of using meaningful names right away.   Beginners sometimes confuse meaningful to the human readers with meaningful to the computer . So they'll wrongly think that because they've called some variable average or pi , it will somehow automagically calculate an average, or automagically associate the variable pi with the value 3.14159. No! The computer doesn't attach semantic meaning to your variable names.  So you'll find some instructors who deliberately don't choose meaningful names when they teach beginners — not because they don't think it is a good habit, but because they're trying to reinforce the message that you, the programmer, have to write some program code to calculate the average, or you must write an assignment statement to give a variable the value you want it to have.   "
},
{
  "id": "warning-2",
  "level": "2",
  "url": "simple-python-data_choosing-the-right-variable-name.html#warning-2",
  "type": "Warning",
  "number": "2.9.1",
  "title": "",
  "body": " Beginners sometimes confuse meaningful to the human readers with meaningful to the computer . So they'll wrongly think that because they've called some variable average or pi , it will somehow automagically calculate an average, or automagically associate the variable pi with the value 3.14159. No! The computer doesn't attach semantic meaning to your variable names.  So you'll find some instructors who deliberately don't choose meaningful names when they teach beginners — not because they don't think it is a good habit, but because they're trying to reinforce the message that you, the programmer, have to write some program code to calculate the average, or you must write an assignment statement to give a variable the value you want it to have.  "
},
{
  "id": "simple-python-data_statements-and-expressions",
  "level": "1",
  "url": "simple-python-data_statements-and-expressions.html",
  "type": "Section",
  "number": "2.10",
  "title": "Statements and Expressions",
  "body": " Statements and Expressions  A statement is an instruction that the Python interpreter can execute. You have only seen the assignment statement so far. Some other kinds of statements that you'll see in future chapters are while statements, for statements, if statements, and import statements. (There are other kinds too!)  An expression is a combination of literals, variable names, operators, and calls to functions. Expressions need to be evaluated. The result of evaluating an expression is a value or object .   If you ask Python to print an expression, the interpreter evaluates the expression and displays the result.   print(1 + 1 + (2 * 3)) print(len(\"hello\"))   In this example len is a built-in Python function that returns the number of characters in a string.  The evaluation of an expression produces a value, which is why expressions can appear on the right hand side of assignment statements. A literal all by itself is a simple expression, and so is a variable.   y = 3.14 x = len(\"hello\") print(x) print(y)   In a program, anywhere that a literal value (a string or a number) is acceptable, a more complicated expression is also acceptable. Here are all the kinds of expressions we've seen so far:    literal  e.g., Hello or 3.14    variable name  e.g., x or len    operator expression  <expression> operator-name <expression>    function call expressions  <expression>(<expressions separated by commas>)    Notice that operator expressions (like + and * ) have sub-expressions before and after the operator. Each of these can themselves be simple or complex expressions. In that way, you can build up to having pretty complicated expressions.   print(2 * len(\"hello\") + len(\"goodbye\"))   Similarly, when calling a function, instead of putting a literal inside the parentheses, a complex expression can be placed inside the parentheses. (Again, we provide some hidden code that defines the functions square and sub ).   def square(x: int) -> int: return x * x def sub(x: int, y: int) -> int: return x - y    x = 2 y = 1 print(square(y + 3)) print(square(y + square(x))) print(sub(square(y), square(x)))   With a function call, it's even possible to have a complex expression before the left parenthesis, as long as that expression evaluates to a function object. For now, though, we will just use variable names (like square, sub, and len) that are directly bound to function objects.  It is important to start learning to read code that contains complex expressions. The Python interpreter examines any line of code and parses it into components. For example, if it sees an = symbol, it will try to treat the whole line as an assignment statement. It will expect to see a valid variable name to the left of the =, and will parse everything to the right of the = as an expression. It will try to figure out whether the right side is a literal, a variable name, an operator expression, or a function call expression. If it's an operator expression, it will further try to parse the sub-expressions before and after the operator. And so on. You should learn to parse lines of code in the same way.  In order to evaluate an operator expression, the Python interpreter first completely evaluates the expression before the operator, then the one after, then combines the two resulting values using the operator. In order to evaluate a function call expression, the interpreter evaluates the expression before the parentheses (i.e., it looks up the name of the function). Then it tries to evaluate each of the expressions inside the parentheses. There may be more than one, separated by commas. The values of those expressions are passed as inputs to the function when the function is called.  If a function call expression is a sub-expression of some more complicated expression, as square(x) is in sub(square(y), square(x)) , then the return value from square(x) is passed as an input to the sub function. This is one of the tricky things that you will have to get used to working out when you read (or write) code. In this example, the square function is called (twice) before the sub function is called, even though the sub function comes first when reading the code from left to right. In the following example we will use the notation of -add- to indicate that Python has looked up the name add and determined that it is a function object.   To start giving you some practice in reading and understanding complicated expressions, try doing the Parsons problem below. Be careful not to indent any of the lines of code; that's something that will come later in the course.   Please order the code fragments in the order in which the Python interpreter would evaluate them. x is 2 and y is 3. Now the interpreter is executing square(x + sub(square(y), 2 *x)) .    look up the variable square to get the function object    look up the variable x to get 2    look up the variable sub to get the function object    look up the variable square, again, to get the function object    look up the variable y to get 3    run the square function on input 3, returning the value 9    look up the variable x, again, to get 2    multiply 2 * 2 to get 4    run the sub function, passing inputs 9 and 4, returning the value 5    add 2 and 5 to get 7    run the square function, again, on input 7, returning the value 49    "
},
{
  "id": "p-523",
  "level": "2",
  "url": "simple-python-data_statements-and-expressions.html#p-523",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "statement "
},
{
  "id": "p-524",
  "level": "2",
  "url": "simple-python-data_statements-and-expressions.html#p-524",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "expression "
},
{
  "id": "p-525",
  "level": "2",
  "url": "simple-python-data_statements-and-expressions.html#p-525",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "evaluates "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "simple-python-data_statements-and-expressions.html#exercise-22",
  "type": "Checkpoint",
  "number": "2.10.1",
  "title": "",
  "body": ""
},
{
  "id": "pp2_10_1",
  "level": "2",
  "url": "simple-python-data_statements-and-expressions.html#pp2_10_1",
  "type": "Checkpoint",
  "number": "2.10.2",
  "title": "",
  "body": " Please order the code fragments in the order in which the Python interpreter would evaluate them. x is 2 and y is 3. Now the interpreter is executing square(x + sub(square(y), 2 *x)) .    look up the variable square to get the function object    look up the variable x to get 2    look up the variable sub to get the function object    look up the variable square, again, to get the function object    look up the variable y to get 3    run the square function on input 3, returning the value 9    look up the variable x, again, to get 2    multiply 2 * 2 to get 4    run the sub function, passing inputs 9 and 4, returning the value 5    add 2 and 5 to get 7    run the square function, again, on input 7, returning the value 49   "
},
{
  "id": "simple-python-data_order-of-operations",
  "level": "1",
  "url": "simple-python-data_order-of-operations.html",
  "type": "Section",
  "number": "2.11",
  "title": "Order of Operations",
  "body": " Order of Operations  When more than one operator appears in an expression, the order of evaluation depends on the rules of precedence . Python follows the same precedence rules for its mathematical operators that mathematics does.     Parentheses have the highest precedence and can be used to force an expression to evaluate in the order you want. Since expressions in parentheses are evaluated first, 2 * (3-1) is 4, and (1+1)**(5-2) is 8. You can also use parentheses to make an expression easier to read, as in (minute * 100) \/ 60 : in this case, the parentheses don't change the result, but they reinforce that the expression in parentheses will be evaluated first.   Exponentiation has the next highest precedence, so 2**1+1 is 3 and not 4, and 3*1**3 is 3 and not 27. Can you explain why?   Multiplication and both division operators have the same precedence, which is higher than addition and subtraction, which also have the same precedence. So 2*3-1 yields 5 rather than 4, and 5-2*2 is 1, not 6.   Operators with the same precedence are evaluated from left-to-right. In algebra we say they are left-associative . So in the expression 6-3+2 , the subtraction happens first, yielding 3. We then add 2 to get the result 5. If the operations had been evaluated from right to left, the result would have been 6-(3+2) , which is 1.     Note  Due to some historical quirk, an exception to the left-to-right left-associative rule is the exponentiation operator ** . A useful hint is to always use parentheses to force exactly the order you want when exponentiation is involved:    print(2 ** 3 ** 2) # the right-most ** operator gets done first! print((2 ** 3) ** 2) # use parentheses to force the order you want!    Note  This is a second way that parentheses are used in Python. The first way you've already seen is that () indicates a function call, with the inputs going inside the parentheses. How can Python tell when parentheses specify to call a function, and when they are just forcing the order of operations for ambiguous operator expressions? The answer is that if there's a an expression to the left of the parentheses that evaluates to a function object, then the parentheses indicate a function call, and otherwise not. You will have to get used to making the same inference when you see parentheses: is this a function call, or just specifying precedence?    Check your understanding    What is the value of the follwing expression?   16 - 2 * 5 \/\/ 3 + 1      14    Using parentheses, the expression is evaluated as (2*5) first, then (10 \/\/ 3), then (16-3), and then (13+1).      24    Remember that * has precedence over -.      3    Remember that \/\/ has precedence over -.      13.667    Remember that \/\/ does integer division.     "
},
{
  "id": "note-10",
  "level": "2",
  "url": "simple-python-data_order-of-operations.html#note-10",
  "type": "Note",
  "number": "2.11.1",
  "title": "Note.",
  "body": " Note  Due to some historical quirk, an exception to the left-to-right left-associative rule is the exponentiation operator ** . A useful hint is to always use parentheses to force exactly the order you want when exponentiation is involved:  "
},
{
  "id": "note-11",
  "level": "2",
  "url": "simple-python-data_order-of-operations.html#note-11",
  "type": "Note",
  "number": "2.11.2",
  "title": "Note.",
  "body": " Note  This is a second way that parentheses are used in Python. The first way you've already seen is that () indicates a function call, with the inputs going inside the parentheses. How can Python tell when parentheses specify to call a function, and when they are just forcing the order of operations for ambiguous operator expressions? The answer is that if there's a an expression to the left of the parentheses that evaluates to a function object, then the parentheses indicate a function call, and otherwise not. You will have to get used to making the same inference when you see parentheses: is this a function call, or just specifying precedence?  "
},
{
  "id": "p-548",
  "level": "2",
  "url": "simple-python-data_order-of-operations.html#p-548",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question2_11_1",
  "level": "2",
  "url": "simple-python-data_order-of-operations.html#question2_11_1",
  "type": "Checkpoint",
  "number": "2.11.3",
  "title": "",
  "body": " What is the value of the follwing expression?   16 - 2 * 5 \/\/ 3 + 1      14    Using parentheses, the expression is evaluated as (2*5) first, then (10 \/\/ 3), then (16-3), and then (13+1).      24    Remember that * has precedence over -.      3    Remember that \/\/ has precedence over -.      13.667    Remember that \/\/ does integer division.    "
},
{
  "id": "simple-python-data_reassignment",
  "level": "1",
  "url": "simple-python-data_reassignment.html",
  "type": "Section",
  "number": "2.12",
  "title": "Reassignment",
  "body": " Reassignment  As we have mentioned previously, it is legal to make more than one assignment to the same variable. A new assignment makes an existing variable refer to a new value (and stop referring to the old value).   bruce = 5 print(bruce) bruce = 7 print(bruce)   The first time bruce is printed, its value is 5, and the second time, its value is 7. The assignment statement changes the value (the object) that bruce refers to.  Here is what reassignment looks like in a reference diagram:   It is important to note that in mathematics, a statement of equality is always true. If a is equal to b now, then a will always equal to b . In Python, an assignment statement can make two variables refer to the same object and therefore have the same value. They appear to be equal. However, because of the possibility of reassignment, they don't have to stay that way:   a = 5 b = a # after executing this line, a and b are now equal print(a,b) a = 3 # after executing this line, a and b are no longer equal print(a,b)   Line 4 changes the value of a but does not change the value of b , so they are no longer equal. We will have much more to say about equality in a later chapter.   Developing your mental model of How Python Evaluates  Its important to start to develop a good mental model of the steps the Python interpreter takes when evaluating an assignment statement. In an assignment statement, the interpreter first evaluates the code on the right hand side of the assignment operator. It then gives a name to whatever that is. The (very short) visualization below shows what is happening.   In the first statement a = 5 the literal number 5 evaluates to 5, and is given the name a . In the second statement, the variable a evaluates to 5 and so 5 now ends up with a second name b .  You can step through the code and see how the variable assignments change below.   a = 5 b = a # after executing this line, a and b are now equal print(a,b) a = 3 # after executing this line, a and b are no longer equal print(a,b)    In some programming languages, a different symbol is used for assignment, such as <- or := . The intent is that this will help to avoid confusion. Python chose to use the tokens = for assignment, and == for equality. This is a popular choice also found in languages like C, C++, Java, and C#.    Check your understanding    After the following statements, what are the values of x and y?   x = 15 y = x x = 22      x is 15 and y is 15    Look at the last assignment statement which gives x a different value.      x is 22 and y is 22    No, x and y are two separate variables. Just because x changes in the last assignment statement, it does not change the value that was copied into y in the second statement.      x is 15 and y is 22    Look at the last assignment statement, which reassigns x, and not y.      x is 22 and y is 15    Yes, x has the value 22 and y the value 15.      "
},
{
  "id": "p-560",
  "level": "2",
  "url": "simple-python-data_reassignment.html#p-560",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reassignment "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "simple-python-data_reassignment.html#exercise-25",
  "type": "Checkpoint",
  "number": "2.12.1",
  "title": "",
  "body": ""
},
{
  "id": "note-12",
  "level": "2",
  "url": "simple-python-data_reassignment.html#note-12",
  "type": "Note",
  "number": "2.12.2",
  "title": "",
  "body": " In some programming languages, a different symbol is used for assignment, such as <- or := . The intent is that this will help to avoid confusion. Python chose to use the tokens = for assignment, and == for equality. This is a popular choice also found in languages like C, C++, Java, and C#.  "
},
{
  "id": "p-567",
  "level": "2",
  "url": "simple-python-data_reassignment.html#p-567",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question2_13_1",
  "level": "2",
  "url": "simple-python-data_reassignment.html#question2_13_1",
  "type": "Checkpoint",
  "number": "2.12.3",
  "title": "",
  "body": " After the following statements, what are the values of x and y?   x = 15 y = x x = 22      x is 15 and y is 15    Look at the last assignment statement which gives x a different value.      x is 22 and y is 22    No, x and y are two separate variables. Just because x changes in the last assignment statement, it does not change the value that was copied into y in the second statement.      x is 15 and y is 22    Look at the last assignment statement, which reassigns x, and not y.      x is 22 and y is 15    Yes, x has the value 22 and y the value 15.    "
},
{
  "id": "simple-python-data_updating-variables",
  "level": "1",
  "url": "simple-python-data_updating-variables.html",
  "type": "Section",
  "number": "2.13",
  "title": "Updating Variables",
  "body": " Updating Variables  One of the most common forms of reassignment is an update where the new value of the variable depends on the old. For example,   x = x + 1   This means get the current value of x, add one, and then update x with the new value. The new value of x is the old value of x plus 1. Although this assignment statement may look a bit strange, remember that executing assignment is a two-step process. First, evaluate the right-hand side expression. Second, let the variable name on the left-hand side refer to this new resulting object. The fact that x appears on both sides does not matter. The semantics of the assignment statement makes sure that there is no confusion as to the result. The visualizer makes this very clear.    x = 6 # initialize x print(x) x = x + 1 # update x print(x)   If you try to update a variable that doesn't exist, you get an error because Python evaluates the expression on the right side of the assignment operator before it assigns the resulting value to the name on the left. Before you can update a variable, you have to initialize it, usually with a simple assignment. In the above example, x was initialized to 6.  Updating a variable by adding something to it is called an increment ; subtracting is called a decrement . Sometimes programmers talk about incrementing or decrementing without specifying by how much; when they do they usually mean by 1. Sometimes programmers also talk about bumping a variable, which means the same as incrementing it by 1.  Incrementing and decrementing are such common operations that programming languages often include special syntax for it. In Python += is used for incrementing, and -= for decrementing. In some other languages, there is even a special syntax ++ and -- for incrementing or decrementing by 1. Python does not have such a special syntax. To increment x by 1 you have to write x += 1 or x = x + 1 .   x = 6 # initialize x print(x) x += 3 # increment x by 3; same as x = x + 3 print(x) x -= 1 # decrement x by 1 print(x)   Imagine that we wanted to not increment by one each time but instead add together the numbers one through ten, but only one at a time.   s = 1 print(s) s = s + 2 print(s) s = s + 3 print(s) s = s + 4 print(s) s = s + 5 print(s) s = s + 6 print(s) s = s + 7 print(s) s = s + 8 print(s) s = s + 9 print(s) s = s + 10 print(s)   After the initial statement, where we assign s to 1, we can add the current value of s and the next number that we want to add (2 all the way up to 10) and then finally reassign that that value to s so that the variable is updated after each line in the code.  This will be tedious when we have many things to add together. Later you'll read about an easier way to do this kind of task.   Check your understanding    What is printed when the following statements execute?   x = 12 x = x - 1 print(x)      12    The value of x changes in the second statement.      -1    In the second statement, substitute the current value of x before subtracting 1.      11    Yes, this statement sets the value of x equal to the current value minus 1.      Nothing. An error occurs because x can never be equal to x - 1.    Remember that variables in Python are different from variables in math in that they (temporarily) hold values, but can be reassigned.      What is printed when the following statements execute?   x = 12 x = x - 3 x = x + 5 x = x + 1 print(x)      12    The value of x changes in the second statement.      9    Each statement changes the value of x, so 9 is not the final result.      15    Yes, starting with 12, subtract 3, than add 5, and finally add 1.      Nothing. An error occurs because x cannot be used that many times in assignment statements.    Remember that variables in Python are different from variables in math in that they (temporarily) hold values, but can be reassigned.      Construct the code that will result in the value 134 being printed.    mybankbalance = 100  mybankbalance = mybankbalance + 34  print(mybankbalance)     Which of the following statements are equivalent?     x = x + y    x is updated to be the old value of x plus the value of y.      y += x    y is updated to be the old value of y plus the value of x.      x += x + y    This updates x to be its old value (because of the +=) plus its old value again (because of the x on the right side) plus the value of y, so it's equivalent to x = x + x + y      x += y    x is updated to be the old value of x plus the value of y.      x++ y    ++ is not a syntax that means anything in Python.     "
},
{
  "id": "p-577",
  "level": "2",
  "url": "simple-python-data_updating-variables.html#p-577",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "update "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "simple-python-data_updating-variables.html#exercise-27",
  "type": "Checkpoint",
  "number": "2.13.1",
  "title": "",
  "body": ""
},
{
  "id": "p-579",
  "level": "2",
  "url": "simple-python-data_updating-variables.html#p-579",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initialize "
},
{
  "id": "p-580",
  "level": "2",
  "url": "simple-python-data_updating-variables.html#p-580",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "increment decrement bumping "
},
{
  "id": "p-585",
  "level": "2",
  "url": "simple-python-data_updating-variables.html#p-585",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question2_14_1",
  "level": "2",
  "url": "simple-python-data_updating-variables.html#question2_14_1",
  "type": "Checkpoint",
  "number": "2.13.2",
  "title": "",
  "body": " What is printed when the following statements execute?   x = 12 x = x - 1 print(x)      12    The value of x changes in the second statement.      -1    In the second statement, substitute the current value of x before subtracting 1.      11    Yes, this statement sets the value of x equal to the current value minus 1.      Nothing. An error occurs because x can never be equal to x - 1.    Remember that variables in Python are different from variables in math in that they (temporarily) hold values, but can be reassigned.    "
},
{
  "id": "question2_14_2",
  "level": "2",
  "url": "simple-python-data_updating-variables.html#question2_14_2",
  "type": "Checkpoint",
  "number": "2.13.3",
  "title": "",
  "body": " What is printed when the following statements execute?   x = 12 x = x - 3 x = x + 5 x = x + 1 print(x)      12    The value of x changes in the second statement.      9    Each statement changes the value of x, so 9 is not the final result.      15    Yes, starting with 12, subtract 3, than add 5, and finally add 1.      Nothing. An error occurs because x cannot be used that many times in assignment statements.    Remember that variables in Python are different from variables in math in that they (temporarily) hold values, but can be reassigned.    "
},
{
  "id": "pp2_14_1",
  "level": "2",
  "url": "simple-python-data_updating-variables.html#pp2_14_1",
  "type": "Checkpoint",
  "number": "2.13.4",
  "title": "",
  "body": " Construct the code that will result in the value 134 being printed.    mybankbalance = 100  mybankbalance = mybankbalance + 34  print(mybankbalance)   "
},
{
  "id": "question2_14_3",
  "level": "2",
  "url": "simple-python-data_updating-variables.html#question2_14_3",
  "type": "Checkpoint",
  "number": "2.13.5",
  "title": "",
  "body": " Which of the following statements are equivalent?     x = x + y    x is updated to be the old value of x plus the value of y.      y += x    y is updated to be the old value of y plus the value of x.      x += x + y    This updates x to be its old value (because of the +=) plus its old value again (because of the x on the right side) plus the value of y, so it's equivalent to x = x + x + y      x += y    x is updated to be the old value of x plus the value of y.      x++ y    ++ is not a syntax that means anything in Python.    "
},
{
  "id": "simple-python-data_hard-coding",
  "level": "1",
  "url": "simple-python-data_hard-coding.html",
  "type": "Section",
  "number": "2.14",
  "title": "Hard-Coding",
  "body": " Hard-Coding  As you begin programming, you'll see that there are many ways to solve problems. You'll also find that one of the thrills of programming is how easily you can do things correctly that humans could easily make errors on. For example, you'll learn how to write just a very small bit of code to find the 1047th character in a sentence that might be thousands of letters long, and you'll learn how to do the exact same computation on many different pieces of data.  We'll often tell you in this textbook not to hard-code answers. What does that mean?  Some things in programming you can only do by typing them out. As you've seen, when you have to assign a value to a variable, you simply type something like xyz = 6 . No other way.  But in most cases, it's best not to do computation in your head or write complete answers to programming problems out by hand. That's where hard-coding comes in. Don't hard code basically means, you should rely on your code, your logic, your program, and you should not write things out by hand or do computation in your head – even if you can do so easily.  When you are writing code or working on the answer to a programming exericse, you should ask yourself: Would my answer be correct even if the provided variables had different values? If the answer to that question is no, you're probably hard- coding, which you should avoid – and there's probably at least a slightly more concise way to construct your answer!  For example, in this following code, if you're asked in an exercise to create a variable zx and assign it the value of the sum of the value of y and the value of x , writing zx = 55 is hard-coding .   x = 20 y = 35 abc = 62   The operation 20 + 35 may be easy math to do in your head or with a calculator, but when you learn to program, you want to train yourself to notice useful patterns of how to solve problems, which will make your life easier (perhaps beyond programming, even).  The correct way to answer that sort of exercise would be to write: zx = y + x (or zx = x + y , as you were just reminded of the order of operations). That is not hard-coding, and it will be correct no matter what the values of x and y are.  In the code above, if the value of x were 40 , 55 would not be the correct value for zx to have. But zx = y + x would still be absolutely correct.  Try as much as you can not to rely on your brilliant but fallible human brain to do computation when you program – use your brain to determine how to write the correct code to solve the problem for you! That's why we require you to avoid hard -coding for most exercises in this book.  "
},
{
  "id": "p-619",
  "level": "2",
  "url": "simple-python-data_hard-coding.html#p-619",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hard-coding "
},
{
  "id": "simple-python-data_input",
  "level": "1",
  "url": "simple-python-data_input.html",
  "type": "Section",
  "number": "2.15",
  "title": "Input",
  "body": " Input  Our programs get more interesting if they don't do exactly the same thing every time they run. One way to make them more interesting is to get input from the user. Luckily, in Python there is a built-in function to accomplish this task. It is called input .  n = input(\"Please enter your name: \")  The input function allows the programmer to provide a prompt string . In the example above, it is Please enter your name: . When the function is evaluated, the prompt is shown (in the browser, look for a popup window). The user of the program can type some text and press return . When this happens the text that has been entered is returned from the input function, and in this case assigned to the variable n . Run this example a few times and try some different names in the input box that appears.   n = input(\"Please enter your name: \") print(\"Hello\", n)   It is very important to note that the input function returns a string value. Even if you asked the user to enter their age, you would get back a string like \"17\" . It would be your job, as the programmer, to convert that string into an int or a float, using the int or float converter functions we saw earlier.   We often use the word input (or, synonymously, argument) to refer to the values that are passed to any function. Do not confuse that with the input function, which asks the user of a program to type in a value. Like any function, input itself takes an input argument and produces an output. The input is a character string that is displayed as a prompt to the user. The output is whatever character string the user types.  This is analogous to the potential confusion of function outputs with the contents of the output window. Every function produces an output, which is a Python value. Only the print function puts things in the output window. Most functions take inputs, which are Python values. Only the input function invites users to type something.   Here is a program that turns a number of seconds into more human readable counts of hours, minutes, and seconds. A call to input() allows the user to enter the number of seconds. Then we convert that string to an integer. From there we use the division and modulus operators to compute the results.   str_seconds = input(\"Please enter the number of seconds you wish to convert\") total_secs = int(str_seconds) hours = total_secs \/\/ 3600 secs_still_remaining = total_secs % 3600 minutes = secs_still_remaining \/\/ 60 secs_finally_remaining = secs_still_remaining % 60 print(\"Hrs=\", hours, \"mins=\", minutes, \"secs=\", secs_finally_remaining)   The variable str_seconds will refer to the string that is entered by the user. As we said above, even though this string may be 7684 , it is still a string and not a number. To convert it to an integer, we use the int function. The result is referred to by total_secs . Now, each time you run the program, you can enter a new value for the number of seconds to be converted.  Check your understanding   What is printed when the following statements execute?  n = input(\"Please enter your age: \") # user types in 18 print(type(n))     <class 'str'>    All input from users is read in as a string.      <class 'int'>    Even though the user typed in an integer, it does not come into the program as an integer.      <class 18>    18 is the value of what the user typed, not the type of the data.      18    18 is the value of what the user typed, not the type of the data.     "
},
{
  "id": "p-626",
  "level": "2",
  "url": "simple-python-data_input.html#p-626",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "input "
},
{
  "id": "p-627",
  "level": "2",
  "url": "simple-python-data_input.html#p-627",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prompt string "
},
{
  "id": "note-13",
  "level": "2",
  "url": "simple-python-data_input.html#note-13",
  "type": "Note",
  "number": "2.15.1",
  "title": "",
  "body": " We often use the word input (or, synonymously, argument) to refer to the values that are passed to any function. Do not confuse that with the input function, which asks the user of a program to type in a value. Like any function, input itself takes an input argument and produces an output. The input is a character string that is displayed as a prompt to the user. The output is whatever character string the user types.  This is analogous to the potential confusion of function outputs with the contents of the output window. Every function produces an output, which is a Python value. Only the print function puts things in the output window. Most functions take inputs, which are Python values. Only the input function invites users to type something.  "
},
{
  "id": "p-633",
  "level": "2",
  "url": "simple-python-data_input.html#p-633",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question2_16_1",
  "level": "2",
  "url": "simple-python-data_input.html#question2_16_1",
  "type": "Checkpoint",
  "number": "2.15.2",
  "title": "",
  "body": " What is printed when the following statements execute?  n = input(\"Please enter your age: \") # user types in 18 print(type(n))     <class 'str'>    All input from users is read in as a string.      <class 'int'>    Even though the user typed in an integer, it does not come into the program as an integer.      <class 18>    18 is the value of what the user typed, not the type of the data.      18    18 is the value of what the user typed, not the type of the data.    "
},
{
  "id": "simple-python-data_glossary",
  "level": "1",
  "url": "simple-python-data_glossary.html",
  "type": "Section",
  "number": "2.16",
  "title": "Glossary",
  "body": " Glossary    assignment statement  A statement that assigns a value to a name (variable). To the left of the assignment operator, = , is a name. To the right of the assignment token is an expression which is evaluated by the Python interpreter and then assigned to the name. The difference between the left and right hand sides of the assignment statement is often confusing to new programmers. In the following assignment:   n = n + 1   n plays a very different role on each side of the = . On the right it is a value and makes up part of the expression which will be evaluated by the Python interpreter before assigning it to the name on the left.    assignment token  = is Python's assignment token, which should not be confused with the mathematical comparison operator using the same symbol.    boolean expression  An expression that is either true or false.    boolean value  There are exactly two boolean values: True and False . Boolean values result when a boolean expression is evaluated by the Python interepreter. They have type bool .    class  see data type below    comment  Information in a program that is meant for other programmers (or anyone reading the source code) and has no effect on the execution of the program.    data type  A set of values. The type of a value determines how it can be used in expressions. So far, the types you have seen are integers ( int ), floating-point numbers ( float ), and strings ( str ).    decrement  Decrease by 1.    evaluate  To simplify an expression by performing the operations in order to yield a single value.    expression  A combination of operators and operands (variables and values) that represents a single result value. Expressions are evaluated to give that result.    float  A Python data type which stores floating-point numbers. Floating-point numbers are stored internally in two parts: a base and an exponent . When printed in the standard format, they look like decimal numbers. Beware of rounding errors when you use float s, and remember that they are only approximate values.    increment  Both as a noun and as a verb, increment means to increase by 1.    initialization (of a variable)  To initialize a variable is to give it an initial value. Since in Python variables don't exist until they are assigned values, they are initialized when they are created. In other programming languages this is not the case, and variables can be created without being initialized, in which case they have either default or garbage values.    int  A Python data type that holds positive and negative whole numbers.    integer division  An operation that divides one integer by another and yields an integer. Integer division yields only the whole number of times that the numerator is divisible by the denominator and discards any remainder.    keyword  A reserved word that is used by the compiler to parse program; you cannot use keywords like if , def , and while as variable names.    literal  A number or string that is written directly in a program. Sometimes these are also referred to as literal values, or just values, but be careful not to confuse a literal value as written in a program with an internal value maintained by the Python interpreter during execution of a program.    logical operator  One of the operators that combines boolean expressions: and , or , and not .    modulus operator  An operator, denoted with a percent sign ( % ), that works on integers and yields the remainder when one number is divided by another.    object  Also known as a data object (or data value). The fundamental things that programs are designed to manipulate (or that programmers ask to do things for them).    operand  One of the values on which an operator operates.    operator  A special symbol that represents a simple computation like addition, multiplication, or string concatenation.    prompt string  Used during interactive input to provide the use with hints as to what type of value to enter.    reference diagram  A picture showing a variable with an arrow pointing to the value (object) that the variable refers to. See also state snapshot .    rules of precedence  The set of rules governing the order in which expressions involving multiple operators and operands are evaluated.    state snapshot  A graphical representation of a set of variables and the values to which they refer, taken at a particular instant during the program's execution.    statement  An instruction that the Python interpreter can execute. So far we have only seen the assignment statement, but we will soon meet the import statement and the for statement.    str  A Python data type that holds a string of characters.    type conversion function  A function that can convert a data value from one type to another.    value  A number or string (or other things to be named later) that can be stored in a variable or computed in an expression.    variable  A name that refers to a value.    variable name  A name given to a variable. Variable names in Python consist of a sequence of letters (a..z, A..Z, or _) and digits (0..9) that begins with a letter. In best programming practice, variable names should be chosen so that they describe their use in the program, making the program self documenting .    "
},
{
  "id": "p-648",
  "level": "2",
  "url": "simple-python-data_glossary.html#p-648",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "data type "
},
{
  "id": "p-657",
  "level": "2",
  "url": "simple-python-data_glossary.html#p-657",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "whole "
},
{
  "id": "p-667",
  "level": "2",
  "url": "simple-python-data_glossary.html#p-667",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "state snapshot "
},
{
  "id": "simple-python-data_chapter-assessment",
  "level": "1",
  "url": "simple-python-data_chapter-assessment.html",
  "type": "Section",
  "number": "2.17",
  "title": "Chapter Assessment",
  "body": " Chapter Assessment   Check your understanding    There is a function we are providing in for you in this problem called square . It takes one integer and returns the square of that integer value. Write code to assign a variable called xyz the value 5*5 (five squared). Use the square function, rather than just multiplying with * .   xyz = \"\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(type(xyz), type(3), \"Checking type of xyz\") self.assertEqual(xyz, 25, \"Checking if xyz is 25\") self.assertIn('square', self.getEditorText(), \"Testing that 'square' is in your code. (Don't worry about Actual and Expected Values.)\") myTests().main()    Write code to assign the number of characters in the string rv to a variable num_chars .   rv = \"\"\"Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten lore, While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my chamber door. 'Tis some visitor, I muttered, tapping at my chamber door; Only this and nothing more.\"\"\" # Write your code here! ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_chars, len(rv), \"Testing that num_chars has been set to the length of rv\") myTests().main()    The code below initializes two variables, z and y . We want to assign the total number of characters in z and in y to the variable a . Which of the following solutions, if any, would be considered hard coding?   z = \"hello world\" y = \"welcome!\"      a = len(\"hello worldwelcome!\")    Though we are using the len function here, we are hardcoding what len should return the length of. We are not referencing z or y.      a = 11 + 8    This is hardcoding, we are writing in the value without referencing z or y.      a = len(z) + len(y)    This is not considered hard coding. We are using the function len to determine the length of what is stored in z and y, which is a correct way to approach this problem.      a = len(\"hello world\") + len(\"welcome!\")    Though we are using the len function here, we are hardcoding what len should return the length of each time we call len. We are not referencing z or y.      none of the above are hardcoding.    At least one of these solutions is considered hardcoding. Take another look.      (This is not an assessment question) The code below defines functions used by one of the questions above. Do not modify the code, but feel free to take a look.   def square(num: int) -> int: return num**2   "
},
{
  "id": "p-677",
  "level": "2",
  "url": "simple-python-data_chapter-assessment.html#p-677",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "assess_ps_01_01",
  "level": "2",
  "url": "simple-python-data_chapter-assessment.html#assess_ps_01_01",
  "type": "Checkpoint",
  "number": "2.17.1",
  "title": "",
  "body": " There is a function we are providing in for you in this problem called square . It takes one integer and returns the square of that integer value. Write code to assign a variable called xyz the value 5*5 (five squared). Use the square function, rather than just multiplying with * .   xyz = \"\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(type(xyz), type(3), \"Checking type of xyz\") self.assertEqual(xyz, 25, \"Checking if xyz is 25\") self.assertIn('square', self.getEditorText(), \"Testing that 'square' is in your code. (Don't worry about Actual and Expected Values.)\") myTests().main()  "
},
{
  "id": "assess_ps_01_02",
  "level": "2",
  "url": "simple-python-data_chapter-assessment.html#assess_ps_01_02",
  "type": "Checkpoint",
  "number": "2.17.2",
  "title": "",
  "body": " Write code to assign the number of characters in the string rv to a variable num_chars .   rv = \"\"\"Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten lore, While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my chamber door. 'Tis some visitor, I muttered, tapping at my chamber door; Only this and nothing more.\"\"\" # Write your code here! ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_chars, len(rv), \"Testing that num_chars has been set to the length of rv\") myTests().main()  "
},
{
  "id": "assess_question1_1_1_3",
  "level": "2",
  "url": "simple-python-data_chapter-assessment.html#assess_question1_1_1_3",
  "type": "Checkpoint",
  "number": "2.17.3",
  "title": "",
  "body": " The code below initializes two variables, z and y . We want to assign the total number of characters in z and in y to the variable a . Which of the following solutions, if any, would be considered hard coding?   z = \"hello world\" y = \"welcome!\"      a = len(\"hello worldwelcome!\")    Though we are using the len function here, we are hardcoding what len should return the length of. We are not referencing z or y.      a = 11 + 8    This is hardcoding, we are writing in the value without referencing z or y.      a = len(z) + len(y)    This is not considered hard coding. We are using the function len to determine the length of what is stored in z and y, which is a correct way to approach this problem.      a = len(\"hello world\") + len(\"welcome!\")    Though we are using the len function here, we are hardcoding what len should return the length of each time we call len. We are not referencing z or y.      none of the above are hardcoding.    At least one of these solutions is considered hardcoding. Take another look.    "
},
{
  "id": "assess_addl_functions",
  "level": "2",
  "url": "simple-python-data_chapter-assessment.html#assess_addl_functions",
  "type": "Checkpoint",
  "number": "2.17.4",
  "title": "",
  "body": " (This is not an assessment question) The code below defines functions used by one of the questions above. Do not modify the code, but feel free to take a look.   def square(num: int) -> int: return num**2  "
},
{
  "id": "debugging_introduction-to-debugging",
  "level": "1",
  "url": "debugging_introduction-to-debugging.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Debugging",
  "body": " Introduction to Debugging  The art of debugging is figuring out what you really told your program to do rather than what you thought you told it to do.  — Andrew Singer  This chapter will spend some time talking about what happens when errors occur as well as how to fix the errors that you will inevitably come across.  Before computers became digital, debugging could mean looking for insects impeding the functioning of physical relays as in this somewhat apocryphal tale about Admiral Grace Hopper , a pioneer of computer programming.  Nowadays, debugging doesn't involve bug guts all over your computer but it can still be just as frustrating. To cope with this frustration, this chapter will present some strategies to help you understand why the program you wrote does not behave as intended.  Many people think debugging is some kind of punishment for not being smart enough to write code correctly the first time. But nobody does that, failure in programming is part of the deal. Here's a fun video to keep in mind as you learn to program.   CC BY–NC–ND 4.0 International Ted.com   Learning Goals     To understand good programming strategies to avoid errors    To understand common kinds of exceptions and their likely causes       Objectives     Given a piece of code identify the Syntax errors based on error messages    Given a piece of code find the (ValueError, TypeError, SyntaxError, ParseError, NameError)      "
},
{
  "id": "debugging_beginning-tips-for-debugging",
  "level": "1",
  "url": "debugging_beginning-tips-for-debugging.html",
  "type": "Section",
  "number": "3.2",
  "title": "Beginning tips for Debugging",
  "body": " Beginning tips for Debugging  Debugging a program is a different way of thinking than writing a program. The process of debugging is much more like being a detective. Here are a few rules to get you thinking about debugging.     Everyone is a suspect (Except Python)! It's common for beginner programmers to blame Python, but that should be your last resort. Remember that Python has been used to solve CS1 level problems millions of times by millions of other programmers. So, Python is probably not the problem.    Check your assumptions. At this point in your career you are still developing your mental model of how Python does its work. Its natural to think that your code is correct, but with debugging you need to make your code the primary suspect. Even if you think it is right, you should verify that it really is by liberally using print statements to verify that the values of variables really are what you think they should be. You'll be surprised how often they are not.    Find clues. This is the biggest job of the detective and right now there are two important kinds of clues for you to understand.     Error Messages    Print Statements        Three kinds of errors can occur in a program: syntax errors , runtime errors , and semantic errors . It is useful to distinguish between them in order to track them down more quickly.  "
},
{
  "id": "debugging_syntax-errors",
  "level": "1",
  "url": "debugging_syntax-errors.html",
  "type": "Section",
  "number": "3.3",
  "title": "Syntax errors",
  "body": " Syntax errors  Python can only execute a program if the program is syntactically correct; otherwise, the process fails and returns an error message. Syntax refers to the structure of a program and the rules about that structure. For example, in English, a sentence must begin with a capital letter and end with a period. this sentence contains a syntax error . So does this one  In Python, rules of syntax include requirements like these: strings must be enclosed in quotes; statements must generally be written one per line; the print statement must enclose the value to be displayed in parenthesis; expressions must be correctly formed. The following lines contain syntax errors:  print(Hello, world!) print \"Hello, world!\" print(5 + )  For most readers of English, a few syntax errors are not a significant problem, which is why we can read the poetry of e. e. cummings without problems. Python is not so forgiving. When you run a Python program, the interpreter checks it for syntax errors before beginning to execute the first statement. If there is a single syntax error anywhere in your program, Python will display an error message and quit without executing any of the program.  To see a syntax error in action, look at the following program. Can you spot the error? After locating the error, run the program to see the error message.   print(\"Hello, World!\") print(5 + ) print(\"All finished!\")   Notice the following:     The error message clearly indicates that the problem is a SyntaxError . This lets you know the problem is not one of the other two types of errors we'll discuss shortly.    The error is on line 2 of the program. However, even though there is nothing wrong with line 1, the print statement does not execute — none of the program successfully executes because of the presence of just one syntax error.    The error gives the line number where Python believes the error exists. In this case, the error message pinpoints the location correctly. But in other cases, the line number can be inaccurate or entirely missing.  To see an example of the latter, try removing just the right parenthesis ) from line 2 and running the program again. Notice how the error message gives no line number at all. With syntax errors, you need to be prepared to hunt around a bit in order to locate the trouble.     One aspect of syntax you have to watch out for in Python involves indentation. Python requires you to begin all statements at the beginning of the line, unless you are using a flow control statement like a for or an if statement (we'll discuss these soon… stay tuned!). To see an example of this kind of problem, modify the program above by inserting a couple of spaces at the beginning of one of the lines.   Check your understanding    Which of the following is a syntax error?     Attempting to divide by 0.    A syntax error is an error in the structure of the python code that can be detected before the program is executed. Python cannot usually tell if you are trying to divide by 0 until it is executing your program (e.g., you might be asking the user for a value and then dividing by that value—you cannot know what value the user will enter before you run the program).      Forgetting a colon at the end of a statement where one is required.    This is a problem with the formal structure of the program. Python knows where colons are required and can detect when one is missing simply by looking at the code without running it.      Forgetting to divide by 100 when printing a percentage amount.    This will produce the wrong answer, but Python will not consider it an error at all. The programmer is the one who understands that the answer produced is wrong.      Who or what typically finds syntax errors?     The programmer.    Programmers rarely find all the syntax errors, there is a computer program that will do it for us.      The compiler \/ interpreter.    The compiler and \/ or interpreter is a computer program that determines if your program is written in a way that can be translated into machine language for execution.      The computer.    Well, sort of. But it is a special thing in the computer that does it. The stand alone computer without this additional piece can not do it.      The teacher \/ instructor.    Your teacher and instructor may be able to find most of your syntax errors, but only because they have experience looking at code and possibly writing code. With experience syntax errors are easier to find. But we also have an automated way of finding these types of errors.     "
},
{
  "id": "p-714",
  "level": "2",
  "url": "debugging_syntax-errors.html#p-714",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Syntax syntax error "
},
{
  "id": "p-719",
  "level": "2",
  "url": "debugging_syntax-errors.html#p-719",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "none right "
},
{
  "id": "p-725",
  "level": "2",
  "url": "debugging_syntax-errors.html#p-725",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question3_3_1",
  "level": "2",
  "url": "debugging_syntax-errors.html#question3_3_1",
  "type": "Checkpoint",
  "number": "3.3.1",
  "title": "",
  "body": " Which of the following is a syntax error?     Attempting to divide by 0.    A syntax error is an error in the structure of the python code that can be detected before the program is executed. Python cannot usually tell if you are trying to divide by 0 until it is executing your program (e.g., you might be asking the user for a value and then dividing by that value—you cannot know what value the user will enter before you run the program).      Forgetting a colon at the end of a statement where one is required.    This is a problem with the formal structure of the program. Python knows where colons are required and can detect when one is missing simply by looking at the code without running it.      Forgetting to divide by 100 when printing a percentage amount.    This will produce the wrong answer, but Python will not consider it an error at all. The programmer is the one who understands that the answer produced is wrong.    "
},
{
  "id": "question3_3_2",
  "level": "2",
  "url": "debugging_syntax-errors.html#question3_3_2",
  "type": "Checkpoint",
  "number": "3.3.2",
  "title": "",
  "body": " Who or what typically finds syntax errors?     The programmer.    Programmers rarely find all the syntax errors, there is a computer program that will do it for us.      The compiler \/ interpreter.    The compiler and \/ or interpreter is a computer program that determines if your program is written in a way that can be translated into machine language for execution.      The computer.    Well, sort of. But it is a special thing in the computer that does it. The stand alone computer without this additional piece can not do it.      The teacher \/ instructor.    Your teacher and instructor may be able to find most of your syntax errors, but only because they have experience looking at code and possibly writing code. With experience syntax errors are easier to find. But we also have an automated way of finding these types of errors.    "
},
{
  "id": "debugging_runtime-errors",
  "level": "1",
  "url": "debugging_runtime-errors.html",
  "type": "Section",
  "number": "3.4",
  "title": "Runtime Errors",
  "body": " Runtime Errors  The second type of error is a runtime error . A program with a runtime error is one that passed the interpreter's syntax checks, and started to execute. However, during the execution of one of the statements in the program, an error occurred that caused the interpreter to stop executing the program and display an error message. Runtime errors are also called exceptions because they usually indicate that something exceptional (and bad) has happened.  Here are some examples of common runtime errors you are sure to encounter:     Misspelled or incorrectly capitalized variable and function names    Attempts to perform operations (such as math operations) on data of the wrong type (ex. attempting to subtract two variables that hold string values)    Dividing by zero    Attempts to use a type conversion function such as int on a value that can't be converted to an int     The following program contains various runtime errors. Can you spot any of them? After locating the error, run the program to see the error message.   subtotal = input(\"Enter total before tax:\") tax = .08 * subTotal print(\"tax on\", subtotal, \"is:\", tax)   Notice the following important differences between syntax errors and runtime errors that can help you as you try to diagnose and repair the problem:     If the error message mentions SyntaxError , you know that the problem has to do with syntax: the structure of the code, the punctuation, etc.    If the program runs partway and then crashes, you know the problem is a runtime error. Programs with syntax errors don't execute even one line.     Stay tuned for more details on the various types of runtime errors. We have a whole section of this chapter dedicated to that topic.   Check your understanding    Which of the following is a run-time error?     Attempting to divide by 0.    Python cannot reliably tell if you are trying to divide by 0 until it is executing your program (e.g., you might be asking the user for a value and then dividing by that value—you cannot know what value the user will enter before you run the program).      Forgetting a colon at the end of a statement where one is required.    This is a problem with the formal structure of the program. Python knows where colons are required and can detect when one is missing simply by looking at the code without running it.      Forgetting to divide by 100 when printing a percentage amount.    This will produce the wrong answer, but Python will not consider it an error at all. The programmer is the one who understands that the answer produced is wrong.      Who or what typically finds runtime errors?     The programmer.    Programmers rarely find all the runtime errors, there is a computer program that will do it for us.      The interpreter.    If an instruction is illegal to perform at that point in the execution, the interpreter will stop with a message describing the exception.      The computer.    Well, sort of. But it is a special thing in the computer that does it. The stand alone computer without this additional piece can not do it.      The teacher \/ instructor.    Your teacher and instructor may be able to find most of your runtime errors, but only because they have experience looking at code and possibly writing code. With experience runtime errors are easier to find. But we also have an automated way of finding these types of errors.     "
},
{
  "id": "p-742",
  "level": "2",
  "url": "debugging_runtime-errors.html#p-742",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "runtime error exceptions "
},
{
  "id": "p-755",
  "level": "2",
  "url": "debugging_runtime-errors.html#p-755",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question3_4_1",
  "level": "2",
  "url": "debugging_runtime-errors.html#question3_4_1",
  "type": "Checkpoint",
  "number": "3.4.1",
  "title": "",
  "body": " Which of the following is a run-time error?     Attempting to divide by 0.    Python cannot reliably tell if you are trying to divide by 0 until it is executing your program (e.g., you might be asking the user for a value and then dividing by that value—you cannot know what value the user will enter before you run the program).      Forgetting a colon at the end of a statement where one is required.    This is a problem with the formal structure of the program. Python knows where colons are required and can detect when one is missing simply by looking at the code without running it.      Forgetting to divide by 100 when printing a percentage amount.    This will produce the wrong answer, but Python will not consider it an error at all. The programmer is the one who understands that the answer produced is wrong.    "
},
{
  "id": "question3_4_2",
  "level": "2",
  "url": "debugging_runtime-errors.html#question3_4_2",
  "type": "Checkpoint",
  "number": "3.4.2",
  "title": "",
  "body": " Who or what typically finds runtime errors?     The programmer.    Programmers rarely find all the runtime errors, there is a computer program that will do it for us.      The interpreter.    If an instruction is illegal to perform at that point in the execution, the interpreter will stop with a message describing the exception.      The computer.    Well, sort of. But it is a special thing in the computer that does it. The stand alone computer without this additional piece can not do it.      The teacher \/ instructor.    Your teacher and instructor may be able to find most of your runtime errors, but only because they have experience looking at code and possibly writing code. With experience runtime errors are easier to find. But we also have an automated way of finding these types of errors.    "
},
{
  "id": "debugging_semantic-errors",
  "level": "1",
  "url": "debugging_semantic-errors.html",
  "type": "Section",
  "number": "3.5",
  "title": "Semantic Errors",
  "body": " Semantic Errors  The third type of error is the semantic error , also called a logic error . If there is a semantic error in your program, it will run successfully in the sense that the computer will not generate any error messages. However, your program will not do the right thing. It will do something else. Specifically, it will do what you told it to do, not what you wanted it to do.  The following program has a semantic error. Execute it to see what goes wrong:   num1 = input('Enter a number:') num2 = input('Enter another number:') sum = num1 + num2 print('The sum of', num1, 'and', num2, 'is', sum)   This program runs and produces a result. However, the result is not what the programmer intended. It contains a semantic error. The error is that the program performs concatenation instead of addition, because the programmer failed to write the code necessary to convert the inputs to integers.  With semantic errors, the problem is that the program you wrote is not the program you wanted to write. The meaning of the program (its semantics) is wrong. The computer is faithfully carrying out the instructions you wrote, and its results are correct, given the instructions that you provided. However, because your instructions have a flaw in their design, the program does not behave as desired.  Identifying semantic errors can be tricky because no error message appears to make it obvious that the results are incorrect. The only way you can detect semantic errors is if you know in advance what the program should do for a given set of input. Then, you run the program with that input data and compare the output of the program with what you expect. If there is a discrepancy between the actual output and the expected output, you can conclude that there is either 1) a semantic error or 2) an error in your expected results.  Once you've determined that you have a semantic error, locating it can be tricky because you must work backward by looking at the output of the program and trying to figure out what it is doing.   Test Cases  To detect a semantic error in your program, you need the help of something called a test case.   Test Case  A test case is a set of input values for the program, together with the output that you expect the program should produce when it is run with those particular inputs.   Here is an example of a test case for the program above:  Test Case --------- Input: 2, 3 Expected Output: 5  If you give this test case to someone and ask them to test the program, they can type in the inputs, observe the output, check it against the expected output, and determine whether a semantic error exists based on whether the actual output matches the expected output or not. The tester doesn't even have to know what the program is supposed to do. For this reason, software companies often have separate quality assurance departments whose responsibility is to check that the programs written by the programmers perform as expected. The testers don't have to be programmers; they just have to be able to operate the program and compare its results with the test cases they're given.  In this case, the program is so simple that we don't need to write down a test case at all; we can compute the expected output in our heads with very little effort. More complicated programs require effort to create the test case (since you shouldn't use the program to compute the expected output; you have to do it with a calculator or by hand), but the effort pays off when the test case helps you to identify a semantic error that you didn't know existed.  Semantic errors are the most dangerous of the three types of errors, because in some cases they are not noticed by either the programmers or the users who use the program. Syntax errors cannot go undetected (the program won't run at all if they exist), and runtime errors are usually also obvious and typically detected by developers before a program is released for use (although it is possible for a runtime error to occur for some inputs and not for others, so these can sometimes remain undetected for a while). However, programs often go for years with undetected semantic errors; no one realizes that the program has been producing incorrect results. They just assume that because the results seem reasonable, they are correct. Sometimes, these errors are relatively harmless. But if they involve financial transactions or medical equipment, the results can be harmful or even deadly. For this reason, creating test cases is an important part of the work that programmers perform in order to help them produce programs that work correctly.   Check your understanding    Which of the following is a semantic error?     Attempting to divide by 0.    A semantic error is an error in logic. In this case the program does not produce the correct output because the problem is not solved correctly. This would be considered a run-time error.      Forgetting a semi-colon at the end of a statement where one is required.    A semantic error is an error in logic. In this case the program does not produce the correct output because the code can not be processed by the compiler or interpreter. This would be considered a syntax error.      Forgetting to divide by 100 when printing a percentage amount.    This will produce the wrong answer because the programmer implemented the solution incorrectly. This is a semantic error.      Who or what typically finds semantic errors?     The programmer.    You must fully understand the problem so the you can tell if your program properly solves it.      The compiler \/ interpreter.    The compiler and \/ or interpreter will only do what you instruct it to do. It does not understand what the problem is that you want to solve.      The computer.    The computer does not understand your problem. It just executes the instructions that it is given.      The teacher \/ instructor.    Your teacher and instructor may be able to find most of your semantic errors, but only because they have experience solving problems. However it is your responsibility to understand the problem so you can develop a correct solution.      "
},
{
  "id": "p-772",
  "level": "2",
  "url": "debugging_semantic-errors.html#p-772",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "semantic error logic error told wanted "
},
{
  "id": "note-14",
  "level": "2",
  "url": "debugging_semantic-errors.html#note-14",
  "type": "Note",
  "number": "3.5.1",
  "title": "Test Case.",
  "body": " Test Case  A test case is a set of input values for the program, together with the output that you expect the program should produce when it is run with those particular inputs.  "
},
{
  "id": "p-784",
  "level": "2",
  "url": "debugging_semantic-errors.html#p-784",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question3_5_1",
  "level": "2",
  "url": "debugging_semantic-errors.html#question3_5_1",
  "type": "Checkpoint",
  "number": "3.5.2",
  "title": "",
  "body": " Which of the following is a semantic error?     Attempting to divide by 0.    A semantic error is an error in logic. In this case the program does not produce the correct output because the problem is not solved correctly. This would be considered a run-time error.      Forgetting a semi-colon at the end of a statement where one is required.    A semantic error is an error in logic. In this case the program does not produce the correct output because the code can not be processed by the compiler or interpreter. This would be considered a syntax error.      Forgetting to divide by 100 when printing a percentage amount.    This will produce the wrong answer because the programmer implemented the solution incorrectly. This is a semantic error.    "
},
{
  "id": "question3_5_2",
  "level": "2",
  "url": "debugging_semantic-errors.html#question3_5_2",
  "type": "Checkpoint",
  "number": "3.5.3",
  "title": "",
  "body": " Who or what typically finds semantic errors?     The programmer.    You must fully understand the problem so the you can tell if your program properly solves it.      The compiler \/ interpreter.    The compiler and \/ or interpreter will only do what you instruct it to do. It does not understand what the problem is that you want to solve.      The computer.    The computer does not understand your problem. It just executes the instructions that it is given.      The teacher \/ instructor.    Your teacher and instructor may be able to find most of your semantic errors, but only because they have experience solving problems. However it is your responsibility to understand the problem so you can develop a correct solution.    "
},
{
  "id": "debugging_know-your-error-messages",
  "level": "1",
  "url": "debugging_know-your-error-messages.html",
  "type": "Section",
  "number": "3.6",
  "title": "Know Your Error Messages",
  "body": " Know Your Error Messages  Many problems in your program will lead to an error message. For example as I was writing and testing this chapter of the book I wrote the following version of the example program in the previous section.   current_time_str = input(\"What is the current time (in hours 0-23)?\") wait_time_str = input(\"How many hours do you want to wait\") current_time_int = int(current_time_str) wait_time_int = int(wait_time_int) final_time_int = current_time_int + wait_time_int print(final_time_int)   Can you see what is wrong, just by looking at the code? Maybe, maybe not. Our brain tends to see what we think is there, so sometimes it is very hard to find the problem just by looking at the code. Especially when it is our own code and we are sure that we have done everything right!  Let's try the program again, but this time in an activecode:   current_time_str = input(\"What is the current time (in hours 0-23)?\") wait_time_str = input(\"How many hours do you want to wait\") current_time_int = int(current_time_str) wait_time_int = int(wait_time_int) final_time_int = current_time_int + wait_time_int print(final_time_int)   Aha! Now we have an error message that might be useful. The name error tells us that wait_time_int is not defined. It also tells us that the error is on line 5. That's really useful information. Now look at line five and you will see that wait_time_int is used on both the left and the right hand side of the assignment statement.   The error descriptions you see in activecode may be different (and more understandable!) than in a regular Python interpreter. The interpreter in activecode is limited in many ways, but it is intended for beginners, including the wording chosen to describe errors.    Which of the following explains why wait_time_int = int(wait_time_int) is an error?     You cannot use a variable on both the left and right hand sides of an assignment statement.    No, You can, as long as all the variables on the right hand side already have values.      wait_time_int does not have a value so it cannot be used on the right hand side.    Yes. Variables must already have values in order to be used on the right hand side.      This is not really an error, Python is broken.    No, No, No!     In writing and using this book over the last few years we have collected a lot of statistics about the programs in this book. Here are some statistics about error messages for the exercises in this book.   Nearly 90% of the error messages encountered for this problem are SyntaxError, TypeError, NameError, ValueError, or AttributeError. We will look at these errors in three stages:     First we will define what these four error messages mean.    Then, we will look at some examples that cause these errors to occur.    Finally we will look at ways to help uncover the root cause of these messages.      SyntaxError  Syntax errors happen when you make an error in the syntax of your program. Syntax errors are like making grammatical errors in writing. If you don't use periods and commas in your writing then you are making it hard for other readers to figure out what you are trying to say. Similarly Python has certain grammatical rules that must be followed or else Python can't figure out what you are trying to say.  Usually SyntaxErrors can be traced back to missing punctuation characters, such as parentheses, quotation marks, or commas. Remember that in Python commas are used to separate parameters to functions. Paretheses must be balanced, or else Python thinks that you are trying to include everything that follows as a parameter to some function.  Here are a couple examples of Syntax errors in the example program we have been using. See if you can figure out what caused them.  current_time_str = input(\"What is the current time (in hours 0-23)?\") wait_time_str = input(\"How many hours do you want to wait\" current_time_int = int(current_time_str) wait_time_int = int(wait_time_str) final_time_int = current_time_int + wait_time_int print(final_time_int) Since the error message points us to line 4 this might be a bit confusing. If you look at line four carefully you will see that there is no problem with the syntax. So, in this case the next step should be to back up and look at the previous line. In this case if you look at line 2 carefully you will see that there is a missing right parenthesis at the end of the line. Remember that parentheses must be balanced. Since Python allows statements to continue over multiple lines inside parentheses python will continue to scan subsequent lines looking for the balancing right parenthesis. However in this case it finds the name current_time_int and it will want to interpret that as another parameter to the input function. But, there is not a comma to separate the previous string from the variable so as far as Python is concerned the error here is a missing comma. From your perspective its a missing parenthesis.  current_time_str = input(\"What is the current time (in hours 0-23)?\") wait_time_str = input(\"How many hours do you want to wait\") current_time_int = int(current_time_str) wait_time_int = int(wait_time_str final_time_int = current_time_int + wait_time_int print(final_time_int)   Since the error message points us to line 4 this might be a bit confusing. If you look at line four carefully you will see that there is no problem with the syntax. So, in this case the next step should be to back up and look at the previous line. In this case if you look at line 2 carefully you will see that there is a missing right parenthesis at the end of the line. Remember that parentheses must be balanced. Since Python allows statements to continue over multiple lines inside parentheses python will continue to scan subsequent lines looking for the balancing right parenthesis. However in this case it finds the name current_time_int and it will want to interpret that as another parameter to the input function. But, there is not a comma to separate the previous string from the variable so as far as Python is concerned the error here is a missing comma. From your perspective its a missing parenthesis.   Finding Clues How can you help yourself find these problems? One trick that can be very valuable in this situation is to simply start by commenting out the line number that is flagged as having the error. If you comment out line four, the error message now changes to point to line 5. Now you ask yourself, am I really that bad that I have two lines in a row that have errors on them? Maybe, so taken to the extreme, you could comment out all of the remaining lines in the program. Now the error message changes to TokenError: EOF in multi-line statement This is a very technical way of saying that Python got to the end of file (EOF) while it was still looking for something. In this case a right parenthesis.  current_time_str = input(\"What is the \"current time\" (in hours 0-23)?\") wait_time_str = input(\"How many hours do you want to wait\") current_time_int = int(current_time_str) wait_time_int = int(wait_time_str) final_time_int = current_time_int + wait_time_int print(final_time_int) The error message points you to line 1 and in this case that is exactly where the error occurs. In this case your biggest clue is to notice the difference in highlighting on the line. Notice that the words current time are a different color than those around them. Why is this? Because current time is in double quotes inside another pair of double quotes Python thinks that you are finishing off one string, then you have some other names and finally another string. But you haven't separated these names or strings by commas, and you haven't added them together with the concatenation operator (+). So, there are several corrections you could make. First you could make the argument to input be as follows: \"What is the 'current time' (in hours 0-23) \" Notice that here we have correctly used single quotes inside double quotes . Another option is to simply remove the extra double quotes. Why were you quoting current time anyway? \"What is the current time (in hours 0-23)\"  current_time_str = input(\"What is the \"current time\" (in hours 0-23)?\") wait_time_str = input(\"How many hours do you want to wait\") current_time_int = int(current_time_str) wait_time_int = int(wait_time_str) final_time_int = current_time_int + wait_time_int print(final_time_int)   The error message points you to line 1 and in this case that is exactly where the error occurs. In this case your biggest clue is to notice the difference in highlighting on the line. Notice that the words current time are a different color than those around them. Why is this? Because current time is in double quotes inside another pair of double quotes Python thinks that you are finishing off one string, then you have some other names and finally another string. But you haven't separated these names or strings by commas, and you haven't added them together with the concatenation operator (+). So, there are several corrections you could make. First you could make the argument to input be as follows: \"What is the 'current time' (in hours 0-23) \" Notice that here we have correctly used single quotes inside double quotes . Another option is to simply remove the extra double quotes. Why were you quoting current time anyway? \"What is the current time (in hours 0-23)\"   Finding Clues If you follow the same advice as for the last problem, comment out line one, you will immediately get a different error message. Here's where you need to be very careful and not panic. The error message you get now is: NameError: name 'current_time_str' is not defined on line 4 . You might be very tempted to think that this is somehow related to the earlier problem and immediately conclude that there is something wrong with the variable name current_time_str but if you reflect for a minute you will see that by commenting out line one you have caused a new and unrelated error. That is you have commented out the creation of the name current_time_str . So of course when you want to convert it to an int you will get the NameError. Yes, this can be confusing, but it will become much easier with experience. It's also important to keep calm, and evaluate each new clue carefully so you don't waste time chasing problems that are not really there.  Uncomment line 1 and you are back to the SyntaxError. Another track is to eliminate a possible source of error. Rather than commenting out the entire line you might just try to assign current_time_str to a constant value. For example you might make line one look like this: current_time_str = \"10\" #input(\"What is the \"current time\" (in hours 0-23)?\") . Now you have assigned current_time_str to the string 10, and commented out the input statement. And now the program works! So you conclude that the problem must have something to do with the input function.    TypeError  TypeErrors occur when you you try to combine two objects that are not compatible. For example you try to add together an integer and a string. Usually type errors can be isolated to lines that are using mathematical operators, and usually the line number given by the error message is an accurate indication of the line.  Here's an example of a type error created by a Polish learner. See if you can find and fix the error.   a = input('wpisz godzine') x = input('wpisz liczbe godzin') int(x) int(a) h = x \/\/ 24 s = x % 24 print (h, s) a = a + s print ('godzina teraz', a)     Solution  In finding this error there are few lessons to think about. First, you may find it very disconcerting that you cannot understand the whole program. Unless you speak Polish then this won't be an issue. But, learning what you can ignore, and what you need to focus on is a very important part of the debugging process. Second, types and good variable names are important and can be very helpful. In this case a and x are not particularly helpful names, and in particular they do not help you think about the types of your variables, which as the error message implies is the root of the problem here. The rest of the lessons we will get back to in a minute.  The error message provided to you gives you a pretty big hint. TypeError: unsupported operand type(s) for FloorDiv: 'str' and 'number' on line: 5 On line five we are trying to use integer division on x and 24. The error message tells you that you are tyring to divide a string by a number. In this case you know that 24 is a number so x must be a string. But how? You can see the function call on line 3 where you are converting x to an integer. int(x) or so you think. This is lesson three and is one of the most common errors we see in introductory programming. What is the difference between int(x) and x = int(x)     The expression int(x) converts the string referenced by x to an integer but it does not store it anywhere. It is very common to assume that int(x) somehow changes x itself, as that is what you are intending! The thing that makes this very tricky is that int(x) is a valid expression, so it doesn't cause any kind of error, but rather the error happens later on in the program.    The assignment statement x = int(x) is very different. Again, the int(x) expression converts the string referenced by x to an integer, but this time it also changes what x references so that x now refers to the integer value returned by the int function.     So, the solution to this problem is to change lines 3 and 4 so they are assignment statements.    Finding Clues One thing that can help you in this situation is to print out the values and the types of the variables involved in the statement that is causing the error. You might try adding a print statement after line 4 print(x, type(x)) You will see that at least we have confirmed that x is of type string. Now you need to start to work backward through the program. You need to ask yourself, where is x used in the program? x is used on lines 2, 3, and of course 5 and 6 (where we are getting an error). So maybe you move the print statement to be after line 2 and again after 3. Line 3 is where you expect the value of x to be changed to an integer. Could line 4 be mysteriously changing x back to a string? Not very likely. So the value and type of x is just what you would expect it to be after line 2, but not after line 3. This helps you isolate the problem to line 3. In fact if you employ one of our earlier techniques of commenting out line 3 you will see that this has no impact on the error, and is a big clue that line 3 as it is currently written is useless.    NameError  Name errors almost always mean that you have used a variable before it has a value. Often NameErrors are simply caused by typos in your code. They can be hard to spot if you don't have a good eye for catching spelling mistakes. Other times you may simply mis-remember the name of a variable or even a function you want to call. You have seen one example of a NameError at the beginning of this section. Here is another one. See if you can get this program to run successfully:   str_time = input(\"What time is it now?\") str_wait_time = input(\"What is the number of hours to wait?\") time = int(str_time) wai_time = int(str_wait_time) time_when_alarm_go_off = time + wait_time print(time_when_alarm_go_off)     Solution  In this example, the student seems to be a fairly bad speller, as there are a number of typos to fix. The first one is identified as wait_time is not defined on line 6. Now in this example you can see that there is str_wait_time on line 2, and wai_time on line 4 and wait_time on line 6. If you do not have very sharp eyes its easy to miss that there is a typo on line 4.    Finding Clues With name errors one of the best things you can do is use the editor, or browser search function. Quite often if you search for the exact word in the error message one of two things will happen:  1. The word you are searching for will appear only once in your code, it's also likely that it will be on the right hand side of an assignment statement, or as a parameter to a function. That should confirm for you that you have a typo somewhere. If the name in question is what you thought it should be then you probably have a typo on the left hand side of an assignment statement on a line before your error message occurs. Start looking backward at your assignment statements. In some cases it's really nice to leave all the highlighted strings from the search function visible as they will help you very quickly find a line where you might have expected your variable to be highlighted.  2. The second thing that may happen is that you will be looking directly at a line where you expected the search to find the string in question, but it will not be highlighted. Most often that will be the typo right there.  Here is another one for you to try:   n = input(\"What time is it now (in hours)?\") n = imt(n) m = input(\"How many hours do you want to wait?\") m = int(m) sum_time = n + m time_of_day = sum_time % 12 print(\"The time is now\", time_of_day)     Solution  This one is once again a typo, but the typo is not in a variable name, but rather, the name of a function. The search strategy would help you with this one easily, but there is another clue for you as well. The editor in the textbook, as well as almost all Python editors in the world provide you with color clues. Notice that on line 2 the function imt is not highlighted blue like the word int on line 4.    And one last bit of code to fix.   present_time = input(\"Enter the present timein hours:\") set_alarm = input(\"Set the hours for alarm:\") int (present_time, set_time, alarm_time) alarm_time = present_time + set_alarm print(alarm_time)     Solution  In this example the error message is about set_time not defined on line 3. In this case the undefined name is not used in an assignment statement, but is used as a parameter (incorrectly) to a function call. A search on set_time reveals that in fact it is only used once in the program. Did the author mean set_alarm ? If we make that assumption we immediately get another error NameError: name 'alarm_time' is not defined on line: 3 . The variable alarm_time is defined on line 4, but that does not help us on line 3. Furthermore we now have to ask the question is this function call int(present_time, set_alarm, alarm_time) even the correct use of the int function? The answer to that is a resounding no. Let's list all of the things wrong with line 3:     set_time is not defined and never used, the author probably meant set_alarm .    alarm_time cannot be used as a parameter before it is defined, even on the next line!    int can only convert one string to an integer at a time.    Finally, int should be used in an assignment statement. Even if int was called with the correct number of parameters it would have no real effect.                  ValueError  Value errors occur when you pass a parameter to a function and the function is expecting a certain limitations on the values, and the value passed is not compatible. We can illustrate that with this particular program in two different ways.   current_time_str = input(\"What is the current time (in hours 0-23)?\") current_time_int = int(current_time_str) wait_time_str = input(\"How many hours do you want to wait\") wait_time_int = int(wait_time_str) final_time_int = current_time_int + wait_time_int print(final_time_int)   Run the program but instead of typing in anything to the dialog box just click OK. You should see the following error message: ValueError: invalid literal for int() with base 10: '' on line: 4 This error is not because you have made a mistake in your program. Although sometimes we do want to check the user input to make sure its valid, but we don't have all the tools we need for that yet. The error happens because the user did not give us something we can convert to an integer, instead we gave it an empty string. Try running the program again. Now this time enter ten instead of the number 10. You will get a similar error message.  ValueErrors are not always caused by user input error, but in this program that is the case. We'll look again at ValueErrors again when we get to more complicated programs. For now it is worth repeating that you need to keep track of the restrictions needed for your variables, and understand what your function is expecting. You can do this by writing comments in your code, or by naming your variables in a way that reminds you of their proper form.   "
},
{
  "id": "p-804",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#p-804",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "really "
},
{
  "id": "note-15",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#note-15",
  "type": "Note",
  "number": "3.6.1",
  "title": "",
  "body": " The error descriptions you see in activecode may be different (and more understandable!) than in a regular Python interpreter. The interpreter in activecode is limited in many ways, but it is intended for beginners, including the wording chosen to describe errors.  "
},
{
  "id": "question3_6_1",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#question3_6_1",
  "type": "Checkpoint",
  "number": "3.6.2",
  "title": "",
  "body": " Which of the following explains why wait_time_int = int(wait_time_int) is an error?     You cannot use a variable on both the left and right hand sides of an assignment statement.    No, You can, as long as all the variables on the right hand side already have values.      wait_time_int does not have a value so it cannot be used on the right hand side.    Yes. Variables must already have values in order to be used on the right hand side.      This is not really an error, Python is broken.    No, No, No!    "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#exercise-44",
  "type": "Checkpoint",
  "number": "3.6.3",
  "title": "",
  "body": "current_time_str = input(\"What is the current time (in hours 0-23)?\") wait_time_str = input(\"How many hours do you want to wait\" current_time_int = int(current_time_str) wait_time_int = int(wait_time_str) final_time_int = current_time_int + wait_time_int print(final_time_int) Since the error message points us to line 4 this might be a bit confusing. If you look at line four carefully you will see that there is no problem with the syntax. So, in this case the next step should be to back up and look at the previous line. In this case if you look at line 2 carefully you will see that there is a missing right parenthesis at the end of the line. Remember that parentheses must be balanced. Since Python allows statements to continue over multiple lines inside parentheses python will continue to scan subsequent lines looking for the balancing right parenthesis. However in this case it finds the name current_time_int and it will want to interpret that as another parameter to the input function. But, there is not a comma to separate the previous string from the variable so as far as Python is concerned the error here is a missing comma. From your perspective its a missing parenthesis.  current_time_str = input(\"What is the current time (in hours 0-23)?\") wait_time_str = input(\"How many hours do you want to wait\") current_time_int = int(current_time_str) wait_time_int = int(wait_time_str final_time_int = current_time_int + wait_time_int print(final_time_int)   Since the error message points us to line 4 this might be a bit confusing. If you look at line four carefully you will see that there is no problem with the syntax. So, in this case the next step should be to back up and look at the previous line. In this case if you look at line 2 carefully you will see that there is a missing right parenthesis at the end of the line. Remember that parentheses must be balanced. Since Python allows statements to continue over multiple lines inside parentheses python will continue to scan subsequent lines looking for the balancing right parenthesis. However in this case it finds the name current_time_int and it will want to interpret that as another parameter to the input function. But, there is not a comma to separate the previous string from the variable so as far as Python is concerned the error here is a missing comma. From your perspective its a missing parenthesis.  "
},
{
  "id": "p-823",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#p-823",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Finding Clues "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#exercise-45",
  "type": "Checkpoint",
  "number": "3.6.4",
  "title": "",
  "body": "current_time_str = input(\"What is the \"current time\" (in hours 0-23)?\") wait_time_str = input(\"How many hours do you want to wait\") current_time_int = int(current_time_str) wait_time_int = int(wait_time_str) final_time_int = current_time_int + wait_time_int print(final_time_int) The error message points you to line 1 and in this case that is exactly where the error occurs. In this case your biggest clue is to notice the difference in highlighting on the line. Notice that the words current time are a different color than those around them. Why is this? Because current time is in double quotes inside another pair of double quotes Python thinks that you are finishing off one string, then you have some other names and finally another string. But you haven't separated these names or strings by commas, and you haven't added them together with the concatenation operator (+). So, there are several corrections you could make. First you could make the argument to input be as follows: \"What is the 'current time' (in hours 0-23) \" Notice that here we have correctly used single quotes inside double quotes . Another option is to simply remove the extra double quotes. Why were you quoting current time anyway? \"What is the current time (in hours 0-23)\"  current_time_str = input(\"What is the \"current time\" (in hours 0-23)?\") wait_time_str = input(\"How many hours do you want to wait\") current_time_int = int(current_time_str) wait_time_int = int(wait_time_str) final_time_int = current_time_int + wait_time_int print(final_time_int)   The error message points you to line 1 and in this case that is exactly where the error occurs. In this case your biggest clue is to notice the difference in highlighting on the line. Notice that the words current time are a different color than those around them. Why is this? Because current time is in double quotes inside another pair of double quotes Python thinks that you are finishing off one string, then you have some other names and finally another string. But you haven't separated these names or strings by commas, and you haven't added them together with the concatenation operator (+). So, there are several corrections you could make. First you could make the argument to input be as follows: \"What is the 'current time' (in hours 0-23) \" Notice that here we have correctly used single quotes inside double quotes . Another option is to simply remove the extra double quotes. Why were you quoting current time anyway? \"What is the current time (in hours 0-23)\"  "
},
{
  "id": "p-825",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#p-825",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Finding Clues "
},
{
  "id": "note-16",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#note-16",
  "type": "Note",
  "number": "3.6.5",
  "title": "Solution.",
  "body": " Solution  In finding this error there are few lessons to think about. First, you may find it very disconcerting that you cannot understand the whole program. Unless you speak Polish then this won't be an issue. But, learning what you can ignore, and what you need to focus on is a very important part of the debugging process. Second, types and good variable names are important and can be very helpful. In this case a and x are not particularly helpful names, and in particular they do not help you think about the types of your variables, which as the error message implies is the root of the problem here. The rest of the lessons we will get back to in a minute.  The error message provided to you gives you a pretty big hint. TypeError: unsupported operand type(s) for FloorDiv: 'str' and 'number' on line: 5 On line five we are trying to use integer division on x and 24. The error message tells you that you are tyring to divide a string by a number. In this case you know that 24 is a number so x must be a string. But how? You can see the function call on line 3 where you are converting x to an integer. int(x) or so you think. This is lesson three and is one of the most common errors we see in introductory programming. What is the difference between int(x) and x = int(x)     The expression int(x) converts the string referenced by x to an integer but it does not store it anywhere. It is very common to assume that int(x) somehow changes x itself, as that is what you are intending! The thing that makes this very tricky is that int(x) is a valid expression, so it doesn't cause any kind of error, but rather the error happens later on in the program.    The assignment statement x = int(x) is very different. Again, the int(x) expression converts the string referenced by x to an integer, but this time it also changes what x references so that x now refers to the integer value returned by the int function.     So, the solution to this problem is to change lines 3 and 4 so they are assignment statements.  "
},
{
  "id": "p-835",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#p-835",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Finding Clues "
},
{
  "id": "note-17",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#note-17",
  "type": "Note",
  "number": "3.6.6",
  "title": "Solution.",
  "body": " Solution  In this example, the student seems to be a fairly bad speller, as there are a number of typos to fix. The first one is identified as wait_time is not defined on line 6. Now in this example you can see that there is str_wait_time on line 2, and wai_time on line 4 and wait_time on line 6. If you do not have very sharp eyes its easy to miss that there is a typo on line 4.  "
},
{
  "id": "p-838",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#p-838",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Finding Clues "
},
{
  "id": "p-839",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#p-839",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "is "
},
{
  "id": "note-18",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#note-18",
  "type": "Note",
  "number": "3.6.7",
  "title": "Solution.",
  "body": " Solution  This one is once again a typo, but the typo is not in a variable name, but rather, the name of a function. The search strategy would help you with this one easily, but there is another clue for you as well. The editor in the textbook, as well as almost all Python editors in the world provide you with color clues. Notice that on line 2 the function imt is not highlighted blue like the word int on line 4.  "
},
{
  "id": "note-19",
  "level": "2",
  "url": "debugging_know-your-error-messages.html#note-19",
  "type": "Note",
  "number": "3.6.8",
  "title": "Solution.",
  "body": " Solution  In this example the error message is about set_time not defined on line 3. In this case the undefined name is not used in an assignment statement, but is used as a parameter (incorrectly) to a function call. A search on set_time reveals that in fact it is only used once in the program. Did the author mean set_alarm ? If we make that assumption we immediately get another error NameError: name 'alarm_time' is not defined on line: 3 . The variable alarm_time is defined on line 4, but that does not help us on line 3. Furthermore we now have to ask the question is this function call int(present_time, set_alarm, alarm_time) even the correct use of the int function? The answer to that is a resounding no. Let's list all of the things wrong with line 3:     set_time is not defined and never used, the author probably meant set_alarm .    alarm_time cannot be used as a parameter before it is defined, even on the next line!    int can only convert one string to an integer at a time.    Finally, int should be used in an assignment statement. Even if int was called with the correct number of parameters it would have no real effect.     "
},
{
  "id": "functions_introduction-to-functions",
  "level": "1",
  "url": "functions_introduction-to-functions.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to Functions",
  "body": " Introduction to Functions  In Python, a function is a chunk of code that performs a specific operation that is a meaningful and self-contained part of a larger problem, such as calculating a student's GPA in a learning system or responding to the jump action in a video game. Once a function has been defined and you are satisfied that it does what it is supposed to do, it is useful to start thinking about it in terms of the larger operation that it performs rather than the specific lines of code that make it work.  In computer programming, this breaking down of a task or problem into smaller, solveable, sub-functions, is called decomposition and the idea of hiding the complexity of the sub-steps of the algorithm in a function is called abstraction . Learning how to do both of these problem solving techniques is crucial to the successful implementation of any program of more than 50 or so lines (and plenty of smaller ones too). For example, the programmer who coded the Instagram landing page decomposed it into functions that:     display the header bar    display your friends' posts    display your friends' stories    display the ad at the bottom of the screen recommending you use the app     And each of those is made up of functions as well. For example, the function that displays your friends' posts is a for loop that calls a 'sub'-function to display a single post, which in turn calls 'sub-sub'-functions to:     display the photo and name of the person posting the story    display the photo itself    display other users' likes to the story    display the comments on the story    etc.     In this chapter you will learn about named functions, i.e. functions that are referred to by a name when you want to execute them.   Topics     The purpose of functions as a means of abstraction    The syntax and parts of functions   Function headers  Parameters and arguments  Body and return statement    Local and global scope and the flow of execution       Learning Objectives  At the end of this chapter, you should be able to:     identify formal parameters and parameter values in a code sample    predict the return value of a function given sample parameter values (aka arguments)    define functions with appropriate names for formal parameter    avoid the use of global variables in function definitions by creating formal parameters for all values that are needed       "
},
{
  "id": "p-854",
  "level": "2",
  "url": "functions_introduction-to-functions.html#p-854",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function "
},
{
  "id": "p-855",
  "level": "2",
  "url": "functions_introduction-to-functions.html#p-855",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decomposition abstraction "
},
{
  "id": "functions_function-definition",
  "level": "1",
  "url": "functions_function-definition.html",
  "type": "Section",
  "number": "4.2",
  "title": "Function Definition",
  "body": " Function Definition  The syntax for creating a named function, a function definition , is:   def name( parameters ): statements   You can make up any names you want for the functions you create, except that you can't use a name that is a Python keyword, and the names must follow the rules for legal identifiers that were previously explained for variables.  It is good practice to choose function names that are meaningful to the human readers of the program. This means the names will need to be unique and to make clear the function's purpose. Since functions 'do' something, some programmers like to use verbs in their function names.   def find_Average (grades:list ) -> float: statements def increase (number:int, by=2) -> int: statements   The parameters specify what information, if any, you have to provide in order to use the new function. Another way to say this is that the parameters specify what the function needs to do its work. Notice that in the example function headers above, the programmer has included hints to indicate the parameter's data type and\/or its value. And, the data type of the function's result has been annotated too. Be sure to check out the text's later section \\ on \"Type Annotations\" for more explanation on these ideas.  There can be any number of statements inside the function's body, but they have to be indented from the def . Function definitions are one of several compound statements we will see, all of which have the same pattern:     A header line which begins with a keyword and ends with a colon, : .    A body consisting of one or more Python statements, each indented the same amount – 4 spaces is the Python standard – from the header line.     Later we will see conditionals, if , elif , and else statements, and interations, for and while statements, that have the same strucure where each has an indented block of code.  In a function definition, the keyword in the header is def , which is followed by the name of the function and some parameter names enclosed in parentheses. The parameter list may be empty, or it may contain any number of parameters separated from one another by commas. In either case, the parentheses are required.  We will come back to the parameters in a little while, but first let's see what happens when a function is executed, using a function without any parameters to illustrate.  Here's the definition of a simple function, hello.   def hello() -> None: \"\"\"This function says hello and greets you\"\"\" print(\"Hello\") print(\"Glad to meet you\")    docstrings  By convention, Python programmers use a triple-quoted string as the first line(s) of the function's body, to have one- or two-sentences used to explain their functions, making clear the function's parameters (data type requirements, limitations to their values, default values if set) and the return value (if there is one).  This unassigned string literal is called a docstring (documentation string) and because it gets special treatment in Python, you can use the interactive interpreter at runtime , and enter the expression <function_name>.__doc__ , or help(<function_name> ), to retrieve a function's docstring (and thus its explanation). This is different from comments in your code, which are completely ignored when the program is run.   "
},
{
  "id": "p-879",
  "level": "2",
  "url": "functions_function-definition.html#p-879",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function definition "
},
{
  "id": "p-883",
  "level": "2",
  "url": "functions_function-definition.html#p-883",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "compound statements "
},
{
  "id": "p-884",
  "level": "2",
  "url": "functions_function-definition.html#p-884",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "header line body "
},
{
  "id": "note-20",
  "level": "2",
  "url": "functions_function-definition.html#note-20",
  "type": "Note",
  "number": "4.2.1",
  "title": "docstrings.",
  "body": " docstrings  By convention, Python programmers use a triple-quoted string as the first line(s) of the function's body, to have one- or two-sentences used to explain their functions, making clear the function's parameters (data type requirements, limitations to their values, default values if set) and the return value (if there is one).  This unassigned string literal is called a docstring (documentation string) and because it gets special treatment in Python, you can use the interactive interpreter at runtime , and enter the expression <function_name>.__doc__ , or help(<function_name> ), to retrieve a function's docstring (and thus its explanation). This is different from comments in your code, which are completely ignored when the program is run.  "
},
{
  "id": "functions_function-invocation",
  "level": "1",
  "url": "functions_function-invocation.html",
  "type": "Section",
  "number": "4.3",
  "title": "Function Invocation",
  "body": " Function Invocation  Defining a new function does not make the function run. To execute the function, we need a function call . This is also known as a function invocation .   This section is a review of something we learned in the beginning of the textbook.   The way to invoke a function is to refer to it by name, followed by parentheses. Since there are no parameters for the function hello, we won't need to put anything inside the parentheses when we call it.  Once we've defined a function, we can call it as often as we like and its statements will be executed each time we call it.   def hello() -> None: \"\"\"Illustrative function that requires no parameters and merely displays to screen.\"\"\" print(\"Hello\") print(\"Glad to meet you\") print(type(hello)) print(type(\"hello\")) hello() print(\"Hey, that just printed two lines with one line of code!\") hello() # do it again, just because we can...   Let's take a closer look at what happens when you define a function and when you execute the function. Try stepping through the code above.  First, note that in Step 1, when it executes line 1, it does not execute lines 2 and 3. Instead, as you can see in blue Global variables area, it creates a variable named hello whose value is a Python object of the 'function' class. In the diagram that object is labeled hello() with a notation above it that it is a function.  At Step 2, the next line of code to execute is line 5. Just to emphasize that hello is a variable like any other, and that functions are Python objects like any other, just of a particular type, line 5 prints out the type of the object referred to by the variable hello. It's type is officially ‘function'.  Line 6 is just there to remind you of the difference between referring to the variable name (function name) hello and referring to the string hello . When we print a string's type, we see it is of the 'str' class.  At Step 4 we get to line 8, which has an invocation of the function . When a function is called (or invoked by a line of code, the lines of code inside the function's body are executed in the usual way, but at the end of the function's code block , the program's execution jumps back to line of code just after the function invocation.  You can see that by following the next few steps. At Step 5, the green arrow indicates the 'line that just executed', aka the function's invocation, and the red arrow shows us the 'next line to execute' which has moved to the function. We say that control has passed from the top-level program (not 'top' as in the 'top of the code' but as in top-hierarchial level) to the function hello. After Steps 5 through 7 print out two lines, at Step 8, control will be passed back to the point after where the invocation was started. By Step 9, that has happened.  The same process of invocation occurs again on line 10, with the function's body (lines 2 and 3) getting executed a second time.   Common Mistakes with Functions  There are two common mistakes beginners tend to make:   They tend to forget the pair of parentheses after the function name . This is particularly common in the function that do not require parameters. Because the hello function defined above does not require parameters, it's easy to forget the parentheses. This is less common, but still possible, when trying to call functions that require parameters.  They tend to overlook the indentation that separates the function's body code from the code that invokes the function.     Check your understanding    What is a function in Python?     A named sequence of statements.    Yes, a function is a named sequence of statements.      Any sequence of statements.    While functions contain sequences of statements, not all sequences of statements are considered functions.      A mathematical expression that calculates a value.    While some functions do calculate values, the python idea of a function is slightly different from the mathematical idea of a function in that not all functions calculate values. Consider, for example, the turtle functions in this section. They made the turtle draw a specific shape, rather than calculating a value.      A statement of the form x = 5 + 4.    This statement is called an assignment statement. It assigns the value on the right (9), to the name on the left (x).      What is one main purpose of a function?     To improve the speed of execution    Functions have little effect on how fast the program runs.      To help the programmer organize programs into chunks that match how they think about the solution to the problem.    While functions are not required, they help the programmer better think about the solution by organizing pieces of the solution into logical chunks that can be reused.      All Python programs must be written using functions    In the first several chapters, you have seen many examples of Python programs written without the use of functions. While writing and using functions is desirable and essential for good programming style as your programs get longer, it is not required.      To calculate values.    Not all functions calculate values.      How many lines will be output by executing this code?   def hello() -> None: print(\"Hello\") print(\"Glad to meet you\")      0    The code only defines the function. Nothing prints until the function is called.      1    Check again.      2    When the function is invoked, it will print two lines, but it has only been defined, not invoked.      How many lines will be output by executing this code?   def hello() -> None: print(\"Hello\") print(\"Glad to meet you\") hello() print(\"It works\") hello() hello()      0    Here the the function is invoked and there is also a separate print statement.      1    There is only one print statement outside the funciton, but the invocations of hello also cause lines to print.      3    There are three print statements, but the function is invoked more than once.      4    Each time the function is invoked, it will print two lines, not one.      7    Three invocations generate two lines each, plus the line \"It works\".     "
},
{
  "id": "p-893",
  "level": "2",
  "url": "functions_function-invocation.html#p-893",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function call function invocation "
},
{
  "id": "note-21",
  "level": "2",
  "url": "functions_function-invocation.html#note-21",
  "type": "Note",
  "number": "4.3.1",
  "title": "",
  "body": " This section is a review of something we learned in the beginning of the textbook.  "
},
{
  "id": "note-22",
  "level": "2",
  "url": "functions_function-invocation.html#note-22",
  "type": "Note",
  "number": "4.3.2",
  "title": "Common Mistakes with Functions.",
  "body": " Common Mistakes with Functions  There are two common mistakes beginners tend to make:   They tend to forget the pair of parentheses after the function name . This is particularly common in the function that do not require parameters. Because the hello function defined above does not require parameters, it's easy to forget the parentheses. This is less common, but still possible, when trying to call functions that require parameters.  They tend to overlook the indentation that separates the function's body code from the code that invokes the function.   "
},
{
  "id": "p-905",
  "level": "2",
  "url": "functions_function-invocation.html#p-905",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question4_3_1",
  "level": "2",
  "url": "functions_function-invocation.html#question4_3_1",
  "type": "Checkpoint",
  "number": "4.3.3",
  "title": "",
  "body": " What is a function in Python?     A named sequence of statements.    Yes, a function is a named sequence of statements.      Any sequence of statements.    While functions contain sequences of statements, not all sequences of statements are considered functions.      A mathematical expression that calculates a value.    While some functions do calculate values, the python idea of a function is slightly different from the mathematical idea of a function in that not all functions calculate values. Consider, for example, the turtle functions in this section. They made the turtle draw a specific shape, rather than calculating a value.      A statement of the form x = 5 + 4.    This statement is called an assignment statement. It assigns the value on the right (9), to the name on the left (x).    "
},
{
  "id": "question4_3_2",
  "level": "2",
  "url": "functions_function-invocation.html#question4_3_2",
  "type": "Checkpoint",
  "number": "4.3.4",
  "title": "",
  "body": " What is one main purpose of a function?     To improve the speed of execution    Functions have little effect on how fast the program runs.      To help the programmer organize programs into chunks that match how they think about the solution to the problem.    While functions are not required, they help the programmer better think about the solution by organizing pieces of the solution into logical chunks that can be reused.      All Python programs must be written using functions    In the first several chapters, you have seen many examples of Python programs written without the use of functions. While writing and using functions is desirable and essential for good programming style as your programs get longer, it is not required.      To calculate values.    Not all functions calculate values.    "
},
{
  "id": "question4_3_3",
  "level": "2",
  "url": "functions_function-invocation.html#question4_3_3",
  "type": "Checkpoint",
  "number": "4.3.5",
  "title": "",
  "body": " How many lines will be output by executing this code?   def hello() -> None: print(\"Hello\") print(\"Glad to meet you\")      0    The code only defines the function. Nothing prints until the function is called.      1    Check again.      2    When the function is invoked, it will print two lines, but it has only been defined, not invoked.    "
},
{
  "id": "question4_3_4",
  "level": "2",
  "url": "functions_function-invocation.html#question4_3_4",
  "type": "Checkpoint",
  "number": "4.3.6",
  "title": "",
  "body": " How many lines will be output by executing this code?   def hello() -> None: print(\"Hello\") print(\"Glad to meet you\") hello() print(\"It works\") hello() hello()      0    Here the the function is invoked and there is also a separate print statement.      1    There is only one print statement outside the funciton, but the invocations of hello also cause lines to print.      3    There are three print statements, but the function is invoked more than once.      4    Each time the function is invoked, it will print two lines, not one.      7    Three invocations generate two lines each, plus the line \"It works\".    "
},
{
  "id": "functions_function-parameters",
  "level": "1",
  "url": "functions_function-parameters.html",
  "type": "Section",
  "number": "4.4",
  "title": "Function Parameters",
  "body": " Function Parameters  Named functions are very useful because, once they are defined and we understand what they do, we can refer to them by name and no longer have to think too much about their inner workings. The functions then can be treated as separate tools that we can use repeatedly and in conjunction with other functions to solve a larger decomposed problem.  With parameters, functions are even more powerful, because they allow us to generalize a function's actions so that it can do the same thing on each invocation, but with different starting values. With parameters our functions becomes adjustable tools that can be resused to solve different problems.  The figure below shows a function's relationship with its parameters. A function needs certain information to do its specific work. These values, often called arguments , actual parameters or parameter values , are passed to the function by the code that invokes the function.   This type of diagram is often called a black-box diagram because it only states the requirements from the perspective of the 'user' (well, the programmer, but the programmer who writes the code that uses the function, who may be different than the programmer who created the function - which, by the way, is why docstrings are so useful to explain a function). The 'user' must know the name of the function and what arguments it needs to be passed. The details of how the function works are hidden inside the black-box .  You have already been making function invocations with parameters. For example, when you write len(\"abc\") , len is the name of a function, and the string abc is a parameter value. Or print(\"Answer\", 3 - 4, sep=\" is equal to \") where the print function is passed three parameters: a string, an expression and a named parameter.  When a function has one or more parameters, the following holds:   The names of the parameters appear in the function definition  The parameters are separated by commas  The values in the parentheses of the function invocation are assigned to the parameters in the same order    In the function definition, the parameter list is sometimes referred to as the formal parameters , ideal parameters or parameter names . These names can be any valid variable name.  In the function invocation, inside the parentheses one value should be provided for each of the parameter names. These arguments can be specified directly ( \"abc\" ), by any Python expression (e.g. 3 - 4 ) including a reference to some other variable or function name ( abs(3 - 4) ), or by name (also known as keyword arguments - like speed = 5.4 or sep = \" is equal to \" .  That can get kind of confusing, so let's start by looking at a function with just one parameter. The revised hello function personalizes the greeting: the person to greet is specified by the parameter.   def hello2(s: str) -> None: print(\"Hello \" + s) print(\"Glad to meet you\") hello2(\"Iman\") hello2(\"Jackie\")   First, notice that hello2 has one formal parameter, s . You can tell that because there is exactly one variable name inside the parentheses on line 1 (the colon and the 'str' are part of Type Annotation, a topic we will discuss shortly).  Next, notice what happened during Step 2. Control was passed to the function, just like we saw before. But in addition, the variable s was bound to a value, the string Iman . When it got to Step 7, for the second invocation of the function, who was bound to Jackie .  Function invocations always work that way. The expression inside the parentheses on the line that invokes the function is evaluated before control is passed to the function. The value is assigned to the corresponding formal parameter. Then, when the code block inside the function is executing, it can refer to that formal parameter and get its value, the value that was passed into the function.   To get a feel for that, let's invoke hello2 using some more complicated expressions, but one where we use more self-documenting parameter names. Feel free to modify things on your own - allowing them to 'break' but then fixing things too.   def hello2(who: str) -> None: print(\"Hello \" + who) print(\"Glad to meet you\") hello2(\"Iman\" + \" and Jackie\") hello2(\"Class \" * 3)   Now let's consider a function with two (not all that self-documenting) parameters. Can you determine what the two variables are? What they are for?   def hello3(s: str, n: int) -> None: greeting = f\"Hello {s} \" print(greeting*n) hello3(\"Wei\", 4) hello3(\"\", 1) hello3(\"Kitty\", 11)   At Step 2 of the execution, in the first invocation of hello3, notice that the variable s is bound to the value Wei and the variable n is bound to the value 4.  That's how function invocations always work. Each of the comma separated expressions inside the parentheses are evaluated to produce values. Then those values are matched up positionally (in the same order) with the formal parameters of the function definition. The first parameter name is bound to the first value provided. The second parameter name is bound to the second value provided. And so on.   Try writing your own version of the program above, but pass the arguments in the reverse order, e.g. hello3(4, \"Wei\") . What happens when you run the code? It should produce a runtime error - an error that happens when the code is syntactically correct and runs, but encounters an issue during execution; in this case, it can't deal with the variables being of a different than expected data type.   Check your understanding    Which of the following is a valid function header (first line of a function definition)?     def greet(t: str) -> None:    A function may take zero or more parameters. In this case it has one.      def greet:    A function needs to specify its parameters in its header. If there are no paramters, put () after the function name.      greet(t: str, n: int) -> None:    A function definition needs to include the keyword def.      def greet(t: str, n: int) -> None    A function definition header must end in a colon (:).      What is the name of the following function?   def print_many(x: str, y: int) -> None: \"\"\"Print out string x, y times.\"\"\" message = x * y print(message)      def print_many(x: str, y: int) -> None:    This line is the complete function header (except for the semi-colon) which includes the name as well as several other components.      print_many    Yes, the name of the function is given after the keyword def and before the list of parameters.      print_many(x: str, y: int)    This includes the function name and its parameters      Print out string x, y times.    This is a comment stating what the function does.      What are the parameters of the following function?   def print_many(x: str, y: int) -> None: \"\"\"Print out string x, y times.\"\"\" message = x * y print(message)      i    i is a variable used inside of the function, but not a parameter, which is passed in to the function.      x    x is only one of the parameters to this function.      x, y    Yes, the function specifies two parameters: a string x and an int y.      x, y, i    the parameters include only those variables whose values that the function expects to receive as input. They are specified in the header of the function.      Considering the function below, which of the following statements correctly invokes, or calls, this function (i.e., causes it to run)?   def print_many(x: str, y: int) -> None: \"\"\"Print out string x, y times.\"\"\" message = x * y print(message) z = 3      print_many(x, y)    No, x and y are the names of the formal parameters to this function. When the function is called, it requires actual values to be passed in.      print_many    A function call always requires parentheses after the name of the function.      print_many(\"Greetings\")    This function takes two parameters (arguments)      print_many(\"Greetings\", 10):    A colon is only required in a function definition. It will cause an error with a function call.      print_many(\"Greetings\", z)    Since z has the value 3, we have passed in two correct values for this function. \"Greetings\" will be printed 3 times.       What output will the following code produce?   CONSTANT_VALUE = -8 def cyu(n1: int, n2: int) -> int: print(n1 + n2 - CONSTANT_VALUE) cyu(4, 3)      7    n3 was given a value; it would be included in the returned value.      15    4 + 3 - (-8) is 15.      -1    n3 is a negative number that is subtracted from the sum of n1 and n2.      The function would produce an error.    This code contains no errors.     "
},
{
  "id": "p-944",
  "level": "2",
  "url": "functions_function-parameters.html#p-944",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arguments actual parameters parameter values "
},
{
  "id": "p-945",
  "level": "2",
  "url": "functions_function-parameters.html#p-945",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "black-box diagram "
},
{
  "id": "p-948",
  "level": "2",
  "url": "functions_function-parameters.html#p-948",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parameter list formal parameters ideal parameters parameter names "
},
{
  "id": "p-949",
  "level": "2",
  "url": "functions_function-parameters.html#p-949",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arguments "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "functions_function-parameters.html#exercise-50",
  "type": "Checkpoint",
  "number": "4.4.1",
  "title": "",
  "body": ""
},
{
  "id": "p-958",
  "level": "2",
  "url": "functions_function-parameters.html#p-958",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "runtime error "
},
{
  "id": "question4_4_1",
  "level": "2",
  "url": "functions_function-parameters.html#question4_4_1",
  "type": "Checkpoint",
  "number": "4.4.2",
  "title": "",
  "body": " Which of the following is a valid function header (first line of a function definition)?     def greet(t: str) -> None:    A function may take zero or more parameters. In this case it has one.      def greet:    A function needs to specify its parameters in its header. If there are no paramters, put () after the function name.      greet(t: str, n: int) -> None:    A function definition needs to include the keyword def.      def greet(t: str, n: int) -> None    A function definition header must end in a colon (:).    "
},
{
  "id": "question4_4_2",
  "level": "2",
  "url": "functions_function-parameters.html#question4_4_2",
  "type": "Checkpoint",
  "number": "4.4.3",
  "title": "",
  "body": " What is the name of the following function?   def print_many(x: str, y: int) -> None: \"\"\"Print out string x, y times.\"\"\" message = x * y print(message)      def print_many(x: str, y: int) -> None:    This line is the complete function header (except for the semi-colon) which includes the name as well as several other components.      print_many    Yes, the name of the function is given after the keyword def and before the list of parameters.      print_many(x: str, y: int)    This includes the function name and its parameters      Print out string x, y times.    This is a comment stating what the function does.    "
},
{
  "id": "question4_4_3",
  "level": "2",
  "url": "functions_function-parameters.html#question4_4_3",
  "type": "Checkpoint",
  "number": "4.4.4",
  "title": "",
  "body": " What are the parameters of the following function?   def print_many(x: str, y: int) -> None: \"\"\"Print out string x, y times.\"\"\" message = x * y print(message)      i    i is a variable used inside of the function, but not a parameter, which is passed in to the function.      x    x is only one of the parameters to this function.      x, y    Yes, the function specifies two parameters: a string x and an int y.      x, y, i    the parameters include only those variables whose values that the function expects to receive as input. They are specified in the header of the function.    "
},
{
  "id": "question4_4_4",
  "level": "2",
  "url": "functions_function-parameters.html#question4_4_4",
  "type": "Checkpoint",
  "number": "4.4.5",
  "title": "",
  "body": " Considering the function below, which of the following statements correctly invokes, or calls, this function (i.e., causes it to run)?   def print_many(x: str, y: int) -> None: \"\"\"Print out string x, y times.\"\"\" message = x * y print(message) z = 3      print_many(x, y)    No, x and y are the names of the formal parameters to this function. When the function is called, it requires actual values to be passed in.      print_many    A function call always requires parentheses after the name of the function.      print_many(\"Greetings\")    This function takes two parameters (arguments)      print_many(\"Greetings\", 10):    A colon is only required in a function definition. It will cause an error with a function call.      print_many(\"Greetings\", z)    Since z has the value 3, we have passed in two correct values for this function. \"Greetings\" will be printed 3 times.    "
},
{
  "id": "question4_4_5",
  "level": "2",
  "url": "functions_function-parameters.html#question4_4_5",
  "type": "Checkpoint",
  "number": "4.4.6",
  "title": "",
  "body": " What output will the following code produce?   CONSTANT_VALUE = -8 def cyu(n1: int, n2: int) -> int: print(n1 + n2 - CONSTANT_VALUE) cyu(4, 3)      7    n3 was given a value; it would be included in the returned value.      15    4 + 3 - (-8) is 15.      -1    n3 is a negative number that is subtracted from the sum of n1 and n2.      The function would produce an error.    This code contains no errors.    "
},
{
  "id": "functions_returning-a-value-from-a-function",
  "level": "1",
  "url": "functions_returning-a-value-from-a-function.html",
  "type": "Section",
  "number": "4.5",
  "title": "Returning a value from a function",
  "body": " Returning a value from a function  The functions we've used as examples thus far have not been all that useful: we enclosed print() functions within our own function, as a way to illustrate parameters, when we could have just used the print() functions on their own. And, the functions we've defined so far don't do much to be useful to help solve a decomposed larger problem. One of the reasons that our illustrative functions don't appear to be useful is because few of them have returned a value. In this section we will discuss how to create more useful functions that produce useful data for our problem solving.  Functions that don't return a value are sometimes called procedures , non-fruitful or void functions . Notice how in the function header example below the function definition indicates the function returns -> None , that there is no data being processed, and that there is no return statement. None is a special Python value used to indicate no value at all.   None is not the same as 0, False, or an empty string ( \"\" ). It is its own data type ( NoneType ). Some other computer languages use the term null .   def hello() -> None: \"\"\"This function says hello and greets you but no value is returned.\"\"\" print(\"Hello\") print(\"Glad to meet you\")   More usefully, a function can also be used to produce a value from from one or more parameters.   You probably can appreciate how a built-in Python function like = abs() will find, and then return, the absolute value of a provided number. Or how = input() returns anything a user types on the keyboard as a string.  These kinds of functions, ones that return values are sometimes called fruitful functions because they produce a result.   How do we write our own fruitful function? Let's start by creating a very simple mathematical function that we will call square . The square function will take one number as a parameter and return the result of squaring that number. Here is the black-box diagram with the Python code following.    def square(an_integer: int) -> int: \"\"\"With any integer, this function will produce its squared value.\"\"\" result = an_integer * an_integer return result the_integer = 10 result = square(the_integer) print(f\"The result of {the_integer} squared is {result}.\") another_integer = 11 result = square(another_integer) print(f\"The result of {another_integer} squared is {result}.\")   The return statement is followed by an expression which is evaluated. Its result is returned to the caller (the line of code that invoked the function) as the fruit of calling this function. Because the return statement can contain any Python expression we could have avoided creating the temporary variable  result and simply used return an_integer * an_integer . Try modifying the square function above to see that this works just the same. On the other hand, using temporary variables like result in the function above makes debugging easier, especially when a function is a many step process. These temporary variables are referred to as local variables . In general, programmers should not try to place a multiple step process into the return statement.  Notice something important here: the name of the variable we pass as an argument does not have to have anything to do with the name of the formal parameter — an_integer . You can see this very clearly in the Codelens: it doesn't matter what names the caller uses — the_integer or another_integer ). When square is executed, inside that function, its parameter, a local variable — an_integer , is given the value that is passed, the local temporary variable — result is determined, and finally, is the return value that the function produces.  Return the previous CodeLens example and step through the code once again. This time make note of the Frames being displayed, the appearance (and disappearance of) those variables in those frames, and the values of the variables.  When we suggested earlier that functions could be generalized , this illustrates what we meant. A fruitful function should be coded to deal with any value of parameter(s), process things, and then to provide a value based on its parameter(s). Thus, our square function can work \"\"\"With any integer...\"\"\" .  It should also be apparent that using self-documenting variables names, like the_integer and another_integer , make clearer what is being passed to the function and what variables are local to the function ( an_integer and result ). And, using these kinds of self-documenting variable names makes the code easier to design, develop and debug.  There is one more aspect of fruitful functions. By default, all Python functions return the special value None to indicate there is no value at all. This is not the same as 0 , False , nor an empty string \"\" .  A function will only return a non-None value if it includes an explicit return statement with a value in the function's body.   Notice in the following how the square function does not contain a return statement. As you step through this example, pay very close attention to the Return Value in the square function's frame. Then look at what is printed when the function is over.   def square(an_integer: int) -> None: y = an_integer * an_integer print(y) # Bad! This is confusing! Should use return instead! the_integer = 10 square_result = square(the_integer) print(f\"The result of {the_integer} squared is {square_result}.\")   A problem with this function is that even though it prints the resulting squared value (line 3), that value will not be available to be subsequently displayable, accessed nor used after the function has been executed. Instead, the value None will be returned to the caller's scope. Since line 6 assigns the function's return value to square_result , that variable will have None as its value and that is what will be printed in line 7.  Much more usefully one would code a fruitful function that return a value and assigns that value to a variables for later processing or display.  Next, a return statement, once executed, immediately terminates execution of a function, even if it is not the last statement in the function. In the following code, when line 3 executes, the value 5 is returned and assigned to the variable x, then printed. Lines 4 and 5 never execute. Run the following code and try making some modifications of it to make sure you understand why there and 10 never print out.   def weird() -> int: print(\"here\") return 5 print(\"there\") return 10 x = weird() print(x)   The fact that a return statement immediately ends execution of the code block inside a function is important to understand for writing complex programs. The following example algorithm uses a programming structure, conditionals , that we will cover later, but for now we will use the idea here to hint at what is possible.  Consider a circumstance where a student's grade has to be greater than or equal to 60% to use it as a prerequisite. A function to check this could be written as follows:   def prerequisite_checker( grade: float ) -> bool: \"\"\"Checks if student meets prerequisite grade requirements\"\"\" if grade < 60: return False else: return True   Do consider the challenges with using multiple return statements: the programmer (and thus the function's code) has to repeat the return statement for every circumstance - and cannot overlook even one outcome. In fact, the structured programming tradition considers the use of multiple return statements to be bad practice. Instead, it suggests programmers get into the habit of always having a single return statement as very last line of their function's body , to avoid 'forgetting' to include all the returns. This practice, making the last line of every function a return statement, also makes tracing and debugging the complex function code easier.  So far, we have just seen return values being assigned to variables. For example, we had the line square_result = square(the_integer) . As with all assignment statements, the right-hand side of that instruction is executed first. It invokes the square function, passing in a parameter value 10 (the current value of the_integer ). The function returns a value 100, which completes the evaluation of the right-hand side of the assignment. The value 100 is then assigned to the variable square_result . In this case, the function invocation was the entire expression that was evaluated.  Function invocations, however, can also be used as part of more complicated expressions. For example, square_result = 2 * square(the_integer + 1) . In this case, the value 11 is evaluated, passed to the function, and is returned to the right-hand side of the instructions. Then, the returned value (121) is multiplied by 2 to produce the value 242.  To reiterate, when executing the line of code square_result = 2 * square(the_integer + 1) , the Python interpreter does these steps:     It's an assignment statement, so it evaluates the right-hand side expression 2 * square(the_integer + 1) .    Looks up the values of the variables square and the_integer: square is a function object and the_integer is 10   Evalutes the argument expression (the_integer + 1) as 11    Pasess 11 as a parameter value to the square function (where an_integer is assigned 11 as a value), get back the return value 121    Substitutes 121 for square, so that the expression now reads 2 * 121    Assigns 242 to variable square_result      Check your understanding    What is wrong with the following function definition:   def add_em(x, y, z): return x+y+z print('the answer is', x+y+z)      You should never use a print statement in a function definition.    Although you should not mistake print for return, you may include print statements inside your functions.      You should not have any statements in a function after the return statement. Once the function gets to the return statement it will immediately stop executing the function.    This is a very common mistake so be sure to watch out for it when you write your code!      You must calculate the value of x+y+z before you return it.    Python will automatically calculate the value x+y+z and then return it in the statement as it is written      A function cannot return a number.    Functions can return any legal data, including (but not limited to) numbers, strings, booleans, etc.      There is no type hinting.    Although type hinting is standard in Python, functions don't require it.      What will the following function return?   def add_em(x: int, y: int, z: int): print(x+y+z)      The value None    We have accidentally used print where we mean return. Therefore, the function will return the value None by default. This is a VERY COMMON mistake so watch out! This mistake is also particularly difficult to find because when you run the function the output looks the same. It is not until you try to assign its value to a variable that you can notice a difference.      The value of x+y+z    Careful! This is a very common mistake. Here we have printed the value x+y+z but we have not returned it. To return a value we MUST use the return keyword.      The string 'x+y+z'    x+y+z calculates a number which represents the sum of the values x, y and z.      What will the following code output?   def square(x: int) -> int: y = x * x return y print(square(5) + square(5))      25    It squares 5 twice, and adds them together.      50    The two return values are added together.      25 + 25    The two results are substituted into the expression and then it is evaluated. The returned values are integers in this case, not strings.      What will the following code output?   def square(x: int) -> int: y = x * x return y print(square(square(2)))      8    It squares 2, yielding the value 4. But that doesn't mean the next value multiplies 2 and 4.      16    It squares 2, yielding the value 4. 4 is then passed as a value to square again, yeilding 16.      Error: can't put a function invocation inside parentheses    This is a more complicated expression, but still valid. The expression square(2) is evaluated, and the return value 4 substitutes for square(2) in the expression.       Which will print out first, square, g, or a number?   def square(x: int) -> int: print(\"square\") return x*x def g(y: int) -> int: print(\"g\") return y + 3 print(square(g(2)))      square    Before executing square, it has to figure out what value to pass in, so g is executed first      g    g has to be executed and return a value in order to know what paramater value to provide to x.      a number    square and g both have to execute before the number is printed.       8. Write a function named same that takes a string as input, and simply returns that string.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(same('hello'), 'hello', \"Testing the same function on input 'hello'.\") myTests().main()    9. Write a function called same_thing that returns the parameter, unchanged.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(same_thing(5), 5,\"Testing the function same_thing with input 5\") self.assertEqual(same_thing(\"Welcome\"), \"Welcome\", \"Testing the function same_thing with input 'Welcome'\") myTests().main()    10. Write a function called subtract_three that takes an integer or any number as input, and returns that number minus three.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(subtract_three(9), 6, \"Testing the subtract_three function on input 9.\") self.assertEqual(subtract_three(-5), -8, \"Testing the subtract_three function on input -5.\") myTests().main()    11. Write a function called change that takes one number as its input and returns that number, plus 7.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(change(5), 12,\"Testing the function change with input 5\") self.assertEqual(change(-10), -3, \"Testing the function change with input -10\") myTests().main()    12. Write a function named intro that takes a string as input. This string is intended to be a person's name and the output is a standardized greeting. For example, given the string Becky as input, the function should return: Hello, my name is Becky and I love COMP 1701.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(intro(\"Mike\"), \"Hello, my name is Mike and I love COMP 1701.\", \"Testing the intro function on input 'Mike'.\") myTests().main()    13. Write a function called s_change that takes one string as input and returns that string, concatenated with the string for fun. .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(s_change(\"Coding\"), \"Coding for fun.\" ,\"Testing the function s_change with input coding\") self.assertEqual(s_change(\"We go to the beach\"), \"We go to the beach for fun.\" , \"Testing the function s_change with input We go to the beach\") myTests().main()    "
},
{
  "id": "p-1008",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#p-1008",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "procedures non-fruitful void functions None "
},
{
  "id": "note-23",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#note-23",
  "type": "Note",
  "number": "4.5.1",
  "title": "",
  "body": " None is not the same as 0, False, or an empty string ( \"\" ). It is its own data type ( NoneType ). Some other computer languages use the term null . "
},
{
  "id": "p-1011",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#p-1011",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fruitful functions "
},
{
  "id": "p-1013",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#p-1013",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "return temporary variable temporary variables local variables "
},
{
  "id": "note-24",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#note-24",
  "type": "Note",
  "number": "4.5.2",
  "title": "",
  "body": "A function will only return a non-None value if it includes an explicit return statement with a value in the function's body.  "
},
{
  "id": "p-1024",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#p-1024",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conditionals "
},
{
  "id": "p-1037",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#p-1037",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question4_5_1",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#question4_5_1",
  "type": "Checkpoint",
  "number": "4.5.3",
  "title": "",
  "body": " What is wrong with the following function definition:   def add_em(x, y, z): return x+y+z print('the answer is', x+y+z)      You should never use a print statement in a function definition.    Although you should not mistake print for return, you may include print statements inside your functions.      You should not have any statements in a function after the return statement. Once the function gets to the return statement it will immediately stop executing the function.    This is a very common mistake so be sure to watch out for it when you write your code!      You must calculate the value of x+y+z before you return it.    Python will automatically calculate the value x+y+z and then return it in the statement as it is written      A function cannot return a number.    Functions can return any legal data, including (but not limited to) numbers, strings, booleans, etc.      There is no type hinting.    Although type hinting is standard in Python, functions don't require it.    "
},
{
  "id": "question4_5_2",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#question4_5_2",
  "type": "Checkpoint",
  "number": "4.5.4",
  "title": "",
  "body": " What will the following function return?   def add_em(x: int, y: int, z: int): print(x+y+z)      The value None    We have accidentally used print where we mean return. Therefore, the function will return the value None by default. This is a VERY COMMON mistake so watch out! This mistake is also particularly difficult to find because when you run the function the output looks the same. It is not until you try to assign its value to a variable that you can notice a difference.      The value of x+y+z    Careful! This is a very common mistake. Here we have printed the value x+y+z but we have not returned it. To return a value we MUST use the return keyword.      The string 'x+y+z'    x+y+z calculates a number which represents the sum of the values x, y and z.    "
},
{
  "id": "question4_5_3",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#question4_5_3",
  "type": "Checkpoint",
  "number": "4.5.5",
  "title": "",
  "body": " What will the following code output?   def square(x: int) -> int: y = x * x return y print(square(5) + square(5))      25    It squares 5 twice, and adds them together.      50    The two return values are added together.      25 + 25    The two results are substituted into the expression and then it is evaluated. The returned values are integers in this case, not strings.    "
},
{
  "id": "question4_5_4",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#question4_5_4",
  "type": "Checkpoint",
  "number": "4.5.6",
  "title": "",
  "body": " What will the following code output?   def square(x: int) -> int: y = x * x return y print(square(square(2)))      8    It squares 2, yielding the value 4. But that doesn't mean the next value multiplies 2 and 4.      16    It squares 2, yielding the value 4. 4 is then passed as a value to square again, yeilding 16.      Error: can't put a function invocation inside parentheses    This is a more complicated expression, but still valid. The expression square(2) is evaluated, and the return value 4 substitutes for square(2) in the expression.    "
},
{
  "id": "question4_5_6",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#question4_5_6",
  "type": "Checkpoint",
  "number": "4.5.7",
  "title": "",
  "body": " Which will print out first, square, g, or a number?   def square(x: int) -> int: print(\"square\") return x*x def g(y: int) -> int: print(\"g\") return y + 3 print(square(g(2)))      square    Before executing square, it has to figure out what value to pass in, so g is executed first      g    g has to be executed and return a value in order to know what paramater value to provide to x.      a number    square and g both have to execute before the number is printed.    "
},
{
  "id": "ac4_5_4",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#ac4_5_4",
  "type": "Checkpoint",
  "number": "4.5.8",
  "title": "",
  "body": " 8. Write a function named same that takes a string as input, and simply returns that string.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(same('hello'), 'hello', \"Testing the same function on input 'hello'.\") myTests().main()  "
},
{
  "id": "ac4_5_5",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#ac4_5_5",
  "type": "Checkpoint",
  "number": "4.5.9",
  "title": "",
  "body": " 9. Write a function called same_thing that returns the parameter, unchanged.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(same_thing(5), 5,\"Testing the function same_thing with input 5\") self.assertEqual(same_thing(\"Welcome\"), \"Welcome\", \"Testing the function same_thing with input 'Welcome'\") myTests().main()  "
},
{
  "id": "ac4_5_6",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#ac4_5_6",
  "type": "Checkpoint",
  "number": "4.5.10",
  "title": "",
  "body": " 10. Write a function called subtract_three that takes an integer or any number as input, and returns that number minus three.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(subtract_three(9), 6, \"Testing the subtract_three function on input 9.\") self.assertEqual(subtract_three(-5), -8, \"Testing the subtract_three function on input -5.\") myTests().main()  "
},
{
  "id": "ac4_5_7",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#ac4_5_7",
  "type": "Checkpoint",
  "number": "4.5.11",
  "title": "",
  "body": " 11. Write a function called change that takes one number as its input and returns that number, plus 7.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(change(5), 12,\"Testing the function change with input 5\") self.assertEqual(change(-10), -3, \"Testing the function change with input -10\") myTests().main()  "
},
{
  "id": "ac4_5_8",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#ac4_5_8",
  "type": "Checkpoint",
  "number": "4.5.12",
  "title": "",
  "body": " 12. Write a function named intro that takes a string as input. This string is intended to be a person's name and the output is a standardized greeting. For example, given the string Becky as input, the function should return: Hello, my name is Becky and I love COMP 1701.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(intro(\"Mike\"), \"Hello, my name is Mike and I love COMP 1701.\", \"Testing the intro function on input 'Mike'.\") myTests().main()  "
},
{
  "id": "ac4_5_9",
  "level": "2",
  "url": "functions_returning-a-value-from-a-function.html#ac4_5_9",
  "type": "Checkpoint",
  "number": "4.5.13",
  "title": "",
  "body": " 13. Write a function called s_change that takes one string as input and returns that string, concatenated with the string for fun. .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(s_change(\"Coding\"), \"Coding for fun.\" ,\"Testing the function s_change with input coding\") self.assertEqual(s_change(\"We go to the beach\"), \"We go to the beach for fun.\" , \"Testing the function s_change with input We go to the beach\") myTests().main()  "
},
{
  "id": "functions_decoding-a-function",
  "level": "1",
  "url": "functions_decoding-a-function.html",
  "type": "Section",
  "number": "4.6",
  "title": "Decoding a Function",
  "body": " Decoding a Function  In general, when you see a function definition you will try figure out what the function does, but, unless you are writing the function, you won't care how it does it (recall abstraction ) .  For example, here is a summary of some functions we have seen already.     input takes one parameter, a string. It is displayed to the user. Whatever the user types is returned, as a string.    int takes one parameter. It can be of any type that can be converted into an integer, such as a floating point number or a string whose characters are all digits.     Sometimes, you will be presented with a function definition whose operation is not so neatly summarized as above. Sometimes you will need to look at the code, either the function definition or code that invokes the function, in order to figure out what it does. (Consider practicing this by looking up the print functions docstring. )  To build your understanding of any function, you should aim to answer the following questions:     How many parameters does it have?    What data type(s) are being passed when the function is invoked?    What is the type of the return value that the function produces when it executes?     If you try to make use of functions, ones you write or that others write, without being able to answer these questions, you will find that your debugging sessions are long and painful.  The first question is always easy to answer. Look at the line with the function definition, look inside the parentheses, and count how many variable names there are.  The second and third questions are not always so easy to answer. In Python, unlike some other programming languages, variables are not declared to have fixed types, and the same holds true for the variable names that appear as formal parameters of functions. You have to figure it out from context.  To figure out the types of values that a function expects to receive as parameters, you can look at the function invocations or you can look at the operations that are performed on the parameters inside the function.  Here are some clues that can help you determine the type of object associated with any variable, including a function parameter. If you see…     a built in function, look at its docstring to see what it requires and what it returns. For example, len(x) , must be passed a sequence data type like a string and will return an integer. x can't be a number or a Boolean.    mathematical operators, then:    x - y , x \/ y , or x ** y : x and y must be numbers (integer or float)    x + y : x and y must both be numbers or both be strings    x * y : x and y can both be numbers; or one can be a string and the other must be a number       logical operators like x and y , x or y , not(x) : x and y must be data types that can be evaluated as Booleans.       Check your understanding: decode this function definition    How many parameters does function cyu3 take?   def cyu3(x: ???, y: ???) -> ???: COEFFICIENT = 2.5 return (x + y) * COEFFICIENT      0    Count the number of variable names inside the parenetheses on line 1.      1    Count the number of variable names inside the parenetheses on line 1.      2    x and y.      3    Count the number of variable names inside the parenetheses on line 1.      Can't tell    You can tell by looking inside the parentheses on line 1. Each variable name is separated by a comma.      What are the possible types of variables x and y?   def cyu3(x: ???, y: ???) -> ???: COEFFICIENT = 2.5 return (x + y) * COEFFICIENT      integer    Addition and multiplication can be performed on both floats and integers.      float    Addition and multiplication can be performed on both floats and integers.      x could be a string and y could be a float    Although possible, there's a more general answer.      string    Strings cannot be multiplied by a float.      Can't tell    You can tell from some of the operations that are performed on them.      What datatype is returned?   def cyu3(x: ???, y: ???) -> ???: COEFFICIENT = 2.5 return (x + y) * COEFFICIENT      integer    Since the sum of x and y is multiplied by a float, the value can not be an integer.      float    The sum of x and y is multiplied by a float, meaning the returned value is a float.      string    Strings cannot be multiplied by floats.      boolean    There are no boolean operations in the given function.      Can't tell    You can tell from some of the operations that are performed on it.      What should this function's header look like?   \"\"\" Calculates the combined areas of two squares. Parameters: width_a : _____ The width of the first square. width_b : _____ The width of the second square. Returns: _____ : The combined areas of the squares. \"\"\"      def squares_area(width_a: int, width_b: int) -> int:    Since both pieces of data are integers, and the formula for calculating the area of a square wouldn't result in a float given an integer, this would be correct.      def squares_area(width_a: float, width_b: float) -> int:    Based on the formula for finding the area of a square, and that no rounding is present, by giving this function two floats, an integer would not be returned.      def squares_area(width_a: int, width_b: int) -> float:    Based on the formula for finding the area of a square, and that the widths are only being multiplied, by giving this function two integers, a float could not be returned.      def squares_area(width_a: float, width_b: float) -> float:    Since both pieces of data are floats, and the formula for calculating the area of a square would result in a float given a float, this would be correct.      def squares_area(width_a, width_b):    Although technically correct, type hinting would make this function easier to interpret.     "
},
{
  "id": "p-1083",
  "level": "2",
  "url": "functions_decoding-a-function.html#p-1083",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "abstraction "
},
{
  "id": "p-1106",
  "level": "2",
  "url": "functions_decoding-a-function.html#p-1106",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding: decode this function definition "
},
{
  "id": "question4_6_1",
  "level": "2",
  "url": "functions_decoding-a-function.html#question4_6_1",
  "type": "Checkpoint",
  "number": "4.6.1",
  "title": "",
  "body": " How many parameters does function cyu3 take?   def cyu3(x: ???, y: ???) -> ???: COEFFICIENT = 2.5 return (x + y) * COEFFICIENT      0    Count the number of variable names inside the parenetheses on line 1.      1    Count the number of variable names inside the parenetheses on line 1.      2    x and y.      3    Count the number of variable names inside the parenetheses on line 1.      Can't tell    You can tell by looking inside the parentheses on line 1. Each variable name is separated by a comma.    "
},
{
  "id": "question4_6_2",
  "level": "2",
  "url": "functions_decoding-a-function.html#question4_6_2",
  "type": "Checkpoint",
  "number": "4.6.2",
  "title": "",
  "body": " What are the possible types of variables x and y?   def cyu3(x: ???, y: ???) -> ???: COEFFICIENT = 2.5 return (x + y) * COEFFICIENT      integer    Addition and multiplication can be performed on both floats and integers.      float    Addition and multiplication can be performed on both floats and integers.      x could be a string and y could be a float    Although possible, there's a more general answer.      string    Strings cannot be multiplied by a float.      Can't tell    You can tell from some of the operations that are performed on them.    "
},
{
  "id": "question4_6_3",
  "level": "2",
  "url": "functions_decoding-a-function.html#question4_6_3",
  "type": "Checkpoint",
  "number": "4.6.3",
  "title": "",
  "body": " What datatype is returned?   def cyu3(x: ???, y: ???) -> ???: COEFFICIENT = 2.5 return (x + y) * COEFFICIENT      integer    Since the sum of x and y is multiplied by a float, the value can not be an integer.      float    The sum of x and y is multiplied by a float, meaning the returned value is a float.      string    Strings cannot be multiplied by floats.      boolean    There are no boolean operations in the given function.      Can't tell    You can tell from some of the operations that are performed on it.    "
},
{
  "id": "question4_6_4",
  "level": "2",
  "url": "functions_decoding-a-function.html#question4_6_4",
  "type": "Checkpoint",
  "number": "4.6.4",
  "title": "",
  "body": " What should this function's header look like?   \"\"\" Calculates the combined areas of two squares. Parameters: width_a : _____ The width of the first square. width_b : _____ The width of the second square. Returns: _____ : The combined areas of the squares. \"\"\"      def squares_area(width_a: int, width_b: int) -> int:    Since both pieces of data are integers, and the formula for calculating the area of a square wouldn't result in a float given an integer, this would be correct.      def squares_area(width_a: float, width_b: float) -> int:    Based on the formula for finding the area of a square, and that no rounding is present, by giving this function two floats, an integer would not be returned.      def squares_area(width_a: int, width_b: int) -> float:    Based on the formula for finding the area of a square, and that the widths are only being multiplied, by giving this function two integers, a float could not be returned.      def squares_area(width_a: float, width_b: float) -> float:    Since both pieces of data are floats, and the formula for calculating the area of a square would result in a float given a float, this would be correct.      def squares_area(width_a, width_b):    Although technically correct, type hinting would make this function easier to interpret.    "
},
{
  "id": "functions_type-annotations",
  "level": "1",
  "url": "functions_type-annotations.html",
  "type": "Section",
  "number": "4.7",
  "title": "Type Annotations",
  "body": " Type Annotations  In the previous section, we discussed the decoding work that is required when you look at a function and are trying to determine the types of its parameters. In this section, we'll introduce a feature we hinted at earlier, that can help reduce the amount of sleuthing that is needed.  Consider the following function definition:   def duplicate(msg): \"\"\"Returns a string containing two copies of `msg`\"\"\" return msg + msg   This function is intended to duplicate a string message; if called with the value ‘Hello', it returns the value ‘HelloHello'. If called with other types of data, however, it will not work properly. (What will the function do if given an int or a float value?)  Python allows you to indicate the intended a parameter's data type and the function's return value type in a function definition using a special notation demonstrated in this example. Notice the syntax :   def duplicate(msg: str) -> str: \"\"\"Returns a string containing two copies of `msg`\"\"\" return msg + msg result = duplicate('Hello') print(result)   This definition of duplicate makes use of type annotations to suggest the function's expected parameter and return value types. A type annotation is an optional notation that specifies the data type for parameters and function result. It is an effort to tell the programmer using the function what kind of data to pass to the function, and what kind of data to expect when the function returns a value.  In the definition above, the annotation : str in msg: str indicates that the caller should pass a str value as an argument. The annotation -> str indicates that the function will produce a str result.  Here are some more examples of functions with type annotations:   def add(x: int, y: int) -> int: \"\"\"Returns the sum of `x` and `y`\"\"\" return x + y def get_number(msg: str) -> float: \"\"\"Prompts with `msg` for input; returns numeric response.\"\"\" return float(input(msg)) def display_msg(msg: str): \"\"\"Displays `msg` with dashed line underneath\"\"\" print(msg) print('-------------------------------------')   You are already familiar with many of the possible data types one could include in an annotation. You will know str , int , and float types. And later you will recognize and use bool and list , and Python has still more data types.  It's extremely important to understand that adding type annotations to a function definition does not cause the Python interpreter to check that the values passed to a function are the expected types, or cause the returned value to be converted to the expected type. For example, if the function add in the example above is called like this:  result = add('5', '15')  the function will receive two string values, concatenate them, and return the resulting string ‘515'. The int annotations are completely ignored by the Python interpreter. Think of type annotations as a kind of function documentation, and remember that they have no effect on the program's behavior.  Type annotations are an optional aspect of documenting functions, docstrings, and are an important tool to increase the readability of your code. You should use them in your programs.   Although type annotations are ignored by the Python interpreter, there are tools such as mypy that can analyze code containing type annotations and flag potential problems.    Check your understanding    What happens when the following is executed?   def display(msg: str): \"\"\"Displays `msg` on the screen\"\"\" print(msg + 2) display(2.5)      The value 4.5 is displayed on the screen.    Correct! Python ignores the ': str' annotation and returns the sum of msg (the float 2.5) + 2.      The value 2.52 is displayed on the screen.    Incorrect. In this call, msg contains the float value 2.5; the ': str' annotation serves only as documentation.      A crash occurs because 2.5 is not a string    Incorrect. Python ignores the ': str' annotation and allows the float value 2.5 to be passed to msg.      A crash occurs because the expression 'msg + 2' illegally attempts to concatenate a str and an int    Incorrect. In this call, msg contains the float value 2.5, not a str, so the + operation is legal.     "
},
{
  "id": "p-1155",
  "level": "2",
  "url": "functions_type-annotations.html#p-1155",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "type annotation "
},
{
  "id": "note-25",
  "level": "2",
  "url": "functions_type-annotations.html#note-25",
  "type": "Note",
  "number": "4.7.1",
  "title": "",
  "body": " Although type annotations are ignored by the Python interpreter, there are tools such as mypy that can analyze code containing type annotations and flag potential problems.  "
},
{
  "id": "p-1163",
  "level": "2",
  "url": "functions_type-annotations.html#p-1163",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question4_7_1",
  "level": "2",
  "url": "functions_type-annotations.html#question4_7_1",
  "type": "Checkpoint",
  "number": "4.7.2",
  "title": "",
  "body": " What happens when the following is executed?   def display(msg: str): \"\"\"Displays `msg` on the screen\"\"\" print(msg + 2) display(2.5)      The value 4.5 is displayed on the screen.    Correct! Python ignores the ': str' annotation and returns the sum of msg (the float 2.5) + 2.      The value 2.52 is displayed on the screen.    Incorrect. In this call, msg contains the float value 2.5; the ': str' annotation serves only as documentation.      A crash occurs because 2.5 is not a string    Incorrect. Python ignores the ': str' annotation and allows the float value 2.5 to be passed to msg.      A crash occurs because the expression 'msg + 2' illegally attempts to concatenate a str and an int    Incorrect. In this call, msg contains the float value 2.5, not a str, so the + operation is legal.    "
},
{
  "id": "functions_variables-and-parameters-are-local",
  "level": "1",
  "url": "functions_variables-and-parameters-are-local.html",
  "type": "Section",
  "number": "4.8",
  "title": "Variables and parameters are local",
  "body": " Variables and parameters are local  As has been discussed previously, when we use variables we have to first use assignment statements to create them and initialize with a value. Similarly, we define functions in the code before the code can invoke them. Computer science uses the term scope to describe where\/when an identified item (like a variable, a function etc.) is recognizable and accessible. Calling a function or using a variable before its definition or assignment will trigger a runtime error because the item is outside of the program's scope at that moment.  Scope becomes an even more important issue when large problems are decomposed with functions. Within a function, its parameters (and any other variable defined in the function's body) can only be accessed by code within the same scope. These local variables only exists inside the function and you cannot use them outside of them. For example, consider the following version of the square function:   We've omitted the docstring, type annotations, and have used non-self-documenting names in the following example on purpose, to put you into a similar position as the code's interpreter - it can only 'do' what the code tells it to and cannot 'know' what it is supposed to do. But it will follow the scope rules.    def square(x): y = x * x return y z = square(10) print(y) print(x) print(z)   Trace the code manually first. Make note of which variables are 'inside' the function's scope.  Next, click on Show in CodeLens and step through the code with the Next > button to follow the flow of execution . CodeLens indicates the scope of the variables with 'Frame' boxes. Variables whose scope is local to the function will be placed in a named box, and global variables (defined outside of the function) will stay in the global frame.  Go through the steps until you see an error message. When we try to access y on line 6 (outside the function's scope), Python looks for a global variable named y but does not find one. This results in the runtime error: NameError: name 'y' is not defined.   This is neither a syntax nor a semantic error - line 6 is syntactically correct and the algorithm is valid however...  The local variable y only exists while the function is being executed — we call this its lifetime . When the execution of the function terminates (returns), the local variables are destroyed and the code passes outside of the function's scope. CodeLens helps you visualize this because the function's local variables disappear after the function returns to the function caller's scope (line 5).  Go back and step through the statements again, paying particular attention to the variables that are created when the function is called and note when they are subsequently destroyed with the function's return.  Use Edit this code to delete line 6 print(y) and take a moment to work out for yourself what will now happen. Then Visualize Execution and proceed through all the steps. Answer for yourself what happened? Why?  By tracing the algorithm (the flow of execution ) and watching the CodeLens frames (scope), you can see that formal parameters are local variables; their scope is limited to within their function. For example, after square is called, the local variable x exists with the function's body (lines 2 and 3). The lifetime of all local variables (including parameters) then ends when the function completes its execution and the scope passes back to the calling instruction (line 3's return to line 6).  When a function assigns and uses a local variable, upon completing its execution, it is not possible to recover that local variable the next time it is called. Each call of the function creates new local variables, and their lifetimes expire when the function returns to the caller's scope.  Try stepping through the code again. Look for, understand and fix any other runtime errors .   Check Your Understanding    True or False: Local variables can be referenced outside of the function they were defined in.     True    Local variables cannot be referenced outside of the function they were defined in.      False    Local variables cannot be referenced outside of the function they were defined in.       What would be the result of running the following code?   x = 3 * 2 y = 1 def subtract(z): y = 10 return y - z print(subtract(x))      4    Correct, the output is right because the subtract function takes in x as the global variable for the z parameter and puts it into the function. The subtract function uses the local variable y for its return.      6    Incorrect, look again at what is being produced in the subtract function.      10    Incorrect, look again at what is being produced in the subtract function.      Code will give an error because x and z do not match.    Incorrect, there shouldn't be any error.      What would be the result of running the following code?   def adding(x): y = 3 z = y + x + x return z def producing(x): z = x * y return z print(producing(adding(4)))      33    Incorrect, look again at what is happening in producing.      12    Incorrect, look again at what is happening in producing.      There is an error in the code.    Yes! There is an error because we reference y in the producing function, but it was defined in adding. Because y is a local variable, we can't use it in both functions without initializing it in both. If we initialized y as 3 in both though, the answer would be 33.      What would be the result of running the following code?   x = 9 def adding(): x+=1 print(x) adding()      1    Incorrect, pay attention to the local scope in the function.      9    Incorrect, pay attention to the local scope in the function.      10    Incorrect, pay attention to the local scope in the function.      Error, local variable 'x' is referenced before assignment.    This code gives an error because the local variable 'x' was referenced in the local scope before it was assigned a value.     In the code below, notice and interpret the different error messages produced when each is run.    NameError: Local variables cannot be used (add one to 'existing value') if it does not yet have a value.  In a similar way, a function is not defined before its function header.    Local variables used within functions exist within the scope of that function, but they are considered unbound if they don't have a valid assignment statement.      v1 += 1 NameError: name 'v1' is not defined      foo() def foo(): v1 += 1 NameError: name 'foo' is not defined      def foo(): v1 += 1 foo() UnboundLocalError: local variable 'v1' referenced before assignment    Take a moment to work out how to 'fix' these runtime errors.  "
},
{
  "id": "p-1173",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#p-1173",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scope "
},
{
  "id": "p-1174",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#p-1174",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "local variables "
},
{
  "id": "note-26",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#note-26",
  "type": "Note",
  "number": "4.8.1",
  "title": "",
  "body": " We've omitted the docstring, type annotations, and have used non-self-documenting names in the following example on purpose, to put you into a similar position as the code's interpreter - it can only 'do' what the code tells it to and cannot 'know' what it is supposed to do. But it will follow the scope rules.  "
},
{
  "id": "p-1177",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#p-1177",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "flow of execution global variables "
},
{
  "id": "p-1180",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#p-1180",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lifetime "
},
{
  "id": "p-1183",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#p-1183",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "flow of execution "
},
{
  "id": "note-27",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#note-27",
  "type": "Note",
  "number": "4.8.2",
  "title": "",
  "body": "When a function assigns and uses a local variable, upon completing its execution, it is not possible to recover that local variable the next time it is called. Each call of the function creates new local variables, and their lifetimes expire when the function returns to the caller's scope. "
},
{
  "id": "p-1186",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#p-1186",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check Your Understanding "
},
{
  "id": "question4_8_1",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#question4_8_1",
  "type": "Checkpoint",
  "number": "4.8.3",
  "title": "",
  "body": " True or False: Local variables can be referenced outside of the function they were defined in.     True    Local variables cannot be referenced outside of the function they were defined in.      False    Local variables cannot be referenced outside of the function they were defined in.    "
},
{
  "id": "question4_8_2",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#question4_8_2",
  "type": "Checkpoint",
  "number": "4.8.4",
  "title": "",
  "body": " What would be the result of running the following code?   x = 3 * 2 y = 1 def subtract(z): y = 10 return y - z print(subtract(x))      4    Correct, the output is right because the subtract function takes in x as the global variable for the z parameter and puts it into the function. The subtract function uses the local variable y for its return.      6    Incorrect, look again at what is being produced in the subtract function.      10    Incorrect, look again at what is being produced in the subtract function.      Code will give an error because x and z do not match.    Incorrect, there shouldn't be any error.    "
},
{
  "id": "question4_8_3",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#question4_8_3",
  "type": "Checkpoint",
  "number": "4.8.5",
  "title": "",
  "body": " What would be the result of running the following code?   def adding(x): y = 3 z = y + x + x return z def producing(x): z = x * y return z print(producing(adding(4)))      33    Incorrect, look again at what is happening in producing.      12    Incorrect, look again at what is happening in producing.      There is an error in the code.    Yes! There is an error because we reference y in the producing function, but it was defined in adding. Because y is a local variable, we can't use it in both functions without initializing it in both. If we initialized y as 3 in both though, the answer would be 33.    "
},
{
  "id": "question4_8_4",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#question4_8_4",
  "type": "Checkpoint",
  "number": "4.8.6",
  "title": "",
  "body": " What would be the result of running the following code?   x = 9 def adding(): x+=1 print(x) adding()      1    Incorrect, pay attention to the local scope in the function.      9    Incorrect, pay attention to the local scope in the function.      10    Incorrect, pay attention to the local scope in the function.      Error, local variable 'x' is referenced before assignment.    This code gives an error because the local variable 'x' was referenced in the local scope before it was assigned a value.    "
},
{
  "id": "p-1220",
  "level": "2",
  "url": "functions_variables-and-parameters-are-local.html#p-1220",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unbound "
},
{
  "id": "functions_global-variables",
  "level": "1",
  "url": "functions_global-variables.html",
  "type": "Section",
  "number": "4.9",
  "title": "Global Variables",
  "body": " Global Variables  Variable names that are at the top-level , not inside any function definition, are called global variables and they have a global scope.  It is possible and syntactically valid for a function to access a global variable. However, doing so is considered bad form by nearly all programmers and should be avoided. This subsection includes some examples that illustrate the potential interactions of global and local variables. These will help you better understand variable scope. Hopefully, they will also convince you that things can get pretty confusing when you mix local and global variables, and that you really shouldn't do it.   Instructor's Note  Relying on global variables is a really bad habit to pick up, as Python is a language that lets you get away with globals pretty easily. As you move on to other languages, you'll be in for a world of pain if you don't learn to avoid globals. Be warned.   Look at the following, working but poor form variation of the square function.   def badsquare(x): y = x ** power return y power = 2 result = badsquare(10) print(result)   Although the badsquare function works, it is poorly written. It illustrates an important rule about how variables are looked up in Python. First, Python looks at the variables that are defined as local variables in the function. Recall, this is the function's local scope. If the variable name is not found in the local scope, then Python looks at the global variables, or global scope. This is the case illustrated in the code above. The variable power is not found locally in badsquare but it does exist globally. The appropriate way to write this function would be to pass power as a second parameter. Practice this by using Edit this code to rewrite the badsquare example to have a second parameter.  There is another variation on this theme of local versus global variables. Assignment statements in the local function cannot change variables defined outside the function. Consider the following CodeLens example:   def powerof(x,p): power = p # Another dumb mistake y = x ** power return y power = 3 result = powerof(10,2) print(result)   Now step through the code. What do you notice about the values of variable power in the local scope compared to the variable power in the global scope?  There are two variables called power , each with a different scope: a power variable local to the function's scope (created at line 3 inside the function), and a separate power variable that has global scope (assigned a value at line 7).  When a variable name is used on the left hand side of an assignment statement Python creates a variable that with a set scope. When a local variable has the same name as a global variable we say that the local shadows the global. A shadow means that the global variable cannot be accessed by Python because the local variable will be found first. This is another good reason not to use global variables with the same names as local variables. As you can see, it makes your code confusing and difficult to understand.  If you really want to change the value of a global variable inside a function, you can can do it by explicitly declaring the variable to be global, as in the example below. Again, you should not do this in your code. The example is here only to illustrate how scope in Python works.   def powerof(x,p): global power # a really... power = p # ...bad idea, but valid code y = x ** power return y power = 3 result = powerof(10,2) print(result) print(power)   To cement your understanding of these ideas even further lets look at one final example. Inside the following square function we are going to make an assignment to the parameter x in line 3. There's no good reason to do this other than to emphasize the fact that the parameter x is a local variable. If you step through the example in codelens you will see that although x is 0 in the local variables for square , the x in the global scope remains 2. This is confusing to many beginning programmers who think that an assignment to a formal parameter will cause a change to the value of the variable that was used as the actual parameter, especially when the two share the same name. But this example demonstrates that that is clearly not how Python operates.   def square(x): y = x * x x = 0 # assign a new value to the parameter x return y x = 2 z = square(x) print(z)     Instructor's Counsel:  Just because you can, doesn't mean you should. Global variables exist, but, as a novice programmer, you really should not use them (except in the case of named constants ).    Check your understanding    What is a variable's scope?     Its value    Value is the contents of the variable. Scope concerns where the variable is \"known\".      The range of statements in the code where a variable can be accessed.    Correct.      Its name    The name of a variable is just an identifier or alias. Scope concerns where the variable is \"known\".      What is a local variable?     A temporary variable that is only used inside a function    Yes, a local variable is a temporary variable that is only known (only exists) in the function it is defined in.      The same as a parameter    While parameters may be considered local variables, functions may also define and use additional local variables.      Another name for any variable    Variables that are used outside a function are not local, but rather global variables.      Can you use the same name for a local variable as a global variable?     Yes, and there is no reason not to.    While there is no problem as far as Python is concerned, it is generally considered bad style because of the potential for the programmer to get confused.      Yes, but it is considered bad form.    it is generally considered bad style because of the potential for the programmer to get confused. If you must use global variables (also generally bad form) make sure they have unique names.      No, it will cause an error.    Python manages global and local scope separately and has clear rules for how to handle variables with the same name in different scopes, so this will not cause a Python error.      Are there any times one should use global variables? No.  More correctly, you should not use global variables unless there is a very good reason.  The problem with with global variables is that they can easily lead to unintentional changes that propagate throughout the the entire programs. While it may make sense to change a global variable for one specific function, doing so may mess up the processing for all the other functions. Consider a function that is designed to round and display an assessment's mark to the nearest whole percentage (78.7% becomes 79%). However, when calculating an overall course grade, we don't use the individual assignments' rounded marks, we use their raw, unrounded marks (you don't 'round' a 'rounded' mark). So global changes to individual assessement grades would make the overall course grade incorrect. However, it might make sense to round the overall course grade (changed as a global variable) when that final overall grade is being sent to the Registrar.  An example of an appropriate use of a global variable is the use of a constant by a series of functions. In the example below, PI is a global variable (a constant) that does not need to be defined locally for each of the functions. Do note, PI is not changed within any of the functions.    from math import pi as PI def area_circle( any_radius: float ) -> float: \"\"\"with any length greater than zero, returns area\"\"\" return (PI * any_radius**2) def circumference_circle(any_radius:float) -> float: \"\"\"with any length greater than zero, returns circumference\"\"\" return (2 * PI * any_radius) def volume_sphere(any_radius:float) -> float: \"\"\"With any length greater than zero, returns volume\"\"\" return (4\/3 * PI * any_radius**3)     "
},
{
  "id": "p-1225",
  "level": "2",
  "url": "functions_global-variables.html#p-1225",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "global variables "
},
{
  "id": "note-28",
  "level": "2",
  "url": "functions_global-variables.html#note-28",
  "type": "Note",
  "number": "4.9.1",
  "title": "Instructor’s Note.",
  "body": " Instructor's Note  Relying on global variables is a really bad habit to pick up, as Python is a language that lets you get away with globals pretty easily. As you move on to other languages, you'll be in for a world of pain if you don't learn to avoid globals. Be warned.  "
},
{
  "id": "p-1233",
  "level": "2",
  "url": "functions_global-variables.html#p-1233",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "shadow "
},
{
  "id": "note-29",
  "level": "2",
  "url": "functions_global-variables.html#note-29",
  "type": "Note",
  "number": "4.9.2",
  "title": "",
  "body": "  Instructor's Counsel:  Just because you can, doesn't mean you should. Global variables exist, but, as a novice programmer, you really should not use them (except in the case of named constants ).  "
},
{
  "id": "question4_9_1",
  "level": "2",
  "url": "functions_global-variables.html#question4_9_1",
  "type": "Checkpoint",
  "number": "4.9.3",
  "title": "",
  "body": " What is a variable's scope?     Its value    Value is the contents of the variable. Scope concerns where the variable is \"known\".      The range of statements in the code where a variable can be accessed.    Correct.      Its name    The name of a variable is just an identifier or alias. Scope concerns where the variable is \"known\".    "
},
{
  "id": "question4_9_2",
  "level": "2",
  "url": "functions_global-variables.html#question4_9_2",
  "type": "Checkpoint",
  "number": "4.9.4",
  "title": "",
  "body": " What is a local variable?     A temporary variable that is only used inside a function    Yes, a local variable is a temporary variable that is only known (only exists) in the function it is defined in.      The same as a parameter    While parameters may be considered local variables, functions may also define and use additional local variables.      Another name for any variable    Variables that are used outside a function are not local, but rather global variables.    "
},
{
  "id": "question4_9_3",
  "level": "2",
  "url": "functions_global-variables.html#question4_9_3",
  "type": "Checkpoint",
  "number": "4.9.5",
  "title": "",
  "body": " Can you use the same name for a local variable as a global variable?     Yes, and there is no reason not to.    While there is no problem as far as Python is concerned, it is generally considered bad style because of the potential for the programmer to get confused.      Yes, but it is considered bad form.    it is generally considered bad style because of the potential for the programmer to get confused. If you must use global variables (also generally bad form) make sure they have unique names.      No, it will cause an error.    Python manages global and local scope separately and has clear rules for how to handle variables with the same name in different scopes, so this will not cause a Python error.    "
},
{
  "id": "note-30",
  "level": "2",
  "url": "functions_global-variables.html#note-30",
  "type": "Note",
  "number": "4.9.6",
  "title": "",
  "body": " Are there any times one should use global variables? No.  More correctly, you should not use global variables unless there is a very good reason.  The problem with with global variables is that they can easily lead to unintentional changes that propagate throughout the the entire programs. While it may make sense to change a global variable for one specific function, doing so may mess up the processing for all the other functions. Consider a function that is designed to round and display an assessment's mark to the nearest whole percentage (78.7% becomes 79%). However, when calculating an overall course grade, we don't use the individual assignments' rounded marks, we use their raw, unrounded marks (you don't 'round' a 'rounded' mark). So global changes to individual assessement grades would make the overall course grade incorrect. However, it might make sense to round the overall course grade (changed as a global variable) when that final overall grade is being sent to the Registrar.  An example of an appropriate use of a global variable is the use of a constant by a series of functions. In the example below, PI is a global variable (a constant) that does not need to be defined locally for each of the functions. Do note, PI is not changed within any of the functions.    from math import pi as PI def area_circle( any_radius: float ) -> float: \"\"\"with any length greater than zero, returns area\"\"\" return (PI * any_radius**2) def circumference_circle(any_radius:float) -> float: \"\"\"with any length greater than zero, returns circumference\"\"\" return (2 * PI * any_radius) def volume_sphere(any_radius:float) -> float: \"\"\"With any length greater than zero, returns volume\"\"\" return (4\/3 * PI * any_radius**3)    "
},
{
  "id": "functions_functions-can-call-other-functions-composition",
  "level": "1",
  "url": "functions_functions-can-call-other-functions-composition.html",
  "type": "Section",
  "number": "4.10",
  "title": "Functions can call other functions (Composition)",
  "body": " Functions can call other functions (Composition)  It is important to understand that each of the functions we write can be used and called from other functions we write. This is one of the most important ways that computer programmers take a large problem and break it down into a group of smaller problems. This process of breaking a problem into smaller, more easily solved, subproblems is called functional decomposition .  Here's a simple example of functional decomposition using two functions. The first function called square simply computes the square of a given number. The second function called sum_of_squares makes use of square to compute the sum of three numbers that have been squared. BTW: This 'sum of squares' process is part of a very common statistical calcuation used to determine variation and ultimately standard deviation.   def square(x): y = x * x return y def sum_of_squares(x,y,z): a = square(x) b = square(y) c = square(z) return a+b+c a = -5 b = 2 c = 10 result = sum_of_squares(a,b,c) print(result)   Even though this is a pretty simple idea, in practice this example illustrates many very important Python concepts, including local variables, global variables, parameter passing, and how a larger function can be decomposed into smaller sub-functions.The function sum_of_squares is composed of the square function and some addition.  Note that the body of square is not executed until it is called from inside the sum_of_squares function for the first time on line 6.  Also notice that when square is called (at Steps 8, 13, and 18), there are two groups of local variables, one for square and one for sum_of_squares . Each group of local variables is called a stack frame . The variables x , and y are local variables in both functions. These are completely different variables, even though they have the same name. Each function invocation creates a new frame, and variables are looked up in that frame. Notice that at step 11, y has the value 25 is one frame and 2 in the other.  What happens when you to refer to variable y on line 3 at this step? Python looks up the value of y in the stack frame for the square function. If it didn't find it there, it would go look in the global frame.  Let's use composition to build up another function: finding the area of any regular polygon.  Knowing that:   Regular polygons are 2D shapes that have more than 3 sides where all sides have the same length.  The perpendicular measurement from the midpoint of one of the sides to the center of the polygon is called the apothem .  The length of the apothem for a polygon with sides of length can be found with:      The perimeter of the polygon can be found with:       Then the area of a regular polygon can be found with the following formula:     We can decompose the problem of finding the area of a regular polygon into:    Set the number of sides.    Set the length of the sides.    Determine the apothem.    Determine the perimeter.    Determine the area.    Thus the sub functions are:   def apothem (sides:int,length:float ) -> float: \"\"\"With sides more than 3 and length greater than zero\"\"\" from math import tan, radians # math module's tan only works in radians an_apo = length \/ (2 * tan (radians(180\/sides))) return an_apo def perimeter (sides:int, length:float) -> float: \"\"\"with sides more than 3 and length greater than zero\"\"\" a_per = sides * length return a_per def area(sides:int, length:float)->float: \"\"\"with sides more than 3 and length greater than zero\"\"\" apo = apothem(sides,length) per = perimeter(sides, length) return per * apo \/2   On paper , trace what will happen, the values of the local and global variables with this function call testing a square with of 10 units long: test=area(4,10) . Try some other polygons of your own to test the algorithm. In your own words, express how the algorithm to find the area of a regular polygon has been functionally decomposed.   Check your Understanding    1. Write two functions, one called addit and one called mult . addit takes one number as an input and adds 5. mult takes one number as an input, and multiplies that input by whatever is returned by addit , and then returns the result.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(mult(1), 6,\"Testing the function mult with input 1 (should be 6)\") self.assertEqual(mult(-2), -6, \"Testing the function mult with input -2 (should be -6)\") self.assertEqual(mult(0), 0, \"Testing the function mult with input 0 (should be 0)\") def testTwo(self): self.assertEqual(addit(1), 6, \"Testing the function addit with input 1 (should be 6)\") self.assertEqual(addit(-2), 3, \"Testing the function addit with input -2 (should be 3)\") self.assertEqual(addit(0), 5, \"Testing the function addit with input 0 (should be 5)\") myTests().main()   "
},
{
  "id": "p-1264",
  "level": "2",
  "url": "functions_functions-can-call-other-functions-composition.html#p-1264",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "functional decomposition "
},
{
  "id": "p-1268",
  "level": "2",
  "url": "functions_functions-can-call-other-functions-composition.html#p-1268",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stack frame "
},
{
  "id": "ac4_10_1",
  "level": "2",
  "url": "functions_functions-can-call-other-functions-composition.html#ac4_10_1",
  "type": "Checkpoint",
  "number": "4.10.1",
  "title": "",
  "body": " 1. Write two functions, one called addit and one called mult . addit takes one number as an input and adds 5. mult takes one number as an input, and multiplies that input by whatever is returned by addit , and then returns the result.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(mult(1), 6,\"Testing the function mult with input 1 (should be 6)\") self.assertEqual(mult(-2), -6, \"Testing the function mult with input -2 (should be -6)\") self.assertEqual(mult(0), 0, \"Testing the function mult with input 0 (should be 0)\") def testTwo(self): self.assertEqual(addit(1), 6, \"Testing the function addit with input 1 (should be 6)\") self.assertEqual(addit(-2), 3, \"Testing the function addit with input -2 (should be 3)\") self.assertEqual(addit(0), 5, \"Testing the function addit with input 0 (should be 5)\") myTests().main()  "
},
{
  "id": "functions_flow-of-execution-summary",
  "level": "1",
  "url": "functions_flow-of-execution-summary.html",
  "type": "Section",
  "number": "4.11",
  "title": "Flow of Execution Summary",
  "body": " Flow of Execution Summary  When you are working with functions it is really important to know the order in which statements are executed. This is called the flow of execution . We've already talked about it a number of times in this chapter and you've practiced every time you've traced the steps of an algorithm.  Execution always begins at the first statement of the program. Statements are executed one at a time, in order, from top to bottom. Function definitions do not alter the flow of execution of the program, but remember that statements inside a function are not executed until the function is called. Function calls are like a detour in the flow of execution. Instead of going to the next statement, the flow jumps into the scope of that called function, to the function's first line, executes all the statements there, and then comes back to pick up where it left off.  That sounds simple enough, until you remember that one function can call another. While in the middle of one function, the program might have to execute the statements in another function. And while executing that new function, the program might have to execute yet another function!  Fortunately, the Python interperter is adept at keeping track of where it is, so each time a function completes, the program picks up where it left off in the function that called it. When it gets to the end of the program, it terminates.  What does all that mean for us when we try to understand a program? Don't just read from top to bottom. Instead, follow the flow of execution . This means that you will read the def statements as you are scanning from top to bottom, but you should skip the body of the function until you reach a point where that function is called.   Check your understanding    Consider the following Python code.   def pow(b, p): y = b ** p return y def square(x): a = pow(x, 2) return a n = 5 result = square(n) print(result)   What does this function print?     25    The function square returns the square of its input (via a call to pow).      5    What is printed is the output of the square function. 5 is the input to the square function.      125    Notice that pow is called from within square with a base (b) of 5 and a power (p) of two.      32    Notice that pow is called from within square with a base (b) of 5 and a power (p) of two.     "
},
{
  "id": "p-1290",
  "level": "2",
  "url": "functions_flow-of-execution-summary.html#p-1290",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "flow of execution "
},
{
  "id": "p-1295",
  "level": "2",
  "url": "functions_flow-of-execution-summary.html#p-1295",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question4_11_1",
  "level": "2",
  "url": "functions_flow-of-execution-summary.html#question4_11_1",
  "type": "Checkpoint",
  "number": "4.11.1",
  "title": "",
  "body": " Consider the following Python code.   def pow(b, p): y = b ** p return y def square(x): a = pow(x, 2) return a n = 5 result = square(n) print(result)   What does this function print?     25    The function square returns the square of its input (via a call to pow).      5    What is printed is the output of the square function. 5 is the input to the square function.      125    Notice that pow is called from within square with a base (b) of 5 and a power (p) of two.      32    Notice that pow is called from within square with a base (b) of 5 and a power (p) of two.    "
},
{
  "id": "functions_print-vs-return",
  "level": "1",
  "url": "functions_print-vs-return.html",
  "type": "Section",
  "number": "4.12",
  "title": "Print vs. return",
  "body": " Print vs. return  Many beginning programmers find the distinction between a non-fruitful-, void-fuction that prints the results, and a fruitful function that returns a value, very confusing. This is especially difficult since most of the illustrations of return values in intro texts like this one show the returned value from a function call by printing it, as in print(square(g(2))) .  The print statement is fairly easy to understand. It takes a Python object and outputs a printed representation of it in the output window. You can think of the print statement as something that takes an object from the land of the program and makes it visible to the land of the human observer\/program user.   Print is for people . Remember that slogan. Printing has no effect on the ongoing execution of a program. It doesn't assign a value to a variable. It doesn't return a value from a function call.  Return is for reuse . When you, the programmer, need to use or reuse a value determined by a function in a later step of your program, you should assign it to a variable. Ensure the function's return value goes to a variable.   If you're confused, chances are the source of your confusion is really about returned values and the evaluation of complex expressions. A function that returns a value is producing a value for use by the program , in particular for use in the part of the code where the function was invoked. Remember that when a function is invoked, the function's code block is executed – all that code indented under the def statement gets executed, following the rules of the Python language for what should and should not execute as it flows through the program. But when the function returns, control goes back to the calling location, and a return value can come back with it.  You've seen some function calls in earlier chapters. When we told you about the function square that we defined, you saw that the expression square(2) evaluated to the integer value 4 .  That's because the square function returns a value: the square of whatever input is passed into it.  What do you use the result of a function call for? There are many possibilities.       Save it for later.  The returned value may be: The last two possibilities, data structures and files, will be discussed in later chapters     Assigned to a variable. For example, w = square(3)    Put into a data structure like a list. For example, L.append(square(3))    Sent to a file. For example, someFile.write(square(3))           Use it in a more complex expression.  In that case, think of the return value as replacing the entire text of the function invocation. For example, if there is a line of code w = square(square(3) + 7) - 5 , think of the return value 9 replacing the text square(3) in that invocation, so it becomes square(9 + 7) -5 .        Print it for human consumption.  For example, print(square(3)) outputs 9 to the output area. Note that, unless the return value is first saved as in possibility 1, it will be available only to the humans watching the output area, not to the program as it continues executing.       If your only purpose in running a function is to make an output visible for human consumption, there are two ways to do it. You can put one or more print statements inside the function definition and not bother to return anything from the function (the value None will be returned). In that case, invoke the function without a print statement. For example, you can have an entire line of code that reads f(3) . That will run the function f and throw away the return value. Of course, if square doesn't print anything out, it's useless to call it and do nothing with the return value. But with a function that has print statements inside it, it can be quite useful.  The other possibility is to return a value from the function and print it, as in print(f(3)) . As you start to write larger, more complex programs, this will be more typical. Indeed the print statement will usually only be a temporary measure while you're developing the program. Eventually, you'll end up calling f and saving the return value or using it as part of a more complex expression.  You will know you've really internalized the idea of functions when you are no longer confused about the difference between print and return. Keep working at it until it makes sense to you!   Check your understanding    What will the following code output?   def square(x): return x*x def g(y): return y + 3 def h(y): return square(y) + 3 print(h(2))      2    2 is the input; the value returned from h is what will be printed.      5    Don't forget that 2 gets squared.      7    First square 2, then add 3.      25    3 is added to the result of squaring 2      Error: y has a value but x is an unbound variable inside the square function    When square is called, x is bound to the parameter value that is passed in, 2.      What will the following code output?   def square(x): return x*x def g(y): return y + 3 def h(y): return square(y) + 3 print(g(h(2)))      2    Better read the section above one more time.      5    Better read the section above one more time.      7    That's h(2), but it is passed to g.      10    h(2) returns 7, so y is bound to 7 when g is invoked.      Error: you can't nest function calls    Ah, but you can nest function calls.     "
},
{
  "id": "note-31",
  "level": "2",
  "url": "functions_print-vs-return.html#note-31",
  "type": "Note",
  "number": "4.12.1",
  "title": "",
  "body": " Print is for people . Remember that slogan. Printing has no effect on the ongoing execution of a program. It doesn't assign a value to a variable. It doesn't return a value from a function call.  Return is for reuse . When you, the programmer, need to use or reuse a value determined by a function in a later step of your program, you should assign it to a variable. Ensure the function's return value goes to a variable.  "
},
{
  "id": "p-1325",
  "level": "2",
  "url": "functions_print-vs-return.html#p-1325",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question4_12_1",
  "level": "2",
  "url": "functions_print-vs-return.html#question4_12_1",
  "type": "Checkpoint",
  "number": "4.12.2",
  "title": "",
  "body": " What will the following code output?   def square(x): return x*x def g(y): return y + 3 def h(y): return square(y) + 3 print(h(2))      2    2 is the input; the value returned from h is what will be printed.      5    Don't forget that 2 gets squared.      7    First square 2, then add 3.      25    3 is added to the result of squaring 2      Error: y has a value but x is an unbound variable inside the square function    When square is called, x is bound to the parameter value that is passed in, 2.    "
},
{
  "id": "question4_12_2",
  "level": "2",
  "url": "functions_print-vs-return.html#question4_12_2",
  "type": "Checkpoint",
  "number": "4.12.3",
  "title": "",
  "body": " What will the following code output?   def square(x): return x*x def g(y): return y + 3 def h(y): return square(y) + 3 print(g(h(2)))      2    Better read the section above one more time.      5    Better read the section above one more time.      7    That's h(2), but it is passed to g.      10    h(2) returns 7, so y is bound to 7 when g is invoked.      Error: you can't nest function calls    Ah, but you can nest function calls.    "
},
{
  "id": "functions_glossary",
  "level": "1",
  "url": "functions_glossary.html",
  "type": "Section",
  "number": "4.13",
  "title": "Glossary",
  "body": " Glossary    abstraction  A common computer programming approach and problem solving technique where, in order to make the algorithm less complex easier to understand, the various sub-steps to the solution are 'hidden' within a named object (like a function) - the abstraction. Then to solve a problem the the programmer refers to this and other abstractions without having conceptualize their inner workings.    argument  A value provided to a function when the function is called. This value is assigned to the corresponding parameter in the function. The argument can be the result of an expression which may involve operators, operands and calls to other fruitful functions. Also called actual parameters or parameter values.    body  The second part of a compound statement. The body consists of a sequence of statements all indented the same amount from the beginning of the header. The standard amount of indentation used within the Python community is 4 spaces.    compound statement  A statement that consists of two parts:     header - which begins with a keyword determining the statement type, and ends with a colon.    body - containing one or more statements indented the same amount from the header.     The syntax of a compound statement looks like this:   keyword expression: statement statement ...     decomposition  A computer science problem solving technique where a complex problem is broken into simpler (more easily solved) sub-parts who's solutions are often coded for separately (often with functions). Also known as factoring , decomposed programs are easier to design, understand, code, and maintain.    docstring  Triple-quoted string, placed as the first line(s) of a function, that documents the function as its __doc__ attribute.    flow of execution  The order in which statements are executed during a program run.    function  A named sequence of statements that performs a specific operation. Specific functions can then be used (repeatedly and in conjuction with other functions) to solve more complicated problems. Functions may or may not take parameters and may or may not produce a result.    function call  Also known as a function invocation. A statement that executes a function. It consists of the name of the function followed by a list of arguments enclosed in parentheses.    function composition  Using the output from one function call as the input to another.    function definition  A statement that creates a new function, specifying its name, parameters, and the statements it executes.    fruitful function  A function that returns a value when it is called.    global variable  A variable defined at the top level, not inside any function.    header line  The first part of a compound statement. A header line begins with a keyword and ends with a colon (:)    lifetime  Variables and objects have lifetimes — they are created at some point during program execution, and will be destroyed at some time. In python, objects live as long as there is some variable pointing to it, or it is part of some other compound object, like a list or a dictionary. In python, local variables live only until the function finishes execution.    local variable  A variable defined inside a function. A local variable can only be used inside its function.It's scope means it only exists while the function's code is being executed. Trying to access (to display or for later processing) a local variable outside of, or after a function will produce a runtime error - NameError: variable name is not defined . Parameters of a function are also a special kind of local variable.    non-fruitful (void) function  A function that does not return a value upon invocation. In some languages, this kind of function is called a procedure.    None  A special Python value. One use in Python is that it is returned by functions that do not execute a return statement with a return argument.    parameter  A name used inside a function to refer to the value which was passed to it as an argument.    parameter list  Also, formal parameters, ideal parameters, or parameter names, the ordered names of the parameters listed in the function definition.    return  The keyword or a statement, optionally followed by a value, ends a function call and provides a return value from the function to the caller.    return value  The value provided as the result of a function call.    scope  A description of where an identified item (a variable, a function etc.) is recognized and accessible: where in a program is that item valid to be used. For example, a function can only be called after it has been defined. A parameter within a function can only be accessed by instructions within the function.    side effect  Some lasting effect of a function call, other than its return value. Side effects include print statements, changes to mutable objects, and changes to the values of global variables.    stack frame  A frame that keeps track of the values of local variables during a function execution (within the scope of the function), and where (what scope) to return control to when the function execution completes.    type annotation  An optional notation that specifies the type of a function parameter or function result.    "
},
{
  "id": "functions_chapter-assessment",
  "level": "1",
  "url": "functions_chapter-assessment.html",
  "type": "Section",
  "number": "4.14",
  "title": "Chapter Assessment",
  "body": " Chapter Assessment   Write a function called int_return that takes an integer as input and returns the same integer.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(int_return(10), 10, \"Testing that function int_return(10) returns 10\") myTests().main()    Write a function called add that takes any number as its input and returns that sum with 2 added.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwo(self): self.assertEqual(add(-2), 0, \"Testing that add(-2) returns 0\") self.assertEqual(add(6), 8, \"Testing that add(6) returns 8\") self.assertEqual(add(4), 6, \"Testing that add(4) returns 6\") myTests().main()    Write a function called change that takes any string, adds Nice to meet you! to the end of the argument given, and returns that new string.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testThree(self): self.assertEqual(change(\"I'm Bob. \"), \"I'm Bob. Nice to meet you!\", \"Tests that change('I'm Bob. '') returns 'I'm Bob. Nice to meet you!'\") self.assertEqual(change(\"\"), \"Nice to meet you!\", \"Tests that change() returns 'Nice to meet you!'\") myTests().main()    Write a function, addup , that takes five integers as inputs and returns the sum of those integers.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFourA(self): self.assertEqual(addup(1, 2, 3, 4, 5), 15, \"Tests that addup(1, 2, 3, 4, 5) returns 15\") self.assertEqual(addup(0, 0, 0, 0, 1), 1, \"Tests that addup(0, 0, 0, 0, 1) returns 1\") self.assertEqual(addup(-1, 1, -2, 2, -3), -3, \"Tests that addup(-1, 1, -2, 2, -3) returns -3\") myTests().main()     You will need to write two functions for this problem. The first function, divide that takes in any number and returns that same number divided by 2. The second function called sum should take any number, divide it by 2, and add 6. It should return this new number. You should call the divide function within the sum function. Do not worry about decimals.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testSixA(self): self.assertEqual(divide(4), 2, \"Tests that divide(4) returns 2\") def testSixB(self): self.assertEqual(sum(4), 8, \"Tests that sum(4) returns 8\") self.assertEqual(sum(2), 7, \"Tests that sum(2) returns 7\") self.assertEqual(sum(-6), 3, \"Tests that sum(-6) returns 3\") self.assertEqual(sum(0), 6, \"Tests that sum(0) returns 6\") myTests().main()    You will need to write three functions for this problem.    The first function, average that takes in any three numbers and returns the average.    The second function called diffSquare that takes one number and the average of the three numbers, subtracts those numbers, and then returns the square of this difference.    A third function called stdev which is passed the three numbers and then:    Calls on average to find the averaage of those three values, and assign the resulting average to a local variable.    Calls on diffSquare three times, passing each of the three numbers in turn and the local variable average, assigning the resulting squared differences to three local variables.    Calls on average again, this time passing in the three squared differences, and assigning this new average to a variable called variance .      Finally, stdev finds the square root of variance as the standard deviation    Do not worry about rounding the decimals.   \"\"\" Using these values: 10, 13, 15, you should get: - an average of 12.66666667. - these squared differences are: 7.1111111 0.11111111, 5.4444444 - which sum to 12.66666667 and average to be 4.2222222 - the square root of which is: 2.054804667 \"\"\"\" def average( , , ): return mean def diffSquare( , ): return squaredDifference def stdev( , , ): variance = average ( , , ) return variance**(1\/2) print('The standard deviation of the values 10, 13 and 15 is', stdev(10,13,15))   "
},
{
  "id": "ac4_15_1",
  "level": "2",
  "url": "functions_chapter-assessment.html#ac4_15_1",
  "type": "Checkpoint",
  "number": "4.14.1",
  "title": "",
  "body": " Write a function called int_return that takes an integer as input and returns the same integer.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(int_return(10), 10, \"Testing that function int_return(10) returns 10\") myTests().main()  "
},
{
  "id": "ac4_15_2",
  "level": "2",
  "url": "functions_chapter-assessment.html#ac4_15_2",
  "type": "Checkpoint",
  "number": "4.14.2",
  "title": "",
  "body": " Write a function called add that takes any number as its input and returns that sum with 2 added.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwo(self): self.assertEqual(add(-2), 0, \"Testing that add(-2) returns 0\") self.assertEqual(add(6), 8, \"Testing that add(6) returns 8\") self.assertEqual(add(4), 6, \"Testing that add(4) returns 6\") myTests().main()  "
},
{
  "id": "ac4_15_3",
  "level": "2",
  "url": "functions_chapter-assessment.html#ac4_15_3",
  "type": "Checkpoint",
  "number": "4.14.3",
  "title": "",
  "body": " Write a function called change that takes any string, adds Nice to meet you! to the end of the argument given, and returns that new string.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testThree(self): self.assertEqual(change(\"I'm Bob. \"), \"I'm Bob. Nice to meet you!\", \"Tests that change('I'm Bob. '') returns 'I'm Bob. Nice to meet you!'\") self.assertEqual(change(\"\"), \"Nice to meet you!\", \"Tests that change() returns 'Nice to meet you!'\") myTests().main()  "
},
{
  "id": "ac4_15_4",
  "level": "2",
  "url": "functions_chapter-assessment.html#ac4_15_4",
  "type": "Checkpoint",
  "number": "4.14.4",
  "title": "",
  "body": " Write a function, addup , that takes five integers as inputs and returns the sum of those integers.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFourA(self): self.assertEqual(addup(1, 2, 3, 4, 5), 15, \"Tests that addup(1, 2, 3, 4, 5) returns 15\") self.assertEqual(addup(0, 0, 0, 0, 1), 1, \"Tests that addup(0, 0, 0, 0, 1) returns 1\") self.assertEqual(addup(-1, 1, -2, 2, -3), -3, \"Tests that addup(-1, 1, -2, 2, -3) returns -3\") myTests().main()  "
},
{
  "id": "ac4_15_5",
  "level": "2",
  "url": "functions_chapter-assessment.html#ac4_15_5",
  "type": "Checkpoint",
  "number": "4.14.5",
  "title": "",
  "body": " You will need to write two functions for this problem. The first function, divide that takes in any number and returns that same number divided by 2. The second function called sum should take any number, divide it by 2, and add 6. It should return this new number. You should call the divide function within the sum function. Do not worry about decimals.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testSixA(self): self.assertEqual(divide(4), 2, \"Tests that divide(4) returns 2\") def testSixB(self): self.assertEqual(sum(4), 8, \"Tests that sum(4) returns 8\") self.assertEqual(sum(2), 7, \"Tests that sum(2) returns 7\") self.assertEqual(sum(-6), 3, \"Tests that sum(-6) returns 3\") self.assertEqual(sum(0), 6, \"Tests that sum(0) returns 6\") myTests().main()  "
},
{
  "id": "ac4_15_6",
  "level": "2",
  "url": "functions_chapter-assessment.html#ac4_15_6",
  "type": "Checkpoint",
  "number": "4.14.6",
  "title": "",
  "body": " You will need to write three functions for this problem.    The first function, average that takes in any three numbers and returns the average.    The second function called diffSquare that takes one number and the average of the three numbers, subtracts those numbers, and then returns the square of this difference.    A third function called stdev which is passed the three numbers and then:    Calls on average to find the averaage of those three values, and assign the resulting average to a local variable.    Calls on diffSquare three times, passing each of the three numbers in turn and the local variable average, assigning the resulting squared differences to three local variables.    Calls on average again, this time passing in the three squared differences, and assigning this new average to a variable called variance .      Finally, stdev finds the square root of variance as the standard deviation    Do not worry about rounding the decimals.   \"\"\" Using these values: 10, 13, 15, you should get: - an average of 12.66666667. - these squared differences are: 7.1111111 0.11111111, 5.4444444 - which sum to 12.66666667 and average to be 4.2222222 - the square root of which is: 2.054804667 \"\"\"\" def average( , , ): return mean def diffSquare( , ): return squaredDifference def stdev( , , ): variance = average ( , , ) return variance**(1\/2) print('The standard deviation of the values 10, 13 and 15 is', stdev(10,13,15))  "
},
{
  "id": "conditionals_intro-what-we-can-do-with-turtles-and-conditionals",
  "level": "1",
  "url": "conditionals_intro-what-we-can-do-with-turtles-and-conditionals.html",
  "type": "Section",
  "number": "5.1",
  "title": "Intro: What we can do with Turtles and Conditionals",
  "body": " Intro: What we can do with Turtles and Conditionals  So far, our programs have either been a series of statements which always execute sequentially or operations that are applied to each item in an iterable. Yet programs frequently need to be more subtle with their behavior. For example, a messaging app might only set a message's title bold if it has not been read by the user. Or a video game needs to update the position of all the characters that are not asleep. This is done with something called a selection or a conditional statement .  In the context of turtle drawings, using this kind of statement will allow us to check conditions and change the behavior of the program accordingly   import turtle wn = turtle.Screen() amy = turtle.Turtle() amy.pencolor(\"Pink\") amy.forward(50) if amy.pencolor() == \"Pink\": amy.right(60) amy.forward(100) else: amy.left(60) amy.forward(100) kenji = turtle.Turtle() kenji.forward(60) if kenji.pencolor() == \"Pink\": kenji.right(60) kenji.forward(100) else: kenji.left(60) kenji.forward(100)   In the above code, we first set amy's pen color to be Pink and then move her forward. Next we want one of two actions to happen, either amy should move right and then forward, or left and then forward. The direction that we want her to go in depends on her pen color. If her pen color is set to pink - which is determined by writing amy.pencolor() == \"Pink\" which checks to see if the value returned by amy.pencolor() is the equivalent to the string Pink - then we should have her move right and forward. Else (or otherwise) she should move left and forward. Both things can't happen though. She can't move right, forward and left, forward. We then do the same thing for kenji, though in this case, we didn't change kenji's pen color.  It might seem a bit odd to add the conditionals in this example. Wouldn't we already know that we set up amy and kenji's colors, so why would we need a conditional? While it's true that this isn't the best place to use a conditional, we can combine conditional statements with for loops to make something pretty cool!   import turtle wn = turtle.Screen() amy = turtle.Turtle() amy.pencolor(\"Pink\") amy.right(170) colors = [\"Purple\", \"Yellow\", \"Orange\", \"Pink\", \"Orange\", \"Yellow\", \"Purple\", \"Orange\", \"Pink\", \"Pink\", \"Orange\", \"Yellow\", \"Purple\", \"Orange\", \"Purple\", \"Yellow\", \"Orange\", \"Pink\", \"Orange\", \"Purple\", \"Purple\", \"Yellow\", \"Orange\", \"Pink\", \"Orange\", \"Yellow\", \"Purple\", \"Yellow\"] for color in colors: if amy.pencolor() == \"Purple\": amy.forward(50) amy.right(59) elif amy.pencolor() == \"Yellow\": amy.forward(65) amy.left(98) elif amy.pencolor() == \"Orange\": amy.forward(30) amy.left(60) elif amy.pencolor() == \"Pink\": amy.forward(50) amy.right(57) amy.pencolor(color)   The above example combines a for loop with a set of conditional statements. Here, we loop through a list of colors and each iteration checks to see what amy's pen color is. Depending on the pen color, the turtle will move in a certain direction, for a certain distance. Before the for loop iterates, amy's pen color is changed to whatever color is in the for loop and it continues. Note how the color doesn't change until the end, so that we can start using whatever color amy is set to initally. This means that the last color in the list colors will not be used, though you can see how the icon changes to the appropriate color.  This chapter will further detail how to use conditional statements.   Learning Goals     To understand boolean expressions and logical operators    To understand conditional execution    To be able to write a boolean function    To know when to use binary, unary, chained and nested conditional statements       Objectives     To properly evaluate a (compound) boolean expression    To use parenthesis to properly demonstrate operator precedence    To use conditional statements to properly branch code      "
},
{
  "id": "p-1394",
  "level": "2",
  "url": "conditionals_intro-what-we-can-do-with-turtles-and-conditionals.html#p-1394",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "selection conditional statement "
},
{
  "id": "conditionals_boolean-values-and-boolean-expressions",
  "level": "1",
  "url": "conditionals_boolean-values-and-boolean-expressions.html",
  "type": "Section",
  "number": "5.2",
  "title": "Boolean Values and Boolean Expressions",
  "body": " Boolean Values and Boolean Expressions  The Python type for storing true and false values is called bool , named after the British mathematician, George Boole. George Boole created Boolean Algebra , which is the basis of all modern computer arithmetic.  There are only two boolean values . They are True and False . Capitalization is important, since true and false are not boolean values (remember Python is case sensitive).   print(True) print(type(True)) print(type(False))    Boolean values are not strings!  It is extremely important to realize that True and False are not strings. They are not surrounded by quotes. They are the only two values in the data type bool . Take a close look at the types shown below.    print(type(True)) print(type(\"True\"))   A boolean expression is an expression that evaluates to a boolean value. The equality operator, == , compares two values and produces a boolean value related to whether the two values are equal to one another.   print(5 == 5) print(5 == 6)   In the first statement, the two operands are equal, so the expression evaluates to True . In the second statement, 5 is not equal to 6, so we get False .  The == operator is one of six common comparison operators ; the others are:   x != y # x is not equal to y x > y # x is greater than y x < y # x is less than y x >= y # x is greater than or equal to y x <= y # x is less than or equal to y   Although these operations are probably familiar to you, the Python symbols are different from the mathematical symbols. A common error is to use a single equal sign ( = ) instead of a double equal sign ( == ). Remember that = is an assignment operator and == is a comparison operator. Also, there is no such thing as =< or => .        Note too that an equality test is symmetric, but assignment is not. For example, if a == 7 then 7 == a . But in Python, the statement a = 7 is legal and 7 = a is not. (Can you explain why?)   Check your understanding    Which of the following is a Boolean expression? Select all that apply.     True    True and False are both Boolean literals.      3 == 4    The comparison between two numbers via == results in either True or False (in this case False), both Boolean values.      3 + 4    3+4 evaluates to 7, which is a number, not a Boolean value.      3 + 4 == 7    3+4 evaluates to 7. 7 == 7 then evaluates to True, which is a Boolean value.      \"False\"    With the double quotes surrounding it, False is interpreted as a string, not a Boolean value. If the quotes had not been included, False alone is in fact a Boolean value.     "
},
{
  "id": "p-1410",
  "level": "2",
  "url": "conditionals_boolean-values-and-boolean-expressions.html#p-1410",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boolean values "
},
{
  "id": "note-32",
  "level": "2",
  "url": "conditionals_boolean-values-and-boolean-expressions.html#note-32",
  "type": "Note",
  "number": "5.2.1",
  "title": "",
  "body": " Boolean values are not strings!  It is extremely important to realize that True and False are not strings. They are not surrounded by quotes. They are the only two values in the data type bool . Take a close look at the types shown below.  "
},
{
  "id": "p-1413",
  "level": "2",
  "url": "conditionals_boolean-values-and-boolean-expressions.html#p-1413",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boolean expression "
},
{
  "id": "p-1415",
  "level": "2",
  "url": "conditionals_boolean-values-and-boolean-expressions.html#p-1415",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "comparison operators "
},
{
  "id": "p-1418",
  "level": "2",
  "url": "conditionals_boolean-values-and-boolean-expressions.html#p-1418",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question5_2_1",
  "level": "2",
  "url": "conditionals_boolean-values-and-boolean-expressions.html#question5_2_1",
  "type": "Checkpoint",
  "number": "5.2.2",
  "title": "",
  "body": " Which of the following is a Boolean expression? Select all that apply.     True    True and False are both Boolean literals.      3 == 4    The comparison between two numbers via == results in either True or False (in this case False), both Boolean values.      3 + 4    3+4 evaluates to 7, which is a number, not a Boolean value.      3 + 4 == 7    3+4 evaluates to 7. 7 == 7 then evaluates to True, which is a Boolean value.      \"False\"    With the double quotes surrounding it, False is interpreted as a string, not a Boolean value. If the quotes had not been included, False alone is in fact a Boolean value.    "
},
{
  "id": "conditionals_logical-operators",
  "level": "1",
  "url": "conditionals_logical-operators.html",
  "type": "Section",
  "number": "5.3",
  "title": "Logical operators",
  "body": " Logical operators  There are three logical operators : and , or , and not . All three operators take boolean operands and produce boolean values. The semantics (meaning) of these operators is similar to their meaning in English:     x and y is True if both x and y are True . Otherwise, and produces False .    x or y yields True if either x or y is True . Only if both operands are False does or yield False .    not x yields False if x is True , and vice versa.     Look at the following example. See if you can predict the output. Then, Run to see if your predictions were correct:   x = True y = False print(x or y) print(x and y) print(not x)   Although you can use boolean operators with simple boolean literals or variables as in the above example, they are often combined with the comparison operators, as in this example. Again, before you run this, see if you can predict the outcome:   x = 5 print(x > 0 and x < 10) n = 25 print(n % 2 == 0 or n % 3 == 0)   The expression x > 0 and x < 10 is True only if x is greater than 0 and at the same time, x is less than 10. In other words, this expression is True if x is between 0 and 10, not including the endpoints.   Common Mistake!  There is a very common mistake that occurs when programmers try to write boolean expressions. For example, what if we have a variable number and we want to check to see if its value is 5 or 6. In words we might say: number equal to 5 or 6 . However, if we translate this into Python, number == 5 or 6 , it will not yield correct results. The or operator must have a complete equality check on both sides. The correct way to write this is number == 5 or number == 6 . Remember that both operands of or must be booleans in order to yield proper results.    Smart Evaluation  Python is smart about the way it evaluates expressions using boolean operators. Consider the following example:  answer = input('Continue?') if answer == 'Y' or answer == 'y': print('Continuing!')  There are two operands for the or operator here: answer == 'Y' and 'answer == 'y' . Python evaluates from left to right, and if the first operand for or evaluates to True , Python doesn't bother evaluating the second operand, because it knows the result must be True (recall that if either operand for or is True , the result is True ). So, if the user enters Y , Python first evaluates answer == 'Y' , determines that it is True , and doesn't bother to check to see if answer == 'y' is True ; it just concludes that the entire condition is True and executes the print statement.  In a similar fashion, with the and operator, if the first operand evaluates to False , Python doesn't check the second operand's value, because it can conclude that the result must be False .  This behavior, in which Python in some cases skips the evaluation of the second operand to and and or , is called short-circuit boolean evaluation . You don't have to do anything to make Python do this; it's the way Python works. It saves a little processing time. And, as a special bonus, you can take advantage of Python's short-circuiting behavior to shorten your code. Consider the following example:   def check_average_weight() -> None: total_weight = int(input('Enter total weight of luggage:')) num_pieces = int(input('Number of pieces of luggage?')) if total_weight \/ num_pieces > 50: print('Average weight is greater than 50 pounds -> $100 surcharge.') print('Luggage check complete.')   This code checks to see if the average weight of a given number of pieces of luggage is greater than 50 pounds. However, there is a potential crash situation here. If the user enters 0 for num_pieces , the program will crash with a divide by zero error. Try it out to see it happen.  To prevent the crash, you might add an extra if statement to check for zero:  if num_pieces != 0: if total_weight \/ num_pieces > 50: print('Average weight is greater than 50 pounds -> $100 surcharge.')  Now, the division will not occur if num_pieces is zero, and a potential runtime crash has been averted. Good job!  We can shorten this example to a single if statement if we do it carefully. Anytime you have two nested if statements as in the example above, you can combine them into a single if statement by joining the conditions using the and operator. Consider the version below, and think about why this if statement is equivalent in its behavior to the previous version with two nested if statements:   def check_average_weight() -> None: total_weight = int(input('Enter total weight of luggage:')) num_pieces = int(input('Number of pieces of luggage?')) if num_pieces != 0 and total_weight \/ num_pieces > 50: print('Average weight is greater than 50 pounds -> $100 surcharge.') print('Luggage check complete.')   But wait a minute: is this code safe? Try running the program and entering the value 500 for total_weight and the value 5 for num_pieces. Then, try it again using the value 0 for num_pieces. There should be no crash.  Next, try altering the code and reversing the order of the if conditions:  if total_weight \/ num_pieces > 50 and num_pieces != 0: print('Average weight is greater than 50 pounds -> $100 surcharge.')  Run the program again, performing the same two tests. This time, you should observe a crash when you enter 0 for num_pieces. Can you analyze why the first version did not crash, but the second one does?  In the second version, when evaluating left-to-right, the division by zero occurs before Python evaluates the comparison num_pieces != 0 . When joining two if statements into a single if statement, you must be sure to put the condition from the first if statement on the left-hand side of the and operator, and the other condition on the right-hand side, in order to get the same effect.  To summarize this discussion on smart evaluation, keep in mind that when you are performing potentially dangerous operations in an if statement using boolean logic with and or or , order matters!   Check your understanding    What is the correct Python expression for checking to see if a number stored in a variable x is between 0 and 5.     x > 0 and < 5    Each comparison must be between exactly two values. In this case the right-hand expression < 5 lacks a value on its left.      0 < x < 5    Although most other programming languages do not allow this syntax, in Python, this syntax is allowed. Even though it is possible to use this format, you should not use it all the time. Instead, make multiple comparisons by using and or or.      x > 0 or x < 5    Although this is legal Python syntax, the expression is incorrect. It will evaluate to true for all numbers that are either greater than 0 or less than 5. Because all numbers are either greater than 0 or less than 5, this expression will always be True.      x > 0 and x < 5    Yes, with an ``and`` keyword both expressions must be true so the number must be greater than 0 an less than 5 for this expression to be true.      Which of the following may result in a crash at runtime if the user presses Enter without typing a response?  Option A)  yesno = input('Enter Yes or No:') if yesno[0] == 'Y' and len(yesno) > 0: print('Yes!')  Option B)  yesno = input('Enter Yes or No:') if len(yesno) > 0 and yesno[0] == 'Y': print('Yes!')     Option A    Correct! The comparison yesno[0] == 'Y' will crash if yesno is an empty string.      Option B    Incorrect. If len(yesno) > 0 is False, the potentially unsafe comparison yesno[0] == 'Y' will not be evaluated.      Consider the following fragment containing a nested if statement to prevent a crash in the event the user enters an empty response for yesno :  yesno = input('Enter Yes or No:') if len(yesno) > 0: if yesno[0] == 'Y': print('Yes!')  Which of the following is the correct way to combine the nested if into a single if statement that executes identically to the nested if statements?  Option A)  if yesno[0] == 'Y' and len(yesno) > 0: print('Yes!')  Option B)  if len(yesno) > 0 and yesno[0] == 'Y': print('Yes!')  Option C)  if yesno[0] == 'Y' or len(yesno) > 0: print('Yes!')  Option D)  if len(yesno) > 0 or yesno[0] == 'Y': print('Yes!')     Option A    Incorrect. The comparison yesno[0] == 'Y' will crash if yesno is an empty string.      Option B    Correct! Use the and operator to join nested if statements into a single statement, with the first if condition on the left-hand side.      Option C    Incorrect. The comparison yesno[0] == 'Y' will crash if yesno is an empty string.      Option D    Incorrect. The comparison yesno[0] == 'Y' will crash if yesno is an empty string.      "
},
{
  "id": "p-1430",
  "level": "2",
  "url": "conditionals_logical-operators.html#p-1430",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logical operators "
},
{
  "id": "note-33",
  "level": "2",
  "url": "conditionals_logical-operators.html#note-33",
  "type": "Note",
  "number": "5.3.1",
  "title": "Common Mistake!",
  "body": " Common Mistake!  There is a very common mistake that occurs when programmers try to write boolean expressions. For example, what if we have a variable number and we want to check to see if its value is 5 or 6. In words we might say: number equal to 5 or 6 . However, if we translate this into Python, number == 5 or 6 , it will not yield correct results. The or operator must have a complete equality check on both sides. The correct way to write this is number == 5 or number == 6 . Remember that both operands of or must be booleans in order to yield proper results.  "
},
{
  "id": "p-1442",
  "level": "2",
  "url": "conditionals_logical-operators.html#p-1442",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "short-circuit boolean evaluation "
},
{
  "id": "p-1452",
  "level": "2",
  "url": "conditionals_logical-operators.html#p-1452",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question5_3_1",
  "level": "2",
  "url": "conditionals_logical-operators.html#question5_3_1",
  "type": "Checkpoint",
  "number": "5.3.2",
  "title": "",
  "body": " What is the correct Python expression for checking to see if a number stored in a variable x is between 0 and 5.     x > 0 and < 5    Each comparison must be between exactly two values. In this case the right-hand expression < 5 lacks a value on its left.      0 < x < 5    Although most other programming languages do not allow this syntax, in Python, this syntax is allowed. Even though it is possible to use this format, you should not use it all the time. Instead, make multiple comparisons by using and or or.      x > 0 or x < 5    Although this is legal Python syntax, the expression is incorrect. It will evaluate to true for all numbers that are either greater than 0 or less than 5. Because all numbers are either greater than 0 or less than 5, this expression will always be True.      x > 0 and x < 5    Yes, with an ``and`` keyword both expressions must be true so the number must be greater than 0 an less than 5 for this expression to be true.    "
},
{
  "id": "question5_3_2",
  "level": "2",
  "url": "conditionals_logical-operators.html#question5_3_2",
  "type": "Checkpoint",
  "number": "5.3.3",
  "title": "",
  "body": " Which of the following may result in a crash at runtime if the user presses Enter without typing a response?  Option A)  yesno = input('Enter Yes or No:') if yesno[0] == 'Y' and len(yesno) > 0: print('Yes!')  Option B)  yesno = input('Enter Yes or No:') if len(yesno) > 0 and yesno[0] == 'Y': print('Yes!')     Option A    Correct! The comparison yesno[0] == 'Y' will crash if yesno is an empty string.      Option B    Incorrect. If len(yesno) > 0 is False, the potentially unsafe comparison yesno[0] == 'Y' will not be evaluated.    "
},
{
  "id": "question5_3_3",
  "level": "2",
  "url": "conditionals_logical-operators.html#question5_3_3",
  "type": "Checkpoint",
  "number": "5.3.4",
  "title": "",
  "body": " Consider the following fragment containing a nested if statement to prevent a crash in the event the user enters an empty response for yesno :  yesno = input('Enter Yes or No:') if len(yesno) > 0: if yesno[0] == 'Y': print('Yes!')  Which of the following is the correct way to combine the nested if into a single if statement that executes identically to the nested if statements?  Option A)  if yesno[0] == 'Y' and len(yesno) > 0: print('Yes!')  Option B)  if len(yesno) > 0 and yesno[0] == 'Y': print('Yes!')  Option C)  if yesno[0] == 'Y' or len(yesno) > 0: print('Yes!')  Option D)  if len(yesno) > 0 or yesno[0] == 'Y': print('Yes!')     Option A    Incorrect. The comparison yesno[0] == 'Y' will crash if yesno is an empty string.      Option B    Correct! Use the and operator to join nested if statements into a single statement, with the first if condition on the left-hand side.      Option C    Incorrect. The comparison yesno[0] == 'Y' will crash if yesno is an empty string.      Option D    Incorrect. The comparison yesno[0] == 'Y' will crash if yesno is an empty string.    "
},
{
  "id": "conditionals_the-in-and-not-in-operators",
  "level": "1",
  "url": "conditionals_the-in-and-not-in-operators.html",
  "type": "Section",
  "number": "5.4",
  "title": "The <code class=\"code-inline tex2jax_ignore\">in<\/code> and <code class=\"code-inline tex2jax_ignore\">not in<\/code> operators",
  "body": " The in and not in operators  The in operator tests if one string is a substring of another:   print('p' in 'apple') print('i' in 'apple') print('ap' in 'apple') print('pa' in 'apple')   Note that a string is a substring of itself, and the empty string is a substring of any other string. (Also note that computer scientists like to think about these edge cases quite carefully!)   print('a' in 'a') print('apple' in 'apple') print('' in 'a') print('' in 'apple')   The not in operator returns the logical opposite result of in .   print('x' not in 'apple')    "
},
{
  "id": "conditionals_precedence-of-operators",
  "level": "1",
  "url": "conditionals_precedence-of-operators.html",
  "type": "Section",
  "number": "5.5",
  "title": "Precedence of Operators",
  "body": " Precedence of Operators  Arithmetic operators take precedence over logical operators. Python will always evaluate the arithmetic operators first (** is highest, then multiplication\/division, then addition\/subtraction). Next comes the relational operators. Finally, the logical operators are done last. This means that the expression x*5 >= 10 and y-6 <= 20 will be evaluated so as to first perform the arithmetic and then check the relationships. The and will be done last. Many programmers might place parentheses around the two relational expressions, (x*5 >= 10) and (y-6 <= 20) . It is not necessary to do so, but causes no harm and may make it easier for people to read and understand the code.  The following table summarizes the operator precedence from highest to lowest. A complete table for the entire language can be found in the Python Documentation .     Level  Category  Operators    7(high)  exponent  **    6  multiplication  *,\/,\/\/,%    5  addition  +,-    4  relational  ==,!=,<=,>=,>,<    3  logical  not    2  logical  and    1(low)  logical  or      This workspace is provided for your convenience. You can use this activecode window to try out anything you like.        Common Mistake!  Students often incorrectly combine the in and or operators. For example, if they want to check that the letter x is inside of either of two variables then they tend to write it the following way: 'x' in y or z  Written this way, the code would not always do what the programmer intended. This is because the in operator is only on the left side of the or statement. It doesn't get implemented on both sides of the or statement. In order to properly check that x is inside of either variable, the in operator must be used on both sides which looks like this:   'x' in y or 'x' in z     Check your understanding    Which of the following properly expresses the precedence of operators (using parentheses) in the following expression: 5*3 > 10 and 4+6==11     ((5*3) > 10) and ((4+6) == 11)    Yes, * and + have higher precedence, followed by > and ==, and then the keyword \"and\"      (5*(3 > 10)) and (4 + (6 == 11))    Arithmetic operators (*, +) have higher precedence than comparison operators (>, ==)      ((((5*3) > 10) and 4)+6) == 11    This grouping assumes Python simply evaluates from left to right, which is incorrect. It follows the precedence listed in the table in this section.      ((5*3) > (10 and (4+6))) == 11    This grouping assumes that \"and\" has a higher precedence than ==, which is not true.     Here is an animation for the above expression:   "
},
{
  "id": "table-2",
  "level": "2",
  "url": "conditionals_precedence-of-operators.html#table-2",
  "type": "Table",
  "number": "5.5.1",
  "title": "",
  "body": "   Level  Category  Operators    7(high)  exponent  **    6  multiplication  *,\/,\/\/,%    5  addition  +,-    4  relational  ==,!=,<=,>=,>,<    3  logical  not    2  logical  and    1(low)  logical  or    "
},
{
  "id": "note-34",
  "level": "2",
  "url": "conditionals_precedence-of-operators.html#note-34",
  "type": "Note",
  "number": "5.5.2",
  "title": "",
  "body": " This workspace is provided for your convenience. You can use this activecode window to try out anything you like.      "
},
{
  "id": "note-35",
  "level": "2",
  "url": "conditionals_precedence-of-operators.html#note-35",
  "type": "Note",
  "number": "5.5.3",
  "title": "Common Mistake!",
  "body": " Common Mistake!  Students often incorrectly combine the in and or operators. For example, if they want to check that the letter x is inside of either of two variables then they tend to write it the following way: 'x' in y or z  Written this way, the code would not always do what the programmer intended. This is because the in operator is only on the left side of the or statement. It doesn't get implemented on both sides of the or statement. In order to properly check that x is inside of either variable, the in operator must be used on both sides which looks like this:   'x' in y or 'x' in z   "
},
{
  "id": "p-1491",
  "level": "2",
  "url": "conditionals_precedence-of-operators.html#p-1491",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question5_5_1",
  "level": "2",
  "url": "conditionals_precedence-of-operators.html#question5_5_1",
  "type": "Checkpoint",
  "number": "5.5.4",
  "title": "",
  "body": " Which of the following properly expresses the precedence of operators (using parentheses) in the following expression: 5*3 > 10 and 4+6==11     ((5*3) > 10) and ((4+6) == 11)    Yes, * and + have higher precedence, followed by > and ==, and then the keyword \"and\"      (5*(3 > 10)) and (4 + (6 == 11))    Arithmetic operators (*, +) have higher precedence than comparison operators (>, ==)      ((((5*3) > 10) and 4)+6) == 11    This grouping assumes Python simply evaluates from left to right, which is incorrect. It follows the precedence listed in the table in this section.      ((5*3) > (10 and (4+6))) == 11    This grouping assumes that \"and\" has a higher precedence than ==, which is not true.    "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "conditionals_precedence-of-operators.html#exercise-94",
  "type": "Checkpoint",
  "number": "5.5.5",
  "title": "",
  "body": ""
},
{
  "id": "conditionals_conditional-execution-binary-selection",
  "level": "1",
  "url": "conditionals_conditional-execution-binary-selection.html",
  "type": "Section",
  "number": "5.6",
  "title": "Conditional Execution: Binary Selection",
  "body": " Conditional Execution: Binary Selection  In order to write useful programs, we almost always need the ability to check conditions and change the behavior of the program accordingly. Selection statements , sometimes also referred to as conditional statements , give us this ability. The simplest form of selection is the if statement . This is sometimes referred to as binary selection since there are two possible paths of execution.   def is_even(x: int) -> None: if x % 2 == 0: print(x, \"is even\") else: print(x, \"is odd\") is_even(2) # 2 is even is_even(3) # 3 is odd   The syntax for an if statement looks like this:   if BOOLEAN EXPRESSION: STATEMENTS_1 # executed if condition evaluates to True else: STATEMENTS_2 # executed if condition evaluates to False   The boolean expression after the if statement is called the condition . If it is true, then the indented statements get executed. If not, then the statements indented under the else clause get executed.   Flowchart of a if statement with an else    As with the function definition from the last chapter and other compound statements like for , the if statement consists of a header line and a body. The header line begins with the keyword if followed by a boolean expression and ends with a colon (:).  The indented statements that follow are called a block . The first unindented statement marks the end of the block.  Each of the statements inside the first block of statements is executed in order if the boolean expression evaluates to True . The entire first block of statements is skipped if the boolean expression evaluates to False , and instead all the statements under the else clause are executed.  There is no limit on the number of statements that can appear under the two clauses of an if statement, but there has to be at least one statement in each block.   Check your understanding    How many lines of code can appear in the indented code block below the if and else lines in a conditional?     Just one.    Each block may also contain more than one.      Zero or more.    Each block must contain at least one statement.      One or more.    Yes, a block must contain at least one statement and can have many statements.      One or more, and each must contain the same number.    The blocks may contain different numbers of statements.      What does the following code print? (choose from output a, b, c or nothing)   if (4 + 5 == 10): print(\"TRUE\") else: print(\"FALSE\")      TRUE    TRUE is printed by the if-block, which only executes if the conditional (in this case, 4+5 == 10) is true. In this case 5+4 is not equal to 10.      FALSE    Since 4+5==10 evaluates to False, Python will skip over the if block and execute the statement in the else block.      TRUE on one line and FALSE on the next    Python would never print both TRUE and FALSE because it will only execute one of the if-block or the else-block, but not both.      Nothing will be printed    Python will always execute either the if-block (if the condition is true) or the else-block (if the condition is false). It would never skip over both blocks.      What does the following code print?   if (4 + 5 == 10): print(\"TRUE\") else: print(\"FALSE\") print(\"TRUE\")   a. TRUE b. TRUE FALSE c. FALSE TRUE d. TRUE FALSE TRUE     Output a    Although TRUE is printed after the if-else statement completes, both blocks within the if-else statement print something too. In this case, Python would have had to have skipped both blocks in the if-else statement, which it never would do.      Output b    Because there is a TRUE printed after the if-else statement ends, Python will always print TRUE as the last statement.      Output c    Python will print FALSE from within the else-block (because 5+4 does not equal 10), and then print TRUE after the if-else statement completes.      Output d    To print these three lines, Python would have to execute both blocks in the if-else statement, which it can never do.       Create a variable, b , and assign it the value of 15 . Then, write code to see if the value b is greater than that of a . If it is, a 's value should be multiplied by 2. If the value of b is less than or equal to a , nothing should happen. Finally, create variable c and assign it the value of the sum of a and b .   a = 20 ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwoA(self): self.assertEqual(a, 20, \"Testing that a has the correct value.\") def testTwoB(self): self.assertEqual(c, 35, \"Testing that c has the correct value.\") myTests().main()   "
},
{
  "id": "p-1502",
  "level": "2",
  "url": "conditionals_conditional-execution-binary-selection.html#p-1502",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Selection statements conditional statements if statement binary selection "
},
{
  "id": "p-1504",
  "level": "2",
  "url": "conditionals_conditional-execution-binary-selection.html#p-1504",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "condition "
},
{
  "id": "p-1506",
  "level": "2",
  "url": "conditionals_conditional-execution-binary-selection.html#p-1506",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "block "
},
{
  "id": "p-1509",
  "level": "2",
  "url": "conditionals_conditional-execution-binary-selection.html#p-1509",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question5_6_1",
  "level": "2",
  "url": "conditionals_conditional-execution-binary-selection.html#question5_6_1",
  "type": "Checkpoint",
  "number": "5.6.1",
  "title": "",
  "body": " How many lines of code can appear in the indented code block below the if and else lines in a conditional?     Just one.    Each block may also contain more than one.      Zero or more.    Each block must contain at least one statement.      One or more.    Yes, a block must contain at least one statement and can have many statements.      One or more, and each must contain the same number.    The blocks may contain different numbers of statements.    "
},
{
  "id": "question5_6_2",
  "level": "2",
  "url": "conditionals_conditional-execution-binary-selection.html#question5_6_2",
  "type": "Checkpoint",
  "number": "5.6.2",
  "title": "",
  "body": " What does the following code print? (choose from output a, b, c or nothing)   if (4 + 5 == 10): print(\"TRUE\") else: print(\"FALSE\")      TRUE    TRUE is printed by the if-block, which only executes if the conditional (in this case, 4+5 == 10) is true. In this case 5+4 is not equal to 10.      FALSE    Since 4+5==10 evaluates to False, Python will skip over the if block and execute the statement in the else block.      TRUE on one line and FALSE on the next    Python would never print both TRUE and FALSE because it will only execute one of the if-block or the else-block, but not both.      Nothing will be printed    Python will always execute either the if-block (if the condition is true) or the else-block (if the condition is false). It would never skip over both blocks.    "
},
{
  "id": "question5_6_3",
  "level": "2",
  "url": "conditionals_conditional-execution-binary-selection.html#question5_6_3",
  "type": "Checkpoint",
  "number": "5.6.3",
  "title": "",
  "body": " What does the following code print?   if (4 + 5 == 10): print(\"TRUE\") else: print(\"FALSE\") print(\"TRUE\")   a. TRUE b. TRUE FALSE c. FALSE TRUE d. TRUE FALSE TRUE     Output a    Although TRUE is printed after the if-else statement completes, both blocks within the if-else statement print something too. In this case, Python would have had to have skipped both blocks in the if-else statement, which it never would do.      Output b    Because there is a TRUE printed after the if-else statement ends, Python will always print TRUE as the last statement.      Output c    Python will print FALSE from within the else-block (because 5+4 does not equal 10), and then print TRUE after the if-else statement completes.      Output d    To print these three lines, Python would have to execute both blocks in the if-else statement, which it can never do.    "
},
{
  "id": "ac5_6_4",
  "level": "2",
  "url": "conditionals_conditional-execution-binary-selection.html#ac5_6_4",
  "type": "Checkpoint",
  "number": "5.6.4",
  "title": "",
  "body": " Create a variable, b , and assign it the value of 15 . Then, write code to see if the value b is greater than that of a . If it is, a 's value should be multiplied by 2. If the value of b is less than or equal to a , nothing should happen. Finally, create variable c and assign it the value of the sum of a and b .   a = 20 ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwoA(self): self.assertEqual(a, 20, \"Testing that a has the correct value.\") def testTwoB(self): self.assertEqual(c, 35, \"Testing that c has the correct value.\") myTests().main()  "
},
{
  "id": "conditionals_omitting-the-else-clause-unary-selection",
  "level": "1",
  "url": "conditionals_omitting-the-else-clause-unary-selection.html",
  "type": "Section",
  "number": "5.7",
  "title": "Omitting the <code class=\"code-inline tex2jax_ignore\">else<\/code> Clause: Unary Selection",
  "body": " Omitting the else Clause: Unary Selection   Flowchart of an if with no else    Another form of the if statement is one in which the else clause is omitted entirely. This creates what is sometimes called unary selection . In this case, when the condition evaluates to True , the statements are executed. Otherwise the flow of execution continues to the statement after the body of the if .   x = 10 if x < 0: print(\"The negative number \", x, \" is not valid here.\") print(\"This is always printed\")   What would be printed if the value of x is negative? Try it.   Check your understanding    What does the following code print?   x = -10 if x < 0: print(\"The negative number \", x, \" is not valid here.\") print(\"This is always printed\")   a. This is always printed b. The negative number -10 is not valid here This is always printed c. The negative number -10 is not valid here     Output a    Because -10 is less than 0, Python will execute the body of the if-statement here.      Output b    Python executes the body of the if-block as well as the statement that follows the if-block.      Output c    Python will also execute the statement that follows the if-block (because it is not enclosed in an else-block, but rather just a normal statement).      It will cause an error because every if must have an else clause.    It is valid to have an if-block without a corresponding else-block (though you cannot have an else-block without a corresponding if-block).      Will the following code cause an error?   x = -10 if x < 0: print(\"The negative number \", x, \" is not valid here.\") else: print(x, \" is a positive number\") else: print(\"This is always printed\")      No    Every else-block must have exactly one corresponding if-block. If you want to chain if-else statements together, you must use the else if construct, described in the chained conditionals section.      Yes    This will cause an error because the second else-block is not attached to a corresponding if-block.     "
},
{
  "id": "p-1538",
  "level": "2",
  "url": "conditionals_omitting-the-else-clause-unary-selection.html#p-1538",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unary selection "
},
{
  "id": "p-1540",
  "level": "2",
  "url": "conditionals_omitting-the-else-clause-unary-selection.html#p-1540",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question5_7_1",
  "level": "2",
  "url": "conditionals_omitting-the-else-clause-unary-selection.html#question5_7_1",
  "type": "Checkpoint",
  "number": "5.7.1",
  "title": "",
  "body": " What does the following code print?   x = -10 if x < 0: print(\"The negative number \", x, \" is not valid here.\") print(\"This is always printed\")   a. This is always printed b. The negative number -10 is not valid here This is always printed c. The negative number -10 is not valid here     Output a    Because -10 is less than 0, Python will execute the body of the if-statement here.      Output b    Python executes the body of the if-block as well as the statement that follows the if-block.      Output c    Python will also execute the statement that follows the if-block (because it is not enclosed in an else-block, but rather just a normal statement).      It will cause an error because every if must have an else clause.    It is valid to have an if-block without a corresponding else-block (though you cannot have an else-block without a corresponding if-block).    "
},
{
  "id": "question5_7_2",
  "level": "2",
  "url": "conditionals_omitting-the-else-clause-unary-selection.html#question5_7_2",
  "type": "Checkpoint",
  "number": "5.7.2",
  "title": "",
  "body": " Will the following code cause an error?   x = -10 if x < 0: print(\"The negative number \", x, \" is not valid here.\") else: print(x, \" is a positive number\") else: print(\"This is always printed\")      No    Every else-block must have exactly one corresponding if-block. If you want to chain if-else statements together, you must use the else if construct, described in the chained conditionals section.      Yes    This will cause an error because the second else-block is not attached to a corresponding if-block.    "
},
{
  "id": "conditionals_nested-conditionals",
  "level": "1",
  "url": "conditionals_nested-conditionals.html",
  "type": "Section",
  "number": "5.8",
  "title": "Nested conditionals",
  "body": " Nested conditionals  One conditional can also be nested within another. For example, assume we have two integer variables, x and y . The following pattern of selection shows how we might decide how they are related to each other.   if x < y: print(\"x is less than y\") else: if x > y: print(\"x is greater than y\") else: print(\"x and y must be equal\")   The outer conditional contains two branches. The second branch (the else from the outer) contains another if statement, which has two branches of its own. Those two branches could contain conditional statements as well.  The flow of control for this example can be seen in this flowchart illustration.   Here is a complete program that defines values for x and y . Run the program and see the result. Then change the values of the variables to change the flow of control.   x = 10 y = 10 if x < y: print(\"x is less than y\") else: if x > y: print(\"x is greater than y\") else: print(\"x and y must be equal\")    In some programming languages, matching the if and the else is a problem. However, in Python this is not the case. The indentation pattern tells us exactly which else belongs to which if.   If you are still a bit unsure, here is the same selection as part of a codelens example. Step through it to see how the correct print is chosen.   x = 10 y = 10 if x < y: print(\"x is less than y\") else: if x > y: print(\"x is greater than y\") else: print(\"x and y must be equal\")    Check your understanding    Will the following code cause an error?   x = -10 if x < 0: print(\"The negative number \", x, \" is not valid here.\") else: if x > 0: print(x, \" is a positive number\") else: print(x,\" is 0\")      No    This is a legal nested if-else statement. The inner if-else statement is contained completely within the body of the outer else-block.      Yes    This is a legal nested if-else statement. The inner if-else statement is contained completely within the body of the outer else-block.     "
},
{
  "id": "p-1555",
  "level": "2",
  "url": "conditionals_nested-conditionals.html#p-1555",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nested "
},
{
  "id": "note-36",
  "level": "2",
  "url": "conditionals_nested-conditionals.html#note-36",
  "type": "Note",
  "number": "5.8.1",
  "title": "",
  "body": " In some programming languages, matching the if and the else is a problem. However, in Python this is not the case. The indentation pattern tells us exactly which else belongs to which if.  "
},
{
  "id": "p-1561",
  "level": "2",
  "url": "conditionals_nested-conditionals.html#p-1561",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question5_8_1",
  "level": "2",
  "url": "conditionals_nested-conditionals.html#question5_8_1",
  "type": "Checkpoint",
  "number": "5.8.2",
  "title": "",
  "body": " Will the following code cause an error?   x = -10 if x < 0: print(\"The negative number \", x, \" is not valid here.\") else: if x > 0: print(x, \" is a positive number\") else: print(x,\" is 0\")      No    This is a legal nested if-else statement. The inner if-else statement is contained completely within the body of the outer else-block.      Yes    This is a legal nested if-else statement. The inner if-else statement is contained completely within the body of the outer else-block.    "
},
{
  "id": "conditionals_chained-conditionals",
  "level": "1",
  "url": "conditionals_chained-conditionals.html",
  "type": "Section",
  "number": "5.9",
  "title": "Chained conditionals",
  "body": " Chained conditionals  Python provides an alternative way to write nested selection such as the one shown in the previous section. This is sometimes referred to as a chained conditional .   if x < y: print(\"x is less than y\") elif x > y: print(\"x is greater than y\") else: print(\"x and y must be equal\")   The flow of control can be drawn in a different orientation but the resulting pattern is identical to the one shown above.   elif is an abbreviation of else if . Again, exactly one branch will be executed. There is no limit of the number of elif statements but only a single (and optional) final else statement is allowed and it must be the last branch in the statement.   Each condition is checked in order. If the first is false, the next is checked, and so on. If one of them is true, the corresponding branch executes, and the statement ends. Even if more than one condition is true, only the first true branch executes.  Here is the same program using elif .   x = 10 y = 10 if x < y: print(\"x is less than y\") elif x > y: print(\"x is greater than y\") else: print(\"x and y must be equal\")   The following image highlights different kinds of valid conditionals that can be used. Though there are other versions of conditionals that Python can understand (imagine an if statement with twenty elif statements), those other versions must follow the same order as seen below.    Check your understanding    Which of I, II, and III below gives the same result as the following nested if?   # nested if-else statement x = -10 if x < 0: print(\"The negative number \", x, \" is not valid here.\") else: if x > 0: print(x, \" is a positive number\") else: print(x, \" is 0\")    I. if x < 0: print(\"The negative number \", x, \" is not valid here.\") else (x > 0): print(x, \" is a positive number\") else: print(x, \" is 0\")    II. if x < 0: print(\"The negative number \", x, \" is not valid here.\") elif (x > 0): print(x, \" is a positive number\") else: print(x, \" is 0\")    III. if x < 0: print(\"The negative number \", x, \" is not valid here.\") if (x > 0): print(x, \" is a positive number\") else: print(x, \" is 0\")      I only    You can not use a Boolean expression after an else.      II only    Yes, II will give the same result.      III only    No, III will not give the same result. The first if statement will be true, but the second will be false, so the else part will execute.      II and III    No, Although II is correct III will not give the same result. Try it.      I, II, and III    No, in I you can not have a Boolean expression after an else.      What will the following code print if x = 3, y = 5, and z = 2?   if x < y and x < z: print(\"a\") elif y < x and y < z: print(\"b\") else: print(\"c\")      a    While the value in x is less than the value in y (3 is less than 5) it is not less than the value in z (3 is not less than 2).      b    The value in y is not less than the value in x (5 is not less than 3).      c    Since the first two Boolean expressions are false the else will be executed.      Create one conditional to find whether false is in string str1 . If so, assign variable output the string False. You aren't you? . Check to see if true is in string str1 and if it is then assign True! You are you! to the variable output . If neither are in str1 , assign Neither true nor false! to output .   str1 = \"Today you are you! That is truer than true! There is no one alive who is you-er than you!\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testThree(self): self.assertEqual(output, \"True! You are you!\", \"Testing that output has the correct value, given the str1 provided.\") self.assertIn(\"else\", self.getEditorText(), \"Testing output (Don't worry about actual and expected values).\") self.assertIn(\"elif\", self.getEditorText(), \"Testing output (Don't worry about actual and expected values).\") myTests().main()     "
},
{
  "id": "p-1567",
  "level": "2",
  "url": "conditionals_chained-conditionals.html#p-1567",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "chained conditional "
},
{
  "id": "p-1573",
  "level": "2",
  "url": "conditionals_chained-conditionals.html#p-1573",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question5_9_1",
  "level": "2",
  "url": "conditionals_chained-conditionals.html#question5_9_1",
  "type": "Checkpoint",
  "number": "5.9.1",
  "title": "",
  "body": " Which of I, II, and III below gives the same result as the following nested if?   # nested if-else statement x = -10 if x < 0: print(\"The negative number \", x, \" is not valid here.\") else: if x > 0: print(x, \" is a positive number\") else: print(x, \" is 0\")    I. if x < 0: print(\"The negative number \", x, \" is not valid here.\") else (x > 0): print(x, \" is a positive number\") else: print(x, \" is 0\")    II. if x < 0: print(\"The negative number \", x, \" is not valid here.\") elif (x > 0): print(x, \" is a positive number\") else: print(x, \" is 0\")    III. if x < 0: print(\"The negative number \", x, \" is not valid here.\") if (x > 0): print(x, \" is a positive number\") else: print(x, \" is 0\")      I only    You can not use a Boolean expression after an else.      II only    Yes, II will give the same result.      III only    No, III will not give the same result. The first if statement will be true, but the second will be false, so the else part will execute.      II and III    No, Although II is correct III will not give the same result. Try it.      I, II, and III    No, in I you can not have a Boolean expression after an else.    "
},
{
  "id": "question5_9_2",
  "level": "2",
  "url": "conditionals_chained-conditionals.html#question5_9_2",
  "type": "Checkpoint",
  "number": "5.9.2",
  "title": "",
  "body": " What will the following code print if x = 3, y = 5, and z = 2?   if x < y and x < z: print(\"a\") elif y < x and y < z: print(\"b\") else: print(\"c\")      a    While the value in x is less than the value in y (3 is less than 5) it is not less than the value in z (3 is not less than 2).      b    The value in y is not less than the value in x (5 is not less than 3).      c    Since the first two Boolean expressions are false the else will be executed.    "
},
{
  "id": "ac5_9_2",
  "level": "2",
  "url": "conditionals_chained-conditionals.html#ac5_9_2",
  "type": "Checkpoint",
  "number": "5.9.3",
  "title": "",
  "body": " Create one conditional to find whether false is in string str1 . If so, assign variable output the string False. You aren't you? . Check to see if true is in string str1 and if it is then assign True! You are you! to the variable output . If neither are in str1 , assign Neither true nor false! to output .   str1 = \"Today you are you! That is truer than true! There is no one alive who is you-er than you!\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testThree(self): self.assertEqual(output, \"True! You are you!\", \"Testing that output has the correct value, given the str1 provided.\") self.assertIn(\"else\", self.getEditorText(), \"Testing output (Don't worry about actual and expected values).\") self.assertIn(\"elif\", self.getEditorText(), \"Testing output (Don't worry about actual and expected values).\") myTests().main()  "
},
{
  "id": "conditionals_setting-up-conditionals",
  "level": "1",
  "url": "conditionals_setting-up-conditionals.html",
  "type": "Section",
  "number": "5.10",
  "title": "Setting Up Conditionals",
  "body": " Setting Up Conditionals  Before writing your conditionals, it can be helpful to make your own flowchart that will plot out the flow of each condition. By writing out the flow, you can better determine how complex the set of conditionals will be as well as check to see if any condition is not taken care of before you begin writing it out.  To make sure that your code covers all of the conditions that you intend for it to cover, you should add comments for each clause that explains what that clause is meant to do. Then, you should add tests for each possible path that the program could go though. What leads to certain conditional statements being executed? Is that what you intended?   Choosing your type of Conditional  When adding conditionals to your program, you should also consider the kinds of conditionals that are at your disposal and what would fit best.   Though you'll use them often, remember that conditional statements don't always need an else clause. When deciding the flow, ask yourself what you want to have happen under a certain condition. For example, if you wanted to find all of the words that have the letter ‘n' in them. If there's nothing that needs to happen when a word does not contain the letter ‘n' then you won't need an else clause. The program should just continue onward!   What is the best set of conditonal statements provided based on the following prompt? You want to keep track of all the words that have the letter ‘t' and in a separate variable you want to keep track of all the words that have the letter ‘z' in them.     If statement - Else statement    Using if\/else either uses an unnecessary else statement or would improperly keep track of one of the accumulator variables.      If statement - Elif statement    Using if\/elif means that words that have both a \"t\" and a \"z\" would not be propperly counted by the two variables.      If statement - If statement    Yes, two if statements will keep track of - and properly update - the two different accumulator variables.      If statement - Elif statemenet - Else statement    Using if\/elif\/else here will provide an unnecessary else statement and improperly update one of the accumulator variables in the case where a word has both a \"t\" and a \"z\".      Select the most appropriate set of conditonal statements for the situation described: You want to keep track of all the words that contain both t and z .     If statement - Elif statemenet - Else statement    The elif and else statements are both unnecessary.      If statement - Else statement    The else statement is unnecessary.      If statement - Nested If statement    Though you could write a set of conditional statements like this and answer the prompt, there is a more concise way.      If statement    Yes, this is the most concise way of writing a conditional for that prompt.      If statement - Nested If statement - Else statement    The else statement is unnecessary.      "
},
{
  "id": "question5_10_1",
  "level": "2",
  "url": "conditionals_setting-up-conditionals.html#question5_10_1",
  "type": "Checkpoint",
  "number": "5.10.1",
  "title": "",
  "body": " What is the best set of conditonal statements provided based on the following prompt? You want to keep track of all the words that have the letter ‘t' and in a separate variable you want to keep track of all the words that have the letter ‘z' in them.     If statement - Else statement    Using if\/else either uses an unnecessary else statement or would improperly keep track of one of the accumulator variables.      If statement - Elif statement    Using if\/elif means that words that have both a \"t\" and a \"z\" would not be propperly counted by the two variables.      If statement - If statement    Yes, two if statements will keep track of - and properly update - the two different accumulator variables.      If statement - Elif statemenet - Else statement    Using if\/elif\/else here will provide an unnecessary else statement and improperly update one of the accumulator variables in the case where a word has both a \"t\" and a \"z\".    "
},
{
  "id": "question5_10_2",
  "level": "2",
  "url": "conditionals_setting-up-conditionals.html#question5_10_2",
  "type": "Checkpoint",
  "number": "5.10.2",
  "title": "",
  "body": " Select the most appropriate set of conditonal statements for the situation described: You want to keep track of all the words that contain both t and z .     If statement - Elif statemenet - Else statement    The elif and else statements are both unnecessary.      If statement - Else statement    The else statement is unnecessary.      If statement - Nested If statement    Though you could write a set of conditional statements like this and answer the prompt, there is a more concise way.      If statement    Yes, this is the most concise way of writing a conditional for that prompt.      If statement - Nested If statement - Else statement    The else statement is unnecessary.    "
},
{
  "id": "conditionals_glossary",
  "level": "1",
  "url": "conditionals_glossary.html",
  "type": "Section",
  "number": "5.11",
  "title": "Glossary",
  "body": " Glossary    block  A group of consecutive statements with the same indentation.    body  The block of statements in a compound statement that follows the header.    boolean values  A value that is either True or False. True and False must be capitalized to be considered Boolean.    branch  One of the possible paths of the flow of execution determined by conditional execution.    chained conditional  A conditional branch with more than two possible flows of execution. In Python chained conditionals are written with if ... elif ... else statements.    comparison operator  One of the operators that compares two values: == , != , > , < , >= , and <= .    condition  The boolean expression in a conditional statement that determines which branch is executed.    conditional statement  A statement that controls the flow of execution depending on some condition. In Python the keywords if , elif , and else are used for conditional statements.    logical operators  and , or and not are logical operators used to evaluate expressions. Their semantic meaning is similar to their English meaning.    nesting  One program structure within another, such as a conditional statement inside a branch of another conditional statement.    unary selection  A selection statement in which there is only an if statement and the else statement is omitted entirely. In an unary selection, the statements are only executed if the condition evaluates to true, otherwise the program continues to the body following the if statement.    "
},
{
  "id": "iteration_introduction",
  "level": "1",
  "url": "iteration_introduction.html",
  "type": "Section",
  "number": "6.1",
  "title": "Introduction",
  "body": " Introduction  Computers are often used to automate repetitive tasks. Repeating identical or similar tasks without making errors is something that computers do well and people do poorly.  Repeated execution of a sequence of statements is called iteration . Because iteration is so common, Python provides several language features to make it easier. In this chapter we are going to look at the while statement.    Learning Goals     To understand indefinite iteration    To solve problems involving convergence       Objectives     To apply the while loop for indefinite iteration    To be able to identify while loops that are likely to be infinite loops      "
},
{
  "id": "p-1632",
  "level": "2",
  "url": "iteration_introduction.html#p-1632",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "iteration "
},
{
  "id": "more-about-iteration_the-while-statement",
  "level": "1",
  "url": "more-about-iteration_the-while-statement.html",
  "type": "Section",
  "number": "6.2",
  "title": "The <code class=\"code-inline tex2jax_ignore\">while<\/code> Statement",
  "body": " The while Statement  There is another Python statement that can also be used to build an iteration. It is called the while statement. The while statement provides a much more general mechanism for iterating. Similar to the if statement, it uses a boolean expression to control the flow of execution. The body of while will be repeated as long as the controlling boolean expression evaluates to True .  The following two figures show the flow of control. The first focuses on the flow inside the while loop and the second shows the while loop in context.    We can use the while loop to create any type of iteration we wish, including anything that we have previously done with a for loop. For example, the program in the previous section could be rewritten using while . Instead of relying on the range function to produce the numbers for our summation, we will need to produce them ourselves. To do this, we will create a variable called aNumber and initialize it to 1, the first number in the summation. Every iteration will add aNumber to the running total until all the values have been used. In order to control the iteration, we must create a boolean expression that evaluates to True as long as we want to keep adding values to our running total. In this case, as long as aNumber is less than or equal to the bound, we should keep going.  Here is a new version of the summation program that uses a while statement.   def sumTo(aBound): \"\"\" Return the sum of 1+2+3 ... n \"\"\" theSum = 0 aNumber = 1 while aNumber <= aBound: theSum = theSum + aNumber aNumber = aNumber + 1 return theSum print(sumTo(4)) print(sumTo(1000))   You can almost read the while statement as if it were in natural language. It means, while aNumber is less than or equal to aBound , continue executing the body of the loop. Within the body, each time, update theSum using the accumulator pattern and increment aNumber . After the body of the loop, we go back up to the condition of the while and reevaluate it. When aNumber becomes greater than aBound , the condition fails and flow of control continues to the return statement.  The same program in codelens will allow you to observe the flow of execution.   def sumTo(aBound): \"\"\" Return the sum of 1+2+3 ... n \"\"\" theSum = 0 aNumber = 1 while aNumber <= aBound: theSum = theSum + aNumber aNumber = aNumber + 1 return theSum print(sumTo(4))    The names of the variables have been chosen to help readability.   More formally, here is the flow of execution for a while statement:     Evaluate the condition, yielding False or True .    If the condition is False , exit the while statement and continue execution at the next statement.    If the condition is True , execute each of the statements in the body and then go back to step 1.     The body consists of all of the statements below the header with the same indentation.  This type of flow is called a loop because the third step loops back around to the top. Notice that if the condition is False the first time through the loop, the statements inside the loop are never executed.  The body of the loop should change the value of one or more variables so that eventually the condition becomes False and the loop terminates. Otherwise the loop will repeat forever. This is called an infinite loop . An endless source of amusement for computer scientists is the observation that the directions written on the back of the shampoo bottle (lather, rinse, repeat) create an infinite loop.  In the case shown above, we can prove that the loop terminates because we know that the value of aBound is finite, and we can see that the value of aNumber increments each time through the loop, so eventually it will have to exceed aBound . In other cases, it is not so easy to tell.   Introduction of the while statement causes us to think about the types of iteration we have seen. The for statement will always iterate through a sequence of values like the list of names for the party or the list of numbers created by range . Since we know that it will iterate once for each value in the collection, it is often said that a for loop creates a definite iteration because we definitely know how many times we are going to iterate. On the other hand, the while statement is dependent on a condition that needs to evaluate to False in order for the loop to terminate. Since we do not necessarily know when this will happen, it creates what we call indefinite iteration . Indefinite iteration simply means that we don't know how many times we will repeat but eventually the condition controlling the iteration will fail and the iteration will stop. (Unless we have an infinite loop which is of course a problem)   What you will notice here is that the while loop is more work for you — the programmer — than the equivalent for loop. When using a while loop you have to control the loop variable yourself. You give it an initial value, test for completion, and then make sure you change something in the body so that the loop terminates. That also makes a while loop harder to read and understand than the equivalent for loop. So, while you can implement definite iteration with a while loop, it's not a good idea to do that. Use a for loop whenever it will be known at the beginning of the iteration process how many times the block of code needs to be executed.   Check your understanding     The following code contains an infinite loop. Which is the best explanation for why the loop does not terminate?   n = 10 answer = 1 while ( n > 0 ): answer = answer + n n = n + 1 print(answer)      n starts at 10 and is incremented by 1 each time through the loop, so it will always be positive    The loop will run as long as n is positive. In this case, we can see that n will never become non-positive.      answer starts at 1 and is incremented by n each time, so it will always be positive    While it is true that answer will always be positive, answer is not considered in the loop condition.      You cannot compare n to 0 in while loop. You must compare it to another variable.    It is perfectly valid to compare n to 0. Though indirectly, this is what causes the infinite loop.      In the while loop body, we must set n to False, and this code does not do that.    The loop condition must become False for the loop to terminate, but n by itself is not the condition in this case.       Write a while loop that is initialized at 0 and stops at 15. If the counter is an even number, add double its value to total_score . If the counter is an odd number, subtract half its value from total_score .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(total_score, 80.0, \"Testing that eve_nums has been assigned the correct elements\") myTests().main()     Write a function called stop_at_one that takes an integer as a parameter, and performes the following operations on it until the integer equals 1: If the number is odd, multiply by 3 and add 1. If the number is even, divide by two. The function should then return how many iterations it took to reach 1.   def stop_at_one(x: int) -> int: ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(stop_at_one(2), 1, \"Testing the function stop_at_one on the input 2.\") self.assertEqual(stop_at_one(3), 7, \"Testing the function stop_at_one on the input 3.\") self.assertEqual(stop_at_one(5), 5, \"Testing the function stop_at_one on the input 5.\") self.assertEqual(stop_at_one(50), 24, \"Testing the function stop_at_one on the input 50.\") myTests().main()   "
},
{
  "id": "note-37",
  "level": "2",
  "url": "more-about-iteration_the-while-statement.html#note-37",
  "type": "Note",
  "number": "6.2.1",
  "title": "",
  "body": " The names of the variables have been chosen to help readability.  "
},
{
  "id": "p-1652",
  "level": "2",
  "url": "more-about-iteration_the-while-statement.html#p-1652",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "loop "
},
{
  "id": "p-1653",
  "level": "2",
  "url": "more-about-iteration_the-while-statement.html#p-1653",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "infinite loop "
},
{
  "id": "note-38",
  "level": "2",
  "url": "more-about-iteration_the-while-statement.html#note-38",
  "type": "Note",
  "number": "6.2.2",
  "title": "",
  "body": " Introduction of the while statement causes us to think about the types of iteration we have seen. The for statement will always iterate through a sequence of values like the list of names for the party or the list of numbers created by range . Since we know that it will iterate once for each value in the collection, it is often said that a for loop creates a definite iteration because we definitely know how many times we are going to iterate. On the other hand, the while statement is dependent on a condition that needs to evaluate to False in order for the loop to terminate. Since we do not necessarily know when this will happen, it creates what we call indefinite iteration . Indefinite iteration simply means that we don't know how many times we will repeat but eventually the condition controlling the iteration will fail and the iteration will stop. (Unless we have an infinite loop which is of course a problem)  "
},
{
  "id": "p-1657",
  "level": "2",
  "url": "more-about-iteration_the-while-statement.html#p-1657",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question6_2_1",
  "level": "2",
  "url": "more-about-iteration_the-while-statement.html#question6_2_1",
  "type": "Checkpoint",
  "number": "6.2.3",
  "title": "",
  "body": " The following code contains an infinite loop. Which is the best explanation for why the loop does not terminate?   n = 10 answer = 1 while ( n > 0 ): answer = answer + n n = n + 1 print(answer)      n starts at 10 and is incremented by 1 each time through the loop, so it will always be positive    The loop will run as long as n is positive. In this case, we can see that n will never become non-positive.      answer starts at 1 and is incremented by n each time, so it will always be positive    While it is true that answer will always be positive, answer is not considered in the loop condition.      You cannot compare n to 0 in while loop. You must compare it to another variable.    It is perfectly valid to compare n to 0. Though indirectly, this is what causes the infinite loop.      In the while loop body, we must set n to False, and this code does not do that.    The loop condition must become False for the loop to terminate, but n by itself is not the condition in this case.    "
},
{
  "id": "ac6_2_2",
  "level": "2",
  "url": "more-about-iteration_the-while-statement.html#ac6_2_2",
  "type": "Checkpoint",
  "number": "6.2.4",
  "title": "",
  "body": " Write a while loop that is initialized at 0 and stops at 15. If the counter is an even number, add double its value to total_score . If the counter is an odd number, subtract half its value from total_score .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(total_score, 80.0, \"Testing that eve_nums has been assigned the correct elements\") myTests().main()  "
},
{
  "id": "ac14_2_4",
  "level": "2",
  "url": "more-about-iteration_the-while-statement.html#ac14_2_4",
  "type": "Checkpoint",
  "number": "6.2.5",
  "title": "",
  "body": " Write a function called stop_at_one that takes an integer as a parameter, and performes the following operations on it until the integer equals 1: If the number is odd, multiply by 3 and add 1. If the number is even, divide by two. The function should then return how many iterations it took to reach 1.   def stop_at_one(x: int) -> int: ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(stop_at_one(2), 1, \"Testing the function stop_at_one on the input 2.\") self.assertEqual(stop_at_one(3), 7, \"Testing the function stop_at_one on the input 3.\") self.assertEqual(stop_at_one(5), 5, \"Testing the function stop_at_one on the input 5.\") self.assertEqual(stop_at_one(50), 24, \"Testing the function stop_at_one on the input 50.\") myTests().main()  "
},
{
  "id": "iteration_the-listener-loop",
  "level": "1",
  "url": "iteration_the-listener-loop.html",
  "type": "Section",
  "number": "6.3",
  "title": "The Listener Loop",
  "body": " The Listener Loop  At the end of the previous section, we advised using a for loop whenever it will be known at the beginning of the iteration process how many times the block of code needs to be executed. Usually, in python, you will use a for loop rather than a while loop. When is it not known at the beginning of the iteration how many times the code block needs to be executed? The answer is, when it depends on something that happens during the execution.  One very common pattern is called a listener loop . Inside the while loop there is a function call to get user input. The loop repeats indefinitely, until a particular input is received.   theSum = 0 x = -1 while (x != 0): x = int(input(\"next number to add up (enter 0 if no more numbers): \")) theSum = theSum + x print(theSum)   This is just our old friend, the accumulation pattern, adding each additional output to the sum-so-far, which is stored in a variable called theSum and reassigned to that variable on each iteration. Notice that theSum is initialized to 0. Also notice that we had to initialize x, our variable that stores each input that the user types, before the while loop. This is typical with while loops, and makes them a little tricky to read and write. We had to initialize it because the condition x != 0 is checked at the very beginning, before the code block is ever executed. In this case, we picked an initial value that we knew would make the condition true, to ensure that the while loop's code block would execute at least once.  If you're at all unsure about how that code works, try adding print statements inside the while loop that print out the values of x and theSum.   Other uses of while   Sentinel Values  Indefinite loops are much more common in the real world than definite loops.     If you are selling tickets to an event, you don't know in advance how many tickets you will sell. You keep selling tickets as long as people come to the door and there's room in the hall.    When the baggage crew unloads a plane, they don't know in advance how many suitcases there are. They just keep unloading while there are bags left in the cargo hold. (Why your suitcase is always the last one is an entirely different problem.)    When you go through the checkout line at the grocery, the clerks don't know in advance how many items there are. They just keep ringing up items as long as there are more on the conveyor belt.     Let's implement the last of these in Python, by asking the user for prices and keeping a running total and count of items. When the last item is entered, the program gives the grand total, number of items, and average price. We'll need these variables:     total - this will start at zero    count - the number of items, which also starts at zero    moreItems - a boolean that tells us whether more items are waiting; this starts as True     The pseudocode (code written half in English, half in Python) for the body of the loop looks something like this:  while moreItems ask for price add price to total add one to count  This pseudocode has no option to set moreItems to False , so it would run forever. In a grocery store, there's a little plastic bar that you put after your last item to separate your groceries from those of the person behind you; that's how the clerk knows you have no more items. We don't have a little plastic bar data type in Python, so we'll do the next best thing: we will use a price of zero to mean this is my last item. In this program, zero is a sentinel value , a value used to signal the end of the loop. Here's the code:   def checkout() -> None: total = 0 count = 0 moreItems = True while moreItems: price = float(input('Enter price of item (0 when done): ')) if price != 0: count = count + 1 total = total + price print('Subtotal: $', total) else: moreItems = False average = total \/ count print('Total items:', count) print('Total $', total) print('Average price per item: $', average) checkout()   There are still a few problems with this program.     If you enter a negative number, it will be added to the total and count. Modify the code so that negative numbers give an error message instead (but don't end the loop) Hint: elif is your friend.    If you enter zero the first time you are asked for a price, the loop will end, and the program will try to divide by zero. Use an if \/ else statement outside the loop to avoid the division by zero and tell the user that you can't compute an average without data.    This program doesn't display the amounts to two decimal places. You'll be introduced to that in another chapter.       Validating Input  You can also use a while loop when you want to validate input; when you want to make sure the user has entered valid input for a prompt. Let's say you want a function that asks a yes-or-no question. In this case, you want to make sure that the person using your program enters either a Y for yes or N for no (in either upper or lower case). Here is a program that uses a while loop to keep asking until it receives a valid answer. As a preview of coming attractions, it uses the upper() method which is described in String Methods to convert a string to upper case. When you run the following code, try typing something other than Y or N to see how the code reacts:   def get_yes_or_no(message: str) -> str: valid_input = False while not valid_input: answer = input(message) answer = answer.upper() # convert to upper case if answer == 'Y' or answer == 'N': valid_input = True else: print('Please enter Y for yes or N for no.') return answer response = get_yes_or_no('Do you like lima beans? Y)es or N)o: ') if response == 'Y': print('Great! They are very healthy.') else: print('Too bad. If cooked right, they are quite tasty.')     "
},
{
  "id": "p-1670",
  "level": "2",
  "url": "iteration_the-listener-loop.html#p-1670",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "listener loop "
},
{
  "id": "p-1684",
  "level": "2",
  "url": "iteration_the-listener-loop.html#p-1684",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sentinel value "
},
{
  "id": "p-1690",
  "level": "2",
  "url": "iteration_the-listener-loop.html#p-1690",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "validate "
},
{
  "id": "iteration_break-and-continue",
  "level": "1",
  "url": "iteration_break-and-continue.html",
  "type": "Section",
  "number": "6.4",
  "title": "Break and Continue",
  "body": " Break and Continue  Python provides ways for us to control the flow of iteration with a two keywords: break and continue.  break allows the program to immediately ‘break out' of the loop, regardless of the loop's conditional structure. This means that the program will then skip the rest of the iteration, without rechecking the condition, and just goes on to the next outdented code that exists after the whole while loop.    while True: print(\"this phrase will always print\") break print(\"Does this phrase print?\") print(\"We are done with the while loop.\")   We can see here how the print statement right after break is not executed. In fact, without using break, we have no way to stop the while loop because the condition is always set to True!  continue is the other keyword that can control the flow of iteration. Using continue allows the program to immediately continue with the next iteration. The program will skip the rest of the iteration, recheck the condition, and maybe does another iteration depending on the condition set for the while loop.    x = 0 while x < 10: print(\"we are incrementing x\") if x % 2 == 0: x += 3 continue if x % 3 == 0: x += 5 x += 1 print(\"Done with our loop! X has the value: \" + str(x))   Try stepping through the above code in codelens to watch the order that the code is executed in. Notice in the first iteration how the program doesn't move to evaluate the divisible by 3 statment or add 1 to x. Instead, it continues to the next iteration.  "
},
{
  "id": "iteration_infinite-loops",
  "level": "1",
  "url": "iteration_infinite-loops.html",
  "type": "Section",
  "number": "6.5",
  "title": "Infinite Loops",
  "body": " Infinite Loops  Although the textbook has a time limit which prevents an active code window from running indefinitely, you'll still have to wait a little while if your program has an ininite loop. If you accidentally make one outside of the textbook, you won't have that same protection.  So how can you recognize when you are in danger of making an infinite loop?  First off, if the variable that you are using to determine if the while loop should continue is never reset inside the while loop, then your code will have an infinite loop. (Unless of course you use break to break out of the loop.)  Additionally, if the while condition is while True: and there is no break, then that is another case of an infinite loop!   while True: print(\"Will this stop?\") print(\"We have escaped.\")   Another case where an infinite loop is likely to occur is when you have reassiged the value of the variable used in the while statement in a way that prevents the loop from completing. This is an example below (if it takes too long, try reloading the page and stepping through this example in codelens):   b = 15 while b < 60: b = 5 print(\"Bugs\") b = b + 7   Notice how in this case, b is initally set to 15 outside of the while loop, and then reassigned the value of 5 inside, on line 4. By the time 7 has been added to b on line 6, we then have to check if b is less than 60. Because it isn't we again run line 4, and set the value of b to 5 again. There is no way to break out of this loop.   The ActiveCode exercises don't provide a way to stop an infinite loop like you would find in an IDE. To stop the code running in this book, refresh the page.    Sometimes programs can take a while to run, so how can you determine if your code is just talking a while or if it is stuck inside an infinite loop? Print statements are for people, so take advantage of them! You can add print statements to keep track of how your variables are changing as the program processes the instructions given to them. Below is an example of an infinite loop. Try adding print statments to see where it's coming from. When you're done, check out the answer to see what our solution was.   account_balance = 0 enough_money = 1000 while account_balance < enough_money: account_balance += 100 enough_money += 100 print(\"Final account_balance: \", account_balance)    The problem is that whenever we add more money to the account, we also increase the value of \"enough\". As long as \"enough_money\" increases by an amount less than the additional amount, the loop will eventually terminate.   account_balance = 0 enough_money = 1000 while account_balance < enough_money: print(\"account_balance: \", account_balance) print(\"enough_money: \", enough_money) account_balance += 100 enough_money += 10 print(\"Final account_balance: \", account_balance)    "
},
{
  "id": "note-39",
  "level": "2",
  "url": "iteration_infinite-loops.html#note-39",
  "type": "Note",
  "number": "6.5.1",
  "title": "",
  "body": " The ActiveCode exercises don't provide a way to stop an infinite loop like you would find in an IDE. To stop the code running in this book, refresh the page.  "
},
{
  "id": "question6_5_3",
  "level": "2",
  "url": "iteration_infinite-loops.html#question6_5_3",
  "type": "Checkpoint",
  "number": "6.5.2",
  "title": "",
  "body": " Sometimes programs can take a while to run, so how can you determine if your code is just talking a while or if it is stuck inside an infinite loop? Print statements are for people, so take advantage of them! You can add print statements to keep track of how your variables are changing as the program processes the instructions given to them. Below is an example of an infinite loop. Try adding print statments to see where it's coming from. When you're done, check out the answer to see what our solution was.   account_balance = 0 enough_money = 1000 while account_balance < enough_money: account_balance += 100 enough_money += 100 print(\"Final account_balance: \", account_balance)  "
},
{
  "id": "iteration_chapter-assessment",
  "level": "1",
  "url": "iteration_chapter-assessment.html",
  "type": "Section",
  "number": "6.6",
  "title": "Chapter Assessment",
  "body": " Chapter Assessment   Write a function, sublist , that takes in a list of numbers as the parameter. In the function, use a while loop to return a sublist of the input list. The sublist should contain the same values of the original list up until it reaches the number 5 (it should not contain the number 5).   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testThree(self): self.assertEqual(sublist([1, 2, 3, 4, 5, 6, 7, 8]), [1, 2, 3, 4], \"Testing that sublist([1, 2, 3, 4, 5, 6, 7, 8]) returns [1, 2, 3, 4]\") self.assertEqual(sublist([5]), [], \"Testing that sublist([5]) returns []\") self.assertEqual(sublist([8, 6, 5]), [8, 6], \"Testing that sublist([8, 6, 5]) returns [8, 6]\") self.assertEqual(sublist([1, 6, 2, 3, 9]), [1, 6, 2, 3, 9], \"Testing that sublist([1, 6, 2, 3, 9]) returns ([1, 6, 2, 3, 9])\") myTests().main()    Write a function called check_nums that takes a list as its parameter, and contains a while loop that only stops once the element of the list is the number 7. What is returned is a list of all of the numbers up until it reaches 7.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(check_nums([0,2,4,9,2,3,6,8,12,14,7,9,10,8,3]), [0,2,4,9,2,3,6,8,12,14], \"Testing that check_nums stops on the correct postion with input [0,2,4,9,2,3,6,8,12,14,7,9,10,8,3]\") self.assertEqual(check_nums([9,302,4,62,78,97,10,7,8,23,53,1]), [9,302,4,62,78,97,10], \"Testing that check_nums stops on the correct position with input [9,302,4,62,78,97,10,7,8,23,53,1]\") self.assertEqual(check_nums([7,8,3,2,4,51]), [], \"Testing that check_nums stops on the correct position with input [7,8,3,2,4,51]\") self.assertEqual(check_nums([1, 6, 2, 3, 9]), [1, 6, 2, 3, 9], \"Testing that check_nums([1, 6, 2, 3, 9]) returns ([1, 6, 2, 3, 9])\") myTests().main()    Write a function, sublist , that takes in a list of strings as the parameter. In the function, use a while loop to return a sublist of the input list. The sublist should contain the same values of the original list up until it reaches the string STOP (it should not contain the string STOP ).   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFour(self): self.assertEqual(sublist([\"bob\", \"joe\", \"lucy\", \"STOP\", \"carol\", \"james\"]), [\"bob\", \"joe\", \"lucy\"], \"Testing that sublist(['bob', 'joe', 'lucy', 'STOP', 'carol', 'james']) returns ['bob', 'joe', 'lucy']\") self.assertEqual(sublist([\"STOP\"]), [], \"Testing that sublist(['STOP']) returns []\") self.assertEqual(sublist([\"jackie\", \"paul\", \"STOP\"]), [\"jackie\", \"paul\"], \"Testing that sublist(['jackie', 'paul', 'STOP']) returns ['jackie', 'paul']\") myTests().main()    Write a function called stop_at_z that iterates through a list of strings. Using a while loop, append each string to a new list until the string that appears is z . The function should return the new list.   def stop_at_z(): ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(stop_at_z(['c', 'b', 'd', 'zebra', 'h', 'r', 'z', 'm', 'a', 'k']), ['c', 'b', 'd', 'zebra', 'h', 'r'], \"Testing the function stop_at_z on the input ['c', 'b', 'd', 'zebra', 'h', 'r', 'z', 'm', 'a', 'k'].\") self.assertEqual(stop_at_z(['zoo', 'zika', 'ozzie', 'pizzazz', 'z', 'pizza', 'zap', 'haze']), ['zoo', 'zika', 'ozzie', 'pizzazz'], \"Testing the function stop_at_z on the input ['zoo', 'zika', 'ozzie', 'pizzazz', 'z', 'pizza', 'zap', 'haze'].\") self.assertEqual(stop_at_z(['z']), [], \"Testing the function stop_at_z on the input ['z'].\") myTests().main()    Below is a for loop that works. Underneath the for loop, rewrite the problem so that it does the same thing, but using a while loop instead of a for loop. Assign the accumulated total in the while loop code to the variable sum2 . Once complete, sum2 should equal sum1.   sum1 = 0 lst = [65, 78, 21, 33] for x in lst: sum1 = sum1 + x ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFive(self): self.assertEqual(sum2, 197, \"Testing that sum2 is assigned to correct value.\") self.assertIn('while', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") myTests().main()    Challenge: Write a function called beginning that takes a list as input and contains a while loop that only stops once the element of the list is the string ‘bye'. What is returned is a list that contains up to the first 10 strings, regardless of where the loop stops. (i.e., if it stops on the 32nd element, the first 10 are returned. If bye is the 5th element, the first 4 are returned.) If you want to make this even more of a challenge, do this without slicing   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(beginning(['water', 'phone', 'home', 'chapstick', 'market', 'headphones', 'bye', 'stickie notes', 'snapchat', 'facebook', 'social media']), ['water', 'phone', 'home', 'chapstick', 'market', 'headphones'], \"Testing that beginning returns the correct list on input ['water', 'phone', 'home', 'chapstick', 'market', 'headphones', 'bye', 'stickie notes', 'snapchat', 'facebook', 'social media']\") self.assertEqual(beginning(['bye', 'no', 'yes', 'maybe', 'sorta']), [], \"Testing that beginning returns the correct list on input ['bye', 'no', 'yes', 'maybe', 'sorta']\") self.assertEqual(beginning(['hello', 'hi', 'hiyah', 'howdy', 'what up', 'whats good', 'holla', 'good afternoon', 'good morning', 'sup', 'see yah', 'toodel loo', 'night', 'until later', 'peace', 'bye', 'good-bye', 'g night']),['hello', 'hi', 'hiyah', 'howdy', 'what up', 'whats good', 'holla', 'good afternoon', 'good morning', 'sup'] , \"Testing that beginning returns the correct list on input ['hello', 'hi', 'hiyah', 'howdy', 'what up', 'whats good', 'holla', 'good afternoon', 'good morning', 'sup', 'see yah', 'toodel loo', 'night', 'until later', 'peace', 'bye', 'good-bye', 'g night']\") myTests().main()   "
},
{
  "id": "ac6_6_1",
  "level": "2",
  "url": "iteration_chapter-assessment.html#ac6_6_1",
  "type": "Checkpoint",
  "number": "6.6.1",
  "title": "",
  "body": " Write a function, sublist , that takes in a list of numbers as the parameter. In the function, use a while loop to return a sublist of the input list. The sublist should contain the same values of the original list up until it reaches the number 5 (it should not contain the number 5).   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testThree(self): self.assertEqual(sublist([1, 2, 3, 4, 5, 6, 7, 8]), [1, 2, 3, 4], \"Testing that sublist([1, 2, 3, 4, 5, 6, 7, 8]) returns [1, 2, 3, 4]\") self.assertEqual(sublist([5]), [], \"Testing that sublist([5]) returns []\") self.assertEqual(sublist([8, 6, 5]), [8, 6], \"Testing that sublist([8, 6, 5]) returns [8, 6]\") self.assertEqual(sublist([1, 6, 2, 3, 9]), [1, 6, 2, 3, 9], \"Testing that sublist([1, 6, 2, 3, 9]) returns ([1, 6, 2, 3, 9])\") myTests().main()  "
},
{
  "id": "ac6_6_2",
  "level": "2",
  "url": "iteration_chapter-assessment.html#ac6_6_2",
  "type": "Checkpoint",
  "number": "6.6.2",
  "title": "",
  "body": " Write a function called check_nums that takes a list as its parameter, and contains a while loop that only stops once the element of the list is the number 7. What is returned is a list of all of the numbers up until it reaches 7.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(check_nums([0,2,4,9,2,3,6,8,12,14,7,9,10,8,3]), [0,2,4,9,2,3,6,8,12,14], \"Testing that check_nums stops on the correct postion with input [0,2,4,9,2,3,6,8,12,14,7,9,10,8,3]\") self.assertEqual(check_nums([9,302,4,62,78,97,10,7,8,23,53,1]), [9,302,4,62,78,97,10], \"Testing that check_nums stops on the correct position with input [9,302,4,62,78,97,10,7,8,23,53,1]\") self.assertEqual(check_nums([7,8,3,2,4,51]), [], \"Testing that check_nums stops on the correct position with input [7,8,3,2,4,51]\") self.assertEqual(check_nums([1, 6, 2, 3, 9]), [1, 6, 2, 3, 9], \"Testing that check_nums([1, 6, 2, 3, 9]) returns ([1, 6, 2, 3, 9])\") myTests().main()  "
},
{
  "id": "ac6_6_3",
  "level": "2",
  "url": "iteration_chapter-assessment.html#ac6_6_3",
  "type": "Checkpoint",
  "number": "6.6.3",
  "title": "",
  "body": " Write a function, sublist , that takes in a list of strings as the parameter. In the function, use a while loop to return a sublist of the input list. The sublist should contain the same values of the original list up until it reaches the string STOP (it should not contain the string STOP ).   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFour(self): self.assertEqual(sublist([\"bob\", \"joe\", \"lucy\", \"STOP\", \"carol\", \"james\"]), [\"bob\", \"joe\", \"lucy\"], \"Testing that sublist(['bob', 'joe', 'lucy', 'STOP', 'carol', 'james']) returns ['bob', 'joe', 'lucy']\") self.assertEqual(sublist([\"STOP\"]), [], \"Testing that sublist(['STOP']) returns []\") self.assertEqual(sublist([\"jackie\", \"paul\", \"STOP\"]), [\"jackie\", \"paul\"], \"Testing that sublist(['jackie', 'paul', 'STOP']) returns ['jackie', 'paul']\") myTests().main()  "
},
{
  "id": "ac6_6_4",
  "level": "2",
  "url": "iteration_chapter-assessment.html#ac6_6_4",
  "type": "Checkpoint",
  "number": "6.6.4",
  "title": "",
  "body": " Write a function called stop_at_z that iterates through a list of strings. Using a while loop, append each string to a new list until the string that appears is z . The function should return the new list.   def stop_at_z(): ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(stop_at_z(['c', 'b', 'd', 'zebra', 'h', 'r', 'z', 'm', 'a', 'k']), ['c', 'b', 'd', 'zebra', 'h', 'r'], \"Testing the function stop_at_z on the input ['c', 'b', 'd', 'zebra', 'h', 'r', 'z', 'm', 'a', 'k'].\") self.assertEqual(stop_at_z(['zoo', 'zika', 'ozzie', 'pizzazz', 'z', 'pizza', 'zap', 'haze']), ['zoo', 'zika', 'ozzie', 'pizzazz'], \"Testing the function stop_at_z on the input ['zoo', 'zika', 'ozzie', 'pizzazz', 'z', 'pizza', 'zap', 'haze'].\") self.assertEqual(stop_at_z(['z']), [], \"Testing the function stop_at_z on the input ['z'].\") myTests().main()  "
},
{
  "id": "ac6_6_5",
  "level": "2",
  "url": "iteration_chapter-assessment.html#ac6_6_5",
  "type": "Checkpoint",
  "number": "6.6.5",
  "title": "",
  "body": " Below is a for loop that works. Underneath the for loop, rewrite the problem so that it does the same thing, but using a while loop instead of a for loop. Assign the accumulated total in the while loop code to the variable sum2 . Once complete, sum2 should equal sum1.   sum1 = 0 lst = [65, 78, 21, 33] for x in lst: sum1 = sum1 + x ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFive(self): self.assertEqual(sum2, 197, \"Testing that sum2 is assigned to correct value.\") self.assertIn('while', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") myTests().main()  "
},
{
  "id": "ac6_6_6",
  "level": "2",
  "url": "iteration_chapter-assessment.html#ac6_6_6",
  "type": "Checkpoint",
  "number": "6.6.6",
  "title": "",
  "body": " Challenge: Write a function called beginning that takes a list as input and contains a while loop that only stops once the element of the list is the string ‘bye'. What is returned is a list that contains up to the first 10 strings, regardless of where the loop stops. (i.e., if it stops on the 32nd element, the first 10 are returned. If bye is the 5th element, the first 4 are returned.) If you want to make this even more of a challenge, do this without slicing   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(beginning(['water', 'phone', 'home', 'chapstick', 'market', 'headphones', 'bye', 'stickie notes', 'snapchat', 'facebook', 'social media']), ['water', 'phone', 'home', 'chapstick', 'market', 'headphones'], \"Testing that beginning returns the correct list on input ['water', 'phone', 'home', 'chapstick', 'market', 'headphones', 'bye', 'stickie notes', 'snapchat', 'facebook', 'social media']\") self.assertEqual(beginning(['bye', 'no', 'yes', 'maybe', 'sorta']), [], \"Testing that beginning returns the correct list on input ['bye', 'no', 'yes', 'maybe', 'sorta']\") self.assertEqual(beginning(['hello', 'hi', 'hiyah', 'howdy', 'what up', 'whats good', 'holla', 'good afternoon', 'good morning', 'sup', 'see yah', 'toodel loo', 'night', 'until later', 'peace', 'bye', 'good-bye', 'g night']),['hello', 'hi', 'hiyah', 'howdy', 'what up', 'whats good', 'holla', 'good afternoon', 'good morning', 'sup'] , \"Testing that beginning returns the correct list on input ['hello', 'hi', 'hiyah', 'howdy', 'what up', 'whats good', 'holla', 'good afternoon', 'good morning', 'sup', 'see yah', 'toodel loo', 'night', 'until later', 'peace', 'bye', 'good-bye', 'g night']\") myTests().main()  "
},
{
  "id": "more-about-iteration_introduction-iteration",
  "level": "1",
  "url": "more-about-iteration_introduction-iteration.html",
  "type": "Section",
  "number": "7.1",
  "title": "Introduction: Iteration",
  "body": " Introduction: Iteration  A basic building block of all programs is to be able to repeat some code over and over again. Whether it is updating the bank balances of millions of customers each night, or sending email messages to thousands of people programming involves instructing the computer to do many repetitive actions. In computing, we refer to this repetitive execution as iteration . In this section, we will explore some mechanisms for basic iteration.  With collections (lists and strings), a lot of computations involve processing one item at a time. For strings, this means that we would like to process one character at a time. Often we start at the beginning, select each character in turn, do something to it, and continue until the end. For example, we could take each character and substitute for the character 13 characters away in the alphabet to create a coded message.  This pattern of processing is called a traversal, or iteration over the characters. Similarly, we can process each of the items in a list, one at a time, iterating over the items in the list. This has applications in every piece of software you can imagine:     Displaying a list of friends on SnapChat    Updating the position of every character on the screen of a video game    Displaying the locations that Doctors Without Borders operates in        "
},
{
  "id": "p-1713",
  "level": "2",
  "url": "more-about-iteration_introduction-iteration.html#p-1713",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "iteration "
},
{
  "id": "more-about-iteration_the-for-loop",
  "level": "1",
  "url": "more-about-iteration_the-for-loop.html",
  "type": "Section",
  "number": "7.2",
  "title": "The for loop",
  "body": " The for loop  Back when we drew the images with turtle it could be quite tedious. If we wanted to draw a square then we had to move then turn, move then turn, etc. etc. four times. If we were drawing a hexagon, or an octagon, or a polygon with 42 sides, it would have been a nightmare to duplicate all that code.  A basic building block of all programs is to be able to repeat some code over and over again. We refer to this repetitive idea as iteration . In this section, we will explore some mechanisms for basic iteration.  In Python, the for statement allows us to write programs that implement iteration. As a simple example, let's say we have some friends, and we'd like to send them each an email inviting them to our party. We don't quite know how to send email yet, so for the moment we'll just print a message for each friend.   for name in [\"Joe\", \"Amy\", \"Brad\", \"Angelina\", \"Zuki\", \"Thandi\", \"Matthew\"]: print(\"Hi\", name, \"Please come to my party on Saturday!\")   Take a look at the output produced when you press the run button. There is one line printed for each friend. Here's how it works:     name in this for statement is called the loop variable or, alternatively, the iterator variable.    The list of names in the square brackets is the sequence over which we will iterate.    Line 2 is the loop body . The loop body is always indented. The indentation determines exactly what statements are “in the loop”. The loop body is performed one time for each name in the list.    On each iteration or pass of the loop, first a check is done to see if there are still more items to be processed. If there are none left (this is called the terminating condition of the loop), the loop has finished. Program execution continues at the next statement after the loop body.    If there are items still to be processed, the loop variable is updated to refer to the next item in the list. This means, in this case, that the loop body is executed here 7 times, and each time name will refer to a different friend.    At the end of each execution of the body of the loop, Python returns to the for statement, to see if there are more items to be handled.    The overall syntax is for <loop_var_name> in <sequence>:     Between the words for and in, there must be a variable name for the loop variable. You can't put a whole expression there.    A colon is required at the end of the line.    After the word in and before the colon is an expression that must evaluate to a sequence (e.g, a string or a list or a tuple). It could be a literal, or a variable name, or a more complex expression.    "
},
{
  "id": "more-about-iteration_flow-of-execution-of-the-for-loop",
  "level": "1",
  "url": "more-about-iteration_flow-of-execution-of-the-for-loop.html",
  "type": "Section",
  "number": "7.3",
  "title": "Flow of Execution of the for Loop",
  "body": " Flow of Execution of the for Loop  As a program executes, the interpreter always keeps track of which statement is about to be executed. We call this the control flow , or the flow of execution of the program. When humans execute programs, they often use their finger to point to each statement in turn. So you could think of control flow as Python's moving finger .  Control flow until now has been strictly top to bottom, one statement at a time. We call this type of control sequential . Sequential flow of control is always assumed to be the default behavior for a computer program. The for statement changes this.  Flow of control is often easy to visualize and understand if we draw a flowchart. This flowchart shows the exact steps and logic of how the for statement executes.    Not sure what a flowchart is? Check out this funny take on it, in XKCD . And this one .   A codelens demonstration is a good way to help you visualize exactly how the flow of control works with the for loop. Try stepping forward and backward through the program by pressing the buttons. You can see the value of name change as the loop iterates through the list of friends.   for name in [\"Joe\", \"Amy\", \"Brad\", \"Angelina\", \"Zuki\", \"Thandi\", \"Paris\"]: print(\"Hi \", name, \" Please come to my party on Saturday!\")   While loops may not seem to be necessary when you're iterating over a few items, it is extremely helpful when iterating over lots of items. Imagine if you needed to change what happened in the code block. On the left, when you use iteration, this is easy. On the right, when you have hard coded the process, this is more difficult.   "
},
{
  "id": "p-1734",
  "level": "2",
  "url": "more-about-iteration_flow-of-execution-of-the-for-loop.html#p-1734",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "control flow flow of execution "
},
{
  "id": "p-1735",
  "level": "2",
  "url": "more-about-iteration_flow-of-execution-of-the-for-loop.html#p-1735",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequential "
},
{
  "id": "note-40",
  "level": "2",
  "url": "more-about-iteration_flow-of-execution-of-the-for-loop.html#note-40",
  "type": "Note",
  "number": "7.3.1",
  "title": "",
  "body": " Not sure what a flowchart is? Check out this funny take on it, in XKCD . And this one .  "
},
{
  "id": "more-about-iteration_strings-and-for-loops",
  "level": "1",
  "url": "more-about-iteration_strings-and-for-loops.html",
  "type": "Section",
  "number": "7.4",
  "title": "Strings and <code class=\"code-inline tex2jax_ignore\">for<\/code> loops",
  "body": " Strings and for loops  Since a string is simply a sequence of characters, the for loop iterates over each character automatically. (As always, try to predict what the output will be from this code before your run it.)   for achar in \"Go Spot Go\": print(achar)   The loop variable achar is automatically reassigned each character in the string Go Spot Go . We will refer to this type of sequence iteration as iteration by item . Note that the for loop processes the characters in a string or items in a sequence one at a time from left to right.   Check your understanding    How many times is the word HELLO printed by the following statements?   s = \"python rocks\" for ch in s: print(\"HELLO\")      10    Iteration by item will process once for each item in the sequence.      11    The blank is part of the sequence.      12    Yes, there are 12 characters, including the blank.      Error, the for statement needs to use the range function.    The for statement can iterate over a sequence item by item.      "
},
{
  "id": "p-1741",
  "level": "2",
  "url": "more-about-iteration_strings-and-for-loops.html#p-1741",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "iteration by item "
},
{
  "id": "p-1742",
  "level": "2",
  "url": "more-about-iteration_strings-and-for-loops.html#p-1742",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question7_4_1",
  "level": "2",
  "url": "more-about-iteration_strings-and-for-loops.html#question7_4_1",
  "type": "Checkpoint",
  "number": "7.4.1",
  "title": "",
  "body": " How many times is the word HELLO printed by the following statements?   s = \"python rocks\" for ch in s: print(\"HELLO\")      10    Iteration by item will process once for each item in the sequence.      11    The blank is part of the sequence.      12    Yes, there are 12 characters, including the blank.      Error, the for statement needs to use the range function.    The for statement can iterate over a sequence item by item.    "
},
{
  "id": "more-about-iteration_the-accumulator-pattern",
  "level": "1",
  "url": "more-about-iteration_the-accumulator-pattern.html",
  "type": "Section",
  "number": "7.5",
  "title": "The Accumulator Pattern",
  "body": " The Accumulator Pattern  One common programming pattern is to traverse a sequence, accumulating a value as we go, such as the sum-so-far or the maximum-so-far. That way, at the end of the traversal we have accumulated a single value, such as the sum total of all the items or the largest item.    The anatomy of the accumulation pattern includes:     initializing an accumulator variable to an initial value (such as 0 if accumulating a sum)    iterating (e.g., traversing the items in a sequence)    updating the accumulator variable on each iteration (i.e., when processing each item in the sequence)       For example, consider the following code, which computes the sum of the numbers in a string.   def sum_nums() -> int: nums = \"123456789\" accum = 0 for w in nums: accum = accum + int(w) return accum print(sum_nums())   In the program above, notice that the variable accum starts out with a value of 0. Next, the iteration is performed 10 times. Inside the for loop, the update occurs. w has the value of current item (1 the first time, then 2, then 3, etc.). accum is reassigned a new value which is the old value plus the current value of w .  This pattern of iterating the updating of a variable is commonly referred to as the accumulator pattern . We refer to the variable as the accumulator . This pattern will come up over and over again. Remember that the key to making it work successfully is to be sure to initialize the variable before you start the iteration. Once inside the iteration, it is required that you update the accumulator.  Here is the same program in codelens. Step through the function and watch the running total accumulate the result.   def sum_nums() -> int: nums = \"123456789\" accum = 0 for w in nums: accum = accum + int(w) return accum print(sum_nums())    What would happen if we indented the print accum statement? Not sure? Make a prediction, then try it and find out.   We can utilize the range function in this situation as well. Previously, you've seen it used when we wanted to draw in turtle. There we used it to iterate a certain number of times. We can do more than that though. The range function takes at least one input - which should be an integer - and returns a list as long as your input. While you can provide two inputs, we will focus on using range with just one input. With one input, range will start at zero and go up to - but not include - the input. Here are the examples:   print(\"range(5): \") for i in range(5): print(i) print(\"range(0,5): \") for i in range(0, 5): print(i)    accum = 0 for w in range(11): accum = accum + w print(accum) # or, if you use two inputs for the range function sec_accum = 0 for w in range(1,11): sec_accum = sec_accum + w print(sec_accum)   Because the range function is exclusive of the ending number, we have to use 11 as the function input.  We can use the accumulation pattern is count the number of something or to sum up a total. The above examples only covered how to get the sum for a list, but we can also count how many items are in the list if we wanted to.   nums = \"123456789\" count = 0 for w in nums: count = count + 1 print(count)   In this example we don't make use of w even though the iterator variable (loop variable) is a necessary part of constructing a for loop. Instead of adding the value of w to count we add a 1 to it, because we're incrementing the value of count when we iterate each time through the loop. Though in this scenario we could have used the len function, there are other cases later on where len won't be useful but we will still need to count.   Check your understanding    Consider the following code:   nums = \"123456789\" for w in nums: accum = 0 accum = accum + w print(accum)   What happens if you put the initialization of accum inside the for loop as the first instruction in the loop?     It will print out 9 instead of 45    The variable accum will be reset to 0 each time through the loop. Then it will add the current item. Only the last item will count.      It will cause a run-time error    Assignment statements are perfectly legal inside loops and will not cause an error.      It will print out 0 instead of 45    Good thought: the variable accum will be reset to 0 each time through the loop. But then it adds the current item.      Rearrange the code statements so that the program will add up the first n odd numbers where n is provided by the user.    n = int(input('How many odd numbers would you like to add together?'))  thesum = 0  oddnumber = 1    for counter in range(n):    thesum = thesum + oddnumber  oddnumber = oddnumber + 2    print(thesum)      Count the number of characters in string str1 . Do not use len() . Save the number in variable numbs .   str1 = \"I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testEight(self): self.assertEqual(numbs, 90, \"Testing that numbs is assigned to correct values.\") self.assertNotIn(\"len(\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\")) myTests().main()    Create a string of numbers 0 through 40 and assign this string to the variable numbers . Then, accumulate the total of the string's values and assign that sum to the variable sum1 . Note that, although the value 10 will be added to the string, it will be summed as 1 + 0 , as the loop merely looks at one digit at a time.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testNineA(self): self.assertEqual(numbers, \"012345678910111213141516171819202122232425262728293031323334353637383940\", \"Testing that numbers is assigned to correct values.\") def testNineB(self): self.assertEqual(sum1, 244, \"Testing that sum1 has the correct value.\") myTests().main()   "
},
{
  "id": "p-1752",
  "level": "2",
  "url": "more-about-iteration_the-accumulator-pattern.html#p-1752",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "accumulating "
},
{
  "id": "p-1753",
  "level": "2",
  "url": "more-about-iteration_the-accumulator-pattern.html#p-1753",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initializing iterating updating "
},
{
  "id": "p-1759",
  "level": "2",
  "url": "more-about-iteration_the-accumulator-pattern.html#p-1759",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "accumulator pattern accumulator "
},
{
  "id": "note-41",
  "level": "2",
  "url": "more-about-iteration_the-accumulator-pattern.html#note-41",
  "type": "Note",
  "number": "7.5.1",
  "title": "",
  "body": " What would happen if we indented the print accum statement? Not sure? Make a prediction, then try it and find out.  "
},
{
  "id": "p-1766",
  "level": "2",
  "url": "more-about-iteration_the-accumulator-pattern.html#p-1766",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question7_5_5",
  "level": "2",
  "url": "more-about-iteration_the-accumulator-pattern.html#question7_5_5",
  "type": "Checkpoint",
  "number": "7.5.2",
  "title": "",
  "body": " Consider the following code:   nums = \"123456789\" for w in nums: accum = 0 accum = accum + w print(accum)   What happens if you put the initialization of accum inside the for loop as the first instruction in the loop?     It will print out 9 instead of 45    The variable accum will be reset to 0 each time through the loop. Then it will add the current item. Only the last item will count.      It will cause a run-time error    Assignment statements are perfectly legal inside loops and will not cause an error.      It will print out 0 instead of 45    Good thought: the variable accum will be reset to 0 each time through the loop. But then it adds the current item.    "
},
{
  "id": "pp7_5_1",
  "level": "2",
  "url": "more-about-iteration_the-accumulator-pattern.html#pp7_5_1",
  "type": "Checkpoint",
  "number": "7.5.3",
  "title": "",
  "body": " Rearrange the code statements so that the program will add up the first n odd numbers where n is provided by the user.    n = int(input('How many odd numbers would you like to add together?'))  thesum = 0  oddnumber = 1    for counter in range(n):    thesum = thesum + oddnumber  oddnumber = oddnumber + 2    print(thesum)   "
},
{
  "id": "ac7_5_5",
  "level": "2",
  "url": "more-about-iteration_the-accumulator-pattern.html#ac7_5_5",
  "type": "Checkpoint",
  "number": "7.5.4",
  "title": "",
  "body": " Count the number of characters in string str1 . Do not use len() . Save the number in variable numbs .   str1 = \"I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testEight(self): self.assertEqual(numbs, 90, \"Testing that numbs is assigned to correct values.\") self.assertNotIn(\"len(\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\")) myTests().main()  "
},
{
  "id": "ac7_5_6",
  "level": "2",
  "url": "more-about-iteration_the-accumulator-pattern.html#ac7_5_6",
  "type": "Checkpoint",
  "number": "7.5.5",
  "title": "",
  "body": " Create a string of numbers 0 through 40 and assign this string to the variable numbers . Then, accumulate the total of the string's values and assign that sum to the variable sum1 . Note that, although the value 10 will be added to the string, it will be summed as 1 + 0 , as the loop merely looks at one digit at a time.   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testNineA(self): self.assertEqual(numbers, \"012345678910111213141516171819202122232425262728293031323334353637383940\", \"Testing that numbers is assigned to correct values.\") def testNineB(self): self.assertEqual(sum1, 244, \"Testing that sum1 has the correct value.\") myTests().main()  "
},
{
  "id": "more-about-iteration_printing-intermediate-results",
  "level": "1",
  "url": "more-about-iteration_printing-intermediate-results.html",
  "type": "Section",
  "number": "7.6",
  "title": "Printing Intermediate Results",
  "body": " Printing Intermediate Results  In this textbook we provide the codelens tool so that you are able to step through the program and watch what happens each time a line is evaluated by the Python interpretor. What if you didn't have codelens though, what would you do?  In that case, print statements are your best friend. They can show you what the value of something is. This is especially helpful in the case of writing for loops or accumulating a value. If something is going wrong you can compare what you expect to happen to what is actually happening.   w = range(10) tot = 0 for num in w: tot += num print(tot)   Say we weren't sure what num was being assigned each time we iterated. One way to find out would be to add a print statement inside of the for loop to see.   w = range(10) tot = 0 for num in w: print(num) tot += num print(tot)   If we wanted to see what was happening to tot as well, we could print that out in the for loop as well!   w = range(10) tot = 0 for num in w: print(num) tot += num print(tot) print(tot)   Finally, if we wanted to make these numbers easier to understand, we could add more to the print statements to make them easier to read!   w = range(10) tot = 0 print(\"***** Before the For Loop ******\") for num in w: print(\"***** A New Loop Iteration ******\") print(\"Value of num:\", num) tot += num print(\"Value of tot:\", tot) print(\"***** End of For Loop *****\") print(\"Final total:\", tot)   "
},
{
  "id": "more-about-iteration_naming-variables-in-for-loops",
  "level": "1",
  "url": "more-about-iteration_naming-variables-in-for-loops.html",
  "type": "Section",
  "number": "7.7",
  "title": "Naming Variables in For Loops",
  "body": " Naming Variables in For Loops  We've mentioned before about carefully choosing your variable names. Though the names you choose aren't meaningful to the program, they can be to you. When we choose names for variables in for loops, the more understandable they are to us, the easier it will be to use them. Here are some tips to make your for loops more readable for yourself and anyone else who may read your programs:     Use singular nouns for the iterator variable, which is also called the loop variable (things like song , book , post , letter , word ).    Use plural nouns for the sequence variable (things like songs , books , posts , letters , words ).     While these two tips won't always apply, they are general best practices when it comes to choosing variable names. Below we have an example!   # x is a list defined elsewhere for y in x: print(y)   Since we can't see the contents of x right now - this might be the case if we have a long program - then these names would make the program hard to understand. Let's compare this to a program that does the same thing, but uses better names.   # genres is a list defined elsewhere for genre in genres: print(genre)   Here what we expect is much more clear, even if we didn't see how genres was initialized!   "
},
{
  "id": "more-about-iteration_glossary",
  "level": "1",
  "url": "more-about-iteration_glossary.html",
  "type": "Section",
  "number": "7.8",
  "title": "Glossary",
  "body": " Glossary    accumulator pattern  A pattern where the program initializes an accumulator variable and then changes it during each iteration, accumulating a final result.    Control Flow  Also known as the flow of execution , the order in which a program executes. By default, the control flow is *sequential* .    for loop traversal ( for )  Traversing a string or a list means accessing each character in the string or item in the list, one at a time. For example, the following for loop:   for ix in 'Example': ...   executes the body of the loop 7 times with different values of ix each time.    index  A variable or value used to select a member of an ordered collection, such as a character from a string, or an element from a list.    loop body  The loop body contains the statements of the program that will be iterate through upon each loop. The loop body is always indented.    pattern  A sequence of statements, or a style of coding something that has general applicability in a number of different situations. Part of becoming a mature programmer is to learn and establish the patterns and algorithms that form your toolkit.    range  A function that produces a list of numbers. For example, range(5) , produces a list of five numbers, starting with 0, [0, 1, 2, 3, 4] .    sequential flow  The execution of a program from top to bottom, one statement at a time    terminating condition  A condition which stops an interation from continuing    traverse  To iterate through the elements of a collection, performing a similar operation on each.    "
},
{
  "id": "p-1792",
  "level": "2",
  "url": "more-about-iteration_glossary.html#p-1792",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "flow of execution *sequential* "
},
{
  "id": "sequences_introduction-sequences",
  "level": "1",
  "url": "sequences_introduction-sequences.html",
  "type": "Section",
  "number": "8.1",
  "title": "Introduction: Sequences",
  "body": " Introduction: Sequences  In the real world most of the data we care about doesn't exist on its own. Usually data is in the form of some kind of collection or sequence. For example, a grocery list helps us keep track of the individual food items we need to buy, and our todo list organizes the things we need to do each day. Notice that both the grocery list and the todo list are not even concerned with numbers as much as they are concerned with words. This is true of much of our daily life, and so Python provides us with many features to work with lists of all kinds of objects (numbers, words, etc.) as well as special kind of sequence, the character string, which you can think of as a sequence of individual letters.  So far we have seen built-in types like: int , float , and str . int and float are considered to be simple or primitive or atomic data types because their values are not composed of any smaller parts. They cannot be broken down.  On the other hand, strings and lists are different from the others because they are made up of smaller pieces. In the case of strings, they are made up of smaller strings each containing one character .  Types that are comprised of smaller pieces are called collection data types . Depending on what we are doing, we may want to treat a collection data type as a single entity (the whole), or we may want to access its parts. This ambiguity is useful.  In this chapter we will examine operations that can be performed on sequences, such as picking out individual elements or subsequences (called slices) or computing their length. In addition, we'll examine some special functions that are defined only for strings, and we'll find out one importance difference between strings and lists, that lists can be changed (or mutated) while strings are immutable.   Learning Goals     To understand different operations that can be performed on strings, lists, and tuples    To distinguish between different uses of [] in Python       Objectives     Predict the output of split and join operations    Read and write expressions that use slices    Read and write expressions that use concatenation and repetition      "
},
{
  "id": "p-1807",
  "level": "2",
  "url": "sequences_introduction-sequences.html#p-1807",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "character "
},
{
  "id": "p-1808",
  "level": "2",
  "url": "sequences_introduction-sequences.html#p-1808",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "collection data types "
},
{
  "id": "sequences_strings-and-lists",
  "level": "1",
  "url": "sequences_strings-and-lists.html",
  "type": "Section",
  "number": "8.2",
  "title": "Strings and Lists",
  "body": " Strings and Lists  Throughout the first chapters of this book we have used strings to represent words or phrases that we wanted to print out. Our definition was simple: a string is simply some characters inside quotes. In this chapter we explore strings in much more detail.  Additionally, we explore lists, which are very much like strings but can hold different types.   Strings  Strings can be defined as sequential collections of characters. This means that the individual characters that make up a string are in a particular order from left to right.  A string that contains no characters, often referred to as the empty string , is still considered to be a string. It is simply a sequence of zero characters and is represented by ‘' or (two single or two double quotes with nothing in between).    Lists  A list is a sequential collection of Python data values, where each value is identified by an index. The values that make up a list are called its elements . Lists are similar to strings, which are ordered collections of characters, except that the elements of a list can have any type and for any one list, the items can be of different types.  There are several ways to create a new list. The simplest is to enclose the elements in square brackets ( [ and ] ).   [10, 20, 30, 40] [\"spam\", \"bungee\", \"swallow\"]   The first example is a list of four integers. The second is a list of three strings. As we said above, the elements of a list don't have to be the same type. The following list contains a string, a float, an integer, and another list.   [\"hello\", 2.0, 5, [10, 20]]    WP: Don't Mix Types!  You'll likely see us do this in the textbook to give you odd combinations, but when you create lists you should generally not mix types together. A list of just strings or just integers or just floats is generally easier to deal with.     Tuples  A tuple , like a list, is a sequence of items of any type. The printed representation of a tuple is a comma-separated sequence of values, enclosed in parentheses. In other words, the representation is just like lists, except with parentheses () instead of square brackets [].  One way to create a tuple is to write an expression, enclosed in parentheses, that consists of multiple other expressions, separated by commas.   julia = (\"Julia\", \"Roberts\", 1967, \"Duplicity\", 2009, \"Actress\", \"Atlanta, Georgia\")   The key difference between lists and tuples is that a tuple is immutable, meaning that its contents can't be changed after the tuple is created. We will examine the mutability of lists in detail in the next chapter.  To create a tuple with a single element (but you're probably not likely to do that too often), we have to include the final comma, because without the final comma, Python treats the (5) below as an integer in parentheses:   t = (5,) print(type(t)) x = (5) print(type(x))    Check your understanding    A list can only contain integer items.     False    Yes, unlike strings, lists can consist of any type of Python data.      True    Lists are heterogeneous, meaning they can have different types of data.      "
},
{
  "id": "p-1820",
  "level": "2",
  "url": "sequences_strings-and-lists.html#p-1820",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "empty string "
},
{
  "id": "p-1821",
  "level": "2",
  "url": "sequences_strings-and-lists.html#p-1821",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "list elements "
},
{
  "id": "note-42",
  "level": "2",
  "url": "sequences_strings-and-lists.html#note-42",
  "type": "Note",
  "number": "8.2.1",
  "title": "",
  "body": " WP: Don't Mix Types!  You'll likely see us do this in the textbook to give you odd combinations, but when you create lists you should generally not mix types together. A list of just strings or just integers or just floats is generally easier to deal with.  "
},
{
  "id": "p-1826",
  "level": "2",
  "url": "sequences_strings-and-lists.html#p-1826",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tuple "
},
{
  "id": "p-1830",
  "level": "2",
  "url": "sequences_strings-and-lists.html#p-1830",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question8_2_1",
  "level": "2",
  "url": "sequences_strings-and-lists.html#question8_2_1",
  "type": "Checkpoint",
  "number": "8.2.2",
  "title": "",
  "body": " A list can only contain integer items.     False    Yes, unlike strings, lists can consist of any type of Python data.      True    Lists are heterogeneous, meaning they can have different types of data.    "
},
{
  "id": "sequences_index-operator-working-with-the-characters-of-a-string",
  "level": "1",
  "url": "sequences_index-operator-working-with-the-characters-of-a-string.html",
  "type": "Section",
  "number": "8.3",
  "title": "Index Operator: Working with the Characters of a String",
  "body": " Index Operator: Working with the Characters of a String  The indexing operator (Python uses square brackets to enclose the index) selects a single character from a string. The characters are accessed by their position or index value. For example, in the string shown below, the 14 characters are indexed left to right from postion 0 to position 13.   It is also the case that the positions are named from right to left using negative numbers where -1 is the rightmost index and so on. Note that the character at index 6 (or -8) is the blank character.   school = \"Luther College\" m = school[2] print(m) lastchar = school[-1] print(lastchar)   The expression school[2] selects the character at index 2 from school , and creates a new string containing just this one character. The variable m refers to the result.  The letter at index zero of \"Luther College\" is L . So at position [2] we have the letter t .  If you want the zero-eth letter of a string, you just put 0, or any expression with the value 0, in the brackets. Give it a try.  The expression in brackets is called an index . An index specifies a member of an ordered collection. In this case the collection of characters in the string. The index indicates which character you want. It can be any integer expression so long as it evaluates to a valid index value.  Note that indexing returns a string — Python has no special type for a single character. It is just a string of length 1.   Index Operator: Accessing Elements of a List or Tuple  The syntax for accessing the elements of a list or tuple is the same as the syntax for accessing the characters of a string. We use the index operator ( [] – not to be confused with an empty list). The expression inside the brackets specifies the index. Remember that the indices start at 0. Any integer expression can be used as an index and as with strings, negative index values will locate items from the right instead of from the left.  When we say the first, third or nth character of a sequence, we generally mean counting the usual way, starting with 1. The nth character and the character AT INDEX n are different then: The nth character is at index n-1. Make sure you are clear on what you mean!  Try to predict what will be printed out by the following code, and then run it to check your prediction. (Actually, it's a good idea to always do that with the code examples. You will learn much more if you force yourself to make a prediction before you see the output.)   numbers = [17, 123, 87, 34, 66, 8398, 44] print(numbers[2]) print(numbers[9-8]) print(numbers[-2])    prices = (1.99, 2.00, 5.50, 20.95, 100.98) print(prices[0]) print(prices[-1]) print(prices[3-5])    Check your understanding    What is printed by the following statements?   s = \"python rocks\" print(s[3])      t    Index locations do not start with 1, they start with 0.      h    Yes, index locations start with 0.      c    s[-3] would return c, counting from right to left.      Error, you cannot use the [ ] operator with a string.    [ ] is the index operator.      What is printed by the following statements?   s = \"python rocks\" print(s[2] + s[-4])      tr    Almost, t is at postion 2, counting left to right starting from 0; but r is at -5, counting right to left starting from -1.      to    For -4 you count from right to left, starting with -1.      ps    p is at location 0, not 2.      nn    n is at location 5, not 2.      Error, you cannot use the [ ] operator with the + operator.    [ ] operator returns a string that can be concatenated with another string.      What is printed by the following statements?   alist = [3, 67, \"cat\", [56, 57, \"dog\"], [ ], 3.14, False] print(alist[5])      [ ]    The empty list is at index 4.      3.14    Yes, 3.14 is at index 5 since we start counting at 0 and sublists count as one item.      False    False is at index 6.      \"dog\"    Look again, the element at index 3 is a list. This list only counts as one element.      Assign the value of the 34th element of lst to the variable output .   lst = [\"hi\", \"morning\", \"dog\", \"506\", \"caterpillar\", \"balloons\", 106, \"yo-yo\", \"python\", \"moon\", \"water\", \"sleepy\", \"daffy\", 45, \"donald\", \"whiteboard\", \"glasses\", \"markers\", \"couches\", \"butterfly\", \"100\", \"magazine\", \"door\", \"picture\", \"window\", [\"Olympics\", \"handle\"], \"chair\", \"pages\", \"readings\", \"burger\", \"juggle\", \"craft\", [\"store\", \"poster\", \"board\"], \"laptop\", \"computer\", \"plates\", \"hotdog\", \"salad\", \"backpack\", \"zipper\", \"ring\", \"watch\", \"finger\", \"bags\", \"boxes\", \"pods\", \"peas\", \"apples\", \"horse\", \"guinea pig\", \"bowl\", \"EECS\"] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(output, \"laptop\", \"Testing that output value is assigned to correct value.\") myTests().main()    Assign the value of the 23rd element of l to the variable checking .   l = (\"hi\", \"goodbye\", \"python\", \"106\", \"506\", 91, ['all', 'Paul', 'Jackie', \"UMSI\", 1, \"Stephen\", 4.5], 109, \"chair\", \"pizza\", \"wolverine\", 2017, 3.92, 1817, \"account\", \"readings\", \"papers\", 12, \"facebook\", \"twitter\", 193.2, \"snapchat\", \"leaders and the best\", \"social\", \"1986\", 9, 29, \"holiday\", [\"women\", \"olympics\", \"gold\", \"rio\", 21, \"2016\", \"men\"], \"26trombones\") ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(checking, \"leaders and the best\", \"Testing that checking has the correct element assigned.\") myTests().main()    Assign the value of the last chacter of lst to the variable output . Do this so that the length of lst doesn't matter.   lst = \"Every chess or checkers game begins from the same position and has a finite number of moves that can be played. While the number of possible scenarios and moves is quite large, it is still possible for computers to calculate that number and even be programmed to respond well against a human player...\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testThree(self): self.assertEqual(output, \".\", \"Testing that output value is assigned to correct value.\") myTests().main()    Why does counting start at 0 going from left to right, but at -1 going from right to left? Well, indexing starting at 0 has a long history in computer science having to do with some low-level implementation details that we won't go into. For indexing from right to left, it might seem natural to do the analgous thing and start at -0. Unfortunately, -0 is the same as 0, so s[-0] can't be the last item. Remember we said that programming languages are formal languages where details matter and everything is taken literally?    "
},
{
  "id": "p-1836",
  "level": "2",
  "url": "sequences_index-operator-working-with-the-characters-of-a-string.html#p-1836",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indexing operator "
},
{
  "id": "p-1841",
  "level": "2",
  "url": "sequences_index-operator-working-with-the-characters-of-a-string.html#p-1841",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "index "
},
{
  "id": "p-1846",
  "level": "2",
  "url": "sequences_index-operator-working-with-the-characters-of-a-string.html#p-1846",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question8_3_1",
  "level": "2",
  "url": "sequences_index-operator-working-with-the-characters-of-a-string.html#question8_3_1",
  "type": "Checkpoint",
  "number": "8.3.1",
  "title": "",
  "body": " What is printed by the following statements?   s = \"python rocks\" print(s[3])      t    Index locations do not start with 1, they start with 0.      h    Yes, index locations start with 0.      c    s[-3] would return c, counting from right to left.      Error, you cannot use the [ ] operator with a string.    [ ] is the index operator.    "
},
{
  "id": "question8_3_2",
  "level": "2",
  "url": "sequences_index-operator-working-with-the-characters-of-a-string.html#question8_3_2",
  "type": "Checkpoint",
  "number": "8.3.2",
  "title": "",
  "body": " What is printed by the following statements?   s = \"python rocks\" print(s[2] + s[-4])      tr    Almost, t is at postion 2, counting left to right starting from 0; but r is at -5, counting right to left starting from -1.      to    For -4 you count from right to left, starting with -1.      ps    p is at location 0, not 2.      nn    n is at location 5, not 2.      Error, you cannot use the [ ] operator with the + operator.    [ ] operator returns a string that can be concatenated with another string.    "
},
{
  "id": "question8_3_3",
  "level": "2",
  "url": "sequences_index-operator-working-with-the-characters-of-a-string.html#question8_3_3",
  "type": "Checkpoint",
  "number": "8.3.3",
  "title": "",
  "body": " What is printed by the following statements?   alist = [3, 67, \"cat\", [56, 57, \"dog\"], [ ], 3.14, False] print(alist[5])      [ ]    The empty list is at index 4.      3.14    Yes, 3.14 is at index 5 since we start counting at 0 and sublists count as one item.      False    False is at index 6.      \"dog\"    Look again, the element at index 3 is a list. This list only counts as one element.    "
},
{
  "id": "ac8_3_4",
  "level": "2",
  "url": "sequences_index-operator-working-with-the-characters-of-a-string.html#ac8_3_4",
  "type": "Checkpoint",
  "number": "8.3.4",
  "title": "",
  "body": " Assign the value of the 34th element of lst to the variable output .   lst = [\"hi\", \"morning\", \"dog\", \"506\", \"caterpillar\", \"balloons\", 106, \"yo-yo\", \"python\", \"moon\", \"water\", \"sleepy\", \"daffy\", 45, \"donald\", \"whiteboard\", \"glasses\", \"markers\", \"couches\", \"butterfly\", \"100\", \"magazine\", \"door\", \"picture\", \"window\", [\"Olympics\", \"handle\"], \"chair\", \"pages\", \"readings\", \"burger\", \"juggle\", \"craft\", [\"store\", \"poster\", \"board\"], \"laptop\", \"computer\", \"plates\", \"hotdog\", \"salad\", \"backpack\", \"zipper\", \"ring\", \"watch\", \"finger\", \"bags\", \"boxes\", \"pods\", \"peas\", \"apples\", \"horse\", \"guinea pig\", \"bowl\", \"EECS\"] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(output, \"laptop\", \"Testing that output value is assigned to correct value.\") myTests().main()  "
},
{
  "id": "ac8_3_5",
  "level": "2",
  "url": "sequences_index-operator-working-with-the-characters-of-a-string.html#ac8_3_5",
  "type": "Checkpoint",
  "number": "8.3.5",
  "title": "",
  "body": " Assign the value of the 23rd element of l to the variable checking .   l = (\"hi\", \"goodbye\", \"python\", \"106\", \"506\", 91, ['all', 'Paul', 'Jackie', \"UMSI\", 1, \"Stephen\", 4.5], 109, \"chair\", \"pizza\", \"wolverine\", 2017, 3.92, 1817, \"account\", \"readings\", \"papers\", 12, \"facebook\", \"twitter\", 193.2, \"snapchat\", \"leaders and the best\", \"social\", \"1986\", 9, 29, \"holiday\", [\"women\", \"olympics\", \"gold\", \"rio\", 21, \"2016\", \"men\"], \"26trombones\") ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(checking, \"leaders and the best\", \"Testing that checking has the correct element assigned.\") myTests().main()  "
},
{
  "id": "ac8_3_6",
  "level": "2",
  "url": "sequences_index-operator-working-with-the-characters-of-a-string.html#ac8_3_6",
  "type": "Checkpoint",
  "number": "8.3.6",
  "title": "",
  "body": " Assign the value of the last chacter of lst to the variable output . Do this so that the length of lst doesn't matter.   lst = \"Every chess or checkers game begins from the same position and has a finite number of moves that can be played. While the number of possible scenarios and moves is quite large, it is still possible for computers to calculate that number and even be programmed to respond well against a human player...\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testThree(self): self.assertEqual(output, \".\", \"Testing that output value is assigned to correct value.\") myTests().main()  "
},
{
  "id": "note-43",
  "level": "2",
  "url": "sequences_index-operator-working-with-the-characters-of-a-string.html#note-43",
  "type": "Note",
  "number": "8.3.7",
  "title": "",
  "body": " Why does counting start at 0 going from left to right, but at -1 going from right to left? Well, indexing starting at 0 has a long history in computer science having to do with some low-level implementation details that we won't go into. For indexing from right to left, it might seem natural to do the analgous thing and start at -0. Unfortunately, -0 is the same as 0, so s[-0] can't be the last item. Remember we said that programming languages are formal languages where details matter and everything is taken literally?  "
},
{
  "id": "sequences_disambiguating-creation-vs-indexing",
  "level": "1",
  "url": "sequences_disambiguating-creation-vs-indexing.html",
  "type": "Section",
  "number": "8.4",
  "title": "Disambiguating []: creation vs indexing",
  "body": " Disambiguating []: creation vs indexing  Square brackets [] are used in quite a few ways in python. When you're first learning how to use them it may be confusing, but with practice and repetition they'll be easy to incorporate!  You have currently encountered two instances where we have used square brackets. The first is creating lists and the second is indexing. At first glance, creating and indexing are difficult to distinguish. However, indexing requires referencing an already created list while simply creating a list does not.   new_lst = []   In the code above, a new list is created using the empty brackets. Since there's nothing in it though, we can't index into it.   new_lst = [\"NFLX\", \"AMZN\", \"GOOGL\", \"DIS\", \"XOM\"] part_of_new_lst = new_lst[0]   In the code above, you'll see how, now that we have elements inside of new_lst , we can index into it. In order to extract an element of the list, we do use [] , but we first have to specify which list we are indexing. Imagine if there was another list in the activecode. How would python know which list we want to index into if we don't tell it? Additionally, we have to specify what element we want to extract. This belongs inside of the brakets.  Though it may be easier to distinguish in this above activecode, below may be a bit more difficult.   lst = [0] n_lst = lst[0] print(lst) print(n_lst)   Here, we see a list called lst being assigned to a list with one element, zero. Then, we see how n_lst is assigned the value associated with the first element of lst. Dispite the variable names, only one of the above variables is assigned to a list. Note that in this example, what sets creating apart from indexing is the reference to the list to let python know that you are extracting an element from another list.   Which of the following correctly uses indexing? Assume that a is a list or string. Select as many as apply.     w = [a]    No, due to the way the code was written it creates a list. This list would have one element which is the value assigned to the variable a.      y = a[]    Though this tries to use indexing, it does not specify what element should be taken from a.      x = [8]    No, this is an example of creating a list.      t = a[0]    Yes, this will using indexing to get the value of the first element of a.     "
},
{
  "id": "question8_4_1",
  "level": "2",
  "url": "sequences_disambiguating-creation-vs-indexing.html#question8_4_1",
  "type": "Checkpoint",
  "number": "8.4.1",
  "title": "",
  "body": " Which of the following correctly uses indexing? Assume that a is a list or string. Select as many as apply.     w = [a]    No, due to the way the code was written it creates a list. This list would have one element which is the value assigned to the variable a.      y = a[]    Though this tries to use indexing, it does not specify what element should be taken from a.      x = [8]    No, this is an example of creating a list.      t = a[0]    Yes, this will using indexing to get the value of the first element of a.    "
},
{
  "id": "sequences_length",
  "level": "1",
  "url": "sequences_length.html",
  "type": "Section",
  "number": "8.5",
  "title": "Length",
  "body": " Length  The len function, when applied to a string, returns the number of characters in a string.   fruit = \"Banana\" print(len(fruit))   To get the last letter of a string, you might be tempted to try something like this:   fruit = \"Banana\" sz = len(fruit) last = fruit[sz] # ERROR! print(last)   That won't work. It causes the runtime error IndexError: string index out of range . The reason is that there is no letter at index position 6 in \"Banana\" . Since we started counting at zero, the six indexes are numbered 0 to 5. To get the last character, we have to subtract 1 from the length. Give it a try in the example above.   fruit = \"Banana\" sz = len(fruit) lastch = fruit[sz-1] print(lastch)      Typically, a Python programmer would combine lines 2 and 3 from the above example into a single line:   lastch = fruit[len(fruit)-1]   Though, from what you just learned about using negative indices, using fruit[-1] would be a more appropriate way to access the last index in a list.  You can still use the len function to access other predictable indices, like the middle character of a string.   fruit = \"grape\" midchar = fruit[len(fruit)\/\/2] # the value of midchar is \"a\"   As with strings, the function len returns the length of a list (the number of items in the list). However, since lists can have items which are themselves sequences (e.g., strings), it important to note that len only returns the top-most length.   alist = [\"hello\", 2.0, 5] print(len(alist)) print(len(alist[0]))   Note that alist[0] is the string \"hello\" , which has length 5.   Check your understanding    What is printed by the following statements?   s = \"python rocks\" print(len(s))      11    The blank space counts as a character.      12    Yes, there are 12 characters in the string.      What is printed by the following statements?   alist = [3, 67, \"cat\", 3.14, False] print(len(alist))      4    len returns the actual number of items in the list, not the maximum index value.      5    Yes, there are 5 items in this list.      Assign the number of elements in lst to the variable output .   lst = [\"hi\", \"morning\", \"dog\", \"506\", \"caterpillar\", \"balloons\", 106, \"yo-yo\", \"python\", \"moon\", \"water\", \"sleepy\", \"daffy\", 45, \"donald\", \"whiteboard\", \"glasses\", \"markers\", \"couches\", \"butterfly\", \"100\", \"magazine\", \"door\", \"picture\", \"window\", [\"Olympics\", \"handle\"], \"chair\", \"pages\", \"readings\", \"burger\", \"juggle\", \"craft\", [\"store\", \"poster\", \"board\"], \"laptop\", \"computer\", \"plates\", \"hotdog\", \"salad\", \"backpack\", \"zipper\", \"ring\", \"watch\", \"finger\", \"bags\", \"boxes\", \"pods\", \"peas\", \"apples\", \"horse\", \"guinea pig\", \"bowl\", \"EECS\"] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwo(self): self.assertEqual(output, 52, \"Testing that output value is assigned to correct value.\") myTests().main()   "
},
{
  "id": "p-1903",
  "level": "2",
  "url": "sequences_length.html#p-1903",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question8_5_1",
  "level": "2",
  "url": "sequences_length.html#question8_5_1",
  "type": "Checkpoint",
  "number": "8.5.1",
  "title": "",
  "body": " What is printed by the following statements?   s = \"python rocks\" print(len(s))      11    The blank space counts as a character.      12    Yes, there are 12 characters in the string.    "
},
{
  "id": "question8_5_2",
  "level": "2",
  "url": "sequences_length.html#question8_5_2",
  "type": "Checkpoint",
  "number": "8.5.2",
  "title": "",
  "body": " What is printed by the following statements?   alist = [3, 67, \"cat\", 3.14, False] print(len(alist))      4    len returns the actual number of items in the list, not the maximum index value.      5    Yes, there are 5 items in this list.    "
},
{
  "id": "ac8_5_5",
  "level": "2",
  "url": "sequences_length.html#ac8_5_5",
  "type": "Checkpoint",
  "number": "8.5.3",
  "title": "",
  "body": " Assign the number of elements in lst to the variable output .   lst = [\"hi\", \"morning\", \"dog\", \"506\", \"caterpillar\", \"balloons\", 106, \"yo-yo\", \"python\", \"moon\", \"water\", \"sleepy\", \"daffy\", 45, \"donald\", \"whiteboard\", \"glasses\", \"markers\", \"couches\", \"butterfly\", \"100\", \"magazine\", \"door\", \"picture\", \"window\", [\"Olympics\", \"handle\"], \"chair\", \"pages\", \"readings\", \"burger\", \"juggle\", \"craft\", [\"store\", \"poster\", \"board\"], \"laptop\", \"computer\", \"plates\", \"hotdog\", \"salad\", \"backpack\", \"zipper\", \"ring\", \"watch\", \"finger\", \"bags\", \"boxes\", \"pods\", \"peas\", \"apples\", \"horse\", \"guinea pig\", \"bowl\", \"EECS\"] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwo(self): self.assertEqual(output, 52, \"Testing that output value is assigned to correct value.\") myTests().main()  "
},
{
  "id": "sequences_the-slice-operator",
  "level": "1",
  "url": "sequences_the-slice-operator.html",
  "type": "Section",
  "number": "8.6",
  "title": "The Slice Operator",
  "body": " The Slice Operator  A substring of a string is called a slice . Selecting a slice is similar to selecting a character:   singers = \"Peter, Paul, and Mary\" print(singers[0:5]) print(singers[7:11]) print(singers[17:21])   The slice operator [n:m] returns the part of the string starting with the character at index n and go up to but not including the character at index m. Or with normal counting from 1, this is the (n+1)st character up to and including the mth character.  If you omit the first index (before the colon), the slice starts at the beginning of the string. If you omit the second index, the slice goes to the end of the string.   fruit = \"banana\" print(fruit[:3]) print(fruit[3:])   What do you think fruit[:] means?   List Slices  The slice operation we saw with strings also work on lists. Remember that the first index is the starting point for the slice and the second number is one index past the end of the slice (up to but not including that element). Recall also that if you omit the first index (before the colon), the slice starts at the beginning of the sequence. If you omit the second index, the slice goes to the end of the sequence.   a_list = ['a', 'b', 'c', 'd', 'e', 'f'] print(a_list[1:3]) print(a_list[:4]) print(a_list[3:]) print(a_list[:])     Tuple Slices  We can't modify the elements of a tuple, but we can make a variable reference a new tuple holding different information. Thankfully we can also use the slice operation on tuples as well as strings and lists. To construct the new tuple, we can slice parts of the old tuple and join up the bits to make the new tuple. So julia has a new recent film, and we might want to change her tuple. We can easily slice off the parts we want and concatenate them with the new tuple.   julia = (\"Julia\", \"Roberts\", 1967, \"Duplicity\", 2009, \"Actress\", \"Atlanta, Georgia\") print(julia[2]) print(julia[2:6]) print(len(julia)) julia = julia[:3] + (\"Eat Pray Love\", 2010) + julia[5:] print(julia)    Check your understanding    What is printed by the following statements?   s = \"python rocks\" print(s[3:8])      python    That would be s[0:6].      rocks    That would be s[7:].      hon r    Yes, start with the character at index 3 and go up to but not include the character at index 8.      Error, you cannot have two numbers inside the [ ].    This is called slicing, not indexing. It requires a start and an end.      What is printed by the following statements?   alist = [3, 67, \"cat\", [56, 57, \"dog\"], [ ], 3.14, False] print(alist[4:])      [ [ ], 3.14, False]    Yes, the slice starts at index 4 and goes up to and including the last item.      [ [ ], 3.14]    By leaving out the upper bound on the slice, we go up to and including the last item.      [ [56, 57, \"dog\"], [ ], 3.14, False]    Index values start at 0.      What is printed by the following statements?   L = [0.34, '6', 'SI106', 'Python', -2] print(len(L[1:-1]))      2    The list begins with the second item of L and includes everything up to but not including the last item.      3    Yes, there are 3 items in this list.      4    The list begins with the second item of L and includes everything up to but not including the last item.      5    The list begins with the second item of L and includes everything up to but not including the last item.      Create a new list using the 9th through 12th elements (four items in all) of new_lst and assign it to the variable sub_lst .   new_lst = [\"computer\", \"luxurious\", \"basket\", \"crime\", 0, 2.49, \"institution\", \"slice\", \"sun\", [\"water\", \"air\", \"fire\", \"earth\"], \"games\", 2.7, \"code\", \"java\", [\"birthday\", \"celebration\", 1817, \"party\", \"cake\", 5], \"rain\", \"thunderstorm\", \"top down\"] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(sub_lst, new_lst[8:12], \"Testing that sub_lst has the correct elements assigned.\") myTests().main()    "
},
{
  "id": "p-1915",
  "level": "2",
  "url": "sequences_the-slice-operator.html#p-1915",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slice "
},
{
  "id": "p-1921",
  "level": "2",
  "url": "sequences_the-slice-operator.html#p-1921",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question8_6_1",
  "level": "2",
  "url": "sequences_the-slice-operator.html#question8_6_1",
  "type": "Checkpoint",
  "number": "8.6.1",
  "title": "",
  "body": " What is printed by the following statements?   s = \"python rocks\" print(s[3:8])      python    That would be s[0:6].      rocks    That would be s[7:].      hon r    Yes, start with the character at index 3 and go up to but not include the character at index 8.      Error, you cannot have two numbers inside the [ ].    This is called slicing, not indexing. It requires a start and an end.    "
},
{
  "id": "question8_6_2",
  "level": "2",
  "url": "sequences_the-slice-operator.html#question8_6_2",
  "type": "Checkpoint",
  "number": "8.6.2",
  "title": "",
  "body": " What is printed by the following statements?   alist = [3, 67, \"cat\", [56, 57, \"dog\"], [ ], 3.14, False] print(alist[4:])      [ [ ], 3.14, False]    Yes, the slice starts at index 4 and goes up to and including the last item.      [ [ ], 3.14]    By leaving out the upper bound on the slice, we go up to and including the last item.      [ [56, 57, \"dog\"], [ ], 3.14, False]    Index values start at 0.    "
},
{
  "id": "question8_6_3",
  "level": "2",
  "url": "sequences_the-slice-operator.html#question8_6_3",
  "type": "Checkpoint",
  "number": "8.6.3",
  "title": "",
  "body": " What is printed by the following statements?   L = [0.34, '6', 'SI106', 'Python', -2] print(len(L[1:-1]))      2    The list begins with the second item of L and includes everything up to but not including the last item.      3    Yes, there are 3 items in this list.      4    The list begins with the second item of L and includes everything up to but not including the last item.      5    The list begins with the second item of L and includes everything up to but not including the last item.    "
},
{
  "id": "ac8_6_5",
  "level": "2",
  "url": "sequences_the-slice-operator.html#ac8_6_5",
  "type": "Checkpoint",
  "number": "8.6.4",
  "title": "",
  "body": " Create a new list using the 9th through 12th elements (four items in all) of new_lst and assign it to the variable sub_lst .   new_lst = [\"computer\", \"luxurious\", \"basket\", \"crime\", 0, 2.49, \"institution\", \"slice\", \"sun\", [\"water\", \"air\", \"fire\", \"earth\"], \"games\", 2.7, \"code\", \"java\", [\"birthday\", \"celebration\", 1817, \"party\", \"cake\", 5], \"rain\", \"thunderstorm\", \"top down\"] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(sub_lst, new_lst[8:12], \"Testing that sub_lst has the correct elements assigned.\") myTests().main()  "
},
{
  "id": "sequences_concatenation-and-repetition",
  "level": "1",
  "url": "sequences_concatenation-and-repetition.html",
  "type": "Section",
  "number": "8.7",
  "title": "Concatenation and Repetition",
  "body": " Concatenation and Repetition  Again, as with strings, the + operator concatenates lists. Similarly, the * operator repeats the items in a list a given number of times.   fruit = [\"apple\",\"orange\",\"banana\",\"cherry\"] print([1,2] + [3,4]) print(fruit+[6,7,8,9]) print([0] * 4)   It is important to see that these operators create new lists from the elements of the operand lists. If you concatenate a list with 2 items and a list with 4 items, you will get a new list with 6 items (not a list with two sublists). Similarly, repetition of a list of 2 items 4 times will give a list with 8 items.  One way for us to make this more clear is to run a part of this example in codelens. As you step through the code, you will see the variables being created and the lists that they refer to. Pay particular attention to the fact that when newlist is created by the statement newlist = fruit + numlist , it refers to a completely new list formed by making copies of the items from fruit and numlist . You can see this very clearly in the codelens object diagram. The objects are different.   fruit = [\"apple\",\"orange\",\"banana\",\"cherry\"] numlist = [6,7] newlist = fruit + numlist zeros = [0] * 4    WP: Adding types together  Beware when adding different types together! Python doesn't understand how to concatenate different types together. Thus, if we try to add a string to a list with ['first'] + \"second\" then the interpreter will return an error. To do this you'll need to make the two objects the same type. In this case, it means putting the string into its own list and then adding the two together like so: ['first'] + [\"second\"] . This process will look different for other types though. Remember that there are functions to convert types!    Check your understanding    What is printed by the following statements?   alist = [1,3,5] blist = [2,4,6] print(alist + blist)      6    Concatenation does not add the lengths of the lists.      [1,2,3,4,5,6]    Concatenation does not reorder the items.      [1,3,5,2,4,6]    Yes, a new list with all the items of the first list followed by all those from the second.      [3,7,11]    Concatenation does not add the individual items.      What is printed by the following statements?   alist = [1,3,5] print(alist * 3)      9    Repetition does not multiply the lengths of the lists. It repeats the items.      [1,1,1,3,3,3,5,5,5]    Repetition does not repeat each item individually.      [1,3,5,1,3,5,1,3,5]    Yes, the items of the list are repeated 3 times, one after another.      [3,9,15]    Repetition does not multiply the individual items.     "
},
{
  "id": "note-44",
  "level": "2",
  "url": "sequences_concatenation-and-repetition.html#note-44",
  "type": "Note",
  "number": "8.7.1",
  "title": "",
  "body": " WP: Adding types together  Beware when adding different types together! Python doesn't understand how to concatenate different types together. Thus, if we try to add a string to a list with ['first'] + \"second\" then the interpreter will return an error. To do this you'll need to make the two objects the same type. In this case, it means putting the string into its own list and then adding the two together like so: ['first'] + [\"second\"] . This process will look different for other types though. Remember that there are functions to convert types!  "
},
{
  "id": "p-1953",
  "level": "2",
  "url": "sequences_concatenation-and-repetition.html#p-1953",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question8_7_1",
  "level": "2",
  "url": "sequences_concatenation-and-repetition.html#question8_7_1",
  "type": "Checkpoint",
  "number": "8.7.2",
  "title": "",
  "body": " What is printed by the following statements?   alist = [1,3,5] blist = [2,4,6] print(alist + blist)      6    Concatenation does not add the lengths of the lists.      [1,2,3,4,5,6]    Concatenation does not reorder the items.      [1,3,5,2,4,6]    Yes, a new list with all the items of the first list followed by all those from the second.      [3,7,11]    Concatenation does not add the individual items.    "
},
{
  "id": "question8_7_2",
  "level": "2",
  "url": "sequences_concatenation-and-repetition.html#question8_7_2",
  "type": "Checkpoint",
  "number": "8.7.3",
  "title": "",
  "body": " What is printed by the following statements?   alist = [1,3,5] print(alist * 3)      9    Repetition does not multiply the lengths of the lists. It repeats the items.      [1,1,1,3,3,3,5,5,5]    Repetition does not repeat each item individually.      [1,3,5,1,3,5,1,3,5]    Yes, the items of the list are repeated 3 times, one after another.      [3,9,15]    Repetition does not multiply the individual items.    "
},
{
  "id": "sequences_count-and-index",
  "level": "1",
  "url": "sequences_count-and-index.html",
  "type": "Section",
  "number": "8.8",
  "title": "Count and Index",
  "body": " Count and Index  As you create more complex programs, you will find that some tasks are commonly done. Python has some built-in functions and methods to help you with these tasks. This page will cover two helpful methods for both strings and lists: count and index.  You've learned about methods before when drawing with the turtle module. There, you used .forward(50) and .color(\"purple\") to complete actions. We refer to forward and color as methods of the turtle class. Objects like strings and lists also have methods that we can use.   Count  The first method we'll talk about is called count . It requires that you provide one argument, which is what you would like to count. The method then returns the number of times that the argument occured in the string\/list the method was used on. There are some differences between count for strings and count for lists. When you use count on a string, the argument can only be a string. You can't count how many times the integer 2 appears in a string, though you can count how many times the string 2 appears in a string. For lists, the argument is not restricted to just strings.   a = \"I have had an apple on my desk before!\" print(a.count(\"e\")) print(a.count(\"ha\"))   The activecode window above demonstrates the use of count on a string. Just like with the turtle module when we had to specify which turtle was changing color or moving, we have to specify which string we are using count on.   z = ['atoms', 4, 'neutron', 6, 'proton', 4, 'electron', 4, 'electron', 'atoms'] print(z.count(\"4\")) print(z.count(4)) print(z.count(\"a\")) print(z.count(\"electron\"))   When you run the activecode window above, you'll see how count with a list works. Notice how 4 has a count of zero but 4 has a count of three? This is because the list z only contains the integer 4. There are never any strings that are 4. Additionally, when we check the count of a , we see that the program returns zero. Though some of the words in the list contain the letter a , the program is looking for items in the list that are just the letter a .    Index  The other method that can be helpful for both strings and lists is the index method. The index method requires one argument, and, like the count method, it takes only strings when index is used on strings, and any type when it is used on lists. For both strings and lists, index returns the leftmost index where the argument is found. If it is unable to find the argument in the string or list, then an error will occur.   music = \"Pull out your music and dancing can begin\" bio = [\"Metatarsal\", \"Metatarsal\", \"Fibula\", [], \"Tibia\", \"Tibia\", 43, \"Femur\", \"Occipital\", \"Metatarsal\"] print(music.index(\"m\")) print(music.index(\"your\")) print(bio.index(\"Metatarsal\")) print(bio.index([])) print(bio.index(43))   All of the above examples work, but were you surprised by any of the return values? Remember that index will return the left most index of the argument. Even though Metatarsal occurs many times in bio , the method will only return the location of one of them.  Here's another example.   seasons = [\"winter\", \"spring\", \"summer\", \"fall\"] print(seasons.index(\"autumn\")) #Error!   In the activecode window above, we're trying to see where autumn is in the list seasons. However, there is no string called autumn (though there is string called fall which is likely what the program is looking for). Remember that an error occurs if the argument is not in the string or list.   Check your understanding    What will be stored in the variable ty below?   qu = \"wow, welcome week!\" ty = qu.index(\"we\")      5    Yes, when we get the index of a string that is longer than one character, we get the index for the first character in the string.      6    When we get the index of a string that is longer than one character, we get the index for the first character in the string.      13    Remember that index returns the left most occurance of the argument.      14    Remember that index returns the left most occurance of the argument.      There is an error.    There is at least one 'we' in the string assigned to qu.      What will be stored in the variable ty below?   qu = \"wow, welcome week! Were you wanting to go?\" ty = qu.count(\"we\")      0    No, there is at least one e in the string.      2    Yes, there is a difference between \"we\" and \"We\" which means there are only two in the string.      3    there is a difference between \"we\" and \"We\".      There is an error.    There is no error in the code.      What will be stored in the variable ht below?   rooms = ['bathroom', 'kitchen', 'living room', 'bedroom', 'closet', \"foyer\"] ht = rooms.index(\"garden\")      0    No, the first element is 'bathroom', not 'garden'.      -1    Though there is no 'garden' in the list, we do not get back -1 when we use index. Instead, we get an error.      There is an error.    Yes, there is no 'garden' in the list, so we get back an error.      "
},
{
  "id": "p-1981",
  "level": "2",
  "url": "sequences_count-and-index.html#p-1981",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question8_8_1",
  "level": "2",
  "url": "sequences_count-and-index.html#question8_8_1",
  "type": "Checkpoint",
  "number": "8.8.1",
  "title": "",
  "body": " What will be stored in the variable ty below?   qu = \"wow, welcome week!\" ty = qu.index(\"we\")      5    Yes, when we get the index of a string that is longer than one character, we get the index for the first character in the string.      6    When we get the index of a string that is longer than one character, we get the index for the first character in the string.      13    Remember that index returns the left most occurance of the argument.      14    Remember that index returns the left most occurance of the argument.      There is an error.    There is at least one 'we' in the string assigned to qu.    "
},
{
  "id": "question8_8_2",
  "level": "2",
  "url": "sequences_count-and-index.html#question8_8_2",
  "type": "Checkpoint",
  "number": "8.8.2",
  "title": "",
  "body": " What will be stored in the variable ty below?   qu = \"wow, welcome week! Were you wanting to go?\" ty = qu.count(\"we\")      0    No, there is at least one e in the string.      2    Yes, there is a difference between \"we\" and \"We\" which means there are only two in the string.      3    there is a difference between \"we\" and \"We\".      There is an error.    There is no error in the code.    "
},
{
  "id": "question8_8_3",
  "level": "2",
  "url": "sequences_count-and-index.html#question8_8_3",
  "type": "Checkpoint",
  "number": "8.8.3",
  "title": "",
  "body": " What will be stored in the variable ht below?   rooms = ['bathroom', 'kitchen', 'living room', 'bedroom', 'closet', \"foyer\"] ht = rooms.index(\"garden\")      0    No, the first element is 'bathroom', not 'garden'.      -1    Though there is no 'garden' in the list, we do not get back -1 when we use index. Instead, we get an error.      There is an error.    Yes, there is no 'garden' in the list, so we get back an error.    "
},
{
  "id": "sequences_splitting-and-joining-strings",
  "level": "1",
  "url": "sequences_splitting-and-joining-strings.html",
  "type": "Section",
  "number": "8.9",
  "title": "Splitting and Joining Strings",
  "body": " Splitting and Joining Strings  Two of the most useful methods on strings involve lists of strings. The split method breaks a string into a list of words. By default, any number of whitespace characters is considered a word boundary.    song = \"The rain in Spain...\" wds = song.split() print(wds)   An optional argument called a delimiter can be used to specify which characters to use as word boundaries.   The following example uses the string ai as the delimiter:   song = \"The rain in Spain...\" wds = song.split('ai') print(wds)   Notice that the delimiter doesn't appear in the result.  The inverse of the split method is join . You choose a desired separator string, (often called the glue ) and join the list with the glue between each of the elements.    wds = [\"red\", \"blue\", \"green\"] glue = ';' s = glue.join(wds) print(s) print(wds) print(\"***\".join(wds)) print(\"\".join(wds))   The list that you glue together ( wds in this example) is not modified. Also, you can use empty glue or multi-character strings as glue.   Check your understanding    Create a new list of the 6th through 13th elements of lst (eight items in all) and assign it to the variable output .   lst = [\"swimming\", 2, \"water bottle\", 44, \"lollipop\", \"shine\", \"marsh\", \"winter\", \"donkey\", \"rain\", [\"Rio\", \"Beijing\", \"London\"], [1,2,3], \"gold\", \"bronze\", \"silver\", \"mathematician\", \"scientist\", \"actor\", \"actress\", \"win\", \"cell phone\", \"leg\", \"running\", \"horse\", \"socket\", \"plug\", [\"Phelps\", \"le Clos\", \"Lochte\"], \"drink\", 22, \"happyfeet\", \"penguins\"] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFour(self): self.assertEqual(output, lst[5:13], \"Testing that output value is assigned to correct value.\") myTests().main()    Create a variable output and assign to it a list whose elements are the words in the string str1 .   str1 = \"OH THE PLACES YOU'LL GO\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testSix(self): self.assertEqual(output, [\"OH\", \"THE\", \"PLACES\", \"YOU'LL\", \"GO\"], \"Testing that output value is assigned to correct value.\") myTests().main()   "
},
{
  "id": "p-2010",
  "level": "2",
  "url": "sequences_splitting-and-joining-strings.html#p-2010",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "delimiter "
},
{
  "id": "p-2013",
  "level": "2",
  "url": "sequences_splitting-and-joining-strings.html#p-2013",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separator "
},
{
  "id": "p-2015",
  "level": "2",
  "url": "sequences_splitting-and-joining-strings.html#p-2015",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "ac8_9_4",
  "level": "2",
  "url": "sequences_splitting-and-joining-strings.html#ac8_9_4",
  "type": "Checkpoint",
  "number": "8.9.1",
  "title": "",
  "body": " Create a new list of the 6th through 13th elements of lst (eight items in all) and assign it to the variable output .   lst = [\"swimming\", 2, \"water bottle\", 44, \"lollipop\", \"shine\", \"marsh\", \"winter\", \"donkey\", \"rain\", [\"Rio\", \"Beijing\", \"London\"], [1,2,3], \"gold\", \"bronze\", \"silver\", \"mathematician\", \"scientist\", \"actor\", \"actress\", \"win\", \"cell phone\", \"leg\", \"running\", \"horse\", \"socket\", \"plug\", [\"Phelps\", \"le Clos\", \"Lochte\"], \"drink\", 22, \"happyfeet\", \"penguins\"] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFour(self): self.assertEqual(output, lst[5:13], \"Testing that output value is assigned to correct value.\") myTests().main()  "
},
{
  "id": "ac8_9_5",
  "level": "2",
  "url": "sequences_splitting-and-joining-strings.html#ac8_9_5",
  "type": "Checkpoint",
  "number": "8.9.2",
  "title": "",
  "body": " Create a variable output and assign to it a list whose elements are the words in the string str1 .   str1 = \"OH THE PLACES YOU'LL GO\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testSix(self): self.assertEqual(output, [\"OH\", \"THE\", \"PLACES\", \"YOU'LL\", \"GO\"], \"Testing that output value is assigned to correct value.\") myTests().main()  "
},
{
  "id": "sequences_chapter-assessment",
  "level": "1",
  "url": "sequences_chapter-assessment.html",
  "type": "Section",
  "number": "8.10",
  "title": "Chapter Assessment",
  "body": " Chapter Assessment   Check your understanding    What will the output be for the following code?   let = \"z\" let_two = \"p\" c = let_two + let m = c*5 print(m)      zpzpzpzpzp    The order of concatenation matters.      zzzzzppppp    Think about the order that the program is executed in, what occurs first?      pzpzpzpzpz    Yes, because let_two was put before let, c has \"pz\" and then that is repeated five times.      pppppzzzzz    Think about the order that the program is executed in, what occurs first?      None of the above, an error will occur.    This is correct syntax and no errors will occur.      Write a program that extracts the last three items in the list sports and assigns it to the variable last . Make sure to write your code so that it works no matter how many items are in the list.   sports = ['cricket', 'football', 'volleyball', 'baseball', 'softball', 'track and field', 'curling', 'ping pong', 'hockey'] ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def test_output(self): self.assertEqual(last, ['curling', 'ping pong', 'hockey'], \"Testing that the value of last is the last three items in sports.\") self.assertTrue(re.search(r'last\\s*=\\s*\\S*3:', self.getEditorText()), \"Hardcode check\") myTests().main()    Write code that combines the following variables so that the sentence You are doing a great job, keep it up! is assigned to the variable message . Do not edit the values assigned to by , az , io , or qy .   by = \"You are\" az = \"doing a great \" io = \"job\" qy = \"keep it up!\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test_output(self): self.assertEqual(by, 'You are', \"Testing original variables.\") self.assertEqual(az, 'doing a great ', \"Testing original variables.\") self.assertEqual(io, 'job', \"Testing original variables.\") self.assertEqual(qy, 'keep it up!', \"Testing original variables.\") self.assertEqual(message, 'You are doing a great job, keep it up!', \"Testing that the value of message is what was expected.\") self.assertNotIn(\"You are doing a great job, keep it up!\", self.getEditorText(), \"Testing for hardcoding (Don't worry about actual and expected values).\") myTests().main()    What will the output be for the following code?   ls = ['run', 'world', 'travel', 'lights', 'moon', 'baseball', 'sea'] new = ls[2:4] print(new)      ['travel', 'lights', 'moon']    When we take a slice of something, it includes the item at the first index and excludes the item at the second index.      ['world', 'travel', 'lights']    When we take a slice of something, it includes the item at the first index and excludes the item at the second index. Additionally, Python is a zero-index based language.      ['travel', 'lights']    Yes, python is a zero-index based language and slices are inclusive of the first index and exclusive of the second.      ['world', 'travel']    Python is a zero-index based language.      What is the type of m ?   l = ['w', '7', 0, 9] m = l[1:2]      string    Not quite, is it slicing or accessing an element?      integer    What is happening in the assignment statement for m?      float    What is happening in the assignment statement for m?      list    Yes, a slice returns a list no matter how large the slice.      What is the type of m ?   l = ['w', '7', 0, 9] m = l[1]      string    Yes, the quotes around the number mean that this is a string.      integer    Not quite, look again at what is being extracted.      float    Not quite, look again at what is being extracted.      list    Not quite, is it slicing or accessing an element?      What is the type of x ?   b = \"My, what a lovely day\" x = b.split(',')      string    Not quite; .split() returns a list, each of whose elements is a string.      integer    Not quite, look again at what types are present and what the result of .split() is.      float    Not quite, look again at what types are present and what the result of .split() is.      list    Yes, the .split() method returns a list.      What is the type of a ?   b = \"My, what a lovely day\" x = b.split(',') z = \"\".join(x) y = z.split() a = \"\".join(y)      string    Yes, the string is split into a list, then joined back into a string, then split again, and finally joined back into a string.      integer    Not quite, look again at what types are present and what the result of .split() is.      float    Not quite, look again at what types are present and what the result of .split() is.      list    Not quite, think about what .split() and .join() return.      Write code to determine how many 9's are in the list nums and assign that value to the variable how_many . Do not use a for loop to do this.   nums = [4, 2, 23.4, 9, 545, 9, 1, 234.001, 5, 49, 8, 9 , 34, 52, 1, -2, 9.1, 4] ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def test_output(self): self.assertEqual(how_many, 3, \"Testing that how_many is set correctly.\") self.assertNotIn('for', self.getEditorText(), \"Testing that you didn't use a for loop.\") self.assertFalse(re.search(r'how_many\\s*=\\s*3', self.getEditorText()), \"Hardcode check\") myTests().main()    Write code that uses slicing to get rid of the the second 8 so that here are only two 8's in the list bound to the variable nums .   nums = [4, 2, 8, 23.4, 8, 9, 545, 9, 1, 234.001, 5, 49, 8, 9 , 34, 52, 1, -2, 9.1, 4] ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def test_output(self): self.assertEqual(nums, [4, 2, 8, 23.4, 9, 545, 9, 1, 234.001, 5, 49, 8, 9 , 34, 52, 1, -2, 9.1, 4], \"Testing that nums is set correctly.\") self.assertTrue(re.search(r'\\s*:', self.getEditorText()), \"Testing that you are using slices to remove the second 8 (Don't worry about actual and expected values)\") myTests().main()    Assign the last element of lst to the variable end_elem . Do this so that it works no matter how long lst is.   lst = [\"hi\", \"goodbye\", \"python\", \"106\", \"506\", 91, ['all', 'Paul', 'Jackie', \"UMSI\", 1, \"Stephen\", 4.5], 109, \"chair\", \"pizza\", \"wolverine\", 2017, 3.92, 1817, \"account\", \"readings\", \"papers\", 12, \"facebook\", \"twitter\", 193.2, \"snapchat\", \"leaders and the best\", \"social\", \"1986\", 9, 29, \"holiday\", [\"women\", \"olympics\", \"gold\", \"rio\", 21, \"2016\", \"men\"], \"26trombones\"] ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def testOne(self): self.assertEqual(end_elem, lst[-1], \"Testing that end_elem has the correct element assigned.\") self.assertFalse(re.search(r'end_elem\\s*=\\s*\\S26trombones\\S', self.getEditorText()), \"Hardcoding Check (Don't worry about actual and expected values)\") myTests().main()    Assign the number of elements in lst to the variable num_lst .   lst = [\"hi\", \"goodbye\", \"python\", \"106\", \"506\", 91, ['all', 'Paul', 'Jackie', \"UMSI\", 1, \"Stephen\", 4.5], 109, \"chair\", \"pizza\", \"wolverine\", 2017, 3.92, 1817, \"account\", \"readings\", \"papers\", 12, \"facebook\", \"twitter\", 193.2, \"snapchat\", \"leaders and the best\", \"social\", \"1986\", 9, 29, \"holiday\", [\"women\", \"olympics\", \"gold\", \"rio\", 21, \"2016\", \"men\"], \"26trombones\"] ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_lst, 30, \"Testing that num_lst has the correct length assigned.\") self.assertFalse(re.search(r'num_lst\\s*=\\s*30', self.getEditorText()), \"Hardcoding Check (Don't worry about actual and expected values)\") myTests().main()    Create a variable called wrds and assign to it a list whose elements are the words in the string sent . Do not worry about punctuation.   sent = \"The bicentennial for our university was in 2017\" ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def testOne(self): self.assertEqual(wrds, sent.split(), \"Testing that wrds has been correctly assigned.\") self.assertFalse(re.search(r'wrds\\s*=\\s*\\S*The\\S', self.getEditorText()), \"Hardcoding Check (Don't worry about actual and expected values)\") myTests().main()   "
},
{
  "id": "p-2019",
  "level": "2",
  "url": "sequences_chapter-assessment.html#p-2019",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question8_10_1",
  "level": "2",
  "url": "sequences_chapter-assessment.html#question8_10_1",
  "type": "Checkpoint",
  "number": "8.10.1",
  "title": "",
  "body": " What will the output be for the following code?   let = \"z\" let_two = \"p\" c = let_two + let m = c*5 print(m)      zpzpzpzpzp    The order of concatenation matters.      zzzzzppppp    Think about the order that the program is executed in, what occurs first?      pzpzpzpzpz    Yes, because let_two was put before let, c has \"pz\" and then that is repeated five times.      pppppzzzzz    Think about the order that the program is executed in, what occurs first?      None of the above, an error will occur.    This is correct syntax and no errors will occur.    "
},
{
  "id": "ac8_10_1",
  "level": "2",
  "url": "sequences_chapter-assessment.html#ac8_10_1",
  "type": "Checkpoint",
  "number": "8.10.2",
  "title": "",
  "body": " Write a program that extracts the last three items in the list sports and assigns it to the variable last . Make sure to write your code so that it works no matter how many items are in the list.   sports = ['cricket', 'football', 'volleyball', 'baseball', 'softball', 'track and field', 'curling', 'ping pong', 'hockey'] ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def test_output(self): self.assertEqual(last, ['curling', 'ping pong', 'hockey'], \"Testing that the value of last is the last three items in sports.\") self.assertTrue(re.search(r'last\\s*=\\s*\\S*3:', self.getEditorText()), \"Hardcode check\") myTests().main()  "
},
{
  "id": "ac8_10_2",
  "level": "2",
  "url": "sequences_chapter-assessment.html#ac8_10_2",
  "type": "Checkpoint",
  "number": "8.10.3",
  "title": "",
  "body": " Write code that combines the following variables so that the sentence You are doing a great job, keep it up! is assigned to the variable message . Do not edit the values assigned to by , az , io , or qy .   by = \"You are\" az = \"doing a great \" io = \"job\" qy = \"keep it up!\" ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def test_output(self): self.assertEqual(by, 'You are', \"Testing original variables.\") self.assertEqual(az, 'doing a great ', \"Testing original variables.\") self.assertEqual(io, 'job', \"Testing original variables.\") self.assertEqual(qy, 'keep it up!', \"Testing original variables.\") self.assertEqual(message, 'You are doing a great job, keep it up!', \"Testing that the value of message is what was expected.\") self.assertNotIn(\"You are doing a great job, keep it up!\", self.getEditorText(), \"Testing for hardcoding (Don't worry about actual and expected values).\") myTests().main()  "
},
{
  "id": "question8_10_2",
  "level": "2",
  "url": "sequences_chapter-assessment.html#question8_10_2",
  "type": "Checkpoint",
  "number": "8.10.4",
  "title": "",
  "body": " What will the output be for the following code?   ls = ['run', 'world', 'travel', 'lights', 'moon', 'baseball', 'sea'] new = ls[2:4] print(new)      ['travel', 'lights', 'moon']    When we take a slice of something, it includes the item at the first index and excludes the item at the second index.      ['world', 'travel', 'lights']    When we take a slice of something, it includes the item at the first index and excludes the item at the second index. Additionally, Python is a zero-index based language.      ['travel', 'lights']    Yes, python is a zero-index based language and slices are inclusive of the first index and exclusive of the second.      ['world', 'travel']    Python is a zero-index based language.    "
},
{
  "id": "question8_10_3",
  "level": "2",
  "url": "sequences_chapter-assessment.html#question8_10_3",
  "type": "Checkpoint",
  "number": "8.10.5",
  "title": "",
  "body": " What is the type of m ?   l = ['w', '7', 0, 9] m = l[1:2]      string    Not quite, is it slicing or accessing an element?      integer    What is happening in the assignment statement for m?      float    What is happening in the assignment statement for m?      list    Yes, a slice returns a list no matter how large the slice.    "
},
{
  "id": "question8_10_4",
  "level": "2",
  "url": "sequences_chapter-assessment.html#question8_10_4",
  "type": "Checkpoint",
  "number": "8.10.6",
  "title": "",
  "body": " What is the type of m ?   l = ['w', '7', 0, 9] m = l[1]      string    Yes, the quotes around the number mean that this is a string.      integer    Not quite, look again at what is being extracted.      float    Not quite, look again at what is being extracted.      list    Not quite, is it slicing or accessing an element?    "
},
{
  "id": "question8_10_5",
  "level": "2",
  "url": "sequences_chapter-assessment.html#question8_10_5",
  "type": "Checkpoint",
  "number": "8.10.7",
  "title": "",
  "body": " What is the type of x ?   b = \"My, what a lovely day\" x = b.split(',')      string    Not quite; .split() returns a list, each of whose elements is a string.      integer    Not quite, look again at what types are present and what the result of .split() is.      float    Not quite, look again at what types are present and what the result of .split() is.      list    Yes, the .split() method returns a list.    "
},
{
  "id": "question8_10_6",
  "level": "2",
  "url": "sequences_chapter-assessment.html#question8_10_6",
  "type": "Checkpoint",
  "number": "8.10.8",
  "title": "",
  "body": " What is the type of a ?   b = \"My, what a lovely day\" x = b.split(',') z = \"\".join(x) y = z.split() a = \"\".join(y)      string    Yes, the string is split into a list, then joined back into a string, then split again, and finally joined back into a string.      integer    Not quite, look again at what types are present and what the result of .split() is.      float    Not quite, look again at what types are present and what the result of .split() is.      list    Not quite, think about what .split() and .join() return.    "
},
{
  "id": "ac8_10_3",
  "level": "2",
  "url": "sequences_chapter-assessment.html#ac8_10_3",
  "type": "Checkpoint",
  "number": "8.10.9",
  "title": "",
  "body": " Write code to determine how many 9's are in the list nums and assign that value to the variable how_many . Do not use a for loop to do this.   nums = [4, 2, 23.4, 9, 545, 9, 1, 234.001, 5, 49, 8, 9 , 34, 52, 1, -2, 9.1, 4] ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def test_output(self): self.assertEqual(how_many, 3, \"Testing that how_many is set correctly.\") self.assertNotIn('for', self.getEditorText(), \"Testing that you didn't use a for loop.\") self.assertFalse(re.search(r'how_many\\s*=\\s*3', self.getEditorText()), \"Hardcode check\") myTests().main()  "
},
{
  "id": "assess_ac2_1_1_10",
  "level": "2",
  "url": "sequences_chapter-assessment.html#assess_ac2_1_1_10",
  "type": "Checkpoint",
  "number": "8.10.10",
  "title": "",
  "body": " Write code that uses slicing to get rid of the the second 8 so that here are only two 8's in the list bound to the variable nums .   nums = [4, 2, 8, 23.4, 8, 9, 545, 9, 1, 234.001, 5, 49, 8, 9 , 34, 52, 1, -2, 9.1, 4] ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def test_output(self): self.assertEqual(nums, [4, 2, 8, 23.4, 9, 545, 9, 1, 234.001, 5, 49, 8, 9 , 34, 52, 1, -2, 9.1, 4], \"Testing that nums is set correctly.\") self.assertTrue(re.search(r'\\s*:', self.getEditorText()), \"Testing that you are using slices to remove the second 8 (Don't worry about actual and expected values)\") myTests().main()  "
},
{
  "id": "access_ac_2_1_1_11",
  "level": "2",
  "url": "sequences_chapter-assessment.html#access_ac_2_1_1_11",
  "type": "Checkpoint",
  "number": "8.10.11",
  "title": "",
  "body": " Assign the last element of lst to the variable end_elem . Do this so that it works no matter how long lst is.   lst = [\"hi\", \"goodbye\", \"python\", \"106\", \"506\", 91, ['all', 'Paul', 'Jackie', \"UMSI\", 1, \"Stephen\", 4.5], 109, \"chair\", \"pizza\", \"wolverine\", 2017, 3.92, 1817, \"account\", \"readings\", \"papers\", 12, \"facebook\", \"twitter\", 193.2, \"snapchat\", \"leaders and the best\", \"social\", \"1986\", 9, 29, \"holiday\", [\"women\", \"olympics\", \"gold\", \"rio\", 21, \"2016\", \"men\"], \"26trombones\"] ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def testOne(self): self.assertEqual(end_elem, lst[-1], \"Testing that end_elem has the correct element assigned.\") self.assertFalse(re.search(r'end_elem\\s*=\\s*\\S26trombones\\S', self.getEditorText()), \"Hardcoding Check (Don't worry about actual and expected values)\") myTests().main()  "
},
{
  "id": "access_ac_2_1_1_12",
  "level": "2",
  "url": "sequences_chapter-assessment.html#access_ac_2_1_1_12",
  "type": "Checkpoint",
  "number": "8.10.12",
  "title": "",
  "body": " Assign the number of elements in lst to the variable num_lst .   lst = [\"hi\", \"goodbye\", \"python\", \"106\", \"506\", 91, ['all', 'Paul', 'Jackie', \"UMSI\", 1, \"Stephen\", 4.5], 109, \"chair\", \"pizza\", \"wolverine\", 2017, 3.92, 1817, \"account\", \"readings\", \"papers\", 12, \"facebook\", \"twitter\", 193.2, \"snapchat\", \"leaders and the best\", \"social\", \"1986\", 9, 29, \"holiday\", [\"women\", \"olympics\", \"gold\", \"rio\", 21, \"2016\", \"men\"], \"26trombones\"] ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_lst, 30, \"Testing that num_lst has the correct length assigned.\") self.assertFalse(re.search(r'num_lst\\s*=\\s*30', self.getEditorText()), \"Hardcoding Check (Don't worry about actual and expected values)\") myTests().main()  "
},
{
  "id": "assess_ac_2_1_1_13",
  "level": "2",
  "url": "sequences_chapter-assessment.html#assess_ac_2_1_1_13",
  "type": "Checkpoint",
  "number": "8.10.13",
  "title": "",
  "body": " Create a variable called wrds and assign to it a list whose elements are the words in the string sent . Do not worry about punctuation.   sent = \"The bicentennial for our university was in 2017\" ===== from unittest.gui import TestCaseGui import re class myTests(TestCaseGui): def testOne(self): self.assertEqual(wrds, sent.split(), \"Testing that wrds has been correctly assigned.\") self.assertFalse(re.search(r'wrds\\s*=\\s*\\S*The\\S', self.getEditorText()), \"Hardcoding Check (Don't worry about actual and expected values)\") myTests().main()  "
},
{
  "id": "transforming-sequences_introduction-transforming-sequences",
  "level": "1",
  "url": "transforming-sequences_introduction-transforming-sequences.html",
  "type": "Section",
  "number": "9.1",
  "title": "Introduction: Transforming Sequences",
  "body": " Introduction: Transforming Sequences  The sequences that we have used so far have been static: a list of colors that doesn't change or the characters in a string that stays the same. The real world is more complicated than that. A list of users for your social network may need to grow to accommodate new users (or shrink when users leave your service). The letters in a string may need to be modified to personalize a message ( Welcome to Wonderland, <your name> ), or to encode a secret message.  The following chapter will detail more of the methods that can be used to transform lists and strings. Generally, the two methods that can be used are changing the list object, in place, by mutating it; or by constructing a new string object using a copy-with-change operation.   Learning Goals     To understand the concepts of mutable and immutable data types    To understand that methods on strings leave the origninal string alone but return a new string    To understand that lists are mutable data types and that mutating methods on lists return None       Objectives  Demonstrate the correct use of:     concatenate    index operator    substring (slice)    search - contains in \/ not in and index    find method    append    join    split    string format method      "
},
{
  "id": "transforming-sequences_mutability",
  "level": "1",
  "url": "transforming-sequences_mutability.html",
  "type": "Section",
  "number": "9.2",
  "title": "Mutability",
  "body": " Mutability  Some Python collection types - strings and lists so far - are able to change and some are not. If a type is able to change, then it is said to be mutable. If the type is not able to change then it is said to be immutable. This will be expanded below.   Lists are Mutable  Unlike strings, lists are mutable . This means we can change an item in a list by accessing it directly as part of the assignment statement. Using the indexing operator (square brackets) on the left side of an assignment, we can update one of the list items.   fruit = [\"banana\", \"apple\", \"cherry\"] print(fruit) fruit[0] = \"pear\" fruit[-1] = \"orange\" print(fruit)   An assignment to an element of a list is called item assignment . Item assignment does not work for strings. Recall that strings are immutable.  Here is the same example in codelens so that you can step through the statements and see the changes to the list elements.   fruit = [\"banana\", \"apple\", \"cherry\"] fruit[0] = \"pear\" fruit[-1] = \"orange\"   By combining assignment with the slice operator we can update several elements at once.   alist = ['a', 'b', 'c', 'd', 'e', 'f'] alist[1:3] = ['x', 'y'] print(alist)   We can also remove elements from a list by assigning the empty list to them.   alist = ['a', 'b', 'c', 'd', 'e', 'f'] alist[1:3] = [] print(alist)   We can even insert elements into a list by squeezing them into an empty slice at the desired location.   alist = ['a', 'd', 'f'] alist[1:1] = ['b', 'c'] print(alist) alist[4:4] = ['e'] print(alist)     Strings are Immutable  One final thing that makes strings different from some other Python collection types is that you are not allowed to modify the individual characters in the collection. It is tempting to use the [] operator on the left side of an assignment, with the intention of changing a character in a string. For example, in the following code, we would like to change the first letter of greeting .   greeting = \"Hello, world!\" greeting[0] = 'J' # ERROR! print(greeting)   Instead of producing the output Jello, world! , this code produces the runtime error TypeError: 'str' object does not support item assignment .  Strings are immutable , which means you cannot change an existing string. The best you can do is create a new string that is a variation on the original.   greeting = \"Hello, world!\" newGreeting = 'J' + greeting[1:] print(newGreeting) print(greeting) # same as it was   The solution here is to concatenate a new first letter onto a slice of greeting . This operation has no effect on the original string.  While it's possible to make up new variable names each time we make changes to existing values, it could become difficult to keep track of them all.   phrase = \"many moons\" phrase_expanded = phrase + \" and many stars\" phrase_larger = phrase_expanded + \" litter\" phrase_complete = \"M\" + phrase_larger[1:] + \" the night sky.\" excited_phrase_complete = phrase_complete[:-1] + \"!\"   The more that you change the string, the more difficult it is to come up with a new variable to use. It's perfectly acceptable to re-assign the value to the same variable name in this case.    Tuples are Immutable  As with strings, if we try to use item assignment to modify one of the elements of a tuple, we get an error. In fact, that's the key difference between lists and tuples: tuples are like immutable lists. None of the operations on lists that mutate them are available for tuples. Once a tuple is created, it can't be changed.   julia[0] = 'X' # TypeError: 'tuple' object does not support item assignment    Check your understanding    What is printed by the following statements?   alist = [4,2,8,6,5] alist[2] = True print(alist)      [4,2,True,8,6,5]    Item assignment does not insert the new item into the list.      [4,2,True,6,5]    Yes, the value True is placed in the list at index 2. It replaces 8.      Error, it is illegal to assign    Item assignment is allowed with lists. Lists are mutable.      What is printed by the following statements:   s = \"Ball\" s[0] = \"C\" print(s)      Ball    Assignment is not allowed with strings.      Call    Assignment is not allowed with strings.      Error    Yes, strings are immutable.      "
},
{
  "id": "p-2102",
  "level": "2",
  "url": "transforming-sequences_mutability.html#p-2102",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mutable "
},
{
  "id": "p-2103",
  "level": "2",
  "url": "transforming-sequences_mutability.html#p-2103",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "item assignment "
},
{
  "id": "p-2110",
  "level": "2",
  "url": "transforming-sequences_mutability.html#p-2110",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "immutable "
},
{
  "id": "p-2115",
  "level": "2",
  "url": "transforming-sequences_mutability.html#p-2115",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question9_2_1",
  "level": "2",
  "url": "transforming-sequences_mutability.html#question9_2_1",
  "type": "Checkpoint",
  "number": "9.2.1",
  "title": "",
  "body": " What is printed by the following statements?   alist = [4,2,8,6,5] alist[2] = True print(alist)      [4,2,True,8,6,5]    Item assignment does not insert the new item into the list.      [4,2,True,6,5]    Yes, the value True is placed in the list at index 2. It replaces 8.      Error, it is illegal to assign    Item assignment is allowed with lists. Lists are mutable.    "
},
{
  "id": "question9_2_2",
  "level": "2",
  "url": "transforming-sequences_mutability.html#question9_2_2",
  "type": "Checkpoint",
  "number": "9.2.2",
  "title": "",
  "body": " What is printed by the following statements:   s = \"Ball\" s[0] = \"C\" print(s)      Ball    Assignment is not allowed with strings.      Call    Assignment is not allowed with strings.      Error    Yes, strings are immutable.    "
},
{
  "id": "transforming-sequences_list-element-deletion",
  "level": "1",
  "url": "transforming-sequences_list-element-deletion.html",
  "type": "Section",
  "number": "9.3",
  "title": "List Element Deletion",
  "body": " List Element Deletion  Using slices to delete list elements can be awkward and therefore error-prone. Python provides an alternative that is more readable. The del statement removes an element from a list by using its position.   a = ['one', 'two', 'three'] del a[1] print(a) alist = ['a', 'b', 'c', 'd', 'e', 'f'] del alist[1:5] print(alist)   As you might expect, del handles negative indices and causes a runtime error if the index is out of range. In addition, you can use a slice as an index for del . As usual, slices select all the elements up to, but not including, the second index.  "
},
{
  "id": "transforming-sequences_objects-and-references",
  "level": "1",
  "url": "transforming-sequences_objects-and-references.html",
  "type": "Section",
  "number": "9.4",
  "title": "Objects and References",
  "body": " Objects and References  If we execute these assignment statements,   a = \"banana\" b = \"banana\"   we know that a and b will refer to a string with the letters \"banana\" . But we don't know yet whether they point to the same string.  There are two possible ways the Python interpreter could arrange its internal states:   or   In one case, a and b refer to two different string objects that have the same value. In the second case, they refer to the same object. Remember that an object is something a variable can refer to.  We can test whether two names refer to the same object using the is operator. The is operator will return true if the two references are to the same object. In other words, the references are the same. Try our example from above.   a = \"banana\" b = \"banana\" print(a is b)   The answer is True . This tells us that both a and b refer to the same object, and that it is the second of the two reference diagrams that describes the relationship. Python assigns every object a unique id and when we ask a is b what python is really doing is checking to see if id(a) == id(b).   a = \"banana\" b = \"banana\" print(id(a)) print(id(b))   Since strings are immutable , the Python interpreter often optimizes resources by making two names that refer to the same string value refer to the same object. You shouldn't count on this (that is, use == to compare strings, not is ), but don't be surprised if you find that two variables,each bound to the string banana , have the same id..  This is not the case with lists, which never share an id just because they have the same contents. Consider the following example. Here, a and b refer to two different lists, each of which happens to have the same element values. They need to have different ids so that mutations of list a do not affect list b .   a = [81,82,83] b = [81,82,83] print(a is b) print(a == b) print(id(a)) print(id(b))   The reference diagram for this example looks like this:   a and b have equivalent values but do not refer to the same object. Because their contents are equivalent, a==b evaluates to True; because they are not the same object, a is b evaluates to False.  "
},
{
  "id": "transforming-sequences_aliasing",
  "level": "1",
  "url": "transforming-sequences_aliasing.html",
  "type": "Section",
  "number": "9.5",
  "title": "Aliasing",
  "body": " Aliasing  Since variables refer to objects, if we assign one variable to another, both variables refer to the same object:   a = [81, 82, 83] b = a print(a is b)   In this case, the reference diagram looks like this:   Because the same list has two different names, a and b , we say that it is aliased . Changes made with one alias affect the other. In the codelens example below, you can see that a and b refer to the same list after executing the assignment statement b = a .   a = [81,82,83] b = [81,82,83] print(a is b) b = a print(a == b) print(a is b) b[0] = 5 print(a)   Although this behavior can be useful, it is sometimes unexpected or undesirable. In general, it is safer to avoid aliasing when you are working with mutable objects. Of course, for immutable objects, there's no problem. That's why Python is free to alias strings and integers when it sees an opportunity to economize.   Check your understanding    What is the value of y after the following code has been evaluated:   w = ['Jamboree', 'get-together', 'party'] y = ['celebration'] y = w      ['Jamboree', 'get-together', 'party']    Yes, the value of y has been reassigned to the value of w.      ['celebration']    No, that was the inital value of y, but y has changed.      ['celebration', 'Jamboree', 'get-together', 'party']    No, when we assign a list to another list it does not concatenate the lists together.      ['Jamboree', 'get-together', 'party', 'celebration']    No, when we assign a list to another list it does not concatenate the lists together.      What is printed by the following statements?   alist = [4,2,8,6,5] blist = alist blist[3] = 999 print(alist)      [4,2,8,6,5]    blist is not a copy of alist, it is a reference to the list alist refers to.      [4,2,8,999,5]    Yes, since alist and blist both reference the same list, changes to one also change the other.     "
},
{
  "id": "p-2145",
  "level": "2",
  "url": "transforming-sequences_aliasing.html#p-2145",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "aliased "
},
{
  "id": "p-2147",
  "level": "2",
  "url": "transforming-sequences_aliasing.html#p-2147",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question9_5_1",
  "level": "2",
  "url": "transforming-sequences_aliasing.html#question9_5_1",
  "type": "Checkpoint",
  "number": "9.5.1",
  "title": "",
  "body": " What is the value of y after the following code has been evaluated:   w = ['Jamboree', 'get-together', 'party'] y = ['celebration'] y = w      ['Jamboree', 'get-together', 'party']    Yes, the value of y has been reassigned to the value of w.      ['celebration']    No, that was the inital value of y, but y has changed.      ['celebration', 'Jamboree', 'get-together', 'party']    No, when we assign a list to another list it does not concatenate the lists together.      ['Jamboree', 'get-together', 'party', 'celebration']    No, when we assign a list to another list it does not concatenate the lists together.    "
},
{
  "id": "question9_5_2",
  "level": "2",
  "url": "transforming-sequences_aliasing.html#question9_5_2",
  "type": "Checkpoint",
  "number": "9.5.2",
  "title": "",
  "body": " What is printed by the following statements?   alist = [4,2,8,6,5] blist = alist blist[3] = 999 print(alist)      [4,2,8,6,5]    blist is not a copy of alist, it is a reference to the list alist refers to.      [4,2,8,999,5]    Yes, since alist and blist both reference the same list, changes to one also change the other.    "
},
{
  "id": "transforming-sequences_cloning-lists",
  "level": "1",
  "url": "transforming-sequences_cloning-lists.html",
  "type": "Section",
  "number": "9.6",
  "title": "Cloning Lists",
  "body": " Cloning Lists  If we want to modify a list and also keep a copy of the original, we need to be able to make a copy of the list itself, not just the reference. This process is sometimes called cloning , to avoid the ambiguity of the word copy.  The easiest way to clone a list is to use the slice operator.  Taking any slice of a creates a new list. In this case the slice happens to consist of the whole list.   a = [81,82,83] b = a[:] # make a clone using slice print(a == b) print(a is b) b[0] = 5 print(a) print(b)   Now we are free to make changes to b without worrying about a . Again, we can clearly see in codelens that a and b are entirely different list objects.   Check your understanding    What is printed by the following statements?   alist = [4,2,8,6,5] blist = alist * 2 blist[3] = 999 print(alist)      [4,2,8,999,5,4,2,8,6,5]    print alist not print blist      [4,2,8,999,5]    blist is changed, not alist.      [4,2,8,6,5]    Yes, alist was unchanged by the assignment statement. blist was a copy of the references in alist.     "
},
{
  "id": "p-2162",
  "level": "2",
  "url": "transforming-sequences_cloning-lists.html#p-2162",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cloning "
},
{
  "id": "p-2166",
  "level": "2",
  "url": "transforming-sequences_cloning-lists.html#p-2166",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question9_6_1",
  "level": "2",
  "url": "transforming-sequences_cloning-lists.html#question9_6_1",
  "type": "Checkpoint",
  "number": "9.6.1",
  "title": "",
  "body": " What is printed by the following statements?   alist = [4,2,8,6,5] blist = alist * 2 blist[3] = 999 print(alist)      [4,2,8,999,5,4,2,8,6,5]    print alist not print blist      [4,2,8,999,5]    blist is changed, not alist.      [4,2,8,6,5]    Yes, alist was unchanged by the assignment statement. blist was a copy of the references in alist.    "
},
{
  "id": "transforming-sequences_mutating-methods",
  "level": "1",
  "url": "transforming-sequences_mutating-methods.html",
  "type": "Section",
  "number": "9.7",
  "title": "Mutating Methods",
  "body": " Mutating Methods  You've seen some methods already, like the count and index methods. Methods are either mutating or non-mutating. Mutating methods are ones that change the object after the method has been used. Non-mutating methods do not change the object after the method has been used.  The count and index methods are both non-mutating. Count returns the number of occurrences of the argument given but does not change the original string or list. Similarly, index returns the leftmost occurrence of the argument but does not change the original string or list. Below we'll talk about list methods in general. Keep an eye out for methods that are mutating!   List Methods  The dot operator can also be used to access built-in methods of list objects. append is a list method which adds the argument passed to it to the end of the list. Continuing with this example, we show several other list methods. Many of them are easy to understand.   mylist = [] mylist.append(5) mylist.append(27) mylist.append(3) mylist.append(12) print(mylist) mylist.insert(1, 12) print(mylist) print(mylist.count(12)) print(mylist.index(3)) print(mylist.count(5)) mylist.reverse() print(mylist) mylist.sort() print(mylist) mylist.remove(5) print(mylist) lastitem = mylist.pop() print(lastitem) print(mylist)   There are two ways to use the pop method. The first, with no parameter, will remove and return the last item of the list. If you provide a parameter for the position, pop will remove and return the item at that position. Either way the list is changed.  The following table provides a summary of the list methods shown above. The column labeled result gives an explanation as to what the return value is as it relates to the new value of the list. The word mutator means that the list is changed by the method but nothing is returned (actually None is returned). A hybrid method is one that not only changes the list but also returns a value as its result. Finally, if the result is simply a return, then the list is unchanged by the method.  Be sure to experiment with these methods to gain a better understanding of what they do.     Method  Parameters  Result  Description    append  item  mutator  Adds a new item to the end of a list    insert  position, item  mutator  Inserts a new item at the position given    pop  none  hybrid  Removes and returns the last item    pop  position  hybrid  Removes and returns the item at position    sort  none  mutator  Modifies a list to be sorted    reverse  none  mutator  Modifies a list to be in reverse order    index  item  return idx  Returns the position of first occurrence of item    count  item  return ct  Returns the number of occurrences of item    remove  item  mutator  Removes the first occurrence of item     Details for these and others can be found in the Python Documentation .  It is important to remember that methods like append , sort , and reverse all return None . They change the list; they don't produce a new list. So, while we did reassignment to increment a number, as in x = x + 1 , doing the analogous thing with these operations will lose the entire list contents (see line 8 below).   mylist = [] mylist.append(5) mylist.append(27) mylist.append(3) mylist.append(12) print(mylist) mylist = mylist.sort() #probably an error print(mylist)    Check your understanding    What is printed by the following statements?   alist = [4,2,8,6,5] alist.append(True) alist.append(False) print(alist)      [4,2,8,6,5,False,True]    True was added first, then False was added last.      [4,2,8,6,5,True,False]    Yes, each item is added to the end of the list.      [True,False,4,2,8,6,5]    append adds at the end, not the beginning.      "
},
{
  "id": "p-2178",
  "level": "2",
  "url": "transforming-sequences_mutating-methods.html#p-2178",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mutator hybrid "
},
{
  "id": "table-3",
  "level": "2",
  "url": "transforming-sequences_mutating-methods.html#table-3",
  "type": "Table",
  "number": "9.7.1",
  "title": "",
  "body": "   Method  Parameters  Result  Description    append  item  mutator  Adds a new item to the end of a list    insert  position, item  mutator  Inserts a new item at the position given    pop  none  hybrid  Removes and returns the last item    pop  position  hybrid  Removes and returns the item at position    sort  none  mutator  Modifies a list to be sorted    reverse  none  mutator  Modifies a list to be in reverse order    index  item  return idx  Returns the position of first occurrence of item    count  item  return ct  Returns the number of occurrences of item    remove  item  mutator  Removes the first occurrence of item    "
},
{
  "id": "p-2182",
  "level": "2",
  "url": "transforming-sequences_mutating-methods.html#p-2182",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question9_7_1",
  "level": "2",
  "url": "transforming-sequences_mutating-methods.html#question9_7_1",
  "type": "Checkpoint",
  "number": "9.7.2",
  "title": "",
  "body": " What is printed by the following statements?   alist = [4,2,8,6,5] alist.append(True) alist.append(False) print(alist)      [4,2,8,6,5,False,True]    True was added first, then False was added last.      [4,2,8,6,5,True,False]    Yes, each item is added to the end of the list.      [True,False,4,2,8,6,5]    append adds at the end, not the beginning.    "
},
{
  "id": "transforming-sequences_append-versus-concatenate",
  "level": "1",
  "url": "transforming-sequences_append-versus-concatenate.html",
  "type": "Section",
  "number": "9.8",
  "title": "Append versus Concatenate",
  "body": " Append versus Concatenate  The append method adds a new item to the end of a list. It is also possible to add a new item to the end of a list by using the concatenation operator. However, you need to be careful.  Consider the following example. The original list has 3 integers. We want to add the word cat to the end of the list.   origlist = [45,32,88] origlist.append(\"cat\")   Here we have used append which simply modifies the list. In order to use concatenation, we need to write an assignment statement that uses the accumulator pattern:  origlist = origlist + [\"cat\"]  Note that the word cat needs to be placed in a list since the concatenation operator needs two lists to do its work.   origlist = [45,32,88] origlist = origlist + [\"cat\"]   It is also important to realize that with append, the original list is simply modified. On the other hand, with concatenation, an entirely new list is created. This can be seen in the following codelens example where``newlist`` refers to a list which is a copy of the original list, origlist , with the new item cat added to the end. origlist still contains the three values it did before the concatenation. This is why the assignment operation is necessary as part of the accumulator pattern.   origlist = [45,32,88] newlist = origlist + [\"cat\"]   This might be difficult to understand since these two lists appear to be the same. In Python, every object has a unique identification tag. Likewise, there is a built-in function that can be called on any object to return its unique id. The function is appropriately called id and takes a single parameter, the object that you are interested in knowing about. You can see in the example below that a real id is usually a very large integer value (corresponding to an address in memory). In the textbook though the number will likely be smaller.   >>> alist = [4, 5, 6] >>> id(alist) 4300840544 >>>    origlist = [45,32,88] print(\"origlist:\", origlist) print(\"the identifier:\", id(origlist)) #id of the list before changes newlist = origlist + ['cat'] print(\"newlist:\", newlist) print(\"the identifier:\", id(newlist)) #id of the list after concatentation origlist.append('cat') print(\"origlist:\", origlist) print(\"the identifier:\", id(origlist)) #id of the list after append is used   Note how even though newlist and origlist appear the same, they have different identifiers.  We have previously described x += 1 as a shorthand for x = x + 1 . With lists, += is actually a little different. In particular, origlist += [ cat ] appends cat to the end of the original list object. If there is another alias for `origlist , this can make a difference, as in the code below. See if you can follow (or, better yet, predict, changes in the reference diagram).   origlist = [45,32,88] aliaslist = origlist origlist += [\"cat\"] origlist = origlist + [\"cow\"]   We can use append or concatenate repeatedly to create new objects. If we had a string and wanted to make a new list, where each element in the list is a character in the string, where do you think you should start? In both cases, you'll need to first create a variable to store the new object.   st = \"Warmth\" a = []   Then, character by character, you can add to the empty list. The process looks different if you concatentate as compared to using append.   st = \"Warmth\" a = [] b = a + [st[0]] c = b + [st[1]] d = c + [st[2]] e = d + [st[3]] f = e + [st[4]] g = f + [st[5]] print(g)    st = \"Warmth\" a = [] a.append(st[0]) a.append(st[1]) a.append(st[2]) a.append(st[3]) a.append(st[4]) a.append(st[5]) print(a)   This might become tedious though, and difficult if the length of the string is long. Can you think of a better way to do this?   Check your understanding    What is printed by the following statements?   alist = [4,2,8,6,5] alist = alist + 999 print(alist)      [4,2,8,6,5,999]    You cannot concatenate a list with an integer.      Error, you cannot concatenate a list with an integer.    Yes, in order to perform concatenation you would need to write alist+[999]. You must have two lists.     "
},
{
  "id": "p-2201",
  "level": "2",
  "url": "transforming-sequences_append-versus-concatenate.html#p-2201",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question9_8_1",
  "level": "2",
  "url": "transforming-sequences_append-versus-concatenate.html#question9_8_1",
  "type": "Checkpoint",
  "number": "9.8.1",
  "title": "",
  "body": " What is printed by the following statements?   alist = [4,2,8,6,5] alist = alist + 999 print(alist)      [4,2,8,6,5,999]    You cannot concatenate a list with an integer.      Error, you cannot concatenate a list with an integer.    Yes, in order to perform concatenation you would need to write alist+[999]. You must have two lists.    "
},
{
  "id": "transforming-sequences_non-mutating-methods-on-strings",
  "level": "1",
  "url": "transforming-sequences_non-mutating-methods-on-strings.html",
  "type": "Section",
  "number": "9.9",
  "title": "Non-mutating Methods on Strings",
  "body": " Non-mutating Methods on Strings  There are a wide variety of methods for string objects. Try the following program.   ss = \"Hello, World\" print(ss.upper()) tt = ss.lower() print(tt) print(ss)   In this example, upper is a method that can be invoked on any string object to create a new string in which all the characters are in uppercase. lower works in a similar fashion changing all characters in the string to lowercase. (The original string ss remains unchanged. A new string tt is created.)  You've already seen a few methods, such as count and index , that work with strings and are non-mutating. In addition to those and upper and lower , the following table provides a summary of some other useful string methods. There are a few activecode examples that follow so that you can try them out.     Method  Parameters  Description    upper  none  Returns a string in all uppercase    lower  none  Returns a string in all lowercase    count  item  Returns the number of occurrences of item    index  item  Returns the leftmost index where the substring item is found and causes a runtime error if item is not found    strip  none  Returns a string with the leading and trailing whitespace removed    replace  old, new  Replaces all occurrences of old substring with new    format  substitutions  Involved! See , below     You should experiment with these methods so that you understand what they do. Note once again that the methods that return strings do not change the original. You can also consult the Python documentation for strings .   ss = \" Hello, World \" els = ss.count(\"l\") print(els) print(\"***\"+ss.strip()+\"***\") news = ss.replace(\"o\", \"***\") print(news)    food = \"banana bread\" print(food.upper())    Check your understanding    What is printed by the following statements?   s = \"python rocks\" print(s.count(\"o\") + s.count(\"p\"))      0    There are definitely o and p characters.      2    There are 2 o characters but what about p?      3    Yes, add the number of o characters and the number of p characters.      What is printed by the following statements?   s = \"python rocks\" print(s[1]*s.index(\"n\"))      yyyyy    Yes, s[1] is y and the index of n is 5, so 5 y characters. It is important to realize that the index method has precedence over the repetition operator. Repetition is done last.      55555    Close. 5 is not repeated, it is the number of times to repeat.      n    This expression uses the index of n      Error, you cannot combine all those things together.    This is fine, the repetition operator used the result of indexing and the index method.      FStrings  Until now, we have created strings with variable content using the + operator to concatenate partial strings together. That works, but it's very hard for people to read or debug a code line that includes variable names and strings and complex expressions. Consider the following:   name = \"Rodney Dangerfield\" score = -1 # No respect! print(\"Hello \" + name + \". Your score is \" + str(score))   Or perhaps more realistically:   scores = [(\"Rodney Dangerfield\", -1), (\"Marlon Brando\", 1), (\"You\", 100)] for person in scores: name = person[0] score = person[1] print(\"Hello \" + name + \". Your score is \" + str(score))   In this section, you will learn to write that in a more readable way:   scores = [(\"Rodney Dangerfield\", -1), (\"Marlon Brando\", 1), (\"You\", 100)] for person in scores: name = person[0] score = person[1] print(f\"Hello {name}. Your score is {score}.\")   In grade school quizzes a common convention is to use fill-in-the blanks. For instance,   Hello _____!   and you can fill in the name of the person greeted, and combine given text with a chosen insertion. We use this as an analogy: Python has a similar construction, better called fill-in-the-braces. fstrings , make substitutions into places in a string enclosed in braces. Run this code:   person = input('Your name: ') greeting = f\"Hello {person}!\" print(greeting)   There are several new ideas here!  An fstring has a special form, where the string must start with an f outside the quotations, and with braces embedded. The data embedded in the braces will be substituted into the string. There are many variations on the syntax between the braces.  In the code above, this new string is assigned to the identifier greeting , and then the string is printed.  The identifier greeting was introduced to break the operations into a clearer sequence of steps. However, since the value of greeting is only referenced once, it can be eliminated with the more concise version:   person = input('Enter your name: ') print(f'Hello {person}!')   There can be multiple substitutions, with data of any type. Next we use floats. Try original price $2.50 with a 7% discount:   origPrice = float(input('Enter the original price: $')) discount = float(input('Enter discount percentage: ')) newPrice = (1 - discount\/100)*origPrice calculation = f'${origPrice} discounted by {discount}% is ${newPrice}.' print(calculation)   If you used the data suggested, this result is not satisfying. Prices should appear with exactly two places beyond the decimal point, but that is not the default way to display floats.  fstrings can give further information inside the braces showing how to specially format data. In particular floats can be shown with a specific number of decimal places. For two decimal places, put :.2f inside the braces for the monetary values:   origPrice = float(input('Enter the original price: $')) discount = float(input('Enter discount percentage: ')) newPrice = (1 - discount\/100)*origPrice calculation = f'${origPrice:.2f} discounted by {discount}% is ${newPrice:.2f}.' print(calculation)   The 2 in the format modifier can be replaced by another integer to round to that specified number of digits.  This kind of format string depends directly on the order of the parameters to the format method. There are other approaches that we will skip here, such as explicitly numbering substitutions.  A technical point: Since braces have special meaning in a format string, there must be a special rule if you want braces to actually be included in the final formatted string. The rule is to double the braces: {​{ and }​} . For example mathematical set notation uses braces. The initial and final doubled braces in the format string below generate literal braces in the formatted string:  a = 5 b = 9 setStr = 'The set is {​{​{a}, {b}​}​}.' print(setStr)  Unfortunately, at the time of this writing, the ActiveCode format implementation has a bug, printing doubled braces, but standard Python prints {5, 9} .   What is printed by the following statements?   x = 2 y = 6 print('sum of {x} and {y} is {x+y}; product: {x*y}.')      Nothing - it causes an error    It is legal format syntax: put the data in place of the braces.      sum of {x} and {y} is {x+y}; product: {x*y}.    The outpput will be the data stored in the variables, not the variables themselves.      sum of 2 and 6 is 8; product: 12.    Yes, correct substitutions!      sum of {2} and {6} is {8}; product: {12}.    The braces do not appear in the final fstring.      What is printed by the following statements?   v = 2.34567 print('{v:.1f} {v:.2f} {v:.7f}')      2.34567 2.34567 2.34567    The numbers before the f in the braces give the number of digits to display after the decimal point.      2.3 2.34 2.34567    Close, but round to the number of digits and display the full number of digits specified.      2.3 2.35 2.3456700    Yes, correct number of digits with rounding!      "
},
{
  "id": "table-4",
  "level": "2",
  "url": "transforming-sequences_non-mutating-methods-on-strings.html#table-4",
  "type": "Table",
  "number": "9.9.1",
  "title": "",
  "body": "   Method  Parameters  Description    upper  none  Returns a string in all uppercase    lower  none  Returns a string in all lowercase    count  item  Returns the number of occurrences of item    index  item  Returns the leftmost index where the substring item is found and causes a runtime error if item is not found    strip  none  Returns a string with the leading and trailing whitespace removed    replace  old, new  Replaces all occurrences of old substring with new    format  substitutions  Involved! See , below    "
},
{
  "id": "p-2211",
  "level": "2",
  "url": "transforming-sequences_non-mutating-methods-on-strings.html#p-2211",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question9_9_1",
  "level": "2",
  "url": "transforming-sequences_non-mutating-methods-on-strings.html#question9_9_1",
  "type": "Checkpoint",
  "number": "9.9.2",
  "title": "",
  "body": " What is printed by the following statements?   s = \"python rocks\" print(s.count(\"o\") + s.count(\"p\"))      0    There are definitely o and p characters.      2    There are 2 o characters but what about p?      3    Yes, add the number of o characters and the number of p characters.    "
},
{
  "id": "question9_9_2",
  "level": "2",
  "url": "transforming-sequences_non-mutating-methods-on-strings.html#question9_9_2",
  "type": "Checkpoint",
  "number": "9.9.3",
  "title": "",
  "body": " What is printed by the following statements?   s = \"python rocks\" print(s[1]*s.index(\"n\"))      yyyyy    Yes, s[1] is y and the index of n is 5, so 5 y characters. It is important to realize that the index method has precedence over the repetition operator. Repetition is done last.      55555    Close. 5 is not repeated, it is the number of times to repeat.      n    This expression uses the index of n      Error, you cannot combine all those things together.    This is fine, the repetition operator used the result of indexing and the index method.    "
},
{
  "id": "question9_9_3",
  "level": "2",
  "url": "transforming-sequences_non-mutating-methods-on-strings.html#question9_9_3",
  "type": "Checkpoint",
  "number": "9.9.4",
  "title": "",
  "body": " What is printed by the following statements?   x = 2 y = 6 print('sum of {x} and {y} is {x+y}; product: {x*y}.')      Nothing - it causes an error    It is legal format syntax: put the data in place of the braces.      sum of {x} and {y} is {x+y}; product: {x*y}.    The outpput will be the data stored in the variables, not the variables themselves.      sum of 2 and 6 is 8; product: 12.    Yes, correct substitutions!      sum of {2} and {6} is {8}; product: {12}.    The braces do not appear in the final fstring.    "
},
{
  "id": "question9_9_4",
  "level": "2",
  "url": "transforming-sequences_non-mutating-methods-on-strings.html#question9_9_4",
  "type": "Checkpoint",
  "number": "9.9.5",
  "title": "",
  "body": " What is printed by the following statements?   v = 2.34567 print('{v:.1f} {v:.2f} {v:.7f}')      2.34567 2.34567 2.34567    The numbers before the f in the braces give the number of digits to display after the decimal point.      2.3 2.34 2.34567    Close, but round to the number of digits and display the full number of digits specified.      2.3 2.35 2.3456700    Yes, correct number of digits with rounding!    "
},
{
  "id": "transforming-sequences_the-accumulator-pattern-with-lists",
  "level": "1",
  "url": "transforming-sequences_the-accumulator-pattern-with-lists.html",
  "type": "Section",
  "number": "9.10",
  "title": "The Accumulator Pattern with Lists",
  "body": " The Accumulator Pattern with Lists  We can accumulate values into a list rather than accumulating a single numeric value. Consider, for example, the following program which transforms a list into a new list by squaring each of the values.   nums = [3, 5, 8] accum = [] for w in nums: x = w**2 accum.append(x) print(accum)   Here, we initialize the accumulator variable to be an empty list, on line 2.  We iterate through the sequence (line 3). On each iteration we transform the item by squaring it (line 4).  The update step appends the new item to the list which is stored in the accumulator variable (line 5). The update happens using the .append(), which mutates the list rather than using a reassignment. Instead, we could have written accum = accum + [x] , or accum += [x] . In either case, we'd need to concatenate a list containing x, not just x itself.  At the end, we have accumulated a new list of the same length as the original, but with each item transformed into a new item. This is called a mapping operation, and we will revisit it in a later chapter.  Note how this differs from mutating the original list, as you saw in a previous section.   Check your understanding    What is printed by the following statements?   alist = [4,2,8,6,5] blist = [ ] for item in alist: blist.append(item+5) print(blist)      [4,2,8,6,5]    5 is added to each item before the append is performed.      [4,2,8,6,5,5]    There are too many items in this list. Only 5 append operations are performed.      [9,7,13,11,10]    Yes, the for loop processes each item of the list. 5 is added before it is appended to blist.      Error, you cannot concatenate inside an append.    5 is added to each item before the append operation is performed.      What is printed by the following statements?   lst= [3,0,9,4,1,7] new_list=[] for i in range(len(lst)): new_list.append(lst[i]+5) print(new_list)      [8,5,14,9,6]    Don't forget the last item!      [8,5,14,9,6,12]    Yes, the for loop processes each item in lst. 5 is added before lst[i] is appended to new_list.      [3,0,9,4,1,7,5]    5 is added to each item before the append operation is performed.      Error, you cannot concatenate inside an append.    It is OK to have a complex expression inside the call to the append method. The expression `lst[i]+5` is fully evaluated before the append operation is performed.         For each word in the list verbs , add an -ing ending. Save this new list in a new list, ing .      verbs = [\"kayak\", \"cry\", \"walk\", \"eat\", \"drink\", \"fly\"] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testSix(self): self.assertEqual(ing, ['kayaking', 'crying', 'walking', 'eating', 'drinking', 'flying'], \"Testing that the variable ing has the correct value.\") myTests().main()    Given the list of numbers, numbs , create a new list of those same numbers increased by 5. Save this new list to the variable newlist .   numbs = [5, 10, 15, 20, 25] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFour(self): self.assertEqual(newlist, [10, 15, 20, 25, 30], \"Testing that the newlist value contains the correct elements.\") myTests().main()    Given the list of numbers, numbs , modifiy the list numbs so that each of the original numbers are increased by 5. Note this is not an accumulator pattern problem, but its a good review.   numbs = [5, 10, 15, 20, 25] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFive(self): self.assertEqual(numbs, [10, 15, 20, 25, 30], \"Testing that numbs is assigned to correct values.\") self.assertNotIn(\"append\", self.getEditorText(), \"Do not use append\") myTests().main()    For each number in lst_nums , multiply that number by 2 and append it to a new list called larger_nums .   lst_nums = [4, 29, 5.3, 10, 2, 1817, 1967, 9, 31.32] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(larger_nums, [8, 58, 10.6, 20, 4, 3634, 3934, 18, 62.64], \"Testing that larger_nums has been created correctly.\" ) myTests().main()   "
},
{
  "id": "p-2262",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-lists.html#p-2262",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initialize "
},
{
  "id": "p-2263",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-lists.html#p-2263",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "iterate "
},
{
  "id": "p-2264",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-lists.html#p-2264",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "update "
},
{
  "id": "p-2267",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-lists.html#p-2267",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question9_10_1",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-lists.html#question9_10_1",
  "type": "Checkpoint",
  "number": "9.10.1",
  "title": "",
  "body": " What is printed by the following statements?   alist = [4,2,8,6,5] blist = [ ] for item in alist: blist.append(item+5) print(blist)      [4,2,8,6,5]    5 is added to each item before the append is performed.      [4,2,8,6,5,5]    There are too many items in this list. Only 5 append operations are performed.      [9,7,13,11,10]    Yes, the for loop processes each item of the list. 5 is added before it is appended to blist.      Error, you cannot concatenate inside an append.    5 is added to each item before the append operation is performed.    "
},
{
  "id": "question9_10_2",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-lists.html#question9_10_2",
  "type": "Checkpoint",
  "number": "9.10.2",
  "title": "",
  "body": " What is printed by the following statements?   lst= [3,0,9,4,1,7] new_list=[] for i in range(len(lst)): new_list.append(lst[i]+5) print(new_list)      [8,5,14,9,6]    Don't forget the last item!      [8,5,14,9,6,12]    Yes, the for loop processes each item in lst. 5 is added before lst[i] is appended to new_list.      [3,0,9,4,1,7,5]    5 is added to each item before the append operation is performed.      Error, you cannot concatenate inside an append.    It is OK to have a complex expression inside the call to the append method. The expression `lst[i]+5` is fully evaluated before the append operation is performed.    "
},
{
  "id": "ac9_10_2",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-lists.html#ac9_10_2",
  "type": "Checkpoint",
  "number": "9.10.3",
  "title": "",
  "body": "    For each word in the list verbs , add an -ing ending. Save this new list in a new list, ing .      verbs = [\"kayak\", \"cry\", \"walk\", \"eat\", \"drink\", \"fly\"] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testSix(self): self.assertEqual(ing, ['kayaking', 'crying', 'walking', 'eating', 'drinking', 'flying'], \"Testing that the variable ing has the correct value.\") myTests().main()  "
},
{
  "id": "ac9_10_3",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-lists.html#ac9_10_3",
  "type": "Checkpoint",
  "number": "9.10.4",
  "title": "",
  "body": " Given the list of numbers, numbs , create a new list of those same numbers increased by 5. Save this new list to the variable newlist .   numbs = [5, 10, 15, 20, 25] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFour(self): self.assertEqual(newlist, [10, 15, 20, 25, 30], \"Testing that the newlist value contains the correct elements.\") myTests().main()  "
},
{
  "id": "ac9_10_4",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-lists.html#ac9_10_4",
  "type": "Checkpoint",
  "number": "9.10.5",
  "title": "",
  "body": " Given the list of numbers, numbs , modifiy the list numbs so that each of the original numbers are increased by 5. Note this is not an accumulator pattern problem, but its a good review.   numbs = [5, 10, 15, 20, 25] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFive(self): self.assertEqual(numbs, [10, 15, 20, 25, 30], \"Testing that numbs is assigned to correct values.\") self.assertNotIn(\"append\", self.getEditorText(), \"Do not use append\") myTests().main()  "
},
{
  "id": "ac9_10_5",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-lists.html#ac9_10_5",
  "type": "Checkpoint",
  "number": "9.10.6",
  "title": "",
  "body": " For each number in lst_nums , multiply that number by 2 and append it to a new list called larger_nums .   lst_nums = [4, 29, 5.3, 10, 2, 1817, 1967, 9, 31.32] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(larger_nums, [8, 58, 10.6, 20, 4, 3634, 3934, 18, 62.64], \"Testing that larger_nums has been created correctly.\" ) myTests().main()  "
},
{
  "id": "transforming-sequences_the-accumulator-pattern-with-strings",
  "level": "1",
  "url": "transforming-sequences_the-accumulator-pattern-with-strings.html",
  "type": "Section",
  "number": "9.11",
  "title": "The Accumulator Pattern with Strings",
  "body": " The Accumulator Pattern with Strings  We can also accumulate strings rather than accumulating numbers, as you've seen before. The following program isn't particularly useful for data processing, but we will see more useful things later that accumulate strings.   s = input(\"Enter some text\") ac = \"\" for c in s: ac = ac + c + \"-\" + c + \"-\" print(ac)   Look carefully at line 4 in the above program ( ac = ac + c + \"-\" + c + \"-\" ). In words, it says that the new value of ac will be the old value of ac concatenated with the current character, a dash, then the current character and a dash again. We are building the result string character by character.  Take a close look also at the initialization of ac . We start with an empty string and then begin adding new characters to the end. Also note that I have given it a different name this time, ac instead of accum . There's nothing magical about these names. You could use any valid variable and it would work the same (try substituting x for ac everywhere in the above code).   Check your understanding    What is printed by the following statements:   s = \"ball\" r = \"\" for item in s: r = item.upper() + r print(r)      Ball    Each item is converted to upper case before concatenation.      BALL    Each character is converted to upper case but the order is wrong.      LLAB    Yes, the order is reversed due to the order of the concatenation.         For each character in the string already saved in the variable str1 , add each character to a list called chars .      str1 = \"I love python\" # HINT: what's the accumulator? That should go here. ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwo(self): self.assertEqual(chars, ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'p', 'y', 't', 'h', 'o', 'n'], \"Testing that chars is assigned to correct values.\") self.assertIn('append', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") myTests().main()    Assign an empty string to the variable output . Using the range function, write code to make it so that the variable output has 35 a s inside it (like \"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\" ). Hint: use the accumulation pattern!   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testThree(self): self.assertEqual(output, \"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\", \"Testing that output has the correct value.\") self.assertNotIn(\"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") myTests().main()   "
},
{
  "id": "p-2294",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-strings.html#p-2294",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your understanding "
},
{
  "id": "question9_11_1",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-strings.html#question9_11_1",
  "type": "Checkpoint",
  "number": "9.11.1",
  "title": "",
  "body": " What is printed by the following statements:   s = \"ball\" r = \"\" for item in s: r = item.upper() + r print(r)      Ball    Each item is converted to upper case before concatenation.      BALL    Each character is converted to upper case but the order is wrong.      LLAB    Yes, the order is reversed due to the order of the concatenation.    "
},
{
  "id": "ac9_11_2",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-strings.html#ac9_11_2",
  "type": "Checkpoint",
  "number": "9.11.2",
  "title": "",
  "body": "    For each character in the string already saved in the variable str1 , add each character to a list called chars .      str1 = \"I love python\" # HINT: what's the accumulator? That should go here. ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwo(self): self.assertEqual(chars, ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'p', 'y', 't', 'h', 'o', 'n'], \"Testing that chars is assigned to correct values.\") self.assertIn('append', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") myTests().main()  "
},
{
  "id": "ac9_11_6",
  "level": "2",
  "url": "transforming-sequences_the-accumulator-pattern-with-strings.html#ac9_11_6",
  "type": "Checkpoint",
  "number": "9.11.3",
  "title": "",
  "body": " Assign an empty string to the variable output . Using the range function, write code to make it so that the variable output has 35 a s inside it (like \"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\" ). Hint: use the accumulation pattern!   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testThree(self): self.assertEqual(output, \"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\", \"Testing that output has the correct value.\") self.assertNotIn(\"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") myTests().main()  "
},
{
  "id": "transforming-sequences_accumulator-pattern-strategies",
  "level": "1",
  "url": "transforming-sequences_accumulator-pattern-strategies.html",
  "type": "Section",
  "number": "9.12",
  "title": "Accumulator Pattern Strategies",
  "body": " Accumulator Pattern Strategies   When to Use it  When children first encounter word problems in their math classes, they find it difficult to translate those words into arithmetic expressions involving addition, subtraction, multiplication, and division. Teachers offer heuristics. If the problem says how many…altogether , that's an addition problem. If it says how many are left , that's going to be a subtraction problem.  Learning to use the accumulator pattern can be similarly confusing. The first step is to recognizing something in the problem statement that suggests an accumulation pattern. Here are a few. You might want to try adding some more of your own.     Phrase  Accumulation Pattern    how many  count accumulation    how frequently    total  sum accumulation    a list of  list accumulation    concatenate  string accumulation    join together           For example, if the problem is to compute the total distance traveled in a series of small trips, you would want to accumulate a sum. If the problem is to make a list of the cubes of all the numbers from 1-25, you want a list accumulation, starting with an empty list and appending one more cube each time. If the problem is to make a comma separated list of all the people invited to a party, you should think of concatenating them; you could start with an empty string and concatenate one more person on each iteration through a list of name.    Before Writing it  Before writing any code, we recommend that you first answer the following questions:     What sequence will you iterate through as you accumulate a result? It could be a range of numbers, the letters in a string, or some existing list that you have just as a list of names.    What type of value will you accumulate? If your final result will be a number, your accumulator will start out with a number and always have a number even as it is updated each time. Similarly, if your final result will be a list, start with a list. If your final result will be a string, you'll probably want to start with a string; one other option is to accumulate a list of strings and then use the .join() method at the end to concatenate them all together.     We recommend writing your answers to these questions in a comment. As you encounter bugs and have to look things up, it will help remind you of what you were trying to implement. Sometimes, just writing the comment can help you to realize a potential problem and avoid it before you ever write any code.    Choosing Good Accumulator and Iterator Variable Names  The final piece of advice regarding accumulation strategies is to be intentional when choosing variable names for the accumulator and iterator variables. A good name can help remind you of what the value is assigned to the variable as well as what you should have by the end of your code. While it might be tempting at first to use a short variable name, such as a or x , if you run into any bugs or look at your code later, you may have trouble understanding what you intended to do and what your code is actually doing.  For the accumulator variable, one thing that can help is to make the variable name end with so_far . The prefix can be something that helps remind you of what you're supposed to end up with. For example: count_so_far , total_so_far , or cubes_so_far .  Note that the iterator variable should be a singular noun. It should describe what one item in the original sequence, not what one item in the final result will be. For example, when accumulating the cubes of the numbers from 1-25, don't write for cube in range(25): . Instead, write for num in range(25): . If you name the iterator variable cube you run the risk of getting confused that it has already been cubed, when that's an operation that you still have to write in your code.   Check Your Understanding    Does the following prompt require an accumulation pattern? If so, what words indicate that? For each string in wrds , add ‘ed' to the end of the word (to make the word past tense). Save these past tense words to a list called past_wrds .     Yes; \"save... to a list\"    Correct!      Yes; \"add 'ed' to the end of the word\"    Not quite - these words don't necessarily mean that we want to accumulate the new strings into a new variable.      No    In this case, an accumulation pattern would be good to use!      Does the following prompt require an accumulation pattern? If so, what words indicate that? Write code to sum up all of the numbers in the list seat_counts . Store that number in the variable total_seat_counts .     Yes; \"to sum up\"    Correct!      Yes; \"numbers in the list\"    Not quite - these words don't necessarily mean that we want to do sum accumulation.      No    In this case, an accumulation pattern would be good to use!      Does the following prompt require an accumulation pattern? If so, what words indicate that? Write code to print out each character of the string my_str on a separate line.     Yes; \"print out each\"    Incorrect, this prompt does not need to use the accumulation pattern.      Yes; \"on a separate line\"    Incorrect, this prompt does not need to use the accumulation pattern.      No    Correct!      Does the following prompt require an accumulation pattern? If so, what words indicate that? Write code that will count the number of vowels in the sentence s and assign the result to the variable num_vowels .     Yes; \"vowels in the sentence\"    Not quite - these words don't necessarily mean that we want to do sum accumulation.      Yes; \"code that will count\"    Correct!      No    In this case, an accumulation pattern would be good to use!      What type should be used for the accumulator variable in the following prompt? Write code that will count the number of vowels in the sentence s and assign the result to the variable num_vowels .     string    Incorrect, that is not the best type for the accumulator variable.      list    Incorrect, that is not the best type for the accumulator variable.      integer    Yes, because we want to keep track of a number.      none, there is no accumulator variable.    Incorrect, we will need an accumulator variable.      What sequence will you iterate through as you accumulate a result in the following prompt? Write code that will count the number of vowels in the sentence s and assign the result to the variable num_vowels .     num_vowels    No, that is the accumulator variable.      s    Yes, that is the sequence you will iterate through!      the prompt does not say    It is stated in the prompt.      What type should be used for the accumulator variable in the following prompt? For each string in wrds , add ‘ed' to the end of the word (to make the word past tense). Save these past tense words to a list called past_wrds .     string    Incorrect, that is not the best type for the accumulator variable.      list    Yes, because we want a new list at the end of the code.      integer    Incorrect, that is not the best type for the accumulator variable.      none, there is no accumulator variable.    Incorrect, we will need an accumulator variable.      What sequence will you iterate through as you accumulate a result in the following prompt? For each string in wrds , add ‘ed' to the end of the word (to make the word past tense). Save these past tense words to a list called past_wrds .     wrds    Yes, that is the sequence you will iterate through!      past_wrds    No, that is the accumulator variable.      the prompt does not say    It is stated in the prompt.      What type should be used for the accumulator variable in the following prompt? Write code to sum up all of the numbers in the list seat_counts . Store that number in the variable total_seat_counts .     string    Incorrect, that is not the best type for the accumulator variable.      list    Incorrect, that is not the best type for the accumulator variable.      integer    Yes, because we want to keep track of a number.      none, there is no accumulator variable.    Incorrect, we will need an accumulator variable.       What sequence will you iterate through as you accumulate a result in the following prompt? Write code to sum up all of the numbers in the list seat_counts . Store that number in the variable total_seat_counts .      seat_counts    Yes, that is the sequence you will iterate through!      total_seat_counts    No, that is the accumulator variable.      the prompt does not say    It is stated in the prompt.      What type should be used for the accumulator variable in the following prompt? Write code to print out each character of the string my_str on a separate line.     string    Incorrect, there should not be an accumulator variable.      list    Incorrect, there should not be an accumulator variable.      integer    Incorrect, there should not be an accumulator variable.      none, there is no accumulator variable.    Correct, because this prompt does not require an accumulator pattern      What sequence will you iterate through as you accumulate a result in the following prompt? Write code to print out each character of the string my_str on a separate line.     my_str    Yes, that is the sequence you will iterate through!      my_str.split()    Close, but read the prompt again - did it say to iterate through words?      the prompt does not say    It is stated in the prompt.      Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? For each string in wrds , add ‘ed' to the end of the word (to make the word past tense). Save these past tense words to a list called past_wrds .     Accumulator Variable: wrds_so_far ; Iterator Variable: wrd    Yes, this is the most clear combination of accumulator and iterator variables.      Accumulator Variable: wrds_so_far ; Iterator Variable: x    The iterator variable is not the clearest here, something else may be better.      Accumulator Variable: changed_wrds ; Iterator Variable: ed    The iterator variable is not the clearest here      Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? Write code that will count the number of vowels in the sentence s and assign the result to the variable num_vowels .     Accumulator Variable: count_so_far ; Iterator Variable: l    Though the accumulator variable is good, the iterator variable is not very clear.      Accumulator Variable: total_so_far ; Iterator Variable: letter    Yes! Both the accumulator and iterator variable are clear.      Accumulator Variable: n_v ; Iterator Variable: letter    Though the iterator variable is good, the accumulator variable is not very clear.      Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? Write code to sum up all of the numbers in the list seat_counts . Store that number in the variable total_seat_counts .     Accumulator Variable: total_so_far ; Iterator Variable: seat    Though the accumulator variable is good, the iterator variable is not clear enough.      Accumulator Variable: total_seats_so_far ; Iterator Variable: seat_count    Yes, this is the most clear combination.      Accumulator Variable: count ; Iterator Variable: n    Neither the accumulator nor iterator variable are clear enough. The accumulator variable is better, but could be more clear.      Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? Write code to print out each character of the string my_str on a separate line.     Accumulator Variable: character_so_far ; Iterator Variable: char    Incorrect, there is no accumulator variable neccessary      Accumulator Variable: no variable needed ; Iterator Variable: c    Though no accumulator variable is needed, the iterator variable is not clear enough      Accumulator Variable: no variable needed ; Iterator Variable: char    Yes, there is no accumulator variable needed and the iterator variable is clear (char is a common short form of character)      "
},
{
  "id": "table-5",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#table-5",
  "type": "Table",
  "number": "9.12.1",
  "title": "",
  "body": "   Phrase  Accumulation Pattern    how many  count accumulation    how frequently    total  sum accumulation    a list of  list accumulation    concatenate  string accumulation    join together          "
},
{
  "id": "p-2316",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#p-2316",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check Your Understanding "
},
{
  "id": "question9_12_1",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_1",
  "type": "Checkpoint",
  "number": "9.12.2",
  "title": "",
  "body": " Does the following prompt require an accumulation pattern? If so, what words indicate that? For each string in wrds , add ‘ed' to the end of the word (to make the word past tense). Save these past tense words to a list called past_wrds .     Yes; \"save... to a list\"    Correct!      Yes; \"add 'ed' to the end of the word\"    Not quite - these words don't necessarily mean that we want to accumulate the new strings into a new variable.      No    In this case, an accumulation pattern would be good to use!    "
},
{
  "id": "question9_12_2",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_2",
  "type": "Checkpoint",
  "number": "9.12.3",
  "title": "",
  "body": " Does the following prompt require an accumulation pattern? If so, what words indicate that? Write code to sum up all of the numbers in the list seat_counts . Store that number in the variable total_seat_counts .     Yes; \"to sum up\"    Correct!      Yes; \"numbers in the list\"    Not quite - these words don't necessarily mean that we want to do sum accumulation.      No    In this case, an accumulation pattern would be good to use!    "
},
{
  "id": "question9_12_3",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_3",
  "type": "Checkpoint",
  "number": "9.12.4",
  "title": "",
  "body": " Does the following prompt require an accumulation pattern? If so, what words indicate that? Write code to print out each character of the string my_str on a separate line.     Yes; \"print out each\"    Incorrect, this prompt does not need to use the accumulation pattern.      Yes; \"on a separate line\"    Incorrect, this prompt does not need to use the accumulation pattern.      No    Correct!    "
},
{
  "id": "question9_12_4",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_4",
  "type": "Checkpoint",
  "number": "9.12.5",
  "title": "",
  "body": " Does the following prompt require an accumulation pattern? If so, what words indicate that? Write code that will count the number of vowels in the sentence s and assign the result to the variable num_vowels .     Yes; \"vowels in the sentence\"    Not quite - these words don't necessarily mean that we want to do sum accumulation.      Yes; \"code that will count\"    Correct!      No    In this case, an accumulation pattern would be good to use!    "
},
{
  "id": "question9_12_5",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_5",
  "type": "Checkpoint",
  "number": "9.12.6",
  "title": "",
  "body": " What type should be used for the accumulator variable in the following prompt? Write code that will count the number of vowels in the sentence s and assign the result to the variable num_vowels .     string    Incorrect, that is not the best type for the accumulator variable.      list    Incorrect, that is not the best type for the accumulator variable.      integer    Yes, because we want to keep track of a number.      none, there is no accumulator variable.    Incorrect, we will need an accumulator variable.    "
},
{
  "id": "question9_12_6",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_6",
  "type": "Checkpoint",
  "number": "9.12.7",
  "title": "",
  "body": " What sequence will you iterate through as you accumulate a result in the following prompt? Write code that will count the number of vowels in the sentence s and assign the result to the variable num_vowels .     num_vowels    No, that is the accumulator variable.      s    Yes, that is the sequence you will iterate through!      the prompt does not say    It is stated in the prompt.    "
},
{
  "id": "question9_12_7",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_7",
  "type": "Checkpoint",
  "number": "9.12.8",
  "title": "",
  "body": " What type should be used for the accumulator variable in the following prompt? For each string in wrds , add ‘ed' to the end of the word (to make the word past tense). Save these past tense words to a list called past_wrds .     string    Incorrect, that is not the best type for the accumulator variable.      list    Yes, because we want a new list at the end of the code.      integer    Incorrect, that is not the best type for the accumulator variable.      none, there is no accumulator variable.    Incorrect, we will need an accumulator variable.    "
},
{
  "id": "question9_12_8",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_8",
  "type": "Checkpoint",
  "number": "9.12.9",
  "title": "",
  "body": " What sequence will you iterate through as you accumulate a result in the following prompt? For each string in wrds , add ‘ed' to the end of the word (to make the word past tense). Save these past tense words to a list called past_wrds .     wrds    Yes, that is the sequence you will iterate through!      past_wrds    No, that is the accumulator variable.      the prompt does not say    It is stated in the prompt.    "
},
{
  "id": "question9_12_9",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_9",
  "type": "Checkpoint",
  "number": "9.12.10",
  "title": "",
  "body": " What type should be used for the accumulator variable in the following prompt? Write code to sum up all of the numbers in the list seat_counts . Store that number in the variable total_seat_counts .     string    Incorrect, that is not the best type for the accumulator variable.      list    Incorrect, that is not the best type for the accumulator variable.      integer    Yes, because we want to keep track of a number.      none, there is no accumulator variable.    Incorrect, we will need an accumulator variable.    "
},
{
  "id": "question9_12_10",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_10",
  "type": "Checkpoint",
  "number": "9.12.11",
  "title": "",
  "body": "  What sequence will you iterate through as you accumulate a result in the following prompt? Write code to sum up all of the numbers in the list seat_counts . Store that number in the variable total_seat_counts .      seat_counts    Yes, that is the sequence you will iterate through!      total_seat_counts    No, that is the accumulator variable.      the prompt does not say    It is stated in the prompt.    "
},
{
  "id": "question9_12_11",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_11",
  "type": "Checkpoint",
  "number": "9.12.12",
  "title": "",
  "body": " What type should be used for the accumulator variable in the following prompt? Write code to print out each character of the string my_str on a separate line.     string    Incorrect, there should not be an accumulator variable.      list    Incorrect, there should not be an accumulator variable.      integer    Incorrect, there should not be an accumulator variable.      none, there is no accumulator variable.    Correct, because this prompt does not require an accumulator pattern    "
},
{
  "id": "question9_12_12",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_12",
  "type": "Checkpoint",
  "number": "9.12.13",
  "title": "",
  "body": " What sequence will you iterate through as you accumulate a result in the following prompt? Write code to print out each character of the string my_str on a separate line.     my_str    Yes, that is the sequence you will iterate through!      my_str.split()    Close, but read the prompt again - did it say to iterate through words?      the prompt does not say    It is stated in the prompt.    "
},
{
  "id": "question9_12_13",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_13",
  "type": "Checkpoint",
  "number": "9.12.14",
  "title": "",
  "body": " Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? For each string in wrds , add ‘ed' to the end of the word (to make the word past tense). Save these past tense words to a list called past_wrds .     Accumulator Variable: wrds_so_far ; Iterator Variable: wrd    Yes, this is the most clear combination of accumulator and iterator variables.      Accumulator Variable: wrds_so_far ; Iterator Variable: x    The iterator variable is not the clearest here, something else may be better.      Accumulator Variable: changed_wrds ; Iterator Variable: ed    The iterator variable is not the clearest here    "
},
{
  "id": "question9_12_14",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_14",
  "type": "Checkpoint",
  "number": "9.12.15",
  "title": "",
  "body": " Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? Write code that will count the number of vowels in the sentence s and assign the result to the variable num_vowels .     Accumulator Variable: count_so_far ; Iterator Variable: l    Though the accumulator variable is good, the iterator variable is not very clear.      Accumulator Variable: total_so_far ; Iterator Variable: letter    Yes! Both the accumulator and iterator variable are clear.      Accumulator Variable: n_v ; Iterator Variable: letter    Though the iterator variable is good, the accumulator variable is not very clear.    "
},
{
  "id": "question9_12_15",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_15",
  "type": "Checkpoint",
  "number": "9.12.16",
  "title": "",
  "body": " Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? Write code to sum up all of the numbers in the list seat_counts . Store that number in the variable total_seat_counts .     Accumulator Variable: total_so_far ; Iterator Variable: seat    Though the accumulator variable is good, the iterator variable is not clear enough.      Accumulator Variable: total_seats_so_far ; Iterator Variable: seat_count    Yes, this is the most clear combination.      Accumulator Variable: count ; Iterator Variable: n    Neither the accumulator nor iterator variable are clear enough. The accumulator variable is better, but could be more clear.    "
},
{
  "id": "question9_12_16",
  "level": "2",
  "url": "transforming-sequences_accumulator-pattern-strategies.html#question9_12_16",
  "type": "Checkpoint",
  "number": "9.12.17",
  "title": "",
  "body": " Which of these are good alternatives to the accumulator variable and iterator variable names for the following prompt? Write code to print out each character of the string my_str on a separate line.     Accumulator Variable: character_so_far ; Iterator Variable: char    Incorrect, there is no accumulator variable neccessary      Accumulator Variable: no variable needed ; Iterator Variable: c    Though no accumulator variable is needed, the iterator variable is not clear enough      Accumulator Variable: no variable needed ; Iterator Variable: char    Yes, there is no accumulator variable needed and the iterator variable is clear (char is a common short form of character)    "
},
{
  "id": "transforming-sequences_dont-mutate-a-list-that-you-are-iterating-through",
  "level": "1",
  "url": "transforming-sequences_dont-mutate-a-list-that-you-are-iterating-through.html",
  "type": "Section",
  "number": "9.13",
  "title": "Don’t Mutate A List That You Are Iterating Through",
  "body": " Don't Mutate A List That You Are Iterating Through  So far we've shown you how to iterate through a list:   colors = [\"Red\", \"Orange\", \"Yellow\", \"Green\", \"Blue\", \"Indigo\", \"Violet\"] for color in colors: print(color)   As well as accumulate a list by appending or deleting items!   colors = [\"Red\", \"Orange\", \"Yellow\", \"Green\", \"Blue\", \"Indigo\", \"Violet\"] initials = [] for color in colors: initials.append(color[0]) print(initials)   You may be tempted now to iterate through a list and accumulate some data into it or delete data from it, however that often becomes very confusing. In the following code we will filter out all words that begin with P, B, or T.   colors = [\"Red\", \"Orange\", \"Yellow\", \"Green\", \"Blue\", \"Indigo\", \"Violet\", \"Purple\", \"Pink\", \"Brown\", \"Teal\", \"Turquois\", \"Peach\", \"Beige\"] for position in range(len(colors)): color = colors[position] print(color) if color[0] in [\"P\", \"B\", \"T\"]: del colors[position] print(colors)   In the code above, we iterated through range(len(colors)) because it made it easier to locate the position of the item in the list and delete it. However, we run into a problem because as we delete content from the list, the list becomes shorter. Not only do we have an issue indexing on line 4 after a certain point, but we also skip over some strings because they've been moved around. To see this more easily, try walking through this code in codelens. Note that each time we iterate through the list python does not reevaluate the iterator variable.  We can also try to accumulate a list that we're iterating through as well. What do you think will happen here?   colors = [\"Red\", \"Orange\", \"Yellow\", \"Green\", \"Blue\", \"Indigo\", \"Violet\"] for color in colors: if color[0] in [\"A\", \"E\", \"I\", \"O\", \"U\"]: colors.append(color) print(colors)   Though there is not an error, the behavior may not be expected. When we come across a color that begins with a vowel, that color is added to the end of the list. Again, because Python does not reevaluate the iterator variable we are not stuck adding colors that start with vowels for an infinite number of times. That's good in this case! Ultimately though, it can be confusing to write code like this. We recommend not iterating over a list that you will be mutating within the for loop.  "
},
{
  "id": "transforming-sequences_summary",
  "level": "1",
  "url": "transforming-sequences_summary.html",
  "type": "Section",
  "number": "9.14",
  "title": "Summary",
  "body": " Summary    for loop traversal ( for )  Traversing a string or a list means accessing each character in the string or item in the list, one at a time. For example, the following for loop:   for ix in 'Example': ...   executes the body of the loop 7 times with different values of ix each time.    range  A function that produces a list of numbers. For example, range(5) , produces a list of five numbers, starting with 0, [0, 1, 2, 3, 4] .    pattern  A sequence of statements, or a style of coding something that has general applicability in a number of different situations. Part of becoming a mature programmer is to learn and establish the patterns and algorithms that form your toolkit.    index  A variable or value used to select a member of an ordered collection, such as a character from a string, or an element from a list.    traverse  To iterate through the elements of a collection, performing a similar operation on each.    accumulator pattern  A pattern where the program initializes an accumulator variable and then changes it during each iteration, accumulating a final result.    "
},
{
  "id": "nested-data_introduction-nested-data-and-nested-iteration",
  "level": "1",
  "url": "nested-data_introduction-nested-data-and-nested-iteration.html",
  "type": "Section",
  "number": "10.1",
  "title": "Introduction: Nested Data and Nested Iteration",
  "body": " Introduction: Nested Data and Nested Iteration   Lists with Complex Items  The lists we have seen so far have had numbers or strings as items. We've snuck in a few more complex items, but without ever explicitly discussing what it meant to have more complex items.  In fact, the items in a list can be any type of python object. For example, we can have a list of lists.   nested1 = [['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']] print(nested1[0]) print(len(nested1)) nested1.append(['i']) print(\"-------\") for L in nested1: print(L)   Line 2 prints out the first item from the list that nested1 is bound to. That item is itself a list, so it prints out with square brackets. It has length 3, which prints out on line 3. Line 4 adds a new item to nested1 . It is a list with one element, ‘i' (it a list with one element, it's not just the string ‘i').  Codelens gives a you a reference diagram, a visual display of the contents of nested1.   nested1 = [['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']] print(nested1[0]) print(len(nested1)) nested1.append(['i']) for L in nested1: print(L)   When you get to step 4 of the execution, take a look at the object that variable nested1 points to. It is a list of three items, numbered 0, 1, and 2. The item in slot 1 is small enough that it is shown right there as a list containing items d and e . The item in slot 0 didn't quite fit, so it is shown in the figure as a pointer to another separate list; same thing for the item in slot 2, the list ['f', 'g', 'h'] .  There's no special meaning to whether the list is shown embedded or with a pointer to it: that's just CodeLens making the best use of space that it can. In fact, if you go on to step 5, you'll see that, with the addition of a fourth item, the list [‘i'], CodeLens has chosen to show all four lists embedded in the top-level list.  With a nested list, you can make complex expressions to get or set a value in a sub-list.   nested1 = [['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']] y = nested1[1] print(y) print(y[0]) print([10, 20, 30][1]) print(nested1[1][0])   Lines 1-4 above probably look pretty natural to you. Line 5 illustrates the left to right processing of expressions. nested1[1] evaluates to the second inner list, so nested1[1][1] evaluates to its second element, 'e' . Line 6 is just a reminder that you index into a literal list, one that is written out, the same way as you can index into a list referred to by a variable. [10, 20, 30] creates a list. [1] indexes into that list, pulling out the second item, 20.  Just as with a function call where the return value can be thought of as replacing the text of the function call in an expression, you can evaluate an expression like that in line 7 from left to right. Because the value of nested1[1] is the list ['d', 'e'] , nested1[1][0] is the same as ['d', 'e'][0] . So line 7 is equivalent to lines 2 and 4; it is a simpler way of pulling out the first item from the second list.  At first, expressions like that on line 7 may look foreign. They will soon feel more natural, and you will end up using them a lot. Once you are comfortable with them, the only time you will write code like lines 2-4 is when you aren't quite sure what your data's structure is, and so you need to incrementally write and debug your code. Often, you will start by writing code like lines 2-4, then, once you're sure it's working, replace it with something like line 7.  You can change values in such lists in the usual ways. You can even use complex expressions to change values. Consider the following   nested1 = [['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h'], ['i']] nested1[1] = [1, 2, 3] nested1[1][0] = 100   The complex items in a list do not have to be lists. They can be tuples or dictionaries. The items in a list do not all have to be the same type, but you will drive yourself crazy if you have lists of objects of varying types. Save yourself some headaches and don't do that. Here's a list of dictionaries and some operations on them. Take a look at its visual representation in codelens.   nested2 = [{'a': 1, 'b': 3}, {'a': 5, 'c': 90, 5: 50}, {'b': 3, 'c': \"yes\"}]   Try practicing some operations to get or set values in a list of dictionaries.   nested2 = [{'a': 1, 'b': 3}, {'a': 5, 'c': 90, 5: 50}, {'b': 3, 'c': \"yes\"}] #write code to print the value associated with key 'c' in the second dictionary (90) #write code to print the value associated with key 'b' in the third dictionary #add a fourth dictionary add the end of the list; print something to check your work. #change the value associated with 'c' in the third dictionary from \"yes\" to \"no\"; print something to check your work   You can even have a list of functions (!).   def square(x): return x*x L = [square, abs, lambda x: x+1] print(\"****names****\") for f in L: print(f) print(\"****call each of them****\") for f in L: print(f(-2)) print(\"****just the first one in the list****\") print(L[0]) print(L[0](3))   Here, L is a list with three items. All those items are functions. The first is the function square that is defined on lines 1 and 2. The second is the built-in python function abs. The third is an anonymous function that returns one more than its input.  In the first for loop, we do not call the functions, we just output their printed representations. The output <function square> confirms that square truly is a function object. For some reason, in our online environment, it's not able to produce a nice printed representation of the built-in function abs, so it just outputs <unknown>  In the second for loop, we call each of the functions, passing in the value -2 each time and printing whatever value the function returns.  The last two lines just emphasize that there's nothing special about lists of functions. They follow all the same rules for how python treats any other list. Because L[0] picks out the function square, L[0](3) calls the function square, passing it the parameter 3.  Step through it in Codelens if that's not all clear to you yet.   def square(x): return x*x L = [square, abs] print(\"****names****\") for f in L: print(f) print(\"****call each of them****\") for f in L: print(f(-2)) print(\"****just the first one in the list****\") print(L[0]) print(L[0](3))    Check Your Understanding    1. Below, we have provided a list of lists. Use indexing to assign the element ‘horse' to the variable name idx1 .   animals = [['cat', 'dog', 'mouse'], ['horse', 'cow', 'goat'], ['cheetah', 'giraffe', 'rhino']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(idx1, 'horse', \"Testing that idx1 was assigned correctly.\") myTests().main()    2. Using indexing, retrieve the string ‘willow' from the list and assign that to the variable plant .   data = ['bagel', 'cream cheese', 'breakfast', 'grits', 'eggs', 'bacon', [34, 9, 73, []], [['willow', 'birch', 'elm'], 'apple', 'peach', 'cherry']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(plant, 'willow', \"Testing that plant has the correct value.\") myTests().main()    "
},
{
  "id": "p-2472",
  "level": "2",
  "url": "nested-data_introduction-nested-data-and-nested-iteration.html#p-2472",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check Your Understanding "
},
{
  "id": "ac10_1_5",
  "level": "2",
  "url": "nested-data_introduction-nested-data-and-nested-iteration.html#ac10_1_5",
  "type": "Checkpoint",
  "number": "10.1.1",
  "title": "",
  "body": " 1. Below, we have provided a list of lists. Use indexing to assign the element ‘horse' to the variable name idx1 .   animals = [['cat', 'dog', 'mouse'], ['horse', 'cow', 'goat'], ['cheetah', 'giraffe', 'rhino']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(idx1, 'horse', \"Testing that idx1 was assigned correctly.\") myTests().main()  "
},
{
  "id": "ac10_1_6",
  "level": "2",
  "url": "nested-data_introduction-nested-data-and-nested-iteration.html#ac10_1_6",
  "type": "Checkpoint",
  "number": "10.1.2",
  "title": "",
  "body": " 2. Using indexing, retrieve the string ‘willow' from the list and assign that to the variable plant .   data = ['bagel', 'cream cheese', 'breakfast', 'grits', 'eggs', 'bacon', [34, 9, 73, []], [['willow', 'birch', 'elm'], 'apple', 'peach', 'cherry']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(plant, 'willow', \"Testing that plant has the correct value.\") myTests().main()  "
},
{
  "id": "nested-data_nested-dictionaries",
  "level": "1",
  "url": "nested-data_nested-dictionaries.html",
  "type": "Section",
  "number": "10.2",
  "title": "Nested Dictionaries",
  "body": " Nested Dictionaries  Just as lists can contain items of any type, the value associated with a key in a dictionary can also be an object of any type. In particular, it is often useful to have a list or a dictionary as a value in a dictionary. And of course, those lists or dictionaries can also contain lists and dictionaries. There can be many layers of nesting.  Only the values in dictionaries can be objects of arbitrary type. The keys in dictionaries must be one of the immutable data types (numbers, strings, tuples).   Check Your Understanding    Which of the following is a legal assignment statement, after the following code executes?   d = {'key1': {'a': 5, 'c': 90, 5: 50}, 'key2':{'b': 3, 'c': \"yes\"}}      d[5] = {1: 2, 3: 4}    5 is a valid key; {1:2, 3:4} is a dictionary with two keys, and is a valid value to associate with key 5.      d[{1:2, 3:4}] = 5    Dictionary keys must be of immutable types. A dictionary can't be used as a key in a dictionary.      d['key1']['d'] = d['key2']    d['key2'] is {'b': 3, 'c': \"yes\"}, a python object. It can be bound to the key 'd' in a dictionary {'a': 5, 'c': 90, 5: 50}      d[key2] = 3    key2 is an unbound variable here. d['key2'] would be OK.      1. Extract the value associated with the key color and assign it to the variable color . Do not hard code this.   info = {'personal_data': {'name': 'Lauren', 'age': 20, 'major': 'Information Science', 'physical_features': {'color': {'eye': 'blue', 'hair': 'brown'}, 'height': \"5'8\"} }, 'other': {'favorite_colors': ['purple', 'green', 'blue'], 'interested_in': ['social media', 'intellectual property', 'copyright', 'music', 'books'] } } ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(color, {'eye': 'blue', 'hair': 'brown'}, \"Testing that color has the correct value.\") myTests().main()   "
},
{
  "id": "p-2477",
  "level": "2",
  "url": "nested-data_nested-dictionaries.html#p-2477",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check Your Understanding "
},
{
  "id": "question10_2_1",
  "level": "2",
  "url": "nested-data_nested-dictionaries.html#question10_2_1",
  "type": "Checkpoint",
  "number": "10.2.1",
  "title": "",
  "body": " Which of the following is a legal assignment statement, after the following code executes?   d = {'key1': {'a': 5, 'c': 90, 5: 50}, 'key2':{'b': 3, 'c': \"yes\"}}      d[5] = {1: 2, 3: 4}    5 is a valid key; {1:2, 3:4} is a dictionary with two keys, and is a valid value to associate with key 5.      d[{1:2, 3:4}] = 5    Dictionary keys must be of immutable types. A dictionary can't be used as a key in a dictionary.      d['key1']['d'] = d['key2']    d['key2'] is {'b': 3, 'c': \"yes\"}, a python object. It can be bound to the key 'd' in a dictionary {'a': 5, 'c': 90, 5: 50}      d[key2] = 3    key2 is an unbound variable here. d['key2'] would be OK.    "
},
{
  "id": "ac10_2_1",
  "level": "2",
  "url": "nested-data_nested-dictionaries.html#ac10_2_1",
  "type": "Checkpoint",
  "number": "10.2.2",
  "title": "",
  "body": " 1. Extract the value associated with the key color and assign it to the variable color . Do not hard code this.   info = {'personal_data': {'name': 'Lauren', 'age': 20, 'major': 'Information Science', 'physical_features': {'color': {'eye': 'blue', 'hair': 'brown'}, 'height': \"5'8\"} }, 'other': {'favorite_colors': ['purple', 'green', 'blue'], 'interested_in': ['social media', 'intellectual property', 'copyright', 'music', 'books'] } } ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(color, {'eye': 'blue', 'hair': 'brown'}, \"Testing that color has the correct value.\") myTests().main()  "
},
{
  "id": "nested-data_processing-json-results",
  "level": "1",
  "url": "nested-data_processing-json-results.html",
  "type": "Section",
  "number": "10.3",
  "title": "Processing JSON results",
  "body": " Processing JSON results  JSON stands for JavaScript Object Notation. It looks a lot like the representation of nested dictionaries and lists in python when we write them out as literals in a program, but with a few small differences (e.g., the word null instead of None). When your program receives a JSON-formatted string, generally you will want to convert it into a python object, a list or a dictionary.  Again, python provides a module for doing this. The module is called json. We will be using two functions in this module, loads and dumps .  json.loads() takes a string as input and produces a python object (a dictionary or a list) as output.  Consider, for example, some data that we might get from Apple's iTunes, in the JSON format:   import json a_string = '\\n\\n\\n{\\n \"resultCount\":25,\\n \"results\": [\\n{\"wrapperType\":\"track\", \"kind\":\"podcast\", \"collectionId\":10892}]}' print(a_string) d = json.loads(a_string) print(\"------\") print(type(d)) print(d.keys()) print(d['resultCount']) # print(a_string['resultCount'])   The other function we will use is dumps . It does the inverse of loads . It takes a python object, typically a dictionary or a list, and returns a string, in JSON format. It has a few other parameters. Two useful parameters are sort_keys and indent. When the value True is passed for the sort_keys parameter, the keys of dictionaries are output in alphabetic order with their values. The indent parameter expects an integer. When it is provided, dumps generates a string suitable for displaying to people, with newlines and indentation for nested lists or dictionaries. For example, the following function uses json.dumps to make a human-readable printout of a nested data structure.   import json def pretty(obj): return json.dumps(obj, sort_keys=True, indent=2) d = {'key1': {'c': True, 'a': 90, '5': 50}, 'key2':{'b': 3, 'c': \"yes\"}} print(d) print('--------') print(pretty(d))    Check Your Understanding    Because we can only write strings into a file, if we wanted to convert a dictionary d into a json-formatted string so that we could store it in a file, what would we use?     json.loads(d)    loads turns a json-formatted string into a list or dictionary      json.dumps(d)    dumps turns a list or dictionary into a json-formatted string      d.json()    .json() tries to invoke the json method, but that method is not defined for dictionaries      Say we had a JSON string in the following format. How would you convert it so that it is a python list?   entertainment = \"\"\"[{\"Library Data\": {\"count\": 3500, \"rows\": 10, \"locations\": 3}}, {\"Movie Theater Data\": {\"count\": 8, \"rows\": 25, \"locations\": 2}}]\"\"\"      entertainment.json()    The .json() method is not defined for strings.      json.dumps(entertainment)    dumps (dump to string) turns a list or dictionary into a json-formatted string      json.loads(entertainment)    loads (load from string) turns a json-formatted string into a list or dictionary     "
},
{
  "id": "p-2493",
  "level": "2",
  "url": "nested-data_processing-json-results.html#p-2493",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check Your Understanding "
},
{
  "id": "question10_3_1",
  "level": "2",
  "url": "nested-data_processing-json-results.html#question10_3_1",
  "type": "Checkpoint",
  "number": "10.3.1",
  "title": "",
  "body": " Because we can only write strings into a file, if we wanted to convert a dictionary d into a json-formatted string so that we could store it in a file, what would we use?     json.loads(d)    loads turns a json-formatted string into a list or dictionary      json.dumps(d)    dumps turns a list or dictionary into a json-formatted string      d.json()    .json() tries to invoke the json method, but that method is not defined for dictionaries    "
},
{
  "id": "question10_3_2",
  "level": "2",
  "url": "nested-data_processing-json-results.html#question10_3_2",
  "type": "Checkpoint",
  "number": "10.3.2",
  "title": "",
  "body": " Say we had a JSON string in the following format. How would you convert it so that it is a python list?   entertainment = \"\"\"[{\"Library Data\": {\"count\": 3500, \"rows\": 10, \"locations\": 3}}, {\"Movie Theater Data\": {\"count\": 8, \"rows\": 25, \"locations\": 2}}]\"\"\"      entertainment.json()    The .json() method is not defined for strings.      json.dumps(entertainment)    dumps (dump to string) turns a list or dictionary into a json-formatted string      json.loads(entertainment)    loads (load from string) turns a json-formatted string into a list or dictionary    "
},
{
  "id": "nested-data_nested-iteration",
  "level": "1",
  "url": "nested-data_nested-iteration.html",
  "type": "Section",
  "number": "10.4",
  "title": "Nested Iteration",
  "body": " Nested Iteration  When you have nested data structures, especially lists and\/or dictionaries, you will frequently need nested for loops to traverse them.   nested1 = [['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']] for x in nested1: print(\"level1: \") for y in x: print(\" level2: \" + y)   Line 3 executes once for each top-level list, three times in all. With each sub-list, line 5 executes once for each item in the sub-list. Try stepping through it in Codelens to make sure you understand what the nested iteration does.   nested1 = [['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']] for x in nested1: print(\"level1: \") for y in x: print(\" level2: \" + y)    Check Your Understanding    Now try rearranging these code fragments to make a function that counts all the leaf items in a nested list like nested1 above, the items at the lowest level of nesting (8 of them in nested1).    def count_leaves(n):    count = 0    for L in n:    for x in L:    count = count + 1    return count     2. Below, we have provided a list of lists that contain information about people. Write code to create a new list that contains every person's last name, and save that list as last_names .   info = [['Tina', 'Turner', 1939, 'singer'], ['Matt', 'Damon', 1970, 'actor'], ['Kristen', 'Wiig', 1973, 'comedian'], ['Michael', 'Phelps', 1985, 'swimmer'], ['Barack', 'Obama', 1961, 'president']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(last_names, ['Turner', 'Damon', 'Wiig', 'Phelps', 'Obama'], \"Testing that last_names was created correctly.\") myTests().main()    3. Below, we have provided a list of lists named L . Use nested iteration to save every string containing b into a new list named b_strings .   L = [['apples', 'bananas', 'oranges', 'blueberries', 'lemons'], ['carrots', 'peas', 'cucumbers', 'green beans'], ['root beer', 'smoothies', 'cranberry juice']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(b_strings, ['bananas', 'blueberries', 'cucumbers', 'green beans', 'root beer', 'cranberry juice'], \"Testing that b_strings was created correctly.\") myTests().main()   "
},
{
  "id": "p-2510",
  "level": "2",
  "url": "nested-data_nested-iteration.html#p-2510",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check Your Understanding "
},
{
  "id": "pp10_4_1",
  "level": "2",
  "url": "nested-data_nested-iteration.html#pp10_4_1",
  "type": "Checkpoint",
  "number": "10.4.1",
  "title": "",
  "body": " Now try rearranging these code fragments to make a function that counts all the leaf items in a nested list like nested1 above, the items at the lowest level of nesting (8 of them in nested1).    def count_leaves(n):    count = 0    for L in n:    for x in L:    count = count + 1    return count   "
},
{
  "id": "ac10_4_2",
  "level": "2",
  "url": "nested-data_nested-iteration.html#ac10_4_2",
  "type": "Checkpoint",
  "number": "10.4.2",
  "title": "",
  "body": " 2. Below, we have provided a list of lists that contain information about people. Write code to create a new list that contains every person's last name, and save that list as last_names .   info = [['Tina', 'Turner', 1939, 'singer'], ['Matt', 'Damon', 1970, 'actor'], ['Kristen', 'Wiig', 1973, 'comedian'], ['Michael', 'Phelps', 1985, 'swimmer'], ['Barack', 'Obama', 1961, 'president']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(last_names, ['Turner', 'Damon', 'Wiig', 'Phelps', 'Obama'], \"Testing that last_names was created correctly.\") myTests().main()  "
},
{
  "id": "ac10_4_3",
  "level": "2",
  "url": "nested-data_nested-iteration.html#ac10_4_3",
  "type": "Checkpoint",
  "number": "10.4.3",
  "title": "",
  "body": " 3. Below, we have provided a list of lists named L . Use nested iteration to save every string containing b into a new list named b_strings .   L = [['apples', 'bananas', 'oranges', 'blueberries', 'lemons'], ['carrots', 'peas', 'cucumbers', 'green beans'], ['root beer', 'smoothies', 'cranberry juice']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(b_strings, ['bananas', 'blueberries', 'cucumbers', 'green beans', 'root beer', 'cranberry juice'], \"Testing that b_strings was created correctly.\") myTests().main()  "
},
{
  "id": "nested-data_structuring-nested-data",
  "level": "1",
  "url": "nested-data_structuring-nested-data.html",
  "type": "Section",
  "number": "10.5",
  "title": "Structuring Nested Data",
  "body": " Structuring Nested Data  When constructing your own nested data, it is a good idea to keep the structure consistent across each level. For example, if you have a list of dictionaries, then each dictionary should have the same structure, meaning the same keys and the same type of value associated with a particular key in all the dictionaries. The reason for this is because any deviation in the structure that is used will require extra code to handle those special cases. The more the structure deviates, the more you will have to use special cases.  For example, let's reconsider this nested iteration, but suppose not all the items in the outer list are lists.   nested1 = [1, 2, ['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']] for x in nested1: print(\"level1: \") for y in x: print(f\" level2: {y}\")   Now the nested iteration fails.  We can solve this with special casing, a conditional that checks the type.   nested1 = [1, 2, ['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']] for x in nested1: print(\"level1: \") if type(x) is list: for y in x: print(f\" level2: {y}\") else: print(x)   You can imagine how many special case if-thens we'd need, and how complicated the code would get, if we had many layers of nesting but not always a consistent structure.  "
},
{
  "id": "nested-data_deep-and-shallow-copies",
  "level": "1",
  "url": "nested-data_deep-and-shallow-copies.html",
  "type": "Section",
  "number": "10.6",
  "title": "Deep and Shallow Copies",
  "body": " Deep and Shallow Copies  Earlier when we discussed cloning and aliasing lists we had mentioned that simply cloning a list using [:] would take care of any issues with having two lists unintentionally connected to each other. That was definitely true for making shallow copies (copying a list at the highest level), but as we get into nested data, and nested lists in particular, the rules become a bit more complicated. We can have second-level aliasing in these cases, which means we need to make deep copies.  When you copy a nested list, you do not also get copies of the internal lists. This means that if you perform a mutation operation on one of the original sublists, the copied version will also change. We can see this happen in the following nested list, which only has two levels.   original = [['dogs', 'puppies'], ['cats', \"kittens\"]] copied_version = original[:] print(copied_version) print(copied_version is original) print(copied_version == original) original[0].append([\"canines\"]) print(original) print(\"-------- Now look at the copied version -----------\") print(copied_version)   Assuming that you don't want to have aliased lists inside of your nested list, then you'll need to perform nested iteration.   original = [['dogs', 'puppies'], ['cats', \"kittens\"]] copied_outer_list = [] for inner_list in original: copied_inner_list = [] for item in inner_list: copied_inner_list.append(item) copied_outer_list.append(copied_inner_list) print(copied_outer_list) original[0].append([\"canines\"]) print(original) print(\"-------- Now look at the copied version -----------\") print(copied_outer_list)   Or, equivalently, you could take advantage of the slice operator to do the copying of the inner list.   original = [['dogs', 'puppies'], ['cats', \"kittens\"]] copied_outer_list = [] for inner_list in original: copied_inner_list = inner_list[:] copied_outer_list.append(copied_inner_list) print(copied_outer_list) original[0].append([\"canines\"]) print(original) print(\"-------- Now look at the copied version -----------\") print(copied_outer_list)   This process above works fine when there are only two layers or levels in a nested list. However, if we want to make a copy of a nested list that has more than two levels, then we recommend using the copy module. In the copy module there is a method called deepcopy that will take care of the operation for you.   import copy original = [['canines', ['dogs', 'puppies']], ['felines', ['cats', 'kittens']]] shallow_copy_version = original[:] deeply_copied_version = copy.deepcopy(original) original.append(\"Hi there\") original[0].append([\"marsupials\"]) print(\"-------- Original -----------\") print(original) print(\"-------- deep copy -----------\") print(deeply_copied_version) print(\"-------- shallow copy -----------\") print(shallow_copy_version)   "
},
{
  "id": "nested-data_chapter-assessment",
  "level": "1",
  "url": "nested-data_chapter-assessment.html",
  "type": "Section",
  "number": "10.7",
  "title": "Chapter Assessment",
  "body": " Chapter Assessment   The variable nested contains a nested list. Assign ‘snake' to the variable output using indexing.   nested = [['dog', 'cat', 'horse'], ['frog', 'turtle', 'snake', 'gecko'], ['hamster', 'gerbil', 'rat', 'ferret']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(output, \"snake\", \"Testing that output is assigned to correct value\") myTests().main()    Below, a list of lists is provided. Use in and not in tests to create variables with Boolean values. See comments for further instructions.   lst = [['apple', 'orange', 'banana'], [5, 6, 7, 8, 9.9, 10], ['green', 'yellow', 'purple', 'red']] #Test to see if 'yellow' is in the third list of lst. Save to variable ``yellow`` #Test to see if 4 is in the second list of lst. Save to variable ``four`` #Test to see if 'orange' is in the first element of lst. Save to variable ``orange`` ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwo(self): self.assertEqual(yellow, True, \"Testing that yellow is assigned to correct value\") def testTwoB(self): self.assertEqual(four, False, \"Testing that four is assigned to correct value\") def testTwoC(self): self.assertEqual(orange, True, \"Testing that orange is assigned to correct value\") myTests().main()    Below, we've provided a list of lists. Use in statements to create variables with Boolean values - see the ActiveCode window for further directions.   L = [[5, 8, 7], ['hello', 'hi', 'hola'], [6.6, 1.54, 3.99], ['small', 'large']] # Test if 'hola' is in the list L. Save to variable name test1 # Test if [5, 8, 7] is in the list L. Save to variable name test2 # Test if 6.6 is in the third element of list L. Save to variable name test3 ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testA(self): self.assertEqual(test1, False, \"Testing that test1 has the correct value.\") def testB(self): self.assertEqual(test2, True, \"Testing that test2 has the correct value.\") def testC(self): self.assertEqual(test3, True, \"Testing that test3 has the correct value.\") myTests().main()    Provided is a nested data structure. Follow the instructions in the comments below. Do not hard code.   nested = {'data': ['finding', 23, ['exercises', 'hangout', 34]], 'window': ['part', 'whole', [], 'sum', ['math', 'calculus', 'algebra', 'geometry', 'statistics',['physics', 'chemistry', 'biology']]]} # Check to see if the string 'data' is a key in nested, if it is, assign True to the variable data, otherwise assign False. # Check to see if the integer 24 is in the value of the key data, if it is then assign to the variable twentyfour the value of True, otherwise False. # Check to see that the string 'whole' is not in the value of the key window. If it's not, then assign to the variable whole the value of True, otherwise False. # Check to see if the string 'physics' is a key in the dictionary nested. If it is, assign to the variable physics, the value of True, otherwise False. ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(data, True, \"Testing that data has the correct value.\") def testTwo(self): self.assertEqual(twentyfour, False, \"Testing that twentyfour has the correct value.\") def testThree(self): self.assertEqual(whole, False, \"Testing that whole has the correct value.\") def testFour(self): self.assertEqual(physics, False, \"Testing that physics has the correct value.\") myTests().main()    The variable nested_d contains a nested dictionary with the gold medal counts for the top four countries in the past three Olympics. Assign the value of Great Britain's gold medal count from the London Olympics to the variable london_gold . Use indexing. Do not hardcode.   nested_d = {'Beijing':{'China':51, 'USA':36, 'Russia':22, 'Great Britain':19}, 'London':{'USA':46, 'China':38, 'Great Britain':29, 'Russia':22}, 'Rio':{'USA':35, 'Great Britain':22, 'China':20, 'Germany':13}} ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(london_gold, 29, \"Testing that london_gold is assigned to correct value\") myTests().main()    Below, we have provided a nested dictionary. Index into the dictionary to create variables that we have listed in the ActiveCode window.   sports = {'swimming': ['butterfly', 'breaststroke', 'backstroke', 'freestyle'], 'diving': ['springboard', 'platform', 'synchronized'], 'track': ['sprint', 'distance', 'jumps', 'throws'], 'gymnastics': {'women':['vault', 'floor', 'uneven bars', 'balance beam'], 'men': ['vault', 'parallel bars', 'floor', 'rings']}} # Assign the string 'backstroke' to the name v1 # Assign the string 'platform' to the name v2 # Assign the list ['vault', 'floor', 'uneven bars', 'balance beam'] to the name v3 # Assign the string 'rings' to the name v4 ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testA(self): self.assertEqual(v1, 'backstroke', \"Testing that v1 was created correctly.\") self.assertNotIn(\"v1 = 'backstroke'\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") self.assertNotIn('v1 = \"backstroke\"', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") def testB(self): self.assertEqual(v2, 'platform', \"Testing that v2 was created correctly.\") self.assertNotIn('v2 = \"platform\"', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") self.assertNotIn(\"v2 = 'platform'\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") def testC(self): self.assertEqual(v3, ['vault', 'floor', 'uneven bars', 'balance beam'], \"Testing that v3 was created correctly.\") self.assertNotIn(\"v3 = ['vault', 'floor', 'uneven bars', 'balance beam']\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") def testD(self): self.assertEqual(v4, 'rings', \"Testing that v4 was created correctly.\") self.assertNotIn(\"v4 = 'rings'\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") self.assertNotIn('v4 = \"rings\"', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") myTests().main()    Given the dictionary, nested_d , save the medal count for the USA from all three Olympics in the dictionary to the list US_count .   nested_d = {'Beijing':{'China':51, 'USA':36, 'Russia':22, 'Great Britain':19}, 'London':{'USA':46, 'China':38, 'Great Britain':29, 'Russia':22}, 'Rio':{'USA':35, 'Great Britain':22, 'China':20, 'Germany':13}} US_count = [] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFour(self): self.assertEqual(sorted(US_count), [35, 36, 46], \"Testing that US_count is assigned to correct values.\") myTests().main()    Iterate through the contents of l_of_l and assign the third element of sublist to a new list called third .   l_of_l = [['purple', 'mauve', 'blue'], ['red', 'maroon', 'blood orange', 'crimson'], ['sea green', 'cornflower', 'lavender', 'indigo'], ['yellow', 'amarillo', 'mac n cheese', 'golden rod']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(third, ['blue', 'blood orange', 'lavender', 'mac n cheese'], \"Testing that third has the correct list assigned to it.\") myTests().main()    Given below is a list of lists of athletes. Create a list, t , that saves only the athlete's name if it contains the letter t . If it does not contain the letter t , save the athlete name into list other .   athletes = [['Phelps', 'Lochte', 'Schooling', 'Ledecky', 'Franklin'], ['Felix', 'Bolt', 'Gardner', 'Eaton'], ['Biles', 'Douglas', 'Hamm', 'Raisman', 'Mikulak', 'Dalton']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFive(self): self.assertEqual(t, ['Lochte', 'Bolt', 'Eaton', 'Dalton'], \"Testing that t is assigned to correct values.\") def testFiveA(self): self.assertEqual(other, ['Phelps', 'Schooling', 'Ledecky', 'Franklin', 'Felix', 'Gardner', 'Biles', 'Douglas', 'Hamm', 'Raisman', 'Mikulak'], \"Testing that other is assigned to correct values.\") myTests().main()   "
},
{
  "id": "ac17_6_1",
  "level": "2",
  "url": "nested-data_chapter-assessment.html#ac17_6_1",
  "type": "Checkpoint",
  "number": "10.7.1",
  "title": "",
  "body": " The variable nested contains a nested list. Assign ‘snake' to the variable output using indexing.   nested = [['dog', 'cat', 'horse'], ['frog', 'turtle', 'snake', 'gecko'], ['hamster', 'gerbil', 'rat', 'ferret']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(output, \"snake\", \"Testing that output is assigned to correct value\") myTests().main()  "
},
{
  "id": "ac17_6_2",
  "level": "2",
  "url": "nested-data_chapter-assessment.html#ac17_6_2",
  "type": "Checkpoint",
  "number": "10.7.2",
  "title": "",
  "body": " Below, a list of lists is provided. Use in and not in tests to create variables with Boolean values. See comments for further instructions.   lst = [['apple', 'orange', 'banana'], [5, 6, 7, 8, 9.9, 10], ['green', 'yellow', 'purple', 'red']] #Test to see if 'yellow' is in the third list of lst. Save to variable ``yellow`` #Test to see if 4 is in the second list of lst. Save to variable ``four`` #Test to see if 'orange' is in the first element of lst. Save to variable ``orange`` ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwo(self): self.assertEqual(yellow, True, \"Testing that yellow is assigned to correct value\") def testTwoB(self): self.assertEqual(four, False, \"Testing that four is assigned to correct value\") def testTwoC(self): self.assertEqual(orange, True, \"Testing that orange is assigned to correct value\") myTests().main()  "
},
{
  "id": "ac17_6_3",
  "level": "2",
  "url": "nested-data_chapter-assessment.html#ac17_6_3",
  "type": "Checkpoint",
  "number": "10.7.3",
  "title": "",
  "body": " Below, we've provided a list of lists. Use in statements to create variables with Boolean values - see the ActiveCode window for further directions.   L = [[5, 8, 7], ['hello', 'hi', 'hola'], [6.6, 1.54, 3.99], ['small', 'large']] # Test if 'hola' is in the list L. Save to variable name test1 # Test if [5, 8, 7] is in the list L. Save to variable name test2 # Test if 6.6 is in the third element of list L. Save to variable name test3 ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testA(self): self.assertEqual(test1, False, \"Testing that test1 has the correct value.\") def testB(self): self.assertEqual(test2, True, \"Testing that test2 has the correct value.\") def testC(self): self.assertEqual(test3, True, \"Testing that test3 has the correct value.\") myTests().main()  "
},
{
  "id": "ac17_6_4",
  "level": "2",
  "url": "nested-data_chapter-assessment.html#ac17_6_4",
  "type": "Checkpoint",
  "number": "10.7.4",
  "title": "",
  "body": " Provided is a nested data structure. Follow the instructions in the comments below. Do not hard code.   nested = {'data': ['finding', 23, ['exercises', 'hangout', 34]], 'window': ['part', 'whole', [], 'sum', ['math', 'calculus', 'algebra', 'geometry', 'statistics',['physics', 'chemistry', 'biology']]]} # Check to see if the string 'data' is a key in nested, if it is, assign True to the variable data, otherwise assign False. # Check to see if the integer 24 is in the value of the key data, if it is then assign to the variable twentyfour the value of True, otherwise False. # Check to see that the string 'whole' is not in the value of the key window. If it's not, then assign to the variable whole the value of True, otherwise False. # Check to see if the string 'physics' is a key in the dictionary nested. If it is, assign to the variable physics, the value of True, otherwise False. ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(data, True, \"Testing that data has the correct value.\") def testTwo(self): self.assertEqual(twentyfour, False, \"Testing that twentyfour has the correct value.\") def testThree(self): self.assertEqual(whole, False, \"Testing that whole has the correct value.\") def testFour(self): self.assertEqual(physics, False, \"Testing that physics has the correct value.\") myTests().main()  "
},
{
  "id": "ac17_6_5",
  "level": "2",
  "url": "nested-data_chapter-assessment.html#ac17_6_5",
  "type": "Checkpoint",
  "number": "10.7.5",
  "title": "",
  "body": " The variable nested_d contains a nested dictionary with the gold medal counts for the top four countries in the past three Olympics. Assign the value of Great Britain's gold medal count from the London Olympics to the variable london_gold . Use indexing. Do not hardcode.   nested_d = {'Beijing':{'China':51, 'USA':36, 'Russia':22, 'Great Britain':19}, 'London':{'USA':46, 'China':38, 'Great Britain':29, 'Russia':22}, 'Rio':{'USA':35, 'Great Britain':22, 'China':20, 'Germany':13}} ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(london_gold, 29, \"Testing that london_gold is assigned to correct value\") myTests().main()  "
},
{
  "id": "ac17_6_6",
  "level": "2",
  "url": "nested-data_chapter-assessment.html#ac17_6_6",
  "type": "Checkpoint",
  "number": "10.7.6",
  "title": "",
  "body": " Below, we have provided a nested dictionary. Index into the dictionary to create variables that we have listed in the ActiveCode window.   sports = {'swimming': ['butterfly', 'breaststroke', 'backstroke', 'freestyle'], 'diving': ['springboard', 'platform', 'synchronized'], 'track': ['sprint', 'distance', 'jumps', 'throws'], 'gymnastics': {'women':['vault', 'floor', 'uneven bars', 'balance beam'], 'men': ['vault', 'parallel bars', 'floor', 'rings']}} # Assign the string 'backstroke' to the name v1 # Assign the string 'platform' to the name v2 # Assign the list ['vault', 'floor', 'uneven bars', 'balance beam'] to the name v3 # Assign the string 'rings' to the name v4 ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testA(self): self.assertEqual(v1, 'backstroke', \"Testing that v1 was created correctly.\") self.assertNotIn(\"v1 = 'backstroke'\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") self.assertNotIn('v1 = \"backstroke\"', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") def testB(self): self.assertEqual(v2, 'platform', \"Testing that v2 was created correctly.\") self.assertNotIn('v2 = \"platform\"', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") self.assertNotIn(\"v2 = 'platform'\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") def testC(self): self.assertEqual(v3, ['vault', 'floor', 'uneven bars', 'balance beam'], \"Testing that v3 was created correctly.\") self.assertNotIn(\"v3 = ['vault', 'floor', 'uneven bars', 'balance beam']\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") def testD(self): self.assertEqual(v4, 'rings', \"Testing that v4 was created correctly.\") self.assertNotIn(\"v4 = 'rings'\", self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") self.assertNotIn('v4 = \"rings\"', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") myTests().main()  "
},
{
  "id": "ac17_6_7",
  "level": "2",
  "url": "nested-data_chapter-assessment.html#ac17_6_7",
  "type": "Checkpoint",
  "number": "10.7.7",
  "title": "",
  "body": " Given the dictionary, nested_d , save the medal count for the USA from all three Olympics in the dictionary to the list US_count .   nested_d = {'Beijing':{'China':51, 'USA':36, 'Russia':22, 'Great Britain':19}, 'London':{'USA':46, 'China':38, 'Great Britain':29, 'Russia':22}, 'Rio':{'USA':35, 'Great Britain':22, 'China':20, 'Germany':13}} US_count = [] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFour(self): self.assertEqual(sorted(US_count), [35, 36, 46], \"Testing that US_count is assigned to correct values.\") myTests().main()  "
},
{
  "id": "ac17_6_8",
  "level": "2",
  "url": "nested-data_chapter-assessment.html#ac17_6_8",
  "type": "Checkpoint",
  "number": "10.7.8",
  "title": "",
  "body": " Iterate through the contents of l_of_l and assign the third element of sublist to a new list called third .   l_of_l = [['purple', 'mauve', 'blue'], ['red', 'maroon', 'blood orange', 'crimson'], ['sea green', 'cornflower', 'lavender', 'indigo'], ['yellow', 'amarillo', 'mac n cheese', 'golden rod']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(third, ['blue', 'blood orange', 'lavender', 'mac n cheese'], \"Testing that third has the correct list assigned to it.\") myTests().main()  "
},
{
  "id": "ac17_6_9",
  "level": "2",
  "url": "nested-data_chapter-assessment.html#ac17_6_9",
  "type": "Checkpoint",
  "number": "10.7.9",
  "title": "",
  "body": " Given below is a list of lists of athletes. Create a list, t , that saves only the athlete's name if it contains the letter t . If it does not contain the letter t , save the athlete name into list other .   athletes = [['Phelps', 'Lochte', 'Schooling', 'Ledecky', 'Franklin'], ['Felix', 'Bolt', 'Gardner', 'Eaton'], ['Biles', 'Douglas', 'Hamm', 'Raisman', 'Mikulak', 'Dalton']] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFive(self): self.assertEqual(t, ['Lochte', 'Bolt', 'Eaton', 'Dalton'], \"Testing that t is assigned to correct values.\") def testFiveA(self): self.assertEqual(other, ['Phelps', 'Schooling', 'Ledecky', 'Franklin', 'Felix', 'Gardner', 'Biles', 'Douglas', 'Hamm', 'Raisman', 'Mikulak'], \"Testing that other is assigned to correct values.\") myTests().main()  "
},
{
  "id": "files_introduction-working-with-data-files",
  "level": "1",
  "url": "files_introduction-working-with-data-files.html",
  "type": "Section",
  "number": "11.1",
  "title": "Introduction: Working with Data Files",
  "body": " Introduction: Working with Data Files  So far, the data we have used in this book have all been either coded right into the program, or have been entered by the user. In real life data reside in files. For example the images we worked with in the image processing unit ultimately live in files on your hard drive. Web pages, and word processing documents, and music are other examples of data that live in files. In this short chapter we will introduce the Python concepts necessary to use data from files in our programs.  For our purposes, we will assume that our data files are text files–that is, files filled with characters. The Python programs that you write are stored as text files. We can create these files in any of a number of ways. For example, we could use a text editor to type in and save the data. We could also download the data from a website and then save it in a file. Regardless of how the file is created, Python will allow us to manipulate the contents.  In Python, we must open files before we can use them and close them when we are done with them. As you might expect, once a file is opened it becomes a Python object just like all other data. The following table shows the functions and methods that can be used to open and close files.      Method Name    Use    Explanation      open    open(filename,'r')   Open a file called filename and use it for reading. This will return a reference to a file object.     open    open(filename,'w')   Open a file called filename and use it for writing. This will also return a reference to a file object.     close    filevariable.close()   File use is complete.      Learning Goals     To understand the structure of file systems    To understand opening files with different modes    To introduce files as another kind of sequence that one can iterate over    To introduce the read\/transform\/write pattern    To introduce parallel assignment to two or three variables       Objectives     Demonstrate that you can read a single value from each line in a file    Convert the line to the appropriate value    Read a line and convert it into multiple values using split and assignment to multiple variables      "
},
{
  "id": "p-2538",
  "level": "2",
  "url": "files_introduction-working-with-data-files.html#p-2538",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "open close "
},
{
  "id": "files_files_filemethods1a",
  "level": "2",
  "url": "files_introduction-working-with-data-files.html#files_files_filemethods1a",
  "type": "Table",
  "number": "11.1.1",
  "title": "",
  "body": "    Method Name    Use    Explanation      open    open(filename,'r')   Open a file called filename and use it for reading. This will return a reference to a file object.     open    open(filename,'w')   Open a file called filename and use it for writing. This will also return a reference to a file object.     close    filevariable.close()   File use is complete.    "
},
{
  "id": "files_reading-a-file",
  "level": "1",
  "url": "files_reading-a-file.html",
  "type": "Section",
  "number": "11.2",
  "title": "Reading a File",
  "body": " Reading a File  As an example, suppose we have a text file called olympics.txt that contains the data representing about olympians across different years. The contents of the file are shown at the bottom of the page.  To open this file, we would call the open function. The variable, fileref , now holds a reference to the file object returned by open . When we are finished with the file, we can close it by using the close method. After the file is closed any further attempts to use fileref will result in an error.   fileref = open(\"olympics.txt\", \"r\") ## other code here that refers to variable fileref fileref.close()    A common mistake is to get confused about whether you are providing a variable name or a string literal as an input to the open function. In the code above, olympics.txt is a string literal that should correspond to the name of a file on your computer. If you put something without quotes, like open(x, \"r\") , it will be treated as a variable name. In this example, x should be a variable that's already been bound to a string value like olympics.txt .     "
},
{
  "id": "note-45",
  "level": "2",
  "url": "files_reading-a-file.html#note-45",
  "type": "Note",
  "number": "11.2.1",
  "title": "",
  "body": " A common mistake is to get confused about whether you are providing a variable name or a string literal as an input to the open function. In the code above, olympics.txt is a string literal that should correspond to the name of a file on your computer. If you put something without quotes, like open(x, \"r\") , it will be treated as a variable name. In this example, x should be a variable that's already been bound to a string value like olympics.txt .  "
},
{
  "id": "files_alternative-file-reading-methods",
  "level": "1",
  "url": "files_alternative-file-reading-methods.html",
  "type": "Section",
  "number": "11.3",
  "title": "Alternative File Reading Methods",
  "body": " Alternative File Reading Methods  Once you have a file object , the thing returned by the open function, Python provides three methods to read data from that object. The read() method returns the entire contents of the file as a single string (or just some characters) if you provide a number as an input parameter. The readlines method returns the entire contents of the entire file as a list of strings, where each item in the list is one line of the file. The readline method reads one line from the file and returns it as a string. The strings returned by readlines or readline will contain the newline character at the end. The following table summarizes these methods and the following session shows them in action.      Method Name    Use    Explanation      write    filevar.write(astring)   Add a string to the end of the file. filevar must refer to a file that has been opened for writing.     read(n)    filevar.read()   Read and return a string of n characters, or the entire file as a single string if n is not provided.     readline(n)    filevar.readline()   Read and return the next line of the file with all text up to and including the newline character. If n is provided as a parameter, then only n characters will be returned if the line is longer than n . Note the parameter n is not supported in the browser version of Python, and in fact is rarely used in practice, you can safely ignore it.     readlines(n)    filevar.readlines()   Returns a list of strings, each representing a single line of the file. If n is not provided then all lines of the file are returned. If n is provided then n characters are read but n is rounded up so that an entire line is returned. Note Like readline  readlines ignores the parameter n in the browser.     In this course, we will generally either iterate through the lines returned by readlines() with a for loop, or use read() to get all of the contents as a single string.  In other programming languages, where they don't have the convenient for loop method of going through the lines of the file one by one, they use a different pattern which requires a different kind of loop, the while loop. Fortunately, you don't need to learn this other pattern, and we will put off consideration of while loops until later in this course. We don't need them for handling data from files.   A common error that novice programmers make is not realizing that all these ways of reading the file contents, use up the file . After you call readlines(), if you call it again you'll get an empty list.    Check your Understanding   <pre id=\"school_prompt.txt\"> Writing essays for school can be difficult but many students find that by researching their topic that they have more to say and are better informed. Here are the university we require many undergraduate students to take a first year writing requirement so that they can have a solid foundation for their writing skills. This comes in handy for many students. Different schools have different requirements, but everyone uses writing at some point in their academic career, be it essays, research papers, technical write ups, or scripts. <\/pre>      Using the file school_prompt2.txt , find the number of characters in the file and assign that value to the variable num_char .      ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_char, 537, \"Testing that num_char has the correct value.\") myTests().main()   <pre id=\"travel_plans.txt\"> This summer I will be travelling. I will go to... Italy: Rome Greece: Athens England: London, Manchester France: Paris, Nice, Lyon Spain: Madrid, Barcelona, Granada Austria: Vienna I will probably not even want to come back! However, I wonder how I will get by with all the different languages. I only know English! <\/pre>      Find the number of lines in the file, travel_plans2.txt , and assign it to the variable num_lines .      ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwo(self): self.assertEqual(num_lines, 11, \"Testing that num_lines is assigned to correct value.\") myTests().main()   <pre id=\"emotion_words.txt\"> Sad upset blue down melancholy somber bitter troubled Angry mad enraged irate irritable wrathful outraged infuriated Happy cheerful content elated joyous delighted lively glad Confused disoriented puzzled perplexed dazed befuddled Excited eager thrilled delighted Scared afraid fearful panicked terrified petrified startled Nervous anxious jittery jumpy tense uneasy apprehensive <\/pre>      Create a string called first_forty that is comprised of the first 40 characters of emotion_words2.txt .      ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(first_forty, 'Sad upset blue down melancholy somber bi', \"Testing that first_forty was created correctly.\") myTests().main()         "
},
{
  "id": "files_files_filemethods2a",
  "level": "2",
  "url": "files_alternative-file-reading-methods.html#files_files_filemethods2a",
  "type": "Table",
  "number": "11.3.1",
  "title": "",
  "body": "    Method Name    Use    Explanation      write    filevar.write(astring)   Add a string to the end of the file. filevar must refer to a file that has been opened for writing.     read(n)    filevar.read()   Read and return a string of n characters, or the entire file as a single string if n is not provided.     readline(n)    filevar.readline()   Read and return the next line of the file with all text up to and including the newline character. If n is provided as a parameter, then only n characters will be returned if the line is longer than n . Note the parameter n is not supported in the browser version of Python, and in fact is rarely used in practice, you can safely ignore it.     readlines(n)    filevar.readlines()   Returns a list of strings, each representing a single line of the file. If n is not provided then all lines of the file are returned. If n is provided then n characters are read but n is rounded up so that an entire line is returned. Note Like readline  readlines ignores the parameter n in the browser.    "
},
{
  "id": "note-46",
  "level": "2",
  "url": "files_alternative-file-reading-methods.html#note-46",
  "type": "Note",
  "number": "11.3.2",
  "title": "",
  "body": " A common error that novice programmers make is not realizing that all these ways of reading the file contents, use up the file . After you call readlines(), if you call it again you'll get an empty list.  "
},
{
  "id": "p-2556",
  "level": "2",
  "url": "files_alternative-file-reading-methods.html#p-2556",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your Understanding "
},
{
  "id": "ac11_3_1",
  "level": "2",
  "url": "files_alternative-file-reading-methods.html#ac11_3_1",
  "type": "Checkpoint",
  "number": "11.3.3",
  "title": "",
  "body": "    Using the file school_prompt2.txt , find the number of characters in the file and assign that value to the variable num_char .      ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_char, 537, \"Testing that num_char has the correct value.\") myTests().main()  "
},
{
  "id": "ac11_3_2",
  "level": "2",
  "url": "files_alternative-file-reading-methods.html#ac11_3_2",
  "type": "Checkpoint",
  "number": "11.3.4",
  "title": "",
  "body": "    Find the number of lines in the file, travel_plans2.txt , and assign it to the variable num_lines .      ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testTwo(self): self.assertEqual(num_lines, 11, \"Testing that num_lines is assigned to correct value.\") myTests().main()  "
},
{
  "id": "ac11_3_3",
  "level": "2",
  "url": "files_alternative-file-reading-methods.html#ac11_3_3",
  "type": "Checkpoint",
  "number": "11.3.5",
  "title": "",
  "body": "    Create a string called first_forty that is comprised of the first 40 characters of emotion_words2.txt .      ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(first_forty, 'Sad upset blue down melancholy somber bi', \"Testing that first_forty was created correctly.\") myTests().main()  "
},
{
  "id": "files_iterating-over-lines-in-a-file",
  "level": "1",
  "url": "files_iterating-over-lines-in-a-file.html",
  "type": "Section",
  "number": "11.4",
  "title": "Iterating over lines in a file",
  "body": " Iterating over lines in a file  We will now use this file as input in a program that will do some data processing. In the program, we will examine each line of the file and print it with some additional text. Because readlines() returns a list of lines of text, we can use the for loop to iterate through each line of the file.  A line of a file is defined to be a sequence of characters up to and including a special character called the newline character. If you evaluate a string that contains a newline character you will see the character represented as \\n . If you print a string that contains a newline you will not see the \\n , you will just see its effects (a carriage return).  As the for loop iterates through each line of the file the loop variable will contain the current line of the file as a string of characters. The general pattern for processing each line of a text file is as follows:  for line in myFile.readlines(): statement1 statement2 ...  To process all of our olypmics data, we will use a for loop to iterate over the lines of the file. Using the split method, we can break each line into a list containing all the fields of interest about the athlete. We can then take the values corresponding to name, team and event to construct a simple sentence.   olypmicsfile = open(\"olypmics.txt\", \"r\") for aline in olypmicsfile.readlines(): values = aline.split(\",\") print(values[0], \"is from\", values[3], \"and is on the roster for\", values[4]) olypmicsfile.close()   To make the code a little simpler, and to allow for more efficient processing, Python provides a built-in way to iterate through the contents of a file one line at a time, without first reading them all into a list. Some students find this confusing initially, so we don't recommend doing it this way, until you get a little more comfortable with Python. But this idiom is preferred by Python programmers, so you should be prepared to read it. And when you start dealing with big files, you may notice the efficiency gains of using it.   olypmicsfile = open(\"olypmics.txt\", \"r\") for aline in olypmicsfile: values = aline.split(\",\") print(values[0], \"is from\", values[3], \"and is on the roster for\", values[4]) olypmicsfile.close()   <pre hidden id=\"olypmics.txt\"> Name,Sex,Age,Team,Event,Medal A Dijiang,M,24,China,Basketball,NA A Lamusi,M,23,China,Judo,NA Gunnar Nielsen Aaby,M,24,Denmark,Football,NA Edgar Lindenau Aabye,M,34,Denmark\/Sweden,Tug-Of-War,Gold Christine Jacoba Aaftink,F,21,Netherlands,Speed Skating,NA Christine Jacoba Aaftink,F,25,Netherlands,Speed Skating,NA Christine Jacoba Aaftink,F,25,Netherlands,Speed Skating,NA Christine Jacoba Aaftink,F,27,Netherlands,Speed Skating,NA Per Knut Aaland,M,31,United States,Cross Country Skiing,NA Per Knut Aaland,M,33,United States,Cross Country Skiing,NA John Aalberg,M,31,United States,Cross Country Skiing,NA John Aalberg,M,33,United States,Cross Country Skiing,NA \"Cornelia \"\"Cor\"\" Aalten (-Strannood)\",F,18,Netherlands,Athletics,NA \"Cornelia \"\"Cor\"\" Aalten (-Strannood)\",F,18,Netherlands,Athletics,NA Antti Sami Aalto,M,26,Finland,Ice Hockey,NA \"Einar Ferdinand \"\"Einari\"\" Aalto\",M,26,Finland,Swimming,NA Jorma Ilmari Aalto,M,22,Finland,Cross Country Skiing,NA Jyri Tapani Aalto,M,31,Finland,Badminton,NA Minna Maarit Aalto,F,30,Finland,Sailing,NA Minna Maarit Aalto,F,34,Finland,Sailing,NA Pirjo Hannele Aalto (Mattila-),F,32,Finland,Biathlon,NA Timo Antero Aaltonen,M,31,Finland,Athletics,NA Win Valdemar Aaltonen,M,54,Finland,Art Competitions,NA <\/pre>   Check your Understanding   <pre id=\"emotion_words.txt\"> Sad upset blue down melancholy somber bitter troubled Angry mad enraged irate irritable wrathful outraged infuriated Happy cheerful content elated joyous delighted lively glad Confused disoriented puzzled perplexed dazed befuddled Excited eager thrilled delighted Scared afraid fearful panicked terrified petrified startled Nervous anxious jittery jumpy tense uneasy apprehensive <\/pre>      Write code to find out how many lines are in the file emotion_words.txt as shown above. Save this value to the variable num_lines . Do not use the len method.      ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_lines, 7, \"Testing that num_lines was assigned to the correct value.\") self.assertNotIn('len', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") myTests().main()   "
},
{
  "id": "p-2564",
  "level": "2",
  "url": "files_iterating-over-lines-in-a-file.html#p-2564",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "line newline "
},
{
  "id": "p-2568",
  "level": "2",
  "url": "files_iterating-over-lines-in-a-file.html#p-2568",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check your Understanding "
},
{
  "id": "ac11_4_3",
  "level": "2",
  "url": "files_iterating-over-lines-in-a-file.html#ac11_4_3",
  "type": "Checkpoint",
  "number": "11.4.1",
  "title": "",
  "body": "    Write code to find out how many lines are in the file emotion_words.txt as shown above. Save this value to the variable num_lines . Do not use the len method.      ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_lines, 7, \"Testing that num_lines was assigned to the correct value.\") self.assertNotIn('len', self.getEditorText(), \"Testing your code (Don't worry about actual and expected values).\") myTests().main()  "
},
{
  "id": "files_finding-a-file-in-your-filesystem",
  "level": "1",
  "url": "files_finding-a-file-in-your-filesystem.html",
  "type": "Section",
  "number": "11.5",
  "title": "Finding a File in your Filesystem",
  "body": " Finding a File in your Filesystem  In the examples we have provided, and in the simulated file system that we've built for this online textbook, all files sit in a single directory, and it's the same directory where the Python program is stored. Thus, we can just write open('myfile.txt', 'r') .  If you have installed Python on your local computer and you are trying to get file reading and writing operations to work, there's a little more that you may need to understand. Computer operating systems (like Windows and the Mac OS) organize files into a hierarchy of folders, with some folders containing other folders.   If your file and your Python program are in the same directory you can simply use the filename. For example, with the file hierarchy in the diagram, the file myPythonProgram.py could contain the code open('data1.txt', 'r') .  If your file and your Python program are in different directories, however, then you need to specify a path . You can think of the filename as the short name for a file, and the path as the full name. Typically, you will specify a relative file path , which says where to find the file to open, relative to the directory where the code is running from. For example, the file myPythonProgram.py could contain the code open('..\/myData\/data2.txt', 'r') . The ..\/ means to go up one level in the directory structure, to the containing folder (allProjects); myData\/ says to descend into the myData subfolder.  There is also an option to use an absolute file path . For example, suppose the file structure in the figure is stored on a computer in the user's home directory, \/Users\/joebob01\/myFiles . Then code in any Python program running from any file folder could open data2.txt via open('\/Users\/joebob01\/myFiles\/allProjects\/myData\/data2.txt', 'r') . You can tell an absolute file path because it begins with a \/ . If you will ever move your programs and data to another computer (e.g., to share them with someone else), it will be much more convenient if your use relative file paths rather than absolute. That way, if you preserve the folder structure when moving everything, you won't need to change your code. If you use absolute paths, then the person you are sharing with probably not have the same home directory name, \/Users\/joebob01\/ . Note that Python pathnames follow the UNIX conventions (Mac OS is a UNIX variant), rather than the Windows file pathnames that use : and \\ . The Python interpreter will translate to Windows pathnames when running on a Windows machine; you should be able to share your Python program between a Windows machine and a MAC without having to rewrite the file open commands.   For security reasons, our code running in your browser doesn't read or write files to your computer's file system. Later, when you run Python natively on your own computer, you will be able to truly read files, using path names as suggested above. To get you started, we have faked it by providing a few files that you can read as if they were on your hard disk. In this chapter, we simulate the existence of one textfile; you can't open any other files from your local computer from textbook code running in your browser.    Check Your Understanding    Say you are in a directory called Project. In it, you have a file with your Python code. You would like to read in data from a file called YearlyProjections.csv which is in a folder called CompanyData, which is inside of Project. What is the best way to open the file in your Python program?     open(\"YearlyProjections.csv\", \"r\")    This would try to open a file inside of Project (but that is not where the file is.)      open(\"..\/CompanyData\/YearlyProjections.csv\", \"r\")    This would go to the parent directory of Project and look for a subdirectory of that called CompanyData. But CompanyData is inside Project so it wouldn't be found.      open(\"CompanyData\/YearlyProjections.csv\", \"r\")    Yes, this is how you can access the file!      open(\"Project\/CompanyData\/YearlyProjections.csv\", \"r\")    This would try to find a subdirectory Project of the current directory called Project.      open(\"..\/YearlyProjections.csv\", \"r\")    Remember that '..' will bring you up one level to the parent directory. This would try to open a csv file in the parent directory of Project (but that is not where the file is.)      Which of the following paths are relative file paths?     \"Stacy\/Applications\/README.txt\"    Yes, this is a relative file path. You can tell by the lack of \"\/\" at the beginning of the path.      \"\/Users\/Raquel\/Documents\/graduation_plans.doc\"    This is an absolute file path. All absolute file paths start with \"\/\".      \"\/private\/tmp\/swtag.txt\"    This is an absolute file path. Not all absolute file paths contain \"User\"! Instead, check to see if the path starts with \"\/\".      \"ScienceData\/ProjectFive\/experiment_data.csv\"    Yes, this is a relative file path. You can tell by the lack of \"\/\" at the beginning of the path.     "
},
{
  "id": "p-2574",
  "level": "2",
  "url": "files_finding-a-file-in-your-filesystem.html#p-2574",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "path "
},
{
  "id": "note-47",
  "level": "2",
  "url": "files_finding-a-file-in-your-filesystem.html#note-47",
  "type": "Note",
  "number": "11.5.1",
  "title": "",
  "body": " For security reasons, our code running in your browser doesn't read or write files to your computer's file system. Later, when you run Python natively on your own computer, you will be able to truly read files, using path names as suggested above. To get you started, we have faked it by providing a few files that you can read as if they were on your hard disk. In this chapter, we simulate the existence of one textfile; you can't open any other files from your local computer from textbook code running in your browser.  "
},
{
  "id": "p-2577",
  "level": "2",
  "url": "files_finding-a-file-in-your-filesystem.html#p-2577",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check Your Understanding "
},
{
  "id": "question11_5_1",
  "level": "2",
  "url": "files_finding-a-file-in-your-filesystem.html#question11_5_1",
  "type": "Checkpoint",
  "number": "11.5.2",
  "title": "",
  "body": " Say you are in a directory called Project. In it, you have a file with your Python code. You would like to read in data from a file called YearlyProjections.csv which is in a folder called CompanyData, which is inside of Project. What is the best way to open the file in your Python program?     open(\"YearlyProjections.csv\", \"r\")    This would try to open a file inside of Project (but that is not where the file is.)      open(\"..\/CompanyData\/YearlyProjections.csv\", \"r\")    This would go to the parent directory of Project and look for a subdirectory of that called CompanyData. But CompanyData is inside Project so it wouldn't be found.      open(\"CompanyData\/YearlyProjections.csv\", \"r\")    Yes, this is how you can access the file!      open(\"Project\/CompanyData\/YearlyProjections.csv\", \"r\")    This would try to find a subdirectory Project of the current directory called Project.      open(\"..\/YearlyProjections.csv\", \"r\")    Remember that '..' will bring you up one level to the parent directory. This would try to open a csv file in the parent directory of Project (but that is not where the file is.)    "
},
{
  "id": "question11_5_2",
  "level": "2",
  "url": "files_finding-a-file-in-your-filesystem.html#question11_5_2",
  "type": "Checkpoint",
  "number": "11.5.3",
  "title": "",
  "body": " Which of the following paths are relative file paths?     \"Stacy\/Applications\/README.txt\"    Yes, this is a relative file path. You can tell by the lack of \"\/\" at the beginning of the path.      \"\/Users\/Raquel\/Documents\/graduation_plans.doc\"    This is an absolute file path. All absolute file paths start with \"\/\".      \"\/private\/tmp\/swtag.txt\"    This is an absolute file path. Not all absolute file paths contain \"User\"! Instead, check to see if the path starts with \"\/\".      \"ScienceData\/ProjectFive\/experiment_data.csv\"    Yes, this is a relative file path. You can tell by the lack of \"\/\" at the beginning of the path.    "
},
{
  "id": "files_using-with-for-files",
  "level": "1",
  "url": "files_using-with-for-files.html",
  "type": "Section",
  "number": "11.6",
  "title": "Using <code class=\"code-inline tex2jax_ignore\">with<\/code> for Files",
  "body": " Using with for Files   This section is a bit of an advanced topic and can be easily skipped. But with statements are becoming very common and it doesn't hurt to know about them in case you run into one in the wild.   Now that you have seen and practiced a bit with opening and closing files, there is another mechanism that Python provides for us that cleans up the often forgotten close. Forgetting to close a file does not necessarily cause a runtime error in the kinds of programs you typically write in an introductory programing course. However if you are writing a program that may run for days or weeks at a time that does a lot of file reading and writing you may run into trouble.  Python has the notion of a context manager that automates the process of doing common operations at the start of some task, as well as automating certain operations at the end of some task. For reading and writing a file, the normal operation is to open the file and assign it to a variable. At the end of working with a file the common operation is to make sure that file is closed.  The Python with statement makes using context managers easy. The general form of a with statement is:  with <create some object that understands context> as <some name>: do some stuff with the object ...  When the program exits the with block, the context manager handles the common stuff that normally happens at the end, in our case closing a file. A simple example will clear up all of this abstract discussion of contexts. Here are the contents of a file called mydata.txt .     with open('mydata.txt', 'r') as md: for line in md: print(line) # continue on with other code   The first line of the with statement opens the file and assigns it to the variable md . Then we can iterate over the file in any of the usual ways. When we are done we simply stop indenting and let Python take care of closing the file and cleaning up.  This is equivalent to code that specifically closes the file at the end, but neatly marks the set of code that can make use of the open file as an indented block, and ensures that the programmer won't forget to include the .close() invocation.   md = open('mydata.txt', 'r') for line in md: print(line) md.close() # continue with other code   "
},
{
  "id": "note-48",
  "level": "2",
  "url": "files_using-with-for-files.html#note-48",
  "type": "Note",
  "number": "11.6.1",
  "title": "",
  "body": " This section is a bit of an advanced topic and can be easily skipped. But with statements are becoming very common and it doesn't hurt to know about them in case you run into one in the wild.  "
},
{
  "id": "files_recipe-for-reading-and-processing-a-file",
  "level": "1",
  "url": "files_recipe-for-reading-and-processing-a-file.html",
  "type": "Section",
  "number": "11.7",
  "title": "Recipe for Reading and Processing a File",
  "body": " Recipe for Reading and Processing a File  Here's a foolproof recipe for processing the contents of a text file. If you've fully digested the previous sections, you'll understand that there are other options as well. Some of those options are preferable for some situations, and some are preferred by python programmers for efficiency reasons. In this course, though, you can always succeed by following this recipe.  #1. Open the file using with and open .  #2. Use .readlines() to get a list of the lines of text in the file.  #3. Use a for loop to iterate through the strings in the list, each being one line from the file. On each iteration, process that line of text  #4. When you are done extracting data from the file, continue writing your code outside of the indentation. Using with will automatically close the file once the program exits the with block.  fname = \"yourfile.txt\" with open(fname, 'r') as fileref: # step 1 lines = fileref.readlines() # step 2 for lin in lines: # step 3 #some code that references the variable lin #some other code not relying on fileref # step 4  However, this will not be good to use when you are working with large data. Imagine working with a datafile that has 1000 rows of data. It would take a long time to read in all the data and then if you had to iterate over it, even more time would be necessary. This would be a case where programmers prefer another option for efficiency reasons.  This option involves iterating over the file itself while still iterating over each line in the file:  with open(fname, 'r') as fileref: for lin in fileref: ## some code that uses line as the current line of the file ## some more code  "
},
{
  "id": "files_writing-text-files",
  "level": "1",
  "url": "files_writing-text-files.html",
  "type": "Section",
  "number": "11.8",
  "title": "Writing Text Files",
  "body": " Writing Text Files  One of the most commonly performed data processing tasks is to read data from a file, manipulate it in some way, and then write the resulting data out to a new data file to be used for other purposes later. To accomplish this, the open function discussed above can also be used to create a new file prepared for writing. Note in that the only difference between opening a file for writing and opening a file for reading is the use of the 'w' flag instead of the 'r' flag as the second parameter. When we open a file for writing, a new, empty file with that name is created and made ready to accept our data. If an existing file has the same name, its contents are overwritten. As before, the function returns a reference to the new file object.  shows one additional method on file objects that we have not used thus far. The write method allows us to add data to a text file. Recall that text files contain sequences of characters. We usually think of these character sequences as being the lines of the file where each line ends with the newline \\n character. Be very careful to notice that the write method takes one parameter, a string. When invoked, the characters of the string will be added to the end of the file. This means that it is the programmer's job to include the newline characters as part of the string if desired.  Assume that we have been asked to provide a file consisting of all the squared numbers from 1 to 12.  First, we will need to open the file. Afterwards, we will iterate through the numbers 1 through 12, and square each one of them. This new number will need to be converted to a string, and then it can be written into the file.  The program below solves part of the problem. We first want to make sure that we've written the correct code to calculate the square of each number.   for number in range(1, 13): square = number * number print(square)   When we run this program, we see the lines of output on the screen. Once we are satisfied that it is creating the appropriate output, the next step is to add the necessary pieces to produce an output file and write the data lines to it. To start, we need to open a new output file by calling the open function, outfile = open(\"squared_numbers.txt\",'w') , using the 'w' flag. We can choose any file name we like. If the file does not exist, it will be created. However, if the file does exist, it will be reinitialized as empty and you will lose any previous contents.  Once the file has been created, we just need to call the write method passing the string that we wish to add to the file. In this case, the string is already being printed so we will just change the print into a call to the write method. However, there is an additional step to take, since the write method can only accept a string as input. We'll need to convert the number to a string. Then, we just need to add one extra character to the string. The newline character needs to be concatenated to the end of the line. The entire line now becomes outfile.write(str(square)+ '\\n') . The print statement automatically outputs a newline character after whatever text it outputs, but the write method does not do that automatically. We also need to close the file when we are done.  The complete program is shown below.   As with file reading, for security reasons the runestone interactive textbook environment does not write files to the file system on your local computer. In an activecode window, we simulate writing to a file. The contents of the written file are shown and you can do a subsequent read of the contents of that filename. If you try to overwrite a file that's built in to the page, it may not let you; don't try to get too fancy with our file system simulator!  Below, we have printed the first 10 characters to the output window.    filename = \"squared_numbers.txt\" outfile = open(filename, \"w\") for number in range(1, 13): square = number * number outfile.write(str(square) + \"\\n\") outfile.close() infile = open(filename, \"r\") print(infile.read()[:10]) infile.close()   "
},
{
  "id": "note-49",
  "level": "2",
  "url": "files_writing-text-files.html#note-49",
  "type": "Note",
  "number": "11.8.1",
  "title": "",
  "body": " As with file reading, for security reasons the runestone interactive textbook environment does not write files to the file system on your local computer. In an activecode window, we simulate writing to a file. The contents of the written file are shown and you can do a subsequent read of the contents of that filename. If you try to overwrite a file that's built in to the page, it may not let you; don't try to get too fancy with our file system simulator!  Below, we have printed the first 10 characters to the output window.  "
},
{
  "id": "files_csv-format",
  "level": "1",
  "url": "files_csv-format.html",
  "type": "Section",
  "number": "11.9",
  "title": "CSV Format",
  "body": " CSV Format  CSV stands for Comma Separated Values. If you print out tabular data in CSV format, it can be easily imported into other programs like Excel, Google spreadsheets, or a statistics package (R, stata, SPSS, etc.).  For example, we can make a file with the following contents. If you save it as a file name grades.csv, then you could import it into one of those programs. The first line gives the column names and the later lines each give the data for one row.   Name,score,grade Jamal,98,A+ Eloise,87,B+ Madeline,99,A+ Wei,94,A   "
},
{
  "id": "files_reading-in-data-from-a-csv-file",
  "level": "1",
  "url": "files_reading-in-data-from-a-csv-file.html",
  "type": "Section",
  "number": "11.10",
  "title": "Reading in data from a CSV File",
  "body": " Reading in data from a CSV File  We are able to read in CSV files the same way we have with other text files. Because of the standardized structure of the data, there is a common pattern for processing it. To practice this, we will be using data about olympic events.  Typically, CSV files will have a header as the first line, which contains column names. Then, each following row in the file will contain data that corresponds to the appropriate columns.  All file methods that we have mentioned - read , readline , and readlines , and simply iterating over the file object itself - will work on CSV files. In our examples, we will iterate over the lines. Because the values on each line are separated with commas, we can use the .split() method to parse each line into a collection of separate value.   fileconnection = open(\"olympics.txt\", 'r') lines = fileconnection.readlines() header = lines[0] field_names = header.strip().split(',') print(field_names) for row in lines[1:]: vals = row.strip().split(',') if vals[5] != \"NA\": print(f\"{vals[0]}: {vals[4]}; {vals[5]}\")   In the above code, we open the file, olympics.txt, which contains data on some olympians. The contents are similar to our previous olympics file, but include an extra column with information about medals they won.  We split the first row to get the field names. We split other rows to get values. Note that we specify to split on commas by passing that as a parameter. Also note that we first pass the row through the .strip() method to get rid of the trailing n.  Once we have parsed the lines into their separate values, we can use those values in the program. For example, in the code above, we select only those rows where the olympian won a medal, and we print out only three of the fields, in a different format.  Note that the trick of splitting the text for each row based on the presence of commas only works because commas are not used in any of the field values. Suppose that some of our events were more specific, and used commas. For example, Swimming, 100M Freestyle . How will a program processing a .csv file know when a comma is separating columns, and when it is just part of the text string giving a value within a column?  The CSV format is actually a little more general than we have described and has a couple of solutions for that problem. One alternative format uses a different column separator, such as | or a tab (t). Sometimes, when a tab is used, the format is called tsv, for tab-separated values. If you get a file using a different separator, you can just call the .split('|') or .split('\\\\t') .  The other advanced CSV format uses commas to separate but encloses all values in double quotes.  For example, the data file might look like:  <pre id=\"sample.txt\"> \"Name\",\"Sex\",\"Age\",\"Team\",\"Event\",\"Medal\" \"A Dijiang\",\"M\",\"24\",\"China\",\"Basketball\",\"NA\" \"Edgar Lindenau Aabye\",\"M\",\"34\",\"Denmark\/Sweden\",\"Tug-Of-War\",\"Gold\" \"Christine Jacoba Aaftink\",\"F\",\"21\",\"Netherlands\",\"Speed Skating, 1500M\",\"NA\" <\/pre>  If you are reading a .csv file that has enclosed all values in double quotes, it's actually a pretty tricky programming problem to split the text for one row into a list of values. You won't want to try to do it directly. Instead, you should use python's built-in csv module. However, there's a bit of a learning curve for that, and we find that students gain a better understanding of reading CSV format by first learning to read the simple, unquoted format and split lines on commas.  "
},
{
  "id": "files_writing-data-to-a-csv-file",
  "level": "1",
  "url": "files_writing-data-to-a-csv-file.html",
  "type": "Section",
  "number": "11.11",
  "title": "Writing data to a CSV File",
  "body": " Writing data to a CSV File  The typical pattern for writing data to a CSV file will be to write a header row and loop through the items in a list, outputting one row for each.  Here is a simple example where we first make a list of the multiples of 12 and then write a file that looks like this.  1,12 2,24 3,36 ...   n = [0] * 12 for i in range(1,13): n[i-1] = i *12 outfile = open(\"Multiples of 12\", \"w\") for j in range(0, len(n)): outfile.write(str(j+1) + ',' + str(n[j])) # +1 to j since the array starts at 0 and we start counting at 1 outfile.write('\\n') outfile.close()   Here is a more complex example, where we a have a list of tuples, each representing one Olympian, a subset of the rows and columns from the file we have been reading from.   olympians = [(\"John Aalberg\", 31, \"Cross Country Skiing\"), (\"Minna Maarit Aalto\", 30, \"Sailing\"), (\"Win Valdemar Aaltonen\", 54, \"Art Competitions\"), (\"Wakako Abe\", 18, \"Cycling\")] outfile = open(\"reduced_olympics.csv\", \"w\") # output the header row outfile.write('Name,Age,Sport') outfile.write('\\n') # output each of the rows: for olympian in olympians: row_string = f\"{olympian[0]},{olympian[1]},{olympian[2]}\" outfile.write(row_string) outfile.write('\\n') outfile.close()   There are a few things worth noting in the code above.  First, using .format() makes it really clear what we're doing when we create the variable row_string. We are making a comma separated set of values; the {} curly braces indicated where to substitute in the actual values. The equivalent string concatenation would be very hard to read. An alternative, also clear way to do it would be with the .join method: row_string = ','.join([olympian[0], str(olympian[1]), olympian[2]]) .  Second, unlike the print statement, remember that the .write() method on a file object does not automatically insert a newline. Instead, we have to explicitly add the character \\n at the end of each line.  Third, we have to explicitly refer to each of the elements of olympian when building the string to write. Note that just putting .format(olympian) wouldn't work because the interpreter would see only one value (a tuple) when it was expecting three values to try to substitute into the string template. Later in the book we will see that python provides an advanced technique for automatically unpacking the three values from the tuple, with .format(*olympian) .  As described previously, if one or more columns contain text, and that text could contain commas, we need to do something to distinguish a comma in the text from a comma that is separating different values (cells in the table). If we want to enclose each value in double quotes, it can start to get a little tricky, because we will need to have the double quote character inside the string output. But it is doable. Indeed, one reason Python allows strings to be delimited with either single quotes or double quotes is so that one can be used to delimit the string and the other can be a character in the string. If you get to the point where you need to quote all of the values, we recommend learning to use python's csv module.   olympians = [(\"John Aalberg\", 31, \"Cross Country Skiing, 15KM\"), (\"Minna Maarit Aalto\", 30, \"Sailing\"), (\"Win Valdemar Aaltonen\", 54, \"Art Competitions\"), (\"Wakako Abe\", 18, \"Cycling\")] outfile = open(\"reduced_olympics2.csv\", \"w\") # output the header row outfile.write('\"Name\",\"Age\",\"Sport\"') outfile.write('\\n') # output each of the rows: for olympian in olympians: row_string = f'\"{olympian[0]}\", \"{olympian[1]}\", \"{olympian[2]}\"' outfile.write(row_string) outfile.write('\\n') outfile.close()   "
},
{
  "id": "files_tips-on-handling-files",
  "level": "1",
  "url": "files_tips-on-handling-files.html",
  "type": "Section",
  "number": "11.12",
  "title": "Tips on Handling Files",
  "body": " Tips on Handling Files  When working with files, there are a few things to keep in mind. When naming files, it's best to not include spaces. While most operating systems can handle files with spaces in their names, not all can.  Additionally, suffixes in files names, for example the .txt in FileNameExample.txt , are not magic. Instead, these suffixes are a convention. For some operating systems the suffixes have no special significance, and only have meaning when used in a program. Other operating systems infer information from the suffixes - for example, .EXE is a suffix that means a file is executable.  It's a good idea to follow the conventions. If a file contains CSV formatted data, name it with the extension .csv , not .txt . A Python program will be able to read it either way, but if you follow the convention you will help other people guess what's in the file. And you will also help the computer's operating system to guess what application program it should open when you double-click on the file.  "
},
{
  "id": "files_glossary",
  "level": "1",
  "url": "files_glossary.html",
  "type": "Section",
  "number": "11.13",
  "title": "Glossary",
  "body": " Glossary    open  You must open a file before you can read its contents.    close  When you are done with a file, you should close it.    read  Will read the entire contents of a file as a string. This is often used in an assignment statement so that a variable can reference the contents of the file.    readline  Will read a single line from the file, up to and including the first instance of the newline character.    readlines  Will read the entire contents of a file into a list where each line of the file is a string and is an element in the list.    write  Will add characters to the end of a file that has been opened for writing.    "
},
{
  "id": "files_chapter-assessment",
  "level": "1",
  "url": "files_chapter-assessment.html",
  "type": "Section",
  "number": "11.14",
  "title": "Chapter Assessment",
  "body": " Chapter Assessment         The textfile, travel_plans.txt , contains the summer travel plans for someone with some commentary. Find the total number of characters in the file and save to the variable num .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num, 316, \"Testing that num value is assigned to correct value.\") myTests().main()    We have provided a file called emotion_words.txt that contains lines of words that describe emotions. Find the total number of words in the file and assign this value to the variable num_words .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_words, 48, \"Testing that num_words was assigned to the correct value.\") myTests().main()    Assign to the variable num_lines the number of lines in the file school_prompt.txt .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_lines, 10, \"Testing that num_lines has the correct value.\") myTests().main()    Assign the first 30 characters of school_prompt.txt as a string to the variable beginning_chars .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(len(beginning_chars), 30, \"Testing that beginning_chars has the correct length.\") self.assertEqual(beginning_chars, \"Writing essays for school can \", \"Testing that beginning_chars has the correct string.\") myTests().main()    Challenge: Using the file school_prompt.txt , assign the third word of every line to a list called three .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(three, ['for', 'find', 'to', 'many', 'they', 'solid', 'for', 'have', 'some', 'ups,'], \"Testing that three has the correct value.\") myTests().main()    Challenge: Create a list called emotions that contains the first word of every line in emotion_words.txt .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(emotions, ['Sad', 'Angry', 'Happy', 'Confused', 'Excited', 'Scared', 'Nervous'], \"Testing that emotions was created correctly.\") myTests().main()    Assign the first 33 characters from the textfile, travel_plans.txt to the variable first_chars .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFive(self): self.assertEqual(first_chars, \"This summer I will be travelling.\", \"Testing that first_chars is assigned to correct value.\") myTests().main()    Challenge: Using the file school_prompt.txt , if the character ‘p' is in a word, then add the word to a list called p_words .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(p_words, ['topic', 'point', 'papers,', 'ups,', 'scripts.'], \"Testing that p_words has the correct list.\") myTests().main()    Read in the contents of the file SP500.txt which has monthly data for 2016 and 2017 about the S&P 500 closing prices as well as some other financial indicators, including the Long Term Interest Rate , which is interest rate paid on 10-year U.S. government bonds.  Write a program that computes the average closing price (the second column, labeled SP500) and the highest long-term interest rate. Both should be computed only for the period from June 2016 through May 2017. Save the results in the variables mean_SP and max_interest .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertLess(abs(mean_SP - 2237), 0.5, \"Testing that mean_SP is within 0.5 of the correct value. Make sure to use only the correct 12 month period.\") self.assertEqual(max_interest, 2.49, \"Testing the max_interest is correct. Make sure to use only the correct 12 month period.\") myTests().main()     "
},
{
  "id": "ac11_14_1",
  "level": "2",
  "url": "files_chapter-assessment.html#ac11_14_1",
  "type": "Checkpoint",
  "number": "11.14.1",
  "title": "",
  "body": " The textfile, travel_plans.txt , contains the summer travel plans for someone with some commentary. Find the total number of characters in the file and save to the variable num .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num, 316, \"Testing that num value is assigned to correct value.\") myTests().main()  "
},
{
  "id": "ac11_14_2",
  "level": "2",
  "url": "files_chapter-assessment.html#ac11_14_2",
  "type": "Checkpoint",
  "number": "11.14.2",
  "title": "",
  "body": " We have provided a file called emotion_words.txt that contains lines of words that describe emotions. Find the total number of words in the file and assign this value to the variable num_words .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_words, 48, \"Testing that num_words was assigned to the correct value.\") myTests().main()  "
},
{
  "id": "ac11_14_3",
  "level": "2",
  "url": "files_chapter-assessment.html#ac11_14_3",
  "type": "Checkpoint",
  "number": "11.14.3",
  "title": "",
  "body": " Assign to the variable num_lines the number of lines in the file school_prompt.txt .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(num_lines, 10, \"Testing that num_lines has the correct value.\") myTests().main()  "
},
{
  "id": "ac11_14_4",
  "level": "2",
  "url": "files_chapter-assessment.html#ac11_14_4",
  "type": "Checkpoint",
  "number": "11.14.4",
  "title": "",
  "body": " Assign the first 30 characters of school_prompt.txt as a string to the variable beginning_chars .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(len(beginning_chars), 30, \"Testing that beginning_chars has the correct length.\") self.assertEqual(beginning_chars, \"Writing essays for school can \", \"Testing that beginning_chars has the correct string.\") myTests().main()  "
},
{
  "id": "ac11_14_5",
  "level": "2",
  "url": "files_chapter-assessment.html#ac11_14_5",
  "type": "Checkpoint",
  "number": "11.14.5",
  "title": "",
  "body": " Challenge: Using the file school_prompt.txt , assign the third word of every line to a list called three .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(three, ['for', 'find', 'to', 'many', 'they', 'solid', 'for', 'have', 'some', 'ups,'], \"Testing that three has the correct value.\") myTests().main()  "
},
{
  "id": "ac11_14_6",
  "level": "2",
  "url": "files_chapter-assessment.html#ac11_14_6",
  "type": "Checkpoint",
  "number": "11.14.6",
  "title": "",
  "body": " Challenge: Create a list called emotions that contains the first word of every line in emotion_words.txt .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(emotions, ['Sad', 'Angry', 'Happy', 'Confused', 'Excited', 'Scared', 'Nervous'], \"Testing that emotions was created correctly.\") myTests().main()  "
},
{
  "id": "ac11_14_7",
  "level": "2",
  "url": "files_chapter-assessment.html#ac11_14_7",
  "type": "Checkpoint",
  "number": "11.14.7",
  "title": "",
  "body": " Assign the first 33 characters from the textfile, travel_plans.txt to the variable first_chars .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testFive(self): self.assertEqual(first_chars, \"This summer I will be travelling.\", \"Testing that first_chars is assigned to correct value.\") myTests().main()  "
},
{
  "id": "ac11_14_8",
  "level": "2",
  "url": "files_chapter-assessment.html#ac11_14_8",
  "type": "Checkpoint",
  "number": "11.14.8",
  "title": "",
  "body": " Challenge: Using the file school_prompt.txt , if the character ‘p' is in a word, then add the word to a list called p_words .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(p_words, ['topic', 'point', 'papers,', 'ups,', 'scripts.'], \"Testing that p_words has the correct list.\") myTests().main()  "
},
{
  "id": "ac11_14_9",
  "level": "2",
  "url": "files_chapter-assessment.html#ac11_14_9",
  "type": "Checkpoint",
  "number": "11.14.9",
  "title": "",
  "body": " Read in the contents of the file SP500.txt which has monthly data for 2016 and 2017 about the S&P 500 closing prices as well as some other financial indicators, including the Long Term Interest Rate , which is interest rate paid on 10-year U.S. government bonds.  Write a program that computes the average closing price (the second column, labeled SP500) and the highest long-term interest rate. Both should be computed only for the period from June 2016 through May 2017. Save the results in the variables mean_SP and max_interest .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertLess(abs(mean_SP - 2237), 0.5, \"Testing that mean_SP is within 0.5 of the correct value. Make sure to use only the correct 12 month period.\") self.assertEqual(max_interest, 2.49, \"Testing the max_interest is correct. Make sure to use only the correct 12 month period.\") myTests().main()  "
},
{
  "id": "exceptions_when-to-use-try-except",
  "level": "1",
  "url": "exceptions_when-to-use-try-except.html",
  "type": "Section",
  "number": "12.1",
  "title": "When to use try\/except",
  "body": " When to use try\/except  The reason to use try\/except is when you have a code block to execute that will sometimes run correctly and sometimes not, depending on conditions you can't foresee at the time you're writing the code.  For example, when you are running code that fetches data from a website, you may run the code when you don't have a network connection or when the external website is temporarily not responding. If your program can still do something useful in those situations, you would like to handle the exception and have the rest of your code execute.  As another example, suppose you have fetched some nested data from a website into a dictionary d. When you try to extract specific elements, some may be missing: d may not include a particular key, for example. If you anticipate a particular key potentially not being present, you could write an if..else check to take care of it.   if somekey in d: # it's there; extract the data extract_data(d) else: skip_this_one(d)   However, if you're extracting lots of different data, it can get tedious to check for all of them. You can wrap all the data extraction in a try\/except.   try: extract_data(d) except: skip_this_one(d)   It's considered poor practice to catch all exceptions this way. Instead, python provides a mechanism to specify just certain kinds of exceptions that you'll catch (for example, just catching exceptions of type KeyError, which happens when a key is missing from a dictionary.   try: extract_data(d) except KeyError: skip_this_one(d)   We won't go into more details of exception handling in this introductory course. Check out the official python tutorial section on error handling if you're interested.  "
},
{
  "id": "exceptions_standard-exceptions79_index-0",
  "level": "1",
  "url": "exceptions_standard-exceptions79_index-0.html",
  "type": "Section",
  "number": "12.2",
  "title": "Standard Exceptions",
  "body": " Standard Exceptions  Most of the standard exceptions built into Python are listed below. They are organized into related groups based on the types of issues they deal with.     Language Exceptions  Description    StandardError  Base class for all built-in exceptions except StopIteration and SystemExit.    ImportError  Raised when an import statement fails.    SyntaxError  Raised when there is an error in Python syntax.    IndentationError  Raised when indentation is not specified properly.    NameError  Raised when an identifier is not found in the local or global namespace.    UnboundLocalError  Raised when trying to access a local variable in a function or method but no value has been assigned to it.    TypeError  Raised when an operation or function is attempted that is invalid for the specified data type.    LookupError  Base class for all lookup errors.    IndexError  Raised when an index is not found in a sequence.    KeyError  Raised when the specified key is not found in the dictionary.    ValueError  Raised when the built-in function for a data type has the valid type of arguments, but the arguments have invalid values specified.    RuntimeError  Raised when a generated error does not fall into any category.    MemoryError  Raised when a operation runs out of memory.    RecursionError  Raised when the maximum recursion depth has been exceeded.    SystemError  Raised when the interpreter finds an internal problem, but when this error is encountered the Python interpreter does not exit.        Math Exceptions  Description    ArithmeticError  Base class for all errors that occur for numeric calculation. You know a math error occurred, but you don't know the specific error.    OverflowError  Raised when a calculation exceeds maximum limit for a numeric type.    FloatingPointError  Raised when a floating point calculation fails.    ZeroDivisonError  Raised when division or modulo by zero takes place for all numeric types.        I\/O Exceptions  Description    FileNotFoundError  Raised when a file or directory is requested but doesn't exist.    IOError  Raised when an input\/ output operation fails, such as the print statement or the open() function when trying to open a file that does not exist. Also raised for operating system-related errors.    PermissionError  Raised when trying to run an operation without the adequate access rights.    EOFError  Raised when there is no input from either the raw_input() or input() function and the end of file is reached.    KeyboardInterrupt  Raised when the user interrupts program execution, usually by pressing Ctrl+c.        Other Exceptions  Description    Exception  Base class for all exceptions. This catches most exception messages.    StopIteration  Raised when the next() method of an iterator does not point to any object.    AssertionError  Raised in case of failure of the Assert statement.    SystemExit  Raised when Python interpreter is quit by using the sys.exit() function. If not handled in the code, it causes the interpreter to exit.    OSError  Raises for operating system related errors.    EnvironmentError  Base class for all exceptions that occur outside the Python environment.    AttributeError  Raised in case of failure of an attribute reference or assignment.    NotImplementedError  Raised when an abstract method that needs to be implemented in an inherited class is not actually implemented.     All exceptions are objects. The classes that define the objects are organized in a hierarchy, which is shown below. This is important because the parent class of a set of related exceptions will catch all exception messages for itself and its child exceptions. For example, an ArithmeticError exception will catch itself and all FloatingPointError , OverflowError , and ZeroDivisionError exceptions.   BaseException +-- SystemExit +-- KeyboardInterrupt +-- GeneratorExit +-- Exception +-- StopIteration +-- StopAsyncIteration +-- ArithmeticError | +-- FloatingPointError | +-- OverflowError | +-- ZeroDivisionError +-- AssertionError +-- AttributeError +-- BufferError +-- EOFError +-- ImportError +-- LookupError | +-- IndexError | +-- KeyError +-- MemoryError +-- NameError | +-- UnboundLocalError +-- OSError | +-- BlockingIOError | +-- ChildProcessError | +-- ConnectionError | | +-- BrokenPipeError | | +-- ConnectionAbortedError | | +-- ConnectionRefusedError | | +-- ConnectionResetError | +-- FileExistsError | +-- FileNotFoundError | +-- InterruptedError | +-- IsADirectoryError | +-- NotADirectoryError | +-- PermissionError | +-- ProcessLookupError | +-- TimeoutError +-- ReferenceError +-- RuntimeError | +-- NotImplementedError | +-- RecursionError +-- SyntaxError | +-- IndentationError | +-- TabError +-- SystemError +-- TypeError +-- ValueError | +-- UnicodeError | +-- UnicodeDecodeError | +-- UnicodeEncodeError | +-- UnicodeTranslateError +-- Warning +-- DeprecationWarning +-- PendingDeprecationWarning +-- RuntimeWarning +-- SyntaxWarning +-- UserWarning +-- FutureWarning +-- ImportWarning +-- UnicodeWarning +-- BytesWarning +-- ResourceWarning   "
},
{
  "id": "table-8",
  "level": "2",
  "url": "exceptions_standard-exceptions79_index-0.html#table-8",
  "type": "Table",
  "number": "12.2.1",
  "title": "",
  "body": "   Language Exceptions  Description    StandardError  Base class for all built-in exceptions except StopIteration and SystemExit.    ImportError  Raised when an import statement fails.    SyntaxError  Raised when there is an error in Python syntax.    IndentationError  Raised when indentation is not specified properly.    NameError  Raised when an identifier is not found in the local or global namespace.    UnboundLocalError  Raised when trying to access a local variable in a function or method but no value has been assigned to it.    TypeError  Raised when an operation or function is attempted that is invalid for the specified data type.    LookupError  Base class for all lookup errors.    IndexError  Raised when an index is not found in a sequence.    KeyError  Raised when the specified key is not found in the dictionary.    ValueError  Raised when the built-in function for a data type has the valid type of arguments, but the arguments have invalid values specified.    RuntimeError  Raised when a generated error does not fall into any category.    MemoryError  Raised when a operation runs out of memory.    RecursionError  Raised when the maximum recursion depth has been exceeded.    SystemError  Raised when the interpreter finds an internal problem, but when this error is encountered the Python interpreter does not exit.    "
},
{
  "id": "table-9",
  "level": "2",
  "url": "exceptions_standard-exceptions79_index-0.html#table-9",
  "type": "Table",
  "number": "12.2.2",
  "title": "",
  "body": "   Math Exceptions  Description    ArithmeticError  Base class for all errors that occur for numeric calculation. You know a math error occurred, but you don't know the specific error.    OverflowError  Raised when a calculation exceeds maximum limit for a numeric type.    FloatingPointError  Raised when a floating point calculation fails.    ZeroDivisonError  Raised when division or modulo by zero takes place for all numeric types.    "
},
{
  "id": "table-10",
  "level": "2",
  "url": "exceptions_standard-exceptions79_index-0.html#table-10",
  "type": "Table",
  "number": "12.2.3",
  "title": "",
  "body": "   I\/O Exceptions  Description    FileNotFoundError  Raised when a file or directory is requested but doesn't exist.    IOError  Raised when an input\/ output operation fails, such as the print statement or the open() function when trying to open a file that does not exist. Also raised for operating system-related errors.    PermissionError  Raised when trying to run an operation without the adequate access rights.    EOFError  Raised when there is no input from either the raw_input() or input() function and the end of file is reached.    KeyboardInterrupt  Raised when the user interrupts program execution, usually by pressing Ctrl+c.    "
},
{
  "id": "table-11",
  "level": "2",
  "url": "exceptions_standard-exceptions79_index-0.html#table-11",
  "type": "Table",
  "number": "12.2.4",
  "title": "",
  "body": "   Other Exceptions  Description    Exception  Base class for all exceptions. This catches most exception messages.    StopIteration  Raised when the next() method of an iterator does not point to any object.    AssertionError  Raised in case of failure of the Assert statement.    SystemExit  Raised when Python interpreter is quit by using the sys.exit() function. If not handled in the code, it causes the interpreter to exit.    OSError  Raises for operating system related errors.    EnvironmentError  Base class for all exceptions that occur outside the Python environment.    AttributeError  Raised in case of failure of an attribute reference or assignment.    NotImplementedError  Raised when an abstract method that needs to be implemented in an inherited class is not actually implemented.    "
},
{
  "id": "exceptions_chapter-assessment",
  "level": "1",
  "url": "exceptions_chapter-assessment.html",
  "type": "Section",
  "number": "12.3",
  "title": "Chapter Assessment",
  "body": " Chapter Assessment   The code below takes the list of country, country , and searches to see if it is in the dictionary gold which shows some countries who won gold during the Olympics. However, this code currently does not work. Correctly add try\/except clause in the code so that it will correctly populate the list, country_gold , with either the number of golds won or the string Did not get gold .   gold = {\"US\":46, \"Fiji\":1, \"Great Britain\":27, \"Cuba\":5, \"Thailand\":2, \"China\":26, \"France\":10} country = [\"Fiji\", \"Chile\", \"Mexico\", \"France\", \"Norway\", \"US\"] country_gold = [] for x in country: country_gold.append(gold[x]) country_gold.append(\"Did not get gold\") ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOneA(self): self.assertEqual(country_gold, [1, 'Did not get gold', 'Did not get gold', 10, 'Did not get gold', 46], \"Testing that country_gold is assigned to correct values\") myTests().main()    Provided is a buggy for loop that tries to accumulate some values out of some dictionaries. Insert a try\/except so that the code passes.   di = [{\"Puppies\": 17, 'Kittens': 9, \"Birds\": 23, 'Fish': 90, \"Hamsters\": 49}, {\"Puppies\": 23, \"Birds\": 29, \"Fish\": 20, \"Mice\": 20, \"Snakes\": 7}, {\"Fish\": 203, \"Hamsters\": 93, \"Snakes\": 25, \"Kittens\": 89}, {\"Birds\": 20, \"Puppies\": 90, \"Snakes\": 21, \"Fish\": 10, \"Kittens\": 67}] total = 0 for diction in di: total = total + diction['Puppies'] print(\"Total number of puppies:\", total) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(total, 130, \"Testing that total has the correct value.\") myTests().main()    The list, numb , contains integers. Write code that populates the list remainder with the remainder of 36 divided by each number in numb . For example, the first element should be 0, because 36\/6 has no remainder. If there is an error, have the string Error appear in the remainder .   numb = [6, 0, 36, 8, 2, 36, 0, 12, 60, 0, 45, 0, 3, 23] remainder = [] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOneA(self): self.assertEqual(remainder, [0, 'Error', 0, 4, 0, 0, 'Error', 0, 36, 'Error', 36, 'Error', 0, 13], \"Testing that remainder is assigned to correct values.\") myTests().main()    Provided is buggy code, insert a try\/except so that the code passes.   lst = [2,4,10,42,12,0,4,7,21,4,83,8,5,6,8,234,5,6,523,42,34,0,234,1,435,465,56,7,3,43,23] lst_three = [] for num in lst: if 3 % num == 0: lst_three.append(num) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(lst_three, [1,3], \"Testing that lst_three has the correct values.\") myTests().main()    Write code so that the buggy code provided works using a try\/except. When the codes does not work in the try, have it append to the list attempt the string Error .   full_lst = [\"ab\", 'cde', 'fgh', 'i', 'jkml', 'nop', 'qr', 's', 'tv', 'wxy', 'z'] attempt = [] for elem in full_lst: attempt.append(elem[1]) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(attempt, ['b', 'd', 'g', 'Error', 'k', 'o', 'r', 'Error', 'v', 'x', 'Error'], \"Testing that attempt has the correct values.\") myTests().main()    The following code tries to append the third element of each list in conts to the new list third_countries . Currently, the code does not work. Add a try\/except clause so the code runs without errors, and the string ‘Continent does not have 3 countries' is appended to third_countries instead of producing an error.   conts = [['Spain', 'France', 'Greece', 'Portugal', 'Romania', 'Germany'], ['USA', 'Mexico', 'Canada'], ['Japan', 'China', 'Korea', 'Vietnam', 'Cambodia'], ['Argentina', 'Chile', 'Brazil', 'Ecuador', 'Uruguay', 'Venezuela'], ['Australia'], ['Zimbabwe', 'Morocco', 'Kenya', 'Ethiopia', 'South Africa'], ['Antarctica']] third_countries = [] for c in conts: third_countries.append(c[2]) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(third_countries, ['Greece', 'Canada', 'Korea', 'Brazil', 'Continent does not have 3 countries', 'Kenya', 'Continent does not have 3 countries'], \"Testing that third_countries is created correctly.\") myTests().main()    The buggy code below prints out the value of the sport in the list sport . Use try\/except so that the code will run properly. If the sport is not in the dictionary, ppl_play , add it in with the value of 1.   sport = [\"hockey\", \"basketball\", \"soccer\", \"tennis\", \"football\", \"baseball\"] ppl_play = {\"hockey\":4, \"soccer\": 10, \"football\": 15, \"tennis\": 8} for x in sport: print(ppl_play[x]) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOneA(self): self.assertEqual(sorted(ppl_play.items()), [('baseball', 1), ('basketball', 1), ('football', 15), ('hockey', 4), ('soccer', 10), ('tennis', 8)], \"Testing that ppl_play is assigned to correct values.\") myTests().main()    Provided is a buggy for loop that tries to accumulate some values out of some dictionaries. Insert a try\/except so that the code passes. If the key is not there, initialize it in the dictionary and set the value to zero.   di = [{\"Puppies\": 17, 'Kittens': 9, \"Birds\": 23, 'Fish': 90, \"Hamsters\": 49}, {\"Puppies\": 23, \"Birds\": 29, \"Fish\": 20, \"Mice\": 20, \"Snakes\": 7}, {\"Fish\": 203, \"Hamsters\": 93, \"Snakes\": 25, \"Kittens\": 89}, {\"Birds\": 20, \"Puppies\": 90, \"Snakes\": 21, \"Fish\": 10, \"Kittens\": 67}] total = 0 for diction in di: total = total + diction['Puppies'] print(\"Total number of puppies:\", total) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): accum = 0 for diction in di: if 'Puppies' in diction: accum += 1 self.assertEqual(accum, 4, \"Testing that every dictionary in di has the key 'Puppies'.\") myTests().main()   "
},
{
  "id": "ac12_04_1",
  "level": "2",
  "url": "exceptions_chapter-assessment.html#ac12_04_1",
  "type": "Checkpoint",
  "number": "12.3.1",
  "title": "",
  "body": " The code below takes the list of country, country , and searches to see if it is in the dictionary gold which shows some countries who won gold during the Olympics. However, this code currently does not work. Correctly add try\/except clause in the code so that it will correctly populate the list, country_gold , with either the number of golds won or the string Did not get gold .   gold = {\"US\":46, \"Fiji\":1, \"Great Britain\":27, \"Cuba\":5, \"Thailand\":2, \"China\":26, \"France\":10} country = [\"Fiji\", \"Chile\", \"Mexico\", \"France\", \"Norway\", \"US\"] country_gold = [] for x in country: country_gold.append(gold[x]) country_gold.append(\"Did not get gold\") ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOneA(self): self.assertEqual(country_gold, [1, 'Did not get gold', 'Did not get gold', 10, 'Did not get gold', 46], \"Testing that country_gold is assigned to correct values\") myTests().main()  "
},
{
  "id": "ac12_04_2",
  "level": "2",
  "url": "exceptions_chapter-assessment.html#ac12_04_2",
  "type": "Checkpoint",
  "number": "12.3.2",
  "title": "",
  "body": " Provided is a buggy for loop that tries to accumulate some values out of some dictionaries. Insert a try\/except so that the code passes.   di = [{\"Puppies\": 17, 'Kittens': 9, \"Birds\": 23, 'Fish': 90, \"Hamsters\": 49}, {\"Puppies\": 23, \"Birds\": 29, \"Fish\": 20, \"Mice\": 20, \"Snakes\": 7}, {\"Fish\": 203, \"Hamsters\": 93, \"Snakes\": 25, \"Kittens\": 89}, {\"Birds\": 20, \"Puppies\": 90, \"Snakes\": 21, \"Fish\": 10, \"Kittens\": 67}] total = 0 for diction in di: total = total + diction['Puppies'] print(\"Total number of puppies:\", total) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(total, 130, \"Testing that total has the correct value.\") myTests().main()  "
},
{
  "id": "ac12_04_3",
  "level": "2",
  "url": "exceptions_chapter-assessment.html#ac12_04_3",
  "type": "Checkpoint",
  "number": "12.3.3",
  "title": "",
  "body": " The list, numb , contains integers. Write code that populates the list remainder with the remainder of 36 divided by each number in numb . For example, the first element should be 0, because 36\/6 has no remainder. If there is an error, have the string Error appear in the remainder .   numb = [6, 0, 36, 8, 2, 36, 0, 12, 60, 0, 45, 0, 3, 23] remainder = [] ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOneA(self): self.assertEqual(remainder, [0, 'Error', 0, 4, 0, 0, 'Error', 0, 36, 'Error', 36, 'Error', 0, 13], \"Testing that remainder is assigned to correct values.\") myTests().main()  "
},
{
  "id": "ac12_04_4",
  "level": "2",
  "url": "exceptions_chapter-assessment.html#ac12_04_4",
  "type": "Checkpoint",
  "number": "12.3.4",
  "title": "",
  "body": " Provided is buggy code, insert a try\/except so that the code passes.   lst = [2,4,10,42,12,0,4,7,21,4,83,8,5,6,8,234,5,6,523,42,34,0,234,1,435,465,56,7,3,43,23] lst_three = [] for num in lst: if 3 % num == 0: lst_three.append(num) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(lst_three, [1,3], \"Testing that lst_three has the correct values.\") myTests().main()  "
},
{
  "id": "ac12_04_5",
  "level": "2",
  "url": "exceptions_chapter-assessment.html#ac12_04_5",
  "type": "Checkpoint",
  "number": "12.3.5",
  "title": "",
  "body": " Write code so that the buggy code provided works using a try\/except. When the codes does not work in the try, have it append to the list attempt the string Error .   full_lst = [\"ab\", 'cde', 'fgh', 'i', 'jkml', 'nop', 'qr', 's', 'tv', 'wxy', 'z'] attempt = [] for elem in full_lst: attempt.append(elem[1]) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(attempt, ['b', 'd', 'g', 'Error', 'k', 'o', 'r', 'Error', 'v', 'x', 'Error'], \"Testing that attempt has the correct values.\") myTests().main()  "
},
{
  "id": "ac12_04_6",
  "level": "2",
  "url": "exceptions_chapter-assessment.html#ac12_04_6",
  "type": "Checkpoint",
  "number": "12.3.6",
  "title": "",
  "body": " The following code tries to append the third element of each list in conts to the new list third_countries . Currently, the code does not work. Add a try\/except clause so the code runs without errors, and the string ‘Continent does not have 3 countries' is appended to third_countries instead of producing an error.   conts = [['Spain', 'France', 'Greece', 'Portugal', 'Romania', 'Germany'], ['USA', 'Mexico', 'Canada'], ['Japan', 'China', 'Korea', 'Vietnam', 'Cambodia'], ['Argentina', 'Chile', 'Brazil', 'Ecuador', 'Uruguay', 'Venezuela'], ['Australia'], ['Zimbabwe', 'Morocco', 'Kenya', 'Ethiopia', 'South Africa'], ['Antarctica']] third_countries = [] for c in conts: third_countries.append(c[2]) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(third_countries, ['Greece', 'Canada', 'Korea', 'Brazil', 'Continent does not have 3 countries', 'Kenya', 'Continent does not have 3 countries'], \"Testing that third_countries is created correctly.\") myTests().main()  "
},
{
  "id": "ac12_04_7",
  "level": "2",
  "url": "exceptions_chapter-assessment.html#ac12_04_7",
  "type": "Checkpoint",
  "number": "12.3.7",
  "title": "",
  "body": " The buggy code below prints out the value of the sport in the list sport . Use try\/except so that the code will run properly. If the sport is not in the dictionary, ppl_play , add it in with the value of 1.   sport = [\"hockey\", \"basketball\", \"soccer\", \"tennis\", \"football\", \"baseball\"] ppl_play = {\"hockey\":4, \"soccer\": 10, \"football\": 15, \"tennis\": 8} for x in sport: print(ppl_play[x]) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOneA(self): self.assertEqual(sorted(ppl_play.items()), [('baseball', 1), ('basketball', 1), ('football', 15), ('hockey', 4), ('soccer', 10), ('tennis', 8)], \"Testing that ppl_play is assigned to correct values.\") myTests().main()  "
},
{
  "id": "ac12_04_8",
  "level": "2",
  "url": "exceptions_chapter-assessment.html#ac12_04_8",
  "type": "Checkpoint",
  "number": "12.3.8",
  "title": "",
  "body": " Provided is a buggy for loop that tries to accumulate some values out of some dictionaries. Insert a try\/except so that the code passes. If the key is not there, initialize it in the dictionary and set the value to zero.   di = [{\"Puppies\": 17, 'Kittens': 9, \"Birds\": 23, 'Fish': 90, \"Hamsters\": 49}, {\"Puppies\": 23, \"Birds\": 29, \"Fish\": 20, \"Mice\": 20, \"Snakes\": 7}, {\"Fish\": 203, \"Hamsters\": 93, \"Snakes\": 25, \"Kittens\": 89}, {\"Birds\": 20, \"Puppies\": 90, \"Snakes\": 21, \"Fish\": 10, \"Kittens\": 67}] total = 0 for diction in di: total = total + diction['Puppies'] print(\"Total number of puppies:\", total) ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): accum = 0 for diction in di: if 'Puppies' in diction: accum += 1 self.assertEqual(accum, 4, \"Testing that every dictionary in di has the key 'Puppies'.\") myTests().main()  "
},
{
  "id": "classes_introduction-classes-and-objects-the-basics",
  "level": "1",
  "url": "classes_introduction-classes-and-objects-the-basics.html",
  "type": "Section",
  "number": "13.1",
  "title": "Introduction: Classes and Objects - the Basics",
  "body": " Introduction: Classes and Objects - the Basics   Object-oriented programming  Python is an object-oriented programming language . That means it provides features that support object-oriented programming ( OOP ).  Object-oriented programming has its roots in the 1960s, but it wasn't until the mid 1980s that it became the main programming paradigm used in the creation of new software. It was developed as a way to handle the rapidly increasing size and complexity of software systems and to make it easier to modify these large and complex systems over time.  Up to now, some of the programs we have been writing use a procedural programming paradigm. In procedural programming the focus is on writing functions or procedures which operate on data. In object-oriented programming the focus is on the creation of objects which contain both data and functionality together. Usually, each object definition corresponds to some object or concept in the real world and the functions that operate on that object correspond to the ways real-world objects interact.   "
},
{
  "id": "p-2683",
  "level": "2",
  "url": "classes_introduction-classes-and-objects-the-basics.html#p-2683",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "object-oriented programming language OOP "
},
{
  "id": "p-2685",
  "level": "2",
  "url": "classes_introduction-classes-and-objects-the-basics.html#p-2685",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "objects "
},
{
  "id": "classes_objects-revisited",
  "level": "1",
  "url": "classes_objects-revisited.html",
  "type": "Section",
  "number": "13.2",
  "title": "Objects Revisited",
  "body": " Objects Revisited  In Python, every value is actually an object. Whether it be a dictionary, a list, or even an integer, they are all objects. Programs manipulate those objects either by performing computation with them or by asking them to perform methods. To be more specific, we say that an object has a state and a collection of methods that it can perform. (More about methods below.) The state of an object represents those things that the object knows about itself. The state is stored in instance variables . For example, as we have seen with turtle objects, each turtle has a state consisting of the turtle's position, its color, its heading and so on. Each turtle also has the ability to go forward, backward, or turn right or left. Individual turtles are different in that even though they are all turtles, they differ in the specific values of the individual state attributes (maybe they are in a different location or have a different heading).   "
},
{
  "id": "p-2686",
  "level": "2",
  "url": "classes_objects-revisited.html#p-2686",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "state methods methods instance variables "
},
{
  "id": "classes_user-defined-classes",
  "level": "1",
  "url": "classes_user-defined-classes.html",
  "type": "Section",
  "number": "13.3",
  "title": "User Defined Classes",
  "body": " User Defined Classes  We've already seen classes like str , int , float and list . These were defined by Python and made available for us to use. However, in many cases when we are solving problems we need to create data objects that are related to the problem we are trying to solve. We need to create our own classes.  As an example, consider the concept of a mathematical point. In two dimensions, a point is two numbers (coordinates) that are treated collectively as a single object. Points are often written in parentheses with a comma separating the coordinates. For example, (0, 0) represents the origin, and (x, y) represents the point x units to the right and y units up from the origin. This (x,y) is the state of the point.  Thinking about our diagram above, we could draw a point object as shown here.   Some of the typical operations that one associates with points might be to ask the point for its x coordinate, getX , or to ask for its y coordinate, getY . You would want these types of functions available to prevent accidental changes to these instance variables since doing so would allow you to view the values without accessing them directly. You may also wish to calculate the distance of a point from the origin, or the distance of a point from another point, or find the midpoint between two points, or answer the question as to whether a point falls within a given rectangle or circle. We'll shortly see how we can organize these together with the data.   Now that we understand what a point object might look like, we can define a new class . We'll want our points to each have an x and a y attribute, so our first class definition looks like this.   class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" def __init__(self): \"\"\" Create a new point at the origin \"\"\" self.x = 0 self.y = 0   Class definitions can appear anywhere in a program, but they are usually near the beginning (after the import statements). The syntax rules for a class definition are the same as for other compound statements. There is a header which begins with the keyword, class , followed by the name of the class, and ending with a colon.  If the first line after the class header is a string, it becomes the docstring of the class, and will be recognized by various tools. (This is also the way docstrings work in functions.)  Every class should have a method with the special name __init__ . This initializer method , often referred to as the constructor , is automatically called whenever a new instance of Point is created. It gives the programmer the opportunity to set up the attributes required within the new instance by giving them their initial state values. The self parameter (you could choose any other name, but nobody ever does!) is automatically set to reference the newly created object that needs to be initialized.  So let's use our new Point class now.   class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" def __init__(self): self.x = 0 self.y = 0 p = Point() # Instantiate an object of type Point q = Point() # and make a second point print(\"Nothing seems to have happened with the points\")   During the initialization of the objects, we created two attributes called x and y for each object, and gave them both the value 0. You will note that when you run the program, nothing happens. It turns out that this is not quite the case. In fact, two Points have been created, each having an x and y coordinate with value 0. However, because we have not asked the program to do anything with the points, we don't see any other result.   The following program adds a few print statements. You can see that the output suggests that each one is a Point object . However, notice that the is operator returns False meaning that they are different objects (we will have more to say about this in a later section).   class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" def __init__(self): self.x = 0 self.y = 0 p = Point() # Instantiate an object of type Point q = Point() # and make a second point print(p) print(q) print(p is q)   A function like Point that creates a new object instance is called a constructor . Every class automatically uses the name of the class as the name of the constructor function. The definition of the constructor function is done when you write the __init__ function (method) inside the class definition.  It may be helpful to think of a class as a factory for making objects. The class itself isn't an instance of a point, but it contains the machinery to make point instances. Every time you call the constructor, you're asking the factory to make you a new object. As the object comes off the production line, its initialization method is executed to get the object properly set up with it's factory default settings.  The combined process of make me a new object and get its settings initialized to the factory default settings is called instantiation .  To get a clearer understanding of what happens when instantiating a new instance, examine the previous code using CodeLens.   class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" def __init__(self): self.x = 0 self.y = 0 p = Point() # Instantiate an object of type Point q = Point() # and make a second point print(p) print(q) print(p is q)   At Step 2 in the CodeLens execution, you can see that Point has been bound to an object representing the Point class, but there are not yet any instances. The execution of line 9, p = Point() , occurs at steps 3-5. First, at step 3, you can see that a blank instance of the class has been created, and is passed as the first (and only parameter) to the __init__ method. That method's code is executed, with the variable self bound to that instance. At steps 4 and 5, two instance variables are filled in: x and y are both set to 0 . Nothing is returned from the __init__ method, but the point object itself is returned from the call to Point() . Thus, at step 7, p is bound to the new point that was created and initialized.  Skipping ahead, by the time we get to Step 14, p and q are each bound to different Point instances. Even though both have x and y instance variables set to 0 , they are different objects . Thus p is q evaluates to False .  "
},
{
  "id": "p-2691",
  "level": "2",
  "url": "classes_user-defined-classes.html#p-2691",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "class "
},
{
  "id": "p-2694",
  "level": "2",
  "url": "classes_user-defined-classes.html#p-2694",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initializer method constructor "
},
{
  "id": "p-2698",
  "level": "2",
  "url": "classes_user-defined-classes.html#p-2698",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constructor "
},
{
  "id": "p-2700",
  "level": "2",
  "url": "classes_user-defined-classes.html#p-2700",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "instantiation "
},
{
  "id": "classes_adding-parameters-to-the-constructor",
  "level": "1",
  "url": "classes_adding-parameters-to-the-constructor.html",
  "type": "Section",
  "number": "13.4",
  "title": "Adding Parameters to the Constructor",
  "body": " Adding Parameters to the Constructor  Our constructor so far can only create points at location (0,0) . To create a point at position (7, 6) requires that we provide some additional capability for the user to pass information to the constructor. Since constructors are simply specially named functions, we can use parameters (as we've seen before) to provide the specific information.  We can make our class constructor more generally usable by putting extra parameters into the __init__ method, as shown in this example.   class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" def __init__(self, initX, initY): self.x = initX self.y = initY p = Point(7,6)   Now when we create new points, we supply the x and y coordinates as parameters. When the point is created, the values of initX and initY are assigned to the state of the object, in the instance variables x and y.  This is a common thing to do in the __init__ method for a class: take in some parameters and save them as instance variables. Why is this useful? Keep in mind that the parameter variables will go away when the method is finished executing. The instance variables, however, will still be accessible anywhere that you have a handle on the object instance. This is a way of saving those initial values that are provided when the class constructor is invoked.   Later on, you will see classes where the __init__ method does more than just save parameters as instance variables. For example, it might parse the contents of those variables and do some computation on them, storing the results in instance variables. It might even make an Internet connection, download some content, and store that in instance variables.     Check Your Understanding      Create a class called NumberSet that accepts 2 integers as input, and defines two instance variables: num1 and num2 , which hold each of the input integers. Then, create an instance of NumberSet where its num1 is 6 and its num2 is 10. Save this instance to a variable t .      ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOneA(self): self.assertEqual(t.num1, 6, \"Testing that t.num1 has correct number assigned.\") def testOneB(self): self.assertEqual(t.num2, 10, \"Testing that t.num2 has correct number assigned.\") myTests().main()   "
},
{
  "id": "p-2706",
  "level": "2",
  "url": "classes_adding-parameters-to-the-constructor.html#p-2706",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "instance variables "
},
{
  "id": "p-2709",
  "level": "2",
  "url": "classes_adding-parameters-to-the-constructor.html#p-2709",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check Your Understanding "
},
{
  "id": "classes_adding-other-methods-to-a-class",
  "level": "1",
  "url": "classes_adding-other-methods-to-a-class.html",
  "type": "Section",
  "number": "13.5",
  "title": "Adding Other Methods to a Class",
  "body": " Adding Other Methods to a Class  The key advantage of using a class like Point rather than something like a simple tuple (7, 6) now becomes apparent. We can add methods to the Point class that are sensible operations for points. Had we chosen to use a tuple to represent the point, we would not have this capability. Creating a class like Point brings an exceptional amount of organizational power to our programs, and to our thinking. We can group together the sensible operations, and the kinds of data they apply to, and each instance of the class can have its own state.  A method behaves like a function but it is invoked on a specific instance. For example, with a list bound to variable L, L.append(7) calls the function append, with the list itself as the first parameter and 7 as the second parameter. Methods are accessed using dot notation. This is why L.append(7) has 2 parameters even though you may think it only has one: the list stored in the variable L is the first parameter value and 7 is the second.  Let's add two simple methods to allow a point to give us information about its state. The getX method, when invoked, will return the value of the x coordinate.  The implementation of this method is straight forward since we already know how to write functions that return values. One thing to notice is that even though the getX method does not need any other parameter information to do its work, there is still one formal parameter, self . As we stated earlier, all methods defined in a class that operate on objects of that class will have self as their first parameter. Again, this serves as a reference to the object itself which in turn gives access to the state data inside the object.   class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" def __init__(self, initX, initY): self.x = initX self.y = initY def getX(self): return self.x def getY(self): return self.y p = Point(7,6) print(p.getX()) print(p.getY())   Note that the getX method simply returns the value of the instance variable x from the object self. In other words, the implementation of the method is to go to the state of the object itself and get the value of x . Likewise, the getY method looks almost the same.  Let's add another method, distanceFromOrigin , to see better how methods work. This method will again not need any additional information to do its work, beyond the data stored in the instance variables. It will perform a more complex task.   class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" def __init__(self, initX, initY): self.x = initX self.y = initY def getX(self): return self.x def getY(self): return self.y def distanceFromOrigin(self): return ((self.x ** 2) + (self.y ** 2)) ** 0.5 p = Point(7,6) print(p.distanceFromOrigin())   Notice that the call of distanceFromOrigin does not explicitly supply an argument to match the self parameter. This is true of all method calls. The definition will always seem to have one additional parameter as compared to the invocation.   Check Your Understanding      Create a class called Animal that accepts two numbers as inputs and assigns them respectively to two instance variables: arms and legs . Create an instance method called limbs that, when called, returns the total number of limbs the animal has. To the variable name spider , assign an instance of Animal that has 4 arms and 4 legs. Call the limbs method on the spider instance and save the result to the variable name spidlimbs .      ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(spider.arms, 4, \"Testing that spider was assigned the correct number of arms.\") self.assertEqual(spider.legs, 4, \"Testing that spider was assigned the correct number of legs.\") self.assertEqual(spidlimbs, 8, \"Testing that spidlimbs was assigned correctly.\") myTests().main()   "
},
{
  "id": "p-2713",
  "level": "2",
  "url": "classes_adding-other-methods-to-a-class.html#p-2713",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method "
},
{
  "id": "p-2719",
  "level": "2",
  "url": "classes_adding-other-methods-to-a-class.html#p-2719",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check Your Understanding "
},
{
  "id": "classes_objects-as-arguments-and-parameters",
  "level": "1",
  "url": "classes_objects-as-arguments-and-parameters.html",
  "type": "Section",
  "number": "13.6",
  "title": "Objects as Arguments and Parameters",
  "body": " Objects as Arguments and Parameters  You can pass an object as an argument to a function, in the usual way.  Here is a simple function called distance involving our new Point objects. The job of this function is to figure out the distance between two points.   import math class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" def __init__(self, initX, initY): self.x = initX self.y = initY def getX(self): return self.x def getY(self): return self.y def distanceFromOrigin(self): return ((self.x ** 2) + (self.y ** 2)) ** 0.5 def distance(point1, point2): xdiff = point2.getX()-point1.getX() ydiff = point2.getY()-point1.getY() dist = math.sqrt(xdiff**2 + ydiff**2) return dist p = Point(4,3) q = Point(0,0) print(distance(p,q))   distance takes two points and returns the distance between them. Note that distance is not a method of the Point class. You can see this by looking at the indentation pattern. It is not inside the class definition. The other way we can know that distance is not a method of Point is that self is not included as a formal parameter. In addition, we do not invoke distance using the dot notation.  We could have made distance be a method of the Point class. Then, we would have called the first parameter self, and would have invoked it using the dot notation, as in the following code. Which way to implement it is a matter of coding style. Both work correctly. Most programmers choose whether to make functions be stand-alone or methods of a class based on whether the function semantically seems to be an operation that is performed on instances of the class. In this case, because distance is really a property of a pair of points and is symmetric (the distance from a to b is the same as that from b to a) it makes more sense to have it be a standalone function and not a method. Many heated discussions have occurred between programmers about such style decisions.   import math class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" def __init__(self, initX, initY): self.x = initX self.y = initY def getX(self): return self.x def getY(self): return self.y def distanceFromOrigin(self): return ((self.x ** 2) + (self.y ** 2)) ** 0.5 def distance(self, point2): xdiff = point2.getX()-self.getX() ydiff = point2.getY()-self.getY() dist = math.sqrt(xdiff**2 + ydiff**2) return dist p = Point(4,3) q = Point(0,0) print(p.distance(q))   "
},
{
  "id": "p-2724",
  "level": "2",
  "url": "classes_objects-as-arguments-and-parameters.html#p-2724",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "not "
},
{
  "id": "classes_converting-an-object-to-a-string",
  "level": "1",
  "url": "classes_converting-an-object-to-a-string.html",
  "type": "Section",
  "number": "13.7",
  "title": "Converting an Object to a String",
  "body": " Converting an Object to a String  When we're working with classes and objects, it is often necessary to print an object (that is, to print the state of an object). Consider the example below.   class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" def __init__(self, initX, initY): self.x = initX self.y = initY def getX(self): return self.x def getY(self): return self.y def distanceFromOrigin(self): return ((self.x ** 2) + (self.y ** 2)) ** 0.5 p = Point(7,6) print(p)   The print function shown above produces a string representation of the Point p . The default functionality provided by Python tells you that p is an object of type Point . However, it does not tell you anything about the specific state of the point.  We can improve on this representation if we include a special method call __str__ . Notice that this method uses the same naming convention as the constructor, that is two underscores before and after the name. It is common that Python uses this naming technique for special methods.  The __str__ method is responsible for returning a string representation as defined by the class creator. In other words, you as the programmer, get to choose what a Point should look like when it gets printed. In this case, we have decided that the string representation will include the values of x and y as well as some identifying text. It is required that the __str__ method create and return a string.  Whatever string the __str__ method for a class returns, that is the string that will print when you put any instance of that class in a print statement. For that reason, the string that a class's __str__ method returns should usually include values of instance variables. If a point has x value 3 and y value 4, but another point has x value 5 and y value 9, those two Point objects should probably look different when you print them, right?  Take a look at the code below.   class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" def __init__(self, initX, initY): self.x = initX self.y = initY def getX(self): return self.x def getY(self): return self.y def distanceFromOrigin(self): return ((self.x ** 2) + (self.y ** 2)) ** 0.5 def __str__(self): return f\"x = {self.x}, y = {self.y}\" p = Point(7,6) print(p)   When we run the program above you can see that the print function now shows the string that we chose.  Now, you ask, don't we already have a str type converter that can turn our object into a string? Yes we do!  And doesn't print automatically use this when printing things? Yes again!  However, as we saw earlier, these automatic mechanisms do not do exactly what we want. Python provides many default implementations for methods that we as programmers will probably want to change. When a programmer changes the meaning of a method we say that we override the method. Note also that the str type converter function uses whatever __str__ method we provide.   Check Your Understanding      Create a class called Cereal that accepts three inputs: 2 strings and 1 integer, and assigns them to 3 instance variables in the constructor: name , brand , and fiber . When an instance of Cereal is printed, the user should see the following: [name] cereal is produced by [brand] and has [fiber integer] grams of fiber in every serving! To the variable name c1 , assign an instance of Cereal whose name is \"Corn Flakes\" , brand is \"Kellogg's\" , and fiber is 2 . To the variable name c2 , assign an instance of Cereal whose name is \"Honey Nut Cheerios\" , brand is \"General Mills\" , and fiber is 3 . Practice printing both!      ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(c1.__str__(), \"Corn Flakes cereal is produced by Kellogg's and has 2 grams of fiber in every serving!\", \"Testing that c1 prints correctly.\") def testTwo(self): self.assertEqual(c2.__str__(), \"Honey Nut Cheerios cereal is produced by General Mills and has 3 grams of fiber in every serving!\", \"Testing that c2 prints correctly.\") myTests().main()   "
},
{
  "id": "p-2735",
  "level": "2",
  "url": "classes_converting-an-object-to-a-string.html#p-2735",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "override "
},
{
  "id": "p-2736",
  "level": "2",
  "url": "classes_converting-an-object-to-a-string.html#p-2736",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check Your Understanding "
},
{
  "id": "classes_instances-as-return-values",
  "level": "1",
  "url": "classes_instances-as-return-values.html",
  "type": "Section",
  "number": "13.8",
  "title": "Instances as Return Values",
  "body": " Instances as Return Values  Functions and methods can return objects. This is actually nothing new since everything in Python is an object and we have been returning values for quite some time. (You can also have lists or tuples of object instances, etc.) The difference here is that we want to have the method create an object using the constructor and then return it as the value of the method.  Suppose you have a point object and wish to find the midpoint halfway between it and some other target point. We would like to write a method, let's call it halfway , which takes another Point as a parameter and returns the Point that is halfway between the point and the target point it accepts as input.   class Point: def __init__(self, initX, initY): self.x = initX self.y = initY def getX(self): return self.x def getY(self): return self.y def distanceFromOrigin(self): return ((self.x ** 2) + (self.y ** 2)) ** 0.5 def __str__(self): return f\"x = {self.x}, y = {self.y}\" def halfway(self, target): mx = (self.x + target.x)\/2 my = (self.y + target.y)\/2 return Point(mx, my) p = Point(3,4) q = Point(5,12) mid = p.halfway(q) # note that you would have exactly the same result if you instead wrote # mid = q.halfway(p) # because they are both Point objects, and the middle is the same no matter what print(mid) print(mid.getX()) print(mid.getY())   The resulting Point, mid , has an x value of 4 and a y value of 8. We can also use any other methods on mid since it is a Point object.  "
},
{
  "id": "classes_class-variables-and-instance-variables",
  "level": "1",
  "url": "classes_class-variables-and-instance-variables.html",
  "type": "Section",
  "number": "13.9",
  "title": "Class Variables and Instance Variables",
  "body": " Class Variables and Instance Variables  You have already seen that each instance of a class has its own namespace with its own instance variables. Two instances of the Point class each have their own instance variable x. Setting x in one instance doesn't affect the other instance.  A class can also have class variables. A class variable is set as part of the class definition.  For example, consider the following version of the Point class. Here we have added a graph method that generates a string representing a little text-based graph with the Point plotted on the graph. It's not a very pretty graph, in part because the y-axis is stretched like a rubber band, but you can get the idea from this.  Note that there is an assignment to the variable printed_rep on line 4. It is not inside any method. That makes it a class variable. It is accessed in the same way as instance variables. For example, on line 16, there is a reference to self.printed_rep. If you change line 4, you have it print a different character at the x,y coordinates of the Point in the graph.   class Point: \"\"\" Point class for representing and manipulating x,y coordinates. \"\"\" printed_rep = \"*\" def __init__(self, initX, initY): self.x = initX self.y = initY def graph(self): rows = [] size = max(int(self.x), int(self.y)) + 2 for j in range(size-1) : if (j+1) == int(self.y): special_row = str((j+1) % 10) + (\" \"*(int(self.x) -1)) + self.printed_rep rows.append(special_row) else: rows.append(str((j+1) % 10)) rows.reverse() # put higher values of y first x_axis = \"\" for i in range(size): x_axis += str(i % 10) rows.append(x_axis) return \"\\n\".join(rows) p1 = Point(2, 3) p2 = Point(3, 12) print(p1.graph()) print() print(p2.graph())   To be able to reason about class variables and instance variables, it is helpful to know the rules that the python interpreter uses. That way, you can mentally simulate what the interpreter does.    When the interpreter sees an expression of the form <obj>.<varname>, it:     Checks if the object has an instance variable set. If so, it uses that value.    If it doesn't find an instance variable, it checks whether the class has a class variable. If so it uses that value.    If it doesn't find an instance or a class variable, it creates a runtime error (actually, it does one other check first, which you will learn about in the next chapter).       When the interpreter sees an assignment statement of the form <obj>.<varname> = <expr>, it:     Evaluates the expression on the right-hand side to yield some python object;    Sets the instance variable <varname> of <obj> to be bound to that python object. Note that an assignment statement of this form never sets the class variable; it only sets the instance variable.       In order to set the class variable, you use an assignment statement of the form <varname> = <expr> at the top-level in a class definition, like on line 4 in the code above to set the class variable printed_rep.    In case you are curious, method definitions also create class variables. Thus, in the code above, graph becomes a class variable that is bound to a function\/method object. p1.graph() is evaluated by:     looking up p1 and finding that it's an instance of Point    looking for an instance variable called graph in p1, but not finding one    looking for a class variable called graph in p1's class, the Point class; it finds a function\/method object    Because of the () after the word graph, it invokes the function\/method object, with the parameter self bound to the object p1 points to.       Try running it in codelens and see if you can follow how it all works.  "
},
{
  "id": "classes_thinking-about-classes-and-instances",
  "level": "1",
  "url": "classes_thinking-about-classes-and-instances.html",
  "type": "Section",
  "number": "13.10",
  "title": "Thinking About Classes and Instances",
  "body": " Thinking About Classes and Instances  You can now imagine some reasons you may want to define a class. You have seen examples of creating types that are more complicated or specific than the ones built in to Python (like lists or strings). Turtle , with all the instance variables and methods you learned about using earlier in the semester, is a class that programmers defined which is now included in the Python language. In this chapter, we defined Point with some functionality that can make it easier to write programs that involve x,y coordinate Point instances. And shortly, you'll see how you can define classes to represent objects in a game.  You can also use self-defined classes to hold data – for example, data you get from making a request to a REST API.  Before you decide to define a new class, there are a few things to keep in mind, and questions you should ask yourself:     What is the data that you want to deal with? (Data about a bunch of songs from iTunes? Data about a bunch of tweets from Twitter? Data about a bunch of hashtag searches on Twitter? Two numbers that represent coordinates of a point on a 2-dimensional plane?)    What will one instance of your class represent? In other words, which sort of new thing in your program should have fancy functionality? One song? One hashtag? One tweet? One point? The answer to this question should help you decide what to call the class you define.    What information should each instance have as instance variables? This is related to what an instance represents. See if you can make it into a sentence. Each instance represents one < song > and each < song > has an < artist > and a < title > as instance variables. Or, Each instance represents a < Tweet > and each < Tweet > has a < user (who posted it) > and < a message content string > as instance variables.    What instance methods should each instance have? What should each instance be able to do ? To continue using the same examples: Maybe each song has a method that uses a lyrics API to get a long string of its lyrics. Maybe each song has a method that returns a string of its artist's name. Or for a tweet, maybe each tweet has a method that returns the length of the tweet's message. (Go wild!)    What should the printed version of an instance look like? (This question will help you determine how to write the __str__ method.) Maybe, Each song printed out will show the song title and the artist's name. or Each Tweet printed out will show the username of the person who posted it and the message content of the tweet.     After considering those questions and making decisions about how you're going to get started with a class definition, you can begin to define your class.  Remember that a class definition, like a function definition, is a general description of what every instance of the class should have . (Every Point has an x and a y .) The class instances are specific: e.g. the Point with a specific x and y >. You might have a Point with an x value of 3 and a y value of 2, so for that particular instance of the class  Point , you'd pass in 3 and 2 to the constructor, the __init__ method, like so: new_point = Point(3,2) , as you saw in the last sections.  "
},
{
  "id": "p-2764",
  "level": "2",
  "url": "classes_thinking-about-classes-and-instances.html#p-2764",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "What is the data that you want to deal with? What will one instance of your class represent? What information should each instance have as instance variables? What instance methods should each instance have? What should the printed version of an instance look like? "
},
{
  "id": "classes_a-tamagotchi-game",
  "level": "1",
  "url": "classes_a-tamagotchi-game.html",
  "type": "Section",
  "number": "13.11",
  "title": "A Tamagotchi Game",
  "body": " A Tamagotchi Game  There are also a lot of interesting ways to put user-defined classes to use that don't involve data from the internet. Let's pull all these mechanics together in a slightly more interesting way than we got with the Point class. Remember Tamagotchis , the little electronic pets? As time passed, they would get hungry or bored. You had to clean up after them or they would get sick. And you did it all with a few buttons on the device.  We are going to make a simplified, text-based version of that. In your problem set we will extend this further.    First, let's start with a class Pet . Each instance of the class will be one electronic pet for the user to take care of. Each instance will have a current state, consisting of three instance variables:     hunger, an integer    boredom, an integer    sounds, a list of strings, each a word that the pet has been taught to say       In the __init__ method, hunger and boredom are initialized to random values between 0 and the threshold for being hungry or bored. The sounds instance variable is initialized to be a copy of the class variable with the same name. The reason we make a copy of the list is that we will perform destructive operations (appending new sounds to the list). If we didn't make a copy, then those destructive operations would affect the list that the class variable points to, and thus teaching a sound to any of the pets would teach it to all instances of the class!  There is a clock_tick method which just increments the boredom and hunger instance variables, simulating the idea that as time passes, the pet gets more bored and hungry.  The __str__ method produces a string representation of the pet's current state, notably whether it is bored or hungry or whether it is happy. It's bored if the boredom instance variable is larger than the threshold, which is set as a class variable.  To relieve boredom, the pet owner can either teach the pet a new word, using the teach() method, or interact with the pet, using the hi() method. In response to teach() , the pet adds the new word to its list of words. In response to the hi() method, it prints out one of the words it knows, randomly picking one from its list of known words. Both hi() and teach() cause an invocation of the reduce_boredom() method. It decrements the boredom state by an amount that it reads from the class variable boredom_decrement . The boredom state can never go below 0 .  To relieve hunger, we call the feed() method.   from random import randrange class Pet(): boredom_decrement = 4 hunger_decrement = 6 boredom_threshold = 5 hunger_threshold = 10 sounds = ['Mrrp'] def __init__(self, name = \"Kitty\"): self.name = name self.hunger = randrange(self.hunger_threshold) self.boredom = randrange(self.boredom_threshold) self.sounds = self.sounds[:] # copy the class attribute, so that when we make changes to # it, we won't affect the other Pets in the class def clock_tick(self): self.boredom += 1 self.hunger += 1 def mood(self): if self.hunger <= self.hunger_threshold and self.boredom <= self.boredom_threshold: return \"happy\" elif self.hunger > self.hunger_threshold: return \"hungry\" else: return \"bored\" def __str__(self): state = f\" I'm {self.name}. I feel {self.mood()}. Hunger {self.hunger} Boredom {self.boredom} Words {self.sounds}\" return state def hi(self): print(self.sounds[randrange(len(self.sounds))]) self.reduce_boredom() def teach(self, word): self.sounds.append(word) self.reduce_boredom() def feed(self): self.reduce_hunger() def reduce_hunger(self): self.hunger = max(0, self.hunger - self.hunger_decrement) def reduce_boredom(self): self.boredom = max(0, self.boredom - self.boredom_decrement)   Let's try making a pet and playing with it a little. Add some of your own commands, too, and keep printing p1 to see what the effects are. If you want to directly inspect the state, try printing p1.boredom or p1.hunger .   p1 = Pet(\"Fido\") print(p1) for i in range(10): p1.clock_tick() print(p1) p1.feed() p1.hi() p1.teach(\"Boo\") for i in range(10): p1.hi() print(p1)   That's all great if you want to interact with the pet by writing python code. Let's make a game that non-programmers can play.  We will use the Iteration Listener pattern. At each iteration, we will display a text prompt reminding the user of what commands are available.  The user will have a list of pets, each with a name. The user can issue a command to adopt a new pet, which will create a new instance of Pet. Or the user can interact with an existing pet, with a Greet, Teach, or Feed command.  No matter what the user does, with each command entered, the clock ticks for all their pets. Watch out, if you have too many pets, you won't be able to keep them all satisfied!   import sys sys.setExecutionLimit(60000) def whichone(petlist, name): for pet in petlist: if pet.name == name: return pet return None # no pet matched def play(): animals = [] option = \"\" base_prompt = \"\"\" Quit Adopt <petname_with_no_spaces_please> Greet <petname> Teach <petname> <word> Feed <petname> Choice: \"\"\" feedback = \"\" while True: action = input(feedback + \"\\n\" + base_prompt) feedback = \"\" words = action.split() if len(words) > 0: command = words[0] else: command = None if command == \"Quit\": print(\"Exiting...\") return elif command == \"Adopt\" and len(words) > 1: if whichone(animals, words[1]): feedback += \"You already have a pet with that name\\n\" else: animals.append(Pet(words[1])) elif command == \"Greet\" and len(words) > 1: pet = whichone(animals, words[1]) if not pet: feedback += \"I didn't recognize that pet name. Please try again.\\n\" print() else: pet.hi() elif command == \"Teach\" and len(words) > 2: pet = whichone(animals, words[1]) if not pet: feedback += \"I didn't recognize that pet name. Please try again.\" else: pet.teach(words[2]) elif command == \"Feed\" and len(words) > 1: pet = whichone(animals, words[1]) if not pet: feedback += \"I didn't recognize that pet name. Please try again.\" else: pet.feed() else: feedback+= \"I didn't understand that. Please try again.\" for pet in animals: pet.clock_tick() feedback += \"\\n\" + pet.__str__() play()   "
},
{
  "id": "classes_glossary",
  "level": "1",
  "url": "classes_glossary.html",
  "type": "Section",
  "number": "13.12",
  "title": "Glossary",
  "body": " Glossary    attribute  One of the named data items that makes up an instance.    class  A user-defined compound type. A class can also be thought of as a template for the objects that are instances of it.    constructor  Every class has a factory , called by the same name as the class, for making new instances. If the class has an initializer method , this method is used to get the attributes (i.e. the state) of the new object properly set up.    initializer method  A special method in Python (called __init__ ) that is invoked automatically to set a newly created object's attributes to their initial (factory-default) state.    instance  An object whose type is of some class. The words instance and object are used interchangeably.    instance variable  A variable that stores a value associated with the instance. The instance variables together store the state of an instance.    instantiate  To create an instance of a class, and to run its initializer.    method  A function that is defined inside a class definition and is invoked on instances of that class.    object  A compound data type that is often used to model a thing or concept in the real world. It bundles together the data and the operations that are relevant for that kind of data. Instance and object are used interchangeably.    object-oriented programming  A powerful style of programming in which data and the operations that manipulate it are organized into classes and methods.    object-oriented language  A language that provides features, such as user-defined classes and inheritance, that facilitate object-oriented programming.    "
},
{
  "id": "classes_chapter-assessment",
  "level": "1",
  "url": "classes_chapter-assessment.html",
  "type": "Section",
  "number": "13.13",
  "title": "Chapter Assessment",
  "body": " Chapter Assessment   Define a class called Bike that accepts a string and a float as input, and assigns those inputs respectively to two instance variables, color and price . Assign to the variable testOne an instance of Bike whose color is blue and whose price is 89.99 . Assign to the variable testTwo an instance of Bike whose color is purple and whose price is 25.0 .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(testOne.color, \"blue\", \"Testing that testOne has the correct color assigned.\") self.assertEqual(testOne.price, 89.99, \"Testing that testOne has the correct price assigned.\") def testTwo(self): self.assertEqual(testTwo.color, \"purple\", \"Testing that testTwo has the correct color assigned.\") self.assertEqual(testTwo.price, 25.0, \"Testing that testTwo has the correct color assigned.\") myTests().main()    Create a class called AppleBasket whose constructor accepts two inputs: a string representing a color, and a number representing a quantity of apples. The constructor should initialize two instance variables: apple_color and apple_quantity . Write a class method called increase that increases the quantity by 1 each time it is invoked. You should also write a __str__ method for this class that returns a string of the format: \"A basket of [quantity goes here] [color goes here] apples.\" e.g. \"A basket of 4 red apples.\" or \"A basket of 50 blue apples.\" (Writing some test code that creates instances and assigns values to variables may help you solve this problem!)   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): tester = AppleBasket(\"red\",4) self.assertEqual(tester.apple_quantity, 4, \"Testing the initialization of the apple_quantity inst var.\") def testTwo(self): tester = AppleBasket(\"red\",4) tester.increase() self.assertEqual(tester.apple_quantity, 5, \"Testing the increase method\") def testThree(self): tester = AppleBasket(\"green\",17) self.assertEqual(tester.__str__(),\"A basket of 17 green apples.\") myTests().main()    Define a class called BankAccount that accepts the name you want associated with your bank account in a string, and an integer that represents the amount of money in the account. The constructor should initialize two instance variables from those inputs: name and amt . Add a string method so that when you print an instance of BankAccount , you see \"Your account, [name goes here], has [start_amt goes here] dollars.\" Create an instance of this class with \"Bob\" as the name and 100 as the amount. Save this to the variable t1 .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(t1.__str__(), \"Your account, Bob, has 100 dollars.\", \"Testing that t1 is assigned to correct value\") myTests().main()   "
},
{
  "id": "ac13_13_1",
  "level": "2",
  "url": "classes_chapter-assessment.html#ac13_13_1",
  "type": "Checkpoint",
  "number": "13.13.1",
  "title": "",
  "body": " Define a class called Bike that accepts a string and a float as input, and assigns those inputs respectively to two instance variables, color and price . Assign to the variable testOne an instance of Bike whose color is blue and whose price is 89.99 . Assign to the variable testTwo an instance of Bike whose color is purple and whose price is 25.0 .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(testOne.color, \"blue\", \"Testing that testOne has the correct color assigned.\") self.assertEqual(testOne.price, 89.99, \"Testing that testOne has the correct price assigned.\") def testTwo(self): self.assertEqual(testTwo.color, \"purple\", \"Testing that testTwo has the correct color assigned.\") self.assertEqual(testTwo.price, 25.0, \"Testing that testTwo has the correct color assigned.\") myTests().main()  "
},
{
  "id": "ac13_13_2",
  "level": "2",
  "url": "classes_chapter-assessment.html#ac13_13_2",
  "type": "Checkpoint",
  "number": "13.13.2",
  "title": "",
  "body": " Create a class called AppleBasket whose constructor accepts two inputs: a string representing a color, and a number representing a quantity of apples. The constructor should initialize two instance variables: apple_color and apple_quantity . Write a class method called increase that increases the quantity by 1 each time it is invoked. You should also write a __str__ method for this class that returns a string of the format: \"A basket of [quantity goes here] [color goes here] apples.\" e.g. \"A basket of 4 red apples.\" or \"A basket of 50 blue apples.\" (Writing some test code that creates instances and assigns values to variables may help you solve this problem!)   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): tester = AppleBasket(\"red\",4) self.assertEqual(tester.apple_quantity, 4, \"Testing the initialization of the apple_quantity inst var.\") def testTwo(self): tester = AppleBasket(\"red\",4) tester.increase() self.assertEqual(tester.apple_quantity, 5, \"Testing the increase method\") def testThree(self): tester = AppleBasket(\"green\",17) self.assertEqual(tester.__str__(),\"A basket of 17 green apples.\") myTests().main()  "
},
{
  "id": "ac13_13_3",
  "level": "2",
  "url": "classes_chapter-assessment.html#ac13_13_3",
  "type": "Checkpoint",
  "number": "13.13.3",
  "title": "",
  "body": " Define a class called BankAccount that accepts the name you want associated with your bank account in a string, and an integer that represents the amount of money in the account. The constructor should initialize two instance variables from those inputs: name and amt . Add a string method so that when you print an instance of BankAccount , you see \"Your account, [name goes here], has [start_amt goes here] dollars.\" Create an instance of this class with \"Bob\" as the name and 100 as the amount. Save this to the variable t1 .   ===== from unittest.gui import TestCaseGui class myTests(TestCaseGui): def testOne(self): self.assertEqual(t1.__str__(), \"Your account, Bob, has 100 dollars.\", \"Testing that t1 is assigned to correct value\") myTests().main()  "
},
{
  "id": "additional_resources-command_line",
  "level": "1",
  "url": "additional_resources-command_line.html",
  "type": "Section",
  "number": "14.1",
  "title": "The Command Line",
  "body": " The Command Line  The command line , or CLI, is a powerful tool that provides direct access to the core functionalities of your operating system. While graphical interfaces are widely used, understanding the command line and its basic usage is essential for quickly navigating file systems, managing source control, and running programs.   GitBash  For this section, GitBash will be used as the command line interface. GitBash is a command line interface that is included with Git for Windows. It is a Bash shell emulator that provides a Linux-like CLI environment on Windows. GitBash can be downloaded from https:\/\/gitforwindows.org\/ .  Once GitBash is installed, it can be opened through a shortcut, or by right-clicking in a folder and selecting Git Bash Here .  GitBash will open in the current directory. The command line prompt will be displayed, followed by the current directory. The prompt will be different depending on the operating system. For Windows, the prompt will be $ . For Linux and Mac, the prompt will be % .    Commands  Command lines allow users to interact with the operating system by entering commands. Commands are entered into the command line, and then executed by pressing the Enter key. Commands can be entered one at a time, or multiple commands can be entered on the same line by separating them with a semicolon.   Navigation Commands  Arguably the most important command is cd , which is used to change directories. Directories are the folders that contain files. The current directory is displayed in the command line prompt. To change directories, enter cd followed by the name of the directory. For example, to change to the src directory, enter cd src .  In order to navigate into a parent directory - that is, the directory that contains the current directory - use cd .. . For example, if the current directory is src , then cd .. will change to the parent directory.  Next, the ls command is used to list the contents of the current directory. This command will list the files and directories in the current directory. For example, if the current directory contains the files main.py and README.md , then ls will list these files. Folders, when listed, will not have a file extension, and instead will be followed by a forward slash. For example, if the current directory contains the folder src , then ls will list src\/ .    File and Directory Commands  To create a new directory, use the mkdir command. For example, to create a new directory named src , enter mkdir src .  To create a new file, use the touch command. For example, to create a new file named main.py , enter touch main.py .  To remove a file, use the rm command. For example, to remove the file main.py , enter rm main.py . Be warned, this command will permanently delete the file.    Using the following file structure, move into the src directory, remove main.py , add the file not_main.py , and return to the home directory:  home\/ src\/ main.py README.md test\/ test_main.py README.md plans\/ whatever.txt old.txt    ls    cd src    rm main.py    touch not_main.py    cd ..    main.py  README.md     "
},
{
  "id": "p-2807",
  "level": "2",
  "url": "additional_resources-command_line.html#p-2807",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "command line "
},
{
  "id": "pp11_5_1",
  "level": "2",
  "url": "additional_resources-command_line.html#pp11_5_1",
  "type": "Checkpoint",
  "number": "14.1.1",
  "title": "",
  "body": " Using the following file structure, move into the src directory, remove main.py , add the file not_main.py , and return to the home directory:  home\/ src\/ main.py README.md test\/ test_main.py README.md plans\/ whatever.txt old.txt    ls    cd src    rm main.py    touch not_main.py    cd ..    main.py  README.md   "
},
{
  "id": "additional_resources-intro-to-git",
  "level": "1",
  "url": "additional_resources-intro-to-git.html",
  "type": "Section",
  "number": "14.2",
  "title": "Intro to Git",
  "body": " Intro to Git   Git is a version control system that allows you to track changes to files over time. It allows users to track changes to files, revert to earlier versions, and collaborate with others. Git is a distributed version control system, which means that the entire codebase and history is available on every developer's computer, which allows for easy branching and merging.   The History of Git  Git was created by Linus Torvalds, the creator of Linux, in 2005. He created Git because he was unhappy with the existing version control systems available at the time. He wanted a system that was fast and simple. Git was designed to be a low-level version control system, which means that it is designed to track changes to files, but it did not provide a graphical user interface - however, there are now many GUIs available for Git. Instead, Git provides a command-line interface, which allows users to perform any action that they want. This allows users to create their own workflows and tools that work best for them.    Repositories  A repository is a collection of files and the history of those files. A repository can be thought of as a folder that contains all of the files and folders in a project, as well as the history of those files.  For most projects, you'll be setting up a repository on GitHub, which is a website that hosts Git repositories. There are other alternatives out there, such as Bitbucket and GitLab, but GitHub is the most popular.  Creating a repository on GitHub requires the following steps:    Select the New button in the top left corner of the screen.    Enter a name for your repository. This should be a short, descriptive name that describes the project.    Select the privacy level for your repository. If you want to share your code with others, you can select Public . If you want to keep your code private, or if you want to share your code with a select group of people, you can select Private .    If you want to add a README file to your repository, that is a document detailing additional information about your project, you can select the checkbox.    Consider adding a .gitignore file to your repository. This is a file that tells Git to ignore certain files and folders. This is helpful for hiding things like passwords and other sensitive information, as well as files that are generated by your code that you don't want to track.    Also consider adding a license file to your repository. This is a file that tells others how they can use your code. There are many different licenses available, but the most common is the MIT license, which allows others to use your code for any purpose, as long as they give you credit. A similar license is the GNU General Public License, which allows others to use your code for any purpose, as long as they give you credit and allow others to use their code for any purpose.    Select the Create repository button.      Cloning a Repository   Cloning a repository means downloading a copy of the repository to your computer. This allows you to make changes to the files in the repository, and then upload those changes back to the repository. This is the most common way to work with Git.  To clone a repository, you'll need to have Git installed on your computer. You can download Git from git-scm.com\/downloads . Once you have Git installed, you can clone a repository by running the following command:   git clone <YOUR_REPOSITORY_URL>   You can find the URL for your repository by selecting the Code button on your repository's page on GitHub, and then selecting the HTTPS option. All Git repositories hosted on GitHub end in .git .    Staging and Committing   Staging a file means telling Git that you want to include the file in your next commit. A commit is a snapshot of the files in your repository at a given point in time. A commit is a way to save your work, and it allows you to revert back to that point in time if you make a mistake.  To stage a file, you can run the following command:   git add <FILE>   To stage all of the files in your repository, you can run the following command:   git add .   In order to verify that the files have been staged, you can run the following command:   git status   This will show you all of the files that have been staged, as well as all of the files that have been modified since the last commit.  Once you have staged all of the files that you want to include in your commit, you can run the following command to create a commit:   git commit -m \"YOUR COMMIT MESSAGE\"   The commit message should be a short description of the changes that you made. If you'd like to add a second line to your commit message, you can tag on the -m flag again, followed by another message.    Pushing and Pulling   Pushing a commit means uploading the commit to the repository on GitHub. This allows others to see the changes that you've made.  To push a commit, you can run the following command:   git push   Up to this point outlines the basic workflow for working with Git. You can make changes to the files in your repository, stage the files that you want to include in your commit, create a commit, and then push the commit to GitHub.  If you are working with others, or working on multiple computers, you may need to pull changes from GitHub. Pulling changes means downloading the latest changes from GitHub. This allows you to see the changes that others have made, and it allows you to work on the latest version of the code.  To pull changes from GitHub, you can run the following command:   git pull    Rule of Thumb  A good rule of thumb is to always pull before you start working on a project, as well as before your commit and push your changes. This ensures that you are working on the latest version of the code, and that you don't have any conflicts when you push your changes. Conflicts and how to resolve them will be covered in a later section.    "
},
{
  "id": "p-2819",
  "level": "2",
  "url": "additional_resources-intro-to-git.html#p-2819",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Git "
},
{
  "id": "p-2821",
  "level": "2",
  "url": "additional_resources-intro-to-git.html#p-2821",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "repository "
},
{
  "id": "p-2831",
  "level": "2",
  "url": "additional_resources-intro-to-git.html#p-2831",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cloning "
},
{
  "id": "p-2834",
  "level": "2",
  "url": "additional_resources-intro-to-git.html#p-2834",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Staging commit "
},
{
  "id": "p-2841",
  "level": "2",
  "url": "additional_resources-intro-to-git.html#p-2841",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pushing "
},
{
  "id": "p-2844",
  "level": "2",
  "url": "additional_resources-intro-to-git.html#p-2844",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pull "
},
{
  "id": "note-50",
  "level": "2",
  "url": "additional_resources-intro-to-git.html#note-50",
  "type": "Note",
  "number": "14.2.1",
  "title": "Rule of Thumb.",
  "body": " Rule of Thumb  A good rule of thumb is to always pull before you start working on a project, as well as before your commit and push your changes. This ensures that you are working on the latest version of the code, and that you don't have any conflicts when you push your changes. Conflicts and how to resolve them will be covered in a later section.  "
},
{
  "id": "additional_resources-advanced-git",
  "level": "1",
  "url": "additional_resources-advanced-git.html",
  "type": "Section",
  "number": "14.3",
  "title": "Advanced Git",
  "body": " Advanced Git  As you continue to use Git, whether it be individually or as part of a team, you will encounter more advanced concepts and workflows. This section will introduce some of these concepts.   Conflicts  Conflicts occur when two or more people make changes to the same file. Git will automatically merge changes when possible, but when it cannot, it will mark the file as having a conflict. When this happens, you will need to manually resolve the conflict.  When a conflict occurs, Git will mark the file with conflict markers. These markers look like this:   <<<<<<<< HEAD This is the original text. >>>>>>>> 77976da35a11db4580b80ae27e8d65caf5208086 This is the modified text.   The text between the <<<<<<<< HEAD and ======= markers is the original text. The text between the ======= and >>>>>>>> 77976da35a11db4580b80ae27e8d65caf5208086 markers is the modified text. You will need to manually edit the file to resolve the conflict. Once you have resolved the conflict, you will need to add the file to the staging area and commit it.    Branching  Branching is a powerful feature of Git. Branches allow you to work on multiple features at the same time. Branches also allow you to work on features without affecting the main codebase.  When you create a branch, you are creating a copy of the current state of the repository. You can then make changes to the branch without affecting the main codebase. When you are ready to merge your changes into the main codebase, you can merge the branch into the main codebase.  To create a branch, use the git branch command. For example, to create a branch named feature , you would use the following command:   git branch feature   To switch to a branch, use the git checkout command. For example, to switch to the feature branch, you would use the following command:   git checkout feature   To create a branch and switch to it at the same time, use the git checkout command with the -b option. For example, to create a branch named feature and switch to it, you would use the following command:   git checkout -b feature     Merging Branches  Merging is the process of combining two or more branches into one. When you merge branches, Git will automatically merge changes when possible. When it cannot, it will mark the file as having a conflict. When this happens, you will need to manually resolve the conflict.  To merge a branch into the current branch, use the git merge command. For example, to merge the feature branch into the current branch, you would use the following command:   git merge feature   When you merge a branch into the current branch, Git will automatically merge changes when possible. When it cannot, it will mark the file as having a conflict. When this happens, you will need to manually resolve the conflict.    Rebasing  Rebasing is the process of moving a branch to a new base commit. When you rebase a branch, Git will automatically merge changes when possible. When it cannot, it will mark the file as having a conflict. When this happens, you will need to manually resolve the conflict.  To rebase a branch, use the git rebase command. For example, to rebase the feature branch onto the master branch, you would use the following command:   git rebase master   When you rebase a branch, Git will automatically merge changes when possible. When it cannot, it will mark the file as having a conflict. When this happens, you will need to manually resolve the conflict.    Stashing  Stashing is the process of saving your changes without committing them. When you stash your changes, Git will save your changes in a temporary location. You can then restore your changes at a later time.  To stash your changes, use the git stash command. To restore your changes, use the git stash pop command. For example, to restore your changes, you would use the following command:   git stash pop    "
},
{
  "id": "additional_resources-books-bookshelves",
  "level": "1",
  "url": "additional_resources-books-bookshelves.html",
  "type": "Section",
  "number": "14.4",
  "title": "Comprehensive Practice Program: Books and Bookshelves",
  "body": " Comprehensive Practice Program: Books and Bookshelves  This exercise is designed to give you some experience working with objects and classes. It is advised that you've completed the Classes exercises before attempting.  You're given two classes, Bookshelf and Book . Book s have a few properties: a title , an author , and a year of publication . We set these when instantiating the book. A Bookshelf only has one property: a books list . It's empty by default.   class Book: def __init__(self, title: str, author: str, year: int): self.title = title self.author = author self.year = year class Bookshelf: def __init__(self): self.books = [] def add_book(self, book: Book) -> None: self.books.append(book)    Adding Some Books  Using the class templates from above, create a file, main.py , and instantiate a Bookshelf object. Then, create a few Book objects and add them to the Bookshelf object.  Here are some books you can use:     Book Title  Author  Year    No Longer Human  Osamu Dazai  1948    The Parallax View  Slavoj Žižek  2006    Fear Stalks the Land!  Thom Yorke  2021       Confirming Book Data  It's important to make sure the data you're parsing ends up in the right places. Create a method in the Book class called get_data() to return the book's information. I really like APA, so format it like this:   book = Book(\"No Longer Human\", \"Osamu Dazai\", 1948) print(book.get_data()) # Dazai, O. (1948). No Longer Human.   Now loop through every book on the shelf and print out its data.  Hint  It may be a good idea to utilize fstrings and the .split() method.      Searching for Books  Now that all the book data is loaded in the Bookshelf object, let's create a few methods to search for books.  Create a method in the Bookshelf class called get_book_by_name() that takes a string as an argument and returns the book with the matching name. If no book is found, return None . Don't worry about case sensitivity for now.  Create another method in the Bookshelf class called get_book_by_author() that takes a string as an argument and returns the book with the matching author by last name. If no book is found, return None . Again, don't worry about case sensitivity for now, and don't worry about authors with multiple books. For now, each author only has one book.  Now, create a method in the Bookshelf class called get_book_by_year() that takes an integer as an argument and returns the book with the matching year. If no book is found, return None .  Finally, create a method in the Bookshelf class called get_book_by_position() that takes an integer as an argument and returns the book at the matching position. If no book is found, return None .    Filling Up Bookshelves  Now that you're able to search for books, let's fill up the bookshelf with some more books. Take the following list of books and save it as a text file. Then, write a function called load_books() that reads the file, turns each line into a Book object, and adds it to the Bookshelf object. You shouldn't need to use any try \/ except blocks for this.   No Longer Human,Osamu Dazai,1948 The Parallax View,Slavoj Žižek,2006 Fear Stalks the Land!,Thom Yorke,2021 A Certain Hunger,Chelsea Summers,2020 The Stranger,Albert Camus,1942 Annihilation,Jeff Vandermeer,2014 Player Piano,Kurt Vonnegut,1952 1984,George Orwell,1949 Brave New World,Aldous Huxley,1932 Farenheit 451,Ray Bradbury,1953 Metamorphosis,Franz Kafka,1915 Slaughterhouse-Five,Kurt Vonnegut,1969 Thus Spoke Zarathustra,Friedrich Nietzche,1885 Zen and the Art of Motorcycle Maintenance,Robert Pirsig,1974 Sapiens,Yuval Harari,2011 What If?,Randall Munroe,2014 The Tipping Point,Malcolm Gladwell,2000 Flash Boys,Michael Lewis,2014 Hacker Hoaxer Whistleblower Spy,Gabriella Coleman,2014 Kid A Mnesia,Thom Yorke,2021 The Consumer,Michael Gira,1994 Lapvona,Ottessa Moshfegh,2022 Spelunky,Derek Yu,2016 Siddhartha,Hermann Hesse,1922 The Great Gatsby,F. Scott Fitzgerald,1925 Lolita,Vladimir Nabakov,1955 Diary of an Oxygen Thief,Anonymous,2006 The Road,Cormac McCarthy,2006 Metamorphosis,Franz Kafka,2005 Crime and Punishment,Fyodor Dostoevsky,1866 A Litte Life,Hanya Yanagihara,2015 Gone Girl,Gillian Flynn,2012 Neuromancer,William Gibson,1984 Do Androids Dream of Electric Sheep?,Phillip K. Dick,1968 Story of Your Life,Ted Chiang,1998 The Big Short,Michael Lewis,2010 The Brothers Karamazov,Fyodor Dostoevsky,1880 2001: A Space Odyssey,Arthur C. Clarke,1968 The Myth of Sisyphus,Albert Camus,1942 On the Taboo Against Knowing Who You Are,Alan Watts,1966 Animal Farm,George Orwell,1945   You're gonna need to make some edits to some existing functions. Not all these authors have a last name, so you'll have to use their first name without an initial. Also, a few searching methods may need to be revised. Some books may have been written in the same year, or by the same author. If this is the case, return a string where each book is separated by a newline.    Final Touches  There are a few extra methods to include, just to add some more functionality and fix some issues.  There were a lot of classics on that list, so add a method to the Bookshelf class that returns a list of books written before a specified year. Make sure this method returns a list of Book objects, not strings. Also, make sure the year is inclusive.  Some authors appear on that list more than others. Write a method that returns a list of authors that have more than one book on the shelf. Make sure this method returns a list of strings, not Book objects.  Finally, there are some books that have been replaced by newer copies on the shelf. Write a method that finds any duplicate books and removes the older copies. Have this method return the number of books removed.   "
},
{
  "id": "table-12",
  "level": "2",
  "url": "additional_resources-books-bookshelves.html#table-12",
  "type": "Table",
  "number": "14.4.1",
  "title": "",
  "body": "   Book Title  Author  Year    No Longer Human  Osamu Dazai  1948    The Parallax View  Slavoj Žižek  2006    Fear Stalks the Land!  Thom Yorke  2021    "
},
{
  "id": "note-51",
  "level": "2",
  "url": "additional_resources-books-bookshelves.html#note-51",
  "type": "Note",
  "number": "14.4.2",
  "title": "Hint.",
  "body": " Hint  It may be a good idea to utilize fstrings and the .split() method.  "
},
{
  "id": "front-back-matter_preamble",
  "level": "1",
  "url": "front-back-matter_preamble.html",
  "type": "Subsection",
  "number": "A.1",
  "title": "0. PREAMBLE",
  "body": " 0. PREAMBLE  The purpose of this License is to make a manual, textbook, or other functional and useful document free in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others.  This License is a kind of copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software.  We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference.  "
},
{
  "id": "front-back-matter_applicability-and-definitions",
  "level": "1",
  "url": "front-back-matter_applicability-and-definitions.html",
  "type": "Subsection",
  "number": "A.2",
  "title": "1. APPLICABILITY AND DEFINITIONS",
  "body": " 1. APPLICABILITY AND DEFINITIONS  This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law.  A Modified Version of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language.  A Secondary Section is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document's overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them.  The Invariant Sections are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none.  The Cover Texts are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words.  A Transparent copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not Transparent is called Opaque .  Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only.  The Title Page means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such, Title Page means the text near the most prominent appearance of the work's title, preceding the beginning of the body of the text.  The publisher means any person or entity that distributes copies of the Document to the public.  A section Entitled XYZ means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as Acknowledgements , Dedications , Endorsements , or History .) To Preserve the Title of such a section when you modify the Document means that it remains a section Entitled XYZ according to this definition.  The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License.  "
},
{
  "id": "front-back-matter_verbatim-copying",
  "level": "1",
  "url": "front-back-matter_verbatim-copying.html",
  "type": "Subsection",
  "number": "A.3",
  "title": "2. VERBATIM COPYING",
  "body": " 2. VERBATIM COPYING  You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3.  You may also lend copies, under the same conditions stated above, and you may publicly display copies.  "
},
{
  "id": "front-back-matter_copying-in-quantity",
  "level": "1",
  "url": "front-back-matter_copying-in-quantity.html",
  "type": "Subsection",
  "number": "A.4",
  "title": "3. COPYING IN QUANTITY",
  "body": " 3. COPYING IN QUANTITY  If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document's license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects.  If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages.  If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public.  It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document.  "
},
{
  "id": "front-back-matter_modifications",
  "level": "1",
  "url": "front-back-matter_modifications.html",
  "type": "Subsection",
  "number": "A.5",
  "title": "4. MODIFICATIONS",
  "body": " 4. MODIFICATIONS  You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version:     A. Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission.    B. List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement.    C. State on the Title page the name of the publisher of the Modified Version, as the publisher.    D. Preserve all the copyright notices of the Document.    E. Add an appropriate copyright notice for your modifications adjacent to the other copyright notices.    F. Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below.    G. Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document's license notice.    H. Include an unaltered copy of this License.    I. Preserve the section Entitled History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled History in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence.    J. Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on. These may be placed in the History section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission.    K. For any section Entitled Acknowledgements or Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein.    L. Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles.    M. Delete any section Entitled Endorsements . Such a section may not be included in the Modified Version.    N. Do not retitle any existing section to be Entitled Endorsements or to conflict in title with any Invariant Section.    O. Preserve any Warranty Disclaimers.     If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version's license notice. These titles must be distinct from any other section titles.  You may add a section Entitled Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties—for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard.  You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one.  The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version.  "
},
{
  "id": "front-back-matter_combining-documents",
  "level": "1",
  "url": "front-back-matter_combining-documents.html",
  "type": "Subsection",
  "number": "A.6",
  "title": "5. COMBINING DOCUMENTS",
  "body": " 5. COMBINING DOCUMENTS  You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers.  The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work.  In the combination, you must combine any sections Entitled History in the various original documents, forming one section Entitled History ; likewise combine any sections Entitled Acknowledgements , and any sections Entitled Dedications . You must delete all sections Entitled Endorsements .  "
},
{
  "id": "front-back-matter_collections-of-documents",
  "level": "1",
  "url": "front-back-matter_collections-of-documents.html",
  "type": "Subsection",
  "number": "A.7",
  "title": "6. COLLECTIONS OF DOCUMENTS",
  "body": " 6. COLLECTIONS OF DOCUMENTS  You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects.  You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document.  "
},
{
  "id": "front-back-matter_aggregation-with-independent-works",
  "level": "1",
  "url": "front-back-matter_aggregation-with-independent-works.html",
  "type": "Subsection",
  "number": "A.8",
  "title": "7. AGGREGATION WITH INDEPENDENT WORKS",
  "body": " 7. AGGREGATION WITH INDEPENDENT WORKS  A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an aggregate if the copyright resulting from the compilation is not used to limit the legal rights of the compilation's users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document.  If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document's Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate.  "
},
{
  "id": "front-back-matter_translation",
  "level": "1",
  "url": "front-back-matter_translation.html",
  "type": "Subsection",
  "number": "A.9",
  "title": "8. TRANSLATION",
  "body": " 8. TRANSLATION  Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail.  If a section in the Document is Entitled Acknowledgements , Dedications , or History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title.  "
},
{
  "id": "front-back-matter_termination",
  "level": "1",
  "url": "front-back-matter_termination.html",
  "type": "Subsection",
  "number": "A.10",
  "title": "9. TERMINATION",
  "body": " 9. TERMINATION  You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License.  However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.  Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.  Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it.  "
},
{
  "id": "front-back-matter_future-revisions-of-this-license",
  "level": "1",
  "url": "front-back-matter_future-revisions-of-this-license.html",
  "type": "Subsection",
  "number": "A.11",
  "title": "10. FUTURE REVISIONS OF THIS LICENSE",
  "body": " 10. FUTURE REVISIONS OF THIS LICENSE  The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See http:\/\/www.gnu.org\/copyleft\/ .  Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License or any later version applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Document.  "
},
{
  "id": "front-back-matter_relicensing",
  "level": "1",
  "url": "front-back-matter_relicensing.html",
  "type": "Subsection",
  "number": "A.12",
  "title": "11. RELICENSING",
  "body": " 11. RELICENSING  Massive Multiauthor Collaboration Site (or MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A Massive Multiauthor Collaboration (or MMC ) contained in the site means any set of copyrightable works thus published on the MMC site.  CC-BY-SA means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization.  Incorporate means to publish or republish a Document, in whole or in part, as part of another Document.  An MMC is eligible for relicensing if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008.  The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing.  "
},
{
  "id": "front-back-matter_copyright-notice",
  "level": "1",
  "url": "front-back-matter_copyright-notice.html",
  "type": "Appendix",
  "number": "B",
  "title": "Copyright Notice",
  "body": " Copyright Notice   Copyright (C) Brad Miller, Paul Resnick, Lauren Murphy, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris  Meyers, and Dario Mitchell. Permission is granted to copy, distribute  and\/or modify this document under the terms of the GNU Free Documentation  License, Version 1.3 or any later version published by the Free Software  Foundation; with Invariant Sections being Forward, Prefaces, and  Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of  the license is included in the section entitled GNU Free Documentation License .   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
