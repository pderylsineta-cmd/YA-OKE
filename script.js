async function askAI() {
    const question = document.getElementById("question").value;
    const answerBox = document.getElementById("answer");

    if(question === ""){
        answerBox.innerHTML = "Masukkan soal terlebih dahulu!";
        return;
    }

    answerBox.innerHTML = "Sedang memproses...";

    // Contoh jawaban sementara
    answerBox.innerHTML =
        "Soal: " + question +
        "<br><br>Jawaban AI akan muncul di sini setelah dihubungkan ke API.";
}
