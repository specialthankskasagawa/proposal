let entries = JSON.parse(localStorage.getItem("entries")) || [];

function save() {
  localStorage.setItem("entries", JSON.stringify(entries));
  render();
}

function addEntry() {
  const desc = document.getElementById("desc").value;
  const amount = parseInt(document.getElementById("amount").value);
  const type = document.getElementById("type").value;
  if (!desc || !amount) return alert("入力してください");

  entries.push({ desc, amount, type });
  save();
  clearInput();
}

function clearInput() {
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  let total = 0;

  entries.forEach((e, i) => {
    const li = document.createElement("li");
    li.textContent = `${e.desc}: ${e.amount} 円`;
    li.className = e.type === "income" ? "income" : "expense";
    list.appendChild(li);

    if (e.type === "income") total += e.amount;
    else total -= e.amount;
  });

  document.getElementById("total").innerText = total;
}

render();
