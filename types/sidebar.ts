export interface SubLink {
	label: string;
	route: string;
}

export interface Link {
	label: string;
	route: string;
	Icon: React.FunctionComponent;
	sublinks?: SubLink[];
}
