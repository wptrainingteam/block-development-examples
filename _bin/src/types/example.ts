export interface Example {
	slug: string;
	name: string;
	description: string;
	tags: string[];
	contributors?: string[];
	folder?: string;
	id?: string;
	created?: string;
	lastModified?: string;
}

export interface Tag {
	slug: string;
	name: string;
}

export interface ProcessedTags {
	[ key: string ]: string;
}
