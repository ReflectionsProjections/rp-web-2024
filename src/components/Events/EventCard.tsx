import { Button, Card, CardBody, CardFooter, Heading, Stack } from "@chakra-ui/react";

import CardBg from "../../assets/events_assets/event_card.svg"

export function EventCard() {
    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='auto'
        variant='outline'
        margin={2}
        bgImage={CardBg}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        >
        <Stack>
            <CardBody>
                <Heading size='md'>The perfect latte</Heading>
            </CardBody>

            <CardFooter>
            <Button variant='solid' colorScheme='blue'>
                Buy Latte
            </Button>
            </CardFooter>
        </Stack>
        </Card>
    )
    
}

export default EventCard;