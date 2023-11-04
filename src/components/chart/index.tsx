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

interface IInfoUser {
    username: string,
    nameTech: string[],
    totalBytes: number[],
}

export function Chart(infoUser: IInfoUser) {
    const bytes = infoUser.totalBytes
    const techs = infoUser.nameTech

    const data = {
        labels: techs,
        datasets: [
            {
                label: infoUser.username,
                data: bytes,
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