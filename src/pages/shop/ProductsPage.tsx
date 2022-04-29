import { Container, CircularProgress, Grid } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { ProductBlock } from "../../components/shop/ProductBlock";
import { Product } from "../../store/types/shopTypes";
import * as shopActionCreators from "../../store/action/shopActionCreators";
import { Basket } from "../../components/shop/Basket";
import { OrderFormModal } from "../../components/shop/OrderFormModal";

export function ProductsPage() {

    const { products, error, loading } = useTypedSelector(state => state.shop.products)
    const { fetchProducts, addToBasket } = useActions(shopActionCreators)

    useEffect(() => {
        fetchProducts()
    }, [])

    const handleAddToBasket = useCallback(
        (product: Product) => {
            addToBasket(product);
        },
        [addToBasket]
    );
    if (loading) {
        return (
            <Container maxWidth="xl">
                <div style={{ padding: "16px", display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </div>
            </Container>
        )
    }
    if (error) {
        return (
            <div>{error}</div>
        )
    }
    return (
        <div>
            <Container maxWidth="xl">
                <Basket></Basket>
                <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                    {products?.map((product) => (
                        <Grid item lg={3} md={4} xs={12} sm={6} key={product.id}>
                            <ProductBlock
                                product={product}
                                onAddToBasket={() => handleAddToBasket(product)}
                            ></ProductBlock>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <OrderFormModal></OrderFormModal>
        </div>
    )
}