const sections = {
  rest: {
    title: "💤 Rest Well",
    intro: "Pick the smallest thing that feels achievable today.",
    items: [
      "Be in bed by 9:00–9:30 p.m.",
      "Take a nap if you're tired.",
      "Swap evening tea for herbal tea.",
      "Reduce screens before bed.",
      "Sleep with the bed elevated if recommended.",
      "Choose comfort when you need it."
    ]
  },

  food: {
    title: "🍽️ Eat Well",
    intro: "Choose one small thing that nourishes your body today.",
    items: [
      "Drink a glass of water.",
      "Have a cup of coffee or tea.",
      "Drink a Diet Coke.",
      "Include a handful of protein in every meal.",
      "Eat whole foods for your next meal.",
      "Have a meal or drink with someone you care about.",
      "Drink a zero-alcohol beer or wine with a friend.",
      "Switch caffeinated tea for herbal tea in the evening."
    ]
  },

  body: {
    title: "🧠🚶 Use Your Body",
    intro: "Five minutes counts.",
    items: [
      "Go for a walk.",
      "Do five sit-to-stands.",
      "Ride the bike.",
      "Stretch.",
      "Go for a swim.",
      "Read a physical book.",
      "Play board games.",
      "Play brain games.",
      "Sing loudly to your favourite songs.",
      "Read aloud.",
      "Take five slow, deep breaths."
    ]
  },

  connect: {
    title: "❤️ Connect",
    intro: "Companionship & Meaning",
    items: [
      "Go for a walk with Helley.",
      "Look up something fun to do in the city.",
      "Plan a big adventure with people you love.",
      "Arrange to see someone you care about.",
      "Call someone in another city.",
      "Do healthy things with people you care about.",
      "Choose places where you can hear comfortably.",
      "Be yourself. People love your stories.",
      "If you're making jokes, you're winning!"
    ]
  }
};

function openSection(key) {
  const section = sections[key];

  const panel = document.getElementById("panel");
  const title = document.getElementById("title");
  const intro = document.getElementById("intro");
  const list = document.getElementById("list");
  const affirm = document.getElementById("affirm");

  title.textContent = section.title;
  intro.textContent = section.intro;
  list.innerHTML = "";
  affirm.style.display = "none";

  section.items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = item;

    div.addEventListener("click", () => {
      document
        .querySelectorAll(".item")
        .forEach((element) => element.classList.remove("done"));

      div.classList.add("done");
      affirm.style.display = "block";
    });

    list.appendChild(div);
  });

  panel.style.display = "block";
  panel.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", () => {
      openSection(button.dataset.section);
    });
  });

  const hour = new Date().getHours();
  const greeting = document.getElementById("greeting");

  if (hour < 12) {
    greeting.textContent = "Good morning, Dad! ☀️";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon, Dad! 🌤️";
  } else {
    greeting.textContent = "Good evening, Dad! 🌙";
  }
});
