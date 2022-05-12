yearService();

function yearService() {
  const year = document.getElementById("copyright");
  const yearCurrent = new Date();

  year.innerHTML = yearCurrent.getFullYear();
}
