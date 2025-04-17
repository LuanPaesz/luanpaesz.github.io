// Função para capitalizar a primeira letra da descrição
const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

// Função principal que busca os dados e popula a tabela
async function populateTableRows() {
    await fetch('https://api.openweathermap.org/data/2.5/weather?q=dublin,ie&units=metric&APPID=bc425ac2188d406c884f4fdd88b339f0')
        .then(response => {
            if (response.status !== 200) {
                console.log('Erro ao buscar dados. Status: ' + response.status);
                return;
            }
            response.json().then((data) => {
                let strTableRows = `
                    <tr>
                        <td><span>Summary</span></td>
                        <td>${capitalize(data.weather[0].description)}</td>
                    </tr>
                    <tr>
                        <td><span>Temperature</span></td>
                        <td>${data.main.temp}°C</td>
                    </tr>
                    <tr>
                        <td><span>Humidity</span></td>
                        <td>${data.main.humidity}%</td>
                    </tr>
                    <tr>
                        <td><span>Pressure</span></td>
                        <td>${data.main.pressure} Pa</td>
                    </tr>`;

                document.querySelector("#table-weather-dublin tbody").innerHTML = strTableRows;
            });
        })
        .catch(error => {
            console.log("Erro na requisição:", error);
        });
}

// Função para mudar o fundo de acordo com o horário
function change_background() {
    let d = new Date();
    let n = d.getHours();
    if (n > 23 || n <= 6) {
        document.querySelector(".theme-js").style.backgroundImage = "url('assets/img/dublin-night.jpg')";
    } else {
        document.querySelector(".theme-js").style.backgroundImage = "url('assets/img/dublin-day.jpg')";
    }
}

// Executa as funções quando a página estiver carregada
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        populateTableRows();
        change_background();
    });
} else {
    populateTableRows();
    change_background();
}
