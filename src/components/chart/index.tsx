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

export function Chart({ techs }: any) {

    const data = {
        labels: techs.map((m: any) => m.language),
        datasets: [
            {
                label: 'WagaoFC',
                data: techs.map((m: any) => m.total),
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