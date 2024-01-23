import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export interface CardInfo {
    name: string,
    imageURL: string,
    description: string
}

export interface CardProps {
    cardInfo: CardInfo
}

export function ActivityCard(props: CardProps) {
    const { cardInfo } = props;

    return (
        <Card variant="outlined" sx={{ maxWidth: '15%' }}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h6">
                        {cardInfo.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cardInfo.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}