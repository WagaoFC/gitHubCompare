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
                borderColor: 'rgb(154, 99, 255)',
                pointRadius: 3,
                pointBackgroundColor: 'rgba(154, 99, 255)',
            },
            {
                label: 'Luke',
                data: ['10', '70', '55', '100', '25', '80', '50', '20'],
                borderColor: 'rgb(148, 255, 99)',
                pointRadius: 3,
                pointBackgroundColor: 'rgb(148, 255, 99)',
            },
            {
                label: 'Chewbacca',
                data: ['0', '20', '15', '75', '90', '30', '95', '55'],
                borderColor: 'rgb(255, 9, 99)',
                pointRadius: 3,
                pointBackgroundColor: 'rgb(255, 9, 99)',
            }
        ]
    }

    return (
        <Line 
            data={data}
        />
    )
}