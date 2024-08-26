const topics = {
    'Python': [
        { question: "What does Python stand for?", options: ["Python", "Pythons", "Pythoni", "Pythona"], correct: 0, explanation: "Python is named after Monty Python, not the snake." },
        { question: "What is the correct syntax to output 'Hello World' in Python?", options: ["print('Hello World')", "echo 'Hello World'", "console.log('Hello World')", "printf('Hello World')"], correct: 0, explanation: "In Python, you use 'print()' to output text." },
        { question: "Which data type is used to store text in Python?", options: ["int", "float", "str", "bool"], correct: 2, explanation: "The 'str' type is used for storing text." },
        { question: "How do you create a list in Python?", options: ["list = []", "list = {}", "list = ()", "list = ''"], correct: 0, explanation: "Lists in Python are created using square brackets." },
        { question: "Which of the following is not a valid Python keyword?", options: ["if", "while", "foreach", "else"], correct: 2, explanation: "'foreach' is not a valid keyword in Python." },
        { question: "How do you comment a single line in Python?", options: ["// This is a comment", "# This is a comment", "<!-- This is a comment -->", "/* This is a comment */"], correct: 1, explanation: "In Python, single-line comments are created using the '#' symbol." },
        { question: "Which of the following is used for function definition in Python?", options: ["def", "func", "function", "define"], correct: 0, explanation: "Functions in Python are defined using the 'def' keyword." },
        { question: "What is the result of '2 ** 3' in Python?", options: ["6", "8", "9", "12"], correct: 1, explanation: "The '**' operator is used for exponentiation, so '2 ** 3' equals 8." }
    ],
    'CSS': [
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Cascading Script Sheets", "Colorful Style Sheets", "Creative Style Sheets"], correct: 0, explanation: "CSS stands for Cascading Style Sheets, used for styling HTML elements." },
        { question: "How do you apply a CSS style to an element with class 'example'?", options: [".example { color: red; }", "#example { color: red; }", "example { color: red; }", "element.example { color: red; }"], correct: 0, explanation: "Class selectors in CSS are prefixed with a dot." },
        { question: "Which property is used to change the background color of an element?", options: ["background-color", "bgcolor", "color", "background"], correct: 0, explanation: "The 'background-color' property is used to set the background color of an element." },
        { question: "What does the 'float' property do in CSS?", options: ["Floats the element to the left or right", "Makes the element transparent", "Changes the font style", "Aligns text to the center"], correct: 0, explanation: "The 'float' property is used to position elements to the left or right of their container." },
        { question: "How do you select an element with id 'header'?", options: ["#header", ".header", "header", "header#"], correct: 0, explanation: "ID selectors are prefixed with a hash (#) in CSS." },
        { question: "Which CSS property controls the text size?", options: ["font-size", "text-size", "font-style", "text-style"], correct: 0, explanation: "The 'font-size' property is used to set the size of the text." },
        { question: "What is the default value of the 'position' property?", options: ["static", "relative", "absolute", "fixed"], correct: 0, explanation: "The default value of the 'position' property is 'static'." },
        { question: "How do you center a block element horizontally using CSS?", options: ["margin: 0 auto;", "text-align: center;", "align: center;", "center: auto;"], correct: 0, explanation: "To center a block element, set its left and right margins to auto." }
    ],
    'JavaScript': [
        { question: "What does JavaScript stand for?", options: ["JavaScript", "Java Scripting", "JavaScript Language", "JS"], correct: 0, explanation: "JavaScript is a programming language that enables interactive web pages." },
        { question: "How do you create a function in JavaScript?", options: ["function myFunction() {}", "create function myFunction() {}", "function: myFunction() {}", "myFunction = function() {}"], correct: 0, explanation: "Functions in JavaScript are defined using the 'function' keyword." },
        { question: "Which operator is used for comparison in JavaScript?", options: ["=", "==", "===", "!="], correct: 1, explanation: "The '==' operator is used for comparison in JavaScript." },
        { question: "How do you declare a variable in JavaScript?", options: ["var myVar;", "variable myVar;", "let myVar;", "const myVar;"], correct: 0, explanation: "Variables in JavaScript are declared using 'var', 'let', or 'const'." },
        { question: "What will be the result of 'typeof NaN' in JavaScript?", options: ["number", "NaN", "undefined", "object"], correct: 0, explanation: "In JavaScript, 'NaN' is of type 'number'." },
        { question: "How can you add an element to an array in JavaScript?", options: ["array.push(element);", "array.add(element);", "array.append(element);", "array.insert(element);"], correct: 0, explanation: "The 'push()' method is used to add an element to an array." },
        { question: "Which method is used to convert a string to an integer in JavaScript?", options: ["parseInt()", "toInteger()", "convertToInt()", "integer()"], correct: 0, explanation: "The 'parseInt()' function is used to convert a string to an integer." },
        { question: "How do you comment a line in JavaScript?", options: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"], correct: 0, explanation: "In JavaScript, single-line comments start with '//'." }
    ],
    'Maths': [
        { question: "What is the value of π?", options: ["3.14", "3.15", "3.16", "3.17"], correct: 0, explanation: "π (Pi) is approximately 3.14." },
        { question: "What is the square root of 16?", options: ["2", "4", "8", "16"], correct: 1, explanation: "The square root of 16 is 4." },
        { question: "What is 7 * 8?", options: ["56", "54", "62", "48"], correct: 0, explanation: "7 multiplied by 8 equals 56." },
        { question: "What is the result of 20 / 4?", options: ["4", "5", "6", "8"], correct: 1, explanation: "20 divided by 4 equals 5." },
        { question: "What is the area of a circle with radius 3 units?", options: ["9π", "18π", "27π", "36π"], correct: 0, explanation: "The area of a circle is πr², so with radius 3, it is 9π." },
        { question: "What is 12 - 5?", options: ["7", "8", "6", "5"], correct: 0, explanation: "12 minus 5 equals 7." },
        { question: "What is the value of 3²?", options: ["6", "9", "12", "15"], correct: 1, explanation: "3 squared (3²) equals 9." },
        { question: "If a triangle has angles of 90° and 45°, what is the third angle?", options: ["45°", "60°", "90°", "75°"], correct: 0, explanation: "The angles in a triangle add up to 180°, so the third angle is 45°." }
    ],
    'Reasoning': [
        { question: "What is the next number in the series: 2, 4, 8, 16?", options: ["24", "30", "32", "34"], correct: 2, explanation: "The series is doubling each time, so the next number is 32." },
        { question: "If 'All cats are animals' and 'Some animals are dogs', what can be concluded?", options: ["Some cats are dogs", "Some animals are cats", "All dogs are cats", "Some cats are animals"], correct: 1, explanation: "From the statements, it can be concluded that some animals are cats." },
        { question: "What comes next in the sequence: 5, 10, 20, 40?", options: ["60", "70", "80", "100"], correct: 2, explanation: "The sequence is doubling each time, so the next number is 80." },
        { question: "Which number is missing in the series: 1, 4, 9, 16, ?", options: ["20", "25", "30", "36"], correct: 1, explanation: "The series consists of square numbers: 1², 2², 3², 4², so the next number is 5² = 25." },
        { question: "What is the missing number in the pattern: 7, 14, 28, ?", options: ["35", "42", "56", "63"], correct: 1, explanation: "The pattern doubles each time, so the next number is 14 × 2 = 28." },
        { question: "If the pattern is alternating addition and subtraction: 5, 7, 12, 10, 15, ?, what is the next number?", options: ["18", "20", "22", "25"], correct: 1, explanation: "The pattern alternates between adding 2 and adding 5, so the next number is 15 + 5 = 20." },
        { question: "In a group of 20 people, if 12 like apples and 8 like oranges, how many like both?", options: ["0", "8", "4", "12"], correct: 2, explanation: "Using the principle of inclusion and exclusion, 20 - (12 + 8) = 0; so, none like both if we assume no overlap." },
        { question: "What is the next term in the sequence: 1, 1, 2, 3, 5, 8, ?", options: ["10", "11", "13", "15"], correct: 2, explanation: "The sequence is the Fibonacci sequence, where each number is the sum of the two preceding ones." }
    ]
};


// let currentTopic = '';
// let questions = [];
// let currentQuestionIndex = 0;
// let correctAnswers = 0;
// let timer;
// const TIME_LIMIT = 10; // 10 seconds for each question

// function selectTopic(topic) {
//     currentTopic = topic;
//     document.getElementById('name-input').classList.remove('hidden');
//     document.getElementById('topic-selection').classList.add('hidden');
//     // document.getElementById('name-input').classList.remove('hidden');
// }

// function startQuiz() {
//     const userName = document.getElementById('user-name').value;
//     if (!userName) {
//         alert('Please enter your name.');
//         return;
//     }

//     document.getElementById('name-input').classList.add('hidden');
//     document.getElementById('quiz-container').classList.remove('hidden');
//     document.getElementById('result-container').classList.add('hidden');
//     document.getElementById('retry-btn').classList.add('hidden');
//     document.body.classList.add('blur-background');

//     // Display welcome message
//     document.getElementById('greeting').innerText = `Hi ${userName}, let's test your ${currentTopic} knowledge!`;
//     document.getElementById('document-link').innerHTML = `If you're not prepared, don't worry. You can go through this <a href="https://example.com/${currentTopic.toLowerCase()}" target="_blank">document</a> to learn ${currentTopic}.`;
//     document.getElementById('welcome-message').classList.remove('hidden');

//     // Load questions for the selected topic
//     questions = topics[currentTopic];
//     currentQuestionIndex = 0; // Reset question index
//     correctAnswers = 0; // Reset correct answers count
//     loadQuestion();
// }

// function loadQuestion() {
//     clearInterval(timer);
//     if (currentQuestionIndex >= questions.length) {
//         showResult();
//         return;
//     }

//     const question = questions[currentQuestionIndex];
//     document.getElementById('question').innerText = question.question;
//     const optionsContainer = document.getElementById('options-container');
//     optionsContainer.innerHTML = '';
//     question.options.forEach((option, index) => {
//         const button = document.createElement('button');
//         button.innerText = option;
//         button.onclick = () => selectOption(index);
//         optionsContainer.appendChild(button);
//     });
//     startTimer();
//     document.getElementById('feedback').innerText = '';
//     document.getElementById('explanation').classList.add('hidden');
//     document.getElementById('next-btn').style.display = 'none'; // Hide next button initially
// }

// function selectOption(index) {
//     const question = questions[currentQuestionIndex];
//     const buttons = document.querySelectorAll('#options-container button');
//     buttons.forEach((button, i) => {
//         if (i === question.correct) {
//             button.classList.add('correct');
//             button.disabled = true;
//         } else if (i === index) {
//             button.classList.add('wrong');
//             button.disabled = true;
//         }
//     });

//     document.getElementById('feedback').innerText = index === question.correct ? 'Correct!' : 'Wrong!';
//     document.getElementById('explanation').innerText = question.explanation;
//     document.getElementById('explanation').classList.remove('hidden');
//     document.getElementById('next-btn').disabled = false;
//     document.getElementById('next-btn').style.display = 'block'; // Show next button
//     clearInterval(timer);

//     if (index === question.correct) {
//         correctAnswers++;
//     }
// }

// function startTimer() {
//     let timeLeft = TIME_LIMIT;
//     document.getElementById('time').innerText = timeLeft;
//     timer = setInterval(() => {
//         timeLeft--;
//         document.getElementById('time').innerText = timeLeft;
//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             moveToNextQuestion();
//         }
//     }, 1000);
// }

// function nextQuestion() {
//     currentQuestionIndex++;
//     loadQuestion();
// }

// function moveToNextQuestion() {
//     nextQuestion();
// }

// function showResult() {
//     document.getElementById('quiz-container').classList.add('hidden');
//     const resultContainer = document.getElementById('result-container');
//     resultContainer.classList.remove('hidden');

//     let resultMessage = '';
//     const score = (correctAnswers / questions.length) * 100;

//     document.getElementById('result-message').innerText = `Your score is ${score.toFixed(2)}%`;

//     if (score === 100) {
//         resultMessage = "Perfect score! Well done!\n🎉🎉🎉";
//         document.getElementById('celebration').classList.remove('hidden');
//         playClapSound(); // Play the clap sound
//     } else if (score >= 80) {
//         resultMessage = "You did well, but you can do better.\n👏👏👏";
//     } else if (score >= 50) {
//         resultMessage = "Needs more practice.\n💪💪💪";
//     } else {
//         resultMessage = "You have failed, but don't worry, try again.\n💔💔💔";
//     }

//     document.getElementById('result-message').innerText = resultMessage;
//     document.getElementById('retry-btn').classList.remove('hidden');
// }

// function retryQuiz() {
//     // Reset quiz state
//     currentQuestionIndex = 0;
//     correctAnswers = 0;
//     questions = []; // Clear the questions

//     // Hide result container
//     document.getElementById('result-container').classList.add('hidden');
    
//     // Show topic selection or start screen
//     document.getElementById('topic-selection').classList.remove('hidden');
//     document.getElementById('name-input').classList.add('hidden'); // Ensure the name input is hidden
    
//     // Hide quiz container
//     document.getElementById('quiz-container').classList.add('hidden');
    
//     // Remove blur effect from background
//     document.body.classList.remove('blur-background');

//     // Hide the retry button
//     document.getElementById('retry-btn').classList.add('hidden');
// }
// function playClapSound() {
//     const clapSound = document.getElementById('clap-sound');
//     clapSound.play();
// }

// let currentTopic = '';
// let questions = [];
// let currentQuestionIndex = 0;
// let correctAnswers = 0;
// let timer;
// const TIME_LIMIT = 10; // 10 seconds for each question

// function selectTopic(topic) {
//     currentTopic = topic;
//     document.getElementById('name-input').classList.remove('hidden');
//     document.getElementById('topic-selection').classList.add('hidden');
// }

// function startQuiz() {
//     const userName = document.getElementById('user-name').value;
//     if (!userName) {
//         alert('Please enter your name.');
//         return;
//     }

//     document.getElementById('name-input').classList.add('hidden');
//     document.getElementById('quiz-container').classList.remove('hidden');
//     document.getElementById('result-container').classList.add('hidden');
//     document.getElementById('retry-btn').classList.add('hidden');
//     document.getElementById('review-btn').classList.add('hidden'); // Hide review button initially
//     document.body.classList.add('blur-background');

//     document.getElementById('greeting').innerText = `Hi ${userName}, let's test your ${currentTopic} knowledge!`;
//     document.getElementById('document-link').innerHTML = `If you're not prepared, don't worry. You can go through this <a href="https://example.com/${currentTopic.toLowerCase()}" target="_blank">document</a> to learn ${currentTopic}.`;
//     document.getElementById('welcome-message').classList.remove('hidden');

//     questions = topics[currentTopic];
//     currentQuestionIndex = 0;
//     correctAnswers = 0;
//     loadQuestion();
// }

// function loadQuestion() {
//     clearInterval(timer);
//     if (currentQuestionIndex >= questions.length) {
//         showResult();
//         return;
//     }

//     const question = questions[currentQuestionIndex];
//     document.getElementById('question').innerText = question.question;
//     const optionsContainer = document.getElementById('options-container');
//     optionsContainer.innerHTML = '';
//     question.options.forEach((option, index) => {
//         const button = document.createElement('button');
//         button.innerText = option;
//         button.onclick = () => selectOption(index);
//         optionsContainer.appendChild(button);
//     });
//     startTimer();
//     document.getElementById('feedback').innerText = '';
//     document.getElementById('explanation').classList.add('hidden');
//     document.getElementById('next-btn').style.display = 'none'; // Hide next button initially
// }

// function selectOption(index) {
//     const question = questions[currentQuestionIndex];
//     const buttons = document.querySelectorAll('#options-container button');
//     buttons.forEach((button, i) => {
//         if (i === question.correct) {
//             button.classList.add('correct');
//             button.disabled = true;
//         } else if (i === index) {
//             button.classList.add('wrong');
//             button.disabled = true;
//         }
//     });

//     document.getElementById('feedback').innerText = index === question.correct ? 'Correct!' : 'Wrong!';
//     document.getElementById('explanation').innerText = question.explanation;
//     document.getElementById('explanation').classList.remove('hidden');
//     document.getElementById('next-btn').disabled = false;
//     document.getElementById('next-btn').style.display = 'block'; // Show next button
//     clearInterval(timer);

//     if (index === question.correct) {
//         correctAnswers++;
//     }
// }

// function startTimer() {
//     let timeLeft = TIME_LIMIT;
//     document.getElementById('time').innerText = timeLeft;
//     timer = setInterval(() => {
//         timeLeft--;
//         document.getElementById('time').innerText = timeLeft;
//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             moveToNextQuestion();
//         }
//     }, 1000);
// }

// function nextQuestion() {
//     currentQuestionIndex++;
//     loadQuestion();
// }

// function moveToNextQuestion() {
//     nextQuestion();
// }

// function showResult() {
//     document.getElementById('quiz-container').classList.add('hidden');
//     const resultContainer = document.getElementById('result-container');
//     resultContainer.classList.remove('hidden');

//     let resultMessage = '';
//     const score = (correctAnswers / questions.length) * 100;

//     document.getElementById('result-message').innerText = `Your score is ${score.toFixed(2)}%`;

//     if (score === 100) {
//         resultMessage = "Perfect score! Well done!\n🎉🎉🎉";
//         document.getElementById('celebration').classList.remove('hidden');
//         playClapSound(); // Play the clap sound
//     } else if (score >= 80) {
//         resultMessage = "You did well, but you can do better.\n👏👏👏";
//     } else if (score >= 50) {
//         resultMessage = "Needs more practice.\n💪💪💪";
//     } else {
//         resultMessage = "You have failed, but don't worry, try again.\n💔💔💔";
//     }

//     document.getElementById('result-message').innerText = resultMessage;
//     document.getElementById('retry-btn').classList.remove('hidden');
//     document.getElementById('review-btn').classList.remove('hidden'); // Show review button
// }

// function retryQuiz() {
//     currentQuestionIndex = 0;
//     correctAnswers = 0;
//     questions = []; // Clear the questions

//     document.getElementById('result-container').classList.add('hidden');
//     document.getElementById('topic-selection').classList.remove('hidden');
//     document.getElementById('name-input').classList.add('hidden'); // Ensure the name input is hidden
//     document.getElementById('quiz-container').classList.add('hidden');
//     document.body.classList.remove('blur-background');

//     document.getElementById('retry-btn').classList.add('hidden');
//     document.getElementById('review-btn').classList.add('hidden'); // Hide review button
// }

// function reviewAnswers() {
//     alert("Review functionality is not implemented in this code.");
// }

// function playClapSound() {
//     const clapSound = document.getElementById('clap-sound');
//     clapSound.play();
// }

// const topics = {
//     // Example questions for each topic
//     Python: [
//         {
//             question: 'What is the correct file extension for Python files?',
//             options: ['.py', '.python', '.pt', '.p'],
//             correct: 0,
//             explanation: 'Python files have the .py extension.',
//         },
//         // Add more questions as needed
//     ],
//     CSS: [
//         {
//             question: 'How do you select an element with the class "example" in CSS?',
//             options: ['.example', '#example', 'example', '*example'],
//             correct: 0,
//             explanation: 'Use a dot (.) to select elements with a class name.',
//         },
//         // Add more questions as needed
//     ],
//     JavaScript: [
//         {
//             question: 'Which method is used to add an item to the end of an array in JavaScript?',
//             options: ['push()', 'pop()', 'shift()', 'unshift()'],
//             correct: 0,
//             explanation: 'The push() method adds items to the end of an array.',
//         },
//         // Add more questions as needed
//     ],
//     Maths: [
//         {
//             question: 'What is the value of 5 + 3?',
//             options: ['8', '6', '7', '9'],
//             correct: 0,
//             explanation: 'The sum of 5 and 3 is 8.',
//         },
//         // Add more questions as needed
//     ],
//     Reasoning: [
//         {
//             question: 'If you rearrange the letters "CIFAIPC" you would get the name of a(n):',
//             options: ['City', 'Animal', 'Ocean', 'Country'],
//             correct: 3,
//             explanation: 'Rearranging the letters gives "PACIFIC", which is an ocean.',
//         },
//         // Add more questions as needed
//     ],
// };

let currentTopic = '';
let questions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let userAnswers = []; // Store user answers for review
let timer;
const TIME_LIMIT = 10; // 10 seconds for each question

function selectTopic(topic) {
    currentTopic = topic;
    document.getElementById('name-input').classList.remove('hidden');
    document.getElementById('topic-selection').classList.add('hidden');
}

function startQuiz() {
    const userName = document.getElementById('user-name').value;
    if (!userName) {
        alert('Please enter your name.');
        return;
    }

    document.getElementById('name-input').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('retry-btn').classList.add('hidden');
    document.getElementById('review-btn').classList.add('hidden'); // Hide review button initially
    document.body.classList.add('blur-background');

    document.getElementById('greeting').innerText = `Hi ${userName}, let's test your ${currentTopic} knowledge!`;
    document.getElementById('document-link').innerHTML = `If you're not prepared, don't worry. You can go through this <a href="https://example.com/${currentTopic.toLowerCase()}" target="_blank">document</a> to learn ${currentTopic}.`;
    document.getElementById('welcome-message').classList.remove('hidden');

    questions = topics[currentTopic];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    userAnswers = []; // Reset user answers
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
    startTimer();
    document.getElementById('feedback').innerText = '';
    document.getElementById('explanation').classList.add('hidden');
    document.getElementById('next-btn').style.display = 'none'; // Hide next button initially
}

function selectOption(index) {
    const question = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('#options-container button');
    buttons.forEach((button, i) => {
        if (i === question.correct) {
            button.classList.add('correct');
            button.disabled = true;
        } else if (i === index) {
            button.classList.add('wrong');
            button.disabled = true;
        }
    });

    document.getElementById('feedback').innerText = index === question.correct ? 'Correct!' : 'Wrong!';
    document.getElementById('explanation').innerText = question.explanation;
    document.getElementById('explanation').classList.remove('hidden');
    document.getElementById('next-btn').disabled = false;
    document.getElementById('next-btn').style.display = 'block'; // Show next button
    clearInterval(timer);

    if (index === question.correct) {
        correctAnswers++;
    }
    userAnswers[currentQuestionIndex] = index; // Store the user's answer
}

function startTimer() {
    let timeLeft = TIME_LIMIT;
    document.getElementById('time').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            moveToNextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function moveToNextQuestion() {
    nextQuestion();
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');

    const score = (correctAnswers / questions.length) * 100;
    document.getElementById('result-message').innerText = `Your score is ${score.toFixed(2)}%`;

    let resultMessage = '';
    if (score === 100) {
        resultMessage = "Perfect score! Well done!\n🎉🎉🎉";
        document.getElementById('celebration').classList.remove('hidden');
        playClapSound(); // Play the clap sound
    } else if (score >= 80) {
        resultMessage = "You did well, but you can do better.\n👏👏👏";
    } else if (score >= 50) {
        resultMessage = "Needs more practice.\n💪💪💪";
    } else {
        resultMessage = "You have failed, but don't worry, try again.\n💔💔💔";
    }

    document.getElementById('result-message').innerText = resultMessage;
    document.getElementById('retry-btn').classList.remove('hidden');
    document.getElementById('review-btn').classList.remove('hidden'); // Show review button
}

function retryQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    questions = []; // Clear the questions

    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('topic-selection').classList.remove('hidden');
    document.getElementById('name-input').classList.add('hidden'); // Ensure the name input is hidden
    document.getElementById('quiz-container').classList.add('hidden');
    document.body.classList.remove('blur-background');

    document.getElementById('retry-btn').classList.add('hidden');
    document.getElementById('review-btn').classList.add('hidden'); // Hide review button
}

function reviewAnswers() {
    let reviewHtml = '<h2>Quiz Review</h2>';
    questions.forEach((question, index) => {
        reviewHtml += `<div class="review-question">
            <h3>Question ${index + 1}: ${question.question}</h3>
            <p>Your answer: ${question.options[userAnswers[index]]}</p>
            <p>Correct answer: ${question.options[question.correct]}</p>
            <p>${question.explanation}</p>
        </div>`;
    });

    document.getElementById('result-container').innerHTML = reviewHtml;
    document.getElementById('retry-btn').classList.remove('hidden');
    document.getElementById('review-btn').classList.add('hidden');
}

function playClapSound() {
    const clapSound = document.getElementById('clap-sound');
    clapSound.play();
}
