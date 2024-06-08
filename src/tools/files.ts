interface ConvertedFileObject {
	fieldname: string
	originalname: string
	encoding: string
	mimetype: string
	buffer: Uint8Array
	size: number
}

export function convertFileToObject(file: File): Promise<ConvertedFileObject> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()

		reader.onload = function (e) {
			const arrayBuffer = e.target?.result as ArrayBuffer
			const buffer = new Uint8Array(arrayBuffer)

			const convertedFileObject: ConvertedFileObject = {
				fieldname: 'file',
				originalname: file.name,
				encoding: '7bit', // Typically, this is '7bit' for file uploads
				mimetype: file.type,
				buffer: buffer,
				size: file.size,
			}

			resolve(convertedFileObject)
		}

		reader.onerror = function (error) {
			reject(error)
		}

		reader.readAsArrayBuffer(file) // Read the file as an array buffer
	})
}
