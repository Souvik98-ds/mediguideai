let map;

function activateEmergencyMode() {

    document.getElementById("actionBox").style.display = "block";
    document.getElementById("numberBox").style.display = "block";
    document.getElementById("mapBox").style.display = "block";
    document.getElementById("nearbyBox").style.display = "block";

    if (!navigator.geolocation) {
        alert("Geolocation not supported");
        return;
    }

    navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        showMap(lat, lon);

        fetchNearbyPlaces(lat, lon, "hospital", "hospitalList");
        fetchNearbyPlaces(lat, lon, "pharmacy", "pharmacyList");
    }, () => {
        alert("Location access denied");
    });
}

function showMap(lat, lon) {

    if (map) return;

    map = L.map("map").setView([lat, lon], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
    }).addTo(map);

    L.marker([lat, lon]).addTo(map)
        .bindPopup("Your current location")
        .openPopup();
}
function fetchNearbyPlaces(lat, lon, type, listId) {

    const radius = 3000; // meters

    const query = `
        [out:json];
        (
          node["amenity"="${type}"](around:${radius},${lat},${lon});
          way["amenity"="${type}"](around:${radius},${lat},${lon});
          relation["amenity"="${type}"](around:${radius},${lat},${lon});
        );
        out center;
    `;

    fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: query
    })
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById(listId);
        list.innerHTML = "";

        if (!data.elements || data.elements.length === 0) {
            list.innerHTML = "<li>No nearby results found.</li>";
            return;
        }

        data.elements.slice(0, 5).forEach(place => {
            const name = place.tags?.name || "Unnamed facility";
            const li = document.createElement("li");
            li.textContent = name;
            list.appendChild(li);
        });
    })
    .catch(() => {
        document.getElementById(listId).innerHTML =
            "<li>Error fetching data.</li>";
    });
}
