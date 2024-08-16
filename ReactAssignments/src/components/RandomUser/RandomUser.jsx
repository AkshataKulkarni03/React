import React, {useState} from "react";
import {useLoaderData} from "react-router-dom";
import ErrorHandler from "../ErrorHandler/ErrorHandler";

function RandomUser() {
    const { responseData: initialResponseData, errorData: initialError } = useLoaderData();
    const [data, setUserData] = useState(initialResponseData || null);
    const [handleError, setHandleError] = useState(initialError || null);
    
    const handleRefresh = async () => {
        const { responseData, error } = await callingRandomUser();
        if (error)
          setHandleError(error)
        
        if(responseData)
          setUserData(responseData);
    }
    
    if(handleError){
      return <ErrorHandler message={handleError} />;
    }

    if (!data) {
        return (
        <div>Loading...</div>
      );
    }


    const date = new Date(data.data.dob.date);
    let getDOB = `${date.getDate()} ${date.toLocaleString("en-US", {
        month: "long",
    })} , ${date.getFullYear()}`;

    let getTimeZone = `${data.data.location.timezone.offset} ${
        data.data.location.timezone.description.split(",")[0]
    }`;

    let RegisteredDate = new Date(data.data.registered.date);
    let getRegisteredDate = `${RegisteredDate.getDate()} ${RegisteredDate.toLocaleString(
        "en-US",
        {month: "long"}
    )} , ${date.getFullYear()}`;
    return (
        <>
            <div className="flex justify-center items-center h-screen bg-black shadow-lg">
                <div className="w-[350px] h-[615px] rounded-lg border-8 border-x-white bg-violet-200 text-center">
                    <div className="flex justify-between">
                        <button
                            className="text-gray-800 font-bold py-2 px-4 rounded-l"
                            style={{cursor: "pointer"}}
                        >
                            &#x02190;
                        </button>
                        <h1 className="p-1 text-sm">Profile Overview</h1>
                        <button
                            className="text-gray-800 font-bold py-2 px-4 rounded-r"
                            style={{cursor: "pointer"}}
                            onClick={handleRefresh}
                        >
                            &#x21bb;
                        </button>
                    </div>
                    <figure className=" rounded-xl p-8 md:p-0 dark:bg-slate-800">
                        <img
                            className="md:w-28 md:h-auto rounded-full mx-auto"
                            src={data.data.picture.large}
                            alt=""
                            width="384"
                            height="512"
                        />
                        <div className="pt-2 text-center md:text-center space-y-2">
                            <h2>
                                <p className="text-xl font-bold">{`${data.data.name.first} ${data.data.name.last}`}</p>
                            </h2>
                            <h2 className="text-md font-semibold">
                                {data.data.login.username}
                            </h2>
                            <div className="border border-x-transparent border-gray-400 p-1  ">
                                <div
                                    className="flex justify-evenly"
                                    style={{cursor: "pointer"}}
                                >
                                    <button
                                        className="flex items-center text-gray-800 font-bold py-2 px-4 rounded-l"
                                        onClick={() =>
                                            window.open(
                                                `http://maps.google.com/?q=${data.data.location.coordinates.latitude},${data.data.location.coordinates.longitude}`,
                                                "_blank"
                                            )
                                        }
                                    >
                                        <div
                                            className="flex items-center justify-center w-8 h-8 mx-3 bg-black text-white rounded-full">
                                            <svg
                                                className="h-4 w-4 "
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                        Location
                                    </button>
                                    <button
                                        className="flex items-center text-gray-800 font-bold py-2 px-4 rounded-r"
                                        onClick={() =>
                                            window.open(`tel: ${data.data.cell}`, "_blank")
                                        }
                                    >
                                        <div
                                            className="flex items-center justify-center w-8 h-8 mx-3 bg-black text-white rounded-full">
                                            <svg
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinejoin="round"
                                            >
                                                {" "}
                                                <path
                                                    d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                            </svg>
                                        </div>
                                        Call me
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-rows-3 grid-flow-col gap text-sm text-left ">
                                <div className="m-2 h-12  ">
                                    City
                                    <div className="text-base font-bold">
                                        {data.data.location.city}
                                    </div>
                                </div>
                                <div className=" m-2 h-12">
                                    Date of birth
                                    <div>
                                        <div className="text-base font-bold text-wrap">
                                            {getDOB}
                                        </div>
                                    </div>
                                </div>
                                <div className=" m-2 h-12">
                                    Timezone
                                    <div>
                                        <div className="text-base font-bold">{getTimeZone}</div>
                                    </div>
                                </div>
                                <div className=" m-2 h-12">
                                    Nationality
                                    <div>
                                        <div className="text-base font-bold">
                                            {data.data.location.country}
                                        </div>
                                    </div>
                                </div>
                                <div className=" m-2 h-12">
                                    Phone No.
                                    <div>
                                        <div className="text-base font-bold">{data.data.cell}</div>
                                    </div>
                                </div>
                                <div className="m-2 h-12">
                                    Registered Since
                                    <div>
                                        <div className="text-base font-bold">
                                            {getRegisteredDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="md:w-14 md:h-auto mx-64 rounded-xl"
                                src="https://play-lh.googleusercontent.com/lCcbo_ss7BmepxbHvWwTB3nyWwXDlMDOKcufUcjvury4Pbq_l8SH-WHUrJYYKu0bpag=w240-h480-rw"
                                alt="Logo"
                                style={{cursor: "pointer"}}
                                target="_blank"
                                onClick={() => window.open("https://chaicode.com/", "_blank")}
                            />
                            <div className="text-slate-50 text-sm">&copy; chai aur code</div>
                        </div>
                    </figure>
                </div>
            </div>
        </>
    );
}

export default RandomUser;

export const callingRandomUser = async () => {
    try {
        const response = await fetch(import.meta.env.VITE_RANDOM_USER_URI)
        const JSON = await response.json();
        if (!JSON.success)
          throw new Error(`HTTP error!! ${JSON.statusCode}`);

        
        return { responseData: JSON, error: null }
    } catch (error) {
        return { responseData: null, errorData: 'Something went wrong' };
    }
};
