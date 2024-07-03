import RootLayout from "@/layouts/RootLayout";
import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);

export default router;
