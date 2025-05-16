import { Link } from "react-router-dom";

export default function TitleBar(props){
    return<>
        <div className="title-bar container mb-0 pb-0">
			<h5 className="title font-w800 mb-0">{props.title}</h5>
			<Link to={`/products`} className="a-title">See more</Link>
		</div>
    
    </>
}