import { Box, Flex, VStack } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Pagination } from "../Pagination";

import { colleges } from "../inputs/colleges";
import { majors } from "../inputs/majors"
import DropdownSelect from "../inputs/DropdownSelect";

const CareerProfileValidator = Yup.object().shape({
    university: Yup.string().required('Required'),
});

const CareerProfileDefaults = {
    university: "",
    major: "",
};


interface CareerProfileProps {
    pageNo: number;
    goNextPage: () => void;
    goPrevPage: () => void;
}


export function CareerProfile({ pageNo, goNextPage, goPrevPage }: CareerProfileProps) {
    const formik = useFormik({
        initialValues: CareerProfileDefaults,
        validationSchema: CareerProfileValidator,

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            goNextPage();
        },
    });

    return (
        <Flex direction="column" w="100%" align={"center center"} mt="10vh">
            <form onSubmit={formik.handleSubmit}>
                <Box bg="white" p={6} rounded="md" h="80vh">
                    <VStack spacing={4} align="flex-start">
                        <DropdownSelect id="university" name="university" formik={formik} options={colleges} />
                        <DropdownSelect id="major" name="major" formik={formik} options={majors} />

                    </VStack>
                </Box>
                <Box h="10vh">
                    <Pagination pageNo={pageNo} goPrevPage={goPrevPage} />
                </Box>
            </form>
        </Flex>
    );
}

export default CareerProfile;