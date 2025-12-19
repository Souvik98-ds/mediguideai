const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

const knowledgeBase = {
  fever: {
    reply: `Fever is a temporary rise in body temperature, usually due to infection.

🔹 Common causes:
- Viral or bacterial infections
- Inflammation
- After vaccination

🔹 What you can do:
✔ Drink plenty of fluids
✔ Take rest
✔ Monitor temperature
✔ Use lukewarm sponging

🔹 Avoid:
✘ Cold baths
✘ Self-medicating antibiotics

⚠️ See a doctor if:
- Fever > 102°F
- Lasts more than 2 days
- Severe headache, rash, or vomiting`
  },

  cold: {
    reply: `Common cold is a viral infection of the nose and throat.

🔹 Symptoms:
- Runny or blocked nose
- Sneezing
- Sore throat
- Mild fever

🔹 Home care:
✔ Warm fluids
✔ Steam inhalation
✔ Rest

🔹 Avoid:
✘ Cold drinks
✘ Smoking

⚠️ See doctor if:
- Symptoms last > 7 days
- High fever or chest pain`
  },

  headache: {
    reply: `Headache is pain in the head or neck region.

🔹 Causes:
- Stress
- Dehydration
- Migraine
- Lack of sleep

🔹 What helps:
✔ Rest in quiet room
✔ Drink water
✔ Cold/warm compress

⚠️ See doctor if:
- Sudden severe headache
- After head injury
- With fever or vomiting`
  },

  diabetes: {
    reply: `Diabetes is a condition where blood sugar levels remain high.

🔹 Types:
- Type 1: body doesn’t make insulin
- Type 2: body doesn’t use insulin properly

🔹 Symptoms:
- Increased thirst & urination
- Fatigue
- Blurred vision

🔹 Management:
✔ Healthy diet
✔ Regular exercise
✔ Monitor blood sugar
✔ Take medicines as prescribed

⚠️ Consult a doctor for diagnosis and treatment plan.`
  },

  bp: {
    reply: `High blood pressure (hypertension) means blood flows with high force.

🔹 Often has no symptoms
🔹 Increases risk of heart disease & stroke

🔹 Control measures:
✔ Low-salt diet
✔ Exercise
✔ Stress management
✔ Regular BP checks

⚠️ Doctor care is essential for proper management.`
  }
};

function addMessage(type, text) {
  const div = document.createElement("div");
  div.className = "msg " + type;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}
function sendQuick(topic) {
  userInput.value = topic;
  sendMessage();
}

function sendMessage() {
  const msg = userInput.value.trim().toLowerCase();
  if (!msg) return;

  addMessage("user", userInput.value);
  userInput.value = "";

  let reply = "Sorry, I don't have specific information on that topic yet. Try asking about fever, cold, headache, diabetes, or blood pressure.";

  for (let key in knowledgeBase) {
    if (msg.includes(key)) {
      reply = knowledgeBase[key].reply;
      break;
    }
  }

  setTimeout(() => {
    addMessage("ai", reply);
  }, 600);
}

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});
