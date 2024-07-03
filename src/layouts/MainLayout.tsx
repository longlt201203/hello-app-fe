import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export default function MainLayout({ children }: PropsWithChildren) {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
			<h1>Main Layout</h1>
			<div>{children}</div>
		</div>
	);
}
