import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Center, Button, Spacer, IconButton } from "@chakra-ui/react";
import Config from "../../config";

interface PaginationProps {
    pageNo: number;
    goNextPage: () => void;
    goPrevPage: () => void;
}

export function Pagination({pageNo, goNextPage, goPrevPage}: PaginationProps) {
	function shouldEnableBack() {
		return pageNo != 0;
	}

	function shouldEnableNext() {
		return pageNo != Config.NUM_REGISTRATION_PAGES - 1;
	}

	function NextButton() {
		return <IconButton type="submit" m="10px" isDisabled={!shouldEnableNext()} onClick={goNextPage} aria-label='Next' height="5vh" width="5vh" icon={<ChevronRightIcon />} />;
	}

	function SubmitButton() {
		return <Button type="submit" m="10px" onClick={goNextPage} aria-label='Next' height="5vh" > Submit! </Button>;
	}

	return (
		<Flex width="full" padding="10px">
			<Center> <Button m="10px" variant="solid" minWidth="120px" maxWidth="160px"> Save </Button> </Center>
			<Spacer />
			<Center>
				<IconButton m="10px" isDisabled={!shouldEnableBack()} onClick={goPrevPage} aria-label='Back' height="5vh" width="5vh" icon={<ChevronLeftIcon />} />
                
				{shouldEnableNext() ? <NextButton /> : <SubmitButton />}
			</Center>
		</Flex>

	);
}
