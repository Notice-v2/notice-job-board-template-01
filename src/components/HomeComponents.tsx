'use client'

import { Box } from '@chakra-ui/react'
import { Hero } from './Hero'
import { JobListing } from './JobListing'

interface Props {
	data: any
}

export const HomeComponents = ({ data }: Props) => {
	return (
		<Box>
			<Box as="section">
				<Hero project={data?.project} pages={data?.pages} accentColor={data?.project?.accentColor} />
			</Box>
			<Box mt={{ base: '40px', lg: '36px' }} as="section">
				<JobListing pages={data?.pages} accentColor={data?.project?.accentColor} />
			</Box>
		</Box>
	)
}
