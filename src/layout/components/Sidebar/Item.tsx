import "./item.scss";

import { toRefs } from "vue";
export default {
	name: "MenuItem",
	props: {
		icon: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: ""
		}
	},
	setup(props: any) {
		const { icon, title } = toRefs(props);
		const iconData = icon.value;
		const titleData = title.value;
		return () => {
			const vnodes = [];

			if (iconData) {
				if (iconData.includes("el-icon")) {
					vnodes.push(<i class={[iconData, "sub-el-icon"]} />);
				} else {
					vnodes.push(<svg-icon icon-class={iconData} />);
				}
			}

			if (titleData) {
				vnodes.push(<span>{titleData}</span>);
			}
			return vnodes;
		};
	}
};
