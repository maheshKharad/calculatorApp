const qrFormEl = document.getElementById("qrForm");

qrFormEl.addEventListener("submit",(Event) =>{
    Event.preventDefault();

    const formData = new FormData(qrFormEl);
    const text = formData.get("qrText");
    console.log("text",text);
})