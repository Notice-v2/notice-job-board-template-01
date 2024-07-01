'use client'

import { DEFAULT_COLOR } from '@/utils/theme'
import { Link } from '@chakra-ui/next-js'
import { Avatar, Flex, HStack, Heading, Tag, Text } from '@chakra-ui/react'
import { useIsHovered } from '@notice-org/renderer-helper'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useMemo, useRef } from 'react'

dayjs.extend(relativeTime)

interface Props {
	page: any
	accentColor?: string
}

export const JobCard = ({ page, accentColor }: Props) => {
	const primaryTag = useMemo(() => {
		const tag = page?.tags?.[0]
		if (!tag) return undefined
		return tag.charAt(0).toUpperCase() + tag.slice(1)
	}, [page?.tags])

	const postDate = dayjs(page?.createdAt)
	const sinceDate = postDate.fromNow()

	const ref = useRef<HTMLDivElement>(null)
	const isHovered = useIsHovered([ref]).some(Boolean)

	return (
		<Link
			_hover={{ textDecoration: 'none', bgColor: 'gray.50' }}
			variant="unstyled"
			href={page?.slug || page?._id}
			transition={'all 0.3s ease'}
		>
			<Flex
				w="100%"
				h="fit-content"
				p={{ base: '12px', md: '16px', lg: '24px' }}
				border="1px solid #EFEFEF"
				direction={{ base: 'column', md: 'row' }}
				justify={'space-between'}
				align="center"
				gap={{ base: '12px', md: '16px', lg: '24px' }}
				borderRadius="6px"
				ref={ref}
			>
				<HStack gap="12px" justify="center" align="center">
					<Avatar size={{ base: 'md', md: 'lg', lg: 'xl' }} name={page?.title} src={page?.coverImage} />
					<Flex gap={{ base: '4px', md: '8px' }} direction="column" justify="center" align="flex-start">
						<Heading
							as="h1"
							fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
							lineHeight={1.1}
							fontWeight="bold"
							color="blackAlpha.800"
							noOfLines={1}
							textDecoration={isHovered ? 'underline' : 'none'}
						>
							{page?.title}
						</Heading>

						<Text noOfLines={2} color="blackAlpha.600" fontSize={{ base: 'sm', md: 'sm', lg: 'md' }}>
							{page?.description ?? ''}
						</Text>

						<HStack gap={{ base: '4px', md: '8px' }} justify="start" align="center" wrap="wrap">
							{page?.tags?.map((tag: string) => (
								<Tag size="sm" variant="solid" bg={accentColor ?? DEFAULT_COLOR} color="white">
									{tag.charAt(0).toUpperCase() + tag.slice(1)}
								</Tag>
							))}
						</HStack>
					</Flex>
				</HStack>
				<Text flexShrink={0} fontSize="xs" color="gray.500">
					{sinceDate}
				</Text>
			</Flex>
		</Link>
	)
}
