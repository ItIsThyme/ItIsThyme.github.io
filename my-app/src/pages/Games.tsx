import { useParams } from "react-router"
import { ActivityCard, CardInfo } from "../components/ActivityCard";
import { Paper } from "@mui/material";

const games: CardInfo[] = [
    {
        name: 'Pong',
        imageURL: '/assets/pong.png',
        description: 'A game with a ball that goes like "boop" when it hits a paddle'
    }
]

export default function Games() {
    const { game } = useParams();


    return (
        <Paper sx={{display: 'flex', flexGrow: 1, justifyContent: 'space-around'}}>
            {games.map(x => {
                return <ActivityCard cardInfo={x} />
            })}
        </Paper>
    )
}