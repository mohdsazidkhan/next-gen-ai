import { FilterOutlined,DownloadOutlined } from "@ant-design/icons";
import { AutoComplete, Button } from "antd";
function Filter() {
  const chooseSource = [
    {
      value: "Linkedin",
    },
    {
      value: "Instagram",
    },
    {
      value: "Twitter",
    },
  ];
  const jobTitles = [
    {
      value: "HR Manager",
    },
    {
      value: "Front End Developer",
    },
    {
      value: "Backend Developer",
    },
  ];
  const industries = [
    {
      value: "Technology",
    },
    {
      value: "Real State",
    },
    {
      value: "Marketing",
    },
  ];
  const orgs = [
    {
      value: "Google",
    },
    {
      value: "Amazon",
    },
    {
      value: "Microsoft",
    },
  ];
  const cities = [
    {
      value: "Delhi",
    },
    {
      value: "Gurgaon",
    },
    {
      value: "Noida",
    },
  ];
  const states = [
    {
      value: "Delhi",
    },
    {
      value: "Haryana",
    },
    {
      value: "Uttar Pradesh",
    },
  ];
  const countries = [
    {
      value: "India",
    },
    {
      value: "USA",
    },
    {
      value: "China",
    },
  ];
  const pts = [
    {
      value: "HTML",
    },
    {
      value: "CSS",
    },
    {
      value: "Javascript",
    },
  ];
  const pInt = [
    {
      value: "Cricket",
    },
    {
      value: "Movies",
    },
    {
      value: "Web Series",
    },
  ];
  return (
    <div
      className="h-screen top-[4.1rem] z-10 w-[300px">
      <div className="flex justify-center items-center pt-4 relative">
        <div className="me-2">
          <FilterOutlined className="text-xl leading-none text-white" />
        </div>
        <div className="font-bold text-white text-lg">Filters</div>
      </div>
      <div className="filterScroll">
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={chooseSource}
          placeholder="Choose Source"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={jobTitles}
          placeholder="Job Titles"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={industries}
          placeholder="Industries"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={orgs}
          placeholder="Orgnization Name"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={cities}
          placeholder="Cities"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={states}
          placeholder="States"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={countries}
          placeholder="Countries"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={pts}
          placeholder="Person Technology Skills"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="w-full mt-4 mb-4 flex justify-center">
        <AutoComplete
          style={{ width: "250px" }}
          options={pInt}
          placeholder="Person Intrests"
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      </div>
      <div className="flex justify-evenly items-center gap-3 pt-4">
        <div><Button className="bg-[--primary-color]" type="primary" icon={<DownloadOutlined />} size={'medium'}>
        Apply Filter
          </Button></div>
        <div><Button className="bg-[--primary-color] text-white" type="danger" icon={<DownloadOutlined className="text-white"/>} size={'medium'}>
        Clear Search
          </Button></div>
      </div>
    </div>
  );
}
export default Filter;
