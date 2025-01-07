export class BaseError extends Error {
	constructor( message: string ) {
		super( message );
		this.name = this.constructor.name;
	}
}

export class FileOperationError extends BaseError {
	constructor( operation: string, path: string, originalError: Error ) {
		super(
			`Failed to ${ operation } file at ${ path }: ${ originalError.message }`
		);
	}
}

export class ValidationError extends BaseError {
	constructor( message: string ) {
		super( `Validation failed: ${ message }` );
	}
}

export class TableGenerationError extends BaseError {
	constructor( message: string, originalError?: Error ) {
		super(
			`Table generation failed: ${ message }${
				originalError ? ` (${ originalError.message })` : ''
			}`
		);
	}
}
