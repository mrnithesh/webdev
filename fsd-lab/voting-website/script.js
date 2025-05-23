let votes = { A: 0, B: 0, C: 0 };

function vote(option) {
  votes[option]++;
  document.getElementById("countA").textContent = votes.A;
  document.getElementById("countB").textContent = votes.B;
  document.getElementById("countC").textContent = votes.C;

  showWinner();
}

function showWinner() {
  const maxVotes = Math.max(votes.A, votes.B, votes.C);
  let winner = "No clear winner yet";

  if (
    (votes.A > votes.B && votes.A > votes.C)
  ) winner = "Winner: Scheme A - Free WiFi Zones";
  else if (
    (votes.B > votes.A && votes.B > votes.C)
  ) winner = "Winner: Scheme B - Solar Street Lights";
  else if (
    (votes.C > votes.A && votes.C > votes.B)
  ) winner = "Winner: Scheme C - Community Gym";

  document.getElementById("winner").textContent = winner;
}
