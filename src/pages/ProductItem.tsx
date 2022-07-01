import React, { useEffect, useState } from "react"
import { SectionLabel } from "../components/sectionLabel/SectionLabel"
import axios from "axios"
import { useParams } from "react-router-dom"
import { CommentariesBlock } from "../components/Commentaries/CommentariesBlock"
import { CreateCommentary } from "../components/Commentaries/CreateCommentary"
import { CommentariesList } from "../components/Commentaries/CommentariesList"
import { useAppSelector } from "../hooks/redux-hooks"
import { Loader } from "../components/Loader/Loader"
import { IProduct } from "../types/deliveryTypes"
import { IComments } from "../types/commentariesTypes"



export const ProductItem: React.FC = () => {
	const [product, setProduct] = useState<IProduct>()
	const [comments, setComments] = useState<IComments[]>()
	const [comment, setComment] = useState<string>('')
	const params = useParams()
	useEffect(() => {
		window.scrollTo(0, 0)
		fetchSingleProduct()
	}, [])


	const fetchSingleProduct = async () => {
		const response = await axios.get('https://62965300810c00c1cb73a6b4.mockapi.io/products/' + params.id)
		setProduct(response.data)
		const identificator = response.data.name.split(' ').join('')
		const response1 = await axios.get('https://62965300810c00c1cb73a6b4.mockapi.io/comments?item=' + identificator)
		setComments(response1.data)
	}
	const loader = useAppSelector(state => state.loader.isLoader)

	return (
		<section className="singleitem">
			<div className="container">
				<SectionLabel title="Product" subtitle="Product" />
				<CommentariesBlock product={product} />
				{comments?.length !== 0 ? <div className="singleitem-review-label">Отзывы</div>
					: <div className="singleitem-review-label">Пока нет отзывов</div>}
				<CommentariesList commentaries={comments} params={params.id} setComments={setComments} />
				<CreateCommentary comment={comment} setComment={setComment}
					setComments={setComments} id={product?.id} name={product?.name} params={params.id} item={product?.name.split(' ').join('')} />
			</div>
			{loader && <Loader />}
		</section>
	)
}
