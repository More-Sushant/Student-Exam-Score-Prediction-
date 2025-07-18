document.getElementById("predictForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const hoursStudied = parseFloat(document.getElementById("hoursStudied").value);
    const previousScore = parseFloat(document.getElementById("previousScore").value);
    const attendance = parseFloat(document.getElementById("attendance").value);

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            hoursStudied: hoursStudied,
            previousScore: previousScore,
            attendance: attendance
        })
    })
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById("result");
            if (data.success) {
                resultDiv.innerHTML = `<p><strong>Predicted Score:</strong> ${data.predictedScore}</p>`;
            } else {
                resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("result").innerHTML = `<p>Unexpected error occurred.</p>`;
        });
});
