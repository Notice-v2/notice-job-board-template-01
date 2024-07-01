'use client'

import { CreatedWithNotice } from '@notice-org/renderer-helper'

interface Props {
	shouldHide?: boolean
}

export const NoticeLabel = ({ shouldHide }: Props) => {
	return <CreatedWithNotice shouldHide={shouldHide} />
}
