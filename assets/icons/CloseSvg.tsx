import Svg, {G, Rect, SvgProps} from "react-native-svg";
import * as React from "react";

export const CloseSvg = (props: SvgProps) => (
	<Svg
		width={12.755}
		height={12.754}
		{...props}
	>
		<G
			data-name="Group 43356"
			transform="rotate(45 188.074 -152.6)"
			fill="#2b2b2b"
		>
			<Rect
				data-name="Rectangle 5003"
				width={2.038}
				height={16}
				rx={1.019}
				transform="translate(170.99 80.293)"
				opacity={0.5}
			/>
			<Rect
				data-name="Rectangle 5004"
				width={2.038}
				height={16}
				rx={1.019}
				transform="rotate(90 46.367 133.642)"
			/>
		</G>
	</Svg>
)
