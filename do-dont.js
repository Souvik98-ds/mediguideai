// =====================================
// Do & Don’t – Full In-Depth Engine
// =====================================

const doDontData = {

  fever: {
    title: "Fever",
    overview: "Fever is a rise in body temperature usually caused by infection.",
    why: ["Viral or bacterial infections", "Inflammation", "After vaccination"],
    do: ["Drink plenty of fluids", "Rest well", "Monitor temperature", "Wear light clothing"],
    dont: ["Avoid cold baths", "No antibiotics without doctor", "Do not ignore high fever"],
    home: ["Lukewarm sponging", "Warm fluids", "Light meals"],
    doctor: ["Lasts > 48 hours", "Temp > 102°F", "Severe headache or rash"],
    emergency: "Emergency if fever with seizures, confusion, stiff neck, or breathing difficulty."
  },

  cold: {
    title: "Cold & Cough",
    overview: "Viral respiratory infection causing runny nose, sore throat, and cough.",
    why: ["Viral infection", "Weak immunity", "Weather change"],
    do: ["Warm fluids", "Steam inhalation", "Rest", "Salt gargle"],
    dont: ["Avoid cold drinks", "Do not smoke", "No overuse of syrups"],
    home: ["Honey in warm water", "Humidifier use", "Adequate sleep"],
    doctor: ["Lasts > 7 days", "High fever", "Chest pain"],
    emergency: "Emergency if severe breathlessness, bluish lips, or confusion."
  },

  headache: {
    title: "Headache",
    overview: "Pain in head region often due to stress, dehydration, or infection.",
    why: ["Stress", "Dehydration", "Migraine", "Sinusitis"],
    do: ["Rest in dark room", "Drink water", "Cold/warm compress"],
    dont: ["Avoid screens", "No frequent painkillers"],
    home: ["Sleep well", "Relaxation", "Massage"],
    doctor: ["Persists > 3 days", "After injury", "With fever/vomiting"],
    emergency: "Emergency if sudden severe headache with confusion or paralysis."
  },

  bodyPain: {
    title: "Body Pain",
    overview: "Generalized pain due to infection, strain, or fatigue.",
    why: ["Viral infection", "Overexertion", "Dehydration"],
    do: ["Rest", "Hydration", "Warm compress"],
    dont: ["Avoid heavy work", "No overuse of painkillers"],
    home: ["Warm bath", "Stretching"],
    doctor: ["Severe/persistent pain", "With swelling or fever"],
    emergency: "Emergency if pain with chest pain, numbness, or collapse."
  },

  stomach: {
    title: "Stomach Pain",
    overview: "Abdominal pain from indigestion, gas, infection, or acidity.",
    why: ["Indigestion", "Food infection", "Acidity", "Constipation"],
    do: ["Light meals", "Warm water", "Rest"],
    dont: ["Avoid spicy food", "No painkillers on empty stomach"],
    home: ["ORS", "Small meals", "Warm compress"],
    doctor: ["Pain > 24h", "With vomiting/fever", "Localized severe pain"],
    emergency: "Emergency if rigid abdomen, blood in stool/vomit, fainting."
  },

  vomiting: {
    title: "Vomiting",
    overview: "Forceful expulsion of stomach contents often due to infection.",
    why: ["Food poisoning", "Gastro infection", "Motion sickness"],
    do: ["ORS sips", "Rest stomach", "Hydration"],
    dont: ["Do not force food", "Avoid oily food"],
    home: ["Clear fluids", "Soft foods later"],
    doctor: ["Persists > 24h", "Cannot keep fluids", "Blood in vomit"],
    emergency: "Emergency if severe dehydration or continuous vomiting."
  },

  diarrhea: {
    title: "Diarrhea",
    overview: "Frequent loose stools commonly due to infection or contaminated food.",
    why: ["Viral/bacterial infection", "Food intolerance", "Contaminated water"],
    do: ["ORS frequently", "Light diet", "Hand hygiene"],
    dont: ["Avoid dairy/oily food", "No self anti-diarrheals"],
    home: ["Banana, rice, toast", "Boiled water"],
    doctor: ["Lasts > 2 days", "Blood in stool", "High fever"],
    emergency: "Emergency if severe dehydration or very low urine."
  },

  cuts: {
    title: "Cuts & Wounds",
    overview: "Breaks in skin that may bleed and get infected.",
    why: ["Sharp objects", "Accidents", "Falls"],
    do: ["Clean with water", "Apply antiseptic", "Cover wound"],
    dont: ["No soil/oil", "No dirty hands"],
    home: ["Daily dressing", "Keep dry"],
    doctor: ["Deep wounds", "Bleeding not stopping", "Infection signs"],
    emergency: "Emergency if heavy bleeding or exposed tissue."
  },

  burns: {
    title: "Burns",
    overview: "Injuries from heat, chemicals, or electricity.",
    why: ["Fire", "Hot liquids", "Chemicals", "Electricity"],
    do: ["Cool under water 20 min", "Cover loosely"],
    dont: ["No butter/toothpaste", "No burst blisters"],
    home: ["Sterile dressing", "Keep clean"],
    doctor: ["Large/deep burns", "Face/hands affected"],
    emergency: "Emergency for electrical burns or breathing trouble."
  },

  chest: {
    title: "Chest Pain",
    overview: "Chest pain may be heart-related and must be treated urgently.",
    why: ["Heart disease", "Acid reflux", "Muscle strain"],
    do: ["Stop activity", "Sit calmly", "Seek urgent help"],
    dont: ["Do not exert", "Do not delay care"],
    home: ["Remain calm", "Loosen clothes"],
    doctor: ["Pain > minutes", "Sweating/nausea", "Heart history"],
    emergency: "Call emergency if pain spreads to arm/jaw, breathlessness, collapse."
  },

  dizziness: {
    title: "Dizziness",
    overview: "Lightheadedness or imbalance sensation.",
    why: ["Dehydration", "Low BP", "Ear issues", "Anemia"],
    do: ["Sit/lie down", "Drink water", "Move slowly"],
    dont: ["Avoid sudden standing", "Do not drive"],
    home: ["Fluids", "Rest"],
    doctor: ["Persistent episodes", "With fainting", "With chest pain"],
    emergency: "Emergency if fainting, slurred speech, weakness."
  }

};

function generateGuide() {
  const cond = document.getElementById("conditionSelect").value;
  if (!cond || !doDontData[cond]) {
    alert("Please select a valid condition.");
    return;
  }

  const data = doDontData[cond];

  const doList = document.getElementById("doList");
  const dontList = document.getElementById("dontList");
  doList.innerHTML = "";
  dontList.innerHTML = "";

  data.do.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    doList.appendChild(li);
  });

  data.dont.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    dontList.appendChild(li);
  });

  document.getElementById("resultBox").style.display = "flex";

  document.getElementById("condTitle").textContent = data.title;
  document.getElementById("condOverview").textContent = data.overview;

  const whyList = document.getElementById("whyList");
  const homeList = document.getElementById("homeList");
  const doctorList = document.getElementById("doctorList");
  whyList.innerHTML = homeList.innerHTML = doctorList.innerHTML = "";

  data.why.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    whyList.appendChild(li);
  });

  data.home.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    homeList.appendChild(li);
  });

  data.doctor.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    doctorList.appendChild(li);
  });

  document.getElementById("emergencyText").textContent = data.emergency;
  document.getElementById("detailSection").style.display = "block";
  document.getElementById("detailSection").scrollIntoView({ behavior: "smooth" });
}
