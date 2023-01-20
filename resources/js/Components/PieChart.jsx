export default function PieChart() {
    const dataPie = {
        labels: ["PEREMPUAN", "LAKI LAKI"],
        datasets: [
            {
                label: "My First Dataset",
                data: [300, 50],
                backgroundColor: [
                    "rgb(133, 105, 241)",
                    "rgb(164, 101, 241)",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const configPie = {
        type: "pie",
        data: dataPie,
        options: {},
    };

    var chartBar = new Chart(document.getElementById("chartPie"), configPie);
    return (
        <>
                <div className="py-3 px-5 bg-gray-50">Grafik Jenis Kelamin</div>
                <canvas className="p-10" id="chartPie"></canvas>
        </>
    );
}
