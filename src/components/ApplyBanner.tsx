import { Avatar, VStack } from '@chakra-ui/react'
import { useMemo } from 'react'
import { ApplicationForm } from './ApplicationForm'

interface Props {
	meta: any
	projectId: string
	title: string
}

export const ApplyBanner = ({ meta, title, projectId }: Props) => {
	const companyName = useMemo(
		() =>
			meta?.find((m: any) => m.tagName === 'meta' && m.attributes?.property === 'og:site_name')?.attributes?.content,
		[meta]
	)
	const icon = useMemo(
		() => meta?.find((m: any) => m.tagName === 'link' && m.attributes?.rel === 'icon')?.attributes?.href,
		[meta]
	)

	return (
		<VStack
			justifyContent="center"
			align="center"
			maxW="235px"
			gap={8}
			p="36px"
			borderRadius="8px"
			flexGrow={0}
			flexBasis="min-content"
			boxShadow=" rgba(0, 0, 0, 0.18) 0px 2px 4px"
		>
			<Avatar name={companyName} src={icon} size="2xl" />
			<ApplicationForm title={title} projectId={projectId} />
		</VStack>
	)
}
