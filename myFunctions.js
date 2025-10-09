function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("appName").value.trim();
  const company = document.getElementById("company").value.trim();
  const url = document.getElementById("website").value.trim();
  const desc = document.getElementById("desc").value.trim();
  const image = document.getElementById("appImage").value;
  const video = document.getElementById("appVideo").value;
  const field = document.getElementById("field").value;
  const free = document.getElementById("isFree").checked
    ? "مجاني"
    : "غير مجاني";

  const regex = /^[A-Za-z]+$/;

  if (!regex.test(name)) {
    alert("❌ اسم التطبيق يجب أن يكون أحرف إنجليزية فقط بدون فراغات");
    return;
  }
  if (!regex.test(company)) {
    alert("❌ اسم الشركة يجب أن تكون أحرف إنجليزية فقط");
    return;
  }
  if (!url.startsWith("http")) {
    alert("❌ أدخل رابط صحيح يبدأ بـ http");
    return;
  }
  if (desc.length < 10) {
    alert("❌ يرجى إدخال شرح مختصر مناسب (10 أحرف على الأقل)");
    return;
  }

  let apps = JSON.parse(localStorage.getItem("appsList")) || [];

  apps.push({ name, company, url, desc, field, free, image, video });

  localStorage.setItem("appsList", JSON.stringify(apps));

  window.location.href = "Apps.html";
}

function toggleDetails(button) {
  const $row = $(button).closest("tr");
  const $details = $row.next(".details");

  $details.slideToggle(300);

  $row.toggleClass("highlight");
}
