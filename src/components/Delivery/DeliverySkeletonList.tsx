import { DeliverySkeleton } from './DeliverySkeleton'

export const DeliverySkeletonList = () => {
	return (
		<>
			{[...new Array(8)].map((_, i) => <DeliverySkeleton key={i} />)}
		</>
	)
}
