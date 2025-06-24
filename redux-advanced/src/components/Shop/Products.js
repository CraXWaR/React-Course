import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [{
    id: 'p1', price: 6, title: 'My First Book', description: 'The first book I ever wrote',
}, {
    id: 'p2', price: 12, title: 'Adventures in Code', description: 'A fun dive into JavaScript adventures.',
}, {
    id: 'p3', price: 9, title: 'CSS Secrets', description: 'Tips and tricks for mastering modern CSS.',
}, {
    id: 'p4', price: 15, title: 'HTML Handbook', description: 'Everything you need to know about HTML5.',
}, {
    id: 'p5', price: 8, title: 'The Debugging Diary', description: 'Real stories of bugs and how to fix them.',
}, {
    id: 'p6', price: 10, title: 'Git for Humans', description: 'An easy introduction to version control.',
}, {
    id: 'p7', price: 7, title: 'React Ready', description: 'Get started with building UIs using React.',
}, {
    id: 'p8', price: 11, title: 'Node.js Notes', description: 'Backend basics and building APIs with Node.',
},];

const Products = (props) => {
    return (<section className={classes.products}>
        <h2>Buy your favorite products</h2>
        <ul>
            {DUMMY_PRODUCTS.map(product => (<ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
            />))}
        </ul>
    </section>);
};

export default Products;
