import MainLayout from "@/layouts/MainLayout";
import axios from "axios";
import { useState } from "react";

export default function HomePage() {
	const apiUri = import.meta.env.VITE_API_BASE_URI;
	const [msg, setMsg] = useState("");

	const callSampleApi = async () => {
		axios
			.get(apiUri + "/sample")
			.then((res) => {
				console.log(res.data);
				setMsg("Call Sample API successfully!");
			})
			.catch((err) => {
				console.log(err);
				setMsg("Call Sample API failed!");
			});
	};

	const handleCallAPI = () => {
		setMsg("Calling API...");
		callSampleApi();
	};

	return (
		<MainLayout>
			<h2>Home Page</h2>
			<p>This is Home Page</p>
			<p>API base URI: {apiUri}</p>
			<button onClick={handleCallAPI}>Click to call API</button>
			{msg && <p>Result: {msg}</p>}
		</MainLayout>
	);
}
