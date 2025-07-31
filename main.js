const questions = [
  // Easy Questions (1-15)
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
    difficulty: "easy",
  },
  {
    question: "Which HTML tag is used to create a paragraph?",
    options: ["<paragraph>", "<p>", "<para>", "<pg>"],
    correct: 1,
    difficulty: "easy",
  },
  {
    question: "What is the correct HTML tag for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<header>"],
    correct: 2,
    difficulty: "easy",
  },
  {
    question: "Which tag is used to create a line break in HTML?",
    options: ["<break>", "<br>", "<lb>", "<newline>"],
    correct: 1,
    difficulty: "easy",
  },
  {
    question: "What is the correct HTML tag for inserting an image?",
    options: ["<image>", "<img>", "<picture>", "<photo>"],
    correct: 1,
    difficulty: "easy",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1,
    difficulty: "easy",
  },
  {
    question: "What does the <title> tag define?",
    options: ["The main heading of the page", "The title in the browser tab", "The first paragraph", "The page footer"],
    correct: 1,
    difficulty: "easy",
  },
  {
    question: "Which tag is used to create an unordered list?",
    options: ["<ol>", "<ul>", "<list>", "<ulist>"],
    correct: 1,
    difficulty: "easy",
  },
  {
    question: "What is the correct HTML tag for making text bold?",
    options: ["<bold>", "<b>", "<strong>", "Both <b> and <strong>"],
    correct: 3,
    difficulty: "easy",
  },
  {
    question: "Which HTML tag is used to create a table?",
    options: ["<table>", "<tab>", "<tbl>", "<grid>"],
    correct: 0,
    difficulty: "easy",
  },
  {
    question: "What is the correct HTML tag for making text italic?",
    options: ["<italic>", "<i>", "<em>", "Both <i> and <em>"],
    correct: 3,
    difficulty: "easy",
  },
  {
    question: "Which tag is used to create a form in HTML?",
    options: ["<form>", "<input>", "<field>", "<submit>"],
    correct: 0,
    difficulty: "easy",
  },
  {
    question: "What is the correct HTML tag for creating a horizontal rule?",
    options: ["<line>", "<hr>", "<rule>", "<horizontal>"],
    correct: 1,
    difficulty: "easy",
  },
  {
    question: "Which HTML tag is used to define the document type?",
    options: ["<doctype>", "<!DOCTYPE>", "<html>", "<document>"],
    correct: 1,
    difficulty: "easy",
  },
  {
    question: "What is the correct HTML tag for creating a division or section?",
    options: ["<div>", "<section>", "<division>", "<block>"],
    correct: 0,
    difficulty: "easy",
  },

  // Medium Questions (16-35)
  {
    question: "Which attribute is used to specify the URL of a hyperlink?",
    options: ["src", "href", "link", "url"],
    correct: 1,
    difficulty: "medium",
  },
  {
    question: "What is the correct HTML attribute for specifying the alternative text for an image?",
    options: ["alt", "title", "text", "description"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "css", "styles"],
    correct: 1,
    difficulty: "medium",
  },
  {
    question: "What is the correct HTML for creating a dropdown list?",
    options: ["<select>", "<dropdown>", "<list>", "<option>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "Which HTML tag is used to define a table row?",
    options: ["<tr>", "<row>", "<td>", "<table-row>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "What is the correct HTML tag for defining a table header?",
    options: ["<th>", "<header>", "<thead>", "<table-header>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "Which attribute is used to merge table cells horizontally?",
    options: ["rowspan", "colspan", "merge", "span"],
    correct: 1,
    difficulty: "medium",
  },
  {
    question: "What is the correct HTML for creating a text input field?",
    options: ["<input type='text'>", "<textfield>", "<text>", "<input-text>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "Which HTML tag is used to define metadata about the document?",
    options: ["<meta>", "<metadata>", "<info>", "<head>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "What is the correct HTML for creating a checkbox?",
    options: ["<input type='check'>", "<checkbox>", "<input type='checkbox'>", "<check>"],
    correct: 2,
    difficulty: "medium",
  },
  {
    question: "Which HTML tag is used to define a description list?",
    options: ["<dl>", "<desc>", "<definition>", "<dlist>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "What is the correct HTML attribute for specifying the character encoding?",
    options: ["encoding", "charset", "character-set", "encode"],
    correct: 1,
    difficulty: "medium",
  },
  {
    question: "Which HTML tag is used to define preformatted text?",
    options: ["<pre>", "<format>", "<code>", "<text>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "What is the correct HTML for creating a radio button?",
    options: ["<input type='radio'>", "<radio>", "<input type='button'>", "<radiobutton>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "Which HTML attribute is used to specify the target window for a hyperlink?",
    options: ["window", "target", "open", "new"],
    correct: 1,
    difficulty: "medium",
  },
  {
    question: "What is the correct HTML tag for defining a table caption?",
    options: ["<caption>", "<title>", "<header>", "<table-title>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "Which HTML tag is used to define a clickable area inside an image map?",
    options: ["<area>", "<map>", "<region>", "<click>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "What is the correct HTML for creating a password input field?",
    options: ["<input type='password'>", "<password>", "<input type='hidden'>", "<secure>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "Which HTML tag is used to define a section of navigation links?",
    options: ["<nav>", "<navigation>", "<menu>", "<links>"],
    correct: 0,
    difficulty: "medium",
  },
  {
    question: "What is the correct HTML attribute for specifying the width of a table cell?",
    options: ["width", "size", "cell-width", "w"],
    correct: 0,
    difficulty: "medium",
  },

  // Hard Questions (36-50)
  {
    question: "Which HTML5 semantic tag is used to define a self-contained composition?",
    options: ["<section>", "<article>", "<aside>", "<content>"],
    correct: 1,
    difficulty: "hard",
  },
  {
    question: "What is the correct HTML5 tag for defining additional details that can be hidden/shown?",
    options: ["<details>", "<summary>", "<accordion>", "<collapsible>"],
    correct: 0,
    difficulty: "hard",
  },
  {
    question: "Which HTML5 input type is used for email validation?",
    options: ["<input type='mail'>", "<input type='email'>", "<input type='e-mail'>", "<input type='validate-email'>"],
    correct: 1,
    difficulty: "hard",
  },
  {
    question: "What is the correct HTML5 tag for defining a progress bar?",
    options: ["<progress>", "<meter>", "<bar>", "<loading>"],
    correct: 0,
    difficulty: "hard",
  },
  {
    question: "Which HTML5 attribute is used to specify that an input field must be filled out?",
    options: ["validate", "required", "mandatory", "must-fill"],
    correct: 1,
    difficulty: "hard",
  },
  {
    question: "What is the correct HTML5 tag for embedding audio content?",
    options: ["<sound>", "<audio>", "<music>", "<media>"],
    correct: 1,
    difficulty: "hard",
  },
  {
    question: "Which HTML5 attribute is used to specify multiple values for an input field?",
    options: ["multiple", "multi", "many", "several"],
    correct: 0,
    difficulty: "hard",
  },
  {
    question: "What is the correct HTML5 tag for defining a scalar measurement within a range?",
    options: ["<range>", "<meter>", "<gauge>", "<measure>"],
    correct: 1,
    difficulty: "hard",
  },
  {
    question: "Which HTML5 input type is used for date and time selection?",
    options: [
      "<input type='datetime'>",
      "<input type='datetime-local'>",
      "<input type='date-time'>",
      "<input type='timestamp'>",
    ],
    correct: 1,
    difficulty: "hard",
  },
  {
    question: "What is the correct HTML5 attribute for specifying placeholder text?",
    options: ["hint", "placeholder", "default", "example"],
    correct: 1,
    difficulty: "hard",
  },
  {
    question: "Which HTML5 tag is used to define a container for external applications?",
    options: ["<embed>", "<object>", "<iframe>", "<plugin>"],
    correct: 1,
    difficulty: "hard",
  },
  {
    question: "What is the correct HTML5 attribute for enabling spell checking?",
    options: ["spell", "spellcheck", "check-spelling", "spelling"],
    correct: 1,
    difficulty: "hard",
  },
  {
    question: "Which HTML5 tag is used to define a figure with a caption?",
    options: ["<figure>", "<img-caption>", "<picture>", "<image-figure>"],
    correct: 0,
    difficulty: "hard",
  },
  {
    question: "What is the correct HTML5 input type for color selection?",
    options: ["<input type='color'>", "<input type='colorpicker'>", "<input type='rgb'>", "<input type='hex'>"],
    correct: 0,
    difficulty: "hard",
  },
  {
    question: "Which HTML5 attribute is used to specify that an element should be draggable?",
    options: ["drag", "draggable", "moveable", "dragdrop"],
    correct: 1,
    difficulty: "hard",
  },
]

let currentQuestion = 0
let selectedAnswer = null
let score = 0
let answered = false

function loadQuestion() {
  const question = questions[currentQuestion]
  document.getElementById("questionText").textContent = question.question
  document.getElementById("questionNumber").textContent = `Question ${currentQuestion + 1} of ${questions.length}`

  const progressPercent = ((currentQuestion + 1) / questions.length) * 100
  document.getElementById("progressFill").style.width = progressPercent + "%"

  const difficultyBadge = document.getElementById("difficultyBadge")
  difficultyBadge.textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)
  difficultyBadge.className = `difficulty-badge ${question.difficulty}`

  const optionsContainer = document.getElementById("optionsContainer")
  optionsContainer.innerHTML = ""

  question.options.forEach((option, index) => {
    const optionDiv = document.createElement("div")
    optionDiv.className = "option"
    optionDiv.textContent = option
    optionDiv.onclick = () => selectOption(index)
    optionsContainer.appendChild(optionDiv)
  })

  document.getElementById("prevBtn").disabled = currentQuestion === 0
  document.getElementById("checkBtn").style.display = "inline-block"
  document.getElementById("nextBtn").style.display = "none"
  document.getElementById("result").style.display = "none"

  selectedAnswer = null
  answered = false
}

function selectOption(index) {
  if (answered) return

  selectedAnswer = index
  const options = document.querySelectorAll(".option")
  options.forEach((option, i) => {
    option.classList.remove("selected")
    if (i === index) {
      option.classList.add("selected")
    }
  })
}

function checkAnswer() {
  if (selectedAnswer === null) {
    alert("Please select an answer first!")
    return
  }

  answered = true
  const question = questions[currentQuestion]
  const options = document.querySelectorAll(".option")
  const resultDiv = document.getElementById("result")

  options.forEach((option, index) => {
    option.classList.remove("selected")
    if (index === question.correct) {
      option.classList.add("correct")
    } else if (index === selectedAnswer && index !== question.correct) {
      option.classList.add("incorrect")
    }
  })

  if (selectedAnswer === question.correct) {
    score++
    resultDiv.className = "result correct"
    resultDiv.innerHTML = "✅ <strong>Correct!</strong> Well done!"
  } else {
    resultDiv.className = "result incorrect"
    resultDiv.innerHTML = `❌ <strong>Incorrect.</strong> The correct answer is: <strong>${question.options[question.correct]}</strong>`
  }

  resultDiv.style.display = "block"
  document.getElementById("checkBtn").style.display = "none"

  if (currentQuestion < questions.length - 1) {
    document.getElementById("nextBtn").style.display = "inline-block"
  } else {
    setTimeout(showFinalScore, 1000)
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++
    loadQuestion()
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--
    loadQuestion()
  }
}

function showFinalScore() {
  const percentage = Math.round((score / questions.length) * 100)
  let message = ""
  let emoji = ""

  if (percentage >= 90) {
    message = "Outstanding! You're an HTML master! 🏆"
    emoji = "🎉"
  } else if (percentage >= 80) {
    message = "Excellent work! You know HTML very well! 🌟"
    emoji = "👏"
  } else if (percentage >= 70) {
    message = "Good job! You have solid HTML knowledge! 👍"
    emoji = "😊"
  } else if (percentage >= 60) {
    message = "Not bad! Keep practicing HTML! 📚"
    emoji = "🤔"
  } else {
    message = "Keep studying HTML and try again! 💪"
    emoji = "📖"
  }

  document.getElementById("finalScore").innerHTML = `
        <h2>HTML Quiz Complete! ${emoji}</h2>
        <div class="score-number">${score}/${questions.length}</div>
        <p style="font-size: 1.5rem; margin-bottom: 15px; font-weight: bold;">${percentage}%</p>
        <p style="font-size: 1.2rem;">${message}</p>
        <button class="btn btn-primary" onclick="restartQuiz()" style="margin-top: 30px; font-size: 1.1rem; padding: 15px 30px;">
            🔄 Restart Quiz
        </button>
    `
  document.getElementById("finalScore").style.display = "block"
}

function restartQuiz() {
  currentQuestion = 0
  score = 0
  document.getElementById("finalScore").style.display = "none"
  loadQuestion()
}

// Initialize the quiz when page loads
document.addEventListener("DOMContentLoaded", () => {
  loadQuestion()
})

// Add keyboard navigation
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && currentQuestion > 0 && !answered) {
    previousQuestion()
  } else if (event.key === "ArrowRight" && currentQuestion < questions.length - 1 && answered) {
    nextQuestion()
  } else if (event.key === "Enter") {
    if (!answered && selectedAnswer !== null) {
      checkAnswer()
    } else if (answered && currentQuestion < questions.length - 1) {
      nextQuestion()
    }
  }
})
