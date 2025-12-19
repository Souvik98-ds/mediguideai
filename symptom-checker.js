const symptomRules = {
    mild: {
        causes: [
            "Minor viral infection",
            "Seasonal allergies",
            "Dehydration",
            "Fatigue or stress"
        ],
        care: [
            "Drink plenty of fluids",
            "Take adequate rest",
            "Eat light and nutritious food",
            "Monitor symptoms for changes"
        ],
        doctor: [
            "If symptoms last more than 2–3 days",
            "If new symptoms appear"
        ],
        emergency: "Emergency is unlikely in mild cases unless symptoms suddenly worsen."
    },
    moderate: {
        causes: [
            "Viral or bacterial infection",
            "Gastrointestinal infection",
            "Migraine or sinus infection",
            "Moderate dehydration"
        ],
        care: [
            "Rest and hydration",
            "Use prescribed medicines only",
            "Avoid heavy activity",
            "Maintain body temperature"
        ],
        doctor: [
            "If fever persists more than 48 hours",
            "If pain becomes severe",
            "If vomiting or diarrhea continues"
        ],
        emergency: "Seek urgent help if chest pain, confusion, or breathing difficulty occurs."
    },
    severe: {
        causes: [
            "Serious infection",
            "Heart or lung condition",
            "Severe dehydration",
            "Neurological emergency"
        ],
        care: [
            "Do not attempt home treatment",
            "Keep patient calm and still",
            "Prepare for immediate medical care"
        ],
        doctor: [
            "Immediate medical evaluation required",
            "Visit emergency department now"
        ],
        emergency: "Call emergency services immediately. This may be life-threatening."
    }
};

function analyzeSymptoms() {
    const selected = Array.from(
        document.querySelectorAll(".symptoms-list input:checked")
    ).map(cb => cb.value);

    const severity = document.getElementById("severitySelect").value;

    if (selected.length === 0) {
        alert("Please select at least one symptom.");
        return;
    }

    const data = symptomRules[severity];

    const causeList = document.getElementById("causeList");
    const careList = document.getElementById("careList");
    const doctorList = document.getElementById("doctorList");
    const emergencyText = document.getElementById("emergencyText");

    causeList.innerHTML = "";
    careList.innerHTML = "";
    doctorList.innerHTML = "";

    data.causes.forEach(c => {
        const li = document.createElement("li");
        li.textContent = c;
        causeList.appendChild(li);
    });

    data.care.forEach(c => {
        const li = document.createElement("li");
        li.textContent = c;
        careList.appendChild(li);
    });

    data.doctor.forEach(d => {
        const li = document.createElement("li");
        li.textContent = d;
        doctorList.appendChild(li);
    });

    emergencyText.textContent = data.emergency;

    document.getElementById("resultSection").style.display = "block";
    document.getElementById("resultSection").scrollIntoView({ behavior: "smooth" });
}
