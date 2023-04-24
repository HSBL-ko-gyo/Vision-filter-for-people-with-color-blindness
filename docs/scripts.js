document.addEventListener("DOMContentLoaded", function() {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("file-input");
  const originalImage = document.getElementById("original-image");
  const type1Image = document.getElementById("type1-image");
  const type2Image = document.getElementById("type2-image");
  const type3Image = document.getElementById("type3-image");

  dropzone.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  fileInput.addEventListener("change", function(event) {
    handleFile(event.target.files[0]);
  });

  dropzone.addEventListener("drop", function(event) {
    event.preventDefault();
    handleFile(event.dataTransfer.files[0]);
  });

  function handleFile(file) {
    const reader = new FileReader();

    reader.onload = function(event) {
      originalImage.src = event.target.result;

      // カラーブラインドフィルタを適用
      // これらのフィルターは、実際の色覚異常の方のシミュレーションには不十分ですが、デモンストレーション目的で使用されています。
      // 実際のプロジェクトでは、より正確なシミュレーションのためのJavaScriptライブラリを使用してください。
      type1Image.src = event.target.result;
      type1Image.style.filter = "sepia(100%)";

      type2Image.src = event.target.result;
      type2Image.style.filter = "saturate(50%)";

      type3Image.src = event.target.result;
      type3Image.style.filter = "hue-rotate(180deg)";
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }
});