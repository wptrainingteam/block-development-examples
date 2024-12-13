export interface TableGenerationConfig {
	slug?: string;
	readmePath: string;
	options?: TableOptions;
	urls: UrlConfig;
}

export interface TableOptions {
	includeTags?: boolean;
	includeDescription?: boolean;
	includeLinks?: boolean;
}

export interface UrlConfig {
	wiki: string;
	assets: string;
	repo: string;
	exampleZip: string;
	playground: {
		base: string;
		withGutenberg: string;
		blueprint: string;
	};
}
