export interface Example {
	slug: string;
	description: string;
	tags: string[];
	[ key: string ]: any;
}

export interface Tag {
	slug: string;
	name: string;
}

export interface ProcessedTags {
	[ key: string ]: string;
}
