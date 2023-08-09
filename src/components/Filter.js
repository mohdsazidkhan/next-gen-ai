import { FilterOutlined, DownloadOutlined } from "@ant-design/icons";
import { AutoComplete, Button, Input, Slider, Switch } from "antd";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
function Filter(props) {
  const [validEmail, setValidEmail] = useState(true);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const onEmailChange = () => {
    setValidEmail((validEmail) => !validEmail);
  };
  const onSliderChange = (e) => {
    setMaxVal(e.maxValue);
    setMinVal(e.minValue);
  };
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
  const lVEmail = [
    {
      value: "Within Last Week",
    },
    {
      value: "Within Last Month",
    },
    {
      value: "Within Last 3 Months",
    },
    {
      value: "Within Last 6 Months",
    },
    {
      value: "Within Last Year",
    },
    {
      value: "Within Last 2 Year",
    },
    {
      value: "Within Last 3 Year",
    },
    {
      value: "Within Last 5 Year",
    },
  ];
  return (
    <div className="h-screen top-[4.1rem] z-10 w-[300px">
      <div className="flex items-center relative ml-3">
        <div className="me-2">
          <FilterOutlined className="text-xl leading-none text-white" />
        </div>
        <div className="font-bold text-white text-lg">
          {props.title} Filters
        </div>
      </div>
      <div className="filterScroll mt-2">
        <div className="text-white ml-3 font-bold">Choose Source</div>
        <div className="w-full mt-2 mb-2 flex justify-center">
          <AutoComplete
            style={{ width: "250px" }}
            options={chooseSource}
            placeholder="Choose Source"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
        <div className="text-white ml-3 font-bold">Job Titles</div>
        <div className="w-full mt-2 mb-2 flex justify-center">
          <AutoComplete
            style={{ width: "250px" }}
            options={jobTitles}
            placeholder="Job Titles"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
        <div className="text-white ml-3 font-bold">Industries</div>
        <div className="w-full mt-2 mb-2 flex justify-center">
          <AutoComplete
            style={{ width: "250px" }}
            options={industries}
            placeholder="Industries"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
        <div className="text-white ml-3 font-bold">Orgnization Name</div>
        <div className="w-full mt-2 mb-2 flex justify-center">
          <AutoComplete
            style={{ width: "250px" }}
            options={orgs}
            placeholder="Orgnization Name"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
        <div className="text-white ml-3 font-bold">Cities</div>
        <div className="w-full mt-2 mb-2 flex justify-center">
          <AutoComplete
            style={{ width: "250px" }}
            options={cities}
            placeholder="Cities"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
        <div className="text-white ml-3 font-bold">States</div>
        <div className="w-full mt-2 mb-2 flex justify-center">
          <AutoComplete
            style={{ width: "250px" }}
            options={states}
            placeholder="States"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
        <div className="text-white ml-3 font-bold">Countries</div>
        <div className="w-full mt-2 mb-2 flex justify-center">
          <AutoComplete
            style={{ width: "250px" }}
            options={countries}
            placeholder="Countries"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
        <div className="text-white ml-3 font-bold">
          Person Technology Skills
        </div>
        <div className="w-full mt-2 mb-2 flex justify-center">
          <AutoComplete
            style={{ width: "250px" }}
            options={pts}
            placeholder="Person Technology Skills"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
        <div className="text-white ml-3 font-bold">Person Intrests</div>
        <div className="w-full mt-2 mb-2 flex justify-center">
          <AutoComplete
            style={{ width: "250px" }}
            options={pInt}
            placeholder="Person Intrests"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
        <div className="flex justify-between items-center px-3">
          <span className="text-white mr-2">Valid Emails Only</span>
          <Switch checked={validEmail} onChange={onEmailChange} />
        </div>
        {validEmail && (
          <>
            <div className="text-white ml-3 text-sm">Last Validate Email</div>
            <div className="w-full mt-2 mb-2 flex justify-center">
              <AutoComplete
                style={{ width: "250px" }}
                options={lVEmail}
                placeholder="Select"
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              />
            </div>
          </>
        )}
        <div className="flex justify-between items-center px-3 mt-3">
          <span className="text-white mr-2">Phone No Exist</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div className="flex justify-between items-center px-3 mt-3">
          <span className="text-white mr-2">Email Exist</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div className="flex justify-between items-center px-3 mt-3">
          <span className="text-white mr-2">Job Title Exist</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div className="flex justify-between items-center px-3 mt-3">
          <span className="text-white mr-2">Twitter Exist</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div className="flex justify-between items-center px-3 mt-3">
          <span className="text-white mr-2">Facebook Exist</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div className="text-white ml-3 font-bold mt-2">Enter Name</div>
        <div className="mt-2 mb-2 px-3 flex justify-center filterInputField">
          <Input placeholder="Enter name" />
        </div>
        <div className="text-white ml-3 font-bold mt-2">Enter Contact Id</div>
        <div className="mt-2 mb-2 px-3 flex justify-center filterInputField">
          <Input placeholder="Enter contact id" />
        </div>
        <div className="text-white ml-3 font-bold mt-2">
          Zip Codes (Only Numeric Values)
        </div>
        <div className="mt-2 mb-2 px-3 flex justify-center filterInputField">
          <Input placeholder="Enter zipcodes" />
        </div>
        <div className="text-white ml-3 font-bold mt-2">
          Excluded Email Domain
        </div>
        <div className="mt-2 mb-2 px-3 flex justify-center filterInputField">
          <Input placeholder="Enter excluded email domail" />
        </div>
        <div className="text-white ml-3 font-bold mt-2">Last Comunicated</div>
        <div className="w-full mt-2 mb-2 flex justify-center">
          <AutoComplete
            style={{ width: "250px" }}
            options={lVEmail}
            placeholder="Select"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </div>
        <div className="text-white ml-3 font-bold mt-2">Experience</div>
        <div className="w-full mt-2 flex justify-center">
          <MultiRangeSlider
            min={0}
            max={100}
            step={5}
            minValue={minVal}
            maxValue={maxVal}
            onInput={(e) => {
              onSliderChange(e);
            }}
          />
        </div>
        <div className="text-white ml-3">Experience Between {minVal+" to "+maxVal}</div>
      </div>
      <div className="flex justify-evenly items-center gap-3 pt-4 filterBtns">
        <div>
          <Button
            className="bg-[--primary-color]"
            type="primary"
            icon={<DownloadOutlined />}
            size={"medium"}
          >
            Apply Filter
          </Button>
        </div>
        <div>
          <Button
            className="bg-[--primary-color] text-white"
            type="danger"
            icon={<DownloadOutlined className="text-white" />}
            size={"medium"}
          >
            Clear Search
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Filter;
