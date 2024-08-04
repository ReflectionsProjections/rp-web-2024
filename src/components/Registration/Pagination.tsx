import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaSave } from "react-icons/fa";
import { Flex, Center, Button, Spacer, IconButton, useMediaQuery } from "@chakra-ui/react";
import Config from "../../config";

interface PaginationProps {
    pageNo: number;
    goPrevPage: () => void;
}

export function Pagination({pageNo, goPrevPage}: PaginationProps) {
	const [isSmall] = useMediaQuery("(max-width: 400px)");

	function shouldEnableBack() {
		console.log(pageNo);
		return pageNo != 0;
	}

	function shouldEnableNext() {
		return pageNo != Config.NUM_REGISTRATION_PAGES - 1;
	}

	function NextButton() {
		return <IconButton color='white' borderRadius='50%' bgColor='#EC99A7' onMouseDown={(event)=>{event.preventDefault();}} type="submit" m="10px" onClick={() => console.log("click!")} isDisabled={!shouldEnableNext()} aria-label='Next' height="5vh" width="5vh" icon={<ChevronRightIcon />} />;
	}

	function SubmitButton() {
		return <Button color='white' bgColor='#EC99A7' borderRadius='10px' type="submit" m="10px" aria-label='Next' height="5vh" > Submit! </Button>;
	}

	return (
		<Flex width="full" padding="10px">
			<Center> <Button color='white' bgColor='#EC99A7' borderRadius='10px' m="10px" variant="solid" maxWidth="160px">{isSmall ? <FaSave/> : "Save" } </Button> </Center>
			<Spacer />
			<Center>
				<IconButton color='white' bgColor='#EC99A7' borderRadius='50%' m="10px" isDisabled={!shouldEnableBack()} onClick={goPrevPage} aria-label='Back' height="5vh" width="5vh" icon={<ChevronLeftIcon />} />
                
				{shouldEnableNext() ? <NextButton /> : <SubmitButton />}
			</Center>
		</Flex>

	);
}
