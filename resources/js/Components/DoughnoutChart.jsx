export default function DoughnoutChart() {
    const dataDoughnut = {
        labels: ["PEREMPUAN", "LAKI LAKI"],
        datasets: [
            {
                label: "My First Dataset",
                data: [43, 50],
                backgroundColor: [
                    "rgb(133, 105, 241)",
                    "rgb(164, 101, 241)",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const configDoughnut = {
        type: "doughnut",
        data: dataDoughnut,
        options: {},
    };

    var chartBar = new Chart(
        document.getElementById("chartDoughnut"),
        configDoughnut
    );
    return (
        <>
                <div className="py-3 px-5 bg-gray-50">Doughnut chart</div>
                <canvas className="p-10" id="chartDoughnut"></canvas>
        </>
    );
}
