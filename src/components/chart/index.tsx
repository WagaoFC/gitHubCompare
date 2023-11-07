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
        labels: ['HTML', 'TYPESCRIPT', 'CSS', 'JAVASCRIPT', 'C#', 'PHP'],
        datasets: [
            {
                label: 'Wagner',
                data: ['50', '100', '30', '70', '5', '20'],
                borderColor: 'rgb(154, 99, 255)',
                pointRadius: 3,
                pointBackgroundColor: 'rgba(154, 99, 255)',
            }
        ]
    }

    return (
        <Line 
            data={data}
        />
    )
}