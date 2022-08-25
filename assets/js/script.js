const loadProgram = () => {
    //fetch
    fetch('./assets/data/program.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('program-data').innerHTML = ""

        const json = JSON.stringify(data.program);
        const result = JSON.parse(json);

        for (let i = 0; i < result.length; i++) {
            document.getElementById('program-data').innerHTML += `
    <div class="col-2">
                <div class="card card-program" style="background-image: url(${result[i].img});">
                <div class="card-body">
                    <h4>${result[i].name}</h4>
                    </div>
                </div>
            </div>`;
        }
    }).catch(err => {
        console.error(err);
    })
}
loadProgram()

window.onscroll = () => {
    const navbar = document.getElementById("sticky");
    if (window.pageYOffset >= 220) {
    navbar.classList.add("change-navbar")
    } else {
    navbar.classList.remove("change-navbar");
    }
}