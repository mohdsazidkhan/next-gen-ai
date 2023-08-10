import { FilterOutlined, DownloadOutlined } from "@ant-design/icons";
import { AutoComplete, Button, Input, Slider, Switch, TreeSelect } from "antd";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
function Filter(props) {
  const [validEmail, setValidEmail] = useState(true);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100);
  const [jobtitle, setJobTitleValue] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [pts, setPts] = useState([]);
  const [pInts, setPInts] = useState([]);

  const onJobTitleChange = (newValue) => {
    setJobTitleValue(newValue);
  };
  const onPIntsChange = (newValue) => {
    setPInts(newValue);
  };
  const onPtsChange = (newValue) => {
    setPts(newValue);
  };
  const onCountriesChange = (newValue) => {
    setCountries(newValue);
  };
  const onStatesChange = (newValue) => {
    setStates(newValue);
  };
  const onCitiesChange = (newValue) => {
    setCities(newValue);
  };
  const onOrganizationsChange = (newValue) => {
    setOrganizations(newValue);
  };
  const onIndustriesChange = (newValue) => {
    setIndustries(newValue);
  };
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
  const jtData = [
    {
      value: "HR Manager",
      title: "HR Manager",
    },
    {
      value: "Front End Developer",
      title: "Front End Developer",
    },
    {
      value: "Backend Developer",
      title: "Backend Developer",
    },
  ];
  const industriesData = [
    {
      value: "Technology",
      title: "Technology",
    },
    {
      value: "Real State",
      title: "Real State",
    },
    {
      value: "Marketing",
      title: "Marketing",
    },
  ];
  const organizationsData = [
    {
      value: "Google",
      title: "Google",
    },
    {
      value: "Amazon",
      title: "Amazon",
    },
    {
      value: "Microsoft",
      title: "Microsoft",
    },
  ];
  const citiesData = [
    {
      value: "Delhi",
      title: "Delhi",
    },
    {
      value: "Gurgaon",
      title: "Gurgaon",
    },
    {
      value: "Noida",
      title: "Noida",
    },
  ];
  const statesData = [
    {
      value: "Delhi",
      title: "Delhi",
    },
    {
      value: "Haryana",
      title: "Haryana",
    },
    {
      value: "Uttar Pradesh",
      title: "Uttar Pradesh",
    },
  ];
  const countriesData = [
    {
      value: "India",
      title: "India",
    },
    {
      value: "USA",
      title: "USA",
    },
    {
      value: "China",
      title: "China",
    },
  ];
  const ptsData = [
    {
      value: "HTML",
      title: "HTML",
    },
    {
      value: "CSS",
      title: "CSS",
    },
    {
      value: "Javascript",
      title: "Javascript",
    },
  ];
  const pIntData = [
    {
      value: "Cricket",
      title: "Cricket",
    },
    {
      value: "Movies",
      title: "Movies",
    },
    {
      value: "Web Series",
      title: "Web Series",
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
        <div className="text-white ml-3">Choose Source</div>
        <div className="w-full mt-1 mb-3 flex justify-center">
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
        <div className="text-white ml-3">Job Titles</div>
        <div className="mt-1 mb-3 flex justify-center filterMulti">
          <TreeSelect
            className="multiSelect w-full px-3"
            showSearch
            value={jobtitle}
            placeholder="Job Titles"
            allowClear
            multiple
            onChange={onJobTitleChange}
            treeData={jtData}
          />
        </div>
        <div className="text-white ml-3">Industries</div>
        <div className="mt-1 mb-3 flex justify-center filterMulti">
          <TreeSelect
            className="multiSelect w-full px-3"
            showSearch
            value={industries}
            placeholder="Industries"
            allowClear
            multiple
            onChange={onIndustriesChange}
            treeData={industriesData}
          />
        </div>
        <div className="text-white ml-3">Orgnization Name</div>
        <div className="mt-1 mb-3 flex justify-center filterMulti">
          <TreeSelect
            className="multiSelect w-full px-3"
            showSearch
            value={organizations}
            placeholder="Orgnization Name"
            allowClear
            multiple
            onChange={onOrganizationsChange}
            treeData={organizationsData}
          />
        </div>
        <div className="text-white ml-3">Cities</div>
        <div className="mt-1 mb-3 flex justify-center filterMulti">
          <TreeSelect
            className="multiSelect w-full px-3"
            showSearch
            value={cities}
            placeholder="Cities"
            allowClear
            multiple
            onChange={onCitiesChange}
            treeData={citiesData}
          />
        </div>
        <div className="text-white ml-3">States</div>
        <div className="mt-1 mb-3 flex justify-center filterMulti">
          <TreeSelect
            className="multiSelect w-full px-3"
            showSearch
            value={states}
            placeholder="States"
            allowClear
            multiple
            onChange={onStatesChange}
            treeData={statesData}
          />
        </div>
        <div className="text-white ml-3">Countries</div>
        <div className="mt-1 mb-3 flex justify-center filterMulti">
          <TreeSelect
            className="multiSelect w-full px-3"
            showSearch
            value={countries}
            placeholder="Countries"
            allowClear
            multiple
            onChange={onCountriesChange}
            treeData={countriesData}
          />
        </div>
        <div className="text-white ml-3">
          Person Technology Skills
        </div>
        <div className="mt-1 mb-3 flex justify-center filterMulti">
          <TreeSelect
            className="multiSelect w-full px-3"
            showSearch
            value={pts}
            placeholder="Person Technology Skills"
            allowClear
            multiple
            onChange={onPtsChange}
            treeData={ptsData}
          />
        </div>
        <div className="text-white ml-3">Person Intrests</div>
        <div className="mt-1 mb-3 flex justify-center filterMulti">
          <TreeSelect
            className="multiSelect w-full px-3"
            showSearch
            value={pInts}
            placeholder="Person Intrests"
            allowClear
            multiple
            onChange={onPIntsChange}
            treeData={pIntData}
          />
        </div>
        <div className="flex justify-between items-center px-3">
          <span className="text-white mr-2">Valid Emails Only</span>
          <Switch checked={validEmail} onChange={onEmailChange} />
        </div>
        {validEmail && (
          <>
            <div className="text-white ml-3 text-sm">Last Validate Email</div>
            <div className="w-full mt-1 mb-3 flex justify-center">
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
        <div className="text-white ml-3 mt-2">Enter Name</div>
        <div className="mt-1 mb-3 px-3 flex justify-center filterInputField">
          <Input placeholder="Enter name" />
        </div>
        <div className="text-white ml-3 mt-2">Enter Contact Id</div>
        <div className="mt-1 mb-3 px-3 flex justify-center filterInputField">
          <Input placeholder="Enter contact id" />
        </div>
        <div className="text-white ml-3 mt-2">
          Zip Codes (Only Numeric Values)
        </div>
        <div className="mt-1 mb-3 px-3 flex justify-center filterInputField">
          <Input placeholder="Enter zipcodes" />
        </div>
        <div className="text-white ml-3 mt-2">
          Excluded Email Domain
        </div>
        <div className="mt-1 mb-3 px-3 flex justify-center filterInputField">
          <Input placeholder="Enter excluded email domail" />
        </div>
        <div className="text-white ml-3 mt-2">Last Comunicated</div>
        <div className="w-full mt-1 mb-3 flex justify-center">
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
        <div className="text-white ml-3 mt-2">Experience</div>
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
        <div className="text-white ml-3">
          Experience Between {minVal + " to " + maxVal}
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-3 pt-4 filterBtns">
        <div>
          <Button
            className="bg-[--primary-color]"
            type="primary"
            //icon={<DownloadOutlined />}
            size={"medium"}
          >
            APPLY FILTER
          </Button>
        </div>
        <div>
          <Button
            className="bg-[--primary-color] text-white"
            type="danger"
            //icon={<DownloadOutlined className="text-white" />}
            size={"medium"}
          >
            CLEAR SEARCH
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Filter;
