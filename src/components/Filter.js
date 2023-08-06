import { FilterOutlined,DownloadOutlined } from "@ant-design/icons";
import { AutoComplete, Button } from "antd";
function Filter(props) {
  const options = [
    {
      value: "Burns Bay Road",
    },
    {
      value: "Downing Street",
    },
    {
      value: "Wall Street",
    },
  ];
  return (
    <div
      className={`fixed h-screen top-[4.1rem] right-0 bottom-0 z-10 w-[300px] bg-white shadow-md ${
        props?.open ? "showFilter" : "hideFilter"
      }`}
    >
      <div className="flex justify-center items-center pt-4">
        <div className="me-2">
          <FilterOutlined className="text-xl leading-none" />
        </div>
        <div className="font-bold text-gray-600 text-lg">Filters</div>
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={options}
          placeholder="Choose Source"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={options}
          placeholder="Job Titles"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={options}
          placeholder="Industries"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={options}
          placeholder="Orgnization Name"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={options}
          placeholder="Cities"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={options}
          placeholder="States"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={options}
          placeholder="Countries"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={options}
          placeholder="Person Technology Skills"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={options}
          placeholder="Person Intrests"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="flex justify-evenly items-center gap-3">
        <div><Button className="bg-[--primary-color]" type="primary" icon={<DownloadOutlined />} size={'medium'}>
        Apply Filter
          </Button></div>
        <div><Button className="bg-[#ff4a4ad4] text-white" type="danger" icon={<DownloadOutlined className="text-white"/>} size={'medium'}>
        Clear Search
          </Button></div>
      </div>
    </div>
  );
}
export default Filter;
