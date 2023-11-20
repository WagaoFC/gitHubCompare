import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

export function Chart() {
    const data = {
        labels: ['HTML', 'TYPESCRIPT', 'CSS', 'JAVASCRIPT', 'C#', 'PHP', 'C++', 'JAVA'],
        datasets: [
            {
                label: 'WagaoFC',
                data: ['50', '100', '40', '70', '5', '30', '50', '10'],
                borderColor: 'rgb(6, 182, 212)',
                pointRadius: 3,
                pointBackgroundColor: 'rgba(6, 182, 212)',
                fill: true,
                backgroundColor: 'rgba(6, 182, 212, 0.2)',
                tension: 0.3,
            }
        ]
    }

    return (
        <Line
            data={data}
        />
    )
}