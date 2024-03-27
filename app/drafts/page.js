const draftTableData = [
    {
        refNo: "2938389294284374",
        compDetails: "Oshell Kaniuelly SIksy Directive Limited {12th floor, Daine Horne Street, Lagos. BNEEM",
        status: "Draft",
        dateStarted: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        refNo: "2938389294284374",
        compDetails: "Oshell Kaniuelly SIksy Directive Limited {12th floor, Daine Horne Street, Lagos. BNEEM",
        status: "Draft",
        dateStarted: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        refNo: "2938389294284374",
        compDetails: "Oshell Kaniuelly SIksy Directive Limited {12th floor, Daine Horne Street, Lagos. BNEEM",
        status: "Draft",
        dateStarted: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        refNo: "2938389294284374",
        compDetails: "Oshell Kaniuelly SIksy Directive Limited {12th floor, Daine Horne Street, Lagos. BNEEM",
        status: "Draft",
        dateStarted: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        refNo: "2938389294284374",
        compDetails: "Oshell Kaniuelly SIksy Directive Limited {12th floor, Daine Horne Street, Lagos. BNEEM",
        status: "Draft",
        dateStarted: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        refNo: "2938389294284374",
        compDetails: "Oshell Kaniuelly SIksy Directive Limited {12th floor, Daine Horne Street, Lagos. BNEEM",
        status: "Draft",
        dateStarted: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        refNo: "2938389294284374",
        compDetails: "Oshell Kaniuelly SIksy Directive Limited {12th floor, Daine Horne Street, Lagos. BNEEM",
        status: "Draft",
        dateStarted: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        refNo: "2938389294284374",
        compDetails: "Oshell Kaniuelly SIksy Directive Limited {12th floor, Daine Horne Street, Lagos. BNEEM",
        status: "Draft",
        dateStarted: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },
    {
        refNo: "2938389294284374",
        compDetails: "Oshell Kaniuelly SIksy Directive Limited {12th floor, Daine Horne Street, Lagos. BNEEM",
        status: "Draft",
        dateStarted: {
            date: "26/3/2024",
            time: "16:34:04"
        },
    },

];

const drafttableHeadData = ["Ref No", "Company Details", "Status", "Date started"]

const Drafts = () => {
    return (
        <div className="bg-gray-100 pt-12">
            <div className="w-[95%] m-auto pb-8">
                <h1 className="text-black font-bold">DRAFTS</h1>
                <p className="text-gray-600 text-sm">view all your drafted application below</p>
            </div>
                <div className="w-[95%] bg-white m-auto overflow-x-scroll lg:overflow-x-hidden z-[-10] rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead className={`text-xs uppercase bg-dark-gray text-gray-400 py-4`}>
                            <tr className="whitespace-nowrap">
                                {drafttableHeadData.map((data, index) =>
                                    <th key={index} scope="col" className="lg:px-6 px-4 py-3">
                                        {data}
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="">
                            {draftTableData.map((data, index) => {
                                const columns = Object.keys(data);
                                return (
                                    <tr key={index} className="even:bg-white odd:bg-gray-100">
                                        {columns.map((col, idx) =>
                                            col === "dateStarted" ?
                                                <td key={idx} className="text-center">
                                                    <p>{data.dateStarted.date}</p>
                                                    <p>{data.dateStarted.time}</p>
                                                </td> :
                                                <td key={idx}
                                                    className={`px-6 py-4 whitespace-nowrap ${col === "status" && ""}`}>
                                                    {data[col]}
                                                </td>
                                        )}
                                    </tr>
                                )
                            }

                            )}
                        </tbody>
                    </table>
                </div>
            </div>
    )
};

export default Drafts;