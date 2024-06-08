'use client'

import { useSelectedTag } from '@/providers/selectedTagProvider'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { useMemo } from 'react'
import { TagsGroup } from './TagsGroup'

interface Props {
	pages: any[]
	project?: any
	accentColor?: string
}

export const Hero = ({ project, pages, accentColor }: Props) => {
	const { selectedTag } = useSelectedTag()

	const tags = useMemo(() => pages.reduce((acc, page) => [...acc, ...(page?.tags ?? [])], []), [pages])

	return (
		<Flex
			bgColor={project?.heroBackgroundColor ?? 'gray.50'}
			justify="center"
			align="center"
			p={{ base: '40px', md: '80px', lg: '120px' }}
			direction="column"
			w="100%"
			h="fit-content"
		>
			<Heading
				textAlign="center"
				as="h1"
				fontSize={{ base: '3xl', lg: '4xl' }}
				fontWeight="bold"
				lineHeight="1.2"
				mb="4"
			>
				{project?.subtitle}
			</Heading>
			<Text fontSize="lg" color="gray.500" mb="4" textAlign="center">
				{project?.description}
			</Text>
			<TagsGroup tags={tags ?? []} activeTag={selectedTag} accentColor={accentColor} />
		</Flex>
	)
}
