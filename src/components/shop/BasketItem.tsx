
import { Product } from "../../store/types/shopTypes"


import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
const Item = styled("div")`
	padding: 12px 16px;
	background: rgb(255, 255, 255);
	margin-bottom: 8px;
`;
const Top = styled("div")`
	display: flex;
	border-bottom: 1px solid rgb(226, 226, 233);
	padding-bottom: 12px;
	margin-bottom: 12px;
`;
const Img = styled("img")`
	width: 64px;
	height: 64px;
	flex: 0 0 auto;
	margin: 0px 16px 0px 0px;
`;
const ProductTitle = styled("h3")`
	font-weight: 600;
	font-size: 16px;
	margin: 0 0 4px;
`;
const Description = styled("p")`
	color: rgb(92, 99, 112);
	margin: 0px;
	white-space: pre-wrap;
	text-overflow: ellipsis;
	font-size: 12px;
`;
const Bottom = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Price = styled("h3")`
	font-size: 16px;
	font-weight: 600;
	margin: 0;
`;
const CountBlock = styled("div")`
	background-color: rgb(243, 243, 247);
	box-sizing: border-box;
	border-radius: 9999px;
	width: 96px;
	height: 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 8px;
`;


type Props = {
    product: Product,
    count: number,
    onRemoveProduct: () => void,
    onDecrementProduct: () => void,
    onIncrementProduct: () => void,
}
export const BasketItem: React.FC<Props> = ({ product, count, onDecrementProduct, onIncrementProduct, onRemoveProduct }) => {
    return (
        <Item>
            <Top>
                <Img src={product.image} alt="Product" />
                <div>
                    <ProductTitle>{product.title}</ProductTitle>
                    <Description>{product.description}</Description>
                </div>
            </Top>
            <Bottom>
                <Price>{product.price} $</Price>
                <CountBlock>
                    <RemoveIcon
                        sx={{ cursor: "pointer", color: "#ccd" }}
                        onClick={() => onDecrementProduct()}
                    ></RemoveIcon>
                    {count}
                    <AddIcon
                        sx={{ cursor: "pointer", color: "#ccd" }}
                        onClick={() => onIncrementProduct()}
                    ></AddIcon>
                </CountBlock>
            </Bottom>
            {/* кнопка для удаления
			<div
				style={{
					display: "flex",
					alignItems: "center",
					width: "40%",
					justifyContent: "flex-end",
				}}
			>
				<DeleteIcon
					sx={{ cursor: "pointer", color: "red" }}
					onClick={onRemoveProduct}
				></DeleteIcon>
			</div> */
			/* инпут для количества
			<TextField
			sx={{ width: "70px" }}
			value={count}
			onChange={(e) => {
				onChangeCount(product.id, e.target.value);
			}}
		/> */}
        </Item>
    )
}