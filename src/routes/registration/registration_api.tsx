import axios from 'axios';
import Config from "../../config.ts";

export const handleGetFormData = async (searchParams, formData, setFormData) => {
    let jwt = localStorage.getItem("jwt");
    jwt = searchParams.get("token");
    try {
      const response = await axios.get(Config.BASE_URL + "registration/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
      });
      console.log(response.data);
      const { registration } = response.data;
      const newFormData = { ...formData };
  
      for (const key in newFormData) {
        if (Array.isArray(newFormData[key])) {
          newFormData[key] = [];
        }
        if (registration.hasOwnProperty(key)) {
          newFormData[key] = registration[key];
        }
      }
      newFormData.isInterestedMechMania = false;
      setFormData(newFormData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  export const handleSubmit = async (formData, searchParams, toast) => {
    try {
      const jwt = localStorage.getItem("jwt") || searchParams.get("token");
      if (!jwt) {
        window.location.href = Config.BASE_URL + "auth/login/web";
      }
  
      const promise = axios.post(
        Config.BASE_URL + "registration/submit",
        {
          ...formData,
          hasSubmitted: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
        }
      );
  
      toast.promise(promise, {
        success: {
          title: "Success!",
          description: "Your data has been submitted.",
        },
        error: {
          title: "Oops!",
          description: "Something went wrong - please try again.",
        },
        loading: { title: "Saving", description: "Please wait..." },
      });
    } catch (error) {
      console.log(error.response.data);
      console.error("Error fetching data:", error);
    }
  };

  export const handleFieldSave = async (formData, searchParams, setFormData, toast) => {
    try {
      const jwt = localStorage.getItem("jwt") || searchParams.get("token");
      if (!jwt) {
        window.location.href = Config.BASE_URL + "auth/login/web";
      }
  
      const promise = axios.post(
        Config.BASE_URL + "registration/save",
        {
          ...formData,
          hasSubmitted: false,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
        }
      );
  
      toast.promise(promise, {
        success: {
          title: "Success!",
          description: "Your data has been saved.",
        },
        error: {
          title: "Oops!",
          description: "Something went wrong - please try again.",
        },
        loading: { title: "Saving", description: "Please wait..." },
      });
  
      await handleGetFormData(searchParams, formData, setFormData);
    } catch (error) {
      console.log(error.response.data);
      console.error("Error fetching data:", error);
    }
  };


  export const handleResumeSubmit = async (jwt, searchParams, file, formData, toast) => {
    jwt = jwt || searchParams.get("token");
  
    console.log("get data");
    try {
      const response = await axios.get(`${Config.BASE_URL}s3/upload/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
      });
      toast({
        title: "Data fetched successfully",
        description: "Your resume has been loaded.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log(response.data);
      console.log("url" + response.data.url);
      console.log("fields" + response.data.fields);
      uploadToS3(response.data.url, response.data.fields, file, formData);
    } catch (error) {
      console.log(error.response.data);
      console.error("Error fetching data:", error);
    }
  };
  
  export const uploadToS3 = async (url, fields, file, formData) => {
    const form = new FormData();
  
    for (const [key, value] of Object.entries(fields)) {
      form.append(key, value);
    }
  
    form.append('file', file);
  
    try {
      const response = await axios.post(url, form, {
        headers: {
          ...fields,
        },
      });
      formData.hasResume = true;
    } catch (error) {
      console.log(error);
    }
  };