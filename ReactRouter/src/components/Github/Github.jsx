import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	fetch("https://api.github.com/users/Karan-Singh-Bisht")
	// 		.then((res) => res.json())
	// 		.then((data) => {
    //             console.log(data);
    //             setData(data)});
	// }, []);

	return (
		<div className="max-w-screen-xl relative mx-auto">
			<div className="w-full bg-gray-500 flex flex-col items-center justify-top gap-4 px-10 py-5">
				<h1 className="text-3xl text-white font-semibold">Name : {data.name}</h1>                
                <img className="object-cover h-[15vw] w-[15vw] rounded-md" src={data.avatar_url} alt="" />
			</div>
		</div>
	);
}

export default Github;

export const gitHubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/Karan-Singh-Bisht");
    return response.json();
}