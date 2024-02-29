import logoUrl from '../assets/img/toys-logo.jpg'

export function HomePage() {
    return (
        <section className="home-layout">
            <h2>Welcome to Mister Toy!</h2 >
            <img src={logoUrl} />
        </section >
    )
}