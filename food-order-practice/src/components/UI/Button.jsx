export default function Button({children, textOnly, className, ...props}) {
    const style = textOnly ? `text-button ${className}` : `button ${className}`;

    return (<button className={style} {...props}>
        {children}
    </button>);
}