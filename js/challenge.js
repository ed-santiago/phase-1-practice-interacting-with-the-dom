const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const heart = document.querySelector("#heart")
const pause = document.querySelector("#pause")
const submit = document.querySelector("#submit")
const form = document.querySelector("#comment-form")

let count = 0;

const obj = {
    
}

const timer = () => {
  count++
  return counter.textContent = count
}

let timerInterval = setInterval(timer, 1000)

minus.addEventListener("click", () => {
  setTimeout(() => {
    count--;
    counter.textContent = count;
  })
})

plus.addEventListener("click", () => {
  setTimeout(() => {
    count++;
    counter.textContent = count;
  })
})

heart.addEventListener("click", () => {
  const likes = document.querySelector(".likes")
  const existingLi = likes.querySelector(`#num${count}`)

  if(existingLi) {
    existingLi.textContent = `${count} has been liked ${obj[count]++} times.`;
  } else {
    const li = document.createElement("li");
    li.textContent = `${count} has been liked ${obj[count] = 1} times.`;
    li.id = `num${count}`;
    likes.append(li);
  }
})

function enableButtons() {
  minus.disabled = false;
  plus.disabled = false;
  heart.disabled = false;
  submit.disabled = false;
}

function disableButtons() {
  minus.disabled = true;
  plus.disabled = true;
  heart.disabled = true;
  submit.disabled = true;
}

pause.addEventListener("click", () => {
  const resume = document.querySelector("#Resume")

  if(resume) {
    timerInterval = setInterval(timer, 1000)
    enableButtons()
    pause.id = "pause"
    pause.textContent = "pause"

  } else if(pause) {
    clearInterval(timerInterval)
    disableButtons()
    pause.id = "resume"
    pause.textContent = "resume"
  }
})

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const value = event.target["comment-input"].value

  const p = document.createElement("p")
  p.textContent = value
  document.querySelector("#list").append(p)
  form.reset();
})