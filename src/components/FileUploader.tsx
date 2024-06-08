import { Button, CloseButton, Flex, HStack, Text, Tooltip, useToast } from '@chakra-ui/react'
import { ChangeEvent, DragEvent, useRef } from 'react'
import { FileIcon } from '../icons'

interface Props {
	onFileUpload: (file: File) => void
	onFileDelete?: () => void
	file: File | null
}

export const FileUploader = ({ onFileUpload, file, onFileDelete }: Props) => {
	const inputFile = useRef<HTMLInputElement | null>(null)
	const acceptedTypes = [
		'application/pdf',
		'application/msword',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	]

	const toast = useToast()

	const OpenFileSelector = () => {
		inputFile.current?.click()
	}

	const handleDrag = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
	}

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()

		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			if (e.dataTransfer.files[0].size > 6291456) {
				toast({ title: 'File size too big, Must be under 6MB.', status: 'error', position: 'top-right' })
			} else if (!acceptedTypes.includes(e.dataTransfer.files[0].type)) {
				toast({ title: 'File type not supported.', status: 'error', position: 'top-right' })
			} else {
				onFileUpload(e.dataTransfer.files[0])
			}
		}
	}

	const handleFileSelection = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		e.stopPropagation()

		if (e.target.files && e.target.files[0]) {
			if (e.target.files[0].size > 6291456) {
				toast({ title: 'File size too big, Must be under 6MB.', status: 'error', position: 'top-right' })
			} else if (!acceptedTypes.includes(e.target.files[0].type)) {
				toast({ title: 'File type not supported.', status: 'error', position: 'top-right' })
			} else {
				onFileUpload(e.target.files[0])
			}
		}
	}

	return (
		<>
			{file === null ? (
				<Flex
					direction={'column'}
					justifyContent="center"
					alignItems="center"
					gap="12px"
					mx="24px"
					px="24px"
					onDragEnter={handleDrag}
					onDragLeave={handleDrag}
					onDragOver={handleDrag}
					onDrop={handleDrop}
					onClick={OpenFileSelector}
				>
					<input
						onChange={handleFileSelection}
						accept={acceptedTypes.join(', ')}
						type="file"
						id="file"
						ref={inputFile}
						style={{ display: 'none' }}
					/>
					<HStack gap={4}>
						<Text color="#3982CF" fontWeight="600" textAlign="center">
							{'Drop your file here to upload or'}
						</Text>
					</HStack>
					<Text color="#3982CF" fontSize="12px">
						Accepted Files : PDF, DOC, DOCX
					</Text>
					<Button
						color={'white'}
						bgColor={'#3982CF'}
						size="sm"
						onClick={(e) => {
							e.stopPropagation()
							OpenFileSelector()
						}}
					>
						Browse files
					</Button>
				</Flex>
			) : (
				<Flex direction={'row'} justifyContent="center" alignItems="center" gap="8px" mx="24px" px="24px">
					<Tooltip placement="top" label="Remove file" aria-label="Remove file">
						<CloseButton size={'xs'} color="red" onClick={onFileDelete} />
					</Tooltip>
					<FileIcon size={16} color="#3982CF" />
					<Text color="#3982CF" fontSize="12px">
						{file?.name}
					</Text>
				</Flex>
			)}
		</>
	)
}
