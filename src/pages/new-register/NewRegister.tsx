import { useState } from "react";
// import router from "@/routes";
// import { mutate } from "swr";
import { TextField } from "@/components/login/TextField";

import { PrimaryButtons } from "@/components/ui-kit/buttons/PrimaryButtons";
// import useAxiosPrivate from "@/hooks/context/useAxiosPrivate";
import ReturnButton from "@/components/ui-kit/buttons/ReturnButton";
import { toast } from "react-toastify";

const NewRegister = () => {
  const [personInfo, setPersonInfo] = useState({
    name: "",
    family: "",
    mobile: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonInfo({
      ...personInfo,
      [event.target.name]: event.target.value,
    });
  };
  // const axiosPrivate = useAxiosPrivate();
  // const registerNewPerson = async () => {
  //   try {
  //     const res = await axiosPrivate.post("/panel/banner/add", {
  //       banner_name: name,

  //     });
  //     if (res.status === 200) {
  //       router.navigate(-1);
  //       mutate(`/panel/banner/get/all/0/100`);
  //       toast.success("بنر با موفقیت ایجاد شد");
  //     }
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("مشکلی پیش آمد، دوباره تلاش کنید");
  //   }
  // };

  const registerNewPerson = () => {
    //add Validation
    toast.success("با موفقیت ثبت شد");
    console.table({ personInfo });
  };

  return (
    <div className="max-w-xl mx-auto p-4 my-3 bg-white border border-gray-300 rounded-lg shadow-sm md:p-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold">ثبت جدید</p>
        <ReturnButton />
      </div>
      <div className="flex flex-col justify-start items-start w-full">
        <TextField
          id="name"
          placeholder="نام"
          label="نام "
          onChange={handleChange}
          state={personInfo.name}
        />
        <div className="w-full my-5">
          <TextField
            id="family"
            placeholder="نام خانوادگی"
            label="نام خانوادگی"
            onChange={handleChange}
            state={personInfo.family}
          />
        </div>
        <TextField
          id="mobile"
          placeholder="شماره تماس"
          label="شماره تماس"
          onChange={handleChange}
          state={personInfo.mobile}
        />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
          <PrimaryButtons
            onClick={registerNewPerson}
            fullWidth
            className="my-10"
          >
            ثبت
          </PrimaryButtons>
        </div>
      </div>
    </div>
  );
};

export default NewRegister;
