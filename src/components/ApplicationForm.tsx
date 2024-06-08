'use client'

import { EMAIL_API, generateEmailTemplate } from '@/tools/email'
import { convertFileToObject } from '@/tools/files'
import { validateFormData } from '@/tools/form'
import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	Tooltip,
	useDisclosure,
	useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FileUploader } from './FileUploader'

interface Props {
	projectId: string
	title: string
}

interface FormData {
	firstName: string
	lastName: string
	email: string
	phoneNumber: string
	message: string
	file: File | null
}

export const ApplicationForm = ({ title, projectId }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const toast = useToast()

	const [formData, setFormData] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		message: '',
		file: null,
	})

	const [onError, setOnError] = useState('')
	const [loading, setLoading] = useState(false)

	const sendApplication = async () => {
		const { file } = formData

		validateFormData(formData, setOnError)

		try {
			setLoading(true)

			const convertedFileObject = await convertFileToObject(file!)
			const html = generateEmailTemplate(formData, title)

			const form = new FormData()
			form.append('html', html)
			form.append('projectId', projectId)
			form.append(
				'file',
				new Blob([convertedFileObject.buffer], { type: convertedFileObject.mimetype }),
				convertedFileObject.originalname
			)

			await EMAIL_API.post(`/user-email`, form, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				phoneNumber: '',
				message: '',
				file: null,
			})
			onClose()
			toast({ title: 'Application sent successfully', status: 'success', position: 'top-right' })
			setLoading(false)
		} catch (ex) {
			setLoading(false)
			return null
		}
	}

	return (
		<>
			<Button onClick={onOpen}> Apply</Button>

			<Modal
				size={{ base: 'full', sm: 'xl' }}
				isOpen={isOpen}
				onClose={onClose}
				isCentered
				motionPreset="slideInBottom"
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontSize="2xl">{`Apply for ${title} job`} </ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex
							py="12px"
							px={{ base: '4px', sm: '12px' }}
							gap="8px"
							w="100%"
							h="fit-content"
							direction="column"
							align="center"
						>
							<Flex direction={{ base: 'column', sm: 'row' }} gap="8px" align="center" w="100%">
								<FormControl>
									<FormLabel fontSize="12px">First Name</FormLabel>
									<Tooltip
										placement="top"
										hasArrow
										label="Please enter your first name"
										bg="red.600"
										isOpen={onError === 'firstName'}
									>
										<Input
											type="text"
											placeholder="John"
											onFocus={() => onError === 'firstName' && setOnError('')}
											onChange={(e) => setFormData((data) => ({ ...data, firstName: e.target.value }))}
										/>
									</Tooltip>
								</FormControl>
								<FormControl>
									<FormLabel fontSize="12px">Last Name</FormLabel>
									<Tooltip
										placement="top"
										hasArrow
										label="Please enter your last name"
										bg="red.600"
										isOpen={onError === 'lastName'}
									>
										<Input
											type="text"
											placeholder="Doe"
											onFocus={() => onError === 'lastName' && setOnError('')}
											onChange={(e) => setFormData((data) => ({ ...data, lastName: e.target.value }))}
										/>
									</Tooltip>
								</FormControl>
							</Flex>
							<Flex direction={{ base: 'column', sm: 'row' }} gap="8px" align="center" w="100%">
								<FormControl>
									<FormLabel fontSize="12px">E-Mail</FormLabel>
									<Tooltip
										placement="top"
										hasArrow
										label={onError === 'email' ? 'Please enter your e-mail' : 'Please enter a valid e-mail'}
										bg="red.600"
										isOpen={onError === 'email' || onError === 'validEmail'}
									>
										<Input
											type="email"
											placeholder="xxxx@mail.com"
											onFocus={() => (onError === 'email' || onError === 'validEmail') && setOnError('')}
											onChange={(e) => setFormData((data) => ({ ...data, email: e.target.value }))}
										/>
									</Tooltip>
								</FormControl>
								<FormControl>
									<FormLabel fontSize="12px">Phone Number</FormLabel>
									<Tooltip
										placement="top"
										hasArrow
										label="Please enter your phone number"
										bg="red.600"
										isOpen={onError === 'phoneNumber'}
									>
										<Input
											type="tel"
											pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
											placeholder="+33 06 03 03 03 03"
											onFocus={() => onError === 'phoneNumber' && setOnError('')}
											onChange={(e) => setFormData((data) => ({ ...data, phoneNumber: e.target.value }))}
										/>
									</Tooltip>
								</FormControl>
							</Flex>
							<Tooltip
								placement="top"
								hasArrow
								label="Please upload your resume"
								bg="red.600"
								isOpen={onError === 'file'}
							>
								<Flex
									w="100%"
									bg="#F0F3FB"
									direction="column"
									p="24px"
									my={'8px'}
									border="1px dashed #3982CF"
									cursor={'pointer'}
									borderRadius="6px"
									onClick={() => onError === 'file' && setOnError('')}
								>
									<FileUploader
										file={formData.file}
										onFileUpload={(file) => setFormData((data) => ({ ...data, file: file }))}
										onFileDelete={() => setFormData((data) => ({ ...data, file: null }))}
									/>
								</Flex>
							</Tooltip>
							<FormControl>
								<FormLabel fontSize="12px">Write a message for recruiter</FormLabel>
								<Textarea
									height="150px"
									placeholder="Write a cover letter or a message for the recruiter here about why you are the best fit for this job or what interests you in this job."
									size="sm"
									resize={'none'}
									onChange={(e) => setFormData((data) => ({ ...data, message: e.target.value }))}
								/>
							</FormControl>
						</Flex>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={sendApplication} isLoading={loading}>
							Apply
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
