import Banner from './banner/Banner'
import Card from './hero/Card'
import Hero from './hero/Hero'
import Product from './product/Product'
import TopProduct from './topproduct/TopProduct'

export default function Home() {
    return (
        <>
            <Hero />
            <Card />
            <Product />
            <Banner />
            <TopProduct />
        </>
    )
}

