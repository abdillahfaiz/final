import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnoutChart({data, options}) {
    return (
        <>
            <div class="flex justify-center">
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <DoughnoutChart
                        data={data}
                        options={options}
                    ></DoughnoutChart>
                </div>
            </div>
        </>
    );
}
