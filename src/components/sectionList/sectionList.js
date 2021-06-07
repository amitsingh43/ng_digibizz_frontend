import { useDispatch, useSelector } from "react-redux";

import "styles/sectionList.css";
import { increment } from "store/actions";
import VerticalList from "./verticalList";
import HorizontalSectionList from "./horizontalSectionList";

export default function SectionList(props) {
	const { section } = props;
	const questionsList=useSelector(state=>state.questionsList);
	const dispatch=useDispatch();

	const incrementCount=function (val) {
		dispatch(increment(val));
	}
	return (
		<div className="section-main col-xs-12">
			<VerticalList
				increment={incrementCount}
				questionsList={questionsList}
				section={section}
			/>
			<HorizontalSectionList
				increment={incrementCount}
				questionsList={questionsList}
				section={section}
			/>
			<img className="contest-banner" src={props.contest_banner} alt="" />
		</div>
	);
}