function validateForm(event) {
  event.preventDefault(); // منع الإرسال التقليدي

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

  // جلب التطبيقات السابقة
  let apps = JSON.parse(localStorage.getItem("appsList")) || [];

  // إضافة التطبيق الجديد
  apps.push({ name, company, url, desc, field, free , image, video });

  // حفظ القائمة
  localStorage.setItem("appsList", JSON.stringify(apps));

  // الانتقال إلى صفحة التطبيقات
  window.location.href = "apps.html";
}

function toggleDetails(button) {
  const $row = $(button).closest("tr"); // الصف الأساسي
  const $details = $row.next(".details"); // صف التفاصيل

  // إظهار/إخفاء التفاصيل بانسيابية
  $details.slideToggle(300);

  // إضافة/إزالة الـ highlight على الصف الأساسي
  $row.toggleClass("highlight");
}
