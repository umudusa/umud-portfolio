const seatsContainer = document.querySelector(".seats");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const bookBtn = document.getElementById("bookBtn");

let ticketPrice = +movieSelect.value;

// generate seats
for (let i = 0; i < 48; i++) {
  const seat = document.createElement("div");
  seat.classList.add("seat");

  if (Math.random() < 0.2) {
    seat.classList.add("occupied");
  }

  seatsContainer.appendChild(seat);
}

// update total
function updateSelected() {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * ticketPrice;
}

// select seats
seatsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelected();
  }
});

// change movie
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelected();
});

// booking
bookBtn.addEventListener("click", () => {
  alert("🎉 Booking successful!");
});
