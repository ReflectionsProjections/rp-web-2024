import { Box, Flex, FormLabel, VStack } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Pagination } from "../Pagination";

import { colleges } from "../inputs/colleges";
import { majors } from "../inputs/majors"
import DropdownSelect from "../inputs/AutoDropdownInput";
import Config from "../../../config";
import { FormInput } from "../inputs/FormInput";
import { SelectInput } from "../inputs/SelectInput";
import { MultiCheckBoxInput } from "../inputs/MultiCheckboxInput";
import { PageProps } from "../../../routes/Registration";

const CareerProfileValidator = Yup.object().shape({
    university: Yup.string().required('Required'),
    major: Yup.string().required('Required'),
    graduationYear: Yup.string().length(4).required('Required'),
});

const CareerProfileDefaults = {
    university: "",
    major: "",
    graduationYear: "",
};


export function CareerProfile({ pageNo, goNextPage, goPrevPage, setAttendeeData, attendeeData }: PageProps) {
    const formik = useFormik({
        initialValues: CareerProfileDefaults,
        validationSchema: CareerProfileValidator,

        onSubmit: (values) => {
			setAttendeeData({ ...values, attendeeData })
            alert(JSON.stringify(values, null, 2));
            goNextPage();
        },
    });

    return (
        <Flex direction="column" w="100%" align={"center center"} mt="10vh">
            <form onSubmit={formik.handleSubmit}>
                <Box bg="white" p={6} rounded="md" h="80vh">
                    <VStack spacing={4} align="flex-start">
						<FormLabel htmlFor="university"> What school do you go to? </FormLabel>
                        <DropdownSelect id="university" name="university" formik={formik} options={colleges} />
                        
						<FormLabel htmlFor="major"> What is your current (or intended) major? </FormLabel>
                        <DropdownSelect id="major" name="major" formik={formik} options={majors} />
                        
						<FormLabel htmlFor="graduationYear"> When do you graduate? </FormLabel>
                        <SelectInput id="graduationYear" name="graduationYear" formik={formik} options={Config.REGISTRATION_GRADUATION_YEARS}/> 

						<FormLabel htmlFor="openTo"> What opportunities are you open to? </FormLabel>
                        <MultiCheckBoxInput id="openTo" name="openTo" formik={formik} checkboxText={Config.REGISTRATION_OPEN_TO}/> 
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