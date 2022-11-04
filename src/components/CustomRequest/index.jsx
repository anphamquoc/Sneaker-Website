import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import Breadcrumb from "../../wrapper/Breadcrumb";
import Shoes from "../../assets/images/shoes-transparent.png";
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useNavigate } from "react-router-dom";

const CustomRequest = () => {
  const user = useSelector((state) => state.user);
  const navigation = useNavigate();
  const [selectedCity, setSelectedCity] = useState({
    name: "Khu phố 6, phường Linh Trung, quận Thủ Đức, thành phố Hồ Chí Minh",
  });
  const [date, setDate] = useState(new Date());
  const places = [
    {
      name: "Khu phố 6, phường Linh Trung, quận Thủ Đức, thành phố Hồ Chí Minh",
    },
  ];

  const onCityChange = (e) => {
    setSelectedCity(e.value);
  };

  const handleSubmit = (e) => {
    navigation("/custom-request/success", {
      state: {
        date,
        selectedCity,
      },
    });
  };

  return (
    <div className="w-full pt-32 flex flex-col items-center">
      <Breadcrumb header={"YÊU CẦU CUSTOM"} breadcrumbName={"Yêu cầu custom"} />
      {user.loading ? (
        <div class="flex flex-col w-4/5">
          <Skeleton height={"100px"} />
        </div>
      ) : (
        <div className="flex flex-row w-4/5 gap-5">
          <div className="basis-1/2">
            <img src={Shoes} alt="shoes" />
          </div>
          <div className="flex flex-col gap-5 basis-1/2">
            <h2 className="font-semibold text-xl">
              Custom giày theo yêu cầu của bạn
            </h2>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="basic">Chọn ngày</label>
              <Calendar
                id="basic"
                value={date}
                onChange={(e) => setDate(e.value)}
                showTime
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="basic">Chọn địa điểm gần nhất</label>
              <Dropdown
                value={selectedCity}
                options={places}
                onChange={onCityChange}
                optionLabel="name"
                placeholder="Chọn địa điểm"
                disabled
              />
            </div>
            <button
              className="bg-purple-500 rounded-full text-white font-semibold py-2 px-4 cursor-pointer"
              onClick={handleSubmit}
            >
              Xác nhận
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomRequest;
