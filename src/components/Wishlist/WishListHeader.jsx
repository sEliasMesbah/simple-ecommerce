import { Link } from "react-router-dom";

export default function WishListHeader() {
	return <>
		<header className="header shadow header-fixed border-0">
			<div className="container">
				<div className="header-content">
					<div className="left-content">
						<Link to="/home" className="back-btn">
							<i className="icon feather icon-chevron-left"></i>
						</Link>
						<h6 className="title">Wishlist</h6>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content">
					</div>
				</div>
			</div>
		</header>
	</>
}