export default function Main({ extraClass, children }) {
    return extraClass ? (
        <main className={ extraClass }>{ children }</main>
    ) : (
        <main>{ children }</main>
    )
}
