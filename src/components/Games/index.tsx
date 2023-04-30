import { Scooter } from "../../assets/icons/";
import Icon from "../Icon";
import Loading from "./Loading";
import Vespa from "./Vespa";

const Games = () => {
	return (
		<div>
			<Icon
				label={"Vespa City"}
				img={Scooter}
				children={<Vespa />}
				variant="black"
			/>
		</div>
	);
};

export default Games;
