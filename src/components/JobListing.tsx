'use client'

import { useSelectedTag } from '@/providers/selectedTagProvider'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { JobCard } from './JobCard'

interface Props {
	pages: any[]
	accentColor?: string
}

export const JobListing = ({ pages, accentColor }: Props) => {
	const { selectedTag } = useSelectedTag()
	const ref = useRef(null)
	const isInView = useInView(ref)

	const filteredArticles = useMemo(
		() =>
			selectedTag === 'All'
				? pages
				: pages.filter((page) => {
						return page?.tags?.includes(selectedTag)
				  }),
		[pages, selectedTag]
	)

	const container = {
		hidden: { opacity: isInView ? 1 : 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	return (
		<Box
			as={motion.div}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			boxSizing="border-box"
			mx="auto"
			mb="10px"
			p="24px"
			w="100%"
			h="fit-content"
			maxW="960px"
			layout
			layoutRoot
		>
			<Heading
				id="all-posts"
				flexShrink={0}
				fontWeight="bold"
				as="h1"
				fontSize={{ base: 'xl', lg: '2xl' }}
				color="blackAlpha.800"
			>
				{selectedTag === 'All' ? 'Latest' : selectedTag?.charAt(0).toUpperCase() + selectedTag?.slice(1)} Jobs
			</Heading>
			<Flex
				direction="column"
				ref={ref}
				as={motion.div}
				variants={container}
				initial={isInView ? 'show' : 'hidden'}
				whileInView="show"
				viewport={{ once: true }}
				gap="24px"
				justifyContent="stretch"
				w="100%"
			>
				{filteredArticles.map((page) => (
					<JobCard key={page._id} page={page} accentColor={accentColor} />
				))}
			</Flex>
		</Box>
	)
}
