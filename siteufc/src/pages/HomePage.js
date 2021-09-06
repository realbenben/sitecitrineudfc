import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import WallPaper from '../components/WallPaper'

const HomePage = () => {
    return (
        <div className="home">
            <Navigation />
            {/* <Logo />  */}
            <WallPaper />
        </div>
    )
}
export default HomePage
